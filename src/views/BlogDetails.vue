<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { initTemplateScripts, cleanupTemplateScripts } from '@/utils/initScripts'
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
  if (imagePath.startsWith('http') || imagePath.startsWith('data:')) return imagePath
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

// Navigate to another post
const goToPost = (slug) => {
  router.push({ name: 'BlogDetails', params: { slug } })
}

// Navigate to blog list with category filter
const goToCategory = (categoryId) => {
  router.push({ name: 'Blog', query: { category: categoryId } })
}

// Get author name
const authorName = computed(() => {
  if (!post.value?.author) return 'Anonymous'
  return `${post.value.author.first_name || ''} ${post.value.author.last_name || ''}`.trim() || 'Anonymous'
})

// Initialize
const fetchData = async () => {
  const slug = route.params.slug
  if (slug) {
    await blogStore.fetchPost(slug)
    // Also fetch categories for sidebar
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

// Watch for route changes (when navigating between blog posts)
watch(() => route.params.slug, async (newSlug) => {
  if (newSlug) {
    await fetchData()
    await nextTick()
    setTimeout(() => {
      initTemplateScripts()
    }, 100)
  }
})
</script>

<template>
  <!-- Modern Hero Section -->
  <section class="blogdetails-hero-section">
    <div class="blogdetails-hero-bg">
      <div class="container">
        <div class="blogdetails-hero-content">
          <nav class="modern-breadcrumb">
            <router-link to="/" class="breadcrumb-link">Home</router-link>
            <i class="fas fa-chevron-right"></i>
            <router-link to="/blog" class="breadcrumb-link">Blog</router-link>
            <i class="fas fa-chevron-right"></i>
            <span class="breadcrumb-current">{{ post?.category?.name || 'Article' }}</span>
          </nav>
          <div class="hero-badge">
            <i class="fas fa-newspaper badge-icon"></i>
            <span>{{ post?.category?.name || 'Article' }}</span>
          </div>
          <h1 class="blogdetails-hero-title" v-if="post">
            {{ post.title }}
          </h1>
          <h1 class="blogdetails-hero-title" v-else>
            Loading...
          </h1>
        </div>
      </div>
    </div>
    <div class="hero-wave-bottom">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z" fill="#FFFFFF"/>
      </svg>
    </div>
  </section>

  <!--======== Blog Section ========-->
  <section class="vs-blog-wrapper blog-details space-page">
    <div class="container">
      <!-- Loading State -->
      <div v-if="loading" class="text-center py-5">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <p class="mt-3">Loading article...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error && !post" class="text-center py-5">
        <i class="fas fa-exclamation-circle fa-3x text-danger mb-3"></i>
        <h4>Article Not Found</h4>
        <p class="text-muted">The article you're looking for doesn't exist or has been removed.</p>
        <router-link to="/blog" class="vs-btn wave-btn">
          Back to Blog
        </router-link>
      </div>

      <!-- Post Content -->
      <div v-else-if="post" class="row gx-60">
        <div class="col-xl-8 col-lg-7">
          <div class="vs-blog blog-single wow fadeInUp" data-wow-delay="0.1s">
            <!-- Featured Image -->
            <div class="blog-img">
              <img :src="getImageUrl(post.featured_image)" :alt="post.title">
              <a v-if="post.video_url" :href="post.video_url" class="popup-video play-btn style-1">
                <i class="fas fa-play"></i>
              </a>
            </div>

            <div class="blog-content">
              <!-- Blog Meta -->
              <div class="blog-meta">
                <span><i class="fal fa-calendar-alt"></i><a href="#">{{ formatDate(post.published_at) }}</a></span>
                <span><i class="fal fa-user-tag"></i>by <a href="#">{{ authorName }}</a></span>
                <span v-if="post.category"><i class="fal fa-folder-open"></i><a href="#" @click.prevent="goToCategory(post.blog_category_id)">{{ post.category.name }}</a></span>
                <span><i class="fal fa-eye"></i><a href="#">{{ post.views || 0 }} Views</a></span>
              </div>

              <!-- Blog Title -->
              <h2 class="blog-title">{{ post.title }}</h2>

              <!-- Excerpt -->
              <p v-if="post.excerpt" class="lead">{{ post.excerpt }}</p>

              <!-- Blog Content -->
              <div class="blog-full-content" v-html="post.content"></div>
            </div>

            <!-- Tags and Share -->
            <div class="share-links clearfix wow fadeInUp" data-wow-delay="0.1s">
              <div class="row justify-content-between">
                <div class="col-md-auto">
                  <span class="share-links-title">Tags: </span>
                  <div v-if="post.tags && post.tags.length" class="tagcloud">
                    <a v-for="tag in post.tags" :key="tag" href="#">{{ tag }}</a>
                  </div>
                  <span v-else class="text-muted">No tags</span>
                </div>
                <div class="col-md-auto text-md-end">
                  <span class="share-links-title">Share Now:</span>
                  <ul class="multi-social">
                    <li>
                      <a :href="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`" target="_blank">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a :href="`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`" target="_blank">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a :href="`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`" target="_blank">
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a :href="`https://wa.me/?text=${encodeURIComponent(post.title + ' ' + window.location.href)}`" target="_blank">
                        <i class="fab fa-whatsapp"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Author Box -->
            <div v-if="post.author" class="blog-author d-md-flex align-items-center wow fadeInUp" data-wow-delay="0.1s">
              <div class="media-img">
                <div class="author-avatar">
                  {{ (post.author.first_name?.[0] || 'A').toUpperCase() }}
                </div>
              </div>
              <div class="media-body">
                <p class="author-degi">Written by</p>
                <h3 class="author-name"><a href="#">{{ authorName }}</a></h3>
                <p class="author-text mb-0">
                  {{ post.author.bio || 'Content creator at Mind Growup Jr, passionate about helping children learn and grow through engaging educational content.' }}
                </p>
              </div>
            </div>

            <!-- Related Posts -->
            <div v-if="relatedPosts.length > 0" class="related-posts wow fadeInUp" data-wow-delay="0.1s">
              <h3 class="blog-inner-title">Related Articles</h3>
              <div class="row">
                <div v-for="related in relatedPosts" :key="related.id" class="col-md-4">
                  <div class="related-post-card" @click="goToPost(related.slug)">
                    <img :src="getImageUrl(related.featured_image)" :alt="related.title">
                    <h4>{{ related.title }}</h4>
                    <span class="date">{{ formatDate(related.published_at) }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="col-xl-4 col-lg-5">
          <aside class="sidebar-area">
            <!-- Search Widget -->
            <div class="widget widget_search wow fadeInUp" data-wow-delay="0.1s">
              <h4 class="widget_title">Search</h4>
              <form class="search-form" @submit.prevent="router.push({ name: 'Blog', query: { q: $event.target.querySelector('input').value } })">
                <input type="text" placeholder="Search Here">
                <button type="submit"><i class="far fa-search"></i></button>
              </form>
            </div>

            <!-- Categories Widget -->
            <div class="widget widget_categories wow fadeInUp" data-wow-delay="0.1s">
              <h4 class="widget_title">Categories</h4>
              <ul>
                <li v-for="cat in categories" :key="cat.id">
                  <router-link :to="{ name: 'Blog', query: { category: cat.id } }">{{ cat.name }}</router-link>
                  <span>{{ cat.posts_count || 0 }}</span>
                </li>
              </ul>
            </div>

            <!-- Related Posts Widget -->
            <div v-if="relatedPosts.length > 0" class="widget wow fadeInUp" data-wow-delay="0.1s">
              <h4 class="widget_title">You May Also Like</h4>
              <div class="recent-post-wrap">
                <div v-for="related in relatedPosts" :key="related.id" class="recent-post">
                  <div class="media-img">
                    <a href="#" @click.prevent="goToPost(related.slug)">
                      <img :src="getImageUrl(related.featured_image)" :alt="related.title">
                    </a>
                  </div>
                  <div class="media-body">
                    <h4 class="post-title">
                      <a href="#" @click.prevent="goToPost(related.slug)">{{ related.title }}</a>
                    </h4>
                    <div class="recent-post-meta">
                      <a href="#"><i class="fal fa-calendar-alt"></i> {{ formatDate(related.published_at) }}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Tags Widget -->
            <div v-if="post.tags && post.tags.length" class="widget widget_tag_cloud wow fadeInUp" data-wow-delay="0.1s">
              <h4 class="widget_title">Post Tags</h4>
              <div class="tagcloud">
                <a v-for="tag in post.tags" :key="tag" href="#">{{ tag }}</a>
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
/* Modern Hero Section - Blog Details */
.blogdetails-hero-section {
  position: relative;
  overflow: hidden;
  z-index: 10;
}

.blogdetails-hero-bg {
  background: linear-gradient(135deg, #6C63FF 0%, #A29BFE 45%, #FF6584 100%);
  padding: 100px 0 60px;
  position: relative;
  z-index: 1;
}

.blogdetails-hero-content {
  text-align: center;
  position: relative;
  z-index: 2;
}

/* Modern Breadcrumb */
.modern-breadcrumb {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  padding: 10px 24px;
  border-radius: 50px;
  margin-bottom: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.breadcrumb-link {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.breadcrumb-link:hover {
  color: #fff;
  transform: translateX(-2px);
}

.modern-breadcrumb i {
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
}

.breadcrumb-current {
  color: #fff;
  font-weight: 600;
}

/* Hero Badge */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 12px 28px;
  border-radius: 50px;
  margin-bottom: 28px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  animation: float 3s ease-in-out infinite;
}

.badge-icon {
  font-size: 20px;
  color: #fff;
}

.hero-badge span {
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 0.5px;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Hero Title */
.blogdetails-hero-title {
  font-size: 36px;
  font-weight: 800;
  line-height: 1.3;
  margin-bottom: 0;
  color: #fff;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

/* Wave Bottom */
.hero-wave-bottom {
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  z-index: 1;
}

.hero-wave-bottom svg {
  display: block;
  width: 100%;
  height: 80px;
}

/* Blog Content */
.blog-full-content {
  line-height: 1.8;
  font-size: 16px;
}

.blog-full-content :deep(h2),
.blog-full-content :deep(h3),
.blog-full-content :deep(h4) {
  color: #333;
  margin-top: 30px;
  margin-bottom: 15px;
}

.blog-full-content :deep(p) {
  margin-bottom: 15px;
  color: #555;
}

.blog-full-content :deep(ul),
.blog-full-content :deep(ol) {
  margin-bottom: 15px;
  padding-left: 20px;
}

.blog-full-content :deep(li) {
  margin-bottom: 8px;
  color: #555;
}

.blog-full-content :deep(blockquote) {
  border-left: 4px solid #6C63FF;
  padding-left: 20px;
  margin: 20px 0;
  font-style: italic;
  color: #666;
}

.blog-full-content :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 15px 0;
}

.lead {
  font-size: 18px;
  color: #666;
  margin-bottom: 25px;
  line-height: 1.6;
}

/* Author Avatar */
.author-avatar {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #6C63FF 0%, #A29BFE 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  color: white;
  font-weight: 700;
}

/* Related Posts */
.related-posts {
  margin-top: 40px;
  padding-top: 30px;
  border-top: 1px solid #eee;
}

.related-post-card {
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 20px;
}

.related-post-card:hover {
  transform: translateY(-5px);
}

.related-post-card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
}

.related-post-card h4 {
  font-size: 16px;
  margin-bottom: 5px;
  color: #333;
  line-height: 1.4;
}

.related-post-card .date {
  font-size: 12px;
  color: #999;
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

/* Responsive Design */
@media (max-width: 991px) {
  .blogdetails-hero-bg {
    padding: 80px 0 50px;
  }

  .blogdetails-hero-title {
    font-size: 30px;
  }

  .hero-wave-bottom svg {
    height: 60px;
  }
}

@media (max-width: 767px) {
  .blogdetails-hero-bg {
    padding: 70px 0 40px;
  }

  .blogdetails-hero-title {
    font-size: 26px;
  }

  .modern-breadcrumb {
    padding: 8px 20px;
    gap: 10px;
    font-size: 14px;
  }

  .hero-badge {
    padding: 10px 24px;
    font-size: 14px;
  }

  .badge-icon {
    font-size: 18px;
  }

  .hero-wave-bottom svg {
    height: 50px;
  }
}

@media (max-width: 575px) {
  .blogdetails-hero-bg {
    padding: 74px 0 35px;
  }

  .blogdetails-hero-title {
    font-size: 22px;
  }

  .hero-wave-bottom svg {
    height: 40px;
  }
}
</style>
