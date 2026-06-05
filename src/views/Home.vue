<script setup>
import { onMounted, onBeforeUnmount, nextTick, ref, computed } from 'vue'
import {
  initTemplateScripts,
  cleanupTemplateScripts,
} from '@/utils/initScripts'
import { useBlogStore } from '@/stores/blog'

// Import new images (WebP optimized)
import heroImage1 from '@/assets/new-images/new-image1.webp'
import heroImage2 from '@/assets/new-images/new-image2.webp'
import heroImage3 from '@/assets/new-images/new-image3.webp'
import mathImage from '@/assets/new-images/vedic-math.webp'
import readingImage from '@/assets/new-images/gettyimages-123273724-640x640.webp'
import scienceImage from '@/assets/new-images/Kids_hands_creating_on_card_arches_with_an_array_of_craft_suppplies.webp'

// Blog store for dynamic blog posts
const blogStore = useBlogStore()
const blogLoading = ref(true)
const storageUrl =
  import.meta.env.VITE_STORAGE_URL || 'https://blr1.vultrobjects.com/space-1/'

const blogPosts = computed(() => blogStore.posts.slice(0, 3))

function getImageUrl(path) {
  if (!path) return '/assets/img/blog/blog-1.jpg'
  if (path.startsWith('http') || path.startsWith('/')) return path
  return `${storageUrl}${path}`
}

