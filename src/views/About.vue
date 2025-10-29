<script setup>
import { onMounted, onBeforeUnmount, nextTick } from 'vue'
import { initTemplateScripts, cleanupTemplateScripts } from '@/utils/initScripts'

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
  <section class="about-hero-section">
    <div class="about-hero-bg">
      <div class="container">
        <div class="about-hero-content">
          <!-- Subtle Breadcrumb -->
          <nav class="modern-breadcrumb">
            <router-link to="/" class="breadcrumb-link">Home</router-link>
            <i class="fas fa-chevron-right"></i>
            <span class="breadcrumb-current">About Us</span>
          </nav>

          <!-- Hero Badge -->
          <div class="hero-badge">
            <i class="fas fa-heart"></i>
            <span>Who We Are</span>
          </div>

          <!-- Hero Title -->
          <h1 class="about-hero-title">
            Making Learning
            <span class="gradient-text-light d-block">Magical & Fun</span>
            for Every Child
          </h1>

          <!-- Hero Description -->
          <p class="about-hero-description">
            We're on a mission to help 100 million kids fall in love with learning through play-based education
          </p>
        </div>
      </div>
    </div>

    <!-- Wave Bottom -->
    <div class="hero-wave-bottom">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z" fill="#FFFFFF"/>
      </svg>
    </div>
  </section>
  <!--======== / Modern Hero Section ========-->

  <!--======== About Section ========-->
  <section class="about-section space">
    <div class="container">
      <div class="row align-items-center gy-30">
        <div class="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
          <div class="img-box-2">
            <img src="/assets/img/normal/square-1.jpg" alt="Kids learning with Mind Jr Group" class="big-img">
            <img src="/assets/img/normal/square-2.jpg" alt="Interactive educational games" class="small-img">
          </div>
        </div>
        <div class="col-lg-5 wow fadeInRight" data-wow-delay="0.1s">
          <div class="text-center text-lg-start">
            <span class="sub-title">About Mind Jr Group</span>
            <h2 class="sec-title big-title">Making Learning Fun Through Interactive Games</h2>
            <p class="fs-md mb-30">Mind Jr Group is a leading educational technology platform that transforms how children learn. With over 4,000 interactive games covering Math, Reading, and Science for Pre-K through Grade 5, we make learning feel like play while delivering curriculum-aligned content that builds essential skills.</p>

            <div class="call-media">
              <div class="media-icon"><i class="fas fa-graduation-cap"></i></div>
              <div class="media-body">
                <span class="media-label">Join 50M+ Kids Learning</span>
                <p class="media-info"><router-link to="/pricing" class="text-inherit">Start Free Trial Today</router-link></p>
              </div>
            </div>

            <router-link to="/pricing" class="vs-btn wave-btn style-1">Get Started Free</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="shape-mockup shapePulse d-none d-hd-block" data-bottom="40%" data-left="6%"><img src="/assets/img/icon/dog.png" alt="shapes"></div>
    <div class="shape-mockup rotate d-none d-md-block" data-bottom="40%" data-right="6%"><img src="/assets/img/icon/star.png" alt="shapes"></div>
  </section>
  <!--======== / About Section ========-->

  <!--======== Counter Section ========-->
  <section class="counter-section space-double" data-bg-src="/assets/img/bg/counter.jpg" data-overlay="title" data-opacity="8">
    <div class="container">
      <div class="row gy-30 justify-content-between">
        <!-- Single Item -->
        <div class="col-xl-auto col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="counter-box">
            <div class="counter-icon">
              <img src="/assets/img/icon/counter-1.png" alt="icon">
            </div>
            <div class="counter-info">
              <h2 class="counter-number">
                <span class="counter">50</span>M+
              </h2>
              <p class="counter-text">Kids Learning</p>
            </div>
          </div>
        </div>
        <!-- Single Item -->
        <div class="col-xl-auto col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="counter-box">
            <div class="counter-icon">
              <img src="/assets/img/icon/counter-2.png" alt="icon">
            </div>
            <div class="counter-info">
              <h2 class="counter-number">
                <span class="counter">4000</span>+
              </h2>
              <p class="counter-text">Interactive Games</p>
            </div>
          </div>
        </div>
        <!-- Single Item -->
        <div class="col-xl-auto col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="counter-box">
            <div class="counter-icon">
              <img src="/assets/img/icon/counter-3.png" alt="icon">
            </div>
            <div class="counter-info">
              <h2 class="counter-number">
                <span class="counter">100000</span>+
              </h2>
              <p class="counter-text">Teachers Trust Us</p>
            </div>
          </div>
        </div>
        <!-- Single Item -->
        <div class="col-xl-auto col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="counter-box">
            <div class="counter-icon">
              <img src="/assets/img/icon/counter-4.png" alt="icon">
            </div>
            <div class="counter-info">
              <h2 class="counter-number">
                <span class="counter">150</span>+
              </h2>
              <p class="counter-text">Countries Worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-before style-2"><img src="/assets/img/shape/counter-before-1.png" alt="shape"></div>
    <div class="section-after style-2"><img src="/assets/img/shape/counter-after-1.png" alt="shape"></div>

    <div class="shape-mockup z-index-3 shapePulse d-none d-hd-block" data-bottom="23%" data-left="7%"><img src="/assets/img/icon/egg.png" alt="shapes"></div>
    <div class="shape-mockup z-index-3 d-none d-hd-block" data-bottom="-9%" data-right="7%"><img src="/assets/img/shape/line-3.png" alt="shapes"></div>
  </section>
  <!--======== / Counter Section ========-->

  <!--======== Process Section ========-->
  <section class="process-section space-top space-bottom-shape2-plus">
    <div class="container">
      <div class="row mb-20 text-center justify-content-center wow fadeInUp" data-wow-delay="0.1s">
        <div class="col-xl-6 col-lg-7 col-md-8 col-sm-9">
          <div class="title-area">
            <span class="sub-title">How It Works</span>
            <h2 class="sec-title">Get Started in 4 Simple Steps</h2>
          </div>
        </div>
      </div>
      <div class="process-area">
        <div class="row gy-60 justify-content-between">
          <!-- Single Item -->
          <div class="col-auto process-box wow fadeInUp" data-wow-delay="0.1s">
            <div class="process-box-body">
              <span class="process-number">01</span>
              <div class="process-content">
                <div class="process-icon">
                  <img src="/assets/img/icon/process2-1.png" alt="icon">
                </div>
                <h5 class="process-name"><router-link to="/pricing">Sign Up Free</router-link></h5>
              </div>
            </div>
          </div>
          <!-- Single Item -->
          <div class="col-auto process-box wow fadeInUp" data-wow-delay="0.1s">
            <div class="process-box-body">
              <span class="process-number">02</span>
              <div class="process-content">
                <div class="process-icon">
                  <img src="/assets/img/icon/process2-2.png" alt="icon">
                </div>
                <h5 class="process-name"><router-link to="/pricing">Choose Your Grade</router-link></h5>
              </div>
            </div>
          </div>
          <!-- Single Item -->
          <div class="col-auto process-box wow fadeInUp" data-wow-delay="0.1s">
            <div class="process-box-body">
              <span class="process-number">03</span>
              <div class="process-content">
                <div class="process-icon">
                  <img src="/assets/img/icon/process2-3.png" alt="icon">
                </div>
                <h5 class="process-name"><router-link to="/pricing">Play & Learn</router-link></h5>
              </div>
            </div>
          </div>
          <!-- Single Item -->
          <div class="col-auto process-box wow fadeInUp" data-wow-delay="0.1s">
            <div class="process-box-body">
              <span class="process-number">04</span>
              <div class="process-content">
                <div class="process-icon">
                  <img src="/assets/img/icon/process2-4.png" alt="icon">
                </div>
                <h5 class="process-name"><router-link to="/pricing">Track Progress</router-link></h5>
              </div>
            </div>
          </div>
        </div>
        <div class="process-line"><img src="/assets/img/shape/dashed-line-1.png" alt="shape"></div>
      </div>
    </div>
  </section>
  <!--======== / Process Section ========-->


  <!--======== Testimonial Section ========-->
  <section class="testimonial-section space-top-shape2-plus space-bottom-shape-plus">
    <div class="container">
      <div class="row gy-30 align-items-center">
        <div class="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
          <div class="text-center text-lg-start">
            <span class="sub-title">Parent Reviews</span>
            <h2 class="sec-title">What Parents & Teachers Say</h2>
            <p class="mb-30">Discover how Mind Jr Group is transforming learning for millions of families worldwide. Real stories from real parents about their children's progress and engagement.</p>
            <router-link to="/pricing" class="vs-btn wave-btn style-1">Start Free Trial</router-link>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="testi-slider-area">
            <div class="row testi-slider vs-carousel" id="testi1" data-slide-show="2">
              <!-- Single Item -->
              <div class="col-md-6">
                <div class="testi-box">
                  <div class="testi-avater">
                    <img src="/assets/img/testimonial/avator-1.jpg" alt="testimonial">
                    <i class="fa-solid fa-quote-left"></i>
                  </div>
                  <h4 class="testi-title">My Daughter Loves Math Now!</h4>
                  <p class="testi-text">My 7-year-old used to struggle with math, but since using Mind Jr, she's excited to practice every day. The games make learning fun and she's already ahead of her grade level!</p>
                  <div class="testi-author">
                    <h5 class="name">Sarah Johnson</h5>
                    <span class="desig">Parent, Grade 2</span>
                  </div>
                </div>
              </div>
              <!-- Single Item -->
              <div class="col-md-6">
                <div class="testi-box">
                  <div class="testi-avater">
                    <img src="/assets/img/testimonial/avator-2.jpg" alt="testimonial">
                    <i class="fa-solid fa-quote-left"></i>
                  </div>
                  <h4 class="testi-title">Perfect for Homeschooling</h4>
                  <p class="testi-text">As a homeschool parent, Mind Jr has been a game-changer. The curriculum-aligned content covers all subjects and my kids are learning while having fun. Worth every penny!</p>
                  <div class="testi-author">
                    <h5 class="name">Michael Chen</h5>
                    <span class="desig">Homeschool Parent</span>
                  </div>
                </div>
              </div>
              <!-- Single Item -->
              <div class="col-md-6">
                <div class="testi-box">
                  <div class="testi-avater">
                    <img src="/assets/img/testimonial/avator-3.jpg" alt="testimonial">
                    <i class="fa-solid fa-quote-left"></i>
                  </div>
                  <h4 class="testi-title">Engaging & Educational</h4>
                  <p class="testi-text">I use Mind Jr in my classroom and the kids absolutely love it. The progress tracking helps me identify areas where students need extra support. Highly recommend for teachers!</p>
                  <div class="testi-author">
                    <h5 class="name">Emily Rodriguez</h5>
                    <span class="desig">Elementary Teacher</span>
                  </div>
                </div>
              </div>
            </div> <!-- / Slider End -->
            <div class="vs-icon-box testi-1 d-none d-xl-block">
              <button data-slick-prev="#testi1" class="icon-btn style-3 arrow-left mb-15"><i class="far fa-arrow-left"></i></button>
              <button data-slick-next="#testi1" class="icon-btn style-3 arrow-right"><i class="far fa-arrow-right"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--======== / Testimonial Section ========-->
