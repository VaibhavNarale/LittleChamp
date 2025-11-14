import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, 'src', 'assets', 'new-images');
const quality = 85; // WebP quality (0-100, higher is better)

// Get all image files
const files = fs.readdirSync(imagesDir);

// Filter for JPG and JPEG files only
const imageFiles = files.filter(file => {
  const ext = path.extname(file).toLowerCase();
  return ['.jpg', '.jpeg'].includes(ext);
});

console.log(`Found ${imageFiles.length} images to convert...\n`);

let converted = 0;
let errors = 0;

// Convert each image
imageFiles.forEach(async (file, index) => {
  try {
    const inputPath = path.join(imagesDir, file);
    const outputPath = path.join(imagesDir, file.replace(/\.(jpg|jpeg)$/i, '.webp'));

    // Get original file size
    const originalSize = fs.statSync(inputPath).size;

    // Convert to WebP
    await sharp(inputPath)
      .webp({ quality })
      .toFile(outputPath);

    // Get new file size
    const newSize = fs.statSync(outputPath).size;
    const reduction = ((1 - newSize / originalSize) * 100).toFixed(2);

    console.log(`✓ ${file} → ${path.basename(outputPath)}`);
    console.log(`  Size: ${(originalSize / 1024).toFixed(2)} KB → ${(newSize / 1024).toFixed(2)} KB (${reduction}% reduction)\n`);

    converted++;

    // Log summary when all conversions are done
    if (converted + errors === imageFiles.length) {
      console.log(`\n${'='.repeat(50)}`);
      console.log(`Conversion complete!`);
      console.log(`Successfully converted: ${converted}`);
      console.log(`Errors: ${errors}`);
      console.log(`${'='.repeat(50)}`);
    }
  } catch (err) {
    console.error(`✗ Error converting ${file}:`, err.message);
    errors++;
  }
});