function formatDate(dateStr) {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

function stripHtml(html) {
  if (!html) return ''
  return html.replace(/<[^>]*>/g, '')
}

onMounted(async () => {
  await nextTick()

  setTimeout(() => {
    initTemplateScripts()
  }, 100)

  // Fetch blog posts for the blog section
  blogStore.fetchPosts({ perPage: 3, page: 1 }).finally(() => {
    blogLoading.value = false
  })
})

onBeforeUnmount(() => {
  cleanupTemplateScripts()
})
</script>

<template>
  <!-- Rocket Animation on Page Load - Now in Preloader Component -->
  <!-- <div class="rocket-animation-container">
    <img :src="rocketImage" alt="Rocket" class="rocket-launch">
  </div> -->

  <!--======== Hero Section ========-->
  <section class="vs-hero-wrapper position-relative">
    <!-- Floating Particles (visible across all slides) -->
    <div class="hero-particles">
      <span
        v-for="n in 12"
        :key="n"
        class="hero-particle"
        :style="{
          animationDelay: `${n * 0.5}s`,
          left: `${((n * 7.8 + 3) % 94) + 3}%`,
          animationDuration: `${5 + (n % 3) * 1.5}s`,
        }"
      ></span>
    </div>
    <!-- Shining Stars -->
    <div class="hero-stars">
      <span class="hero-star hero-star--1">&#10022;</span>
      <span class="hero-star hero-star--2">&#10022;</span>
      <span class="hero-star hero-star--3">&#10022;</span>
      <span class="hero-star hero-star--4">&#10022;</span>
      <span class="hero-star hero-star--5">&#10022;</span>
      <span class="hero-star hero-star--6">&#10022;</span>
      <span class="hero-star hero-star--7">&#10022;</span>
      <span class="hero-star hero-star--8">&#10022;</span>
    </div>

    <div
      class="hero-slider1 vs-carousel"
      data-slide-show="1"
      data-md-slide-show="1"
      data-fade="true"
    >
      <!-- Hero Slide 1: Main Value Proposition -->
      <div class="vs-hero-inner">
        <div class="vs-hero-bg" :data-bg-src="heroImage1"></div>
        <div class="hero-gradient-overlay"></div>
        <div class="container h-100">
          <div class="row align-items-center justify-content-end h-100">
            <div class="col-lg-6 col-md-8">
              <div class="modern-hero-content">
                <div
                  class="hero-badge"
                  data-ani="slideinup"
                  data-ani-delay="0s"
                >
                  <span class="hero-badge-dot"></span>
                  <span>Learn • Play • Grow</span>
                </div>

                <h1
                  class="modern-hero-title"
                  data-ani="slideinup"
                  data-ani-delay="0.1s"
                >
                  Make Learning
                  <span class="gradient-text d-block">Magical & Fun</span>
                  for Your Child!
                </h1>

                <p
                  class="modern-hero-subtitle"
                  data-ani="slideinup"
                  data-ani-delay="0.2s"
                >
                  Join Indian kids worldwide exploring 500+ interactive
                  educational games. Perfect for Pre-K to Grade 7 learners.
                </p>

                <div
                  class="modern-features-list"
                  data-ani="slideinup"
                  data-ani-delay="0.3s"
                >
                  <div class="feature-item">
                    <i class="fas fa-check-circle"></i>
                    <span>500+ Interactive Games</span>
                  </div>
                  <div class="feature-item">
                    <i class="fas fa-check-circle"></i>
                    <span>Pre-K to Grade 7</span>
                  </div>
                  <div class="feature-item">
                    <i class="fas fa-check-circle"></i>
                    <span>Safe & Ad-Free</span>
                  </div>
                </div>

                <div
                  class="modern-cta-group"
                  data-ani="slideinup"
                  data-ani-delay="0.4s"
                >
                  <router-link to="/register" class="modern-btn btn-primary">
                    <i class="fas fa-rocket"></i>
                    <span>Book Free AI Strategy Call</span>
                  </router-link>
                  <router-link to="/pricing" class="modern-btn btn-outline">
                    <span>View Pricing</span>
                    <i class="fas fa-arrow-right"></i>
                  </router-link>
                </div>
                <p
                  class="cta-response-note"
                  data-ani="slideinup"
                  data-ani-delay="0.5s"
                >
                  We respond within 24 hours
                </p>

                <div
                  class="trust-indicators"
                  data-ani="slideinup"
                  data-ani-delay="0.5s"
                >
                  <div class="trust-item">
                    <i class="fas fa-shield-alt"></i>
                    <span>Safe & Secure</span>
                  </div>
                  <div class="trust-item">
                    <i class="fas fa-credit-card"></i>
                    <span>All Payments Required</span>
                  </div>
                  <div class="trust-item">
                    <i class="fas fa-ban"></i>
                    <span>Ad-Free</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Brand Wave Bottom -->
        <div class="hero-wave-bottom">
          <svg
            class="wave-layer wave-layer-1"
            viewBox="0 0 1440 200"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,96 C240,140 480,160 720,120 C960,80 1200,100 1440,120 L1440,200 L0,200 Z"
              fill="#4A8B3F"
              opacity="0.15"
            />
          </svg>
          <svg
            class="wave-layer wave-layer-2"
            viewBox="0 0 1440 200"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,120 C320,160 640,140 960,110 C1200,90 1320,100 1440,130 L1440,200 L0,200 Z"
              fill="#E91E8C"
              opacity="0.12"
            />
          </svg>
          <svg
            class="wave-layer wave-layer-3"
            viewBox="0 0 1440 200"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,140 C360,170 720,150 1080,135 C1260,125 1350,140 1440,150 L1440,200 L0,200 Z"
              fill="#f5f5f5"
              opacity="0.8"
            />
          </svg>
          <svg
            class="wave-layer wave-layer-4"
            viewBox="0 0 1440 200"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,160 C400,180 800,175 1200,165 C1320,160 1380,170 1440,175 L1440,200 L0,200 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </div>

      <!-- Hero Slide 2: Personalized Learning -->
      <div class="vs-hero-inner">
        <div class="vs-hero-bg" :data-bg-src="heroImage2"></div>
        <div class="hero-gradient-overlay hero-overlay--blue"></div>
        <div class="container h-100">
          <div class="row align-items-center justify-content-end h-100">
            <div class="col-lg-6 col-md-8">
              <div class="modern-hero-content">
                <div
                  class="hero-badge"
                  data-ani="slideinup"
                  data-ani-delay="0s"
                >
                  <span class="hero-badge-dot hero-badge-dot--blue"></span>
                  <span>Adapt • Grow • Excel</span>
                </div>

                <h1
                  class="modern-hero-title"
                  data-ani="slideinup"
                  data-ani-delay="0.1s"
                >
                  <span class="gradient-text d-block"
                    >Personalized Learning</span
                  >
                  Paths for Every Child
                </h1>

                <p
                  class="modern-hero-subtitle"
                  data-ani="slideinup"
                  data-ani-delay="0.2s"
                >
                  Our adaptive platform automatically adjusts to your child's
                  skill level, ensuring they're always challenged but never
                  frustrated.
                </p>

                <div
                  class="modern-features-list"
                  data-ani="slideinup"
                  data-ani-delay="0.3s"
                >
                  <div class="feature-item">
                    <i class="fas fa-check-circle"></i>
                    <span>Adaptive Difficulty</span>
                  </div>
                  <div class="feature-item">
                    <i class="fas fa-check-circle"></i>
                    <span>Real-Time Progress</span>
                  </div>
                  <div class="feature-item">
                    <i class="fas fa-check-circle"></i>
                    <span>Skill Mastery Tracking</span>
                  </div>
                </div>

                <div
                  class="modern-cta-group"
                  data-ani="slideinup"
                  data-ani-delay="0.4s"
                >
                  <router-link to="/features" class="modern-btn btn-primary">
                    <i class="fas fa-lightbulb"></i>
                    <span>See How It Works</span>
                  </router-link>
                  <router-link to="/register" class="modern-btn btn-outline">
                    <span>Try It Free</span>
                    <i class="fas fa-arrow-right"></i>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Brand Wave Bottom -->
        <div class="hero-wave-bottom">
          <svg
            class="wave-layer wave-layer-1"
            viewBox="0 0 1440 200"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,96 C240,140 480,160 720,120 C960,80 1200,100 1440,120 L1440,200 L0,200 Z"
              fill="#4A8B3F"
              opacity="0.15"
            />
          </svg>
          <svg
            class="wave-layer wave-layer-2"
            viewBox="0 0 1440 200"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,120 C320,160 640,140 960,110 C1200,90 1320,100 1440,130 L1440,200 L0,200 Z"
              fill="#E91E8C"
              opacity="0.12"
            />
          </svg>
          <svg
            class="wave-layer wave-layer-3"
            viewBox="0 0 1440 200"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,140 C360,170 720,150 1080,135 C1260,125 1350,140 1440,150 L1440,200 L0,200 Z"
              fill="#f5f5f5"
              opacity="0.8"
            />
          </svg>
          <svg
            class="wave-layer wave-layer-4"
            viewBox="0 0 1440 200"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,160 C400,180 800,175 1200,165 C1320,160 1380,170 1440,175 L1440,200 L0,200 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </div>

      <!-- Hero Slide 3: Teachers -->
      <div class="vs-hero-inner">
        <div class="vs-hero-bg" :data-bg-src="heroImage3"></div>
        <div class="hero-gradient-overlay hero-overlay--teal"></div>
        <div class="container h-100">
          <div class="row align-items-center justify-content-end h-100">
            <div class="col-lg-6 col-md-8">
              <div class="modern-hero-content">
                <div
                  class="hero-badge badge-teacher"
                  data-ani="slideinup"
                  data-ani-delay="0s"
                >
                  <i class="fas fa-graduation-cap"></i>
                  <span>For Educators</span>
                </div>

                <h1
                  class="modern-hero-title"
                  data-ani="slideinup"
                  data-ani-delay="0.1s"
                >
                  <span class="gradient-text d-block">100% Free</span>
                  for Teachers Forever!
                </h1>

                <p
                  class="modern-hero-subtitle"
                  data-ani="slideinup"
                  data-ani-delay="0.2s"
                >
                  Join 100+ educators using Mind Growup Jr to engage students
                  and track progress in their classrooms.
                </p>

                <div
                  class="modern-features-list"
                  data-ani="slideinup"
                  data-ani-delay="0.3s"
                >
                  <div class="feature-item">
                    <i class="fas fa-check-circle"></i>
                    <span>Classroom Management</span>
                  </div>
                  <div class="feature-item">
                    <i class="fas fa-check-circle"></i>
                    <span>Student Progress Reports</span>
                  </div>
                  <div class="feature-item">
                    <i class="fas fa-check-circle"></i>
                    <span>Lesson Planning Tools</span>
                  </div>
                </div>

                <div
                  class="modern-cta-group"
                  data-ani="slideinup"
                  data-ani-delay="0.4s"
                >
                  <router-link to="/register" class="modern-btn btn-primary">
                    <i class="fas fa-chalkboard-teacher"></i>
                    <span>Book Free AI Strategy Call</span>
                  </router-link>
                  <router-link
                    to="/for-teachers"
                    class="modern-btn btn-outline"
                  >
                    <span>Learn More</span>
                    <i class="fas fa-arrow-right"></i>
                  </router-link>
                </div>

                <div
                  class="teacher-badge"
                  data-ani="slideinup"
                  data-ani-delay="0.5s"
                >
                  <i class="fas fa-infinity"></i>
                  <span>Forever Free • No Trials • All Payments Required</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Brand Wave Bottom -->
        <div class="hero-wave-bottom">
          <svg
            class="wave-layer wave-layer-1"
            viewBox="0 0 1440 200"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,96 C240,140 480,160 720,120 C960,80 1200,100 1440,120 L1440,200 L0,200 Z"
              fill="#4A8B3F"
              opacity="0.15"
            />
          </svg>
          <svg
            class="wave-layer wave-layer-2"
            viewBox="0 0 1440 200"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,120 C320,160 640,140 960,110 C1200,90 1320,100 1440,130 L1440,200 L0,200 Z"
              fill="#E91E8C"
              opacity="0.12"
            />
          </svg>
          <svg
            class="wave-layer wave-layer-3"
            viewBox="0 0 1440 200"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,140 C360,170 720,150 1080,135 C1260,125 1350,140 1440,150 L1440,200 L0,200 Z"
              fill="#f5f5f5"
              opacity="0.8"
            />
          </svg>
          <svg
            class="wave-layer wave-layer-4"
            viewBox="0 0 1440 200"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,160 C400,180 800,175 1200,165 C1320,160 1380,170 1440,175 L1440,200 L0,200 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </div>
    </div>
  </section>
  <!--======== / Hero Section ========-->

  <!--======== Features Section ========-->
  <section class="service-section space">
    <div class="container">
      <div
        class="row text-center justify-content-center wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div class="col-xl-8 col-lg-9">
          <div class="title-area">
            <span class="sub-title">Why Choose Mind Growup Jr</span>
            <h2 class="sec-title">
              Powerful Features That Make Learning
              <span class="gradient-text">Irresistible</span>
            </h2>
            <p class="mt-3 text-muted">
              Everything your child needs to excel in Math, Reading, and Craft &
              Drawing
            </p>
          </div>
        </div>
      </div>
      <div class="row gy-30 justify-content-center">
        <!-- Feature 1: Interactive Games -->
        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="feature-card feature-card--pink">
            <div class="feature-card__icon feature-icon--transparent">
              <img
                src="@/assets/game-controllers.png"
                alt="Interactive Games"
                class="feature-icon-img"
              />
            </div>
            <span class="feature-card__highlight highlight--pink">500+</span>
            <h3 class="feature-card__title">500+ Interactive Games</h3>
            <p class="feature-card__text">
              Kids learn through play with curriculum-aligned games that adapt
              to their level
            </p>
            <router-link to="/features" class="feature-card__link"
              >Click to learn more</router-link
            >
          </div>
        </div>
        <!-- Feature 2: Personalized Learning -->
        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
          <div class="feature-card feature-card--purple">
            <div class="feature-card__icon feature-icon--transparent">
              <img
                src="@/assets/personalized-learning.png"
                alt="Personalized Learning"
                class="feature-icon-img"
              />
            </div>
            <span class="feature-card__highlight highlight--purple">AI</span>
            <h3 class="feature-card__title">Personalized Learning</h3>
            <p class="feature-card__text">
              Adaptive technology that adjusts difficulty and pace to match each
              child's needs
            </p>
            <router-link to="/features" class="feature-card__link"
              >Click to learn more</router-link
            >
          </div>
        </div>
        <!-- Feature 3: Pediatric Guidance & Parent Support -->
        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div class="feature-card feature-card--yellow">
            <div
              class="feature-card__icon feature-icon--transparent feature-icon--larger"
            >
              <img
                src="@/assets/pediatric-guidance.png"
                alt="Pediatric Guidance & Parent Support"
                class="feature-icon-img"
              />
            </div>
            <span class="feature-card__highlight highlight--yellow">Care</span>
            <h3 class="feature-card__title">
              Pediatric Guidance & Parent Support
            </h3>
            <p class="feature-card__text">
              We care about complete child development. That's why we include
              pediatric guidance and dedicated parent support.
            </p>
            <router-link to="/features" class="feature-card__link"
              >Click to learn more</router-link
            >
          </div>
        </div>
        <!-- Feature 4: Free for Teachers -->
        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
          <div class="feature-card feature-card--green">
            <div
              class="feature-card__icon feature-icon--transparent feature-icon--teacher"
            >
              <img
                src="@/assets/free-teachers.png"
                alt="Free For Teachers"
                class="feature-icon-img"
              />
            </div>
            <span class="feature-card__highlight highlight--green">FREE</span>
            <h3 class="feature-card__title">Free For Teachers</h3>
            <p class="feature-card__text">
              Classroom management, assignments, and progress tracking -
              completely free forever
            </p>
            <router-link to="/for-teachers" class="feature-card__link"
              >Click to learn more</router-link
            >
          </div>
        </div>
      </div>
      <div class="text-center mt-50 wow fadeInUp" data-wow-delay="0.5s">
        <router-link to="/features" class="vs-btn btn-primary-enhanced">
          Explore More Features
          <i class="fas fa-arrow-right ms-2"></i>
        </router-link>
      </div>
    </div>
    <div
      class="shape-mockup shapePulse z-index-negative d-none d-xl-block"
      data-top="27%"
      data-left="9%"
    >
      <img src="/assets/img/icon/lolypop.png" alt="shapes" />
    </div>
    <div
      class="shape-mockup shapePulse rotate z-index-negative"
      data-top="19%"
      data-right="21%"
    >
      <img src="/assets/img/icon/star-sm.png" alt="shapes" />
    </div>
    <div
      class="shape-mockup shapePulse rotate z-index-negative"
      data-bottom="20%"
      data-right="10%"
    >
      <img src="/assets/img/icon/star.png" alt="shapes" />
    </div>
  </section>
  <!--======== / Service Section ========-->

  <!--======== About Section ========-->
  <section class="about-section bg-smoke space">
    <div class="container">
      <div class="row flex-column-reverse flex-lg-row align-items-center gy-30">
        <div
          class="col-sm-12 col-md-12 col-xl-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div class="text-center text-lg-start">
            <span class="sub-title sub-title--lg">Why Mind Growup Jr</span>
            <h2 class="sec-title big-title">
              Transform Learning into an
              <span class="gradient-text">Adventure</span>
            </h2>
            <p class="fs-md mb-30">
              At Mind Growup Jr, every child can discover the joy of learning.
              Our platform uses adaptive AI technology and fun games to create
              personalized experiences in Math, Manners, Brain Activities, and
              the Ability to think out of the box.
            </p>
            <router-link to="/about" class="vs-btn wave-btn style-1">
              Discover Our Story
              <i class="fas fa-arrow-right ms-2"></i>
            </router-link>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="shape-slider-area">
            <button
              data-slick-prev="#sliderOne"
              class="simple-arrow arrow-left"
            >
              <i class="far fa-chevron-left"></i>
            </button>
            <button
              data-slick-next="#sliderOne"
              class="simple-arrow arrow-right"
            >
              <i class="far fa-chevron-right"></i>
            </button>
            <div
              id="sliderOne"
              class="shape-slider vs-carousel"
              data-slide-show="1"
              data-md-slide-show="1"
            >
              <div class="slide-item">
                <img
                  class="line-1"
                  data-ani="slideinup"
                  data-ani-delay=".2s"
                  src="/assets/img/shape/line-1.png"
                  alt="shape"
                />
                <img
                  class="line-2"
                  data-ani="slideinup"
                  data-ani-delay=".5s"
                  src="/assets/img/shape/line-2.png"
                  alt="shape"
                />
                <img src="/assets/img/shape/shape-slide-1.png" alt="shape" />
              </div>
              <div class="slide-item">
                <img
                  class="line-1"
                  data-ani="slideinup"
                  data-ani-delay=".2s"
                  src="/assets/img/shape/line-1.png"
                  alt="shape"
                />
                <img
                  class="line-2"
                  data-ani="slideinup"
                  data-ani-delay=".5s"
                  src="/assets/img/shape/line-2.png"
                  alt="shape"
                />
                <img src="/assets/img/shape/shape-slide-2.png" alt="shape" />
              </div>
              <div class="slide-item">
                <img
                  class="line-1"
                  data-ani="slideinup"
                  data-ani-delay=".2s"
                  src="/assets/img/shape/line-1.png"
                  alt="shape"
                />
                <img
                  class="line-2"
                  data-ani="slideinup"
                  data-ani-delay=".5s"
                  src="/assets/img/shape/line-2.png"
                  alt="shape"
                />
                <img
                  src="/assets/img/shape/shape-slide-3.png"
                  alt="shape"
                  style="width: 90%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="shape-mockup shapePulse d-none d-lg-block rotate"
      data-bottom="22%"
      data-right="5%"
    >
      <img src="/assets/img/icon/star.png" alt="shapes" />
    </div>
    <div
      class="shape-mockup shapePulse d-none d-hd-block"
      data-top="17%"
      data-left="6%"
    >
      <img src="/assets/img/icon/cap-plane.png" alt="shapes" />
    </div>
    <div
      class="shape-mockup rotate d-none d-sm-block z-index-2"
      data-bottom="-7%"
      data-left="6%"
    >
      <img src="/assets/img/icon/busket-ball.png" alt="shapes" />
    </div>
  </section>
  <!--======== / About Section ========-->

  <!--======== counter Section ========-->
  <div class="counter-section bg-smoke-blue space">
    <div class="container">
      <div class="row gy-20 justify-content-between">
        <!-- Single Item: Kids Learning -->
        <div class="col-lg-auto col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="counter-item text-center">
            <div
              class="connter_icon"
              style="display: flex; justify-content: center"
            >
              <img
                src="@/assets/kids-icon.png"
                alt="Kids"
                style="
                  width: 58px;
                  height: 58px;
                  object-fit: contain;
                  margin-bottom: -8px;
                "
              />
            </div>
            <span class="counter-number">Indian</span>
            <p class="counter-text h4">Kids Learning</p>
          </div>
        </div>
        <!-- Single Item: Games -->
        <div class="col-lg-auto col-sm-6 wow fadeInUp" data-wow-delay="0.2s">
          <div class="counter-item text-center">
            <div class="connter_icon"><i class="fa-light fa-gamepad"></i></div>
            <span class="counter-number">500</span><span class="h2">+</span>
            <p class="counter-text h4">Interactive Games</p>
          </div>
        </div>
        <!-- Single Item: Teachers -->
        <div class="col-lg-auto col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
          <div class="counter-item text-center">
            <div class="connter_icon">
              <i class="fa-light fa-chalkboard-user"></i>
            </div>
            <span class="counter-number">100</span><span class="h2">+</span>
            <p class="counter-text h4">Teachers Trust Us</p>
          </div>
        </div>
        <!-- Single Item: Countries -->
        <div class="col-lg-auto col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
          <div class="counter-item text-center">
            <div class="connter_icon"><i class="fa-light fa-globe"></i></div>
            <span class="counter-number">India</span><span class="h2"> +</span>
            <p class="counter-text h4">Other Countries</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section-after style-2">
      <img src="/assets/img/shape/main-shape-after.png" alt="shape" />
    </div>
  </div>
  <!--======== / counter Section ========-->

  <!--======== Subjects Section ========-->
  <section class="subjects-section space">
    <div class="container">
      <div
        class="row text-center justify-content-center wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div class="col-xl-7 col-lg-8">
          <div class="title-area">
            <span class="sub-title">Learning Subjects</span>
            <h2 class="sec-title">
              Explore <span class="gradient-text">Subjects</span> Your Child
              Will Master
            </h2>
            <p class="mt-3 text-muted">
              Curriculum-aligned content for Pre-K through Grade 7
            </p>
          </div>
        </div>
      </div>
      <div class="row gy-30">
        <!-- Mathematics Subject -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="subject-card subject-card--purple">
            <div class="subject-card__img">
              <router-link to="/subjects/math">
                <img :src="mathImage" alt="Mathematics" />
                <div class="subject-card__overlay">
                  <span class="subject-card__play"
                    ><i class="fas fa-play"></i
                  ></span>
                </div>
              </router-link>
              <span class="subject-card__badge subject-badge--purple">
                <i class="fas fa-calculator"></i>
                500+ Games
              </span>
            </div>
            <div class="subject-card__body">
              <div class="subject-card__grade-tag">Pre-K to Grade 7</div>
              <h3 class="subject-card__title">
                <router-link to="/subjects/math">Mathematics</router-link>
              </h3>
              <p class="subject-card__text">
                Build number sense, master arithmetic, explore geometry, and
                solve real-world math problems.
              </p>
              <div class="subject-card__stats">
                <div class="subject-stat">
                  <i class="fas fa-book-open"></i>
                  <span>15+ Topics</span>
                </div>
                <div class="subject-stat">
                  <i class="fas fa-gamepad"></i>
                  <span>500+ Games</span>
                </div>
              </div>
              <router-link
                to="/subjects/math"
                class="subject-card__link subject-link--purple"
              >
                Explore Math
                <i class="fas fa-arrow-right"></i>
              </router-link>
            </div>
          </div>
        </div>
        <!-- Your AI-Buddy Subject -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
          <div class="subject-card subject-card--pink">
            <div class="subject-card__img">
              <router-link to="/subjects/reading">
                <img :src="readingImage" alt="Your AI-Buddy" />
                <div class="subject-card__overlay">
                  <span class="subject-card__play"
                    ><i class="fas fa-play"></i
                  ></span>
                </div>
              </router-link>
              <span class="subject-card__badge subject-badge--pink">
                <i class="fas fa-book-reader"></i>
                500+ Games
              </span>
            </div>
            <div class="subject-card__body">
              <div class="subject-card__grade-tag">Pre-K to Grade 7</div>
              <h3 class="subject-card__title">
                <router-link to="/subjects/reading">Your AI-Buddy</router-link>
              </h3>
              <p class="subject-card__text">
                AI-powered feature combines friendly interaction, communication
                skills, general knowledge, and guides children on exploring the
                outside world — creating a fun, engaging, and educational
                experience all in one place.
              </p>
              <div class="subject-card__stats">
                <div class="subject-stat">
                  <i class="fas fa-book-open"></i>
                  <span>12+ Topics</span>
                </div>
                <div class="subject-stat">
                  <i class="fas fa-gamepad"></i>
                  <span>500+ Games</span>
                </div>
              </div>
              <router-link
                to="/subjects/reading"
                class="subject-card__link subject-link--pink"
              >
                Explore Reading
                <i class="fas fa-arrow-right"></i>
              </router-link>
            </div>
          </div>
        </div>
        <!-- Craft & Drawing Subject -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div class="subject-card subject-card--green">
            <div class="subject-card__img">
              <router-link to="/subjects/craft-drawing">
                <img :src="scienceImage" alt="Craft & Drawing" />
                <div class="subject-card__overlay">
                  <span class="subject-card__play"
                    ><i class="fas fa-play"></i
                  ></span>
                </div>
              </router-link>
              <span class="subject-card__badge subject-badge--green">
                <i class="fas fa-paint-brush"></i>
                800+ Activities
              </span>
            </div>
            <div class="subject-card__body">
              <div class="subject-card__grade-tag">Kindergarten to Grade 7</div>
              <h3 class="subject-card__title">
                <router-link to="/subjects/craft-drawing"
                  >Craft & Drawing</router-link
                >
              </h3>
              <p class="subject-card__text">
                Unleash creativity through hands-on crafts, drawing, coloring,
                and artistic expression.
              </p>
              <div class="subject-card__stats">
                <div class="subject-stat">
                  <i class="fas fa-book-open"></i>
                  <span>10+ Topics</span>
                </div>
                <div class="subject-stat">
                  <i class="fas fa-palette"></i>
                  <span>800+ Activities</span>
                </div>
              </div>
              <router-link
                to="/subjects/craft-drawing"
                class="subject-card__link subject-link--green"
              >
                Explore Craft & Drawing
                <i class="fas fa-arrow-right"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-50 wow fadeInUp" data-wow-delay="0.4s">
        <router-link to="/subjects" class="vs-btn btn-primary-enhanced">
          Explore All Subjects
          <i class="fas fa-arrow-right ms-2"></i>
        </router-link>
      </div>
    </div>
    <div
      class="shape-mockup shapePulse d-none d-xl-block"
      data-top="15%"
      data-left="7%"
    >
      <img src="/assets/img/icon/dog.png" alt="shapes" />
    </div>
    <div
      class="shape-mockup rotate d-none d-hd-block"
      data-bottom="17%"
      data-left="7%"
    >
      <img src="/assets/img/icon/curve-line.png" alt="shapes" />
    </div>
    <div
      class="shape-mockup rotate z-index-negative"
      data-top="32%"
      data-right="9%"
    >
      <img src="/assets/img/icon/star-3.png" alt="shapes" />
    </div>
    <div
      class="shape-mockup shapePulse d-none d-hd-block"
      data-bottom="16%"
      data-right="9%"
    >
      <img src="/assets/img/icon/triangle.png" alt="shapes" />
    </div>
  </section>
  <!--======== / Subjects Section ========-->

  <!--======== How It Works Section ========-->
  <section class="how-it-works-section">
    <div class="container">
      <div class="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
        <span class="section-tag section-tag--center">
          <i class="fas fa-rocket"></i>
          How It Works
        </span>
        <h2 class="section-heading">
          Get Started in <span class="title-highlight">4 Simple Steps</span>
        </h2>
      </div>

      <div class="steps-grid">
        <div class="step-card wow fadeInUp" data-wow-delay="0.1s">
          <div class="step-number">1</div>
          <div class="step-icon-wrap step-icon--transparent">
            <img
              src="@/assets/signup-button.png"
              alt="Sign Up Free"
              class="step-icon-img"
            />
          </div>
          <h3 class="step-title">Sign Up Free</h3>
          <p class="step-desc">
            Create your account in seconds. All payments required.
          </p>
        </div>

        <div class="step-connector">
          <svg width="80" height="2" viewBox="0 0 80 2">
            <line
              x1="0"
              y1="1"
              x2="80"
              y2="1"
              stroke="#E5E7EB"
              stroke-width="2"
              stroke-dasharray="6 4"
            />
          </svg>
        </div>

        <div class="step-card wow fadeInUp" data-wow-delay="0.2s">
          <div class="step-number">2</div>
          <div class="step-icon-wrap step-icon--transparent">
            <img
              src="@/assets/choose-grade.png"
              alt="Choose Your Grade"
              class="step-icon-img"
            />
          </div>
          <h3 class="step-title">Choose Your Grade</h3>
          <p class="step-desc">
            Select from Pre-K to Grade 7. Pick subjects that interest your
            child.
          </p>
        </div>

        <div class="step-connector">
          <svg width="80" height="2" viewBox="0 0 80 2">
            <line
              x1="0"
              y1="1"
              x2="80"
              y2="1"
              stroke="#E5E7EB"
              stroke-width="2"
              stroke-dasharray="6 4"
            />
          </svg>
        </div>

        <div class="step-card wow fadeInUp" data-wow-delay="0.3s">
          <div class="step-number">3</div>
          <div class="step-icon-wrap step-icon--transparent">
            <img
              src="@/assets/play-learn.png"
              alt="Play & Learn"
              class="step-icon-img"
            />
          </div>
          <h3 class="step-title">Play & Learn</h3>
          <p class="step-desc">
            Kids explore 500+ games. AI adapts difficulty to their level.
          </p>
        </div>

        <div class="step-connector">
          <svg width="80" height="2" viewBox="0 0 80 2">
            <line
              x1="0"
              y1="1"
              x2="80"
              y2="1"
              stroke="#E5E7EB"
              stroke-width="2"
              stroke-dasharray="6 4"
            />
          </svg>
        </div>

        <div class="step-card wow fadeInUp" data-wow-delay="0.4s">
          <div class="step-number">4</div>
          <div class="step-icon-wrap step-icon--transparent">
            <img
              src="@/assets/track-progress.png"
              alt="Track Progress"
              class="step-icon-img step-icon-img--larger"
            />
          </div>
          <h3 class="step-title">Track Progress</h3>
          <p class="step-desc">
            Parents & teachers get real-time insights on learning growth.
          </p>
        </div>
      </div>

      <div class="text-center mt-50 wow fadeInUp" data-wow-delay="0.4s">
        <router-link to="/register" class="vs-btn btn-primary-enhanced">
          Book Free AI Strategy Call
          <i class="fas fa-arrow-right ms-2"></i>
        </router-link>
        <p class="cta-response-note mt-3">We respond within 24 hours</p>
      </div>
    </div>
  </section>
  <!--======== / How It Works Section ========-->

  <!--======== Learning Journey Section ========-->
  <section class="learning-journey-section">
    <div class="container">
      <div class="text-center mb-2 wow fadeInUp">
        <h2 class="journey-title">
          Make effective independent learning
          <span class="journey-title-highlight">a reality</span>
        </h2>
        <p class="journey-subtitle">
          The learning path is your child's personalized learning journey
          divided into meaningful daily milestones.
        </p>
      </div>

      <div
        class="journey-visual-img text-center wow fadeInUp"
        data-wow-delay="0.2s"
      >
        <img
          src="@/assets/learning-path-new.png"
          alt="Learning Journey Path"
          class="learning-path-img"
        />
      </div>

      <!-- Benefits -->
      <div
        class="journey-benefits text-center wow fadeInUp"
        data-wow-delay="0.3s"
      >
        <p class="journey-benefit">
          <i class="fas fa-check-circle journey-benefit-icon"></i>
          Saves the hassle of hunting for
          <span class="benefit-highlight benefit-highlight--purple"
            >learning plans</span
          >
        </p>
        <p class="journey-benefit">
          <i class="fas fa-check-circle journey-benefit-icon"></i>
          <span class="benefit-highlight benefit-highlight--green">Adapts</span>
          to your child's learning needs
        </p>
        <p class="journey-benefit">
          <i class="fas fa-check-circle journey-benefit-icon"></i>
          Leads to
          <span class="benefit-highlight benefit-highlight--pink"
            >curriculum mastery,</span
          >
          one day at a time
        </p>
      </div>
    </div>

    <!-- Floating decorations -->
    <div class="journey-decoration journey-deco--star-1">&#9733;</div>
    <div class="journey-decoration journey-deco--star-2">&#9733;</div>
    <div class="journey-decoration journey-deco--dot-1"></div>
    <div class="journey-decoration journey-deco--dot-2"></div>
    <div class="journey-decoration journey-deco--dot-3"></div>
  </section>
  <!--======== / Learning Journey Section ========-->

  <!--======== Testimonials Section ========-->
  <section class="testimonials-section">
    <div class="container">
      <div class="row gy-4 align-items-center">
        <div class="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
          <div class="testi-intro">
            <span class="section-tag">
              <i class="fas fa-comment-dots"></i>
              Parent Reviews
            </span>
            <h2 class="testi-heading">
              What Parents & Teachers
              <span class="title-highlight">Say About Us</span>
            </h2>
            <p class="testi-desc">
              Discover how Mind Growup Jr is transforming learning for millions
              of families worldwide. Real stories from real parents about their
              children's progress.
            </p>
            <router-link to="/pricing" class="testi-cta">
              Book Free AI Strategy Call
              <i class="fas fa-arrow-right"></i>
            </router-link>
            <p class="cta-response-note mt-2">We respond within 24 hours</p>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="testi-slider-area">
            <div
              id="homeTesti1"
              class="row testi-slider vs-carousel"
              data-slide-show="2"
            >
              <!-- Single Item -->
              <div class="col-md-6">
                <div class="testi-card">
                  <div class="testi-card-header">
                    <div class="testi-avatar-icon testi-avatar--green">
                      <i class="fas fa-user"></i>
                    </div>
                    <div>
                      <h5 class="testi-name">Priya Sharma</h5>
                      <span class="testi-role">Parent, Grade 2</span>
                    </div>
                    <div class="testi-quote-icon">
                      <i class="fas fa-quote-right"></i>
                    </div>
                  </div>
                  <div class="testi-stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <h4 class="testi-card-title">My Daughter Loves Math Now!</h4>
                  <p class="testi-card-text">
                    My 7-year-old used to struggle with math, but since using
                    Mind Jr, she's excited to practice every day. The games make
                    learning fun and she's already ahead of her grade level!
                  </p>
                </div>
              </div>
              <!-- Single Item -->
              <div class="col-md-6">
                <div class="testi-card">
                  <div class="testi-card-header">
                    <div class="testi-avatar-icon testi-avatar--pink">
                      <i class="fas fa-user"></i>
                    </div>
                    <div>
                      <h5 class="testi-name">Rajesh Patel</h5>
                      <span class="testi-role">Homeschool Parent</span>
                    </div>
                    <div class="testi-quote-icon">
                      <i class="fas fa-quote-right"></i>
                    </div>
                  </div>
                  <div class="testi-stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <h4 class="testi-card-title">Perfect for Homeschooling</h4>
                  <p class="testi-card-text">
                    As a homeschool parent, Mind Jr has been a game-changer. The
                    curriculum-aligned content covers all subjects and my kids
                    are learning while having fun. Worth every penny!
                  </p>
                </div>
              </div>
              <!-- Single Item -->
              <div class="col-md-6">
                <div class="testi-card">
                  <div class="testi-card-header">
                    <div class="testi-avatar-icon testi-avatar--navy">
                      <i class="fas fa-user"></i>
                    </div>
                    <div>
                      <h5 class="testi-name">Anita Desai</h5>
                      <span class="testi-role">Elementary Teacher</span>
                    </div>
                    <div class="testi-quote-icon">
                      <i class="fas fa-quote-right"></i>
                    </div>
                  </div>
                  <div class="testi-stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <h4 class="testi-card-title">Engaging & Educational</h4>
                  <p class="testi-card-text">
                    I use Mind Jr in my classroom and the kids absolutely love
                    it. The progress tracking helps me identify areas where
                    students need extra support. Highly recommend!
                  </p>
                </div>
              </div>
            </div>
            <!-- / Slider End -->
            <div class="vs-icon-box testi-1 d-none d-xl-block">
              <button
                data-slick-prev="#homeTesti1"
                class="icon-btn style-3 arrow-left mb-15"
              >
                <i class="far fa-arrow-left"></i>
              </button>
              <button
                data-slick-next="#homeTesti1"
                class="icon-btn style-3 arrow-right"
              >
                <i class="far fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--======== / Testimonials Section ========-->

  <!--======== CTA Section ========-->
  <section class="home-cta-section">
    <div class="home-cta-bg">
      <div class="home-cta-particles">
        <span
          v-for="n in 8"
          :key="n"
          class="home-cta-particle"
          :style="{
            animationDelay: `${n * 0.7}s`,
            left: `${((n * 12) % 90) + 5}%`,
          }"
        ></span>
      </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div
          class="col-xl-8 col-lg-10 text-center wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <span class="home-cta-badge">
            <i class="fas fa-rocket"></i>
            Start Today - It's Free!
          </span>
          <h2 class="home-cta-title">
            Ready to Start Your Child's <br /><span class="home-cta-highlight"
              >Learning Adventure?</span
            >
          </h2>
          <p class="home-cta-text">
            Join 50 million kids already learning through play. All payments
            required - get instant access to thousands of educational games.
          </p>
          <div class="home-cta-buttons">
            <router-link
              to="/register"
              class="modern-btn btn-primary home-cta-btn-primary"
            >
              <i class="fas fa-rocket"></i>
              <span>Start Free Trial</span>
            </router-link>
            <router-link
              to="/subjects"
              class="modern-btn btn-outline home-cta-btn-outline"
            >
              <span>Explore Subjects</span>
              <i class="fas fa-arrow-right"></i>
            </router-link>
          </div>
          <div class="home-cta-trust">
            <div class="home-cta-trust-item">
              <i class="fas fa-shield-alt"></i>
              <span>Safe & Secure</span>
            </div>
            <div class="home-cta-trust-item">
              <i class="fas fa-ban"></i>
              <span>100% Ad-Free</span>
            </div>
            <div class="home-cta-trust-item">
              <i class="fas fa-credit-card"></i>
              <span>All Payment Accepted</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--======== / CTA Section ========-->

  <!--======== Blog Section ========-->
  <section class="blog-section space-top space-extra-bottom">
    <div class="container">
      <div
        class="row text-center justify-content-center wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div class="col-xl-7 col-lg-8">
          <div class="title-area">
            <span class="sub-title">From Our Blog</span>
            <h2 class="sec-title">
              Tips & Resources for
              <span class="gradient-text">Parents & Teachers</span>
            </h2>
            <p class="mt-3 text-muted">
              Expert advice on childhood education, learning activities, and
              parenting tips
            </p>
          </div>
        </div>
      </div>

      <!-- Loading Skeleton -->
      <div v-if="blogLoading" class="row gy-30">
        <div v-for="n in 3" :key="n" class="col-lg-4 col-md-6">
          <div class="home-blog-skeleton">
            <div class="skeleton-img"></div>
            <div class="skeleton-content">
              <div class="skeleton-line short"></div>
              <div class="skeleton-line"></div>
              <div class="skeleton-line medium"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Dynamic Blog Posts -->
      <div v-else-if="blogPosts.length" class="row gy-30">
        <div
          v-for="(post, index) in blogPosts"
          :key="post.id"
          class="col-lg-4 col-md-6 wow fadeInUp"
          :data-wow-delay="`${0.1 + index * 0.1}s`"
        >
          <div class="home-blog-card">
            <div class="home-blog-img">
              <router-link :to="`/blog/${post.slug}`">
                <img
                  :src="getImageUrl(post.featured_image)"
                  :alt="post.title"
                />
              </router-link>
              <span v-if="post.category" class="home-blog-category">{{
                post.category.name
              }}</span>
            </div>
            <div class="home-blog-content">
              <div class="home-blog-meta">
                <span
                  ><i class="fal fa-calendar-alt"></i>
                  {{ formatDate(post.published_at) }}</span
                >
                <span
                  ><i class="fal fa-eye"></i>
                  {{ post.views_count || 0 }} views</span
                >
              </div>
              <h4 class="home-blog-title">
                <router-link :to="`/blog/${post.slug}`">{{
                  post.title
                }}</router-link>
              </h4>
              <p class="home-blog-excerpt">
                {{
                  stripHtml(post.excerpt || post.content).substring(0, 100)
                }}...
              </p>
              <router-link :to="`/blog/${post.slug}`" class="home-blog-link">
                Read More <i class="fas fa-arrow-right"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-50 wow fadeInUp" data-wow-delay="0.4s">
        <router-link to="/blog" class="vs-btn btn-primary-enhanced">
          View All Articles
          <i class="fas fa-arrow-right ms-2"></i>
        </router-link>
      </div>
    </div>
    <div
      class="shape-mockup shapePulse d-none d-md-block"
      data-top="22%"
      data-left="8%"
    >
      <img src="/assets/img/icon/apple.png" alt="shapes" />
    </div>
    <div
      class="shape-mockup moving d-none d-hd-block"
      data-bottom="22%"
      data-left="4%"
    >
      <img src="/assets/img/icon/ruler.png" alt="shapes" />
    </div>
    <div
      class="shape-mockup movingX d-none d-xl-block"
      data-top="17%"
      data-right="6%"
    >
      <img src="/assets/img/icon/cloud-3.png" alt="shapes" />
    </div>
    <div
      class="shape-mockup rotate d-none d-hd-block"
      data-bottom="24%"
      data-right="6%"
    >
      <img src="/assets/img/icon/math-2.png" alt="shapes" />
    </div>
  </section>
  <!--======== / Blog Section ========-->
