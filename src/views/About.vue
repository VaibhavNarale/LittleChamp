<script setup>
import { onMounted, onBeforeUnmount, nextTick } from 'vue'
import {
  initTemplateScripts,
  cleanupTemplateScripts,
} from '@/utils/initScripts'

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
      <div class="about-hero-particles">
        <span
          v-for="n in 6"
          :key="n"
          class="particle"
          :style="{ animationDelay: `${n * 0.5}s` }"
        ></span>
      </div>
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
            We're on a mission to help 100 million kids fall in love with
            learning through play-based education
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

  <!--======== Mission Section ========-->
  <section class="mission-section">
    <div class="container">
      <div class="row align-items-center gy-5">
        <div class="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
          <div class="mission-images">
            <div class="mission-img-main">
              <img
                src="/assets/img/normal/square-1.png"
                alt="Kids learning with Mind Growup Jr"
              />
            </div>
            <div class="mission-img-small">
              <img
                src="/assets/img/normal/square-2.png"
                alt="Interactive educational games"
              />
            </div>
            <div class="mission-badge">
              <span class="mission-badge-number">500+</span>
              <span class="mission-badge-text">Kids Learning</span>
            </div>
          </div>
        </div>
        <div class="col-lg-6 wow fadeInRight" data-wow-delay="0.1s">
          <div class="mission-content">
            <span class="section-tag">
              <i class="fas fa-star"></i>
              About Mind Growup Jr
            </span>
            <h2 class="mission-title">
              Mind Growup Jr's
              <span class="title-highlight">Features</span>
            </h2>
            <p class="mission-desc">
              Mind Growup Jr is a leading educational technology platform that
              transforms how children learn. With over 500+ interactive games
              covering Math, Reading, and Craft & Drawing for Pre-K through
              Grade 5, we make learning feel like play while delivering
              curriculum-aligned content that builds essential skills.
            </p>

            <div class="mission-features">
              <div class="mission-feature">
                <div class="feature-icon feature-icon--green">
                  <i class="fas fa-gamepad"></i>
                </div>
                <div>
                  <h4 class="feature-name">Play-Based Learning</h4>
                  <p class="feature-desc">
                    500+ games that make education exciting
                  </p>
                </div>
              </div>
              <div class="mission-feature">
                <div class="feature-icon feature-icon--pink">
                  <i class="fas fa-brain"></i>
                </div>
                <div>
                  <h4 class="feature-name">AI-Powered Paths</h4>
                  <p class="feature-desc">
                    Personalized learning for every child
                  </p>
                </div>
              </div>
              <div class="mission-feature">
                <div class="feature-icon feature-icon--navy">
                  <i class="fas fa-chart-line"></i>
                </div>
                <div>
                  <h4 class="feature-name">Progress Tracking</h4>
                  <p class="feature-desc">
                    Real-time insights for parents & teachers
                  </p>
                </div>
              </div>
            </div>

            <router-link to="/pricing" class="mission-cta">
              Start Free Trial
              <i class="fas fa-arrow-right"></i>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--======== / Mission Section ========-->

  <!--======== About Us Pillars Section ========-->
  <section class="pillars-section">
    <!-- Decorative background shapes -->
    <div class="pillars-bg-shapes">
      <span class="pillar-shape pillar-shape--1"></span>
      <span class="pillar-shape pillar-shape--2"></span>
      <span class="pillar-shape pillar-shape--3"></span>
    </div>

    <div class="container">
      <!-- Section Header -->
      <div class="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
        <span class="section-tag section-tag--center">
          <i class="fas fa-cubes"></i>
          What We Offer
        </span>
        <div class="heading-with-kids">
          <div class="heading-kid heading-kid--left">
            <img
              src="@/assets/kids-football.png"
              alt="Kid kicking football"
              class="heading-kid-img heading-kid-img--left"
            />
          </div>
          <h2 class="section-heading section-heading--kids">
            Our Three Pillars of
            <span class="title-highlight">Growth</span>
          </h2>
          <div class="heading-kid heading-kid--right">
            <img
              src="@/assets/kids-football.png"
              alt="Kid receiving football"
              class="heading-kid-img heading-kid-img--right"
            />
          </div>
        </div>
        <p class="pillars-intro">
          Mind Growup Jr. is a child-focused development center dedicated to
          nurturing young minds through innovation, creativity, and expert
          guidance. We believe every child grows best in a supportive, engaging,
          and inspiring environment.
        </p>
      </div>

      <!-- Three Pillar Cards -->
      <div class="row g-4">
        <!-- Card 1: AI Learning -->
        <div class="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
          <div class="pillar-card pillar-card--green">
            <div class="pillar-number pillar-number--green">1</div>
            <div class="pillar-icon-wrap">
              <div class="pillar-icon pillar-icon--green pillar-icon--img">
                <img
                  src="@/assets/ai-robot-icon.png"
                  alt="AI Learning"
                  class="pillar-icon-img"
                />
              </div>
            </div>
            <h3 class="pillar-title">
              AI Learning &amp;<br />Child Development
            </h3>
            <p class="pillar-desc">
              At Mind Growup Jr., we introduce AI-assisted learning in a
              child-friendly way to build curiosity and smart thinking.
            </p>
            <ul class="pillar-list pillar-list--green">
              <li>
                <i class="fas fa-check-circle"></i>AI as a learning companion
                and interactive friend
              </li>
              <li>
                <i class="fas fa-check-circle"></i>Improving general knowledge
                and academic learning
              </li>
              <li>
                <i class="fas fa-check-circle"></i>Enhancing communication
                skills
              </li>
              <li>
                <i class="fas fa-check-circle"></i>Developing positive behavior
                and emotional growth
              </li>
              <li>
                <i class="fas fa-check-circle"></i>Strengthening language
                development and vocabulary
              </li>
            </ul>
            <div class="pillar-highlight pillar-highlight--green">
              <i class="fas fa-star"></i>
              Grow confidently &amp; think independently
            </div>
          </div>
        </div>

        <!-- Card 2: Mind Activities -->
        <div class="col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
          <div class="pillar-card pillar-card--pink">
            <div class="pillar-number pillar-number--pink">2</div>
            <div class="pillar-icon-wrap">
              <div class="pillar-icon pillar-icon--pink pillar-icon--img">
                <img
                  src="@/assets/gaming-bunny-icon.png"
                  alt="Mind Activities & Gaming"
                  class="pillar-icon-img"
                />
              </div>
            </div>
            <h3 class="pillar-title">
              Mind Activities,<br />Gaming &amp; Creativity
            </h3>
            <p class="pillar-desc">
              Learning becomes powerful when it is fun and engaging. We provide:
            </p>
            <ul class="pillar-list pillar-list--pink">
              <li>
                <i class="fas fa-check-circle"></i>Brain-boosting games to
                improve focus and logical thinking
              </li>
              <li>
                <i class="fas fa-check-circle"></i>Mind activity sessions for
                memory and problem-solving
              </li>
              <li>
                <i class="fas fa-check-circle"></i>Drawing classes to enhance
                creativity
              </li>
              <li>
                <i class="fas fa-check-circle"></i>Craft activities to develop
                fine motor skills and imagination
              </li>
            </ul>
            <div class="pillar-highlight pillar-highlight--pink">
              <i class="fas fa-star"></i>
              Enjoy learning while building life skills
            </div>
          </div>
        </div>

        <!-- Card 3: Pediatric Guidance -->
        <div class="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
          <div class="pillar-card pillar-card--navy">
            <div class="pillar-number pillar-number--navy">3</div>
            <div class="pillar-icon-wrap">
              <div class="pillar-icon pillar-icon--navy pillar-icon--img">
                <img
                  src="@/assets/parent-support-icon.png"
                  alt="Pediatric Guidance & Parent Support"
                  class="pillar-icon-img pillar-icon-img--larger"
                />
              </div>
            </div>
            <h3 class="pillar-title">
              Pediatric Guidance<br />&amp; Parent Support
            </h3>
            <p class="pillar-desc">
              We care about complete child development. That's why we include:
            </p>
            <ul class="pillar-list pillar-list--navy">
              <li>
                <i class="fas fa-check-circle"></i>Interactive sessions with
                experienced pediatric doctors
              </li>
              <li>
                <i class="fas fa-check-circle"></i>Appointment booking for
                one-on-one guidance
              </li>
              <li>
                <i class="fas fa-check-circle"></i>Monthly parent meetings with
                doctors
              </li>
              <li>
                <i class="fas fa-check-circle"></i>Expert advice on healthy
                physical, mental, and emotional growth
              </li>
            </ul>
            <div class="pillar-highlight pillar-highlight--navy">
              <i class="fas fa-star"></i>
              Supporting every step of your child's growth
            </div>
          </div>
        </div>
      </div>

      <!-- Closing Tagline Banner -->
      <div class="pillars-closing wow fadeInUp" data-wow-delay="0.4s">
        <div class="closing-banner">
          <div class="closing-icon">
            <i class="fas fa-graduation-cap"></i>
          </div>
          <p class="closing-text">
            At Mind Growup Jr., we combine <strong>technology</strong>,
            <strong>creativity</strong>, and
            <strong>medical guidance</strong>
            to build confident, intelligent, and happy children.
          </p>
          <h3 class="closing-tagline">
            Growing Young Minds for a Brighter Future
          </h3>
        </div>
      </div>
    </div>
  </section>
  <!--======== / About Us Pillars Section ========-->

  <!--======== Stats Section ========-->
  <section class="stats-section">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="stat-card">
            <div class="stat-icon stat-icon--transparent">
              <img
                src="@/assets/kids-learning.png"
                alt="Kids Learning"
                class="stat-icon-img"
              />
            </div>
            <h3 class="stat-number stat-number--green">Indian</h3>
            <p class="stat-label">Kids Learning</p>
            <div class="stat-bar stat-bar--green"></div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.2s">
          <div class="stat-card">
            <div class="stat-icon stat-icon--transparent">
              <img
                src="@/assets/game-controllers.png"
                alt="Interactive Games"
                class="stat-icon-img"
              />
            </div>
            <h3 class="stat-number stat-number--pink">500+</h3>
            <p class="stat-label">Interactive Games</p>
            <div class="stat-bar stat-bar--pink"></div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
          <div class="stat-card">
            <div class="stat-icon stat-icon--transparent">
              <img
                src="@/assets/free-teachers.png"
                alt="Teachers Trust Us"
                class="stat-icon-img"
              />
            </div>
            <h3 class="stat-number stat-number--navy">100+</h3>
            <p class="stat-label">Teachers Trust Us</p>
            <div class="stat-bar stat-bar--navy"></div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
          <div class="stat-card">
            <div class="stat-icon stat-icon--transparent">
              <img
                src="@/assets/countries-worldwide.png"
                alt="Countries Worldwide"
                class="stat-icon-img"
              />
            </div>
            <h3 class="stat-number stat-number--accent">150+</h3>
            <p class="stat-label">Countries Worldwide</p>
            <div class="stat-bar stat-bar--accent"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--======== / Stats Section ========-->

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
            Create your account in seconds. No credit card required to start.
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
            Select from Pre-K to Grade 5. Pick subjects that interest your
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
    </div>
  </section>
  <!--======== / How It Works Section ========-->

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
            <router-link to="/pricing" class="mission-cta">
              Start Free Trial
              <i class="fas fa-arrow-right"></i>
            </router-link>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="testi-slider-area">
            <div
              id="testi1"
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
                data-slick-prev="#testi1"
                class="icon-btn style-3 arrow-left mb-15"
              >
                <i class="far fa-arrow-left"></i>
              </button>
              <button
                data-slick-next="#testi1"
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
</template>

