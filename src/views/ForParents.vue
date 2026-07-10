<script setup>
import { onMounted, onBeforeUnmount, nextTick } from 'vue'
import {
  initTemplateScripts,
  cleanupTemplateScripts,
} from '@/utils/initScripts'
import safeVaultImg from '@/assets/safe-vault.png'
import trackProgressImg from '@/assets/track-progress.png'
import chooseGradeImg from '@/assets/choose-grade.png'
import kidsLearningImg from '@/assets/kids-learning.png'
import learnAnywhereImg from '@/assets/learn-anywhere.png'
import rewardsTrophyImg from '@/assets/rewards-trophy.png'

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
              $t('nav.home')
            }}</router-link>
            <i class="fas fa-chevron-right"></i>
            <span class="breadcrumb-current">{{
              $t('forParents.breadcrumb.current')
            }}</span>
          </nav>
          <div class="hero-badge">
            <i class="fas fa-heart badge-icon"></i>
            <span>{{ $t('forParents.badge') }}</span>
          </div>
          <h1 class="servicedetails-hero-title">
            {{ $t('forParents.title.line1') }}
            <span class="gradient-text-light d-block">{{
              $t('forParents.title.line2')
            }}</span>
          </h1>
          <p class="hero-description">
            {{ $t('forParents.description') }}
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

  <!-- Benefits Section -->
  <section class="space">
    <div class="container">
      <div class="title-area text-center">
        <span class="sub-title">
          <i class="fas fa-star"></i>
          {{ $t('forParents.benefits.subTitle') }}
        </span>
        <h2 class="sec-title">{{ $t('forParents.benefits.secTitle') }}</h2>
      </div>

      <div class="row gy-4 mt-5">
        <div class="col-md-6 col-lg-4">
          <div class="feature-card">
            <div class="feature-card-icon-wrap">
              <img
                :src="safeVaultImg"
                :alt="$t('forParents.benefits.safe.title')"
                class="feature-card-img"
              />
            </div>
            <h3 class="box-title">
              {{ $t('forParents.benefits.safe.title') }}
            </h3>
            <p class="feature-card-text">
              {{ $t('forParents.benefits.safe.text') }}
            </p>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="feature-card">
            <div class="feature-card-icon-wrap">
              <img
                :src="trackProgressImg"
                :alt="$t('forParents.benefits.track.title')"
                class="feature-card-img"
              />
            </div>
            <h3 class="box-title">
              {{ $t('forParents.benefits.track.title') }}
            </h3>
            <p class="feature-card-text">
              {{ $t('forParents.benefits.track.text') }}
            </p>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="feature-card">
            <div class="feature-card-icon-wrap">
              <img
                :src="chooseGradeImg"
                :alt="$t('forParents.benefits.curriculum.title')"
                class="feature-card-img"
              />
            </div>
            <h3 class="box-title">
              {{ $t('forParents.benefits.curriculum.title') }}
            </h3>
            <p class="feature-card-text">
              {{ $t('forParents.benefits.curriculum.text') }}
            </p>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="feature-card">
            <div class="feature-card-icon-wrap">
              <img
                :src="kidsLearningImg"
                :alt="$t('forParents.benefits.children.title')"
                class="feature-card-img"
              />
            </div>
            <h3 class="box-title">
              {{ $t('forParents.benefits.children.title') }}
            </h3>
            <p class="feature-card-text">
              {{ $t('forParents.benefits.children.text') }}
            </p>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="feature-card">
            <div class="feature-card-icon-wrap">
              <img
                :src="learnAnywhereImg"
                :alt="$t('forParents.benefits.anywhere.title')"
                class="feature-card-img"
              />
            </div>
            <h3 class="box-title">
              {{ $t('forParents.benefits.anywhere.title') }}
            </h3>
            <p class="feature-card-text">
              {{ $t('forParents.benefits.anywhere.text') }}
            </p>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="feature-card">
            <div class="feature-card-icon-wrap">
              <img
                :src="rewardsTrophyImg"
                :alt="$t('forParents.benefits.rewards.title')"
                class="feature-card-img"
              />
            </div>
            <h3 class="box-title">
              {{ $t('forParents.benefits.rewards.title') }}
            </h3>
            <p class="feature-card-text">
              {{ $t('forParents.benefits.rewards.text') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- How It Works Section -->
  <section class="space bg-smoke">
    <div class="container">
      <div class="title-area text-center">
        <span class="sub-title">
          <i class="fas fa-lightbulb"></i>
          {{ $t('forParents.howItWorks.subTitle') }}
        </span>
        <h2 class="sec-title">{{ $t('forParents.howItWorks.secTitle') }}</h2>
      </div>

      <div class="row gy-4 mt-5">
        <div class="col-lg-3 col-md-6">
          <div class="process-card text-center">
            <div class="process-number">1</div>
            <div class="process-icon">
              <i class="fas fa-user-plus"></i>
            </div>
            <h4 class="process-title">
              {{ $t('forParents.howItWorks.step1.title') }}
            </h4>
            <p class="process-text">
              {{ $t('forParents.howItWorks.step1.text') }}
            </p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6">
          <div class="process-card text-center">
            <div class="process-number">2</div>
            <div class="process-icon">
              <i class="fas fa-sliders-h"></i>
            </div>
            <h4 class="process-title">
              {{ $t('forParents.howItWorks.step2.title') }}
            </h4>
            <p class="process-text">
              {{ $t('forParents.howItWorks.step2.text') }}
            </p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6">
          <div class="process-card text-center">
            <div class="process-number">3</div>
            <div class="process-icon">
              <i class="fas fa-play-circle"></i>
            </div>
            <h4 class="process-title">
              {{ $t('forParents.howItWorks.step3.title') }}
            </h4>
            <p class="process-text">
              {{ $t('forParents.howItWorks.step3.text') }}
            </p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6">
          <div class="process-card text-center">
            <div class="process-number">4</div>
            <div class="process-icon">
              <i class="fas fa-chart-bar"></i>
            </div>
            <h4 class="process-title">
              {{ $t('forParents.howItWorks.step4.title') }}
            </h4>
            <p class="process-text">
              {{ $t('forParents.howItWorks.step4.text') }}
            </p>
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
  background: linear-gradient(135deg, #4a8b3f 0%, #5ea750 100%);
  padding: 120px 0 80px;
  position: relative;
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
  color: #4a8b3f;
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
  box-shadow: 0 10px 30px rgba(74, 139, 63, 0.15);
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
  animation: parent-float 3s ease-in-out infinite;
}

.feature-card:hover .feature-card-img {
  transform: scale(1.1) rotate(3deg);
  animation: none;
}

@keyframes parent-float {
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

.process-card {
  position: relative;
  padding: 30px 20px;
}

.process-number {
  position: absolute;
  top: -10px;
  right: 20px;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #4a8b3f, #5ea750);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 18px;
}

.process-icon {
  width: 80px;
  height: 80px;
  background: rgba(74, 139, 63, 0.1);
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #4a8b3f;
  font-size: 32px;
  margin-bottom: 20px;
}

.process-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #2d3436;
}

.process-text {
  color: #636e72;
  margin: 0;
}

.cta-box {
  background: linear-gradient(135deg, #4a8b3f 0%, #5ea750 100%);
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

  .feature-card,
  .benefit-card,
  .stat-card {
    margin-bottom: 25px;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 20px;
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

  .feature-icon {
    width: 50px;
    height: 50px;
    font-size: 20px;
  }

  .feature-title,
  .benefit-title {
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

  .process-step {
    margin-bottom: 30px;
  }

  .stats-grid {
    grid-template-columns: 1fr !important;
    gap: 20px;
  }

  .stat-number {
    font-size: 36px;
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

  .feature-card,
  .benefit-card,
  .stat-card {
    padding: 20px;
  }

  .process-number {
    width: 50px;
    height: 50px;
    font-size: 20px;
  }
}
</style>
