<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick, watch } from 'vue'
import { useRouter } from 'vue-router'
import { initTemplateScripts, cleanupTemplateScripts } from '@/utils/initScripts'
import { useBlogStore } from '@/stores/blog'

// Fallback images
import mathImg from '@/assets/math-gamification.jpg'

const router = useRouter()
const blogStore = useBlogStore()

// Local state
const searchQuery = ref('')
const selectedCategoryId = ref(null)

// Computed
const blogPosts = computed(() => blogStore.posts)
const categories = computed(() => blogStore.categories)
const loading = computed(() => blogStore.loading)
const hasMorePosts = computed(() => blogStore.hasMorePosts)
const recentPosts = computed(() => blogStore.recentPosts)
const allTags = computed(() => blogStore.allTags)

// Featured post = first featured or first post
const featuredPost = computed(() => {
  const featured = blogStore.featuredPosts
  if (featured.length > 0) return featured[0]
  return blogPosts.value.length > 0 ? blogPosts.value[0] : null
})

// Regular posts (only exclude featured when featured section is visible)
const showFeatured = computed(() => featuredPost.value && !selectedCategoryId.value && !searchQuery.value)

const regularPosts = computed(() => {
  if (!showFeatured.value) return blogPosts.value
  return blogPosts.value.filter(p => p.id !== featuredPost.value.id)
})

// Reading time estimate
const readingTime = (content) => {
  if (!content) return '2 min'
  const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length
  const minutes = Math.max(1, Math.ceil(words / 200))
  return `${minutes} min read`
}

// Get image URL
const getImageUrl = (imagePath) => {
  if (!imagePath) return mathImg
  if (imagePath.startsWith('http') || imagePath.startsWith('data:')) return imagePath
  const storageUrl = import.meta.env.VITE_STORAGE_URL || 'https://blr1.vultrobjects.com/space-1/'
  return `${storageUrl}${imagePath}`
}

// Format date
const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })
}

// Navigate to blog details
const goToPost = (slug) => {
  router.push({ name: 'BlogDetails', params: { slug } })
}

// Filter by category
const filterByCategory = (categoryId) => {
  selectedCategoryId.value = categoryId
  blogStore.resetPagination()
  fetchPosts()
}

// Clear category filter
const clearCategoryFilter = () => {
  selectedCategoryId.value = null
  blogStore.resetPagination()
  fetchPosts()
}

// Search posts
const handleSearch = () => {
  blogStore.resetPagination()
  fetchPosts()
}

// Load more posts
const loadMore = () => {
  blogStore.loadMorePosts({
    categoryId: selectedCategoryId.value,
    search: searchQuery.value
  })
}

// Fetch posts with current filters
const fetchPosts = () => {
  blogStore.fetchPosts({
    page: 1,
    categoryId: selectedCategoryId.value,
    search: searchQuery.value
  })
}

// Category colors
const categoryColors = ['#4A8B3F', '#E91E8C', '#1B1464', '#FF6B35', '#6C5CE7']
const getCategoryColor = (index) => categoryColors[index % categoryColors.length]

// Initialize
onMounted(async () => {
  await Promise.all([
    blogStore.fetchCategories(),
    blogStore.fetchPosts({ page: 1 })
  ])

  await nextTick()
  setTimeout(() => {
    initTemplateScripts()
  }, 100)
})

onBeforeUnmount(() => {
  cleanupTemplateScripts()
})

// Watch for search input with debounce
let searchTimeout = null
watch(searchQuery, () => {
  clearTimeout(searchTimeout)
  searchTimeout = setTimeout(() => {
    handleSearch()
  }, 500)
})
</script>

