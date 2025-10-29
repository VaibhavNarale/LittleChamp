<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { initTemplateScripts, cleanupTemplateScripts } from '@/utils/initScripts'

// Import images
import mathImg from '@/assets/math-gamification.jpg'
import readingImg1 from '@/assets/reading-gamification-1.jpg'
import readingImg2 from '@/assets/reading-gamification-2.jpg'
import digitalImg from '@/assets/digital-learning-gamification.jpg'
import scienceImg from '@/assets/science-gamification.jpg'
import playImg from '@/assets/play-gamification.jpg'

// Blog posts data with full content
const blogPosts = ref([
  {
    id: 1,
    title: '5 Ways to Make Math Fun for Your Child at Home',
    excerpt: 'Discover creative strategies to transform math time into an exciting adventure! From kitchen measurements to outdoor counting games, learn how to integrate math seamlessly into your child\'s daily routine while building confidence and skills.',
    fullContent: `
      <p>Mathematics doesn't have to be intimidating! As parents, we can transform math from a dreaded subject into an exciting adventure. Here are five proven strategies to make math fun and engaging at home:</p>

      <h4>1. Kitchen Math Adventures</h4>
      <p>Turn cooking into a math lesson! Measuring ingredients teaches fractions, doubling recipes introduces multiplication, and timing dishes builds understanding of time. Let your child measure flour, count eggs, and calculate cooking times.</p>

      <h4>2. Math Scavenger Hunts</h4>
      <p>Create outdoor or indoor scavenger hunts that require solving math problems to find the next clue. Hide treats around the house with math puzzles leading to each location. This combines physical activity with mental exercise!</p>

      <h4>3. Board Games and Card Games</h4>
      <p>Games like Monopoly teach money management, Yahtzee builds probability understanding, and card games reinforce number recognition and addition. Make game night a weekly tradition!</p>

      <h4>4. Real-World Math Applications</h4>
      <p>Shopping trips are perfect for teaching budgeting, comparison shopping, and calculating discounts. Let your child help plan purchases within a budget and calculate savings during sales.</p>

      <h4>5. Math Apps and Online Games</h4>
      <p>Leverage technology with educational platforms like Mind Jr Group that offer interactive math games aligned with curriculum standards. These make practice feel like play while building essential skills.</p>

      <p><strong>Remember:</strong> The key is consistency and enthusiasm. When you show excitement about math, your child will mirror that attitude!</p>
    `,
    image: mathImg,
    date: '02 July, 2024',
    views: 203,
    comments: 11,
    category: 'Math Tips',
    tags: ['Math', 'Learning at Home', 'Parenting'],
    expanded: false
  },
  {
    id: 2,
    title: 'Building Reading Confidence: Tips for Reluctant Readers',
    excerpt: 'Does your child resist reading time? Learn proven techniques to spark a love of books! From choosing the right materials to creating cozy reading spaces, discover how to turn reluctant readers into enthusiastic bookworms who can\'t wait for story time.',
    fullContent: `
      <p>Turning a reluctant reader into an eager bookworm requires patience, strategy, and understanding. Here's how to build reading confidence:</p>

      <h4>1. Choose the Right Books</h4>
      <p>Let your child pick books about their interests - dinosaurs, sports, superheroes, or cooking. The content matters more than reading level initially. Graphic novels and comic books count as reading too!</p>

      <h4>2. Create a Cozy Reading Space</h4>
      <p>Designate a special reading nook with comfortable pillows, good lighting, and easy access to books. Make it inviting and distraction-free. Add stuffed animals or favorite toys as "reading buddies."</p>

      <h4>3. Read Aloud Together</h4>
      <p>Take turns reading pages or paragraphs. Use different voices for characters to make it entertaining. This models good reading habits and takes pressure off struggling readers.</p>

      <h4>4. Set Realistic Goals</h4>
      <p>Start with just 10-15 minutes daily. Use a reading chart with stickers to track progress. Celebrate small victories - finishing a chapter, reading a whole page independently, or learning new words.</p>

      <h4>5. Make Reading Interactive</h4>
      <p>Ask questions about the story, predict what happens next, or act out scenes. Use educational apps that combine reading with games and rewards to maintain engagement.</p>

      <h4>6. Be Patient and Positive</h4>
      <p>Never force reading or make it feel like punishment. If your child struggles with a word, gently help instead of correcting immediately. Praise effort over perfection.</p>

      <p><strong>Pro Tip:</strong> Your own reading habits matter! When children see parents reading for pleasure, they're more likely to view reading positively.</p>
    `,
    images: [readingImg1, readingImg2],
    date: '11 June, 2024',
    views: 103,
    comments: 5,
    category: 'Reading Tips',
    tags: ['Reading', 'Literacy', 'Confidence Building'],
    expanded: false
  },
  {
    id: 3,
    title: 'Screen Time Balance: A Parent\'s Guide to Digital Learning',
    excerpt: 'Navigate the digital age with confidence! Learn how to set healthy boundaries while leveraging educational technology. Discover the difference between passive screen time and active learning, plus get practical tips for creating a balanced tech routine for your child.',
    fullContent: `
      <p>In today's digital world, screens are unavoidable - but not all screen time is created equal. Here's how to create a healthy balance:</p>

      <h4>Understanding Active vs. Passive Screen Time</h4>
      <p><strong>Passive:</strong> Watching videos, scrolling feeds<br>
      <strong>Active:</strong> Educational games, interactive learning apps, creative digital tools</p>

      <h4>Setting Healthy Boundaries</h4>
      <ul>
        <li><strong>Age 2-5:</strong> 1 hour of quality programming daily</li>
        <li><strong>Age 6-12:</strong> 1-2 hours of recreational screen time, unlimited educational use under supervision</li>
        <li><strong>All ages:</strong> No screens 1 hour before bedtime</li>
      </ul>

      <h4>Maximizing Educational Screen Time</h4>
      <p>Choose platforms that offer:</p>
      <ul>
        <li>Curriculum-aligned content (like Mind Jr Group)</li>
        <li>Progress tracking and reporting</li>
        <li>Adaptive learning that adjusts to your child's level</li>
        <li>Interactive elements that require thinking, not just clicking</li>
      </ul>

      <h4>Creating Tech-Free Zones</h4>
      <p>Establish screen-free areas and times:</p>
      <ul>
        <li>Dining table during meals</li>
        <li>Bedrooms after bedtime</li>
        <li>Family game nights</li>
        <li>Outdoor play time</li>
      </ul>

      <h4>The 20-20-20 Rule for Eye Health</h4>
      <p>Every 20 minutes, have your child look at something 20 feet away for 20 seconds. This prevents eye strain and gives mental breaks.</p>

      <h4>Co-Viewing and Engagement</h4>
      <p>Especially for younger children, participate in their digital learning. Ask questions about what they're doing, celebrate achievements, and discuss what they've learned.</p>

      <p><strong>Bottom Line:</strong> Screen time isn't inherently bad. The key is intentionality, quality content, and balance with physical activity and face-to-face interaction.</p>
    `,
    image: digitalImg,
    date: '01 December, 2024',
    views: 45,
    category: 'Parenting Advice',
    tags: ['Screen Time', 'Digital Learning', 'Balance'],
    expanded: false
  },
  {
    id: 4,
    title: 'Science at Home: Easy Experiments That Teach Big Concepts',
    excerpt: 'Turn your kitchen into a laboratory! Explore simple, safe science experiments using everyday household items. From volcano eruptions to growing crystals, these hands-on activities make complex concepts tangible while fostering curiosity and critical thinking skills.',
    fullContent: `
      <p>Science comes alive when children can see, touch, and experience it! Here are five easy experiments using household items:</p>

      <h4>1. Baking Soda Volcano</h4>
      <p><strong>Teaches:</strong> Chemical reactions, acids and bases</p>
      <p><strong>Materials:</strong> Baking soda, vinegar, dish soap, food coloring, container</p>
      <p><strong>Method:</strong> Put 2 tbsp baking soda in container, add drops of dish soap and food coloring, then pour in vinegar and watch it erupt! Explain how the acid (vinegar) reacts with the base (baking soda) to create carbon dioxide gas.</p>

      <h4>2. Growing Sugar Crystals</h4>
      <p><strong>Teaches:</strong> Crystallization, solutions, patience</p>
      <p><strong>Materials:</strong> Sugar, water, jar, string, pencil</p>
      <p><strong>Method:</strong> Dissolve 3 cups sugar in 1 cup hot water. Tie string to pencil, suspend in jar with solution. Over 3-7 days, watch crystals form! Perfect for teaching molecular structure.</p>

      <h4>3. Egg in Vinegar Experiment</h4>
      <p><strong>Teaches:</strong> Chemical reactions, osmosis</p>
      <p><strong>Method:</strong> Place raw egg in jar of vinegar for 24-48 hours. The shell dissolves, leaving a translucent, bouncy egg. Explains calcium carbonate dissolution and semi-permeable membranes.</p>

      <h4>4. Rainbow Walking Water</h4>
      <p><strong>Teaches:</strong> Capillary action, color mixing</p>
      <p><strong>Materials:</strong> Cups, water, food coloring, paper towels</p>
      <p><strong>Method:</strong> Fill cups with colored water, connect with paper towel strips. Watch water "walk" and colors mix! Demonstrates how plants absorb water.</p>

      <h4>5. Static Electricity Butterfly</h4>
      <p><strong>Teaches:</strong> Static electricity, attraction/repulsion</p>
      <p><strong>Materials:</strong> Tissue paper, balloon</p>
      <p><strong>Method:</strong> Cut butterfly from tissue, rub balloon on hair, hold near butterfly - it will fly toward the balloon! Shows electrical charge principles.</p>

      <h4>Safety Tips:</h4>
      <ul>
        <li>Always supervise experiments</li>
        <li>Wear safety goggles when appropriate</li>
        <li>Use age-appropriate materials</li>
        <li>Discuss and explain what's happening</li>
      </ul>

      <p><strong>The Science Behind It:</strong> Hands-on experiments create lasting memories and deeper understanding than reading alone. They teach the scientific method: hypothesis, experimentation, observation, and conclusion.</p>
    `,
    image: scienceImg,
    videoUrl: 'https://www.youtube.com/watch?v=BRBcpFULNSE',
    date: '14 March, 2024',
    views: 144,
    category: 'Science Activities',
    tags: ['Science', 'Experiments', 'STEM'],
    expanded: false
  },
  {
    id: 5,
    title: 'The Power of Play: How Games Support Academic Success',
    excerpt: 'Play isn\'t just fun—it\'s fundamental to learning! Understand the science behind play-based education and discover games that build essential skills. Learn which activities support math fluency, reading comprehension, problem-solving, and social-emotional development.',
    fullContent: `
      <p>Play is nature's way of teaching! Research shows that play-based learning significantly improves academic outcomes. Here's why games matter:</p>

      <h4>The Science of Play-Based Learning</h4>
      <p>When children play, their brains form neural connections faster than during direct instruction. Play activates multiple brain regions simultaneously, enhancing memory formation and skill retention. The emotional engagement during play also strengthens learning pathways.</p>

      <h4>Games That Build Math Skills</h4>
      <ul>
        <li><strong>Pattern Block Puzzles:</strong> Spatial reasoning and geometry</li>
        <li><strong>Dice Games:</strong> Addition, probability, number sense</li>
        <li><strong>Measurement Activities:</strong> Cooking, building, using rulers</li>
        <li><strong>Digital Math Games:</strong> Platforms like Mind Jr Group offer adaptive, engaging practice</li>
      </ul>

      <h4>Games That Boost Reading</h4>
      <ul>
        <li><strong>Word Hunt:</strong> Letter recognition and spelling</li>
        <li><strong>Story Cubes:</strong> Creative storytelling and sequencing</li>
        <li><strong>Rhyming Games:</strong> Phonemic awareness</li>
        <li><strong>Interactive Reading Apps:</strong> Comprehension through engagement</li>
      </ul>

      <h4>Problem-Solving Through Play</h4>
      <p>Puzzles, strategy games, and open-ended building activities teach:</p>
      <ul>
        <li>Critical thinking</li>
        <li>Planning and sequencing</li>
        <li>Trial and error without fear of failure</li>
        <li>Perseverance and resilience</li>
      </ul>

      <h4>Social-Emotional Development</h4>
      <p>Cooperative games teach:</p>
      <ul>
        <li>Turn-taking and patience</li>
        <li>Teamwork and communication</li>
        <li>Handling winning and losing gracefully</li>
        <li>Empathy and perspective-taking</li>
      </ul>

      <h4>Age-Appropriate Play</h4>
      <p><strong>Pre-K to K:</strong> Sensory play, imaginative play, simple games with 1-2 rules<br>
      <strong>Grades 1-2:</strong> Board games, building challenges, basic strategy games<br>
      <strong>Grades 3-5:</strong> Complex strategy, logic puzzles, collaborative projects</p>

      <h4>Balancing Free Play and Structured Play</h4>
      <p>Children need both:</p>
      <ul>
        <li><strong>Free Play:</strong> Develops creativity, self-direction, imagination</li>
        <li><strong>Structured Play:</strong> Builds specific skills, follows rules, achieves learning objectives</li>
      </ul>

      <h4>The Gamification Revolution</h4>
      <p>Educational platforms are leveraging game mechanics (points, levels, rewards) to make learning irresistible. Mind Jr Group's 4000+ games demonstrate how technology can make practice feel like play while delivering curriculum-aligned content.</p>

      <p><strong>Research Shows:</strong> Students who engage in play-based learning score 17% higher on standardized tests and demonstrate better retention of material compared to traditional instruction-only approaches.</p>

      <p><strong>Takeaway:</strong> Play isn't a break from learning - it IS learning. Give your child ample time for both structured educational games and free imaginative play. The benefits extend far beyond academics into creativity, emotional regulation, and life skills.</p>
    `,
    image: playImg,
    date: '03 August, 2024',
    views: 33,
    category: 'Educational Research',
    tags: ['Play-Based Learning', 'Child Development', 'Games'],
    expanded: false
  }
])