</template>

<style scoped>
/* ========== Modern Hero Section Styles ========== */
.about-hero-section {
  position: relative;
  overflow: hidden;
}

.about-hero-bg {
  position: relative;
  background: linear-gradient(135deg, #6C63FF 0%, #A29BFE 45%, #FF6584 100%);
  padding: 100px 0 120px;
  min-height: 450px;
}

.about-hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}

/* Modern Breadcrumb */
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

.breadcrumb-link:hover {
  color: #FFE5B4;
}

.modern-breadcrumb i {
  color: rgba(255, 255, 255, 0.6);
  font-size: 10px;
}

.breadcrumb-current {
  color: white;
  font-weight: 600;
  font-size: 14px;
}

/* Hero Badge */
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
  letter-spacing: 0.5px;
}

/* Hero Title */
.about-hero-title {
  font-size: 58px;
  font-weight: 900;
  line-height: 1.2;
  color: white;
  margin-bottom: 25px;
  letter-spacing: -1px;
}

.gradient-text-light {
  background: linear-gradient(135deg, #FFE5B4, #FFDAB9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Hero Description */
.about-hero-description {
  font-size: 19px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 35px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 400;
}

/* Wave Bottom */
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
  display: block;
}

/* Animations */
@keyframes float-badge {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

/* Responsive Styles */
@media (max-width: 991px) {
  .about-hero-bg {
    padding: 80px 0 100px;
    min-height: 400px;
  }

  .about-hero-title {
    font-size: 46px;
  }

  .about-hero-description {
    font-size: 17px;
  }
}

@media (max-width: 767px) {
  .about-hero-bg {
    padding: 60px 0 80px;
    min-height: auto;
  }

  .about-hero-title {
    font-size: 36px;
  }

  .about-hero-description {
    font-size: 16px;
    margin-bottom: 30px;
  }

  .hero-badge span {
    font-size: 14px;
  }

  .hero-badge i {
    font-size: 16px;
  }

  .hero-wave-bottom svg {
    height: 80px;
  }
}

@media (max-width: 575px) {
  .about-hero-bg {
    padding: 74px 0 70px;
  }

  .about-hero-title {
    font-size: 32px;
  }

  .about-hero-description {
    font-size: 15px;
  }

  .modern-breadcrumb {
    padding: 8px 20px;
  }

  .breadcrumb-link,
  .breadcrumb-current {
    font-size: 13px;
  }

  .hero-badge {
    padding: 10px 24px;
  }

  .hero-wave-bottom svg {
    height: 60px;
  }
}
</style>
