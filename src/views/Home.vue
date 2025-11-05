<script setup>
import { onMounted, onBeforeUnmount, nextTick } from 'vue'
import { initTemplateScripts, cleanupTemplateScripts } from '@/utils/initScripts'

// Admin Client URL for sign up/login links
const adminClientUrl = import.meta.env.VITE_ADMIN_CLIENT_URL || 'http://localhost:5174'

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
  <!--======== Hero Section ========-->
  <section class="vs-hero-wrapper position-relative">
    <!-- Bottom Wave Curve SVG -->
    <div class="hero-wave-bottom">
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z" fill="#FFFFFF" />
      </svg>
    </div>

    <div class="hero-slider1 vs-carousel" data-slide-show="1" data-md-slide-show="1" data-fade="true">
      <!-- Hero Slide 1: Main Value Proposition -->
      <div class="vs-hero-inner">
        <div class="vs-hero-bg" data-bg-src="/assets/img/bg/hero1-1.jpg"></div>
        <div class="container h-100">
          <div class="row align-items-center h-100">
            <div class="col-lg-6 col-md-8">
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
        <!-- Wave Bottom -->
        <div class="hero-wave-bottom">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z" fill="#FFFFFF" />
          </svg>
        </div>
      </div>

      <!-- Hero Slide 2: Personalized Learning -->
      <div class="vs-hero-inner">
        <div class="vs-hero-bg" data-bg-src="/assets/img/bg/hero1-2.jpg"></div>
        <div class="container h-100">
          <div class="row align-items-center h-100">
            <div class="col-lg-6 col-md-8">
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
        <!-- Wave Bottom -->
        <div class="hero-wave-bottom">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z" fill="#FFFFFF" />
          </svg>
        </div>
      </div>

      <!-- Hero Slide 3: Teachers -->
      <div class="vs-hero-inner">
        <div class="vs-hero-bg" data-bg-src="/assets/img/bg/hero1-3.jpg"></div>
        <div class="container h-100">
          <div class="row align-items-center h-100">
            <div class="col-lg-6 col-md-8">
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
                  Join 100,000+ educators using Mind Jr Group to engage students and track progress in their classrooms.
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
        <!-- Wave Bottom -->
        <div class="hero-wave-bottom">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z" fill="#FFFFFF" />
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
            <span class="sub-title">Why Choose Mind Jr Group</span>
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
            <span class="sub-title">Why Mind Jr Group</span>
            <h2 class="sec-title big-title">Transforming Learning Into An <span class="gradient-text">Adventure</span>
            </h2>
            <p class="fs-md mb-30">At Mind Jr Group, we believe every child deserves to discover the joy of learning.
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
              <router-link to="/subjects/math"><img src="/assets/img/class/class-3.png" alt="Mathematics"></router-link>
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
              <router-link to="/subjects/reading"><img src="/assets/img/class/class-1.png"
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
        <!-- Science Subject -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div class="class-card">
            <div class="class-img">
              <router-link to="/subjects/science"><img src="/assets/img/class/class-2.png" alt="Science"></router-link>
              <span class="class-fee" style="background: #00B894;">800+ Games</span>
            </div>
            <div class="class-content">
              <h2 class="class-title h4"><router-link to="/subjects/science">Science</router-link></h2>
              <p class="class-text">Discover the wonders of nature, animals, plants, weather, space, and scientific
                inquiry.</p>
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
                  <p>Games:</p>
                  <span>800+</span>
                </li>
              </ul>
              <router-link to="/subjects/science" class="vs-btn style-1">
                Explore Science
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

  <!--======== Team Section ========-->
  <section class="team-section bg-smoke space-top space-extra-bottom">
    <div class="container">
      <div class="row text-center justify-content-center wow fadeInUp" data-wow-delay="0.1s">
        <div class="col-xl-6 col-lg-7 col-md-8 col-sm-9">
          <div class="title-area">
            <span class="sub-title">Our Expert Staff</span>
            <h2 class="sec-title">Most Dedicated Staff For Your Child</h2>
          </div>
        </div>
      </div>
      <div class="row  vs-carousel" data-slide-show="3" data-lg-slide-show="2" data-arrows="true">
        <!-- Single Team -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="team-card">
            <div class="team-img" data-mask-src="/assets/img/team/t-mask.png">
              <img src="/assets/img/team/t-1.jpg" alt="team">
              <div class="team-content">
                <p class="team-text">Assertively repurpose orthogonal architectures through just in time manufactured
                  products.</p>
                <div class="multi-social">
                  <a href="#"><i class="fab fa-facebook-f"></i></a>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                  <a href="#"><i class="fab fa-pinterest-p"></i></a>
                  <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
            <button class="icon-btn expand-btn"><i class="fas fa-share-alt"></i></button>
            <div class="team-info">
              <h4 class="team-title"><router-link to="/team-details">Bableo Dablo</router-link></h4>
              <span class="team-desig">Kids Specialist</span>
            </div>
          </div>
        </div>
        <!-- Single Team -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="team-card">
            <div class="team-img" data-mask-src="/assets/img/team/t-mask.png">
              <img src="/assets/img/team/t-2.jpg" alt="team">
              <div class="team-content">
                <p class="team-text">Assertively repurpose orthogonal architectures through just in time manufactured
                  products.</p>
                <div class="multi-social">
                  <a href="#"><i class="fab fa-facebook-f"></i></a>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                  <a href="#"><i class="fab fa-pinterest-p"></i></a>
                  <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
            <button class="icon-btn expand-btn"><i class="fas fa-share-alt"></i></button>
            <div class="team-info">
              <h4 class="team-title"><router-link to="/team-details">Rose Marry</router-link></h4>
              <span class="team-desig">Drawing Teacher</span>
            </div>
          </div>
        </div>
        <!-- Single Team -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="team-card">
            <div class="team-img" data-mask-src="/assets/img/team/t-mask.png">
              <img src="/assets/img/team/t-3.jpg" alt="team">
              <div class="team-content">
                <p class="team-text">Assertively repurpose orthogonal architectures through just in time manufactured
                  products.</p>
                <div class="multi-social">
                  <a href="#"><i class="fab fa-facebook-f"></i></a>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                  <a href="#"><i class="fab fa-pinterest-p"></i></a>
                  <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
            <button class="icon-btn expand-btn"><i class="fas fa-share-alt"></i></button>
            <div class="team-info">
              <h4 class="team-title"><router-link to="/team-details">Jabian Joe</router-link></h4>
              <span class="team-desig">Kids Teacher</span>
            </div>
          </div>
        </div>
        <!-- Single Team -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="team-card">
            <div class="team-img" data-mask-src="/assets/img/team/t-mask.png">
              <img src="/assets/img/team/t-4.jpg" alt="team">
              <div class="team-content">
                <p class="team-text">Assertively repurpose orthogonal architectures through just in time manufactured
                  products.</p>
                <div class="multi-social">
                  <a href="#"><i class="fab fa-facebook-f"></i></a>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                  <a href="#"><i class="fab fa-pinterest-p"></i></a>
                  <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
            <button class="icon-btn expand-btn"><i class="fas fa-share-alt"></i></button>
            <div class="team-info">
              <h4 class="team-title"><router-link to="/team-details">Sonia Khan</router-link></h4>
              <span class="team-desig">Kids Specialist</span>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="shape-mockup movingX d-none d-sm-block" data-top="18%" data-left="12%"><img
        src="/assets/img/icon/car-2.png" alt="shapes"></div>
    <div class="shape-mockup shapePulse d-none d-hd-block" data-bottom="20%" data-left="5%"><img
        src="/assets/img/icon/sun.png" alt="shapes"></div>
    <div class="shape-mockup moving d-none d-hd-block" data-bottom="10%" data-right="4%"><img
        src="/assets/img/icon/math-1.png" alt="shapes"></div>
  </section>
  <!--======== / Team Section ========-->

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
                <img src="/assets/img/blog/blog-1.jpg" alt="blog">
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
                <img src="/assets/img/blog/blog-2.jpg" alt="blog">
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
                <img src="/assets/img/blog/blog-3.jpg" alt="blog">
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
                <img src="/assets/img/blog/blog-4.jpg" alt="blog">
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

