<script setup>
import { computed, onMounted, onBeforeUnmount, nextTick, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  initTemplateScripts,
  cleanupTemplateScripts,
} from '@/utils/initScripts'
import { useBlogStore } from '@/stores/blog'

// Fallback image
import mathImg from '@/assets/math-gamification.jpg'

const route = useRoute()
const router = useRouter()
const blogStore = useBlogStore()

// Computed
const post = computed(() => blogStore.currentPost)
const relatedPosts = computed(() => blogStore.relatedPosts)
const categories = computed(() => blogStore.categories)
const loading = computed(() => blogStore.loading)
const error = computed(() => blogStore.error)

// Get image URL
const getImageUrl = (imagePath) => {
  if (!imagePath) return mathImg
  if (imagePath.startsWith('http') || imagePath.startsWith('data:'))
    return imagePath
  const storageUrl =
    import.meta.env.VITE_STORAGE_URL || 'https://blr1.vultrobjects.com/space-1/'
  return `${storageUrl}${imagePath}`
}

// Format date
const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

// Reading time
const readingTime = computed(() => {
  if (!post.value?.content) return '2 min read'
  const words = post.value.content.replace(/<[^>]*>/g, '').split(/\s+/).length
  return `${Math.max(1, Math.ceil(words / 200))} min read`
})

// Navigate to another post
const goToPost = (slug) => {
  router.push({ name: 'BlogDetails', params: { slug } })
}

// Navigate to blog list with category filter
const goToCategory = (categoryId) => {
  router.push({ name: 'Blog', query: { category: categoryId } })
}

// Current page URL for share links
const currentUrl = computed(() =>
  typeof window !== 'undefined' ? window.location.href : ''
)

// Get author name
const authorName = computed(() => {
  if (!post.value?.author) return 'Anonymous'
  return (
    `${post.value.author.first_name || ''} ${post.value.author.last_name || ''}`.trim() ||
    'Anonymous'
  )
})

// Author initials
const authorInitials = computed(() => {
  if (!post.value?.author) return 'A'
  const first = post.value.author.first_name?.[0] || ''
  const last = post.value.author.last_name?.[0] || ''
  return (first + last).toUpperCase() || 'A'
})

// Category colors
const categoryColors = { 1: '#4A8B3F', 2: '#E91E8C', 3: '#1B1464' }
const getCategoryColor = (id) => categoryColors[id] || '#4A8B3F'

// Initialize
const fetchData = async () => {
  const slug = route.params.slug
  if (slug) {
    await blogStore.fetchPost(slug)
    if (blogStore.categories.length === 0) {
      await blogStore.fetchCategories()
    }
  }
}

onMounted(async () => {
  await fetchData()
  await nextTick()
  setTimeout(() => {
    initTemplateScripts()
  }, 100)
})

onBeforeUnmount(() => {
  cleanupTemplateScripts()
  blogStore.clearCurrentPost()
})

// Watch for route changes
watch(
  () => route.params.slug,
  async (newSlug) => {
    if (newSlug) {
      await fetchData()
      await nextTick()
      setTimeout(() => {
        initTemplateScripts()
      }, 100)
    }
  }
)
</script>

