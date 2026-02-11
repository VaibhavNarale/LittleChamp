<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick, watch } from 'vue'
import { useRouter } from 'vue-router'
import { initTemplateScripts, cleanupTemplateScripts } from '@/utils/initScripts'
import { useBlogStore } from '@/stores/blog'

// Fallback images
import mathImg from '@/assets/math-gamification.jpg'
import readingImg1 from '@/assets/reading-gamification-1.jpg'

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

// Get image URL - handle both full URLs and cloud storage paths
const getImageUrl = (imagePath) => {
  if (!imagePath) return mathImg // fallback
  if (imagePath.startsWith('http') || imagePath.startsWith('data:')) return imagePath
  // Assume it's a cloud storage path - prepend the storage URL
  const storageUrl = import.meta.env.VITE_STORAGE_URL || 'https://ewr1.vultrobjects.com'
  return `${storageUrl}/${imagePath}`
}

// Format date
const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'long',
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

// Initialize
onMounted(async () => {
  // Fetch data
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
          <!-- Loading State -->
          <div v-if="loading && blogPosts.length === 0" class="text-center py-5">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <p class="mt-3">Loading posts...</p>
          </div>

          <!-- Empty State -->
          <div v-else-if="!loading && blogPosts.length === 0" class="text-center py-5">
            <i class="fas fa-newspaper fa-3x text-muted mb-3"></i>
            <h4>No posts found</h4>
            <p class="text-muted">Try adjusting your search or filter criteria.</p>
            <button v-if="selectedCategoryId || searchQuery" class="vs-btn" @click="clearCategoryFilter(); searchQuery = ''">
              Clear Filters
            </button>
          </div>

          <!-- Blog Posts Loop -->
          <div
            v-for="post in blogPosts"
            :key="post.id"
            class="vs-blog blog-single wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <!-- Blog Image -->
            <div class="blog-img">
              <img :src="getImageUrl(post.featured_image)" :alt="post.title" @click="goToPost(post.slug)" style="cursor: pointer;">
              <a v-if="post.video_url" :href="post.video_url" class="popup-video play-btn style-1">
                <i class="fas fa-play"></i>
              </a>
            </div>

            <!-- Blog Content -->
            <div class="blog-content">
              <!-- Blog Meta -->
              <div class="blog-meta">
                <span v-if="post.category" class="category-badge">{{ post.category.name }}</span>
                <a href="#"><i class="fal fa-eye"></i> {{ post.views || 0 }} Views</a>
                <a href="#"><i class="fal fa-calendar-alt"></i> {{ formatDate(post.published_at) }}</a>
              </div>

              <!-- Blog Title -->
              <h3 class="blog-title" @click="goToPost(post.slug)" style="cursor: pointer;">{{ post.title }}</h3>

              <!-- Excerpt -->
              <p class="blog-text">{{ post.excerpt }}</p>

              <!-- Tags -->
              <div v-if="post.tags && post.tags.length" class="blog-tags-preview">
                <span v-for="tag in post.tags.slice(0, 3)" :key="tag" class="tag-badge-small">{{ tag }}</span>
              </div>

              <!-- Read More Button -->
              <button @click="goToPost(post.slug)" class="link-btn">
                Read More
                <i class="far fa-long-arrow-right"></i>
              </button>
            </div>
          </div>
          <!-- / Blog Posts Loop -->

          <!-- Load More Button -->
          <div v-if="hasMorePosts && !loading" class="text-center mt-4 mb-4">
            <button class="vs-btn wave-btn" @click="loadMore">
              Load More Posts
            </button>
          </div>

          <!-- Loading More -->
          <div v-if="loading && blogPosts.length > 0" class="text-center py-3">
            <div class="spinner-border spinner-border-sm text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <span class="ms-2">Loading more...</span>
          </div>
        </div> <!-- / Blog end -->

        <!-- Sidebar -->
        <div class="col-xl-4 col-lg-5">
          <aside class="sidebar-area">

            <!-- Search Widget -->
            <div class="widget widget_search wow fadeInUp" data-wow-delay="0.1s">
              <h4 class="widget_title">Search Articles</h4>
              <form class="search-form" @submit.prevent="handleSearch">
                <input v-model="searchQuery" type="text" placeholder="Search blog posts...">
                <button type="submit"><i class="far fa-search"></i></button>
              </form>
            </div>

            <!-- Categories Widget -->
            <div class="widget widget_categories wow fadeInUp" data-wow-delay="0.1s">
              <h4 class="widget_title">Categories</h4>
              <ul>
                <li :class="{ 'active': !selectedCategoryId }">
                  <a href="#" @click.prevent="clearCategoryFilter">All Categories</a>
                  <span>{{ blogStore.totalPosts }}</span>
                </li>
                <li v-for="cat in categories" :key="cat.id" :class="{ 'active': selectedCategoryId === cat.id }">
                  <a href="#" @click.prevent="filterByCategory(cat.id)">{{ cat.name }}</a>
                  <span>{{ cat.posts_count || 0 }}</span>
                </li>
              </ul>
            </div>

            <!-- Recent Posts Widget -->
            <div class="widget wow fadeInUp" data-wow-delay="0.1s">
              <h4 class="widget_title">Recent Articles</h4>
              <div class="recent-post-wrap">
                <div v-for="post in recentPosts" :key="post.id" class="recent-post">
                  <div class="media-img">
                    <a href="#" @click.prevent="goToPost(post.slug)">
                      <img :src="getImageUrl(post.featured_image)" :alt="post.title">
                    </a>
                  </div>
                  <div class="media-body">
                    <h4 class="post-title">
                      <a href="#" @click.prevent="goToPost(post.slug)">{{ post.title }}</a>
                    </h4>
                    <div class="recent-post-meta">
                      <a href="#"><i class="fal fa-calendar-alt"></i> {{ formatDate(post.published_at) }}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Tags Widget -->
            <div v-if="allTags.length > 0" class="widget widget_tag_cloud wow fadeInUp" data-wow-delay="0.1s">
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

.blog-tags-preview {
  display: flex;
  gap: 8px;
  margin-bottom: 15px;
}

.tag-badge-small {
  display: inline-block;
  padding: 3px 10px;
  background: #f0f0f0;
  color: #666;
  border-radius: 12px;
  font-size: 11px;
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

/* Active category */
.widget_categories li.active a {
  color: #6C63FF;
  font-weight: 600;
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