</template>

<style scoped>
/* ========================================
   Hero Section
   ======================================== */
.vs-hero-wrapper {
  position: relative;
  overflow: visible;
  min-height: auto !important;
  padding-bottom: 120px;
  margin-bottom: -120px;
}

.hero-slider1 {
  position: relative;
  z-index: 2;
}

.vs-hero-inner {
  position: relative;
  min-height: 550px !important;
  height: 65vh;
  max-height: 700px;
  display: flex;
  align-items: center;
}

.vs-hero-inner .container {
  position: relative;
  z-index: 4;
}

/* Gradient Overlay - covers the background image */
.hero-gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: linear-gradient(
    135deg,
    rgba(27, 20, 100, 0.25) 0%,
    rgba(74, 139, 63, 0.15) 40%,
    rgba(27, 20, 100, 0.2) 100%
  );
}

.hero-overlay--blue {
  background: linear-gradient(
    135deg,
    rgba(27, 20, 100, 0.3) 0%,
    rgba(108, 92, 231, 0.15) 40%,
    rgba(74, 139, 63, 0.15) 100%
  );
}

.hero-overlay--teal {
  background: linear-gradient(
    135deg,
    rgba(74, 139, 63, 0.25) 0%,
    rgba(0, 184, 148, 0.15) 40%,
    rgba(27, 20, 100, 0.2) 100%
  );
}

/* Floating Particles */
.hero-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  pointer-events: none;
  overflow: hidden;
}

.hero-particle {
  position: absolute;
  bottom: -20px;
  width: 14px;
  height: 14px;
  background: #ff6b6b;
  border-radius: 50%;
  animation: heroParticleFloat 6s ease-in-out infinite;
  box-shadow: 0 0 8px rgba(255, 107, 107, 0.5);
}

.hero-particle:nth-child(2n) {
  width: 10px;
  height: 10px;
  background: #ffd93d;
  box-shadow: 0 0 8px rgba(255, 217, 61, 0.5);
}

.hero-particle:nth-child(3n) {
  width: 18px;
  height: 18px;
  background: #ff6fb7;
  box-shadow: 0 0 10px rgba(255, 111, 183, 0.5);
}

.hero-particle:nth-child(4n) {
  width: 12px;
  height: 12px;
  background: #4d96ff;
  box-shadow: 0 0 8px rgba(77, 150, 255, 0.5);
}

.hero-particle:nth-child(5n) {
  width: 20px;
  height: 20px;
  background: #6bcb77;
  box-shadow: 0 0 12px rgba(107, 203, 119, 0.5);
}