<template>
  <!-- Compact Hero -->
  <section class="bd-hero-section">
    <div class="bd-hero-bg">
      <div class="bd-hero-particles">
        <span
          v-for="n in 6"
          :key="n"
          class="particle"
          :style="{ animationDelay: `${n * 0.5}s` }"
        ></span>
      </div>
      <div class="container">
        <div class="bd-hero-content">
          <nav class="bd-breadcrumb">
            <router-link to="/" class="bc-link">Home</router-link>
            <i class="fas fa-chevron-right"></i>
            <router-link to="/blog" class="bc-link">Blog</router-link>
            <i class="fas fa-chevron-right"></i>
            <span class="bc-current">{{
              post?.category?.name || 'Article'
            }}</span>
          </nav>
          <h1 v-if="post" class="bd-hero-title">{{ post.title }}</h1>
          <h1 v-else class="bd-hero-title">Loading...</h1>
          <div v-if="post" class="bd-hero-meta">
            <span
              ><i class="far fa-calendar-alt"></i>
              {{ formatDate(post.published_at) }}</span
            >
            <span class="meta-dot"></span>
            <span><i class="far fa-clock"></i> {{ readingTime }}</span>
            <span class="meta-dot"></span>
            <span><i class="far fa-eye"></i> {{ post.views || 0 }} views</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bd-wave-bottom">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path
          d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z"
          fill="#f8f9fa"
        />
      </svg>
    </div>
  </section>

  <!-- Main Content -->
  <section class="bd-content-section">
    <div class="container">
      <!-- Loading State -->
      <div v-if="loading" class="bd-loading">
        <div class="loading-card">
          <div class="skeleton-hero pulse"></div>
          <div class="skeleton-body">
            <div class="skeleton-line w60 pulse"></div>
            <div class="skeleton-line pulse"></div>
            <div class="skeleton-line pulse"></div>
            <div class="skeleton-line w80 pulse"></div>
          </div>
        </div>
      </div>

      <!-- Error State -->
      <div v-else-if="error && !post" class="bd-error">
        <div class="error-card">
          <div class="error-icon"><i class="fas fa-ghost"></i></div>
          <h3>Article Not Found</h3>
          <p>
            The article you're looking for doesn't exist or has been removed.
          </p>
          <router-link to="/blog" class="back-btn">
            <i class="fas fa-arrow-left"></i> Back to Blog
          </router-link>
        </div>
      </div>

      <!-- Post Content -->
      <div v-else-if="post" class="row bd-layout bd-dual-scroll">
        <!-- Article Column -->
        <div class="col-lg-8 bd-article-col bd-scroll-col">
          <!-- Featured Image -->
          <div class="bd-featured-img">
            <img :src="getImageUrl(post.featured_image)" :alt="post.title" />
            <a v-if="post.video_url" :href="post.video_url" class="bd-play-btn">
              <i class="fas fa-play"></i>
            </a>
            <span
              v-if="post.category"
              class="bd-img-category"
              :style="{ background: getCategoryColor(post.blog_category_id) }"
            >
              {{ post.category.name }}
            </span>
          </div>

          <!-- Article Card -->
          <div class="bd-article-card">
            <!-- Author Bar -->
            <div class="bd-author-bar">
              <div class="author-left">
                <div class="author-avatar-sm">{{ authorInitials }}</div>
                <div class="author-info">
                  <span class="author-name">{{ authorName }}</span>
                  <span class="author-date">{{
                    formatDate(post.published_at)
                  }}</span>
                </div>
              </div>
              <div class="share-icons">
                <a
                  :href="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`"
                  target="_blank"
                  class="share-icon fb"
                  ><i class="fab fa-facebook-f"></i
                ></a>
                <a
                  :href="`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(post.title)}`"
                  target="_blank"
                  class="share-icon tw"
                  ><i class="fab fa-twitter"></i
                ></a>
                <a
                  :href="`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`"
                  target="_blank"
                  class="share-icon li"
                  ><i class="fab fa-linkedin-in"></i
                ></a>
                <a
                  :href="`https://wa.me/?text=${encodeURIComponent(post.title + ' ' + currentUrl)}`"
                  target="_blank"
                  class="share-icon wa"
                  ><i class="fab fa-whatsapp"></i
                ></a>
              </div>
            </div>

            <!-- Excerpt -->
            <p v-if="post.excerpt" class="bd-excerpt">{{ post.excerpt }}</p>

            <!-- Content -->
            <div class="bd-content" v-html="post.content"></div>

            <!-- Tags -->
            <div v-if="post.tags && post.tags.length" class="bd-tags">
              <span v-for="tag in post.tags" :key="tag" class="bd-tag"
                >#{{ tag }}</span
              >
            </div>

            <!-- Share Bar Bottom -->
            <div class="bd-share-bottom">
              <span class="share-label">Share this article:</span>
              <div class="share-icons">
                <a
                  :href="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`"
                  target="_blank"
                  class="share-icon fb"
                  ><i class="fab fa-facebook-f"></i
                ></a>
                <a
                  :href="`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(post.title)}`"
                  target="_blank"
                  class="share-icon tw"
                  ><i class="fab fa-twitter"></i
                ></a>
                <a
                  :href="`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`"
                  target="_blank"
                  class="share-icon li"
                  ><i class="fab fa-linkedin-in"></i
                ></a>
                <a
                  :href="`https://wa.me/?text=${encodeURIComponent(post.title + ' ' + currentUrl)}`"
                  target="_blank"
                  class="share-icon wa"
                  ><i class="fab fa-whatsapp"></i
                ></a>
              </div>
            </div>
          </div>

          <!-- Author Card -->
          <div v-if="post.author" class="bd-author-card">
            <div class="author-avatar-lg">{{ authorInitials }}</div>
            <div class="author-body">
              <span class="written-by">Written by</span>
              <h4 class="author-full-name">{{ authorName }}</h4>
              <p class="author-bio">
                {{
                  post.author.bio ||
                  'Content creator at Mind Growup Jr, passionate about helping children learn and grow through engaging educational content.'
                }}
              </p>
            </div>
          </div>

          <!-- Related Posts -->
          <div v-if="relatedPosts.length > 0" class="bd-related">
            <h3 class="section-title">
              <i class="fas fa-newspaper"></i> Related Articles
            </h3>
            <div class="related-grid">
              <div
                v-for="related in relatedPosts"
                :key="related.id"
                class="related-card"
                @click="goToPost(related.slug)"
              >
                <div class="related-img-wrap">
                  <img
                    :src="getImageUrl(related.featured_image)"
                    :alt="related.title"
                  />
                  <div class="related-overlay">
                    <i class="fas fa-arrow-right"></i>
                  </div>
                </div>
                <div class="related-body">
                  <span v-if="related.category" class="related-cat">{{
                    related.category.name
                  }}</span>
                  <h4 class="related-title">{{ related.title }}</h4>
                  <span class="related-date"
                    ><i class="far fa-calendar-alt"></i>
                    {{ formatDate(related.published_at) }}</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="col-lg-4 bd-sidebar-col bd-scroll-col">
          <aside class="bd-sidebar">
            <!-- Search -->
            <div class="sidebar-widget">
              <div class="search-box">
                <i class="fas fa-search"></i>
                <input
                  type="text"
                  placeholder="Search articles..."
                  @keyup.enter="
                    router.push({
                      name: 'Blog',
                      query: { q: $event.target.value },
                    })
                  "
                />
              </div>
            </div>

            <!-- Categories -->
            <div class="sidebar-widget">
              <h4 class="sw-title">
                <i class="fas fa-folder-open sw-icon"></i> Categories
              </h4>
              <div class="category-list">
                <a
                  v-for="cat in categories"
                  :key="cat.id"
                  href="#"
                  class="cat-item"
                  @click.prevent="goToCategory(cat.id)"
                >
                  <span
                    class="cat-dot"
                    :style="{ background: getCategoryColor(cat.id) }"
                  ></span>
                  <span class="cat-name">{{ cat.name }}</span>
                  <span class="cat-count">{{ cat.posts_count || 0 }}</span>
                </a>
              </div>
            </div>

            <!-- Related Sidebar -->
            <div v-if="relatedPosts.length > 0" class="sidebar-widget">
              <h4 class="sw-title">
                <i class="fas fa-fire sw-icon"></i> You May Also Like
              </h4>
              <div class="sidebar-posts">
                <a
                  v-for="(related, index) in relatedPosts"
                  :key="related.id"
                  href="#"
                  class="sp-item"
                  @click.prevent="goToPost(related.slug)"
                >
                  <span class="sp-num">{{
                    String(index + 1).padStart(2, '0')
                  }}</span>
                  <div class="sp-img">
                    <img
                      :src="getImageUrl(related.featured_image)"
                      :alt="related.title"
                    />
                  </div>
                  <div class="sp-info">
                    <h5>{{ related.title }}</h5>
                    <span
                      ><i class="far fa-calendar-alt"></i>
                      {{ formatDate(related.published_at) }}</span
                    >
                  </div>
                </a>
              </div>
            </div>

            <!-- Tags -->
            <div v-if="post.tags && post.tags.length" class="sidebar-widget">
              <h4 class="sw-title">
                <i class="fas fa-tags sw-icon"></i> Post Tags
              </h4>
              <div class="sw-tags">
                <span v-for="tag in post.tags" :key="tag" class="sw-tag"
                  >#{{ tag }}</span
                >
              </div>
            </div>

            <!-- CTA -->
            <div class="sidebar-widget cta-widget">
              <div class="cta-card">
                <div class="cta-pattern"></div>
                <div class="cta-inner">
                  <div class="cta-emoji">&#x1F680;</div>
                  <h3>Start Learning Today!</h3>
                  <p>Join Indian kids exploring 500+ interactive games</p>
                  <router-link to="/pricing" class="cta-btn">
                    Try Free Trial <i class="fas fa-arrow-right"></i>
                  </router-link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ===== Hero ===== */