/* Bottom Wave Curve - SVG */
.hero-wave-bottom {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 100px;
  z-index: 10;
  pointer-events: none;
  line-height: 0;
}

.hero-wave-bottom svg {
  width: 100%;
  height: 100%;
  display: block;
}

/* Hero Background Overlay */
.vs-hero-inner {
  position: relative;
}

.vs-hero-bg::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg,
      rgba(108, 99, 255, 0.95) 0%,
      rgba(88, 77, 204, 0.92) 35%,
      rgba(255, 71, 108, 0.93) 100%);
  z-index: 1;
}

.vs-hero-inner .container {
  position: relative;
  z-index: 2;
}

/* Different gradient for each slide */
.vs-hero-inner:nth-child(1) .vs-hero-bg::after {
  background: linear-gradient(135deg,
      rgba(108, 99, 255, 0.95) 0%,
      rgba(162, 155, 254, 0.9) 45%,
      rgba(255, 101, 132, 0.93) 100%);
}

.vs-hero-inner:nth-child(2) .vs-hero-bg::after {
  background: linear-gradient(135deg,
      rgba(162, 155, 254, 0.95) 0%,
      rgba(108, 99, 255, 0.92) 45%,
      rgba(255, 71, 108, 0.93) 100%);
}

.vs-hero-inner:nth-child(3) .vs-hero-bg::after {
  background: linear-gradient(135deg,
      rgba(0, 210, 160, 0.95) 0%,
      rgba(0, 184, 148, 0.92) 40%,
      rgba(108, 99, 255, 0.93) 100%);
}

/* Hero Section Height Control */
.vs-hero-wrapper {
  min-height: auto !important;
  padding-bottom: 100px;
  /* Space for bottom wave curve */
  margin-bottom: -100px;
  /* Pull next section up */
}

.hero-slider1 {
  position: relative;
  z-index: 2;
}

.vs-hero-inner {
  min-height: 70vh !important;
  height: 70vh;
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
    padding-bottom: 80px;
    margin-bottom: -80px;
    margin-top: -68px;
    padding-top: 68px;
  }

  .hero-wave-bottom {
    height: 80px;
  }

  .vs-hero-inner {
    min-height: 65vh !important;
    height: 65vh;
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
    padding-bottom: 60px;
    margin-bottom: -60px;
  }

  .about-section .shape-slider-area .slick-slider {
    padding: 0px 12px;
  }

  .hero-wave-bottom {
    height: 60px;
  }

  .vs-hero-inner {
    min-height: 60vh !important;
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
    padding-bottom: 50px;
    margin-bottom: -50px;
    padding-top: 58px;
  }

  .hero-wave-bottom {
    height: 50px;
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
</style>
