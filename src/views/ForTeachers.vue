<script setup>
import { onMounted, onBeforeUnmount, nextTick } from 'vue'
import {
  initTemplateScripts,
  cleanupTemplateScripts,
} from '@/utils/initScripts'
import manageClassesImg from '@/assets/manage-classes.png'
import assignActivitiesImg from '@/assets/assign-activities.png'
import realtimeProgressImg from '@/assets/realtime-progress.png'
import standardsAlignedImg from '@/assets/standards-aligned.png'
import automatedReportsImg from '@/assets/automated-reports.png'
import interactiveWhiteboardImg from '@/assets/interactive-whiteboard.png'

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
  <!-- Hero Section -->
  <section class="servicedetails-hero-section">
    <div class="servicedetails-hero-bg">
      <div class="container">
        <div class="servicedetails-hero-content">
          <nav class="modern-breadcrumb">
            <router-link to="/" class="breadcrumb-link">{{
              $t('forTeachers.breadcrumb.home')
            }}</router-link>
            <i class="fas fa-chevron-right"></i>
            <span class="breadcrumb-current">{{
              $t('forTeachers.breadcrumb.current')
            }}</span>
          </nav>
          <div class="hero-badge">
            <i class="fas fa-chalkboard-teacher badge-icon"></i>
            <span>{{ $t('forTeachers.hero.badge') }}</span>
          </div>
          <h1 class="servicedetails-hero-title">
            {{ $t('forTeachers.hero.titleLine1') }}
            <span class="gradient-text-light d-block">{{
              $t('forTeachers.hero.titleLine2')
            }}</span>
          </h1>
          <p class="hero-description">
            {{ $t('forTeachers.hero.description') }}
          </p>
        </div>
      </div>
    </div>
    <div class="hero-wave-bottom">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path
          d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z"
          fill="#FFFFFF"
        />
      </svg>
    </div>
  </section>

  <!-- Free for Teachers Banner -->
  <section class="free-teacher-banner">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-8">
          <div class="banner-icon">
            <i class="fas fa-gift"></i>
          </div>
          <h3 class="banner-title">{{ $t('forTeachers.banner.title') }}</h3>
          <p class="banner-text">
            {{ $t('forTeachers.banner.text') }}
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Benefits Section -->
  <section class="space">
    <div class="container">
      <div class="title-area text-center">
        <span class="sub-title">
          <i class="fas fa-award"></i>
          {{ $t('forTeachers.benefits.subTitle') }}
        </span>
        <h2 class="sec-title">{{ $t('forTeachers.benefits.secTitle') }}</h2>
      </div>

      <div class="row gy-4 mt-5">
        <div class="col-md-6 col-lg-4">
          <div class="feature-card">
            <div class="feature-card-icon-wrap">
              <img
                :src="manageClassesImg"
                :alt="$t('forTeachers.benefits.manageClasses.alt')"
                class="feature-card-img"
              />
            </div>
            <h3 class="box-title">
              {{ $t('forTeachers.benefits.manageClasses.title') }}
            </h3>
            <p class="feature-card-text">
              {{ $t('forTeachers.benefits.manageClasses.text') }}
            </p>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="feature-card">
            <div class="feature-card-icon-wrap">
              <img
                :src="assignActivitiesImg"
                :alt="$t('forTeachers.benefits.assignActivities.alt')"
                class="feature-card-img"
              />
            </div>
            <h3 class="box-title">
              {{ $t('forTeachers.benefits.assignActivities.title') }}
            </h3>
            <p class="feature-card-text">
              {{ $t('forTeachers.benefits.assignActivities.text') }}
            </p>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="feature-card">
            <div class="feature-card-icon-wrap">
              <img
                :src="realtimeProgressImg"
                :alt="$t('forTeachers.benefits.realtimeProgress.alt')"
                class="feature-card-img"
              />
            </div>
            <h3 class="box-title">
              {{ $t('forTeachers.benefits.realtimeProgress.title') }}
            </h3>
            <p class="feature-card-text">
              {{ $t('forTeachers.benefits.realtimeProgress.text') }}
            </p>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="feature-card">
            <div class="feature-card-icon-wrap">
              <img
                :src="standardsAlignedImg"
                :alt="$t('forTeachers.benefits.standardsAligned.alt')"
                class="feature-card-img"
              />
            </div>
            <h3 class="box-title">
              {{ $t('forTeachers.benefits.standardsAligned.title') }}
            </h3>
            <p class="feature-card-text">
              {{ $t('forTeachers.benefits.standardsAligned.text') }}
            </p>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="feature-card">
            <div class="feature-card-icon-wrap">
              <img
                :src="automatedReportsImg"
                :alt="$t('forTeachers.benefits.automatedReports.alt')"
                class="feature-card-img"
              />
            </div>
            <h3 class="box-title">
              {{ $t('forTeachers.benefits.automatedReports.title') }}
            </h3>
            <p class="feature-card-text">
              {{ $t('forTeachers.benefits.automatedReports.text') }}
            </p>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="feature-card">
            <div class="feature-card-icon-wrap">
              <img
                :src="interactiveWhiteboardImg"
                :alt="$t('forTeachers.benefits.interactiveWhiteboard.alt')"
                class="feature-card-img"
              />
            </div>
            <h3 class="box-title">
              {{ $t('forTeachers.benefits.interactiveWhiteboard.title') }}
            </h3>
            <p class="feature-card-text">
              {{ $t('forTeachers.benefits.interactiveWhiteboard.text') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Features Comparison -->
  <section class="space bg-smoke">
    <div class="container">
      <div class="title-area text-center">
        <span class="sub-title">
          <i class="fas fa-star"></i>
          {{ $t('forTeachers.features.subTitle') }}
        </span>
        <h2 class="sec-title">{{ $t('forTeachers.features.secTitle') }}</h2>
      </div>

      <div class="row mt-5 justify-content-center">
        <div class="col-lg-8">
          <div class="features-list">
            <div class="feature-item">
              <i class="fas fa-check-circle"></i>
              <span>{{ $t('forTeachers.features.item1') }}</span>
            </div>
            <div class="feature-item">
              <i class="fas fa-check-circle"></i>
              <span>{{ $t('forTeachers.features.item2') }}</span>
            </div>
            <div class="feature-item">
              <i class="fas fa-check-circle"></i>
              <span>{{ $t('forTeachers.features.item3') }}</span>
            </div>
            <div class="feature-item">
              <i class="fas fa-check-circle"></i>
              <span>{{ $t('forTeachers.features.item4') }}</span>
            </div>
            <div class="feature-item">
              <i class="fas fa-check-circle"></i>
              <span>{{ $t('forTeachers.features.item5') }}</span>
            </div>
            <div class="feature-item">
              <i class="fas fa-check-circle"></i>
              <span>{{ $t('forTeachers.features.item6') }}</span>
            </div>
            <div class="feature-item">
              <i class="fas fa-check-circle"></i>
              <span>{{ $t('forTeachers.features.item7') }}</span>
            </div>
            <div class="feature-item">
              <i class="fas fa-check-circle"></i>
              <span>{{ $t('forTeachers.features.item8') }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials Section -->
  <section class="space">
    <div class="container">
      <div class="title-area text-center">
        <span class="sub-title">
          <i class="fas fa-quote-left"></i>
          {{ $t('forTeachers.testimonials.subTitle') }}
        </span>
        <h2 class="sec-title">{{ $t('forTeachers.testimonials.secTitle') }}</h2>
      </div>

      <div class="row gy-4 mt-5">
        <div class="col-lg-4">
          <div class="testimonial-card">
            <div class="testimonial-rating">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <p class="testimonial-text">
              {{ $t('forTeachers.testimonials.item1.text') }}
            </p>
            <div class="testimonial-author">
              <h5>{{ $t('forTeachers.testimonials.item1.name') }}</h5>
              <span>{{ $t('forTeachers.testimonials.item1.role') }}</span>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="testimonial-card">
            <div class="testimonial-rating">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <p class="testimonial-text">
              {{ $t('forTeachers.testimonials.item2.text') }}
            </p>
            <div class="testimonial-author">
              <h5>{{ $t('forTeachers.testimonials.item2.name') }}</h5>
              <span>{{ $t('forTeachers.testimonials.item2.role') }}</span>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="testimonial-card">
            <div class="testimonial-rating">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <p class="testimonial-text">
              {{ $t('forTeachers.testimonials.item3.text') }}
            </p>
            <div class="testimonial-author">
              <h5>{{ $t('forTeachers.testimonials.item3.name') }}</h5>
              <span>{{ $t('forTeachers.testimonials.item3.role') }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.servicedetails-hero-section {
  position: relative;
  overflow: hidden;
}

.servicedetails-hero-bg {
  background: linear-gradient(135deg, #00d2a0 0%, #00b894 100%);
  padding: 120px 0 80px;
  position: relative;
  overflow: hidden;
}

.servicedetails-hero-content {
  color: white;
  text-align: center;
}

.modern-breadcrumb {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
  font-size: 14px;
}

.breadcrumb-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s;
}

.breadcrumb-link:hover {
  color: white;
}

.breadcrumb-current {
  color: white;
  font-weight: 600;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.95);
  padding: 8px 20px;
  border-radius: 50px;
  margin-bottom: 20px;
  backdrop-filter: blur(10px);
  color: #00b894;
  font-weight: 600;
}

.badge-icon {
  font-size: 18px;
}

.servicedetails-hero-title {
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 20px;
  line-height: 1.2;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.gradient-text-light {
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.hero-description {
  font-size: 18px;
  max-width: 700px;
  margin: 0 auto;
  opacity: 1;
  color: white;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  font-weight: 500;
}

.hero-wave-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.hero-wave-bottom svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 60px;
}

.free-teacher-banner {
  background: linear-gradient(135deg, #ffd93d 0%, #ffc107 100%);
  padding: 40px 0;
  margin-top: -1px;
}

.banner-icon {
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
  margin-bottom: 15px;
}

.banner-title {
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 10px;
  color: #2d3436;
}

.banner-text {
  font-size: 16px;
  margin: 0;
  color: #2d3436;
  opacity: 0.9;
}

.feature-card {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  height: 100%;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 210, 160, 0.15);
}

.feature-card-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #00d2a0, #00b894);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  margin-bottom: 20px;
}

.feature-card-icon-wrap {
  height: 90px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.feature-card-img {
  width: 90px;
  height: 90px;
  object-fit: contain;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  animation: teacher-float 3s ease-in-out infinite;
}

.feature-card:hover .feature-card-img {
  transform: scale(1.1) rotate(3deg);
  animation: none;
}

@keyframes teacher-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

.box-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 15px;
  color: #2d3436;
}

.feature-card-text {
  color: #636e72;
  line-height: 1.6;
  margin: 0;
}

.features-list {
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px 0;
  border-bottom: 1px solid #e0e0e0;
}

.feature-item:last-child {
  border-bottom: none;
}

.feature-item i {
  color: #00d2a0;
  font-size: 24px;
  flex-shrink: 0;
}

.feature-item span {
  font-size: 16px;
  color: #2d3436;
  font-weight: 500;
}

.testimonial-card {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  height: 100%;
}

.testimonial-rating {
  color: #ffd93d;
  margin-bottom: 15px;
}

.testimonial-text {
  color: #636e72;
  font-style: italic;
  line-height: 1.6;
  margin-bottom: 20px;
}

.testimonial-author h5 {
  font-size: 18px;
  font-weight: 700;
  color: #2d3436;
  margin-bottom: 5px;
}

.testimonial-author span {
  color: #636e72;
  font-size: 14px;
}

.cta-box {
  background: linear-gradient(135deg, #00d2a0 0%, #00b894 100%);
  padding: 50px;
  border-radius: 20px;
  color: white;
}

.cta-title {
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 10px;
  color: white;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.cta-text {
  font-size: 16px;
  margin: 0;
  opacity: 1;
  color: white;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
}

.vs-btn.style-white {
  background: white;
  color: #00b894;
}

.vs-btn.style-white:hover {
  background: rgba(255, 255, 255, 0.9);
}

/* Tablet and Below */
@media (max-width: 991px) {
  .servicedetails-hero-title {
    font-size: 36px;
  }

  .cta-box {
    padding: 40px 30px;
    text-align: center;
  }

  .cta-box .vs-btn {
    margin-top: 20px;
  }

  .banner-text {
    margin-bottom: 20px;
  }

  .feature-card,
  .testimonial-card {
    margin-bottom: 25px;
  }
}

/* Mobile Landscape and Below */
@media (max-width: 767px) {
  .servicedetails-hero-section {
    min-height: 400px !important;
    padding: 60px 0 !important;
  }

  .servicedetails-hero-title {
    font-size: 28px;
    line-height: 1.3;
  }

  .hero-description {
    font-size: 15px;
  }

  .hero-badge {
    font-size: 12px;
    padding: 6px 14px;
  }

  .free-teacher-banner {
    padding: 30px 0;
  }

  .banner-title {
    font-size: 22px;
  }

  .banner-text {
    font-size: 14px;
  }

  .feature-card-icon {
    width: 50px;
    height: 50px;
    font-size: 20px;
  }

  .box-title {
    font-size: 18px;
  }

  .cta-box {
    padding: 35px 25px;
  }

  .cta-title {
    font-size: 24px;
  }

  .cta-text {
    font-size: 14px;
  }

  .features-list {
    padding: 30px 20px;
  }

  .feature-item span {
    font-size: 14px;
  }

  .testimonial-card {
    padding: 25px;
  }
}

/* Mobile Portrait */
@media (max-width: 575px) {
  .servicedetails-hero-section {
    min-height: 350px !important;
    padding: 50px 0 !important;
  }

  .servicedetails-hero-title {
    font-size: 24px;
  }

  .hero-description {
    font-size: 14px;
  }

  .hero-badge {
    font-size: 11px;
    padding: 5px 12px;
  }

  .free-teacher-banner {
    padding: 25px 0;
  }

  .banner-title {
    font-size: 20px;
  }

  .banner-text {
    font-size: 13px;
  }

  .cta-box {
    padding: 30px 20px;
  }

  .cta-title {
    font-size: 20px;
  }

  .vs-btn {
    width: 100%;
    text-align: center;
    justify-content: center;
  }

  .feature-card {
    padding: 20px;
  }

  .features-list {
    padding: 25px 15px;
  }

  .feature-item {
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }

  .testimonial-card {
    padding: 20px;
  }
}
</style>