.hero-particle:nth-child(6n) {
  width: 16px;
  height: 16px;
  background: #a66cff;
  box-shadow: 0 0 10px rgba(166, 108, 255, 0.5);
}

.hero-particle:nth-child(7n) {
  width: 11px;
  height: 11px;
  background: #5eead4;
  box-shadow: 0 0 8px rgba(94, 234, 212, 0.5);
}

@keyframes heroParticleFloat {
  0%,
  100% {
    transform: translateY(0) scale(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
    transform: translateY(-10vh) scale(1);
  }
  90% {
    opacity: 0.5;
    transform: translateY(-85vh) scale(0.7);
  }
}

/* Shining Stars */
.hero-stars {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  pointer-events: none;
  overflow: hidden;
}

.hero-star {
  position: absolute;
  opacity: 0;
  animation: heroStarShine 3s ease-in-out infinite;
}

@keyframes heroStarShine {
  0% {
    opacity: 0;
    transform: scale(0.5) rotate(0deg);
  }
  20% {
    opacity: 1;
    transform: scale(1.3) rotate(20deg);
    text-shadow:
      0 0 10px currentColor,
      0 0 20px currentColor;
  }
  40% {
    opacity: 0.2;
    transform: scale(0.7) rotate(-10deg);
  }
  60% {
    opacity: 1;
    transform: scale(1.2) rotate(15deg);
    text-shadow:
      0 0 15px currentColor,
      0 0 30px currentColor;
  }
  80% {
    opacity: 0.1;
    transform: scale(0.6) rotate(-5deg);
  }
  100% {
    opacity: 0;
    transform: scale(0.5) rotate(0deg);
  }
}

.hero-star--1 {
  top: 12%;
  left: 6%;
  font-size: 18px;
  animation-delay: 0s;
  color: #ffd93d;
}
.hero-star--2 {
  top: 28%;
  left: 18%;
  font-size: 24px;
  animation-delay: 0.8s;
  color: #ffffff;
}
.hero-star--3 {
  top: 8%;
  left: 38%;
  font-size: 14px;
  animation-delay: 1.5s;
  color: #ff6fb7;
}
.hero-star--4 {
  top: 48%;
  left: 52%;
  font-size: 22px;
  animation-delay: 2.2s;
  color: #ffd93d;
}
.hero-star--5 {
  top: 18%;
  left: 68%;
  font-size: 20px;
  animation-delay: 0.5s;
  color: #ffffff;
}
.hero-star--6 {
  top: 42%;
  left: 82%;
  font-size: 26px;
  animation-delay: 1.8s;
  color: #ffd93d;
}
.hero-star--7 {
  top: 58%;
  left: 10%;
  font-size: 16px;
  animation-delay: 3s;
  color: #5eead4;
}
.hero-star--8 {
  top: 32%;
  left: 90%;
  font-size: 15px;
  animation-delay: 2.5s;
  color: #ffffff;
}

/* Bottom Wave */
.hero-wave-bottom {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 120px;
  z-index: 10;
  pointer-events: none;
  line-height: 0;
}

.hero-wave-bottom .wave-layer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
}

.wave-layer-1 {
  z-index: 1;
  bottom: 0px;
}
.wave-layer-2 {
  z-index: 2;
  bottom: -10px;
}
.wave-layer-3 {
  z-index: 3;
  bottom: -20px;
}
.wave-layer-4 {
  z-index: 4;
  bottom: -30px;
}

/* Hero Content */
.modern-hero-content {
  position: relative;
  z-index: 10;
  padding: 10px 30px 10px 0;
}

/* Content Backdrop Glow */
.modern-hero-content::before {
  content: '';
  position: absolute;
  top: -30px;
  left: -40px;
  right: -20px;
  bottom: -30px;
  background: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 0.25) 0%,
    transparent 70%
  );
  border-radius: 30px;
  z-index: -1;
  pointer-events: none;
}

/* Hero Badge */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 20px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 50px;
  font-weight: 600;
  font-size: 13px;
  color: #ffffff;
  margin-bottom: 14px;
  backdrop-filter: blur(12px);
}

.hero-badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #4a8b3f;
  box-shadow: 0 0 8px rgba(74, 139, 63, 0.6);
  animation: heroBadgePulse 2s ease-in-out infinite;
}

.hero-badge-dot--blue {
  background: #6c5ce7;
  box-shadow: 0 0 8px rgba(108, 92, 231, 0.6);
}

@keyframes heroBadgePulse {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.3);
  }
}

.hero-badge .badge-icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.hero-badge i {
  font-size: 18px;
}

.hero-badge.badge-teacher {
  background: linear-gradient(
    135deg,
    rgba(0, 210, 160, 0.8),
    rgba(0, 184, 148, 0.8)
  );
  border-color: rgba(0, 184, 148, 0.5);
  color: white;
}

/* Hero Title */
.modern-hero-title {
  font-size: 44px;
  font-weight: 900;
  line-height: 1.12;
  color: #ffffff;
  margin-bottom: 16px;
  letter-spacing: -0.5px;
}

.modern-hero-title .gradient-text {
  background: linear-gradient(135deg, #ffe5b4 0%, #ffd700 50%, #ffdab9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
  margin: 5px 0;
}

/* Hero Subtitle */
.modern-hero-subtitle {
  font-size: 15px;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.92);
  margin-bottom: 20px;
  font-weight: 400;
  max-width: 520px;
}

/* Features List */
.modern-features-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.modern-features-list .feature-item {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 25px;
  font-weight: 600;
  font-size: 13px;
  color: #ffffff;
  backdrop-filter: blur(8px);
  transition: all 0.3s;
}

.modern-features-list .feature-item:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.35);
  transform: translateY(-2px);
}

.modern-features-list .feature-item i {
  color: #7cfc00;
  font-size: 14px;
}

/* CTA Group */
.modern-cta-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 18px;
}

.modern-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 14px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.modern-btn i {
  font-size: 17px;
  transition: transform 0.3s ease;
}

.modern-btn.btn-primary {
  background: linear-gradient(135deg, #4a8b3f 0%, #5ea750 100%);
  color: white;
  box-shadow: 0 8px 25px rgba(74, 139, 63, 0.4);
}

.modern-btn.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(74, 139, 63, 0.5);
}

.modern-btn.btn-primary:hover i {
  transform: scale(1.15);
}

.modern-btn.btn-outline {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border: 2px solid rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(8px);
}

.modern-btn.btn-outline:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.6);
  transform: translateY(-2px);
}

.modern-btn.btn-outline:hover i {
  transform: translateX(4px);
}

.modern-btn.btn-image {
  padding: 0;
  background: transparent;
  border: none;
  box-shadow: none;
}

.modern-btn.btn-image:hover {
  transform: translateY(-3px);
}

.signup-btn-img {
  height: 60px;
  width: auto;
  object-fit: contain;
}

/* Trust Indicators */
.trust-indicators {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 600;
}

.trust-item i {
  font-size: 16px;
  color: #7cfc00;
}

/* Teacher Badge */
.teacher-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  font-weight: 700;
  font-size: 14px;
  color: #ffffff;
  backdrop-filter: blur(10px);
}

.teacher-badge i {
  font-size: 20px;
  color: #7cfc00;
}

/* ========================================
   Hero Responsive
   ======================================== */
@media (max-width: 1025px) {
  .about-section .shape-slider-area .slick-slider {
    padding: 0px 15px;
  }

  .vs-hero-wrapper {
    padding-bottom: 100px;
    margin-bottom: -100px;
    margin-top: -80px;
    padding-top: 80px;
  }

  .hero-wave-bottom {
    height: 100px;
  }

  .vs-hero-inner {
    min-height: 450px !important;
    height: 55vh;
    max-height: 560px;
  }

  .modern-hero-title {
    font-size: 34px;
  }

  .modern-hero-subtitle {
    font-size: 16px;
  }

  .modern-btn {
    padding: 13px 24px;
    font-size: 14px;
  }

  .modern-hero-content::before {
    display: none;
  }

  /* Counter Section - Better tablet layout */
  .counter-section .row {
    justify-content: center !important;
  }

  .counter-section .col-lg-auto {
    flex: 0 0 auto;
    width: auto;
    min-width: 220px;
    max-width: 260px;
  }

  .counter-item {
    padding: 25px 20px !important;
  }
}

@media (max-width: 767px) {
  .vs-hero-wrapper {
    padding-bottom: 100px;
    margin-bottom: -100px;
  }

  .about-section .shape-slider-area .slick-slider {
    padding: 0px 12px;
  }

  .hero-wave-bottom {
    height: 100px;
  }

  .vs-hero-inner {
    min-height: auto !important;
    height: auto;
    max-height: none;
    padding: 25px 0;
  }

  .modern-hero-content {
    padding: 15px 0;
  }

  .modern-hero-title {
    font-size: 28px;
    margin-bottom: 14px;
  }

  .modern-hero-subtitle {
    font-size: 15px;
    margin-bottom: 18px;
  }

  .modern-features-list {
    gap: 8px;
    margin-bottom: 20px;
  }

  .modern-features-list .feature-item {
    padding: 7px 13px;
    font-size: 12px;
  }

  .modern-cta-group {
    flex-direction: column;
    width: 100%;
    gap: 10px;
    margin-bottom: 18px;
  }

  .modern-btn {
    width: 100%;
    justify-content: center;
    padding: 13px 20px;
    font-size: 14px;
  }

  .trust-indicators {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px 20px;
    justify-content: center;
  }

  .teacher-badge {
    width: 100%;
    justify-content: center;
  }

  .hero-particles {
    display: none;
  }

  /* Counter Section - Mobile layout */
  .counter-section .col-sm-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .counter-item {
    padding: 20px 15px !important;
  }

  .counter-number {
    font-size: 36px !important;
  }
}

@media (max-width: 575px) {
  .about-section .shape-slider-area .slick-slider {
    padding: 0px 10px;
  }

  .vs-hero-wrapper {
    padding-bottom: 80px;
    margin-bottom: -80px;
    padding-top: 70px;
  }

  .hero-wave-bottom {
    height: 80px;
  }

  .vs-hero-inner {
    height: auto;
    padding: 61px 0px 35px 0;
  }

  .modern-hero-content {
    padding: 15px 0;
  }

  .modern-hero-title {
    font-size: 26px;
    margin-bottom: 15px;
  }

  .modern-hero-subtitle {
    font-size: 14px;
    margin-bottom: 18px;
  }

  .hero-badge {
    padding: 7px 14px;
    font-size: 12px;
  }

  .modern-features-list {
    margin-bottom: 20px;
  }

  .modern-cta-group {
    margin-bottom: 18px;
  }

  /* Counter Section - XS layout */
  .counter-section .col-sm-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .counter-item {
    padding: 18px 12px !important;
  }

  .counter-number {
    font-size: 32px !important;
  }

  .counter-text {
    font-size: 13px !important;
  }
}

/* ========================================
   Rocket Launch Animation - Complete Infinity (∞) Path
   ======================================== */
.rocket-animation-container {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 9999;
  pointer-events: none;
  width: 224px;
  height: 224px;
  transform: translate(-50%, -50%);
}

.rocket-launch {
  width: 100%;
  height: 100%;
  object-fit: contain;
  animation: rocketWavePath 6s linear forwards;
  filter: drop-shadow(0 15px 40px rgba(74, 139, 63, 0.5));
  transform-origin: center center;
}