// Search and filter functionality
const searchQuery = ref('')
const selectedCategory = ref('all')

// Categories for sidebar
const categories = [
  { name: 'Math Tips', count: 1 },
  { name: 'Reading Tips', count: 1 },
  { name: 'Parenting Advice', count: 1 },
  { name: 'Science Activities', count: 1 },
  { name: 'Educational Research', count: 1 }
]

// Tags for sidebar
const allTags = [
  'Math', 'Reading', 'Science', 'STEM', 'Parenting',
  'Learning at Home', 'Digital Learning', 'Games',
  'Child Development', 'Screen Time', 'Experiments'
]

// Toggle full content
const toggleContent = (postId) => {
  const post = blogPosts.value.find(p => p.id === postId)
  if (post) {
    post.expanded = !post.expanded
  }
}

// Filter by category
const filterByCategory = (category) => {
  selectedCategory.value = category
}

onMounted(async () => {
  await nextTick()
  setTimeout(() => {
    initTemplateScripts()
  }, 100)
})

onBeforeUnmount(() => {
  cleanupTemplateScripts()
})
</script>

<template>
  <!--======== Modern Hero Section ========-->
  <section class="blog-hero-section">
    <div class="blog-hero-bg">
      <div class="container">
        <div class="blog-hero-content">
          <nav class="modern-breadcrumb">
            <router-link to="/" class="breadcrumb-link">Home</router-link>
            <i class="fas fa-chevron-right"></i>
            <span class="breadcrumb-current">Blog</span>
          </nav>
          <div class="hero-badge">
            <i class="fas fa-blog"></i>
            <span>Latest Posts</span>
          </div>
          <h1 class="blog-hero-title">
            Tips, Stories &
            <span class="gradient-text-light d-block">Learning Resources</span>
          </h1>
          <p class="blog-hero-description">
            Expert advice and insights to help your child succeed
          </p>
        </div>
      </div>
    </div>
    <div class="hero-wave-bottom">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z" fill="#FFFFFF"/>
      </svg>
    </div>
  </section>
  <!--======== / Modern Hero Section ========-->

  <!--======== Blog Section ========-->
  <section class="vs-blog-wrapper space-page">
    <div class="container">
      <div class="row gx-60">
        <div class="col-xl-8 col-lg-7">
          <!-- Blog Posts Loop -->
          <div
            v-for="post in blogPosts"
            :key="post.id"
            class="vs-blog blog-single wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <!-- Blog Image -->
            <div class="blog-img" :class="{ 'vs-carousel': post.images }">
              <template v-if="post.images">
                <div v-for="(img, index) in post.images" :key="index">
                  <img :src="img" :alt="post.title">
                </div>
              </template>
              <template v-else>
                <img :src="post.image" :alt="post.title">
                <a v-if="post.videoUrl" :href="post.videoUrl" class="popup-video play-btn style-1">
                  <i class="fas fa-play"></i>
                </a>
              </template>
            </div>

            <!-- Blog Content -->
            <div class="blog-content">
              <!-- Blog Meta -->
              <div class="blog-meta">
                <span class="category-badge">{{ post.category }}</span>
                <a href="#"><i class="fal fa-eye"></i> {{ post.views }} Views</a>
                <a href="#"><i class="fal fa-comments"></i> {{ post.comments }} Comments</a>
                <a href="#"><i class="fal fa-calendar-alt"></i> {{ post.date }}</a>
              </div>

              <!-- Blog Title -->
              <h3 class="blog-title">{{ post.title }}</h3>

              <!-- Excerpt -->
              <p v-if="!post.expanded" class="blog-text">{{ post.excerpt }}</p>

              <!-- Full Content (when expanded) -->
              <div v-if="post.expanded" class="blog-full-content" v-html="post.fullContent"></div>

              <!-- Tags (when expanded) -->
              <div v-if="post.expanded" class="blog-tags mt-4">
                <strong>Tags:</strong>
                <span v-for="tag in post.tags" :key="tag" class="tag-badge">{{ tag }}</span>
              </div>

              <!-- Read More / Show Less Button -->
              <button @click="toggleContent(post.id)" class="link-btn">
                {{ post.expanded ? 'Show Less' : 'Read More' }}
                <i :class="post.expanded ? 'far fa-chevron-up' : 'far fa-long-arrow-right'"></i>
              </button>
            </div>
          </div>
          <!-- / Blog Posts Loop -->
        </div> <!-- / Blog end -->
        <!-- Sidebar -->
        <div class="col-xl-4 col-lg-5">
          <aside class="sidebar-area">

            <!-- Search Widget -->
            <div class="widget widget_search wow fadeInUp" data-wow-delay="0.1s">
              <h4 class="widget_title">Search Articles</h4>
              <form class="search-form" @submit.prevent>
                <input v-model="searchQuery" type="text" placeholder="Search blog posts...">
                <button type="submit"><i class="far fa-search"></i></button>
              </form>
            </div>

            <!-- Categories Widget -->
            <div class="widget widget_categories wow fadeInUp" data-wow-delay="0.1s">
              <h4 class="widget_title">Categories</h4>
              <ul>
                <li v-for="cat in categories" :key="cat.name">
                  <a href="#" @click.prevent="filterByCategory(cat.name)">{{ cat.name }}</a>
                  <span>{{ cat.count }}</span>
                </li>
              </ul>
            </div>

            <!-- Recent Posts Widget -->
            <div class="widget wow fadeInUp" data-wow-delay="0.1s">
              <h4 class="widget_title">All Articles</h4>
              <div class="recent-post-wrap">
                <div v-for="post in blogPosts.slice(0, 5)" :key="post.id" class="recent-post">
                  <div class="media-img">
                    <a href="#" @click.prevent="toggleContent(post.id)">
                      <img :src="post.image || post.images[0]" :alt="post.title">
                    </a>
                  </div>
                  <div class="media-body">
                    <h4 class="post-title">
                      <a href="#" @click.prevent="toggleContent(post.id)">{{ post.title }}</a>
                    </h4>
                    <div class="recent-post-meta">
                      <a href="#"><i class="fal fa-calendar-alt"></i> {{ post.date }}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Tags Widget -->
            <div class="widget widget_tag_cloud wow fadeInUp" data-wow-delay="0.1s">
              <h4 class="widget_title">Popular Tags</h4>
              <div class="tagcloud">
                <a v-for="tag in allTags" :key="tag" href="#">{{ tag }}</a>
              </div>
            </div>

            <!-- CTA Widget -->
            <div class="widget widget_banner wow fadeInUp" data-wow-delay="0.1s">
              <div class="modern-cta-widget">
                <div class="cta-icon">
                  <i class="fas fa-graduation-cap"></i>
                </div>
                <h3>Start Learning Today!</h3>
                <p>Join 50M+ kids exploring 4000+ interactive games</p>
                <router-link to="/pricing" class="vs-btn wave-btn banner-btn">
                  Try Free Trial
                </router-link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </div>
  </section>
  <!--======== / Blog Section ========-->