.bd-hero-section {
  position: relative;
  overflow: hidden;
}

.bd-hero-bg {
  background: linear-gradient(135deg, #4a8b3f 0%, #3a7a30 40%, #1b1464 100%);
  padding: 70px 0 80px;
  min-height: auto;
  position: relative;
}

.bd-hero-particles {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.particle {
  position: absolute;
  width: 6px;
  height: 6px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  animation: float-p 8s ease-in-out infinite;
}
.particle:nth-child(1) {
  top: 20%;
  left: 10%;
}
.particle:nth-child(2) {
  top: 60%;
  left: 25%;
  width: 8px;
  height: 8px;
}
.particle:nth-child(3) {
  top: 30%;
  left: 70%;
}
.particle:nth-child(4) {
  top: 70%;
  left: 80%;
  width: 4px;
  height: 4px;
}
.particle:nth-child(5) {
  top: 15%;
  left: 50%;
  width: 5px;
  height: 5px;
}
.particle:nth-child(6) {
  top: 80%;
  left: 45%;
}

@keyframes float-p {
  0%,
  100% {
    transform: translateY(0) scale(1);
    opacity: 0.3;
  }
  50% {
    transform: translateY(-30px) scale(1.5);
    opacity: 0.7;
  }
}

.bd-hero-content {
  text-align: center;
  position: relative;
  z-index: 2;
}

.bd-breadcrumb {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 20px;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);
  border-radius: 50px;
  margin-bottom: 20px;
  border: 1px solid rgba(255, 255, 255, 0.15);
}
.bc-link {
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  font-weight: 500;
  font-size: 13px;
  transition: color 0.3s;
}
.bc-link:hover {
  color: #fff;
}
.bd-breadcrumb i {
  color: rgba(255, 255, 255, 0.4);
  font-size: 9px;
}
.bc-current {
  color: #fff;
  font-weight: 600;
  font-size: 13px;
}

.bd-hero-title {
  font-size: 34px;
  font-weight: 800;
  color: #fff;
  line-height: 1.3;
  margin-bottom: 16px;
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
}

.bd-hero-meta {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 13px;
}
.bd-hero-meta i {
  margin-right: 4px;
}
.meta-dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
}