<template>
  <!--======== Compact Hero Section ========-->
  <section class="blog-hero-section">
    <div class="blog-hero-bg">
      <div class="blog-hero-particles">
        <span v-for="n in 6" :key="n" class="particle" :style="{ animationDelay: `${n * 0.5}s` }"></span>
      </div>
      <div class="container">
        <div class="blog-hero-content">
          <nav class="modern-breadcrumb">
            <router-link to="/" class="breadcrumb-link">Home</router-link>
            <i class="fas fa-chevron-right"></i>
            <span class="breadcrumb-current">Blog</span>
          </nav>
          <h1 class="blog-hero-title">
            Our <span class="title-highlight">Blog</span>
          </h1>
          <p class="blog-hero-description">
            Tips, stories & learning resources for parents and educators
          </p>
        </div>
      </div>
    </div>
    <div class="hero-wave-bottom">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z" fill="#f8f9fa"/>
      </svg>
    </div>
  </section>

  <!--======== Category Filter Pills ========-->
  <section class="category-filter-section">
    <div class="container">
      <div class="filter-bar">
        <div class="filter-pills">
          <button
            class="filter-pill"
            :class="{ active: !selectedCategoryId }"
            @click="clearCategoryFilter"
          >
            <i class="fas fa-th-large"></i>
            All
          </button>
          <button
            v-for="(cat, index) in categories"
            :key="cat.id"
            class="filter-pill"
            :class="{ active: selectedCategoryId === cat.id }"
            :style="selectedCategoryId === cat.id ? { background: getCategoryColor(index), borderColor: getCategoryColor(index) } : {}"
            @click="filterByCategory(cat.id)"
          >
            {{ cat.name }}
            <span class="pill-count">{{ cat.posts_count || 0 }}</span>
          </button>
        </div>
        <div class="search-bar">
          <i class="fas fa-search search-icon"></i>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search articles..."
            class="search-input"
          >
        </div>
      </div>
    </div>
  </section>

  <!--======== Featured Post ========-->
  <section v-if="showFeatured" class="featured-section">
    <div class="container">
      <div class="featured-card" @click="goToPost(featuredPost.slug)">
        <div class="featured-img-wrap">
          <img :src="getImageUrl(featuredPost.featured_image)" :alt="featuredPost.title" class="featured-img">
          <div class="featured-overlay"></div>
          <span v-if="featuredPost.is_featured" class="featured-badge">
            <i class="fas fa-star"></i> Featured
          </span>
        </div>
        <div class="featured-content">
          <span v-if="featuredPost.category" class="featured-category">{{ featuredPost.category.name }}</span>
          <h2 class="featured-title">{{ featuredPost.title }}</h2>
          <p class="featured-excerpt">{{ featuredPost.excerpt }}</p>
          <div class="featured-meta">
            <span><i class="far fa-calendar-alt"></i> {{ formatDate(featuredPost.published_at) }}</span>
            <span><i class="far fa-clock"></i> {{ readingTime(featuredPost.content) }}</span>
            <span><i class="far fa-eye"></i> {{ featuredPost.views || 0 }} views</span>
          </div>
          <span class="read-more-link">
            Read Article <i class="fas fa-arrow-right"></i>
          </span>
        </div>
      </div>
    </div>
  </section>

  <!--======== Blog Section ========-->
  <section class="blog-section">
    <div class="container">
      <!-- Loading State -->
      <div v-if="loading && blogPosts.length === 0" class="loading-state">
        <div class="loading-cards">
          <div v-for="n in 3" :key="n" class="skeleton-card">
            <div class="skeleton-img pulse"></div>
            <div class="skeleton-body">
              <div class="skeleton-line short pulse"></div>
              <div class="skeleton-line pulse"></div>
              <div class="skeleton-line medium pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else-if="!loading && blogPosts.length === 0" class="empty-state">
        <div class="empty-icon">
          <i class="fas fa-search"></i>
        </div>
        <h3>No articles found</h3>
        <p>Try adjusting your search or filter criteria</p>
        <button v-if="selectedCategoryId || searchQuery" class="clear-btn" @click="clearCategoryFilter(); searchQuery = ''">
          <i class="fas fa-times"></i> Clear Filters
        </button>
      </div>

      <!-- Blog Grid -->
      <div v-else class="row blog-dual-scroll">
        <!-- Posts Column -->
        <div class="col-lg-8 blog-scroll-col">
          <div class="blog-grid">
            <article
              v-for="post in regularPosts"
              :key="post.id"
              class="blog-card"
              @click="goToPost(post.slug)"
            >
              <div class="card-img-wrap">
                <img :src="getImageUrl(post.featured_image)" :alt="post.title" class="card-img">
                <div class="card-img-overlay">
                  <span class="read-indicator">
                    <i class="fas fa-book-open"></i> Read
                  </span>
                </div>
                <span v-if="post.video_url" class="video-badge">
                  <i class="fas fa-play"></i>
                </span>
              </div>
              <div class="card-body">
                <div class="card-top">
                  <span v-if="post.category" class="card-category">{{ post.category.name }}</span>
                  <span class="card-reading-time"><i class="far fa-clock"></i> {{ readingTime(post.content) }}</span>
                </div>
                <h3 class="card-title">{{ post.title }}</h3>
                <p class="card-excerpt">{{ post.excerpt }}</p>
                <div class="card-tags" v-if="post.tags && post.tags.length">
                  <span v-for="tag in post.tags.slice(0, 2)" :key="tag" class="card-tag">#{{ tag }}</span>
                </div>
                <div class="card-footer">
                  <div class="card-meta">
                    <span><i class="far fa-calendar-alt"></i> {{ formatDate(post.published_at) }}</span>
                    <span><i class="far fa-eye"></i> {{ post.views || 0 }}</span>
                  </div>
                  <span class="card-arrow">
                    <i class="fas fa-arrow-right"></i>
                  </span>
                </div>
              </div>
            </article>
          </div>

          <!-- Load More Button -->
          <div v-if="hasMorePosts && !loading" class="load-more-wrap">
            <button class="load-more-btn" @click="loadMore">
              <i class="fas fa-plus-circle"></i>
              Load More Articles
            </button>
          </div>

          <!-- Loading More -->
          <div v-if="loading && blogPosts.length > 0" class="text-center py-4">
            <div class="mini-spinner"></div>
            <span class="loading-text">Loading more...</span>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="col-lg-4 sidebar-scroll-col">
          <aside class="sidebar">
            <!-- Search Widget -->
            <div class="sidebar-widget search-widget">
              <div class="search-box">
                <i class="fas fa-search"></i>
                <input v-model="searchQuery" type="text" placeholder="Search articles..." @keyup.enter="handleSearch">
              </div>
            </div>

            <!-- Categories Widget -->
            <div class="sidebar-widget">
              <h4 class="widget-title">
                <i class="fas fa-folder-open widget-icon"></i>
                Categories
              </h4>
              <div class="category-list">
                <a
                  href="#"
                  class="category-item"
                  :class="{ active: !selectedCategoryId }"
                  @click.prevent="clearCategoryFilter"
                >
                  <span class="cat-name">All Categories</span>
                  <span class="cat-count">{{ blogStore.totalPosts }}</span>
                </a>
                <a
                  v-for="(cat, index) in categories"
                  :key="cat.id"
                  href="#"
                  class="category-item"
                  :class="{ active: selectedCategoryId === cat.id }"
                  @click.prevent="filterByCategory(cat.id)"
                >
                  <span class="cat-dot" :style="{ background: getCategoryColor(index) }"></span>
                  <span class="cat-name">{{ cat.name }}</span>
                  <span class="cat-count">{{ cat.posts_count || 0 }}</span>
                </a>
              </div>
            </div>

            <!-- Recent Posts Widget -->
            <div class="sidebar-widget">
              <h4 class="widget-title">
                <i class="fas fa-fire widget-icon"></i>
                Popular Articles
              </h4>
              <div class="recent-list">
                <a
                  v-for="(post, index) in recentPosts"
                  :key="post.id"
                  href="#"
                  class="recent-item"
                  @click.prevent="goToPost(post.slug)"
                >
                  <span class="recent-number">{{ String(index + 1).padStart(2, '0') }}</span>
                  <div class="recent-img-wrap">
                    <img :src="getImageUrl(post.featured_image)" :alt="post.title">
                  </div>
                  <div class="recent-info">
                    <h5 class="recent-title">{{ post.title }}</h5>
                    <span class="recent-date"><i class="far fa-calendar-alt"></i> {{ formatDate(post.published_at) }}</span>
                  </div>
                </a>
              </div>
            </div>

            <!-- Tags Widget -->
            <div v-if="allTags.length > 0" class="sidebar-widget">
              <h4 class="widget-title">
                <i class="fas fa-tags widget-icon"></i>
                Popular Tags
              </h4>
              <div class="tags-cloud">
                <span v-for="tag in allTags" :key="tag" class="cloud-tag">#{{ tag }}</span>
              </div>
            </div>

            <!-- CTA Widget -->
            <div class="sidebar-widget cta-widget">
              <div class="cta-card">
                <div class="cta-pattern"></div>
                <div class="cta-content">
                  <div class="cta-emoji">&#x1F680;</div>
                  <h3>Start Learning Today!</h3>
                  <p>Join 50M+ kids exploring 4000+ interactive games</p>
                  <router-link to="/pricing" class="cta-btn">
                    Try Free Trial
                    <i class="fas fa-arrow-right"></i>
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
/* ===== Compact Hero ===== */
.blog-hero-section {
  position: relative;
  overflow: hidden;
}