/* Simple Wave Pattern - Ultra Smooth with No Stuttering */
@keyframes rocketWavePath {
  0% {
    transform: translate(-50vw, 0vh) rotate(0deg) scale(0.6);
    opacity: 0;
  }
  1% {
    transform: translate(-48vw, 0vh) rotate(-1deg) scale(0.62);
    opacity: 0.2;
  }
  2% {
    transform: translate(-46vw, 0vh) rotate(-2deg) scale(0.64);
    opacity: 0.4;
  }
  3% {
    transform: translate(-44vw, 0vh) rotate(-3deg) scale(0.66);
    opacity: 0.6;
  }
  4% {
    transform: translate(-42vw, 0vh) rotate(-4deg) scale(0.68);
    opacity: 0.8;
  }
  5% {
    transform: translate(-40vw, 0vh) rotate(-5deg) scale(0.7);
    opacity: 1;
  }
  6% {
    transform: translate(-38vw, -1.6vh) rotate(-9deg) scale(0.72);
  }
  7% {
    transform: translate(-36vw, -3.2vh) rotate(-13deg) scale(0.74);
  }
  8% {
    transform: translate(-34vw, -4.8vh) rotate(-17deg) scale(0.76);
  }
  9% {
    transform: translate(-32vw, -6.4vh) rotate(-21deg) scale(0.78);
  }
  10% {
    transform: translate(-30vw, -8vh) rotate(-25deg) scale(0.8);
  }
  11% {
    transform: translate(-28.33vw, -8.67vh) rotate(-23.33deg) scale(0.808);
  }
  12% {
    transform: translate(-26.67vw, -9.33vh) rotate(-21.67deg) scale(0.817);
  }
  13% {
    transform: translate(-25vw, -10vh) rotate(-20deg) scale(0.825);
  }
  14% {
    transform: translate(-23.25vw, -10.5vh) rotate(-17.5deg) scale(0.836);
  }
  15% {
    transform: translate(-21.5vw, -11vh) rotate(-15deg) scale(0.848);
  }
  16% {
    transform: translate(-19.75vw, -11.25vh) rotate(-12.5deg) scale(0.859);
  }
  17% {
    transform: translate(-18vw, -11.5vh) rotate(-10deg) scale(0.87);
  }
  18% {
    transform: translate(-15.33vw, -11.67vh) rotate(-6.67deg) scale(0.88);
  }
  19% {
    transform: translate(-12.67vw, -11.83vh) rotate(-3.33deg) scale(0.89);
  }
  20% {
    transform: translate(-10vw, -12vh) rotate(0deg) scale(0.9);
  }
  21% {
    transform: translate(-7.67vw, -11.33vh) rotate(3.33deg) scale(0.908);
  }
  22% {
    transform: translate(-5.33vw, -10.67vh) rotate(6.67deg) scale(0.917);
  }
  23% {
    transform: translate(-3vw, -10vh) rotate(10deg) scale(0.925);
  }
  24% {
    transform: translate(-1.25vw, -9vh) rotate(13.33deg) scale(0.936);
  }
  25% {
    transform: translate(0.5vw, -8vh) rotate(16.67deg) scale(0.948);
  }
  26% {
    transform: translate(2.25vw, -7.5vh) rotate(18.33deg) scale(0.959);
  }
  27% {
    transform: translate(3vw, -7vh) rotate(20deg) scale(0.97);
  }
  28% {
    transform: translate(5.33vw, -4.67vh) rotate(21.67deg) scale(0.98);
  }
  29% {
    transform: translate(7.67vw, -2.33vh) rotate(23.33deg) scale(0.99);
  }
  30% {
    transform: translate(10vw, 0vh) rotate(25deg) scale(1);
  }
  31% {
    transform: translate(12vw, 1.6vh) rotate(25deg) scale(1.006);
  }
  32% {
    transform: translate(14vw, 3.2vh) rotate(25deg) scale(1.012);
  }
  33% {
    transform: translate(16vw, 4.8vh) rotate(25deg) scale(1.018);
  }
  34% {
    transform: translate(18vw, 6.4vh) rotate(25deg) scale(1.024);
  }
  35% {
    transform: translate(20vw, 8vh) rotate(25deg) scale(1.03);
  }
  36% {
    transform: translate(21.67vw, 8.67vh) rotate(23.33deg) scale(1.035);
  }
  37% {
    transform: translate(23.33vw, 9.33vh) rotate(21.67deg) scale(1.04);
  }
  38% {
    transform: translate(25vw, 10vh) rotate(20deg) scale(1.045);
  }
  39% {
    transform: translate(27vw, 10.5vh) rotate(15deg) scale(1.052);
  }
  40% {
    transform: translate(29vw, 11vh) rotate(10deg) scale(1.058);
  }
  41% {
    transform: translate(31vw, 11.25vh) rotate(7.5deg) scale(1.064);
  }
  42% {
    transform: translate(33vw, 11.5vh) rotate(5deg) scale(1.07);
  }
  43% {
    transform: translate(35.67vw, 10.5vh) rotate(1.67deg) scale(1.077);
  }
  44% {
    transform: translate(37.83vw, 9.25vh) rotate(-1.67deg) scale(1.083);
  }
  45% {
    transform: translate(40vw, 8vh) rotate(-5deg) scale(1.09);
  }
  46% {
    transform: translate(42vw, 6.5vh) rotate(-8deg) scale(1.095);
  }
  47% {
    transform: translate(44vw, 5vh) rotate(-12deg) scale(1.1);
  }
  48% {
    transform: translate(46vw, 3.5vh) rotate(-16deg) scale(1.105);
  }
  49% {
    transform: translate(48vw, 2vh) rotate(-20deg) scale(1.11);
  }
  50% {
    transform: translate(50vw, 0vh) rotate(-25deg) scale(1.12);
  }
  51% {
    transform: translate(52vw, -1.5vh) rotate(-26deg) scale(1.125);
  }
  52% {
    transform: translate(54vw, -3vh) rotate(-26deg) scale(1.13);
  }
  53% {
    transform: translate(56vw, -4.5vh) rotate(-26deg) scale(1.135);
  }
  54% {
    transform: translate(58vw, -6vh) rotate(-26deg) scale(1.14);
  }
  55% {
    transform: translate(60vw, -8vh) rotate(-25deg) scale(1.15);
  }
  56% {
    transform: translate(61.67vw, -8.67vh) rotate(-23.33deg) scale(1.155);
  }
  57% {
    transform: translate(63.33vw, -9.33vh) rotate(-21.67deg) scale(1.16);
  }
  58% {
    transform: translate(65vw, -10vh) rotate(-20deg) scale(1.165);
  }
  59% {
    transform: translate(67vw, -10.5vh) rotate(-15deg) scale(1.171);
  }
  60% {
    transform: translate(69vw, -11vh) rotate(-12.5deg) scale(1.177);
  }
  61% {
    transform: translate(71vw, -11.25vh) rotate(-8.75deg) scale(1.183);
  }
  62% {
    transform: translate(73vw, -11.5vh) rotate(-5deg) scale(1.19);
  }
  63% {
    transform: translate(75.33vw, -11vh) rotate(-1.67deg) scale(1.197);
  }
  64% {
    transform: translate(77.67vw, -10.5vh) rotate(1.67deg) scale(1.203);
  }
  65% {
    transform: translate(80vw, -10vh) rotate(5deg) scale(1.21);
  }
  66% {
    transform: translate(81.67vw, -9vh) rotate(8.33deg) scale(1.215);
  }
  67% {
    transform: translate(83.33vw, -8vh) rotate(11.67deg) scale(1.22);
  }
  68% {
    transform: translate(85vw, -7vh) rotate(15deg) scale(1.225);
  }
  69% {
    transform: translate(87.5vw, -6vh) rotate(17.5deg) scale(1.233);
  }
  70% {
    transform: translate(90vw, -5vh) rotate(20deg) scale(1.24);
  }
  71% {
    transform: translate(92vw, -4vh) rotate(19.6deg) scale(1.246);
  }
  72% {
    transform: translate(94vw, -3vh) rotate(19.2deg) scale(1.252);
  }
  73% {
    transform: translate(96vw, -2vh) rotate(18.8deg) scale(1.258);
  }
  74% {
    transform: translate(98vw, -1vh) rotate(18.4deg) scale(1.264);
  }
  75% {
    transform: translate(100vw, 0vh) rotate(18deg) scale(1.27);
  }
  76% {
    transform: translate(102vw, 0.4vh) rotate(16deg) scale(1.276);
  }
  77% {
    transform: translate(104vw, 0.8vh) rotate(14deg) scale(1.282);
  }
  78% {
    transform: translate(106vw, 1.2vh) rotate(12deg) scale(1.288);
  }
  79% {
    transform: translate(108vw, 1.6vh) rotate(10deg) scale(1.294);
  }
  80% {
    transform: translate(110vw, 2vh) rotate(8deg) scale(1.3);
    opacity: 1;
  }
  81% {
    transform: translate(112vw, 2.2vh) rotate(7.2deg) scale(1.306);
    opacity: 0.98;
  }
  82% {
    transform: translate(114vw, 2.4vh) rotate(6.4deg) scale(1.312);
    opacity: 0.96;
  }
  83% {
    transform: translate(116vw, 2.6vh) rotate(6deg) scale(1.318);
    opacity: 0.94;
  }
  84% {
    transform: translate(118vw, 2.8vh) rotate(5.4deg) scale(1.324);
    opacity: 0.92;
  }
  85% {
    transform: translate(120vw, 3vh) rotate(5deg) scale(1.33);
    opacity: 0.9;
  }
  86% {
    transform: translate(122vw, 3.2vh) rotate(4.4deg) scale(1.336);
    opacity: 0.86;
  }
  87% {
    transform: translate(124vw, 3.4vh) rotate(3.8deg) scale(1.342);
    opacity: 0.82;
  }
  88% {
    transform: translate(126vw, 3.6vh) rotate(3.4deg) scale(1.348);
    opacity: 0.78;
  }
  89% {
    transform: translate(128vw, 3.8vh) rotate(3.2deg) scale(1.354);
    opacity: 0.74;
  }
  90% {
    transform: translate(130vw, 4vh) rotate(3deg) scale(1.36);
    opacity: 0.7;
  }
  91% {
    transform: translate(132vw, 4.2vh) rotate(2.6deg) scale(1.366);
    opacity: 0.64;
  }
  92% {
    transform: translate(134vw, 4.4vh) rotate(2.4deg) scale(1.372);
    opacity: 0.58;
  }
  93% {
    transform: translate(136vw, 4.6vh) rotate(2.2deg) scale(1.378);
    opacity: 0.52;
  }
  94% {
    transform: translate(138vw, 4.8vh) rotate(2.1deg) scale(1.384);
    opacity: 0.46;
  }
  95% {
    transform: translate(140vw, 5vh) rotate(2deg) scale(1.39);
    opacity: 0.4;
  }
  96% {
    transform: translate(142vw, 5vh) rotate(1.6deg) scale(1.396);
    opacity: 0.32;
  }
  97% {
    transform: translate(144vw, 5vh) rotate(1.2deg) scale(1.402);
    opacity: 0.24;
  }
  98% {
    transform: translate(146vw, 5vh) rotate(0.8deg) scale(1.408);
    opacity: 0.16;
  }
  99% {
    transform: translate(148vw, 5vh) rotate(0.4deg) scale(1.414);
    opacity: 0.08;
  }
  100% {
    transform: translate(150vw, 5vh) rotate(0deg) scale(1.42);
    opacity: 0;
  }
}

/* Colorful sparkling trail effect - Follows rocket */
.rocket-launch::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
  background: radial-gradient(
    ellipse at center,
    rgba(255, 215, 0, 0.8) 0%,
    rgba(255, 140, 0, 0.6) 20%,
    rgba(255, 69, 0, 0.5) 40%,
    rgba(255, 20, 147, 0.4) 60%,
    transparent 100%
  );
  border-radius: 50%;
  filter: blur(25px);
  animation: sparkleTrailWave 6s ease-out forwards;
  pointer-events: none;
}

/* Secondary smoke trail - Follows rocket */
.rocket-launch::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 180px;
  height: 180px;
  background: radial-gradient(
    ellipse at center,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(220, 220, 255, 0.6) 25%,
    rgba(180, 180, 255, 0.4) 50%,
    transparent 100%
  );
  border-radius: 50%;
  filter: blur(30px);
  animation: smokeTrailWave 6s ease-out forwards;
  pointer-events: none;
}

@keyframes sparkleTrailWave {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
  10% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(0.8);
  }
  30% {
    opacity: 0.95;
    transform: translate(-50%, -50%) scale(1.2);
  }
  60% {
    opacity: 0.9;
    transform: translate(-50%, -50%) scale(1.5);
  }
  85% {
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(2);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(2.5);
  }
}

@keyframes smokeTrailWave {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.4);
  }
  15% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(0.9);
  }
  40% {
    opacity: 0.8;
    transform: translate(-50%, -50%) scale(1.3);
  }
  70% {
    opacity: 0.6;
    transform: translate(-50%, -50%) scale(1.8);
  }
  90% {
    opacity: 0.3;
    transform: translate(-50%, -50%) scale(2.3);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(2.8);
  }
}

/* Hide rocket after animation completes */
.rocket-animation-container {
  animation: hideRocket 0.1s 6s forwards;
}

@keyframes hideRocket {
  to {
    display: none;
    visibility: hidden;
  }
}

/* Responsive adjustments */
@media (max-width: 1200px) {
  .rocket-animation-container {
    width: 192px;
    height: 192px;
  }
}

@media (max-width: 767px) {
  .rocket-animation-container {
    width: 160px;
    height: 160px;
  }

  @keyframes rocketWavePath {
    0% {
      transform: translate(-50vw, 0vh) rotate(0deg) scale(0.5);
      opacity: 0;
    }
    1% {
      transform: translate(-48vw, 0vh) rotate(-1deg) scale(0.52);
      opacity: 0.2;
    }
    2% {
      transform: translate(-46vw, 0vh) rotate(-2deg) scale(0.54);
      opacity: 0.4;
    }
    3% {
      transform: translate(-44vw, 0vh) rotate(-3deg) scale(0.56);
      opacity: 0.6;
    }
    4% {
      transform: translate(-42vw, 0vh) rotate(-4deg) scale(0.58);
      opacity: 0.8;
    }
    5% {
      transform: translate(-40vw, 0vh) rotate(-5deg) scale(0.6);
      opacity: 1;
    }
    6% {
      transform: translate(-38vw, -2vh) rotate(-10.6deg) scale(0.62);
    }
    7% {
      transform: translate(-36vw, -4vh) rotate(-16.2deg) scale(0.64);
    }
    8% {
      transform: translate(-34vw, -6vh) rotate(-21.8deg) scale(0.66);
    }
    9% {
      transform: translate(-32vw, -8vh) rotate(-24.9deg) scale(0.68);
    }
    10% {
      transform: translate(-30vw, -10vh) rotate(-28deg) scale(0.7);
    }
    11% {
      transform: translate(-28.33vw, -10.67vh) rotate(-26.67deg) scale(0.72);
    }
    12% {
      transform: translate(-26.67vw, -11.33vh) rotate(-24.33deg) scale(0.723);
    }
    13% {
      transform: translate(-25vw, -12vh) rotate(-22deg) scale(0.73);
    }
    14% {
      transform: translate(-23vw, -12.5vh) rotate(-19.5deg) scale(0.74);
    }
    15% {
      transform: translate(-21vw, -13vh) rotate(-17deg) scale(0.75);
    }
    16% {
      transform: translate(-19.5vw, -13.5vh) rotate(-14.5deg) scale(0.76);
    }
    17% {
      transform: translate(-18vw, -14vh) rotate(-12deg) scale(0.77);
    }
    18% {
      transform: translate(-15.33vw, -14.33vh) rotate(-8deg) scale(0.783);
    }
    19% {
      transform: translate(-12.67vw, -14.67vh) rotate(-4deg) scale(0.79);
    }
    20% {
      transform: translate(-10vw, -15vh) rotate(0deg) scale(0.8);
    }
    21% {
      transform: translate(-7.67vw, -14vh) rotate(4deg) scale(0.808);
    }
    22% {
      transform: translate(-5.33vw, -13vh) rotate(8deg) scale(0.817);
    }
    23% {
      transform: translate(-3vw, -12vh) rotate(12deg) scale(0.825);
    }
    24% {
      transform: translate(-1vw, -11vh) rotate(15.33deg) scale(0.84);
    }
    25% {
      transform: translate(1vw, -10vh) rotate(18.67deg) scale(0.855);
    }
    26% {
      transform: translate(2vw, -9.5vh) rotate(20.33deg) scale(0.863);
    }
    27% {
      transform: translate(3vw, -9vh) rotate(22deg) scale(0.87);
    }
    28% {
      transform: translate(5.33vw, -6vh) rotate(24deg) scale(0.88);
    }
    29% {
      transform: translate(7.67vw, -3vh) rotate(26deg) scale(0.89);
    }
    30% {
      transform: translate(10vw, 0vh) rotate(28deg) scale(0.9);
    }
    31% {
      transform: translate(12vw, 2vh) rotate(28deg) scale(0.91);
    }
    32% {
      transform: translate(14vw, 4vh) rotate(28deg) scale(0.92);
    }
    33% {
      transform: translate(16vw, 6vh) rotate(28deg) scale(0.93);
    }
    34% {
      transform: translate(18vw, 8vh) rotate(28deg) scale(0.94);
    }
    35% {
      transform: translate(20vw, 10vh) rotate(28deg) scale(0.95);
    }
    36% {
      transform: translate(21.67vw, 10.67vh) rotate(26.67deg) scale(0.958);
    }
    37% {
      transform: translate(23.33vw, 11.33vh) rotate(24.33deg) scale(0.967);
    }
    38% {
      transform: translate(25vw, 12vh) rotate(22deg) scale(0.975);
    }
    39% {
      transform: translate(27vw, 12.5vh) rotate(18deg) scale(0.985);
    }
    40% {
      transform: translate(29vw, 13vh) rotate(14deg) scale(0.995);
    }
    41% {
      transform: translate(31vw, 13.5vh) rotate(11deg) scale(1.005);
    }
    42% {
      transform: translate(33vw, 14vh) rotate(8deg) scale(1.015);
    }
    43% {
      transform: translate(36.33vw, 12.67vh) rotate(3deg) scale(1.022);
    }
    44% {
      transform: translate(38.17vw, 11.33vh) rotate(-1deg) scale(1.026);
    }
    45% {
      transform: translate(40vw, 10vh) rotate(-5deg) scale(1.03);
    }
    46% {
      transform: translate(42vw, 8.5vh) rotate(-8deg) scale(1.0375);
    }
    47% {
      transform: translate(44vw, 7vh) rotate(-12deg) scale(1.045);
    }
    48% {
      transform: translate(46vw, 5.5vh) rotate(-16deg) scale(1.0525);
    }
    49% {
      transform: translate(48vw, 3vh) rotate(-20deg) scale(1.06);
    }
    50% {
      transform: translate(50vw, 0vh) rotate(-28deg) scale(1.06);
    }
    51% {
      transform: translate(52vw, -2vh) rotate(-29deg) scale(1.065);
    }
    52% {
      transform: translate(54vw, -4vh) rotate(-29deg) scale(1.07);
    }
    53% {
      transform: translate(56vw, -6vh) rotate(-29deg) scale(1.075);
    }
    54% {
      transform: translate(58vw, -8vh) rotate(-29deg) scale(1.08);
    }
    55% {
      transform: translate(60vw, -10vh) rotate(-28deg) scale(1.09);
    }
    56% {
      transform: translate(61.67vw, -10.67vh) rotate(-26.67deg) scale(1.095);
    }
    57% {
      transform: translate(63.33vw, -11.33vh) rotate(-24.33deg) scale(1.1);
    }
    58% {
      transform: translate(65vw, -12vh) rotate(-22deg) scale(1.105);
    }
    59% {
      transform: translate(67vw, -12.5vh) rotate(-18deg) scale(1.111);
    }
    60% {
      transform: translate(69vw, -13vh) rotate(-15deg) scale(1.117);
    }
    61% {
      transform: translate(71vw, -13.5vh) rotate(-11.5deg) scale(1.123);
    }
    62% {
      transform: translate(73vw, -14vh) rotate(-8deg) scale(1.13);
    }
    63% {
      transform: translate(75.33vw, -13.33vh) rotate(-2.67deg) scale(1.137);
    }
    64% {
      transform: translate(77.67vw, -12.67vh) rotate(2.67deg) scale(1.143);
    }
    65% {
      transform: translate(80vw, -12vh) rotate(8deg) scale(1.15);
    }
    66% {
      transform: translate(81.67vw, -10.67vh) rotate(11.33deg) scale(1.155);
    }
    67% {
      transform: translate(83.33vw, -9.33vh) rotate(14.67deg) scale(1.16);
    }
    68% {
      transform: translate(85vw, -8vh) rotate(18deg) scale(1.165);
    }
    69% {
      transform: translate(87.5vw, -7vh) rotate(20deg) scale(1.173);
    }
    70% {
      transform: translate(90vw, -6vh) rotate(22deg) scale(1.18);
    }
    71% {
      transform: translate(92vw, -4.8vh) rotate(21.6deg) scale(1.186);
    }
    72% {
      transform: translate(94vw, -3.6vh) rotate(21.2deg) scale(1.192);
    }
    73% {
      transform: translate(96vw, -2.4vh) rotate(20.8deg) scale(1.198);
    }
    74% {
      transform: translate(98vw, -1.2vh) rotate(20.4deg) scale(1.204);
    }
    75% {
      transform: translate(100vw, 0vh) rotate(20deg) scale(1.21);
    }
    76% {
      transform: translate(102vw, 0.4vh) rotate(17.6deg) scale(1.216);
    }
    77% {
      transform: translate(104vw, 0.8vh) rotate(15.2deg) scale(1.222);
    }
    78% {
      transform: translate(106vw, 1.2vh) rotate(12.8deg) scale(1.228);
    }
    79% {
      transform: translate(108vw, 1.6vh) rotate(10.4deg) scale(1.234);
    }
    80% {
      transform: translate(110vw, 2vh) rotate(8deg) scale(1.24);
      opacity: 1;
    }
    81% {
      transform: translate(112vw, 2.2vh) rotate(7.4deg) scale(1.246);
      opacity: 0.98;
    }
    82% {
      transform: translate(114vw, 2.4vh) rotate(6.6deg) scale(1.252);
      opacity: 0.96;
    }
    83% {
      transform: translate(116vw, 2.6vh) rotate(6deg) scale(1.258);
      opacity: 0.94;
    }
    84% {
      transform: translate(118vw, 2.8vh) rotate(5.4deg) scale(1.264);
      opacity: 0.92;
    }
    85% {
      transform: translate(120vw, 3vh) rotate(5deg) scale(1.27);
      opacity: 0.9;
    }
    86% {
      transform: translate(122vw, 3.2vh) rotate(4.4deg) scale(1.276);
      opacity: 0.86;
    }
    87% {
      transform: translate(124vw, 3.4vh) rotate(3.8deg) scale(1.282);
      opacity: 0.82;
    }
    88% {
      transform: translate(126vw, 3.6vh) rotate(3.4deg) scale(1.288);
      opacity: 0.78;
    }
    89% {
      transform: translate(128vw, 3.8vh) rotate(3.2deg) scale(1.294);
      opacity: 0.74;
    }
    90% {
      transform: translate(130vw, 4vh) rotate(3deg) scale(1.3);
      opacity: 0.7;
    }
    91% {
      transform: translate(132vw, 4.2vh) rotate(2.6deg) scale(1.306);
      opacity: 0.64;
    }
    92% {
      transform: translate(134vw, 4.4vh) rotate(2.4deg) scale(1.312);
      opacity: 0.58;
    }
    93% {
      transform: translate(136vw, 4.6vh) rotate(2.2deg) scale(1.318);
      opacity: 0.52;
    }
    94% {
      transform: translate(138vw, 4.8vh) rotate(2.1deg) scale(1.324);
      opacity: 0.46;
    }
    95% {
      transform: translate(140vw, 5vh) rotate(2deg) scale(1.33);
      opacity: 0.4;
    }
    96% {
      transform: translate(142vw, 5vh) rotate(1.6deg) scale(1.336);
      opacity: 0.32;
    }
    97% {
      transform: translate(144vw, 5vh) rotate(1.2deg) scale(1.342);
      opacity: 0.24;
    }
    98% {
      transform: translate(146vw, 5vh) rotate(0.8deg) scale(1.348);
      opacity: 0.16;
    }
    99% {
      transform: translate(148vw, 5vh) rotate(0.4deg) scale(1.354);
      opacity: 0.08;
    }
    100% {
      transform: translate(150vw, 5vh) rotate(0deg) scale(1.36);
      opacity: 0;
    }
  }
}