</template>

<style scoped>
/* Hero Section */
.blog-hero-section {
  position: relative;
  overflow: hidden;
}
.blog-hero-bg {
  background: linear-gradient(135deg, #6C63FF 0%, #A29BFE 45%, #FF6584 100%);
  padding: 100px 0 120px;
  min-height: 450px;
}
.blog-hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}
.modern-breadcrumb {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 10px 24px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 50px;
  margin-bottom: 30px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.breadcrumb-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  transition: all 0.3s ease;
}
.breadcrumb-link:hover { color: #FFE5B4; }
.modern-breadcrumb i {
  color: rgba(255, 255, 255, 0.6);
  font-size: 10px;
}
.breadcrumb-current {
  color: white;
  font-weight: 600;
  font-size: 14px;
}
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 28px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  margin-bottom: 25px;
  animation: float-badge 3s ease-in-out infinite;
}
.hero-badge i {
  color: #FFE5B4;
  font-size: 18px;
}
.hero-badge span {
  color: white;
  font-weight: 600;
  font-size: 15px;
}
.blog-hero-title {
  font-size: 58px;
  font-weight: 900;
  line-height: 1.2;
  color: white;
  margin-bottom: 25px;
}
.gradient-text-light {
  background: linear-gradient(135deg, #FFE5B4, #FFDAB9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.blog-hero-description {
  font-size: 19px;
  color: rgba(255, 255, 255, 0.95);
}
.hero-wave-bottom {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  z-index: 10;
  line-height: 0;
}
.hero-wave-bottom svg {
  width: 100%;
  height: 120px;
}

/* Blog Content Styles */
.category-badge {
  display: inline-block;
  padding: 4px 12px;
  background: linear-gradient(135deg, #6C63FF, #A29BFE);
  color: white;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  margin-right: 10px;
}

.blog-full-content {
  margin-top: 20px;
  line-height: 1.8;
}

.blog-full-content h4 {
  color: #6C63FF;
  margin-top: 25px;
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 700;
}

.blog-full-content p {
  margin-bottom: 15px;
  color: #555;
}

.blog-full-content ul {
  margin: 15px 0;
  padding-left: 25px;
}

.blog-full-content ul li {
  margin-bottom: 10px;
  color: #555;
}

.blog-full-content strong {
  color: #333;
  font-weight: 600;
}

.blog-tags {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  padding: 15px 0;
  border-top: 1px solid #e0e0e0;
}

.tag-badge {
  display: inline-block;
  padding: 5px 12px;
  background: #f0f0f0;
  color: #666;
  border-radius: 15px;
  font-size: 12px;
  transition: all 0.3s;
}

.tag-badge:hover {
  background: #6C63FF;
  color: white;
}

.link-btn {
  background: none;
  border: none;
  color: #6C63FF;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  transition: all 0.3s;
}

.link-btn:hover {
  color: #FF6584;
}

/* CTA Widget */
.modern-cta-widget {
  background: linear-gradient(135deg, #6C63FF 0%, #A29BFE 100%);
  padding: 40px 30px;
  border-radius: 20px;
  text-align: center;
  color: white;
}

.modern-cta-widget .cta-icon {
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.modern-cta-widget .cta-icon i {
  font-size: 40px;
  color: white;
}

.modern-cta-widget h3 {
  color: white;
  font-size: 24px;
  margin-bottom: 10px;
}

.modern-cta-widget p {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 20px;
}

.modern-cta-widget .banner-btn {
  background: white;
  color: #6C63FF;
  font-weight: 600;
}

.modern-cta-widget .banner-btn:hover {
  background: #FFE5B4;
  color: #6C63FF;
}

/* Animations */
@keyframes float-badge {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

/* Responsive */
@media (max-width: 991px) {
  .blog-hero-bg { padding: 80px 0 100px; }
  .blog-hero-title { font-size: 46px; }
}
@media (max-width: 767px) {
  .blog-hero-bg { padding: 60px 0 80px; }
  .blog-hero-title { font-size: 36px; }
  .hero-wave-bottom svg { height: 80px; }
}
@media (max-width: 575px) {
  .blog-hero-bg { padding: 74px 0 70px; }
  .blog-hero-title { font-size: 32px; }
  .hero-wave-bottom svg { height: 60px; }
}
</style>