.bd-wave-bottom {
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  z-index: 2;
  line-height: 0;
}
.bd-wave-bottom svg {
  width: 100%;
  height: 80px;
}

/* ===== Content Section ===== */
.bd-content-section {
  background: #f8f9fa;
  padding: 40px 0 80px;
}

.bd-layout {
  display: flex;
}

/* Loading */
.bd-loading {
  max-width: 800px;
  margin: 0 auto;
}
.loading-card {
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
}
.skeleton-hero {
  height: 350px;
  background: #e8e8e8;
}
.skeleton-body {
  padding: 30px;
}
.skeleton-line {
  height: 16px;
  background: #e8e8e8;
  border-radius: 8px;
  margin-bottom: 16px;
}
.skeleton-line.w60 {
  width: 60%;
}
.skeleton-line.w80 {
  width: 80%;
}
.pulse {
  animation: pulse 1.5s ease-in-out infinite;
}
@keyframes pulse {
  0%,
  100% {
    opacity: 0.4;
  }
  50% {
    opacity: 1;
  }
}

/* Error */
.bd-error {
  text-align: center;
  padding: 80px 20px;
}
.error-card {
  background: #fff;
  border-radius: 20px;
  padding: 60px 40px;
  display: inline-block;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
}
.error-icon {
  width: 80px;
  height: 80px;
  background: rgba(233, 30, 140, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}
.error-icon i {
  font-size: 36px;
  color: #e91e8c;
}
.error-card h3 {
  font-size: 24px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 8px;
}
.error-card p {
  color: #888;
  margin-bottom: 24px;
}
.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  background: #4a8b3f;
  color: #fff;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
}
.back-btn:hover {
  background: #3a7a30;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(74, 139, 63, 0.3);
}

