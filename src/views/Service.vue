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
  <!-- Modern Hero Section -->
  <section class="service-hero-section">
    <div class="service-hero-bg">
      <div class="container">
        <div class="service-hero-content">
          <nav class="modern-breadcrumb">
            <router-link to="/" class="breadcrumb-link">Home</router-link>
            <i class="fas fa-chevron-right"></i>
            <span class="breadcrumb-current">Services</span>
          </nav>
          <div class="hero-badge">
            <i class="fas fa-hands-helping badge-icon"></i>
            <span>What We Offer</span>
          </div>
          <h1 class="service-hero-title">
            Premium Educational
            <span class="gradient-text-light d-block">Services for Kids</span>
          </h1>
          <p class="service-hero-subtitle">Comprehensive programs designed to support your child's learning journey</p>
        </div>
      </div>
    </div>
    <div class="hero-wave-bottom">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z" fill="#FFFFFF"/>
      </svg>
    </div>
  </section>

  <!--======== Service Section ========-->
  <section class="service-section space">
    <div class="container">
      <div class="row gy-30">
        <!-- Single Item -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="service-box" data-overlay="title" data-opacity="6">
            <div class="service-img">
              <img src="/assets/img/service/s-1.jpg" alt="service">
            </div>
            <div class="service-content">
              <div class="service-icon">
                <img src="/assets/img/icon/sr-1.png" alt="icon">
              </div>
              <h3 class="service-title"><router-link to="/service-details">Summer Camp</router-link></h3>
              <p class="service-text">Dynamically benchmark seamless growth strategies via multidisciplinary initiatives. Credibly brand collaborative.</p>
              <router-link to="/service-details" class="vs-btn style-2">See Details</router-link>
            </div>
          </div>
        </div>
        <!-- Single Item -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="service-box" data-overlay="title" data-opacity="6">
            <div class="service-img">
              <img src="/assets/img/service/s-2.jpg" alt="service">
            </div>
            <div class="service-content">
              <div class="service-icon">
                <img src="/assets/img/icon/sr-2.png" alt="icon">
              </div>
              <h3 class="service-title"><router-link to="/service-details">Daycare Service</router-link></h3>
              <p class="service-text">Dynamically benchmark seamless growth strategies via multidisciplinary initiatives. Credibly brand collaborative.</p>
              <router-link to="/service-details" class="vs-btn style-2">See Details</router-link>
            </div>
          </div>
        </div>
        <!-- Single Item -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="service-box" data-overlay="title" data-opacity="6">
            <div class="service-img">
              <img src="/assets/img/service/s-3.jpg" alt="service">
            </div>
            <div class="service-content">
              <div class="service-icon">
                <img src="/assets/img/icon/sr-3.png" alt="icon">
              </div>
              <h3 class="service-title"><router-link to="/service-details">Online Classes</router-link></h3>
              <p class="service-text">Dynamically benchmark seamless growth strategies via multidisciplinary initiatives. Credibly brand collaborative.</p>
              <router-link to="/service-details" class="vs-btn style-2">See Details</router-link>
            </div>
          </div>
        </div>
        <!-- Single Item -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="service-box" data-overlay="title" data-opacity="6">
            <div class="service-img">
              <img src="/assets/img/service/s-4.jpg" alt="service">
            </div>
            <div class="service-content">
              <div class="service-icon">
                <img src="/assets/img/icon/sr-4.png" alt="icon">
              </div>
              <h3 class="service-title"><router-link to="/service-details">Digital Learning</router-link></h3>
              <p class="service-text">Dynamically benchmark seamless growth strategies via multidisciplinary initiatives. Credibly brand collaborative.</p>
              <router-link to="/service-details" class="vs-btn style-2">See Details</router-link>
            </div>
          </div>
        </div>
        <!-- Single Item -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="service-box" data-overlay="title" data-opacity="6">
            <div class="service-img">
              <img src="/assets/img/service/s-5.jpg" alt="service">
            </div>
            <div class="service-content">
              <div class="service-icon">
                <img src="/assets/img/icon/sr-5.png" alt="icon">
              </div>
              <h3 class="service-title"><router-link to="/service-details">Childcare Service</router-link></h3>
              <p class="service-text">Dynamically benchmark seamless growth strategies via multidisciplinary initiatives. Credibly brand collaborative.</p>
              <router-link to="/service-details" class="vs-btn style-2">See Details</router-link>
            </div>
          </div>
        </div>
        <!-- Single Item -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="service-box" data-overlay="title" data-opacity="6">
            <div class="service-img">
              <img src="/assets/img/service/s-6.jpg" alt="service">
            </div>
            <div class="service-content">
              <div class="service-icon">
                <img src="/assets/img/icon/sr-6.png" alt="icon">
              </div>
              <h3 class="service-title"><router-link to="/service-details">Home Tutor</router-link></h3>
              <p class="service-text">Dynamically benchmark seamless growth strategies via multidisciplinary initiatives. Credibly brand collaborative.</p>
              <router-link to="/service-details" class="vs-btn style-2">See Details</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--======== / Service Section ========-->

  <!--======== CTA Section ========-->
  <section class="cta-section space-shape-plus" data-bg-src="/assets/img/bg/cta-4.jpg" data-opacity="8" data-overlay="custom">
    <div class="container text-center z-index-common">
      <div class="title-area mb-35 wow fadeInUp" data-wow-delay="0.1s">
        <span class="sub-title text-white">Join Our New Session</span>
        <h2 class="sec-title text-white">Call To Enroll Your Child <a class="d-block text-inherit" href="tel:+25621582222">256 2158 2222</a></h2>
      </div>
      <router-link to="/about" class="vs-btn wave-btn">Learn More</router-link>
    </div>
    <div class="section-before style-2"><img src="/assets/img/shape/main-shape-before.png" alt="shape"></div>
    <div class="section-after style-2"><img src="/assets/img/shape/main-shape-after.png" alt="shape"></div>
  </section>
  <!--======== / CTA Section ========-->

  <!--======== Simple Section ========-->
  <section class="mockup1 space-extra-top" data-bg-src="/assets/img/bg/bg_2.png">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-9 text-center wow fadeInUp" data-wow-delay="0.1s">
          <img class="mb-70" src="/assets/img/icon/mail-big-icon.png" alt="icon">
          <h2 class="h1">Enrollment Is Now Going On</h2>
          <p class="mb-35">Intrinsicly e-enable flexible opportunities with business networks. Continually evolve efficient leadership skills with ubiquitous content. Rapidiously disintermediate performance based markets for multidisciplinary methodologies. </p>
          <router-link to="/contact" class="vs-btn wave-btn">Contact Us</router-link>
        </div>
      </div>
    </div>
  </section>
  <!--======== / Simple Section ========-->
