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
            <router-link to="/" class="breadcrumb-link">Home</router-link>
            <i class="fas fa-chevron-right"></i>
            <span class="breadcrumb-current">For Parents</span>
          </nav>
          <div class="hero-badge">
            <i class="fas fa-heart badge-icon"></i>
            <span>Empowering Parents</span>
          </div>
          <h1 class="servicedetails-hero-title">
            Help Your Child
            <span class="gradient-text-light d-block"
              >Succeed with Mind Growup Jr</span
            >
          </h1>
          <p class="hero-description">
            Give your child the gift of learning through play with 500+
            educational games and activities designed by experts
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
          Why Parents Choose Us
        </span>
        <h2 class="sec-title">Benefits for Your Family</h2>
      </div>

      <div class="row gy-4 mt-5">
        <div class="col-md-6 col-lg-4">
          <div class="feature-card">
            <div class="feature-card-icon-wrap">
              <img
                :src="safeVaultImg"
                alt="Safe & Ad-Free"
                class="feature-card-img"
              />
            </div>
            <h3 class="box-title">Safe & Ad-Free</h3>
            <p class="feature-card-text">
              100% safe environment with no ads, external links, or in-app
              purchases. Your child's privacy is our priority.
            </p>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="feature-card">
            <div class="feature-card-icon-wrap">
              <img
                :src="trackProgressImg"
                alt="Track Progress"
                class="feature-card-img"
              />
            </div>
            <h3 class="box-title">Track Progress</h3>
            <p class="feature-card-text">
              Monitor your child's learning journey with detailed progress
              reports and insights into their strengths.
            </p>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="feature-card">
            <div class="feature-card-icon-wrap">
              <img
                :src="chooseGradeImg"
                alt="Expert Curriculum"
                class="feature-card-img"
              />
            </div>
            <h3 class="box-title">Expert Curriculum</h3>
            <p class="feature-card-text">
              Content aligned with educational standards and designed by
              certified teachers and child development experts.
            </p>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="feature-card">
            <div class="feature-card-icon-wrap">
              <img
                :src="kidsLearningImg"
                alt="Multiple Children"
                class="feature-card-img"
              />
            </div>
            <h3 class="box-title">Multiple Children</h3>
            <p class="feature-card-text">
              Create profiles for up to 3 children with one account. Each child
              gets personalized learning experience.
            </p>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="feature-card">
            <div class="feature-card-icon-wrap">
              <img
                :src="learnAnywhereImg"
                alt="Learn Anywhere"
                class="feature-card-img"
              />
            </div>
            <h3 class="box-title">Learn Anywhere</h3>
            <p class="feature-card-text">
              Access on any device - tablet, computer, or smartphone. Learn at
              home, on the go, or anywhere with internet.
            </p>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="feature-card">
            <div class="feature-card-icon-wrap">
              <img
                :src="rewardsTrophyImg"
                alt="Rewards & Motivation"
                class="feature-card-img"
              />
            </div>
            <h3 class="box-title">Rewards & Motivation</h3>
            <p class="feature-card-text">
              Keep kids engaged with points, badges, and rewards that celebrate
              their achievements and progress.
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
          Simple & Smart
        </span>
        <h2 class="sec-title">How It Works for Parents</h2>
      </div>

      <div class="row gy-4 mt-5">
        <div class="col-lg-3 col-md-6">
          <div class="process-card text-center">
            <div class="process-number">1</div>
            <div class="process-icon">
              <i class="fas fa-user-plus"></i>
            </div>
            <h4 class="process-title">Sign Up</h4>
            <p class="process-text">
              Create your account and add your child's profile in minutes
            </p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6">
          <div class="process-card text-center">
            <div class="process-number">2</div>
            <div class="process-icon">
              <i class="fas fa-sliders-h"></i>
            </div>
            <h4 class="process-title">Customize</h4>
            <p class="process-text">
              Set learning goals and preferences based on your child's needs
            </p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6">
          <div class="process-card text-center">
            <div class="process-number">3</div>
            <div class="process-icon">
              <i class="fas fa-play-circle"></i>
            </div>
            <h4 class="process-title">Let Them Play</h4>
            <p class="process-text">
              Your child explores 500+ games while learning key concepts
            </p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6">
          <div class="process-card text-center">
            <div class="process-number">4</div>
            <div class="process-icon">
              <i class="fas fa-chart-bar"></i>
            </div>
            <h4 class="process-title">Track Progress</h4>
            <p class="process-text">
              Review detailed reports and celebrate achievements together
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Pricing CTA Section -->
  <section class="space">
    <div class="container">
      <div class="cta-box">
        <div class="row align-items-center">
          <div class="col-lg-8">
            <h2 class="cta-title">Start Your Free Trial Today</h2>
            <p class="cta-text">
              Join thousands of parents who trust Mind Growup Jr for their
              children's education. All payments required.
            </p>
          </div>
          <div class="col-lg-4 text-lg-end">
            <router-link to="/pricing" class="vs-btn">
              View Pricing
              <i class="fas fa-arrow-right ms-2"></i>
            </router-link>
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