@media (max-width: 575px) {
  .rocket-animation-container {
    width: 128px;
    height: 128px;
  }

  @keyframes rocketWavePath {
    0% {
      transform: translate(-50vw, 0vh) rotate(0deg) scale(0.45);
      opacity: 0;
    }
    1% {
      transform: translate(-48vw, 0vh) rotate(-1deg) scale(0.47);
      opacity: 0.2;
    }
    2% {
      transform: translate(-46vw, 0vh) rotate(-2deg) scale(0.49);
      opacity: 0.4;
    }
    3% {
      transform: translate(-44vw, 0vh) rotate(-3deg) scale(0.51);
      opacity: 0.6;
    }
    4% {
      transform: translate(-42vw, 0vh) rotate(-4deg) scale(0.53);
      opacity: 0.8;
    }
    5% {
      transform: translate(-40vw, 0vh) rotate(-5deg) scale(0.55);
      opacity: 1;
    }
    6% {
      transform: translate(-38vw, -2.4vh) rotate(-11.6deg) scale(0.57);
    }
    7% {
      transform: translate(-36vw, -4.8vh) rotate(-18.2deg) scale(0.59);
    }
    8% {
      transform: translate(-34vw, -7.2vh) rotate(-24.8deg) scale(0.61);
    }
    9% {
      transform: translate(-32vw, -9.6vh) rotate(-31.4deg) scale(0.63);
    }
    10% {
      transform: translate(-30vw, -12vh) rotate(-38deg) scale(0.65);
    }
    11% {
      transform: translate(-28.33vw, -13vh) rotate(-36deg) scale(0.658);
    }
    12% {
      transform: translate(-26.67vw, -14vh) rotate(-33deg) scale(0.667);
    }
    13% {
      transform: translate(-25vw, -15vh) rotate(-30deg) scale(0.675);
    }
    14% {
      transform: translate(-23vw, -15.5vh) rotate(-27deg) scale(0.684);
    }
    15% {
      transform: translate(-21vw, -16vh) rotate(-24deg) scale(0.692);
    }
    16% {
      transform: translate(-19.5vw, -16.5vh) rotate(-21deg) scale(0.701);
    }
    17% {
      transform: translate(-18vw, -17vh) rotate(-18deg) scale(0.71);
    }
    18% {
      transform: translate(-15.33vw, -17.33vh) rotate(-12deg) scale(0.723);
    }
    19% {
      transform: translate(-12.67vw, -17.67vh) rotate(-6deg) scale(0.737);
    }
    20% {
      transform: translate(-10vw, -18vh) rotate(0deg) scale(0.75);
    }
    21% {
      transform: translate(-7.67vw, -17vh) rotate(5deg) scale(0.758);
    }
    22% {
      transform: translate(-5.33vw, -16vh) rotate(10deg) scale(0.767);
    }
    23% {
      transform: translate(-3vw, -15vh) rotate(15deg) scale(0.775);
    }
    24% {
      transform: translate(-0.75vw, -13vh) rotate(20deg) scale(0.786);
    }
    25% {
      transform: translate(1.5vw, -11vh) rotate(25deg) scale(0.798);
    }
    26% {
      transform: translate(2.75vw, -10vh) rotate(27.5deg) scale(0.804);
    }
    27% {
      transform: translate(4vw, -9vh) rotate(30deg) scale(0.81);
    }
    28% {
      transform: translate(6vw, -6vh) rotate(32.67deg) scale(0.823);
    }
    29% {
      transform: translate(8vw, -3vh) rotate(35.33deg) scale(0.837);
    }
    30% {
      transform: translate(10vw, 0vh) rotate(38deg) scale(0.85);
    }
    31% {
      transform: translate(12vw, 2.4vh) rotate(38deg) scale(0.86);
    }
    32% {
      transform: translate(14vw, 4.8vh) rotate(38deg) scale(0.87);
    }
    33% {
      transform: translate(16vw, 7.2vh) rotate(38deg) scale(0.88);
    }
    34% {
      transform: translate(18vw, 9.6vh) rotate(38deg) scale(0.89);
    }
    35% {
      transform: translate(20vw, 12vh) rotate(38deg) scale(0.9);
    }
    36% {
      transform: translate(21.67vw, 13vh) rotate(36deg) scale(0.908);
    }
    37% {
      transform: translate(23.33vw, 14vh) rotate(33deg) scale(0.917);
    }
    38% {
      transform: translate(25vw, 15vh) rotate(30deg) scale(0.925);
    }
    39% {
      transform: translate(27vw, 15.67vh) rotate(26deg) scale(0.936);
    }
    40% {
      transform: translate(29vw, 16.33vh) rotate(22deg) scale(0.948);
    }
    41% {
      transform: translate(30.5vw, 16.67vh) rotate(20deg) scale(0.954);
    }
    42% {
      transform: translate(32vw, 17vh) rotate(18deg) scale(0.96);
    }
    43% {
      transform: translate(35vw, 15.67vh) rotate(10deg) scale(0.973);
    }
    44% {
      transform: translate(37.5vw, 13.83vh) rotate(2.5deg) scale(0.987);
    }
    45% {
      transform: translate(40vw, 12vh) rotate(-5deg) scale(1);
    }
    46% {
      transform: translate(42vw, 10vh) rotate(-10deg) scale(1.0075);
    }
    47% {
      transform: translate(44vw, 8vh) rotate(-15deg) scale(1.015);
    }
    48% {
      transform: translate(46vw, 6vh) rotate(-20deg) scale(1.0225);
    }
    49% {
      transform: translate(48vw, 3vh) rotate(-28deg) scale(1.03);
    }
    50% {
      transform: translate(50vw, 0vh) rotate(-38deg) scale(1.03);
    }
    51% {
      transform: translate(52vw, -2.5vh) rotate(-39deg) scale(1.0375);
    }
    52% {
      transform: translate(54vw, -5vh) rotate(-39deg) scale(1.045);
    }
    53% {
      transform: translate(56vw, -7.5vh) rotate(-39deg) scale(1.0525);
    }
    54% {
      transform: translate(58vw, -10vh) rotate(-39deg) scale(1.06);
    }
    55% {
      transform: translate(60vw, -12vh) rotate(-38deg) scale(1.06);
    }
    56% {
      transform: translate(61.67vw, -13vh) rotate(-36deg) scale(1.065);
    }
    57% {
      transform: translate(63.33vw, -14vh) rotate(-33deg) scale(1.07);
    }
    58% {
      transform: translate(65vw, -15vh) rotate(-30deg) scale(1.075);
    }
    59% {
      transform: translate(67vw, -15.67vh) rotate(-26deg) scale(1.081);
    }
    60% {
      transform: translate(69vw, -16.33vh) rotate(-22deg) scale(1.086);
    }
    61% {
      transform: translate(70.5vw, -16.67vh) rotate(-20deg) scale(1.091);
    }
    62% {
      transform: translate(72vw, -17vh) rotate(-18deg) scale(1.095);
    }
    63% {
      transform: translate(74.67vw, -16.67vh) rotate(-11.33deg) scale(1.102);
    }
    64% {
      transform: translate(77.33vw, -15.83vh) rotate(-3.67deg) scale(1.111);
    }
    65% {
      transform: translate(80vw, -15vh) rotate(5deg) scale(1.12);
    }
    66% {
      transform: translate(81.67vw, -13.67vh) rotate(10deg) scale(1.125);
    }
    67% {
      transform: translate(83.33vw, -12.33vh) rotate(15deg) scale(1.13);
    }
    68% {
      transform: translate(85vw, -11vh) rotate(20deg) scale(1.135);
    }
    69% {
      transform: translate(87.5vw, -9.5vh) rotate(24deg) scale(1.143);
    }
    70% {
      transform: translate(90vw, -8vh) rotate(28deg) scale(1.15);
    }
    71% {
      transform: translate(92vw, -6.4vh) rotate(26deg) scale(1.156);
    }
    72% {
      transform: translate(94vw, -4.8vh) rotate(24deg) scale(1.162);
    }
    73% {
      transform: translate(96vw, -3.2vh) rotate(22deg) scale(1.168);
    }
    74% {
      transform: translate(98vw, -1.6vh) rotate(20deg) scale(1.174);
    }
    75% {
      transform: translate(100vw, 0vh) rotate(18deg) scale(1.18);
    }
    76% {
      transform: translate(102vw, 0.4vh) rotate(16.2deg) scale(1.186);
    }
    77% {
      transform: translate(104vw, 0.8vh) rotate(14.4deg) scale(1.192);
    }
    78% {
      transform: translate(106vw, 1.2vh) rotate(12.6deg) scale(1.198);
    }
    79% {
      transform: translate(108vw, 1.6vh) rotate(10.8deg) scale(1.204);
    }
    80% {
      transform: translate(110vw, 2vh) rotate(9deg) scale(1.21);
      opacity: 1;
    }
    81% {
      transform: translate(112vw, 2.2vh) rotate(8.2deg) scale(1.216);
      opacity: 0.98;
    }
    82% {
      transform: translate(114vw, 2.4vh) rotate(7.2deg) scale(1.222);
      opacity: 0.96;
    }
    83% {
      transform: translate(116vw, 2.6vh) rotate(6.4deg) scale(1.228);
      opacity: 0.94;
    }
    84% {
      transform: translate(118vw, 2.8vh) rotate(5.6deg) scale(1.234);
      opacity: 0.92;
    }
    85% {
      transform: translate(120vw, 3vh) rotate(5deg) scale(1.24);
      opacity: 0.9;
    }
    86% {
      transform: translate(122vw, 3.2vh) rotate(5deg) scale(1.246);
      opacity: 0.86;
    }
    87% {
      transform: translate(124vw, 3.4vh) rotate(5deg) scale(1.252);
      opacity: 0.82;
    }
    88% {
      transform: translate(126vw, 3.6vh) rotate(5deg) scale(1.258);
      opacity: 0.78;
    }
    89% {
      transform: translate(128vw, 3.8vh) rotate(5deg) scale(1.264);
      opacity: 0.74;
    }
    90% {
      transform: translate(130vw, 4vh) rotate(5deg) scale(1.27);
      opacity: 0.7;
    }
    91% {
      transform: translate(132vw, 4.2vh) rotate(4deg) scale(1.276);
      opacity: 0.64;
    }
    92% {
      transform: translate(134vw, 4.4vh) rotate(3.5deg) scale(1.282);
      opacity: 0.58;
    }
    93% {
      transform: translate(136vw, 4.6vh) rotate(3deg) scale(1.288);
      opacity: 0.52;
    }
    94% {
      transform: translate(138vw, 4.8vh) rotate(2.5deg) scale(1.294);
      opacity: 0.46;
    }
    95% {
      transform: translate(140vw, 5vh) rotate(2deg) scale(1.3);
      opacity: 0.4;
    }
    96% {
      transform: translate(142vw, 5vh) rotate(1.6deg) scale(1.306);
      opacity: 0.32;
    }
    97% {
      transform: translate(144vw, 5vh) rotate(1.2deg) scale(1.312);
      opacity: 0.24;
    }
    98% {
      transform: translate(146vw, 5vh) rotate(0.8deg) scale(1.318);
      opacity: 0.16;
    }
    99% {
      transform: translate(148vw, 5vh) rotate(0.4deg) scale(1.324);
      opacity: 0.08;
    }
    100% {
      transform: translate(150vw, 5vh) rotate(0deg) scale(1.33);
      opacity: 0;
    }
  }
}