</template>

<style scoped>
/* Modern Hero Section - Service */
.service-hero-section {
  position: relative;
  overflow: hidden;
  z-index: 10;
}

.service-hero-bg {
  background: linear-gradient(135deg, #4A8B3F 0%, #5EA750 45%, #FF6584 100%);
  padding: 120px 0 80px;
  position: relative;
  z-index: 1;
}

.service-hero-content {
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
.service-hero-title {
  font-size: 56px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 20px;
  color: #fff;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.gradient-text-light {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.7) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Hero Subtitle */
.service-hero-subtitle {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.95);
  margin: 0 auto;
  max-width: 600px;
  line-height: 1.6;
  font-weight: 500;
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

/* Responsive Design */
@media (max-width: 991px) {
  .service-hero-bg {
    padding: 100px 0 60px;
  }

  .service-hero-title {
    font-size: 42px;
  }

  .service-hero-subtitle {
    font-size: 18px;
  }

  .hero-wave-bottom svg {
    height: 60px;
  }
}

@media (max-width: 767px) {
  .service-hero-bg {
    padding: 80px 0 50px;
  }

  .service-hero-title {
    font-size: 36px;
  }

  .service-hero-subtitle {
    font-size: 16px;
    padding: 0 15px;
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
  .service-hero-bg {
    padding: 70px 0 40px;
  }

  .service-hero-title {
    font-size: 32px;
  }

  .service-hero-subtitle {
    font-size: 15px;
  }

  .hero-wave-bottom svg {
    height: 40px;
  }
}
</style>
