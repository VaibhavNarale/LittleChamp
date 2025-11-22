<script setup>
import { onMounted, onBeforeUnmount, nextTick } from 'vue'
import { initTemplateScripts, cleanupTemplateScripts } from '@/utils/initScripts'

// Import new images (WebP optimized)
import heroImage1 from '@/assets/new-images/new-image1.webp'
import heroImage2 from '@/assets/new-images/new-image2.webp'
import heroImage3 from '@/assets/new-images/new-image3.webp'
import mathImage from '@/assets/new-images/vedic-math.webp'
import readingImage from '@/assets/new-images/gettyimages-123273724-640x640.webp'
import scienceImage from '@/assets/new-images/Kids_hands_creating_on_card_arches_with_an_array_of_craft_suppplies.webp'
import blog1 from '@/assets/new-images/young-indian-boy-watching-television.webp'
import blog2 from '@/assets/new-images/hw-to-play-hopscotch-with-a-preschooler.webp'
import blog3 from '@/assets/new-images/hopscotch.webp'
import blog4 from '@/assets/new-images/istockphoto-507276910-612x612.webp'
// Rocket image now imported in Preloader component
// import rocketImage from '@/assets/new-images/rocket-image.png'

// Admin Client URL for sign up/login links

onMounted(async () => {
  // Wait for DOM to be fully rendered
  await nextTick()

  // Initialize all template scripts
  setTimeout(() => {
    initTemplateScripts()
  }, 100)
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
    <div class="hero-slider1 vs-carousel" data-slide-show="1" data-md-slide-show="1" data-fade="true">
      <!-- Hero Slide 1: Main Value Proposition -->
      <div class="vs-hero-inner">
        <div class="vs-hero-bg" :data-bg-src="heroImage1"></div>
        <div class="container h-100">
          <div class="row align-items-center justify-content-end h-100">
            <div class="col-lg-5 col-md-7">
              <div class="modern-hero-content">
                <div class="hero-badge" data-ani="slideinup" data-ani-delay="0s">
                  <img class="badge-icon" src="/assets/img/icon/car.png" alt="icon">
                  <span>Learn • Play • Grow</span>
                </div>

                <h1 class="modern-hero-title" data-ani="slideinup" data-ani-delay="0.1s">
                  Make Learning
                  <span class="gradient-text d-block">Magical & Fun</span>
                  for Your Child!
                </h1>

                <p class="modern-hero-subtitle" data-ani="slideinup" data-ani-delay="0.2s">
                  Join 50M+ kids worldwide exploring 4000+ interactive educational games. Perfect for Pre-K to Grade 5
                  learners.
                </p>

                <div class="modern-features-list" data-ani="slideinup" data-ani-delay="0.3s">
                  <div class="feature-item">
                    <i class="fas fa-check-circle"></i>
                    <span>4000+ Interactive Games</span>
                  </div>
                  <div class="feature-item">
                    <i class="fas fa-check-circle"></i>
                    <span>Pre-K to Grade 5</span>
                  </div>
                  <div class="feature-item">
                    <i class="fas fa-check-circle"></i>
                    <span>Safe & Ad-Free</span>
                  </div>
                </div>

                <div class="modern-cta-group" data-ani="slideinup" data-ani-delay="0.4s">
                  <router-link to="/register" class="modern-btn btn-primary">
                    <i class="fas fa-rocket"></i>
                    <span>Start Free Trial</span>
                  </router-link>
                  <router-link to="/pricing" class="modern-btn btn-outline">
                    <span>View Pricing</span>
                    <i class="fas fa-arrow-right"></i>
                  </router-link>
                </div>

                <div class="trust-indicators" data-ani="slideinup" data-ani-delay="0.5s">
                  <div class="trust-item">
                    <i class="fas fa-shield-check"></i>
                    <span>Safe & Secure</span>
                  </div>
                  <div class="trust-item">
                    <i class="fas fa-credit-card"></i>
                    <span>No Credit Card</span>
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
        <!-- Multi-Layer Wave Bottom -->
        <div class="hero-wave-bottom">
          <!-- Layer 1: Light Blue/Turquoise Wave (Top) -->
          <svg class="wave-layer wave-layer-1" viewBox="0 0 1440 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,96 C240,140 480,160 720,120 C960,80 1200,100 1440,120 L1440,200 L0,200 Z" fill="#B8E6E1" opacity="0.6"/>
          </svg>
          <!-- Layer 2: Pink Wave (Middle) -->
          <svg class="wave-layer wave-layer-2" viewBox="0 0 1440 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,120 C320,160 640,140 960,110 C1200,90 1320,100 1440,130 L1440,200 L0,200 Z" fill="#FFB5C5" opacity="0.7"/>
          </svg>
          <!-- Layer 3: Coral Pink Wave -->
          <svg class="wave-layer wave-layer-3" viewBox="0 0 1440 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,140 C360,170 720,150 1080,135 C1260,125 1350,140 1440,150 L1440,200 L0,200 Z" fill="#FFA8B8"/>
          </svg>
          <!-- Layer 4: Cream/Light Yellow Wave (Bottom) -->
          <svg class="wave-layer wave-layer-4" viewBox="0 0 1440 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,160 C400,180 800,175 1200,165 C1320,160 1380,170 1440,175 L1440,200 L0,200 Z" fill="#FFF5E6"/>
          </svg>
        </div>
      </div>

      <!-- Hero Slide 2: Personalized Learning -->
      <div class="vs-hero-inner">
        <div class="vs-hero-bg" :data-bg-src="heroImage2"></div>
        <div class="container h-100">
          <div class="row align-items-center justify-content-end h-100">
            <div class="col-lg-5 col-md-7">
              <div class="modern-hero-content">
                <div class="hero-badge" data-ani="slideinup" data-ani-delay="0s">
                  <img class="badge-icon" src="/assets/img/icon/car.png" alt="icon">
                  <span>Adapt • Grow • Excel</span>
                </div>

                <h1 class="modern-hero-title" data-ani="slideinup" data-ani-delay="0.1s">
                  <span class="gradient-text d-block">Personalized Learning</span>
                  Paths for Every Child
                </h1>

                <p class="modern-hero-subtitle" data-ani="slideinup" data-ani-delay="0.2s">
                  Our adaptive platform automatically adjusts to your child's skill level, ensuring they're always
                  challenged but never frustrated.
                </p>

                <div class="modern-features-list" data-ani="slideinup" data-ani-delay="0.3s">
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

                <div class="modern-cta-group" data-ani="slideinup" data-ani-delay="0.4s">
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
        <!-- Multi-Layer Wave Bottom -->
        <div class="hero-wave-bottom">
          <!-- Layer 1: Light Blue/Turquoise Wave (Top) -->
          <svg class="wave-layer wave-layer-1" viewBox="0 0 1440 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,96 C240,140 480,160 720,120 C960,80 1200,100 1440,120 L1440,200 L0,200 Z" fill="#B8E6E1" opacity="0.6"/>
          </svg>
          <!-- Layer 2: Pink Wave (Middle) -->
          <svg class="wave-layer wave-layer-2" viewBox="0 0 1440 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,120 C320,160 640,140 960,110 C1200,90 1320,100 1440,130 L1440,200 L0,200 Z" fill="#FFB5C5" opacity="0.7"/>
          </svg>
          <!-- Layer 3: Coral Pink Wave -->
          <svg class="wave-layer wave-layer-3" viewBox="0 0 1440 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,140 C360,170 720,150 1080,135 C1260,125 1350,140 1440,150 L1440,200 L0,200 Z" fill="#FFA8B8"/>
          </svg>
          <!-- Layer 4: Cream/Light Yellow Wave (Bottom) -->
          <svg class="wave-layer wave-layer-4" viewBox="0 0 1440 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,160 C400,180 800,175 1200,165 C1320,160 1380,170 1440,175 L1440,200 L0,200 Z" fill="#FFF5E6"/>
          </svg>
        </div>
      </div>

      <!-- Hero Slide 3: Teachers -->
      <div class="vs-hero-inner">
        <div class="vs-hero-bg" :data-bg-src="heroImage3"></div>
        <div class="container h-100">
          <div class="row align-items-center justify-content-end h-100">
            <div class="col-lg-5 col-md-7">
              <div class="modern-hero-content">
                <div class="hero-badge badge-teacher" data-ani="slideinup" data-ani-delay="0s">
                  <i class="fas fa-graduation-cap"></i>
                  <span>For Educators</span>
                </div>

                <h1 class="modern-hero-title" data-ani="slideinup" data-ani-delay="0.1s">
                  <span class="gradient-text d-block">100% Free</span>
                  for Teachers Forever!
                </h1>

                <p class="modern-hero-subtitle" data-ani="slideinup" data-ani-delay="0.2s">
                  Join 100,000+ educators using Mind Growup Jr to engage students and track progress in their classrooms.
                </p>

                <div class="modern-features-list" data-ani="slideinup" data-ani-delay="0.3s">
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

                <div class="modern-cta-group" data-ani="slideinup" data-ani-delay="0.4s">
                  <router-link to="/register" class="modern-btn btn-primary">
                    <i class="fas fa-chalkboard-teacher"></i>
                    <span>Sign Up Free</span>
                  </router-link>
                  <router-link to="/for-teachers" class="modern-btn btn-outline">
                    <span>Learn More</span>
                    <i class="fas fa-arrow-right"></i>
                  </router-link>
                </div>

                <div class="teacher-badge" data-ani="slideinup" data-ani-delay="0.5s">
                  <i class="fas fa-infinity"></i>
                  <span>Forever Free • No Trials • No Credit Card</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Multi-Layer Wave Bottom -->
        <div class="hero-wave-bottom">
          <!-- Layer 1: Light Blue/Turquoise Wave (Top) -->
          <svg class="wave-layer wave-layer-1" viewBox="0 0 1440 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,96 C240,140 480,160 720,120 C960,80 1200,100 1440,120 L1440,200 L0,200 Z" fill="#B8E6E1" opacity="0.6"/>
          </svg>
          <!-- Layer 2: Pink Wave (Middle) -->
          <svg class="wave-layer wave-layer-2" viewBox="0 0 1440 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,120 C320,160 640,140 960,110 C1200,90 1320,100 1440,130 L1440,200 L0,200 Z" fill="#FFB5C5" opacity="0.7"/>
          </svg>
          <!-- Layer 3: Coral Pink Wave -->
          <svg class="wave-layer wave-layer-3" viewBox="0 0 1440 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,140 C360,170 720,150 1080,135 C1260,125 1350,140 1440,150 L1440,200 L0,200 Z" fill="#FFA8B8"/>
          </svg>
          <!-- Layer 4: Cream/Light Yellow Wave (Bottom) -->
          <svg class="wave-layer wave-layer-4" viewBox="0 0 1440 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,160 C400,180 800,175 1200,165 C1320,160 1380,170 1440,175 L1440,200 L0,200 Z" fill="#FFF5E6"/>
          </svg>
        </div>
      </div>

    </div>
  </section>
  <!--======== / Hero Section ========-->

  <!--======== Features Section ========-->
  <section class="service-section space">
    <div class="container">
      <div class="row text-center justify-content-center wow fadeInUp" data-wow-delay="0.1s">
        <div class="col-xl-8 col-lg-9">
          <div class="title-area">
            <span class="sub-title">Why Choose Mind Growup Jr</span>
            <h2 class="sec-title">Powerful Features That Make Learning <span class="gradient-text">Irresistible</span>
            </h2>
            <p class="mt-3 text-muted">Everything your child needs to excel in Math, Reading, and Science</p>
          </div>
        </div>
      </div>
      <div class="row gy-30 justify-content-center">
        <!-- Feature 1: Interactive Games -->
        <div class="col-lg-3 col-md-6 service-card wow fadeInUp" data-wow-delay="0.1s">
          <div class="service-card-inner">
            <div class="sr-icon">
              <i class="fas fa-gamepad fa-3x" style="color: #6C63FF;"></i>
            </div>
            <h2 class="sr-title h4">
              <router-link to="/features">4000+ Interactive Games</router-link>
            </h2>
            <p class="sr-text">Kids learn through play with curriculum-aligned games that adapt to their skill level</p>
          </div>
        </div>
        <!-- Feature 2: Personalized Learning -->
        <div class="col-lg-3 col-md-6 service-card wow fadeInUp" data-wow-delay="0.2s">
          <div class="service-card-inner">
            <div class="sr-icon">
              <i class="fas fa-chart-line fa-3x" style="color: #FF6584;"></i>
            </div>
            <h2 class="sr-title h4">
              <router-link to="/features">Personalized Learning</router-link>
            </h2>
            <p class="sr-text">Adaptive technology that adjusts difficulty and pace to match each child's needs</p>
          </div>
        </div>
        <!-- Feature 3: Progress Tracking -->
        <div class="col-lg-3 col-md-6 service-card wow fadeInUp" data-wow-delay="0.3s">
          <div class="service-card-inner">
            <div class="sr-icon">
              <i class="fas fa-chart-pie fa-3x" style="color: #4ECDC4;"></i>
            </div>
            <h2 class="sr-title h4">
              <router-link to="/features">Detailed Progress Reports</router-link>
            </h2>
            <p class="sr-text">Track your child's learning journey with detailed analytics and weekly reports</p>
          </div>
        </div>
        <!-- Feature 4: Free for Teachers -->
        <div class="col-lg-3 col-md-6 service-card wow fadeInUp" data-wow-delay="0.4s">
          <div class="service-card-inner">
            <div class="sr-icon">
              <i class="fas fa-chalkboard-teacher fa-3x" style="color: #00B894;"></i>
            </div>
            <h2 class="sr-title h4">
              <router-link to="/for-teachers">Free for Teachers</router-link>
            </h2>
            <p class="sr-text">Classroom management, assignments, and progress tracking - completely free forever</p>
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
    <div class="shape-mockup shapePulse z-index-negative d-none d-xl-block" data-top="27%" data-left="9%"><img
        src="/assets/img/icon/lolypop.png" alt="shapes"></div>
    <div class="shape-mockup shapePulse rotate z-index-negative" data-top="19%" data-right="21%"><img
        src="/assets/img/icon/star-sm.png" alt="shapes"></div>
    <div class="shape-mockup shapePulse rotate z-index-negative" data-bottom="20%" data-right="10%"><img
        src="/assets/img/icon/star.png" alt="shapes"></div>
  </section>
  <!--======== / Service Section ========-->

  <!--======== About Section ========-->
  <section class="about-section bg-smoke space">
    <div class="container">
      <div class="row flex-column-reverse flex-lg-row align-items-center gy-30">
        <div class="col-sm-12 col-md-12 col-xl-5 wow fadeInUp" data-wow-delay="0.1s">
          <div class="text-center text-lg-start">
            <span class="sub-title">Why Mind Growup Jr</span>
            <h2 class="sec-title big-title">Transforming Learning Into An <span class="gradient-text">Adventure</span>
            </h2>
            <p class="fs-md mb-30">At Mind Growup Jr, we believe every child deserves to discover the joy of learning.
              Our platform combines cutting-edge adaptive technology with engaging games to create personalized learning
              experiences for Math, Reading, and Science.</p>
            <p class="fs-md mb-30">Trusted by 50 million kids and 100,000+ teachers worldwide, we're on a mission to
              make quality education accessible, engaging, and effective for every child.</p>
            <router-link to="/about" class="vs-btn wave-btn style-1">
              Discover Our Story
              <i class="fas fa-arrow-right ms-2"></i>
            </router-link>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="shape-slider-area">
            <button data-slick-prev="#sliderOne" class="simple-arrow arrow-left"><i
                class="far fa-chevron-left"></i></button>
            <button data-slick-next="#sliderOne" class="simple-arrow arrow-right"><i
                class="far fa-chevron-right"></i></button>
            <div class="shape-slider vs-carousel" id="sliderOne" data-slide-show="1" data-md-slide-show="1">
              <div class="slide-item">
                <img class="line-1" data-ani="slideinup" data-ani-delay=".2s" src="/assets/img/shape/line-1.png"
                  alt="shape">
                <img class="line-2" data-ani="slideinup" data-ani-delay=".5s" src="/assets/img/shape/line-2.png"
                  alt="shape">
                <img src="/assets/img/shape/shape-slide-1.png" alt="shape">
              </div>
              <div class="slide-item">
                <img class="line-1" data-ani="slideinup" data-ani-delay=".2s" src="/assets/img/shape/line-1.png"
                  alt="shape">
                <img class="line-2" data-ani="slideinup" data-ani-delay=".5s" src="/assets/img/shape/line-2.png"
                  alt="shape">
                <img src="/assets/img/shape/shape-slide-2.png" alt="shape">
              </div>
              <div class="slide-item">
                <img class="line-1" data-ani="slideinup" data-ani-delay=".2s" src="/assets/img/shape/line-1.png"
                  alt="shape">
                <img class="line-2" data-ani="slideinup" data-ani-delay=".5s" src="/assets/img/shape/line-2.png"
                  alt="shape">
                <img src="/assets/img/shape/shape-slide-3.png" alt="shape" style="width: 90%">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="shape-mockup shapePulse d-none d-lg-block rotate" data-bottom="22%" data-right="5%"><img
        src="/assets/img/icon/star.png" alt="shapes"></div>
    <div class="shape-mockup shapePulse d-none d-hd-block" data-top="17%" data-left="6%"><img
        src="/assets/img/icon/cap-plane.png" alt="shapes"></div>
    <div class="shape-mockup rotate d-none d-sm-block z-index-2" data-bottom="-7%" data-left="6%"><img
        src="/assets/img/icon/busket-ball.png" alt="shapes"></div>
  </section>
  <!--======== / About Section ========-->

  <!--======== counter Section ========-->
  <div class="counter-section bg-smoke-blue space">
    <div class="container">
      <div class="row gy-20 justify-content-between">
        <!-- Single Item: Kids Learning -->
        <div class="col-lg-auto col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="counter-item text-center">
            <div class="connter_icon"><i class="fa-light fa-children"></i></div>
            <span class="counter-number">50</span><span class="h2">M+</span>
            <p class="counter-text h4">Kids Learning</p>
          </div>
        </div>
        <!-- Single Item: Games -->
        <div class="col-lg-auto col-sm-6 wow fadeInUp" data-wow-delay="0.2s">
          <div class="counter-item text-center">
            <div class="connter_icon"><i class="fa-light fa-gamepad"></i></div>
            <span class="counter-number">4000</span><span class="h2">+</span>
            <p class="counter-text h4">Interactive Games</p>
          </div>
        </div>
        <!-- Single Item: Teachers -->
        <div class="col-lg-auto col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
          <div class="counter-item text-center">
            <div class="connter_icon"><i class="fa-light fa-chalkboard-user"></i></div>
            <span class="counter-number">100</span><span class="h2">K+</span>
            <p class="counter-text h4">Teachers Trust Us</p>
          </div>
        </div>
        <!-- Single Item: Countries -->
        <div class="col-lg-auto col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
          <div class="counter-item text-center">
            <div class="connter_icon"><i class="fa-light fa-globe"></i></div>
            <span class="counter-number">150</span><span class="h2">+</span>
            <p class="counter-text h4">Countries Worldwide</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section-after style-2"><img src="/assets/img/shape/main-shape-after.png" alt="shape"></div>
  </div>
  <!--======== / counter Section ========-->

  <!--======== Subjects Section ========-->
  <section class="classes-section space">
    <div class="container">
      <div class="row text-center justify-content-center wow fadeInUp" data-wow-delay="0.1s">
        <div class="col-xl-6 col-lg-7 col-md-8 col-sm-9">
          <div class="title-area">
            <span class="sub-title">Learning Subjects</span>
            <h2 class="sec-title">Explore <span class="gradient-text">Subjects</span> Your Child Will Master</h2>
            <p class="mt-3">Curriculum-aligned content for Pre-K through Grade 5</p>
          </div>
        </div>
      </div>
      <div class="row vs-carousel" data-slide-show="3" data-arrows="true">
        <!-- Mathematics Subject -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="class-card">
            <div class="class-img">
              <router-link to="/subjects/math"><img :src="mathImage" alt="Mathematics"></router-link>
              <span class="class-fee" style="background: #6C5CE7;">1000+ Games</span>
            </div>
            <div class="class-content">
              <h2 class="class-title h4"><router-link to="/subjects/math">Mathematics</router-link></h2>
              <p class="class-text">Build number sense, master arithmetic, explore geometry, and solve real-world math
                problems.</p>
              <ul class="class-info">
                <li>
                  <p>Grades:</p>
                  <span>Pre-K to 5</span>
                </li>
                <li>
                  <p>Topics:</p>
                  <span>15+ Topics</span>
                </li>
                <li>
                  <p>Games:</p>
                  <span>1000+</span>
                </li>
              </ul>
              <router-link to="/subjects/math" class="vs-btn style-1">
                Explore Math
                <i class="fas fa-arrow-right ms-2"></i>
              </router-link>
            </div>
          </div>
        </div>
        <!-- Reading & ELA Subject -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
          <div class="class-card">
            <div class="class-img">
              <router-link to="/subjects/reading"><img :src="readingImage"
                  alt="Reading & ELA"></router-link>
              <span class="class-fee" style="background: #FD79A8;">1200+ Games</span>
            </div>
            <div class="class-content">
              <h2 class="class-title h4"><router-link to="/subjects/reading">Reading & ELA</router-link></h2>
              <p class="class-text">Develop phonics, vocabulary, reading comprehension, grammar, and writing skills
                through engaging activities.</p>
              <ul class="class-info">
                <li>
                  <p>Grades:</p>
                  <span>Pre-K to 5</span>
                </li>
                <li>
                  <p>Topics:</p>
                  <span>12+ Topics</span>
                </li>
                <li>
                  <p>Games:</p>
                  <span>1200+</span>
                </li>
              </ul>
              <router-link to="/subjects/reading" class="vs-btn style-1">
                Explore Reading
                <i class="fas fa-arrow-right ms-2"></i>
              </router-link>
            </div>
          </div>
        </div>
        <!-- Craft & Drawing Subject -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div class="class-card">
            <div class="class-img">
              <router-link to="/subjects/craft-drawing"><img :src="scienceImage" alt="Craft & Drawing"></router-link>
              <span class="class-fee" style="background: #00B894;">800+ Activities</span>
            </div>
            <div class="class-content">
              <h2 class="class-title h4"><router-link to="/subjects/craft-drawing">Craft & Drawing</router-link></h2>
              <p class="class-text">Unleash creativity through hands-on crafts, drawing, coloring, and artistic expression.</p>
              <ul class="class-info">
                <li>
                  <p>Grades:</p>
                  <span>K to 5</span>
                </li>
                <li>
                  <p>Topics:</p>
                  <span>10+ Topics</span>
                </li>
                <li>
                  <p>Activities:</p>
                  <span>800+</span>
                </li>
              </ul>
              <router-link to="/subjects/craft-drawing" class="vs-btn style-1">
                Explore Craft & Drawing
                <i class="fas fa-arrow-right ms-2"></i>
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
    <div class="shape-mockup shapePulse d-none d-xl-block" data-top="15%" data-left="7%"><img
        src="/assets/img/icon/dog.png" alt="shapes"></div>
    <div class="shape-mockup rotate d-none d-hd-block" data-bottom="17%" data-left="7%"><img
        src="/assets/img/icon/curve-line.png" alt="shapes"></div>
    <div class="shape-mockup rotate z-index-negative" data-top="32%" data-right="9%"><img
        src="/assets/img/icon/star-3.png" alt="shapes"></div>
    <div class="shape-mockup shapePulse d-none d-hd-block" data-bottom="16%" data-right="9%"><img
        src="/assets/img/icon/triangle.png" alt="shapes"></div>
  </section>
  <!--======== / Subjects Section ========-->

  <!--======== Process Section ========-->
  <section class="process-section bg-smoke-blue space-extra">
    <div class="container">
      <div class="row gx-150 gy-30 justify-content-center">
        <!-- Single Item -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="process-card">
            <span class="process-number">01</span>
            <img class="process-direction" src="/assets/img/icon/arrow-curve.png" alt="direction">
            <div class="process-head">
              <div class="process-icon">
                <img src="/assets/img/icon/process-1.png" alt="icon">
              </div>
              <h4 class="process-title">Expert Instructor</h4>
            </div>
            <p class="process-text">ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </p>
          </div>
        </div>
        <!-- Single Item -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="process-card">
            <span class="process-number">02</span>
            <img class="process-direction" src="/assets/img/icon/arrow-curve.png" alt="direction">
            <div class="process-head">
              <div class="process-icon">
                <img src="/assets/img/icon/process-2.png" alt="icon">
              </div>
              <h4 class="process-title">Known Everything</h4>
            </div>
            <p class="process-text">ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </p>
          </div>
        </div>
        <!-- Single Item -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="process-card">
            <span class="process-number">03</span>
            <div class="process-head">
              <div class="process-icon">
                <img src="/assets/img/icon/process-3.png" alt="icon">
              </div>
              <h4 class="process-title">Well Children</h4>
            </div>
            <p class="process-text">ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="shape-before"><img src="/assets/img/shape/before-shape-2.png" alt="shape"></div>
    <div class="shape-after"><img src="/assets/img/shape/after-shape-2.png" alt="shape"></div>
    <div class="shape-mockup z-index-3 d-none d-lg-block" data-top="-18%" data-right="0%"><img
        src="/assets/img/shape/cloud-1.png" alt="shapes"></div>
    <div class="shape-mockup z-index-3 d-none d-lg-block" data-bottom="-11%" data-left="0%"><img
        src="/assets/img/shape/cloud-2.png" alt="shapes"></div>

    <div class="shape-mockup shapePulse d-none d-hd-block" data-top="34%" data-left="6%"><img
        src="/assets/img/icon/butterfly-3.png" alt="shapes"></div>
    <div class="shape-mockup shapePulse d-none d-hd-block" data-top="50%" data-right="6%"><img
        src="/assets/img/icon/rocket.png" alt="shapes"></div>
  </section>
  <!--======== / Process Section ========-->

  <!--======== Appointment Section ========-->
  <section class="appointment-section space-bottom space-top-shape-plus">
    <div class="container">
      <div class="row gx-60 gy-30 flex-column-reverse flex-lg-row align-items-center">
        <div class="col-lg-7 wow fadeInLeft" data-wow-delay="0.1s">
          <form action="https://html.vecurosoft.com/knirpse/demo/mail.php" method="POST"
            class="appointment-form ajax-contact">
            <div class="row gx-20">
              <div class="form-group col-sm-6">
                <input type="text" class="form-control" name="parent-name" id="gurdian-name" placeholder="Gurdian Name">
              </div>
              <div class="form-group col-sm-6">
                <input type="number" class="form-control" name="number" id="number" placeholder="Phone No">
              </div>
              <div class="form-group col-12">
                <input type="email" class="form-control" name="email" id="email" placeholder="Your Email">
              </div>
              <div class="form-group col-sm-6">
                <input type="text" class="form-control" name="child-name" id="child-name" placeholder="Child Name">
              </div>
              <div class="form-group col-sm-6">
                <input type="number" class="form-control" name="child-age" id="child-age" placeholder="Age of Child">
              </div>
              <div class="form-group col-12">
                <textarea class="form-control" name="message" id="message" placeholder="Message"></textarea>
              </div>
              <div class="col-12">
                <button type="submit" class="vs-btn wave-btn">Submit</button>
              </div>
            </div>
            <p class="form-messages mb-0 mt-3"></p>
          </form>
        </div>
        <div class="col-lg-5 wow fadeInRight" data-wow-delay="0.1s">
          <div class="text-center text-lg-start">
            <span class="sub-title">Make Appointment</span>
            <h2 class="sec-title big-title">Join Our Fun with Cutie Kids</h2>
            <p class="fs-md mb-30">Formulate innovative web-readiness and installed base ideas. Distinctively integrate
              high-payoff paradigms without next generation systems disseminate holistic e-services through customer
              directed expertise.</p>
            <router-link to="/about" class="vs-btn wave-btn style-1">Learn More</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="shape-mockup z-index-3 d-none d-hd-block" data-bottom="-8%" data-right="0%"><img
        src="/assets/img/shape/rainbow-star.png" alt="shapes"></div>

    <div class="shape-mockup moving d-none d-hd-block" data-top="22%" data-left="7%"><img
        src="/assets/img/icon/note.png" alt="shapes"></div>
    <div class="shape-mockup shapePulse d-none d-hd-block" data-bottom="20%" data-left="7%"><img
        src="/assets/img/icon/bird.png" alt="shapes"></div>
  </section>
  <!--======== / Appointment Section ========-->

  <!--======== CTA Section ========-->
  <section class="cta-section bg-smoke-blue space">
    <div class="container text-center">
      <div class="title-area mb-35 wow fadeInUp" data-wow-delay="0.1s">
        <span class="sub-title">Join Our New Session</span>
        <h2 class="sec-title">Call To Enroll Your Child <br> <a class="text-inherit" href="tel:+25621582222">256 2158
            2222</a></h2>
      </div>
      <router-link to="/about" class="vs-btn wave-btn">Learn More</router-link>
    </div>
    <div class="section-after style-2"><img src="/assets/img/shape/main-shape-after.png" alt="shape"></div>
    <div class="shape-mockup d-none d-hd-block" data-top="0%" data-left="0%"><img
        src="/assets/img/icon/rainbow-cloud.png" alt="shapes"></div>
    <div class="shape-mockup shapePulse d-none d-hd-block" data-top="40%" data-right="14%"><img
        src="/assets/img/icon/butterfly-4.png" alt="shapes"></div>
  </section>
  <!--======== / CTA Section ========-->

  <!--======== Blog Section ========-->
  <section class="blog-section space-top space-extra-bottom">
    <div class="container">
      <div class="row text-center justify-content-center wow fadeInUp" data-wow-delay="0.1s">
        <div class="col-xl-6 col-lg-7 col-md-8 col-sm-9">
          <div class="title-area">
            <span class="sub-title">Latest News Posts</span>
            <h2 class="sec-title">Get Know Our Weekly Update News</h2>
          </div>
        </div>
      </div>
      <div class="row vs-carousel" data-slide-show="3" data-arrows="true">
        <!-- Single blog -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="vs-blog blog-card">
            <div class="blog-img">
              <router-link to="/blog-details">
                <img :src="blog1" alt="blog">
              </router-link>
            </div>
            <div class="blog-content">
              <div class="blog-meta">
                <router-link to="/blog-details"><i class="fal fa-calendar-alt"></i>10 October, 2024</router-link>
                <router-link to="/blog-details"><i class="fal fa-comments"></i>02 Comments</router-link>
              </div>
              <h4 class="blog-title"><router-link to="/blog-details">Education Always Best For Parent
                  Develope</router-link></h4>
              <router-link to="/blog-details" class="link-btn">Read More <i
                  class="far fa-angle-right"></i></router-link>
            </div>
          </div>
        </div>
        <!-- Single blog -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="vs-blog blog-card">
            <div class="blog-img">
              <router-link to="/blog-details">
                <img :src="blog2" alt="blog">
              </router-link>
            </div>
            <div class="blog-content">
              <div class="blog-meta">
                <router-link to="/blog-details"><i class="fal fa-calendar-alt"></i>12 November, 2024</router-link>
                <router-link to="/blog-details"><i class="fal fa-comments"></i>05 Comments</router-link>
              </div>
              <h4 class="blog-title"><router-link to="/blog-details">A Happy Learning Process for Your
                  Child</router-link></h4>
              <router-link to="/blog-details" class="link-btn">Read More <i
                  class="far fa-angle-right"></i></router-link>
            </div>
          </div>
        </div>
        <!-- Single blog -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="vs-blog blog-card">
            <div class="blog-img">
              <router-link to="/blog-details">
                <img :src="blog3" alt="blog">
              </router-link>
            </div>
            <div class="blog-content">
              <div class="blog-meta">
                <router-link to="/blog-details"><i class="fal fa-calendar-alt"></i>01 December, 2024</router-link>
                <router-link to="/blog-details"><i class="fal fa-comments"></i>10 Comments</router-link>
              </div>
              <h4 class="blog-title"><router-link to="/blog-details">Best Drawing Practice in Child Age</router-link>
              </h4>
              <router-link to="/blog-details" class="link-btn">Read More <i
                  class="far fa-angle-right"></i></router-link>
            </div>
          </div>
        </div>
        <!-- Single blog -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="vs-blog blog-card">
            <div class="blog-img">
              <router-link to="/blog-details">
                <img :src="blog4" alt="blog">
              </router-link>
            </div>
            <div class="blog-content">
              <div class="blog-meta">
                <router-link to="/blog-details"><i class="fal fa-calendar-alt"></i>03 October, 2024</router-link>
                <router-link to="/blog-details"><i class="fal fa-comments"></i>01 Comment</router-link>
              </div>
              <h4 class="blog-title"><router-link to="/blog-details">We Provide Best Education For Your
                  Child</router-link></h4>
              <router-link to="/blog-details" class="link-btn">Read More <i
                  class="far fa-angle-right"></i></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="shape-mockup shapePulse d-none d-md-block" data-top="22%" data-left="8%"><img
        src="/assets/img/icon/apple.png" alt="shapes"></div>
    <div class="shape-mockup moving d-none d-hd-block" data-bottom="22%" data-left="4%"><img
        src="/assets/img/icon/ruler.png" alt="shapes"></div>
    <div class="shape-mockup movingX d-none d-xl-block" data-top="17%" data-right="6%"><img
        src="/assets/img/icon/cloud-3.png" alt="shapes"></div>
    <div class="shape-mockup rotate d-none d-hd-block" data-bottom="24%" data-right="6%"><img
        src="/assets/img/icon/math-2.png" alt="shapes"></div>
  </section>
  <!--======== / Blog Section ========-->
</template>

<style scoped>
/* Hero Section Wrapper */
.vs-hero-wrapper {
  position: relative;
  overflow: visible;
}

.class-card .class-img img {
  height: 388px;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

/* Bottom Wave Curve - Multi-Layer SVG */
.hero-wave-bottom {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 150px;
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

/* Layer specific positioning for depth effect */
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

/* Hero Background - No Overlay */
.vs-hero-inner {
  position: relative;
}

.vs-hero-inner .container {
  position: relative;
  z-index: 2;
}

/* Hero Section Height Control */
.vs-hero-wrapper {
  min-height: auto !important;
  padding-bottom: 150px;
  /* Space for bottom wave curve */
  margin-bottom: -150px;
  /* Pull next section up */
}

.hero-slider1 {
  position: relative;
  z-index: 2;
}

.vs-hero-inner {
  min-height: 80vh !important;
  height: 80vh;
  display: flex;
  align-items: center;
  position: relative;
}

/* Modern Hero Content Styling */
.modern-hero-content {
  position: relative;
  z-index: 10;
  padding: 20px 0;
}

/* Hero Badge */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 18px;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  font-weight: 600;
  font-size: 13px;
  color: #FFFFFF;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  backdrop-filter: blur(10px);
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
  background: linear-gradient(135deg, #00D2A0, #00B894);
  color: white;
}

/* Modern Hero Title */
.modern-hero-title {
  font-size: 48px;
  font-weight: 900;
  line-height: 1.15;
  color: #FFFFFF;
  margin-bottom: 20px;
  text-shadow: 2px 4px 12px rgba(0, 0, 0, 0.3);
}

.modern-hero-title .gradient-text {
  background: linear-gradient(135deg, #FFE5B4 0%, #FFDAB9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
  margin: 5px 0;
  text-shadow: none;
}

/* Modern Hero Subtitle */
.modern-hero-subtitle {
  font-size: 17px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 25px;
  font-weight: 400;
  max-width: 540px;
  text-shadow: 1px 2px 8px rgba(0, 0, 0, 0.2);
}

/* Modern Features List */
.modern-features-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 28px;
}

.modern-features-list .feature-item {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 25px;
  font-weight: 600;
  font-size: 13px;
  color: #FFFFFF;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
}

.modern-features-list .feature-item i {
  color: #FFE5B4;
  font-size: 15px;
}

/* Modern CTA Group */
.modern-cta-group {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 25px;
}

.modern-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 15px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.modern-btn i {
  font-size: 17px;
  transition: transform 0.3s ease;
}

.modern-btn.btn-primary {
  background: linear-gradient(135deg, #6C63FF 0%, #A29BFE 100%);
  color: white;
  box-shadow: 0 8px 25px rgba(108, 99, 255, 0.3);
}

.modern-btn.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(108, 99, 255, 0.4);
}

.modern-btn.btn-primary:hover i {
  transform: scale(1.1);
}

.modern-btn.btn-outline {
  background: rgba(255, 255, 255, 0.15);
  color: #FFFFFF;
  border: 2px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
}

.modern-btn.btn-outline:hover {
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.6);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.modern-btn.btn-outline:hover i {
  transform: translateX(4px);
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
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
}

.trust-item i {
  font-size: 18px;
  color: #FFE5B4;
}

/* Teacher Badge */
.teacher-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  font-weight: 700;
  font-size: 14px;
  color: #FFFFFF;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}

.teacher-badge i {
  font-size: 20px;
  color: #FFE5B4;
}

/* Responsive Design */
@media (max-width: 1025px) {
  .about-section .shape-slider-area .slick-slider {
    padding: 0px 15px;
  }

  .vs-hero-wrapper {
    padding-bottom: 120px;
    margin-bottom: -120px;
    margin-top: -80px;
    padding-top: 80px;
  }

  .hero-wave-bottom {
    height: 120px;
  }

  .vs-hero-inner {
    min-height: 70vh !important;
    height: 70vh;
  }

  .modern-hero-title {
    font-size: 38px;
  }

  .modern-hero-subtitle {
    font-size: 16px;
  }

  .modern-btn {
    padding: 13px 24px;
    font-size: 14px;
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
    min-height: 65vh !important;
    height: auto;
    padding: 30px 0;
  }

  .modern-hero-content {
    padding: 15px 0;
  }

  .modern-hero-title {
    font-size: 32px;
    margin-bottom: 16px;
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
  .class-card .class-img img{
    height: 342px;
    object-fit: cover;
    object-position: center;
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
  filter: drop-shadow(0 15px 40px rgba(108, 99, 255, 0.5));
  transform-origin: center center;
}

/* Simple Wave Pattern - Ultra Smooth with No Stuttering */
@keyframes rocketWavePath {
  0% { transform: translate(-50vw, 0vh) rotate(0deg) scale(0.6); opacity: 0; }
  1% { transform: translate(-48vw, 0vh) rotate(-1deg) scale(0.62); opacity: 0.2; }
  2% { transform: translate(-46vw, 0vh) rotate(-2deg) scale(0.64); opacity: 0.4; }
  3% { transform: translate(-44vw, 0vh) rotate(-3deg) scale(0.66); opacity: 0.6; }
  4% { transform: translate(-42vw, 0vh) rotate(-4deg) scale(0.68); opacity: 0.8; }
  5% { transform: translate(-40vw, 0vh) rotate(-5deg) scale(0.7); opacity: 1; }
  6% { transform: translate(-38vw, -1.6vh) rotate(-9deg) scale(0.72); }
  7% { transform: translate(-36vw, -3.2vh) rotate(-13deg) scale(0.74); }
  8% { transform: translate(-34vw, -4.8vh) rotate(-17deg) scale(0.76); }
  9% { transform: translate(-32vw, -6.4vh) rotate(-21deg) scale(0.78); }
  10% { transform: translate(-30vw, -8vh) rotate(-25deg) scale(0.8); }
  11% { transform: translate(-28.33vw, -8.67vh) rotate(-23.33deg) scale(0.808); }
  12% { transform: translate(-26.67vw, -9.33vh) rotate(-21.67deg) scale(0.817); }
  13% { transform: translate(-25vw, -10vh) rotate(-20deg) scale(0.825); }
  14% { transform: translate(-23.25vw, -10.5vh) rotate(-17.5deg) scale(0.836); }
  15% { transform: translate(-21.5vw, -11vh) rotate(-15deg) scale(0.848); }
  16% { transform: translate(-19.75vw, -11.25vh) rotate(-12.5deg) scale(0.859); }
  17% { transform: translate(-18vw, -11.5vh) rotate(-10deg) scale(0.87); }
  18% { transform: translate(-15.33vw, -11.67vh) rotate(-6.67deg) scale(0.88); }
  19% { transform: translate(-12.67vw, -11.83vh) rotate(-3.33deg) scale(0.89); }
  20% { transform: translate(-10vw, -12vh) rotate(0deg) scale(0.9); }
  21% { transform: translate(-7.67vw, -11.33vh) rotate(3.33deg) scale(0.908); }
  22% { transform: translate(-5.33vw, -10.67vh) rotate(6.67deg) scale(0.917); }
  23% { transform: translate(-3vw, -10vh) rotate(10deg) scale(0.925); }
  24% { transform: translate(-1.25vw, -9vh) rotate(13.33deg) scale(0.936); }
  25% { transform: translate(0.5vw, -8vh) rotate(16.67deg) scale(0.948); }
  26% { transform: translate(2.25vw, -7.5vh) rotate(18.33deg) scale(0.959); }
  27% { transform: translate(3vw, -7vh) rotate(20deg) scale(0.97); }
  28% { transform: translate(5.33vw, -4.67vh) rotate(21.67deg) scale(0.98); }
  29% { transform: translate(7.67vw, -2.33vh) rotate(23.33deg) scale(0.99); }
  30% { transform: translate(10vw, 0vh) rotate(25deg) scale(1); }
  31% { transform: translate(12vw, 1.6vh) rotate(25deg) scale(1.006); }
  32% { transform: translate(14vw, 3.2vh) rotate(25deg) scale(1.012); }
  33% { transform: translate(16vw, 4.8vh) rotate(25deg) scale(1.018); }
  34% { transform: translate(18vw, 6.4vh) rotate(25deg) scale(1.024); }
  35% { transform: translate(20vw, 8vh) rotate(25deg) scale(1.03); }
  36% { transform: translate(21.67vw, 8.67vh) rotate(23.33deg) scale(1.035); }
  37% { transform: translate(23.33vw, 9.33vh) rotate(21.67deg) scale(1.04); }
  38% { transform: translate(25vw, 10vh) rotate(20deg) scale(1.045); }
  39% { transform: translate(27vw, 10.5vh) rotate(15deg) scale(1.052); }
  40% { transform: translate(29vw, 11vh) rotate(10deg) scale(1.058); }
  41% { transform: translate(31vw, 11.25vh) rotate(7.5deg) scale(1.064); }
  42% { transform: translate(33vw, 11.5vh) rotate(5deg) scale(1.07); }
  43% { transform: translate(35.67vw, 10.5vh) rotate(1.67deg) scale(1.077); }
  44% { transform: translate(37.83vw, 9.25vh) rotate(-1.67deg) scale(1.083); }
  45% { transform: translate(40vw, 8vh) rotate(-5deg) scale(1.09); }
  46% { transform: translate(42vw, 6.5vh) rotate(-8deg) scale(1.095); }
  47% { transform: translate(44vw, 5vh) rotate(-12deg) scale(1.1); }
  48% { transform: translate(46vw, 3.5vh) rotate(-16deg) scale(1.105); }
  49% { transform: translate(48vw, 2vh) rotate(-20deg) scale(1.11); }
  50% { transform: translate(50vw, 0vh) rotate(-25deg) scale(1.12); }
  51% { transform: translate(52vw, -1.5vh) rotate(-26deg) scale(1.125); }
  52% { transform: translate(54vw, -3vh) rotate(-26deg) scale(1.13); }
  53% { transform: translate(56vw, -4.5vh) rotate(-26deg) scale(1.135); }
  54% { transform: translate(58vw, -6vh) rotate(-26deg) scale(1.14); }
  55% { transform: translate(60vw, -8vh) rotate(-25deg) scale(1.15); }
  56% { transform: translate(61.67vw, -8.67vh) rotate(-23.33deg) scale(1.155); }
  57% { transform: translate(63.33vw, -9.33vh) rotate(-21.67deg) scale(1.16); }
  58% { transform: translate(65vw, -10vh) rotate(-20deg) scale(1.165); }
  59% { transform: translate(67vw, -10.5vh) rotate(-15deg) scale(1.171); }
  60% { transform: translate(69vw, -11vh) rotate(-12.5deg) scale(1.177); }
  61% { transform: translate(71vw, -11.25vh) rotate(-8.75deg) scale(1.183); }
  62% { transform: translate(73vw, -11.5vh) rotate(-5deg) scale(1.19); }
  63% { transform: translate(75.33vw, -11vh) rotate(-1.67deg) scale(1.197); }
  64% { transform: translate(77.67vw, -10.5vh) rotate(1.67deg) scale(1.203); }
  65% { transform: translate(80vw, -10vh) rotate(5deg) scale(1.21); }
  66% { transform: translate(81.67vw, -9vh) rotate(8.33deg) scale(1.215); }
  67% { transform: translate(83.33vw, -8vh) rotate(11.67deg) scale(1.22); }
  68% { transform: translate(85vw, -7vh) rotate(15deg) scale(1.225); }
  69% { transform: translate(87.5vw, -6vh) rotate(17.5deg) scale(1.233); }
  70% { transform: translate(90vw, -5vh) rotate(20deg) scale(1.24); }
  71% { transform: translate(92vw, -4vh) rotate(19.6deg) scale(1.246); }
  72% { transform: translate(94vw, -3vh) rotate(19.2deg) scale(1.252); }
  73% { transform: translate(96vw, -2vh) rotate(18.8deg) scale(1.258); }
  74% { transform: translate(98vw, -1vh) rotate(18.4deg) scale(1.264); }
  75% { transform: translate(100vw, 0vh) rotate(18deg) scale(1.27); }
  76% { transform: translate(102vw, 0.4vh) rotate(16deg) scale(1.276); }
  77% { transform: translate(104vw, 0.8vh) rotate(14deg) scale(1.282); }
  78% { transform: translate(106vw, 1.2vh) rotate(12deg) scale(1.288); }
  79% { transform: translate(108vw, 1.6vh) rotate(10deg) scale(1.294); }
  80% { transform: translate(110vw, 2vh) rotate(8deg) scale(1.3); opacity: 1; }
  81% { transform: translate(112vw, 2.2vh) rotate(7.2deg) scale(1.306); opacity: 0.98; }
  82% { transform: translate(114vw, 2.4vh) rotate(6.4deg) scale(1.312); opacity: 0.96; }
  83% { transform: translate(116vw, 2.6vh) rotate(6deg) scale(1.318); opacity: 0.94; }
  84% { transform: translate(118vw, 2.8vh) rotate(5.4deg) scale(1.324); opacity: 0.92; }
  85% { transform: translate(120vw, 3vh) rotate(5deg) scale(1.33); opacity: 0.9; }
  86% { transform: translate(122vw, 3.2vh) rotate(4.4deg) scale(1.336); opacity: 0.86; }
  87% { transform: translate(124vw, 3.4vh) rotate(3.8deg) scale(1.342); opacity: 0.82; }
  88% { transform: translate(126vw, 3.6vh) rotate(3.4deg) scale(1.348); opacity: 0.78; }
  89% { transform: translate(128vw, 3.8vh) rotate(3.2deg) scale(1.354); opacity: 0.74; }
  90% { transform: translate(130vw, 4vh) rotate(3deg) scale(1.36); opacity: 0.7; }
  91% { transform: translate(132vw, 4.2vh) rotate(2.6deg) scale(1.366); opacity: 0.64; }
  92% { transform: translate(134vw, 4.4vh) rotate(2.4deg) scale(1.372); opacity: 0.58; }
  93% { transform: translate(136vw, 4.6vh) rotate(2.2deg) scale(1.378); opacity: 0.52; }
  94% { transform: translate(138vw, 4.8vh) rotate(2.1deg) scale(1.384); opacity: 0.46; }
  95% { transform: translate(140vw, 5vh) rotate(2deg) scale(1.39); opacity: 0.4; }
  96% { transform: translate(142vw, 5vh) rotate(1.6deg) scale(1.396); opacity: 0.32; }
  97% { transform: translate(144vw, 5vh) rotate(1.2deg) scale(1.402); opacity: 0.24; }
  98% { transform: translate(146vw, 5vh) rotate(0.8deg) scale(1.408); opacity: 0.16; }
  99% { transform: translate(148vw, 5vh) rotate(0.4deg) scale(1.414); opacity: 0.08; }
  100% { transform: translate(150vw, 5vh) rotate(0deg) scale(1.42); opacity: 0; }
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
  background: radial-gradient(ellipse at center,
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
  background: radial-gradient(ellipse at center,
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
    0% { transform: translate(-50vw, 0vh) rotate(0deg) scale(0.5); opacity: 0; }
    1% { transform: translate(-48vw, 0vh) rotate(-1deg) scale(0.52); opacity: 0.2; }
    2% { transform: translate(-46vw, 0vh) rotate(-2deg) scale(0.54); opacity: 0.4; }
    3% { transform: translate(-44vw, 0vh) rotate(-3deg) scale(0.56); opacity: 0.6; }
    4% { transform: translate(-42vw, 0vh) rotate(-4deg) scale(0.58); opacity: 0.8; }
    5% { transform: translate(-40vw, 0vh) rotate(-5deg) scale(0.6); opacity: 1; }
    6% { transform: translate(-38vw, -2vh) rotate(-10.6deg) scale(0.62); }
    7% { transform: translate(-36vw, -4vh) rotate(-16.2deg) scale(0.64); }
    8% { transform: translate(-34vw, -6vh) rotate(-21.8deg) scale(0.66); }
    9% { transform: translate(-32vw, -8vh) rotate(-24.9deg) scale(0.68); }
    10% { transform: translate(-30vw, -10vh) rotate(-28deg) scale(0.7); }
    11% { transform: translate(-28.33vw, -10.67vh) rotate(-26.67deg) scale(0.72); }
    12% { transform: translate(-26.67vw, -11.33vh) rotate(-24.33deg) scale(0.723); }
    13% { transform: translate(-25vw, -12vh) rotate(-22deg) scale(0.73); }
    14% { transform: translate(-23vw, -12.5vh) rotate(-19.5deg) scale(0.74); }
    15% { transform: translate(-21vw, -13vh) rotate(-17deg) scale(0.75); }
    16% { transform: translate(-19.5vw, -13.5vh) rotate(-14.5deg) scale(0.76); }
    17% { transform: translate(-18vw, -14vh) rotate(-12deg) scale(0.77); }
    18% { transform: translate(-15.33vw, -14.33vh) rotate(-8deg) scale(0.783); }
    19% { transform: translate(-12.67vw, -14.67vh) rotate(-4deg) scale(0.79); }
    20% { transform: translate(-10vw, -15vh) rotate(0deg) scale(0.8); }
    21% { transform: translate(-7.67vw, -14vh) rotate(4deg) scale(0.808); }
    22% { transform: translate(-5.33vw, -13vh) rotate(8deg) scale(0.817); }
    23% { transform: translate(-3vw, -12vh) rotate(12deg) scale(0.825); }
    24% { transform: translate(-1vw, -11vh) rotate(15.33deg) scale(0.84); }
    25% { transform: translate(1vw, -10vh) rotate(18.67deg) scale(0.855); }
    26% { transform: translate(2vw, -9.5vh) rotate(20.33deg) scale(0.863); }
    27% { transform: translate(3vw, -9vh) rotate(22deg) scale(0.87); }
    28% { transform: translate(5.33vw, -6vh) rotate(24deg) scale(0.88); }
    29% { transform: translate(7.67vw, -3vh) rotate(26deg) scale(0.89); }
    30% { transform: translate(10vw, 0vh) rotate(28deg) scale(0.9); }
    31% { transform: translate(12vw, 2vh) rotate(28deg) scale(0.91); }
    32% { transform: translate(14vw, 4vh) rotate(28deg) scale(0.92); }
    33% { transform: translate(16vw, 6vh) rotate(28deg) scale(0.93); }
    34% { transform: translate(18vw, 8vh) rotate(28deg) scale(0.94); }
    35% { transform: translate(20vw, 10vh) rotate(28deg) scale(0.95); }
    36% { transform: translate(21.67vw, 10.67vh) rotate(26.67deg) scale(0.958); }
    37% { transform: translate(23.33vw, 11.33vh) rotate(24.33deg) scale(0.967); }
    38% { transform: translate(25vw, 12vh) rotate(22deg) scale(0.975); }
    39% { transform: translate(27vw, 12.5vh) rotate(18deg) scale(0.985); }
    40% { transform: translate(29vw, 13vh) rotate(14deg) scale(0.995); }
    41% { transform: translate(31vw, 13.5vh) rotate(11deg) scale(1.005); }
    42% { transform: translate(33vw, 14vh) rotate(8deg) scale(1.015); }
    43% { transform: translate(36.33vw, 12.67vh) rotate(3deg) scale(1.022); }
    44% { transform: translate(38.17vw, 11.33vh) rotate(-1deg) scale(1.026); }
    45% { transform: translate(40vw, 10vh) rotate(-5deg) scale(1.03); }
    46% { transform: translate(42vw, 8.5vh) rotate(-8deg) scale(1.0375); }
    47% { transform: translate(44vw, 7vh) rotate(-12deg) scale(1.045); }
    48% { transform: translate(46vw, 5.5vh) rotate(-16deg) scale(1.0525); }
    49% { transform: translate(48vw, 3vh) rotate(-20deg) scale(1.06); }
    50% { transform: translate(50vw, 0vh) rotate(-28deg) scale(1.06); }
    51% { transform: translate(52vw, -2vh) rotate(-29deg) scale(1.065); }
    52% { transform: translate(54vw, -4vh) rotate(-29deg) scale(1.07); }
    53% { transform: translate(56vw, -6vh) rotate(-29deg) scale(1.075); }
    54% { transform: translate(58vw, -8vh) rotate(-29deg) scale(1.08); }
    55% { transform: translate(60vw, -10vh) rotate(-28deg) scale(1.09); }
    56% { transform: translate(61.67vw, -10.67vh) rotate(-26.67deg) scale(1.095); }
    57% { transform: translate(63.33vw, -11.33vh) rotate(-24.33deg) scale(1.1); }
    58% { transform: translate(65vw, -12vh) rotate(-22deg) scale(1.105); }
    59% { transform: translate(67vw, -12.5vh) rotate(-18deg) scale(1.111); }
    60% { transform: translate(69vw, -13vh) rotate(-15deg) scale(1.117); }
    61% { transform: translate(71vw, -13.5vh) rotate(-11.5deg) scale(1.123); }
    62% { transform: translate(73vw, -14vh) rotate(-8deg) scale(1.13); }
    63% { transform: translate(75.33vw, -13.33vh) rotate(-2.67deg) scale(1.137); }
    64% { transform: translate(77.67vw, -12.67vh) rotate(2.67deg) scale(1.143); }
    65% { transform: translate(80vw, -12vh) rotate(8deg) scale(1.15); }
    66% { transform: translate(81.67vw, -10.67vh) rotate(11.33deg) scale(1.155); }
    67% { transform: translate(83.33vw, -9.33vh) rotate(14.67deg) scale(1.16); }
    68% { transform: translate(85vw, -8vh) rotate(18deg) scale(1.165); }
    69% { transform: translate(87.5vw, -7vh) rotate(20deg) scale(1.173); }
    70% { transform: translate(90vw, -6vh) rotate(22deg) scale(1.18); }
    71% { transform: translate(92vw, -4.8vh) rotate(21.6deg) scale(1.186); }
    72% { transform: translate(94vw, -3.6vh) rotate(21.2deg) scale(1.192); }
    73% { transform: translate(96vw, -2.4vh) rotate(20.8deg) scale(1.198); }
    74% { transform: translate(98vw, -1.2vh) rotate(20.4deg) scale(1.204); }
    75% { transform: translate(100vw, 0vh) rotate(20deg) scale(1.21); }
    76% { transform: translate(102vw, 0.4vh) rotate(17.6deg) scale(1.216); }
    77% { transform: translate(104vw, 0.8vh) rotate(15.2deg) scale(1.222); }
    78% { transform: translate(106vw, 1.2vh) rotate(12.8deg) scale(1.228); }
    79% { transform: translate(108vw, 1.6vh) rotate(10.4deg) scale(1.234); }
    80% { transform: translate(110vw, 2vh) rotate(8deg) scale(1.24); opacity: 1; }
    81% { transform: translate(112vw, 2.2vh) rotate(7.4deg) scale(1.246); opacity: 0.98; }
    82% { transform: translate(114vw, 2.4vh) rotate(6.6deg) scale(1.252); opacity: 0.96; }
    83% { transform: translate(116vw, 2.6vh) rotate(6deg) scale(1.258); opacity: 0.94; }
    84% { transform: translate(118vw, 2.8vh) rotate(5.4deg) scale(1.264); opacity: 0.92; }
    85% { transform: translate(120vw, 3vh) rotate(5deg) scale(1.27); opacity: 0.9; }
    86% { transform: translate(122vw, 3.2vh) rotate(4.4deg) scale(1.276); opacity: 0.86; }
    87% { transform: translate(124vw, 3.4vh) rotate(3.8deg) scale(1.282); opacity: 0.82; }
    88% { transform: translate(126vw, 3.6vh) rotate(3.4deg) scale(1.288); opacity: 0.78; }
    89% { transform: translate(128vw, 3.8vh) rotate(3.2deg) scale(1.294); opacity: 0.74; }
    90% { transform: translate(130vw, 4vh) rotate(3deg) scale(1.3); opacity: 0.7; }
    91% { transform: translate(132vw, 4.2vh) rotate(2.6deg) scale(1.306); opacity: 0.64; }
    92% { transform: translate(134vw, 4.4vh) rotate(2.4deg) scale(1.312); opacity: 0.58; }
    93% { transform: translate(136vw, 4.6vh) rotate(2.2deg) scale(1.318); opacity: 0.52; }
    94% { transform: translate(138vw, 4.8vh) rotate(2.1deg) scale(1.324); opacity: 0.46; }
    95% { transform: translate(140vw, 5vh) rotate(2deg) scale(1.33); opacity: 0.4; }
    96% { transform: translate(142vw, 5vh) rotate(1.6deg) scale(1.336); opacity: 0.32; }
    97% { transform: translate(144vw, 5vh) rotate(1.2deg) scale(1.342); opacity: 0.24; }
    98% { transform: translate(146vw, 5vh) rotate(0.8deg) scale(1.348); opacity: 0.16; }
    99% { transform: translate(148vw, 5vh) rotate(0.4deg) scale(1.354); opacity: 0.08; }
    100% { transform: translate(150vw, 5vh) rotate(0deg) scale(1.36); opacity: 0; }
  }
}

@media (max-width: 575px) {
  .rocket-animation-container {
    width: 128px;
    height: 128px;
  }

  @keyframes rocketWavePath {
    0% { transform: translate(-50vw, 0vh) rotate(0deg) scale(0.45); opacity: 0; }
    1% { transform: translate(-48vw, 0vh) rotate(-1deg) scale(0.47); opacity: 0.2; }
    2% { transform: translate(-46vw, 0vh) rotate(-2deg) scale(0.49); opacity: 0.4; }
    3% { transform: translate(-44vw, 0vh) rotate(-3deg) scale(0.51); opacity: 0.6; }
    4% { transform: translate(-42vw, 0vh) rotate(-4deg) scale(0.53); opacity: 0.8; }
    5% { transform: translate(-40vw, 0vh) rotate(-5deg) scale(0.55); opacity: 1; }
    6% { transform: translate(-38vw, -2.4vh) rotate(-11.6deg) scale(0.57); }
    7% { transform: translate(-36vw, -4.8vh) rotate(-18.2deg) scale(0.59); }
    8% { transform: translate(-34vw, -7.2vh) rotate(-24.8deg) scale(0.61); }
    9% { transform: translate(-32vw, -9.6vh) rotate(-31.4deg) scale(0.63); }
    10% { transform: translate(-30vw, -12vh) rotate(-38deg) scale(0.65); }
    11% { transform: translate(-28.33vw, -13vh) rotate(-36deg) scale(0.658); }
    12% { transform: translate(-26.67vw, -14vh) rotate(-33deg) scale(0.667); }
    13% { transform: translate(-25vw, -15vh) rotate(-30deg) scale(0.675); }
    14% { transform: translate(-23vw, -15.5vh) rotate(-27deg) scale(0.684); }
    15% { transform: translate(-21vw, -16vh) rotate(-24deg) scale(0.692); }
    16% { transform: translate(-19.5vw, -16.5vh) rotate(-21deg) scale(0.701); }
    17% { transform: translate(-18vw, -17vh) rotate(-18deg) scale(0.71); }
    18% { transform: translate(-15.33vw, -17.33vh) rotate(-12deg) scale(0.723); }
    19% { transform: translate(-12.67vw, -17.67vh) rotate(-6deg) scale(0.737); }
    20% { transform: translate(-10vw, -18vh) rotate(0deg) scale(0.75); }
    21% { transform: translate(-7.67vw, -17vh) rotate(5deg) scale(0.758); }
    22% { transform: translate(-5.33vw, -16vh) rotate(10deg) scale(0.767); }
    23% { transform: translate(-3vw, -15vh) rotate(15deg) scale(0.775); }
    24% { transform: translate(-0.75vw, -13vh) rotate(20deg) scale(0.786); }
    25% { transform: translate(1.5vw, -11vh) rotate(25deg) scale(0.798); }
    26% { transform: translate(2.75vw, -10vh) rotate(27.5deg) scale(0.804); }
    27% { transform: translate(4vw, -9vh) rotate(30deg) scale(0.81); }
    28% { transform: translate(6vw, -6vh) rotate(32.67deg) scale(0.823); }
    29% { transform: translate(8vw, -3vh) rotate(35.33deg) scale(0.837); }
    30% { transform: translate(10vw, 0vh) rotate(38deg) scale(0.85); }
    31% { transform: translate(12vw, 2.4vh) rotate(38deg) scale(0.86); }
    32% { transform: translate(14vw, 4.8vh) rotate(38deg) scale(0.87); }
    33% { transform: translate(16vw, 7.2vh) rotate(38deg) scale(0.88); }
    34% { transform: translate(18vw, 9.6vh) rotate(38deg) scale(0.89); }
    35% { transform: translate(20vw, 12vh) rotate(38deg) scale(0.9); }
    36% { transform: translate(21.67vw, 13vh) rotate(36deg) scale(0.908); }
    37% { transform: translate(23.33vw, 14vh) rotate(33deg) scale(0.917); }
    38% { transform: translate(25vw, 15vh) rotate(30deg) scale(0.925); }
    39% { transform: translate(27vw, 15.67vh) rotate(26deg) scale(0.936); }
    40% { transform: translate(29vw, 16.33vh) rotate(22deg) scale(0.948); }
    41% { transform: translate(30.5vw, 16.67vh) rotate(20deg) scale(0.954); }
    42% { transform: translate(32vw, 17vh) rotate(18deg) scale(0.96); }
    43% { transform: translate(35vw, 15.67vh) rotate(10deg) scale(0.973); }
    44% { transform: translate(37.5vw, 13.83vh) rotate(2.5deg) scale(0.987); }
    45% { transform: translate(40vw, 12vh) rotate(-5deg) scale(1); }
    46% { transform: translate(42vw, 10vh) rotate(-10deg) scale(1.0075); }
    47% { transform: translate(44vw, 8vh) rotate(-15deg) scale(1.015); }
    48% { transform: translate(46vw, 6vh) rotate(-20deg) scale(1.0225); }
    49% { transform: translate(48vw, 3vh) rotate(-28deg) scale(1.03); }
    50% { transform: translate(50vw, 0vh) rotate(-38deg) scale(1.03); }
    51% { transform: translate(52vw, -2.5vh) rotate(-39deg) scale(1.0375); }
    52% { transform: translate(54vw, -5vh) rotate(-39deg) scale(1.045); }
    53% { transform: translate(56vw, -7.5vh) rotate(-39deg) scale(1.0525); }
    54% { transform: translate(58vw, -10vh) rotate(-39deg) scale(1.06); }
    55% { transform: translate(60vw, -12vh) rotate(-38deg) scale(1.06); }
    56% { transform: translate(61.67vw, -13vh) rotate(-36deg) scale(1.065); }
    57% { transform: translate(63.33vw, -14vh) rotate(-33deg) scale(1.07); }
    58% { transform: translate(65vw, -15vh) rotate(-30deg) scale(1.075); }
    59% { transform: translate(67vw, -15.67vh) rotate(-26deg) scale(1.081); }
    60% { transform: translate(69vw, -16.33vh) rotate(-22deg) scale(1.086); }
    61% { transform: translate(70.5vw, -16.67vh) rotate(-20deg) scale(1.091); }
    62% { transform: translate(72vw, -17vh) rotate(-18deg) scale(1.095); }
    63% { transform: translate(74.67vw, -16.67vh) rotate(-11.33deg) scale(1.102); }
    64% { transform: translate(77.33vw, -15.83vh) rotate(-3.67deg) scale(1.111); }
    65% { transform: translate(80vw, -15vh) rotate(5deg) scale(1.12); }
    66% { transform: translate(81.67vw, -13.67vh) rotate(10deg) scale(1.125); }
    67% { transform: translate(83.33vw, -12.33vh) rotate(15deg) scale(1.13); }
    68% { transform: translate(85vw, -11vh) rotate(20deg) scale(1.135); }
    69% { transform: translate(87.5vw, -9.5vh) rotate(24deg) scale(1.143); }
    70% { transform: translate(90vw, -8vh) rotate(28deg) scale(1.15); }
    71% { transform: translate(92vw, -6.4vh) rotate(26deg) scale(1.156); }
    72% { transform: translate(94vw, -4.8vh) rotate(24deg) scale(1.162); }
    73% { transform: translate(96vw, -3.2vh) rotate(22deg) scale(1.168); }
    74% { transform: translate(98vw, -1.6vh) rotate(20deg) scale(1.174); }
    75% { transform: translate(100vw, 0vh) rotate(18deg) scale(1.18); }
    76% { transform: translate(102vw, 0.4vh) rotate(16.2deg) scale(1.186); }
    77% { transform: translate(104vw, 0.8vh) rotate(14.4deg) scale(1.192); }
    78% { transform: translate(106vw, 1.2vh) rotate(12.6deg) scale(1.198); }
    79% { transform: translate(108vw, 1.6vh) rotate(10.8deg) scale(1.204); }
    80% { transform: translate(110vw, 2vh) rotate(9deg) scale(1.21); opacity: 1; }
    81% { transform: translate(112vw, 2.2vh) rotate(8.2deg) scale(1.216); opacity: 0.98; }
    82% { transform: translate(114vw, 2.4vh) rotate(7.2deg) scale(1.222); opacity: 0.96; }
    83% { transform: translate(116vw, 2.6vh) rotate(6.4deg) scale(1.228); opacity: 0.94; }
    84% { transform: translate(118vw, 2.8vh) rotate(5.6deg) scale(1.234); opacity: 0.92; }
    85% { transform: translate(120vw, 3vh) rotate(5deg) scale(1.24); opacity: 0.9; }
    86% { transform: translate(122vw, 3.2vh) rotate(5deg) scale(1.246); opacity: 0.86; }
    87% { transform: translate(124vw, 3.4vh) rotate(5deg) scale(1.252); opacity: 0.82; }
    88% { transform: translate(126vw, 3.6vh) rotate(5deg) scale(1.258); opacity: 0.78; }
    89% { transform: translate(128vw, 3.8vh) rotate(5deg) scale(1.264); opacity: 0.74; }
    90% { transform: translate(130vw, 4vh) rotate(5deg) scale(1.27); opacity: 0.7; }
    91% { transform: translate(132vw, 4.2vh) rotate(4deg) scale(1.276); opacity: 0.64; }
    92% { transform: translate(134vw, 4.4vh) rotate(3.5deg) scale(1.282); opacity: 0.58; }
    93% { transform: translate(136vw, 4.6vh) rotate(3deg) scale(1.288); opacity: 0.52; }
    94% { transform: translate(138vw, 4.8vh) rotate(2.5deg) scale(1.294); opacity: 0.46; }
    95% { transform: translate(140vw, 5vh) rotate(2deg) scale(1.3); opacity: 0.4; }
    96% { transform: translate(142vw, 5vh) rotate(1.6deg) scale(1.306); opacity: 0.32; }
    97% { transform: translate(144vw, 5vh) rotate(1.2deg) scale(1.312); opacity: 0.24; }
    98% { transform: translate(146vw, 5vh) rotate(0.8deg) scale(1.318); opacity: 0.16; }
    99% { transform: translate(148vw, 5vh) rotate(0.4deg) scale(1.324); opacity: 0.08; }
    100% { transform: translate(150vw, 5vh) rotate(0deg) scale(1.33); opacity: 0; }
  }
}

/* Fix for second hero slide image zoom issue */
.vs-hero-inner:nth-child(2) .vs-hero-bg img {
  object-fit: contain !important;
  object-position: center center !important;
}
</style>