/* Fix for second hero slide image zoom issue */
.vs-hero-inner:nth-child(2) .vs-hero-bg img {
  object-fit: contain !important;
  object-position: center center !important;
}

/* Mobile fix for hero images - shift content to be visible */
@media (max-width: 767px) {
  .vs-hero-inner:nth-child(1) .vs-hero-bg {
    background-position: 20% center !important;
  }
  .vs-hero-inner:nth-child(2) .vs-hero-bg {
    background-position: 30% center !important;
  }
}

/* ========== Feature Cards - App Icon Style ========== */
.feature-card {
  text-align: center;
  border-radius: 24px;
  padding: 40px 28px 32px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.4s ease;
  border: 1px solid rgba(0, 0, 0, 0.06);
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
}

/* Card background colors */
.feature-card--pink {
  background: #fff0f0;
}
.feature-card--purple {
  background: #f8f6ff;
}
.feature-card--yellow {
  background: #fff8e7;
}
.feature-card--green {
  background: #edfff6;
}

/* App-icon style */
.feature-card__icon {
  width: 72px;
  height: 72px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
}

.feature-card__icon i {
  font-size: 28px;
  color: white;
}

/* Icon gradient backgrounds */
.feature-icon--pink {
  background: linear-gradient(135deg, #ff6b8a, #ee4466);
}
.feature-icon--purple {
  background: linear-gradient(135deg, #a78bfa, #7c4dff);
}
.feature-icon--yellow {
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
}
.feature-icon--green {
  background: linear-gradient(135deg, #34d399, #10b981);
}
.feature-icon--transparent {
  background: transparent;
  width: 120px;
  height: 120px;
  border-radius: 0;
  box-shadow: none;
  padding: 0;
  overflow: visible;
}

.feature-icon--teacher {
  width: 150px;
  height: 150px;
  margin-top: -20px;
  margin-bottom: 0px;
}

.feature-icon--larger {
  width: 140px;
  height: 140px;
  margin-top: -15px;
  margin-bottom: 11px;
}

/* Feature icon image */
.feature-icon-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* Highlight keyword */
.feature-card__highlight {
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 8px;
  letter-spacing: 0.5px;
}

.highlight--pink {
  color: #ee4466;
}
.highlight--purple {
  color: #7c4dff;
}
.highlight--yellow {
  color: #f59e0b;
}
.highlight--green {
  color: #10b981;
}

/* Title */
.feature-card__title {
  font-size: 20px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 12px;
}

/* Description */
.feature-card__text {
  font-size: 15px;
  line-height: 1.7;
  color: #6b7280;
  margin-bottom: 20px;
  flex-grow: 1;
}

/* Learn more link */
.feature-card__link {
  font-size: 15px;
  color: #9ca3af;
  text-decoration: none;
  transition: color 0.3s ease;
}

.feature-card--pink:hover .feature-card__link {
  color: #ee4466;
}
.feature-card--purple:hover .feature-card__link {
  color: #7c4dff;
}
.feature-card--yellow:hover .feature-card__link {
  color: #f59e0b;
}
.feature-card--green:hover .feature-card__link {
  color: #10b981;
}

@media (max-width: 767px) {
  .feature-card {
    padding: 30px 22px 26px;
  }

  .feature-card__icon {
    width: 60px;
    height: 60px;
    border-radius: 16px;
  }

  .feature-icon--transparent {
    width: 120px;
    height: 120px;
  }

  .feature-card__icon i {
    font-size: 24px;
  }

  .feature-card__highlight {
    font-size: 24px;
  }

  .feature-card__title {
    font-size: 16px;
  }
}

/* ========================================
   Learning Journey Section
   ======================================== */
.learning-journey-section {
  padding: 50px 0 60px;
  background: #fefcf8;
  position: relative;
  overflow: hidden;
}

.journey-title {
  font-size: 40px;
  font-weight: 800;
  color: #2d3436;
  margin-bottom: 12px;
  line-height: 1.3;
}

.journey-title-highlight {
  background: linear-gradient(135deg, #ff6fb7, #a66cff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.journey-subtitle {
  font-size: 17px;
  color: #636e72;
  max-width: 560px;
  margin: 0 auto 15px;
  line-height: 1.6;
}

.journey-visual-img {
  padding: 0;
}

.learning-path-img {
  max-width: 100%;
  width: 750px;
  height: auto;
  display: block;
  margin: 0 auto;
}

/* Visual Journey Row */
.journey-visual {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  padding: 30px 0 50px;
  position: relative;
}

.journey-path {
  position: absolute;
  left: 10%;
  right: 10%;
  top: 55%;
  width: 80%;
  height: 8px;
  z-index: 0;
  pointer-events: none;
}

.journey-path-line {
  stroke-dashoffset: 100;
  animation: dashDraw 3s ease-in-out infinite alternate;
}

@keyframes dashDraw {
  from {
    stroke-dashoffset: 100;
  }
  to {
    stroke-dashoffset: 0;
  }
}

.journey-item {
  position: relative;
  z-index: 1;
  flex-shrink: 0;
}

/* Mascot Character */
.journey-character {
  margin-right: 10px;
}

.journey-mascot {
  position: relative;
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mascot-flag {
  background: #7c6ae8;
  color: white;
  font-size: 11px;
  font-weight: 700;
  padding: 6px 12px;
  border-radius: 8px;
  white-space: nowrap;
  position: relative;
  margin-bottom: 4px;
  animation: flagWave 2s ease-in-out infinite;
  box-shadow: 0 3px 10px rgba(124, 106, 232, 0.3);
}

.mascot-flag::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #7c6ae8;
}

@keyframes flagWave {
  0%,
  100% {
    transform: rotate(-3deg);
  }
  50% {
    transform: rotate(3deg);
  }
}

.mascot-body {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #ffd93d, #ffb830);
  border-radius: 50% 50% 45% 45%;
  position: relative;
  box-shadow: 0 4px 15px rgba(255, 184, 48, 0.4);
  animation: mascotBounce 2s ease-in-out infinite;
}

@keyframes mascotBounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

.mascot-face {
  position: relative;
  width: 100%;
  height: 100%;
}

.mascot-eyes {
  display: flex;
  justify-content: center;
  gap: 10px;
  padding-top: 14px;
}

.mascot-eye {
  width: 8px;
  height: 8px;
  background: #2d3436;
  border-radius: 50%;
  animation: blink 3s ease-in-out infinite;
}

@keyframes blink {
  0%,
  90%,
  100% {
    transform: scaleY(1);
  }
  95% {
    transform: scaleY(0.1);
  }
}

.mascot-mouth {
  width: 14px;
  height: 7px;
  border-bottom: 3px solid #e17055;
  border-radius: 0 0 10px 10px;
  margin: 4px auto 0;
}

.mascot-hands {
  position: absolute;
  width: 100%;
  top: 18px;
}

.mascot-hand {
  position: absolute;
  width: 12px;
  height: 12px;
  background: #ffd93d;
  border-radius: 50%;
}

.mascot-hand--left {
  left: -6px;
  animation: handWaveLeft 1.5s ease-in-out infinite;
}

.mascot-hand--right {
  right: -6px;
  animation: handWaveRight 1.5s ease-in-out infinite;
}

@keyframes handWaveLeft {
  0%,
  100% {
    transform: rotate(0deg) translateY(0);
  }
  50% {
    transform: rotate(-20deg) translateY(-5px);
  }
}

@keyframes handWaveRight {
  0%,
  100% {
    transform: rotate(0deg) translateY(0);
  }
  50% {
    transform: rotate(20deg) translateY(-5px);
  }
}

.mascot-wagon {
  position: relative;
  margin-top: -2px;
}

.wagon-body {
  width: 56px;
  height: 22px;
  background: linear-gradient(135deg, #ff6b6b, #ee5a24);
  border-radius: 6px 6px 8px 8px;
  margin: 0 auto;
  box-shadow: 0 3px 10px rgba(238, 90, 36, 0.3);
}

.wagon-wheels {
  display: flex;
  justify-content: space-between;
  padding: 0 4px;
  margin-top: -2px;
}

.wagon-wheel {
  width: 14px;
  height: 14px;
  background: #ff9f43;
  border-radius: 50%;
  border: 2px solid #f8a540;
  animation: wheelSpin 2s linear infinite;
}

@keyframes wheelSpin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Game Cards */
.journey-card {
  margin: 0 12px;
}

.journey-card-inner {
  width: 140px;
  height: 140px;
  border-radius: 20px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease;
  position: relative;
  overflow: hidden;
}

.journey-card-inner::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.15) 0%,
    transparent 60%
  );
  animation: cardShimmer 3s ease-in-out infinite;
}

@keyframes cardShimmer {
  0%,
  100% {
    transform: translate(-30%, -30%);
  }
  50% {
    transform: translate(10%, 10%);
  }
}

.journey-card:hover .journey-card-inner {
  transform: translateY(-8px) scale(1.05);
}

.journey-card--purple .journey-card-inner {
  background: linear-gradient(135deg, #7c6ae8, #5b4acf);
}

.journey-card--pink .journey-card-inner {
  background: linear-gradient(135deg, #ff6fb7, #e84393);
}

.journey-card--green .journey-card-inner {
  background: linear-gradient(135deg, #00d2a0, #00b894);
}

.journey-card-icon {
  font-size: 28px;
  color: white;
  margin-bottom: 6px;
  animation: iconPulse 2s ease-in-out infinite;
}

@keyframes iconPulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.journey-card-label {
  color: rgba(255, 255, 255, 0.9);
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.journey-card-numbers,
.journey-card-characters,
.journey-card-shapes {
  display: flex;
  gap: 8px;
  align-items: center;
}

.journey-card-numbers span,
.journey-card-characters span {
  width: 28px;
  height: 28px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 14px;
  backdrop-filter: blur(4px);
}

.shape {
  width: 20px;
  height: 20px;
  opacity: 0.8;
}

.shape--circle {
  background: #ffeaa7;
  border-radius: 50%;
}

.shape--triangle {
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 20px solid #74b9ff;
  background: transparent;
}

.shape--square {
  background: #ff7675;
  border-radius: 4px;
}

/* Gift Box */
.journey-gift {
  margin-left: 10px;
  position: relative;
}

.gift-box {
  width: 60px;
  animation: giftBounce 2s ease-in-out infinite;
}

@keyframes giftBounce {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-6px) rotate(-3deg);
  }
  75% {
    transform: translateY(-3px) rotate(3deg);
  }
}

.gift-lid {
  width: 64px;
  height: 18px;
  background: linear-gradient(135deg, #ff9ff3, #f368e0);
  border-radius: 6px 6px 0 0;
  margin: 0 auto;
  position: relative;
  box-shadow: 0 -2px 8px rgba(243, 104, 224, 0.3);
}

.gift-bow {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 24px;
  height: 12px;
  background: #ff6b6b;
  border-radius: 50% 50% 0 0;
}

.gift-bow::before,
.gift-bow::after {
  content: '';
  position: absolute;
  width: 12px;
  height: 10px;
  background: #ff6b6b;
  border-radius: 50%;
  top: 2px;
}

.gift-bow::before {
  left: -4px;
}
.gift-bow::after {
  right: -4px;
}

.gift-body {
  width: 56px;
  height: 40px;
  background: linear-gradient(135deg, #ffb8e0, #ff9ff3);
  border-radius: 0 0 8px 8px;
  margin: 0 auto;
  position: relative;
  box-shadow: 0 6px 15px rgba(255, 159, 243, 0.3);
}

.gift-body::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 8px;
  height: 100%;
  background: rgba(255, 255, 255, 0.3);
}

.gift-sparkles {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 80px;
}

.sparkle {
  position: absolute;
  color: #ffd93d;
  animation: sparkleShine 2s ease-in-out infinite;
}

.sparkle--1 {
  top: 0;
  left: 10%;
  font-size: 14px;
  animation-delay: 0s;
}
.sparkle--2 {
  top: -5px;
  right: 10%;
  font-size: 10px;
  animation-delay: 0.7s;
}
.sparkle--3 {
  top: 15px;
  left: 50%;
  font-size: 12px;
  animation-delay: 1.4s;
}

@keyframes sparkleShine {
  0%,
  100% {
    opacity: 0;
    transform: scale(0.5);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
    text-shadow: 0 0 8px #ffd93d;
  }
}

/* Benefits */
.journey-benefits {
  padding-top: 20px;
}

.journey-benefit {
  font-size: 17px;
  color: #2d3436;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.journey-benefit-icon {
  color: #00b894;
  font-size: 18px;
}

.benefit-highlight {
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 4px;
}

.benefit-highlight--purple {
  background: rgba(124, 106, 232, 0.12);
  color: #7c6ae8;
  text-decoration: underline;
  text-decoration-color: #7c6ae8;
  text-underline-offset: 3px;
}

.benefit-highlight--green {
  background: rgba(0, 184, 148, 0.12);
  color: #00b894;
  text-decoration: underline;
  text-decoration-color: #00b894;
  text-underline-offset: 3px;
}

.benefit-highlight--pink {
  background: rgba(233, 30, 140, 0.12);
  color: #e91e8c;
  text-decoration: underline;
  text-decoration-color: #e91e8c;
  text-underline-offset: 3px;
}

/* Floating Decorations */
.journey-decoration {
  position: absolute;
  pointer-events: none;
  z-index: 0;
}

.journey-deco--star-1 {
  top: 15%;
  left: 5%;
  font-size: 24px;
  color: #ffd93d;
  animation: decoFloat 4s ease-in-out infinite;
  opacity: 0.4;
}

.journey-deco--star-2 {
  bottom: 20%;
  right: 5%;
  font-size: 18px;
  color: #ff6fb7;
  animation: decoFloat 5s ease-in-out infinite;
  animation-delay: 1s;
  opacity: 0.4;
}

.journey-deco--dot-1 {
  top: 25%;
  right: 8%;
  width: 12px;
  height: 12px;
  background: #a66cff;
  border-radius: 50%;
  opacity: 0.25;
  animation: decoFloat 3.5s ease-in-out infinite;
}

.journey-deco--dot-2 {
  bottom: 30%;
  left: 8%;
  width: 8px;
  height: 8px;
  background: #00b894;
  border-radius: 50%;
  opacity: 0.25;
  animation: decoFloat 4.5s ease-in-out infinite;
  animation-delay: 0.5s;
}

.journey-deco--dot-3 {
  top: 50%;
  left: 3%;
  width: 16px;
  height: 16px;
  background: #ffb830;
  border-radius: 50%;
  opacity: 0.2;
  animation: decoFloat 5s ease-in-out infinite;
  animation-delay: 1.5s;
}

@keyframes decoFloat {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-12px) rotate(10deg);
  }
}

/* Responsive */
@media (max-width: 991px) {
  .journey-title {
    font-size: 32px;
  }
  .journey-visual {
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px 0 40px;
  }
  .journey-path {
    display: none;
  }
  .journey-card-inner {
    width: 120px;
    height: 120px;
  }
}

@media (max-width: 767px) {
  .learning-journey-section {
    padding: 50px 0 40px;
  }
  .journey-title {
    font-size: 26px;
  }
  .journey-subtitle {
    font-size: 15px;
  }
  .journey-visual {
    gap: 15px;
  }
  .journey-card-inner {
    width: 100px;
    height: 100px;
  }
  .journey-card-icon {
    font-size: 22px;
  }
  .journey-card-numbers span,
  .journey-card-characters span {
    width: 22px;
    height: 22px;
    font-size: 11px;
  }
  .journey-benefit {
    font-size: 14px;
    flex-direction: column;
    gap: 4px;
  }
  .journey-character {
    display: none;
  }
  .journey-gift .gift-box {
    width: 45px;
  }
  .gift-lid {
    width: 50px;
    height: 14px;
  }
  .gift-body {
    width: 42px;
    height: 30px;
  }
}

/* ========================================
   Testimonials Section
   ======================================== */
.testimonials-section {
  padding: 80px 0;
}

.testi-intro {
  padding-right: 20px;
}

.testi-heading {
  font-size: 36px;
  font-weight: 800;
  color: #1b1464;
  line-height: 1.25;
  margin-bottom: 16px;
}

.testi-desc {
  font-size: 15px;
  color: #636e72;
  line-height: 1.7;
  margin-bottom: 28px;
}

.testi-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  background: linear-gradient(135deg, #4a8b3f, #3a7a30);
  color: white;
  font-size: 15px;
  font-weight: 600;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(74, 139, 63, 0.3);
}

.testi-cta:hover {
  background: linear-gradient(135deg, #3a7a30, #2d6a24);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(74, 139, 63, 0.4);
  color: white;
}

.testi-card {
  background: white;
  border-radius: 20px;
  padding: 28px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
  transition: all 0.3s ease;
  height: 100%;
}

.testi-card:hover {
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.1);
  transform: translateY(-3px);
}

.testi-card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
}

.testi-avatar-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
}

.testi-avatar--green {
  background: rgba(74, 139, 63, 0.1);
  color: #4a8b3f;
}

.testi-avatar--pink {
  background: rgba(233, 30, 140, 0.1);
  color: #e91e8c;
}

.testi-avatar--navy {
  background: rgba(27, 20, 100, 0.1);
  color: #1b1464;
}

.testi-name {
  font-size: 15px;
  font-weight: 700;
  color: #1b1464;
  margin: 0;
}

.testi-role {
  font-size: 13px;
  color: #e91e8c;
  font-weight: 500;
}

.testi-quote-icon {
  margin-left: auto;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: rgba(74, 139, 63, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4a8b3f;
  font-size: 14px;
}

.testi-stars {
  display: flex;
  gap: 3px;
  margin-bottom: 12px;
}

.testi-stars i {
  color: #ffb800;
  font-size: 13px;
}

.testi-card-title {
  font-size: 16px;
  font-weight: 700;
  color: #1b1464;
  margin-bottom: 8px;
}

.testi-card-text {
  font-size: 14px;
  color: #636e72;
  line-height: 1.65;
  margin: 0;
}

@media (max-width: 991px) {
  .testi-intro {
    padding-right: 0;
    text-align: center;
    margin-bottom: 20px;
  }

  .testi-heading {
    font-size: 30px;
  }
}

@media (max-width: 767px) {
  .testimonials-section {
    padding: 60px 0;
  }

  .testi-heading {
    font-size: 26px;
  }

  .testi-card {
    padding: 22px;
  }
}

/* ========================================
   How It Works Section
   ======================================== */
.how-it-works-section {
  padding: 80px 0;
  background: #f8f9fc;
}

.section-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  background: rgba(74, 139, 63, 0.08);
  border-radius: 50px;
  font-size: 14px;
  font-weight: 600;
  color: #4a8b3f;
  margin-bottom: 16px;
}

.section-tag i {
  font-size: 12px;
}

.section-tag--center {
  margin-left: auto;
  margin-right: auto;
}

.section-heading {
  font-size: 42px;
  font-weight: 800;
  color: #1b1464;
  line-height: 1.2;
  margin-bottom: 16px;
}

.title-highlight {
  color: #e91e8c;
}

.steps-grid {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 0;
}

.step-card {
  flex: 1;
  max-width: 280px;
  text-align: center;
  padding: 30px 20px;
  position: relative;
}

.step-number {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 14px;
  font-weight: 800;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #1b1464;
  display: flex;
  align-items: center;
  justify-content: center;
}

.step-icon-wrap {
  width: 80px;
  height: 80px;
  border-radius: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  margin: 0 auto 20px;
  transition: transform 0.3s ease;
}

.step-card:hover .step-icon-wrap {
  transform: translateY(-4px);
}

.step-icon--green {
  background: rgba(74, 139, 63, 0.1);
  color: #4a8b3f;
}

.step-icon--pink {
  background: rgba(233, 30, 140, 0.1);
  color: #e91e8c;
}

.step-icon--navy {
  background: rgba(27, 20, 100, 0.1);
  color: #1b1464;
}

.step-icon--accent {
  background: rgba(63, 53, 181, 0.1);
  color: #3f35b5;
}

.step-icon--transparent {
  background: transparent;
  box-shadow: none;
  width: 100px;
  height: 100px;
  border-radius: 0;
}

.step-icon-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.step-icon-img--larger {
  width: 140%;
  height: 140%;
  margin-top: -15px;
  margin-bottom: -5px;
}

.step-title {
  font-size: 20px;
  font-weight: 700;
  color: #1b1464;
  margin-bottom: 8px;
}

.step-desc {
  font-size: 15px;
  color: #636e72;
  line-height: 1.7;
  margin: 0;
}

.step-connector {
  display: flex;
  align-items: center;
  padding-top: 60px;
}

@media (max-width: 991px) {
  .section-heading {
    font-size: 36px;
  }

  .steps-grid {
    flex-wrap: wrap;
    gap: 10px;
  }

  .step-connector {
    display: none;
  }

  .step-card {
    max-width: 48%;
    flex: 0 0 48%;
  }
}

@media (max-width: 767px) {
  .how-it-works-section {
    padding: 60px 0;
  }

  .section-heading {
    font-size: 30px;
  }

  .step-card {
    max-width: 100%;
    flex: 0 0 100%;
  }
}

@media (max-width: 575px) {
  .section-heading {
    font-size: 26px;
  }
}

/* ========================================
   CTA Section
   ======================================== */
.home-cta-section {
  position: relative;
  padding: 80px 0;
  overflow: hidden;
}

.home-cta-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #4a8b3f 0%, #3a7a30 40%, #1b1464 100%);
  z-index: 0;
}