/* Featured Image */
.bd-featured-img {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: -40px;
  z-index: 2;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}
.bd-featured-img img {
  width: 100%;
  height: 420px;
  object-fit: cover;
  display: block;
}

.bd-play-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70px;
  height: 70px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  color: #e91e8c;
  transition: all 0.3s;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
}
.bd-play-btn:hover {
  transform: translate(-50%, -50%) scale(1.1);
  background: #fff;
}

.bd-img-category {
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 6px 18px;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  border-radius: 50px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Article Card */
.bd-article-card {
  background: #fff;
  border-radius: 20px;
  padding: 60px 40px 40px;
  position: relative;
  z-index: 1;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
}

/* Author Bar */
.bd-author-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
  padding-bottom: 20px;
  border-bottom: 1px solid #f0f0f0;
  flex-wrap: wrap;
  gap: 16px;
}
.author-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.author-avatar-sm {
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, #4a8b3f, #1b1464);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 700;
  font-size: 15px;
}

.author-info {
  display: flex;
  flex-direction: column;
}
.author-name {
  font-weight: 600;
  color: #1a1a2e;
  font-size: 14px;
}
.author-date {
  font-size: 12px;
  color: #999;
}

.share-icons {
  display: flex;
  gap: 8px;
}
.share-icon {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  transition: all 0.3s;
  text-decoration: none;
  background: #f5f5f5;
  color: #888;
}
.share-icon:hover {
  transform: translateY(-3px);
  color: #fff;
}
.share-icon.fb:hover {
  background: #1877f2;
}
.share-icon.tw:hover {
  background: #1da1f2;
}
.share-icon.li:hover {
  background: #0a66c2;
}
.share-icon.wa:hover {
  background: #25d366;
}

/* Excerpt */
.bd-excerpt {
  font-size: 18px;
  color: #555;
  line-height: 1.7;
  margin-bottom: 30px;
  padding: 20px 24px;
  background: linear-gradient(
    135deg,
    rgba(74, 139, 63, 0.05),
    rgba(27, 20, 100, 0.05)
  );
  border-radius: 12px;
  border-left: 4px solid #4a8b3f;
  font-style: italic;
}

/* Blog Content */
.bd-content {
  line-height: 1.9;
  font-size: 16.5px;
  color: #444;
}

.bd-content :deep(h2) {
  font-size: 24px;
  font-weight: 700;
  color: #1a1a2e;
  margin: 35px 0 15px;
}
.bd-content :deep(h3) {
  font-size: 20px;
  font-weight: 700;
  color: #1a1a2e;
  margin: 30px 0 12px;
}
.bd-content :deep(h4) {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 25px 0 10px;
}

.bd-content :deep(p) {
  margin-bottom: 18px;
  color: #555;
  line-height: 1.8;
}

.bd-content :deep(ul),
.bd-content :deep(ol) {
  margin-bottom: 20px;
  padding-left: 24px;
}

.bd-content :deep(li) {
  margin-bottom: 10px;
  color: #555;
  line-height: 1.7;
}

.bd-content :deep(blockquote) {
  border-left: 4px solid #e91e8c;
  padding: 20px 24px;
  margin: 25px 0;
  background: rgba(233, 30, 140, 0.04);
  border-radius: 0 12px 12px 0;
  font-style: italic;
  color: #666;
}

.bd-content :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  margin: 20px 0;
}

.bd-content :deep(strong) {
  color: #1a1a2e;
}