<style scoped>
/* ========== Modern Hero Section Styles ========== */
.about-hero-section {
  position: relative;
  overflow: hidden;
}

.about-hero-bg {
  position: relative;
  background: linear-gradient(135deg, #4a8b3f 0%, #3a7a30 40%, #1b1464 100%);
  padding: 70px 0 80px;
  min-height: auto;
}

.about-hero-particles {
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
.about-hero-title {
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
.about-hero-description {
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

@keyframes float-badge {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

/* ========== Section Tag (reusable) ========== */
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

/* ========== Mission Section ========== */
.mission-section {
  padding: 80px 0;
}

.mission-images {
  position: relative;
  padding: 20px;
}

.mission-img-main {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
}

.mission-img-main img {
  width: 100%;
  height: 420px;
  object-fit: cover;
  display: block;
}

.mission-img-small {
  position: absolute;
  bottom: -10px;
  right: -10px;
  width: 200px;
  border-radius: 16px;
  overflow: hidden;
  border: 5px solid white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
}

.mission-img-small img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  display: block;
}

.mission-badge {
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(135deg, #4a8b3f, #5ea750);
  color: white;
  padding: 18px 24px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(74, 139, 63, 0.35);
}

.mission-badge-number {
  display: block;
  font-size: 28px;
  font-weight: 900;
  line-height: 1;
}

.mission-badge-text {
  display: block;
  font-size: 12px;
  font-weight: 600;
  opacity: 0.9;
  margin-top: 4px;
}

.mission-content {
  padding-left: 20px;
}

.mission-title {
  font-size: 38px;
  font-weight: 800;
  color: #1b1464;
  line-height: 1.25;
  margin-bottom: 18px;
}

.mission-desc {
  font-size: 16px;
  line-height: 1.7;
  color: #636e72;
  margin-bottom: 30px;
}

.mission-features {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 32px;
}

.mission-feature {
  display: flex;
  align-items: center;
  gap: 16px;
}

.feature-icon {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
}

.feature-icon--green {
  background: rgba(74, 139, 63, 0.1);
  color: #4a8b3f;
}

.feature-icon--pink {
  background: rgba(233, 30, 140, 0.1);
  color: #e91e8c;
}

.feature-icon--navy {
  background: rgba(27, 20, 100, 0.1);
  color: #1b1464;
}

.feature-name {
  font-size: 16px;
  font-weight: 700;
  color: #1b1464;
  margin-bottom: 2px;
}

.feature-desc {
  font-size: 14px;
  color: #636e72;
  margin: 0;
}

.mission-cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 32px;
  background: linear-gradient(135deg, #4a8b3f, #5ea750);
  color: white;
  border-radius: 50px;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 10px 30px rgba(74, 139, 63, 0.3);
  transition: all 0.3s ease;
}

.mission-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(74, 139, 63, 0.45);
  color: white;
}

.mission-cta i {
  transition: transform 0.3s;
  font-size: 13px;
}

.mission-cta:hover i {
  transform: translateX(4px);
}

/* ========== About Us Pillars Section ========== */
.pillars-section {
  padding: 80px 0;
  background: #f8f9fc;
  position: relative;
  overflow: hidden;
}

.pillars-bg-shapes {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.pillar-shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.12;
}

.pillar-shape--1 {
  width: 300px;
  height: 300px;
  background: #4a8b3f;
  top: -80px;
  left: -60px;
}

.pillar-shape--2 {
  width: 250px;
  height: 250px;
  background: #e91e8c;
  top: 40%;
  right: -80px;
}

.pillar-shape--3 {
  width: 200px;
  height: 200px;
  background: #1b1464;
  bottom: -60px;
  left: 30%;
}

/* Heading with kids */
.heading-with-kids {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  margin-bottom: 16px;
}

.section-heading--kids {
  margin-bottom: 0;
  white-space: nowrap;
}

.heading-kid {
  width: 120px;
  height: 100px;
  overflow: hidden;
  flex-shrink: 0;
}

.heading-kid-img {
  height: 100%;
  width: auto;
  object-fit: cover;
}

.heading-kid--left {
  display: flex;
  justify-content: flex-end;
}

.heading-kid-img--left {
  object-position: left;
  clip-path: inset(0 25% 0 0);
  margin-right: -30px;
}

.heading-kid--right {
  display: flex;
  justify-content: flex-start;
}

.heading-kid-img--right {
  object-position: right;
  clip-path: inset(0 0 0 50%);
  margin-left: -60px;
}

.pillars-intro {
  max-width: 700px;
  margin: 0 auto;
  font-size: 16px;
  line-height: 1.7;
  color: #636e72;
}

/* Pillar Card */
.pillar-card {
  background: white;
  border-radius: 20px;
  padding: 36px 28px 28px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
  border-top: 4px solid transparent;
  position: relative;
  transition: all 0.35s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.pillar-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12);
}

.pillar-card--green {
  border-top-color: #4a8b3f;
}

.pillar-card--pink {
  border-top-color: #e91e8c;
}

.pillar-card--navy {
  border-top-color: #1b1464;
}

/* Pillar Number Badge */
.pillar-number {
  position: absolute;
  top: -16px;
  right: 24px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 800;
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.pillar-number--green {
  background: linear-gradient(135deg, #4a8b3f, #5ea750);
}

.pillar-number--pink {
  background: linear-gradient(135deg, #e91e8c, #f04da0);
}

.pillar-number--navy {
  background: linear-gradient(135deg, #1b1464, #2d2494);
}

/* Pillar Icon */
.pillar-icon-wrap {
  text-align: center;
  margin-bottom: 20px;
}

.pillar-icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  border: 3px solid white;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  animation: pillar-float 3s ease-in-out infinite;
  transition: transform 0.3s ease;
}

.pillar-card:hover .pillar-icon {
  transform: scale(1.1);
}

.pillar-icon--green {
  background: rgba(74, 139, 63, 0.1);
  color: #4a8b3f;
}

.pillar-icon--pink {
  background: rgba(233, 30, 140, 0.1);
  color: #e91e8c;
}

.pillar-icon--navy {
  background: rgba(27, 20, 100, 0.1);
  color: #1b1464;
}

.pillar-icon--img {
  padding: 0;
  overflow: visible;
  background: transparent;
  border: none;
  box-shadow: none;
  width: 90px;
  height: 90px;
}

.pillar-icon-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.pillar-icon-img--larger {
  width: 130px;
  height: 130px;
  margin: -30px auto -55px;
  display: block;
}

.pillar-card--navy .pillar-icon-wrap {
  margin-bottom: 0;
}

@keyframes pillar-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

.pillar-card:hover .pillar-icon {
  animation: none;
  transform: scale(1.1);
}

/* Pillar Title */
.pillar-title {
  font-size: 23px;
  font-weight: 800;
  color: #1b1464;
  text-align: center;
  margin-bottom: 12px;
  line-height: 1.3;
}

/* Pillar Description */
.pillar-desc {
  font-size: 16px;
  line-height: 1.65;
  color: #636e72;
  text-align: center;
  margin-bottom: 16px;
}

/* Pillar List */
.pillar-list {
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
  flex-grow: 1;
}

.pillar-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 16px;
  color: #444;
  line-height: 1.5;
  padding: 7px 0;
  border-bottom: 1px solid #f5f5f5;
}

.pillar-list li:last-child {
  border-bottom: none;
}

.pillar-list li i {
  font-size: 14px;
  margin-top: 3px;
  flex-shrink: 0;
}

.pillar-list--green li i {
  color: #4a8b3f;
}

.pillar-list--pink li i {
  color: #e91e8c;
}

.pillar-list--navy li i {
  color: #1b1464;
}

/* Pillar Highlight Tag */
.pillar-highlight {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 18px;
  border-radius: 50px;
  font-size: 13px;
  font-weight: 700;
  margin-top: auto;
}

.pillar-highlight i {
  font-size: 12px;
}

.pillar-highlight--green {
  background: rgba(74, 139, 63, 0.08);
  color: #4a8b3f;
}

.pillar-highlight--pink {
  background: rgba(233, 30, 140, 0.08);
  color: #e91e8c;
}

.pillar-highlight--navy {
  background: rgba(27, 20, 100, 0.08);
  color: #1b1464;
}

/* Closing Tagline Banner */
.pillars-closing {
  margin-top: 48px;
}

.closing-banner {
  background: linear-gradient(135deg, #4a8b3f 0%, #2a6d2a 40%, #1b1464 100%);
  border-radius: 20px;
  padding: 40px 36px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.closing-banner::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      circle at 20% 50%,
      rgba(255, 255, 255, 0.08) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 50%,
      rgba(255, 255, 255, 0.05) 0%,
      transparent 50%
    );
  pointer-events: none;
}

.closing-icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #ffe5b4;
  margin-bottom: 16px;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.closing-text {
  font-size: 16px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.92);
  max-width: 650px;
  margin: 0 auto 12px;
  position: relative;
}

.closing-text strong {
  color: #ffe5b4;
  font-weight: 700;
}

.closing-tagline {
  font-size: 22px;
  font-weight: 800;
  color: white;
  margin: 0;
  position: relative;
  background: linear-gradient(135deg, #ffe5b4, #ffdab9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ========== Stats Section ========== */
.stats-section {
  padding: 0 0 80px;
}

.stat-card {
  background: white;
  border-radius: 20px;
  padding: 36px 28px;
  text-align: center;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
  transition: all 0.35s ease;
  position: relative;
  overflow: hidden;
}

.stat-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
}

.stat-icon {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin: 0 auto 20px;
}

.stat-icon--green {
  background: rgba(74, 139, 63, 0.1);
  color: #4a8b3f !important;
}

.stat-icon--pink {
  background: rgba(233, 30, 140, 0.1);
  color: #e91e8c !important;
}

.stat-icon--navy {
  background: rgba(27, 20, 100, 0.1);
  color: #1b1464 !important;
}

.stat-icon--accent {
  background: rgba(63, 53, 181, 0.1);
  color: #3f35b5 !important;
}

.stat-icon--transparent {
  background: transparent;
  box-shadow: none;
  border-radius: 0;
  width: 80px;
  height: 80px;
}

.stat-icon-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.stat-number {
  font-size: 38px;
  font-weight: 900;
  margin-bottom: 6px;
  line-height: 1;
}

.stat-number--green {
  color: #4a8b3f !important;
}
.stat-number--pink {
  color: #e91e8c !important;
}
.stat-number--navy {
  color: #1b1464 !important;
}
.stat-number--accent {
  color: #3f35b5 !important;
}

.stat-label {
  font-size: 14px;
  font-weight: 600;
  color: #636e72 !important;
  margin: 0 0 16px;
}

.stat-bar {
  height: 4px;
  border-radius: 4px;
  width: 50px;
  margin: 0 auto;
}

.stat-bar--green {
  background: #4a8b3f;
}
.stat-bar--pink {
  background: #e91e8c;
}
.stat-bar--navy {
  background: #1b1464;
}
.stat-bar--accent {
  background: #3f35b5;
}

/* ========== How It Works Section ========== */
.how-it-works-section {
  padding: 80px 0;
  background: #f8f9fc;
}

.steps-grid {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 0;
}

.step-card {
  flex: 1;
  max-width: 240px;
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
  font-size: 18px;
  font-weight: 700;
  color: #1b1464;
  margin-bottom: 8px;
}

.step-desc {
  font-size: 14px;
  color: #636e72;
  line-height: 1.6;
  margin: 0;
}

.step-connector {
  display: flex;
  align-items: center;
  padding-top: 60px;
}

/* ========== Testimonials Section ========== */
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

/* ========== Responsive ========== */
@media (max-width: 991px) {
  .about-hero-bg {
    padding: 60px 0 70px;
  }

  .about-hero-title {
    font-size: 34px;
  }

  .about-hero-description {
    font-size: 14px;
  }

  .mission-section {
    padding: 60px 0;
  }

  .mission-content {
    padding-left: 0;
    margin-top: 40px;
  }

  .mission-title {
    font-size: 32px;
  }

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

  .pillars-section {
    padding: 60px 0;
  }

  .heading-kid {
    width: 100px;
    height: 80px;
  }

  .pillar-title {
    font-size: 18px;
  }

  .closing-banner {
    padding: 32px 28px;
  }

  .closing-tagline {
    font-size: 20px;
  }

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
  .about-hero-bg {
    padding: 50px 0 60px;
  }

  .about-hero-title {
    font-size: 28px;
  }

  .about-hero-description {
    font-size: 13px;
  }

  .hero-wave-bottom svg {
    height: 60px;
  }

  .mission-section {
    padding: 40px 0;
  }

  .mission-img-main img {
    height: 300px;
  }

  .mission-img-small {
    width: 150px;
  }

  .mission-img-small img {
    height: 120px;
  }

  .mission-title {
    font-size: 28px;
  }

  .stats-section {
    padding: 0 0 60px;
  }

  .stat-card {
    padding: 28px 20px;
  }

  .stat-number {
    font-size: 30px;
  }

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

  .pillars-section {
    padding: 40px 0;
  }

  .heading-kid {
    display: none;
  }

  .section-heading--kids {
    white-space: normal;
  }

  .pillars-intro {
    font-size: 14px;
  }

  .pillar-card {
    padding: 30px 22px 22px;
  }

  .pillar-title {
    font-size: 17px;
  }

  .closing-banner {
    padding: 28px 20px;
  }

  .closing-text {
    font-size: 14px;
  }

  .closing-tagline {
    font-size: 18px;
  }

  .testimonials-section {
    padding: 60px 0;
  }

  .testi-heading {
    font-size: 26px;
  }
}

@media (max-width: 575px) {
  .about-hero-bg {
    padding: 45px 0 50px;
  }

  .about-hero-title {
    font-size: 24px;
  }

  .about-hero-description {
    font-size: 13px;
  }

  .modern-breadcrumb {
    padding: 6px 16px;
  }

  .breadcrumb-link,
  .breadcrumb-current {
    font-size: 12px;
  }

  .hero-wave-bottom svg {
    height: 50px;
  }

  .mission-badge {
    padding: 14px 18px;
  }

  .mission-badge-number {
    font-size: 22px;
  }

  .mission-title {
    font-size: 26px;
  }

  .section-heading {
    font-size: 26px;
  }

  .stat-number {
    font-size: 28px;
  }

  .stat-icon {
    width: 48px;
    height: 48px;
    font-size: 20px;
  }

  .pillar-icon {
    width: 60px;
    height: 60px;
    font-size: 24px;
  }

  .pillar-highlight {
    font-size: 12px;
    padding: 8px 14px;
  }

  .pillars-closing {
    margin-top: 32px;
  }

  .closing-icon {
    width: 46px;
    height: 46px;
    font-size: 20px;
  }

  .closing-text {
    font-size: 13px;
  }

  .closing-tagline {
    font-size: 17px;
  }

  .testi-card {
    padding: 22px;
  }
}
</style>
