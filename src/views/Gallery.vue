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
  <section class="gallery-hero-section">
    <div class="gallery-hero-bg">
      <div class="container">
        <div class="gallery-hero-content">
          <nav class="modern-breadcrumb">
            <router-link to="/" class="breadcrumb-link">Home</router-link>
            <i class="fas fa-chevron-right"></i>
            <span class="breadcrumb-current">Gallery</span>
          </nav>
          <div class="hero-badge">
            <i class="fas fa-images badge-icon"></i>
            <span>Our Memories</span>
          </div>
          <h1 class="gallery-hero-title">
            Explore Our
            <span class="gradient-text-light d-block">Photo Gallery</span>
          </h1>
          <p class="gallery-hero-subtitle">Capturing moments of joy, learning, and growth</p>
        </div>
      </div>
    </div>
    <div class="hero-wave-bottom">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z" fill="#FFFFFF"/>
      </svg>
    </div>
  </section>

  <!--======== Project Section ========-->
  <div class="project-section bg-smoke space-top space-extra-bottom">
    <div class="container pb-10">
      <div class="project-menu text-center mb-40 filter-menu-active">
        <button data-filter="*" class="active">All Zone <img class="btn-bg" src="/assets/img/bg/btn-bg.png" alt="btn-bg"><img class="btn-active-bg" src="/assets/img/bg/btn-bg-active.png" alt="btn-active-bg"></button>
        <button data-filter=".cat-1">Outdoor <img class="btn-bg" src="/assets/img/bg/btn-bg.png" alt="btn-bg"><img class="btn-active-bg" src="/assets/img/bg/btn-bg-active.png" alt="btn-active-bg"></button>
        <button data-filter=".cat-2">Party <img class="btn-bg" src="/assets/img/bg/btn-bg.png" alt="btn-bg"><img class="btn-active-bg" src="/assets/img/bg/btn-bg-active.png" alt="btn-active-bg"></button>
        <button data-filter=".cat-3">Toodler <img class="btn-bg" src="/assets/img/bg/btn-bg.png" alt="btn-bg"><img class="btn-active-bg" src="/assets/img/bg/btn-bg-active.png" alt="btn-active-bg"></button>
      </div>
      <div class="row g-20 justify-content-center filter-active">
        <!-- Single Item -->
        <div class="col-xl-3 col-lg-4 col-sm-6 filter-item cat-1">
          <div class="project-card">
            <div class="project-img">
              <img src="/assets/img/project/p-1.jpg" alt="project-img">
            </div>
            <a href="/assets/img/project/p-1.jpg" class="plus-btn popup-image">+</a>
          </div>
        </div>
        <!-- Single Item -->
        <div class="col-xl-3 col-lg-4 col-sm-6 filter-item cat-2">
          <div class="project-card">
            <div class="project-img">
              <img src="/assets/img/project/p-2.jpg" alt="project-img">
            </div>
            <a href="/assets/img/project/p-2.jpg" class="plus-btn popup-image">+</a>
          </div>
        </div>
        <!-- Single Item -->
        <div class="col-xl-3 col-lg-4 col-sm-6 filter-item cat-3">
          <div class="project-card">
            <div class="project-img">
              <img src="/assets/img/project/p-3.jpg" alt="project-img">
            </div>
            <a href="/assets/img/project/p-3.jpg" class="plus-btn popup-image">+</a>
          </div>
        </div>
        <!-- Single Item -->
        <div class="col-xl-3 col-lg-4 col-sm-6 filter-item cat-1 cat-2">
          <div class="project-card">
            <div class="project-img">
              <img src="/assets/img/project/p-4.jpg" alt="project-img">
            </div>
            <a href="/assets/img/project/p-4.jpg" class="plus-btn popup-image">+</a>
          </div>
        </div>
        <!-- Single Item -->
        <div class="col-xl-3 col-lg-4 col-sm-6 filter-item cat-2">
          <div class="project-card">
            <div class="project-img">
              <img src="/assets/img/project/p-5.jpg" alt="project-img">
            </div>
            <a href="/assets/img/project/p-5.jpg" class="plus-btn popup-image">+</a>
          </div>
        </div>
        <!-- Single Item -->
        <div class="col-xl-3 col-lg-4 col-sm-6 filter-item cat-3">
          <div class="project-card">
            <div class="project-img">
              <img src="/assets/img/project/p-6.jpg" alt="project-img">
            </div>
            <a href="/assets/img/project/p-6.jpg" class="plus-btn popup-image">+</a>
          </div>
        </div>
        <!-- Single Item -->
        <div class="col-xl-3 col-lg-4 col-sm-6 filter-item cat-2">
          <div class="project-card">
            <div class="project-img">
              <img src="/assets/img/project/p-7.jpg" alt="project-img">
            </div>
            <a href="/assets/img/project/p-7.jpg" class="plus-btn popup-image">+</a>
          </div>
        </div>
        <!-- Single Item -->
        <div class="col-xl-3 col-lg-4 col-sm-6 filter-item cat-3">
          <div class="project-card">
            <div class="project-img">
              <img src="/assets/img/project/p-8.jpg" alt="project-img">
            </div>
            <a href="/assets/img/project/p-8.jpg" class="plus-btn popup-image">+</a>
          </div>
        </div>
        <!-- Single Item -->
        <div class="col-xl-3 col-lg-4 col-sm-6 filter-item cat-3">
          <div class="project-card">
            <div class="project-img">
              <img src="/assets/img/project/p-9.jpg" alt="project-img">
            </div>
            <a href="/assets/img/project/p-9.jpg" class="plus-btn popup-image">+</a>
          </div>
        </div>
        <!-- Single Item -->
        <div class="col-xl-3 col-lg-4 col-sm-6 filter-item cat-3">
          <div class="project-card">
            <div class="project-img">
              <img src="/assets/img/project/p-10.jpg" alt="project-img">
            </div>
            <a href="/assets/img/project/p-10.jpg" class="plus-btn popup-image">+</a>
          </div>
        </div>
        <!-- Single Item -->
        <div class="col-xl-3 col-lg-4 col-sm-6 filter-item cat-3">
          <div class="project-card">
            <div class="project-img">
              <img src="/assets/img/project/p-11.jpg" alt="project-img">
            </div>
            <a href="/assets/img/project/p-11.jpg" class="plus-btn popup-image">+</a>
          </div>
        </div>
        <!-- Single Item -->
        <div class="col-xl-3 col-lg-4 col-sm-6 filter-item cat-3">
          <div class="project-card">
            <div class="project-img">
              <img src="/assets/img/project/p-12.jpg" alt="project-img">
            </div>
            <a href="/assets/img/project/p-12.jpg" class="plus-btn popup-image">+</a>
          </div>
        </div>
      </div>
    </div>
    <div class="shape-after"><img src="/assets/img/shape/after-shape-5.png" alt="shape"></div>
    <div class="shape-mockup movingX d-none d-hd-block" data-top="15%" data-left="9%"><img src="/assets/img/icon/duck.png" alt="shapes"></div>
    <div class="shape-mockup movingX d-none d-hd-block" data-bottom="15%" data-left="9%"><img src="/assets/img/icon/butterfly-5.png" alt="shapes"></div>
    <div class="shape-mockup shapePulse d-none d-hd-block" data-top="14%" data-right="7%"><img src="/assets/img/icon/sun-3.png" alt="shapes"></div>
    <div class="shape-mockup moving d-none d-sm-block" data-bottom="17%" data-right="6%"><img src="/assets/img/icon/leaves.png" alt="shapes"></div>
  </div>
  <!--======== / Project Section ========-->

  <!--======== Simple Section ========-->
  <section class="mockup3 space-top-shape2-plus space-bottom-page">
    <div class="container">
      <div class="row gy-40 align-items-center">
        <div class="col-lg-6 text-center text-lg-start">
          <div class="img-box-3">
            <img src="/assets/img/normal/shape-img-1.png" alt="photo">
          </div>
        </div>
        <div class="col-xl-5 col-lg-6 offset-xl-1">
          <div class="text-center text-lg-start">
            <span class="sub-title">Make Appointment</span>
            <h2 class="sec-title big-title">Join Our Fun Class with Cutie Kids</h2>
            <p class="fs-md mb-30">Formulate innovative web-readiness and installed base ideas. Distinctively integrate high-payoff paradigms without next generation systems disseminate holistic e-services through customer directed expertise.</p>
            <router-link to="/about" class="vs-btn wave-btn style-1">Learn More</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--======== / Simple Section ========-->
</template>

<style scoped>
/* Modern Hero Section - Gallery */
.gallery-hero-section {
  position: relative;
  overflow: hidden;
  z-index: 10;
}

.gallery-hero-bg {
  background: linear-gradient(135deg, #4A8B3F 0%, #5EA750 45%, #FF6584 100%);
  padding: 120px 0 80px;
  position: relative;
  z-index: 1;
}

.gallery-hero-content {
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
.gallery-hero-title {
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
.gallery-hero-subtitle {
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
  .gallery-hero-bg {
    padding: 100px 0 60px;
  }

  .gallery-hero-title {
    font-size: 42px;
  }

  .gallery-hero-subtitle {
    font-size: 18px;
  }

  .hero-wave-bottom svg {
    height: 60px;
  }
}

@media (max-width: 767px) {
  .gallery-hero-bg {
    padding: 80px 0 50px;
  }

  .gallery-hero-title {
    font-size: 36px;
  }

  .gallery-hero-subtitle {
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
  .gallery-hero-bg {
    padding: 70px 0 40px;
  }

  .gallery-hero-title {
    font-size: 32px;
  }

  .gallery-hero-subtitle {
    font-size: 15px;
  }

  .hero-wave-bottom svg {
    height: 40px;
  }
}
</style>