.blog-hero-bg {
  background: linear-gradient(135deg, #4A8B3F 0%, #3a7a30 40%, #1B1464 100%);
  padding: 70px 0 80px;
  min-height: auto;
  position: relative;
}

.blog-hero-particles {
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
  animation: float-particle 8s ease-in-out infinite;
}

.particle:nth-child(1) { top: 20%; left: 10%; }
.particle:nth-child(2) { top: 60%; left: 25%; width: 8px; height: 8px; }
.particle:nth-child(3) { top: 30%; left: 70%; }
.particle:nth-child(4) { top: 70%; left: 80%; width: 4px; height: 4px; }
.particle:nth-child(5) { top: 15%; left: 50%; width: 5px; height: 5px; }
.particle:nth-child(6) { top: 80%; left: 45%; }

@keyframes float-particle {
  0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
  50% { transform: translateY(-30px) scale(1.5); opacity: 0.7; }
}

.blog-hero-content {
  text-align: center;
  position: relative;
  z-index: 2;
}

.modern-breadcrumb {
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

.breadcrumb-link {
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  font-weight: 500;
  font-size: 13px;
  transition: color 0.3s;
}

.breadcrumb-link:hover { color: #fff; }
.modern-breadcrumb i { color: rgba(255, 255, 255, 0.4); font-size: 9px; }
.breadcrumb-current { color: #fff; font-weight: 600; font-size: 13px; }

.blog-hero-title {
  font-size: 40px;
  font-weight: 800;
  color: #fff;
  margin-bottom: 10px;
  letter-spacing: -0.5px;
}

.title-highlight {
  background: linear-gradient(135deg, #FFE5B4, #FFD700);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.blog-hero-description {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

.hero-wave-bottom {
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  z-index: 2;
  line-height: 0;
}

.hero-wave-bottom svg {
  width: 100%;
  height: 80px;
}

/* ===== Category Filter Pills ===== */
.category-filter-section {
  background: #f8f9fa;
  padding: 0 0 30px;
}

.filter-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.filter-pills {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  flex: 1;
}

.filter-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 20px;
  background: #fff;
  border: 2px solid #e8e8e8;
  border-radius: 50px;
  font-size: 13px;
  font-weight: 600;
  color: #555;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.filter-pill:hover {
  border-color: #4A8B3F;
  color: #4A8B3F;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(74, 139, 63, 0.15);
}

.filter-pill.active {
  background: #4A8B3F;
  border-color: #4A8B3F;
  color: #fff;
  box-shadow: 0 4px 15px rgba(74, 139, 63, 0.3);
}

.filter-pill i {
  font-size: 12px;
}

.pill-count {
  background: rgba(0, 0, 0, 0.08);
  padding: 2px 8px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 700;
}

.filter-pill.active .pill-count {
  background: rgba(255, 255, 255, 0.25);
}

.search-bar {
  position: relative;
  min-width: 250px;
}

.search-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #aaa;
  font-size: 14px;
}

.search-input {
  width: 100%;
  padding: 10px 16px 10px 42px;
  border: 2px solid #e8e8e8;
  border-radius: 50px;
  font-size: 13px;
  background: #fff;
  transition: all 0.3s;
  outline: none;
}

.search-input:focus {
  border-color: #4A8B3F;
  box-shadow: 0 0 0 3px rgba(74, 139, 63, 0.1);
}

/* ===== Featured Post ===== */
.featured-section {
  background: #f8f9fa;
  padding: 0 0 40px;
}

.featured-card {
  display: flex;
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
}

.featured-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
}

.featured-img-wrap {
  position: relative;
  width: 50%;
  min-height: 380px;
  overflow: hidden;
}

.featured-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.featured-card:hover .featured-img {
  transform: scale(1.05);
}

.featured-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(27, 20, 100, 0.2), transparent);
}

.featured-badge {
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 6px 16px;
  background: linear-gradient(135deg, #FFD700, #FFA500);
  color: #333;
  font-size: 12px;
  font-weight: 700;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 5px;
}

.featured-badge i { font-size: 11px; }

.featured-content {
  width: 50%;
  padding: 40px 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.featured-category {
  display: inline-block;
  padding: 4px 14px;
  background: rgba(74, 139, 63, 0.1);
  color: #4A8B3F;
  font-size: 12px;
  font-weight: 700;
  border-radius: 20px;
  margin-bottom: 15px;
  width: fit-content;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.featured-title {
  font-size: 26px;
  font-weight: 800;
  color: #1a1a2e;
  line-height: 1.3;
  margin-bottom: 12px;
}

.featured-excerpt {
  font-size: 15px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.featured-meta {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.featured-meta span {
  font-size: 13px;
  color: #999;
  display: flex;
  align-items: center;
  gap: 6px;
}

.featured-meta i {
  color: #4A8B3F;
}

.read-more-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #4A8B3F;
  font-weight: 700;
  font-size: 14px;
  transition: gap 0.3s;
}

.featured-card:hover .read-more-link {
  gap: 14px;
}

/* ===== Blog Section ===== */
.blog-section {
  background: #f8f9fa;
  padding: 0 0 60px;
}

/* Loading skeleton */
.loading-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
  padding: 20px 0;
}

.skeleton-card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
}

.skeleton-img {
  height: 200px;
  background: #e8e8e8;
}

.skeleton-body {
  padding: 20px;
}

.skeleton-line {
  height: 14px;
  background: #e8e8e8;
  border-radius: 8px;
  margin-bottom: 12px;
}

.skeleton-line.short { width: 40%; }
.skeleton-line.medium { width: 70%; }

.pulse {
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
}

/* Empty state */
.empty-state {
  text-align: center;
  padding: 80px 20px;
}

.empty-icon {
  width: 80px;
  height: 80px;
  background: rgba(74, 139, 63, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.empty-icon i {
  font-size: 30px;
  color: #4A8B3F;
}

.empty-state h3 {
  font-size: 22px;
  font-weight: 700;
  color: #333;
  margin-bottom: 8px;
}

.empty-state p {
  color: #888;
  margin-bottom: 20px;
}

.clear-btn {
  padding: 10px 24px;
  background: #fff;
  border: 2px solid #4A8B3F;
  color: #4A8B3F;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.clear-btn:hover {
  background: #4A8B3F;
  color: #fff;
}

/* Blog Grid */
.blog-grid {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.blog-card {
  display: flex;
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.35s ease;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.04);
}

.blog-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
  border-color: transparent;
}

.card-img-wrap {
  position: relative;
  width: 280px;
  min-width: 280px;
  min-height: 220px;
  overflow: hidden;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.blog-card:hover .card-img {
  transform: scale(1.08);
}

.card-img-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
}

.blog-card:hover .card-img-overlay {
  background: rgba(27, 20, 100, 0.3);
}

.read-indicator {
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  padding: 8px 20px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  border-radius: 50px;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
}

.blog-card:hover .read-indicator {
  opacity: 1;
  transform: translateY(0);
}

.video-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 36px;
  height: 36px;
  background: rgba(233, 30, 140, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 12px;
}

.card-body {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.card-category {
  padding: 3px 12px;
  background: rgba(74, 139, 63, 0.1);
  color: #4A8B3F;
  font-size: 11px;
  font-weight: 700;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

.card-reading-time {
  font-size: 12px;
  color: #aaa;
  display: flex;
  align-items: center;
  gap: 4px;
}

.card-title {
  font-size: 18px;
  font-weight: 700;
  color: #1a1a2e;
  line-height: 1.4;
  margin-bottom: 8px;
  transition: color 0.3s;
}

.blog-card:hover .card-title {
  color: #4A8B3F;
}

.card-excerpt {
  font-size: 14px;
  color: #777;
  line-height: 1.6;
  margin-bottom: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-tags {
  display: flex;
  gap: 8px;
  margin-bottom: 14px;
}

.card-tag {
  font-size: 11px;
  color: #E91E8C;
  font-weight: 600;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 14px;
  border-top: 1px solid #f0f0f0;
}

.card-meta {
  display: flex;
  gap: 16px;
}

.card-meta span {
  font-size: 12px;
  color: #aaa;
  display: flex;
  align-items: center;
  gap: 5px;
}

.card-meta i {
  font-size: 11px;
}

.card-arrow {
  width: 34px;
  height: 34px;
  background: #f5f5f5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.card-arrow i {
  font-size: 12px;
  color: #999;
  transition: all 0.3s;
}

.blog-card:hover .card-arrow {
  background: #4A8B3F;
}

.blog-card:hover .card-arrow i {
  color: #fff;
  transform: translateX(2px);
}

/* Load More */
.load-more-wrap {
  text-align: center;
  padding: 30px 0;
}

.load-more-btn {
  padding: 12px 32px;
  background: #fff;
  border: 2px solid #4A8B3F;
  color: #4A8B3F;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.load-more-btn:hover {
  background: #4A8B3F;
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(74, 139, 63, 0.3);
}

.mini-spinner {
  width: 24px;
  height: 24px;
  border: 3px solid #e8e8e8;
  border-top-color: #4A8B3F;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin: 0 auto 8px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.loading-text {
  font-size: 13px;
  color: #999;
}

/* ===== Sidebar ===== */
.sidebar {
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

.widget-title {
  font-size: 16px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.widget-icon {
  font-size: 14px;
  color: #4A8B3F;
}

/* Search Widget */
.search-widget {
  padding: 16px;
}

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
  transition: all 0.3s;
  outline: none;
  background: #f8f9fa;
}

.search-box input:focus {
  border-color: #4A8B3F;
  background: #fff;
  box-shadow: 0 0 0 3px rgba(74, 139, 63, 0.08);
}

/* Categories Widget */
.category-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.category-item {
  display: flex;
  align-items: center;
  padding: 10px 14px;
  border-radius: 10px;
  text-decoration: none;
  color: #555;
  font-size: 14px;
  transition: all 0.3s;
  gap: 10px;
}

.category-item:hover {
  background: #f8f9fa;
  color: #4A8B3F;
}

.category-item.active {
  background: rgba(74, 139, 63, 0.08);
  color: #4A8B3F;
  font-weight: 600;
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

.category-item.active .cat-count {
  background: rgba(74, 139, 63, 0.15);
  color: #4A8B3F;
}

/* Recent Posts Widget */
.recent-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.recent-item {
  display: flex;
  align-items: center;
  gap: 14px;
  text-decoration: none;
  padding: 8px;
  border-radius: 12px;
  transition: all 0.3s;
  position: relative;
}

.recent-item:hover {
  background: #f8f9fa;
}

.recent-number {
  font-size: 24px;
  font-weight: 800;
  color: #e8e8e8;
  line-height: 1;
  min-width: 28px;
  transition: color 0.3s;
}

.recent-item:hover .recent-number {
  color: #4A8B3F;
}

.recent-img-wrap {
  width: 56px;
  height: 56px;
  border-radius: 10px;
  overflow: hidden;
  flex-shrink: 0;
}

.recent-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.recent-info {
  flex: 1;
  min-width: 0;
}

.recent-title {
  font-size: 13px;
  font-weight: 600;
  color: #333;
  line-height: 1.4;
  margin-bottom: 4px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.recent-item:hover .recent-title {
  color: #4A8B3F;
}

.recent-date {
  font-size: 11px;
  color: #aaa;
  display: flex;
  align-items: center;
  gap: 4px;
}

/* Tags Widget */
.tags-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.cloud-tag {
  padding: 6px 14px;
  background: #f8f9fa;
  color: #666;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  transition: all 0.3s;
  cursor: default;
  border: 1px solid #eee;
}

.cloud-tag:hover {
  background: rgba(233, 30, 140, 0.08);
  color: #E91E8C;
  border-color: rgba(233, 30, 140, 0.2);
}

/* CTA Widget */
.cta-widget {
  padding: 0 !important;
  overflow: hidden;
  border: none !important;
}

.cta-card {
  background: linear-gradient(135deg, #1B1464 0%, #4A8B3F 100%);
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

.cta-content {
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
  color: #1B1464;
  border-radius: 50px;
  font-weight: 700;
  font-size: 14px;
  text-decoration: none;
  transition: all 0.3s;
}

.cta-btn:hover {
  background: #FFE5B4;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

/* ===== Dual Scroll ===== */
.blog-dual-scroll {
  display: flex;
}

.blog-scroll-col,
.sidebar-scroll-col {
  height: calc(100vh - 80px);
  overflow-y: auto;
  padding-bottom: 40px;
}

.blog-scroll-col::-webkit-scrollbar,
.sidebar-scroll-col::-webkit-scrollbar {
  width: 4px;
}

.blog-scroll-col::-webkit-scrollbar-track,
.sidebar-scroll-col::-webkit-scrollbar-track {
  background: transparent;
}

.blog-scroll-col::-webkit-scrollbar-thumb,
.sidebar-scroll-col::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.blog-scroll-col::-webkit-scrollbar-thumb:hover,
.sidebar-scroll-col::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.25);
}

.blog-scroll-col,
.sidebar-scroll-col {
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.1) transparent;
}

/* ===== Responsive ===== */
@media (max-width: 991px) {
  .blog-hero-bg { padding: 60px 0 70px; }
  .blog-hero-title { font-size: 34px; }
  .blog-hero-description { font-size: 14px; }

  .filter-bar { flex-direction: column; align-items: stretch; }
  .search-bar { min-width: unset; }

  .featured-card { flex-direction: column; }
  .featured-img-wrap { width: 100%; min-height: 250px; }
  .featured-content { width: 100%; padding: 28px; }

  .blog-card { flex-direction: column; }
  .card-img-wrap { width: 100%; min-width: unset; min-height: 200px; }

  .blog-scroll-col,
  .sidebar-scroll-col {
    height: auto;
    overflow-y: visible;
  }
}

@media (max-width: 767px) {
  .blog-hero-bg { padding: 50px 0 60px; }
  .blog-hero-title { font-size: 28px; }
  .blog-hero-description { font-size: 13px; }
  .hero-wave-bottom svg { height: 60px; }

  .filter-pills { gap: 6px; }
  .filter-pill { padding: 6px 14px; font-size: 12px; }

  .featured-content { padding: 22px; }
  .featured-title { font-size: 20px; }

  .card-body { padding: 18px; }
  .card-title { font-size: 16px; }
}

@media (max-width: 575px) {
  .blog-hero-bg { padding: 45px 0 50px; }
  .blog-hero-title { font-size: 24px; }
  .blog-hero-description { font-size: 13px; }
  .hero-wave-bottom svg { height: 50px; }

  .featured-meta { gap: 12px; }
  .card-meta { gap: 10px; }
}
</style>