.home-cta-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.home-cta-particle {
  position: absolute;
  width: 8px;
  height: 8px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  animation: homeCTAFloat 6s ease-in-out infinite;
}

@keyframes homeCTAFloat {
  0%,
  100% {
    transform: translateY(100%) scale(0);
    opacity: 0;
  }
  20% {
    opacity: 1;
    transform: translateY(60%) scale(1);
  }
  80% {
    opacity: 0.6;
    transform: translateY(-20%) scale(0.8);
  }
}

.home-cta-section .container {
  position: relative;
  z-index: 1;
}

.home-cta-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 50px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 25px;
  backdrop-filter: blur(10px);
}

.home-cta-badge i {
  font-size: 16px;
}

.home-cta-title {
  font-size: 42px;
  font-weight: 900;
  color: #fff;
  line-height: 1.2;
  margin-bottom: 18px;
}

.home-cta-highlight {
  background: linear-gradient(135deg, #ffe5b4, #ffdab9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.home-cta-text {
  font-size: 17px;
  color: rgba(255, 255, 255, 0.9);
  max-width: 560px;
  margin: 0 auto 35px;
  line-height: 1.7;
}

.home-cta-buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

.home-cta-btn-primary {
  background: rgba(255, 255, 255, 0.95) !important;
  color: #4a8b3f !important;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2) !important;
}

.home-cta-btn-primary:hover {
  background: #fff !important;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3) !important;
}

.home-cta-btn-outline {
  border-color: rgba(255, 255, 255, 0.4) !important;
}

.home-cta-trust {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.home-cta-trust-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.85);
  font-size: 13px;
  font-weight: 600;
}

.home-cta-trust-item i {
  font-size: 16px;
  color: #ffe5b4;
}

@media (max-width: 767px) {
  .home-cta-section {
    padding: 60px 0;
  }

  .home-cta-title {
    font-size: 28px;
  }

  .home-cta-text {
    font-size: 15px;
  }

  .home-cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .home-cta-buttons .modern-btn {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }

  .home-cta-trust {
    gap: 15px;
  }
}

/* ========================================
   Blog Section - Modern Cards
   ======================================== */
.home-blog-card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.04);
}

.home-blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.1);
}

.home-blog-img {
  position: relative;
  overflow: hidden;
  height: 220px;
}

.home-blog-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.home-blog-card:hover .home-blog-img img {
  transform: scale(1.05);
}

.home-blog-category {
  position: absolute;
  top: 15px;
  left: 15px;
  padding: 5px 14px;
  background: linear-gradient(135deg, #4a8b3f, #5ea750);
  color: white;
  font-size: 12px;
  font-weight: 600;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.home-blog-content {
  padding: 22px 24px 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.home-blog-meta {
  display: flex;
  gap: 18px;
  margin-bottom: 12px;
}

.home-blog-meta span {
  font-size: 13px;
  color: #888;
  display: flex;
  align-items: center;
  gap: 6px;
}

.home-blog-meta i {
  color: #4a8b3f;
  font-size: 14px;
}

.home-blog-title {
  font-size: 18px;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 10px;
}

.home-blog-title a {
  color: #1b1464;
  text-decoration: none;
  transition: color 0.2s;
}

.home-blog-title a:hover {
  color: #4a8b3f;
}

.home-blog-excerpt {
  font-size: 14px;
  color: #777;
  line-height: 1.6;
  margin-bottom: 16px;
  flex: 1;
}

.home-blog-link {
  font-size: 14px;
  font-weight: 700;
  color: #4a8b3f;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s;
}

.home-blog-link:hover {
  color: #3a7a30;
  gap: 10px;
}

.home-blog-link i {
  font-size: 12px;
  transition: transform 0.2s;
}

/* Blog Skeleton Loading */
.home-blog-skeleton {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
}

.skeleton-img {
  height: 220px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s ease-in-out infinite;
}

.skeleton-content {
  padding: 22px 24px;
}

.skeleton-line {
  height: 14px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s ease-in-out infinite;
  border-radius: 6px;
  margin-bottom: 12px;
}

.skeleton-line.short {
  width: 40%;
}

.skeleton-line.medium {
  width: 70%;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

/* ========================================
   Subjects Section - Modern Cards
   ======================================== */
.subject-card {
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.06);
  transition: all 0.4s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.04);
}

.subject-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
}

/* Image Container */
.subject-card__img {
  position: relative;
  overflow: hidden;
  height: 240px;
}

.subject-card__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.5s ease;
}

.subject-card:hover .subject-card__img img {
  transform: scale(1.08);
}

/* Hover Overlay with Play Button */
.subject-card__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, transparent 30%, rgba(0, 0, 0, 0.5) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.subject-card:hover .subject-card__overlay {
  opacity: 1;
}

.subject-card__play {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(0.7);
  transition: transform 0.3s ease;
}

.subject-card:hover .subject-card__play {
  transform: scale(1);
}

.subject-card--purple .subject-card__play i {
  color: #6c5ce7;
}
.subject-card--pink .subject-card__play i {
  color: #e91e8c;
}
.subject-card--green .subject-card__play i {
  color: #4a8b3f;
}

.subject-card__play i {
  font-size: 20px;
  margin-left: 3px;
}

/* Badge */
.subject-card__badge {
  position: absolute;
  bottom: 15px;
  left: 15px;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 7px 16px;
  border-radius: 25px;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.3px;
  z-index: 2;
  backdrop-filter: blur(10px);
}

.subject-badge--purple {
  background: linear-gradient(135deg, #6c5ce7, #a29bfe);
}
.subject-badge--pink {
  background: linear-gradient(135deg, #e91e8c, #fd79a8);
}
.subject-badge--green {
  background: linear-gradient(135deg, #4a8b3f, #00b894);
}

.subject-card__badge i {
  font-size: 13px;
}

/* Card Body */
.subject-card__body {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.subject-card__grade-tag {
  display: inline-block;
  padding: 5px 14px;
  background: #f0f7ee;
  color: #4a8b3f;
  font-size: 12px;
  font-weight: 700;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 12px;
  width: fit-content;
}

.subject-card--purple .subject-card__grade-tag {
  background: #f0eeff;
  color: #6c5ce7;
}

.subject-card--pink .subject-card__grade-tag {
  background: #fdf0f6;
  color: #e91e8c;
}

.subject-card__title {
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 10px;
}

.subject-card__title a {
  color: #1b1464;
  text-decoration: none;
  transition: color 0.2s;
}

.subject-card--purple:hover .subject-card__title a {
  color: #6c5ce7;
}
.subject-card--pink:hover .subject-card__title a {
  color: #e91e8c;
}
.subject-card--green:hover .subject-card__title a {
  color: #4a8b3f;
}

.subject-card__text {
  font-size: 15px;
  color: #666;
  line-height: 1.7;
  margin-bottom: 18px;
  flex: 1;
}

/* Stats Row */
.subject-card__stats {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  padding-top: 16px;
  border-top: 1px solid #f0f0f0;
}

.subject-stat {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 14px;
  font-weight: 600;
  color: #555;
}

.subject-stat i {
  font-size: 14px;
  color: #999;
}

.subject-card--purple .subject-stat i {
  color: #6c5ce7;
}
.subject-card--pink .subject-stat i {
  color: #e91e8c;
}
.subject-card--green .subject-stat i {
  color: #4a8b3f;
}

/* Link Button */
.subject-card__link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  padding: 11px 24px;
  border-radius: 10px;
  transition: all 0.3s ease;
  width: fit-content;
}

.subject-card__link i {
  font-size: 12px;
  transition: transform 0.3s;
}

.subject-card__link:hover i {
  transform: translateX(4px);
}

.subject-link--purple {
  color: #6c5ce7;
  background: #f0eeff;
}
.subject-link--purple:hover {
  background: #6c5ce7;
  color: #fff;
}

.subject-link--pink {
  color: #e91e8c;
  background: #fdf0f6;
}
.subject-link--pink:hover {
  background: #e91e8c;
  color: #fff;
}

.subject-link--green {
  color: #4a8b3f;
  background: #f0f7ee;
}
.subject-link--green:hover {
  background: #4a8b3f;
  color: #fff;
}

/* Responsive */
@media (max-width: 767px) {
  .subject-card__img {
    height: 200px;
  }

  .subject-card__title {
    font-size: 19px;
  }

  .subject-card__body {
    padding: 20px;
  }

  .subject-card__stats {
    gap: 14px;
  }
}

@media (max-width: 575px) {
  .subject-card__img {
    height: 180px;
  }
}

.sub-title--lg {
  font-size: 30px;
}
@media (max-width: 575px) {
  .sub-title--lg {
    font-size: 24px;
  }
}
</style>

<style>
/* Non-scoped: Hide extra hero slides before Slick initializes to prevent vertical flash */
.hero-slider1:not(.slick-initialized) > .vs-hero-inner:not(:first-child) {
  display: none !important;
}
</style>
