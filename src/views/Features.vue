<script setup>
import { onMounted, onBeforeUnmount, nextTick } from 'vue'
import {
  initTemplateScripts,
  cleanupTemplateScripts,
} from '@/utils/initScripts'
import gameControllersImg from '@/assets/game-controllers.png'
import personalizedLearningImg from '@/assets/personalized-learning.png'
import trackProgressImg from '@/assets/track-progress.png'
import safeVaultImg from '@/assets/safe-vault.png'
import learnAnywhereImg from '@/assets/learn-anywhere.png'
import chooseGradeImg from '@/assets/choose-grade.png'
import playLearnImg from '@/assets/play-learn.png'
import rewardsTrophyImg from '@/assets/rewards-trophy.png'
import parentDashboardImg from '@/assets/parent-dashboard.png'

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
  <section class="features-hero-section">
    <div class="features-hero-bg">
      <div class="features-hero-particles">
        <span
          v-for="n in 6"
          :key="n"
          class="particle"
          :style="{ animationDelay: `${n * 0.5}s` }"
        ></span>
      </div>
      <div class="container">
        <div class="features-hero-content">
          <!-- Subtle Breadcrumb -->
          <nav class="modern-breadcrumb">
            <router-link to="/" class="breadcrumb-link">{{
              $t('features.breadcrumb.home')
            }}</router-link>
            <i class="fas fa-chevron-right"></i>
            <span class="breadcrumb-current">{{
              $t('features.breadcrumb.current')
            }}</span>
          </nav>

          <!-- Hero Badge -->
          <div class="hero-badge">
            <i class="fas fa-star"></i>
            <span>{{ $t('features.hero.badge') }}</span>
          </div>

          <!-- Hero Title -->
          <h1 class="features-hero-title">
            {{ $t('features.hero.titleLine1') }}
            <span class="gradient-text-light d-block">{{
              $t('features.hero.titleHighlight')
            }}</span>
          </h1>

          <!-- Hero Description -->
          <p class="features-hero-description">
            {{ $t('features.hero.description') }}
          </p>
        </div>
      </div>
    </div>

    <!-- Wave Bottom -->
    <div class="hero-wave-bottom">
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z"
          fill="#FFFFFF"
        />
      </svg>
    </div>
  </section>
  <!--======== / Modern Hero Section ========-->

  <!--======== Core Features Grid ========-->
  <section class="space-bottom mt-8">
    <div class="container">
      <div class="row gy-40">
        <!-- Feature 1: Interactive Games -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="feature-card-enhanced">
            <div class="feature-icon-wrapper mb-4">
              <img
                :src="gameControllersImg"
                :alt="$t('features.core.f1Alt')"
                class="feature-cartoon-img"
              />
            </div>
            <h3 class="h4 mb-3">{{ $t('features.core.f1Title') }}</h3>
            <p class="mb-3">
              {{ $t('features.core.f1Desc') }}
            </p>
            <ul class="feature-highlights">
              <li>
                <i class="fas fa-check text-success"></i>
                {{ $t('features.core.f1Item1') }}
              </li>
              <li>
                <i class="fas fa-check text-success"></i>
                {{ $t('features.core.f1Item2') }}
              </li>
              <li>
                <i class="fas fa-check text-success"></i>
                {{ $t('features.core.f1Item3') }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Feature 2: Adaptive Learning -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
          <div class="feature-card-enhanced">
            <div class="feature-icon-wrapper mb-4">
              <img
                :src="personalizedLearningImg"
                :alt="$t('features.core.f2Alt')"
                class="feature-cartoon-img"
              />
            </div>
            <h3 class="h4 mb-3">{{ $t('features.core.f2Title') }}</h3>
            <p class="mb-3">
              {{ $t('features.core.f2Desc') }}
            </p>
            <ul class="feature-highlights">
              <li>
                <i class="fas fa-check text-success"></i>
                {{ $t('features.core.f2Item1') }}
              </li>
              <li>
                <i class="fas fa-check text-success"></i>
                {{ $t('features.core.f2Item2') }}
              </li>
              <li>
                <i class="fas fa-check text-success"></i>
                {{ $t('features.core.f2Item3') }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Feature 3: Progress Tracking -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div class="feature-card-enhanced">
            <div class="feature-icon-wrapper mb-4">
              <img
                :src="trackProgressImg"
                :alt="$t('features.core.f3Alt')"
                class="feature-cartoon-img feature-cartoon-img--larger"
              />
            </div>
            <h3 class="h4 mb-3">{{ $t('features.core.f3Title') }}</h3>
            <p class="mb-3">
              {{ $t('features.core.f3Desc') }}
            </p>
            <ul class="feature-highlights">
              <li>
                <i class="fas fa-check text-success"></i>
                {{ $t('features.core.f3Item1') }}
              </li>
              <li>
                <i class="fas fa-check text-success"></i>
                {{ $t('features.core.f3Item2') }}
              </li>
              <li>
                <i class="fas fa-check text-success"></i>
                {{ $t('features.core.f3Item3') }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Feature 4: Safe Environment -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
          <div class="feature-card-enhanced">
            <div class="feature-icon-wrapper mb-4">
              <img
                :src="safeVaultImg"
                :alt="$t('features.core.f4Alt')"
                class="feature-cartoon-img"
              />
            </div>
            <h3 class="h4 mb-3">{{ $t('features.core.f4Title') }}</h3>
            <p class="mb-3">
              {{ $t('features.core.f4Desc') }}
            </p>
            <ul class="feature-highlights">
              <li>
                <i class="fas fa-check text-success"></i>
                {{ $t('features.core.f4Item1') }}
              </li>
              <li>
                <i class="fas fa-check text-success"></i>
                {{ $t('features.core.f4Item2') }}
              </li>
              <li>
                <i class="fas fa-check text-success"></i>
                {{ $t('features.core.f4Item3') }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Feature 5: Multi-Device -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div class="feature-card-enhanced">
            <div class="feature-icon-wrapper mb-4">
              <img
                :src="learnAnywhereImg"
                :alt="$t('features.core.f5Alt')"
                class="feature-cartoon-img feature-cartoon-img--larger"
              />
            </div>
            <h3 class="h4 mb-3">{{ $t('features.core.f5Title') }}</h3>
            <p class="mb-3">
              {{ $t('features.core.f5Desc') }}
            </p>
            <ul class="feature-highlights">
              <li>
                <i class="fas fa-check text-success"></i>
                {{ $t('features.core.f5Item1') }}
              </li>
              <li>
                <i class="fas fa-check text-success"></i>
                {{ $t('features.core.f5Item2') }}
              </li>
              <li>
                <i class="fas fa-check text-success"></i>
                {{ $t('features.core.f5Item3') }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Feature 6: Curriculum Aligned -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
          <div class="feature-card-enhanced">
            <div class="feature-icon-wrapper mb-4">
              <img
                :src="chooseGradeImg"
                :alt="$t('features.core.f6Alt')"
                class="feature-cartoon-img"
              />
            </div>
            <h3 class="h4 mb-3">{{ $t('features.core.f6Title') }}</h3>
            <p class="mb-3">
              {{ $t('features.core.f6Desc') }}
            </p>
            <ul class="feature-highlights">
              <li>
                <i class="fas fa-check text-success"></i>
                {{ $t('features.core.f6Item1') }}
              </li>
              <li>
                <i class="fas fa-check text-success"></i>
                {{ $t('features.core.f6Item2') }}
              </li>
              <li>
                <i class="fas fa-check text-success"></i>
                {{ $t('features.core.f6Item3') }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Feature 7: Worksheets -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
          <div class="feature-card-enhanced">
            <div class="feature-icon-wrapper mb-4">
              <img
                :src="playLearnImg"
                :alt="$t('features.core.f7Alt')"
                class="feature-cartoon-img"
              />
            </div>
            <h3 class="h4 mb-3">{{ $t('features.core.f7Title') }}</h3>
            <p class="mb-3">
              {{ $t('features.core.f7Desc') }}
            </p>
            <ul class="feature-highlights">
              <li>
                <i class="fas fa-check text-success"></i>
                {{ $t('features.core.f7Item1') }}
              </li>
              <li>
                <i class="fas fa-check text-success"></i>
                {{ $t('features.core.f7Item2') }}
              </li>
              <li>
                <i class="fas fa-check text-success"></i>
                {{ $t('features.core.f7Item3') }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Feature 8: Rewards System -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.8s">
          <div class="feature-card-enhanced">
            <div class="feature-icon-wrapper mb-4">
              <img
                :src="rewardsTrophyImg"
                :alt="$t('features.core.f8Alt')"
                class="feature-cartoon-img feature-cartoon-img--larger"
              />
            </div>
            <h3 class="h4 mb-3">{{ $t('features.core.f8Title') }}</h3>
            <p class="mb-3">
              {{ $t('features.core.f8Desc') }}
            </p>
            <ul class="feature-highlights">
              <li>
                <i class="fas fa-check text-success"></i>
                {{ $t('features.core.f8Item1') }}
              </li>
              <li>
                <i class="fas fa-check text-success"></i>
                {{ $t('features.core.f8Item2') }}
              </li>
              <li>
                <i class="fas fa-check text-success"></i>
                {{ $t('features.core.f8Item3') }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Feature 9: Parent Dashboard -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.9s">
          <div class="feature-card-enhanced">
            <div class="feature-icon-wrapper mb-4">
              <img
                :src="parentDashboardImg"
                :alt="$t('features.core.f9Alt')"
                class="feature-cartoon-img feature-cartoon-img--larger"
              />
            </div>
            <h3 class="h4 mb-3">{{ $t('features.core.f9Title') }}</h3>
            <p class="mb-3">
              {{ $t('features.core.f9Desc') }}
            </p>
            <ul class="feature-highlights">
              <li>
                <i class="fas fa-check text-success"></i>
                {{ $t('features.core.f9Item1') }}
              </li>
              <li>
                <i class="fas fa-check text-success"></i>
                {{ $t('features.core.f9Item2') }}
              </li>
              <li>
                <i class="fas fa-check text-success"></i>
                {{ $t('features.core.f9Item3') }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!--======== For Teachers Section ========-->
  <section class="space bg-smoke">
    <div class="container">
      <div
        class="row text-center justify-content-center mb-50 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div class="col-xl-8">
          <div class="title-area">
            <span class="sub-title">{{
              $t('features.teachers.subTitle')
            }}</span>
            <h2 class="sec-title">
              <span class="gradient-text">{{
                $t('features.teachers.titleHighlight')
              }}</span>
              {{ $t('features.teachers.titleRest') }}
            </h2>
            <p class="mt-3">
              {{ $t('features.teachers.intro') }}
            </p>
          </div>
        </div>
      </div>

      <div class="row gy-40">
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="teacher-feature-card">
            <div class="icon-badge">
              <i class="fas fa-users-class fa-2x" style="color: #4a8b3f"></i>
            </div>
            <h4>{{ $t('features.teachers.card1Title') }}</h4>
            <p>
              {{ $t('features.teachers.card1Desc') }}
            </p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
          <div class="teacher-feature-card">
            <div class="icon-badge">
              <i class="fas fa-tasks fa-2x" style="color: #ff6584"></i>
            </div>
            <h4>{{ $t('features.teachers.card2Title') }}</h4>
            <p>
              {{ $t('features.teachers.card2Desc') }}
            </p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div class="teacher-feature-card">
            <div class="icon-badge">
              <i class="fas fa-chart-bar fa-2x" style="color: #00d2a0"></i>
            </div>
            <h4>{{ $t('features.teachers.card3Title') }}</h4>
            <p>
              {{ $t('features.teachers.card3Desc') }}
            </p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
          <div class="teacher-feature-card">
            <div class="icon-badge">
              <i class="fas fa-book-reader fa-2x" style="color: #4ecdc4"></i>
            </div>
            <h4>{{ $t('features.teachers.card4Title') }}</h4>
            <p>
              {{ $t('features.teachers.card4Desc') }}
            </p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div class="teacher-feature-card">
            <div class="icon-badge">
              <i class="fas fa-print fa-2x" style="color: #ffb800"></i>
            </div>
            <h4>{{ $t('features.teachers.card5Title') }}</h4>
            <p>
              {{ $t('features.teachers.card5Desc') }}
            </p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
          <div class="teacher-feature-card">
            <div class="icon-badge">
              <i
                class="fas fa-chalkboard-teacher fa-2x"
                style="color: #6c5ce7"
              ></i>
            </div>
            <h4>{{ $t('features.teachers.card6Title') }}</h4>
            <p>
              {{ $t('features.teachers.card6Desc') }}
            </p>
          </div>
        </div>
      </div>

      <div class="text-center mt-50 wow fadeInUp" data-wow-delay="0.7s">
        <router-link to="/for-teachers" class="vs-btn style2">
          {{ $t('features.teachers.cta') }}
          <i class="fas fa-arrow-right ms-2"></i>
        </router-link>
      </div>
    </div>
  </section>

  <!--======== Platform Security ========-->
  <section class="space">
    <div class="container">
      <div class="row align-items-center gy-40">
        <div class="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
          <div class="title-area">
            <span class="sub-title">{{
              $t('features.security.subTitle')
            }}</span>
            <h2 class="sec-title">
              {{ $t('features.security.titleLead') }}
              <span class="gradient-text">{{
                $t('features.security.titleHighlight')
              }}</span>
            </h2>
            <p class="mb-4">
              {{ $t('features.security.intro') }}
            </p>
          </div>

          <div class="security-features">
            <div class="security-item mb-4">
              <div class="d-flex align-items-start gap-3">
                <div class="security-icon">
                  <i class="fas fa-check-circle fa-2x text-success"></i>
                </div>
                <div>
                  <h5>{{ $t('features.security.item1Title') }}</h5>
                  <p class="mb-0 text-muted">
                    {{ $t('features.security.item1Desc') }}
                  </p>
                </div>
              </div>
            </div>

            <div class="security-item mb-4">
              <div class="d-flex align-items-start gap-3">
                <div class="security-icon">
                  <i class="fas fa-check-circle fa-2x text-success"></i>
                </div>
                <div>
                  <h5>{{ $t('features.security.item2Title') }}</h5>
                  <p class="mb-0 text-muted">
                    {{ $t('features.security.item2Desc') }}
                  </p>
                </div>
              </div>
            </div>

            <div class="security-item mb-4">
              <div class="d-flex align-items-start gap-3">
                <div class="security-icon">
                  <i class="fas fa-check-circle fa-2x text-success"></i>
                </div>
                <div>
                  <h5>{{ $t('features.security.item3Title') }}</h5>
                  <p class="mb-0 text-muted">
                    {{ $t('features.security.item3Desc') }}
                  </p>
                </div>
              </div>
            </div>

            <div class="security-item mb-4">
              <div class="d-flex align-items-start gap-3">
                <div class="security-icon">
                  <i class="fas fa-check-circle fa-2x text-success"></i>
                </div>
                <div>
                  <h5>{{ $t('features.security.item4Title') }}</h5>
                  <p class="mb-0 text-muted">
                    {{ $t('features.security.item4Desc') }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 wow fadeInRight" data-wow-delay="0.2s">
          <div class="security-image-wrapper text-center">
            <img
              src="/assets/img/shape/shape-slide-1.png"
              :alt="$t('features.security.imageAlt')"
              class="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!--======== CTA Section ========-->
  <section
    class="cta-section space-shape-plus"
    data-bg-src="/assets/img/bg/cta-4.jpg"
    data-opacity="8"
    data-overlay="custom"
  >
    <div class="container text-center z-index-common">
      <div class="title-area mb-35 wow fadeInUp" data-wow-delay="0.1s">
        <span class="sub-title text-white">{{
          $t('features.cta.subTitle')
        }}</span>
        <h2 class="sec-title text-white">{{ $t('features.cta.title') }}</h2>
        <p class="text-white fs-md mt-3">
          {{ $t('features.cta.text') }}
        </p>
      </div>
    </div>
    <div class="section-before style-2">
      <img src="/assets/img/shape/main-shape-before.png" alt="shape" />
    </div>
    <div class="section-after style-2">
      <img src="/assets/img/shape/main-shape-after.png" alt="shape" />
    </div>
  </section>
  <!--======== / CTA Section ========-->
</template>

<style scoped>
/* Feature Cards Enhanced */
.feature-card-enhanced {
  background: white;
  padding: 40px 30px;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease;
  height: 100%;
  border: 2px solid transparent;
}

.feature-card-enhanced:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  border-color: #4a8b3f;
}

.feature-icon-wrapper {
  text-align: center;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-cartoon-img {
  width: 120px;
  height: 120px;
  object-fit: contain;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  animation: feature-float 3s ease-in-out infinite;
}

.feature-cartoon-img--larger {
  transform: scale(1.3);
  animation: feature-float-larger 3s ease-in-out infinite;
}

@keyframes feature-float-larger {
  0%,
  100% {
    transform: translateY(0) scale(1.3);
  }
  50% {
    transform: translateY(-6px) scale(1.3);
  }
}

.feature-card-enhanced:hover .feature-cartoon-img {
  transform: scale(1.1) rotate(3deg);
  animation: none;
}

.feature-card-enhanced:hover .feature-cartoon-img--larger {
  transform: scale(1.4) rotate(3deg);
}

@keyframes feature-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

.feature-highlights {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-highlights li {
  padding: 8px 0;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  color: #636e72;
}

.feature-highlights i {
  font-size: 16px;
}

/* Teacher Feature Cards */
.teacher-feature-card {
  background: white;
  padding: 35px 25px;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
  text-align: center;
  transition: all 0.3s;
  height: 100%;
}

.teacher-feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.12);
}

.icon-badge {
  width: 80px;
  height: 80px;
  background: #f7f8fa;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  transition: all 0.3s;
}

.teacher-feature-card:hover .icon-badge {
  transform: scale(1.1);
}

.teacher-feature-card h4 {
  margin-bottom: 15px;
  color: #2d3436;
  font-weight: 700;
}

.teacher-feature-card p {
  color: #636e72;
  line-height: 1.6;
  margin: 0;
}

/* Security Features */
.security-features {
  margin-top: 30px;
}

.security-item h5 {
  font-weight: 700;
  color: #2d3436;
  margin-bottom: 5px;
}

.security-image-wrapper {
  position: relative;
}

.security-image-wrapper::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120%;
  height: 120%;
  background: radial-gradient(circle, rgba(74, 139, 63, 0.1), transparent);
  border-radius: 50%;
  z-index: -1;
}

/* Responsive */
@media (max-width: 991px) {
  .feature-cartoon-img {
    width: 100px;
    height: 100px;
  }
}

/* ========== Modern Hero Section Styles (matches About/Contact) ========== */
.features-hero-section {
  position: relative;
  overflow: hidden;
}

.features-hero-bg {
  position: relative;
  background: linear-gradient(135deg, #4a8b3f 0%, #3a7a30 40%, #1b1464 100%);
  padding: 70px 0 80px;
  min-height: auto;
}

/* Floating Particles */
.features-hero-particles {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.particle {
  position: absolute;
  width: 6px;
  height: 6px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  animation: float-particle 8s ease-in-out infinite;
}

.particle:nth-child(1) {
  top: 20%;
  left: 10%;
}
.particle:nth-child(2) {
  top: 60%;
  left: 25%;
  width: 8px;
  height: 8px;
}
.particle:nth-child(3) {
  top: 30%;
  left: 70%;
}
.particle:nth-child(4) {
  top: 70%;
  left: 80%;
  width: 4px;
  height: 4px;
}
.particle:nth-child(5) {
  top: 15%;
  left: 50%;
  width: 5px;
  height: 5px;
}
.particle:nth-child(6) {
  top: 80%;
  left: 45%;
}

@keyframes float-particle {
  0%,
  100% {
    transform: translateY(0) scale(1);
    opacity: 0.3;
  }
  50% {
    transform: translateY(-30px) scale(1.5);
    opacity: 0.7;
  }
}

.features-hero-content {
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
  padding: 8px 20px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 50px;
  margin-bottom: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.breadcrumb-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 13px;
  transition: all 0.3s ease;
}

.breadcrumb-link:hover {
  color: #ffe5b4;
}

.modern-breadcrumb i {
  color: rgba(255, 255, 255, 0.6);
  font-size: 10px;
}

.breadcrumb-current {
  color: white;
  font-weight: 600;
  font-size: 13px;
}

/* Hero Badge */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 22px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  margin-bottom: 14px;
  animation: float-badge 3s ease-in-out infinite;
}

.hero-badge i {
  color: #ffe5b4;
  font-size: 14px;
}

.hero-badge span {
  color: white;
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 0.5px;
}

/* Hero Title */
.features-hero-title {
  font-size: 40px;
  font-weight: 900;
  line-height: 1.2;
  color: white;
  margin-bottom: 14px;
  letter-spacing: -0.5px;
}

.gradient-text-light {
  background: linear-gradient(135deg, #ffe5b4, #ffdab9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Hero Description */
.features-hero-description {
  font-size: 15px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 0;
  max-width: 600px;
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
  height: 80px;
  display: block;
}

/* Animations */
@keyframes float-badge {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

/* Responsive Styles */
@media (max-width: 991px) {
  .features-hero-bg {
    padding: 60px 0 70px;
  }

  .features-hero-title {
    font-size: 34px;
  }
}

@media (max-width: 767px) {
  .features-hero-bg {
    padding: 50px 0 60px;
  }

  .features-hero-title {
    font-size: 28px;
  }

  .features-hero-description {
    font-size: 14px;
  }

  .hero-wave-bottom svg {
    height: 60px;
  }
}

@media (max-width: 575px) {
  .features-hero-bg {
    padding: 45px 0 50px;
  }

  .features-hero-title {
    font-size: 24px;
  }

  .features-hero-description {
    font-size: 13px;
  }

  .modern-breadcrumb {
    padding: 7px 16px;
  }

  .breadcrumb-link,
  .breadcrumb-current {
    font-size: 12px;
  }

  .hero-badge {
    padding: 7px 18px;
  }

  .hero-wave-bottom svg {
    height: 50px;
  }
}
</style>