/* Tags */
.bd-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid #f0f0f0;
}
.bd-tag {
  padding: 6px 16px;
  background: #f8f9fa;
  color: #e91e8c;
  border-radius: 50px;
  font-size: 13px;
  font-weight: 600;
  border: 1px solid #eee;
  transition: all 0.3s;
}
.bd-tag:hover {
  background: rgba(233, 30, 140, 0.08);
  border-color: rgba(233, 30, 140, 0.2);
}

/* Share Bottom */
.bd-share-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 28px;
  padding-top: 24px;
  border-top: 1px solid #f0f0f0;
  flex-wrap: wrap;
  gap: 12px;
}
.share-label {
  font-size: 14px;
  font-weight: 600;
  color: #555;
}

/* Author Card */
.bd-author-card {
  display: flex;
  align-items: center;
  gap: 24px;
  background: #fff;
  border-radius: 20px;
  padding: 30px;
  margin-top: 28px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.04);
}

.author-avatar-lg {
  width: 80px;
  height: 80px;
  min-width: 80px;
  background: linear-gradient(135deg, #4a8b3f, #1b1464);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 800;
  font-size: 28px;
}

.written-by {
  font-size: 12px;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
}
.author-full-name {
  font-size: 20px;
  font-weight: 700;
  color: #1a1a2e;
  margin: 4px 0 8px;
}
.author-bio {
  font-size: 14px;
  color: #777;
  line-height: 1.6;
  margin: 0;
}

/* Related Posts */
.bd-related {
  margin-top: 40px;
}

.section-title {
  font-size: 20px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.section-title i {
  color: #4a8b3f;
  font-size: 18px;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.related-card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.35s;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.04);
}
.related-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
}

.related-img-wrap {
  position: relative;
  height: 160px;
  overflow: hidden;
}
.related-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}
.related-card:hover .related-img-wrap img {
  transform: scale(1.08);
}

.related-overlay {
  position: absolute;
  inset: 0;
  background: rgba(27, 20, 100, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
}
.related-card:hover .related-overlay {
  background: rgba(27, 20, 100, 0.3);
}
.related-overlay i {
  color: #fff;
  font-size: 18px;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s;
  background: rgba(255, 255, 255, 0.2);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.related-card:hover .related-overlay i {
  opacity: 1;
  transform: translateY(0);
}

.related-body {
  padding: 16px;
}
.related-cat {
  font-size: 11px;
  font-weight: 700;
  color: #4a8b3f;
  text-transform: uppercase;
  letter-spacing: 0.3px;
}
.related-title {
  font-size: 14px;
  font-weight: 600;
  color: #1a1a2e;
  line-height: 1.4;
  margin: 6px 0 8px;
}
.related-card:hover .related-title {
  color: #4a8b3f;
}
.related-date {
  font-size: 11px;
  color: #aaa;
  display: flex;
  align-items: center;
  gap: 4px;
}

/* ===== Sidebar ===== */
.bd-sidebar {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.sidebar-widget {
  background: #fff;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.04);
}

.sw-title {
  font-size: 16px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.sw-icon {
  font-size: 14px;
  color: #4a8b3f;
}

/* Search */
.search-box {
  position: relative;
}
.search-box i {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #bbb;
  font-size: 14px;
}
.search-box input {
  width: 100%;
  padding: 12px 16px 12px 40px;
  border: 2px solid #f0f0f0;
  border-radius: 12px;
  font-size: 14px;
  outline: none;
  background: #f8f9fa;
  transition: all 0.3s;
}
.search-box input:focus {
  border-color: #4a8b3f;
  background: #fff;
  box-shadow: 0 0 0 3px rgba(74, 139, 63, 0.08);
}

/* Categories */
.category-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.cat-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 10px;
  text-decoration: none;
  color: #555;
  font-size: 14px;
  transition: all 0.3s;
}
.cat-item:hover {
  background: #f8f9fa;
  color: #4a8b3f;
}
.cat-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.cat-name {
  flex: 1;
}
.cat-count {
  background: #f0f0f0;
  padding: 2px 10px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 700;
  color: #888;
}

/* Sidebar Posts */
.sidebar-posts {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.sp-item {
  display: flex;
  align-items: center;
  gap: 14px;
  text-decoration: none;
  padding: 8px;
  border-radius: 12px;
  transition: all 0.3s;
}
.sp-item:hover {
  background: #f8f9fa;
}
.sp-num {
  font-size: 24px;
  font-weight: 800;
  color: #e8e8e8;
  min-width: 28px;
  transition: color 0.3s;
}
.sp-item:hover .sp-num {
  color: #4a8b3f;
}
.sp-img {
  width: 56px;
  height: 56px;
  border-radius: 10px;
  overflow: hidden;
  flex-shrink: 0;
}
.sp-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.sp-info {
  flex: 1;
  min-width: 0;
}
.sp-info h5 {
  font-size: 13px;
  font-weight: 600;
  color: #333;
  line-height: 1.4;
  margin: 0 0 4px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.sp-item:hover .sp-info h5 {
  color: #4a8b3f;
}
.sp-info span {
  font-size: 11px;
  color: #aaa;
  display: flex;
  align-items: center;
  gap: 4px;
}

/* Tags */
.sw-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.sw-tag {
  padding: 6px 14px;
  background: #f8f9fa;
  color: #666;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  border: 1px solid #eee;
  transition: all 0.3s;
}
.sw-tag:hover {
  background: rgba(233, 30, 140, 0.08);
  color: #e91e8c;
  border-color: rgba(233, 30, 140, 0.2);
}

/* CTA */
.cta-widget {
  padding: 0 !important;
  overflow: hidden;
  border: none !important;
}
.cta-card {
  background: linear-gradient(135deg, #1b1464 0%, #4a8b3f 100%);
  padding: 35px 28px;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.cta-pattern {
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  pointer-events: none;
}
.cta-inner {
  position: relative;
  z-index: 2;
}
.cta-emoji {
  font-size: 48px;
  margin-bottom: 15px;
}
.cta-card h3 {
  color: #fff;
  font-size: 22px;
  font-weight: 800;
  margin-bottom: 8px;
}
.cta-card p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  margin-bottom: 20px;
}
.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  background: #fff;
  color: #1b1464;
  border-radius: 50px;
  font-weight: 700;
  font-size: 14px;
  text-decoration: none;
  transition: all 0.3s;
}
.cta-btn:hover {
  background: #ffe5b4;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

/* ===== Dual Scroll ===== */
.bd-dual-scroll {
  display: flex;
}

.bd-scroll-col {
  height: calc(100vh - 80px);
  overflow-y: auto;
  padding-bottom: 40px;
}

.bd-scroll-col::-webkit-scrollbar {
  width: 4px;
}
.bd-scroll-col::-webkit-scrollbar-track {
  background: transparent;
}
.bd-scroll-col::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
.bd-scroll-col::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.25);
}
.bd-scroll-col {
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.1) transparent;
}

/* ===== Responsive ===== */
@media (max-width: 991px) {
  .bd-hero-bg {
    padding: 60px 0 70px;
  }
  .bd-hero-title {
    font-size: 28px;
  }

  .bd-scroll-col {
    height: auto;
    overflow-y: visible;
  }

  .bd-featured-img img {
    height: 300px;
  }
  .bd-article-card {
    padding: 50px 28px 28px;
  }
  .bd-author-card {
    flex-direction: column;
    text-align: center;
  }
  .related-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .bd-hero-bg {
    padding: 50px 0 60px;
  }
  .bd-hero-title {
    font-size: 24px;
  }
  .bd-hero-meta {
    font-size: 12px;
    gap: 10px;
  }
  .bd-wave-bottom svg {
    height: 60px;
  }

  .bd-featured-img img {
    height: 220px;
  }
  .bd-article-card {
    padding: 44px 20px 20px;
  }
  .bd-content {
    font-size: 15px;
  }
  .bd-author-bar {
    flex-direction: column;
    align-items: flex-start;
  }
  .related-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 575px) {
  .bd-hero-bg {
    padding: 45px 0 50px;
  }
  .bd-hero-title {
    font-size: 22px;
  }
  .bd-wave-bottom svg {
    height: 50px;
  }

  .bd-featured-img {
    border-radius: 14px;
    margin-bottom: -30px;
  }
  .bd-featured-img img {
    height: 180px;
  }
  .bd-excerpt {
    font-size: 15px;
    padding: 16px 18px;
  }
}
</style>
