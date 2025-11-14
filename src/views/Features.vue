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
  <section class="features-hero-section">
    <div class="features-hero-bg">
      <div class="container">
        <div class="features-hero-content">
          <!-- Subtle Breadcrumb -->
          <nav class="modern-breadcrumb">
            <router-link to="/" class="breadcrumb-link">Home</router-link>
            <i class="fas fa-chevron-right"></i>
            <span class="breadcrumb-current">Features</span>
          </nav>

          <!-- Hero Badge -->
          <div class="hero-badge">
            <img class="badge-icon" src="/assets/img/icon/car.png" alt="icon">
            <span>Why Choose Mind Growup Jr</span>
          </div>

          <!-- Hero Title -->
          <h1 class="features-hero-title">
            Everything Your Child
            <span class="gradient-text-light d-block">Needs to Excel</span>
          </h1>

          <!-- Hero Description -->
          <p class="features-hero-description">
            Discover the powerful features that make Mind Growup Jr the #1 choice for 50M+ kids and 100,000+ teachers worldwide
          </p>

          <!-- Trust Indicators -->
          <div class="trust-indicators">
            <div class="trust-item">
              <i class="fas fa-star"></i>
              <span>4.8/5 Rating</span>
            </div>
            <div class="trust-item">
              <i class="fas fa-users"></i>
              <span>50M+ Kids</span>
            </div>
            <div class="trust-item">
              <i class="fas fa-chalkboard-teacher"></i>
              <span>100K+ Teachers</span>
            </div>
          </div>
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

  <!--======== Core Features Grid ========-->
  <section class="space-bottom mt-8">
    <div class="container">
      <div class="row gy-40">
        <!-- Feature 1: Interactive Games -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="feature-card-enhanced">
            <div class="feature-icon-wrapper mb-4">
              <div class="feature-icon" style="background: linear-gradient(135deg, #6C63FF, #A29BFE);">
                <i class="fas fa-gamepad fa-3x text-white"></i>
              </div>
            </div>
            <h3 class="h4 mb-3">4000+ Interactive Games</h3>
            <p class="mb-3">Kids learn through play with engaging, curriculum-aligned games that adapt to their skill level in real-time.</p>
            <ul class="feature-highlights">
              <li><i class="fas fa-check text-success"></i> Math, Reading & Science</li>
              <li><i class="fas fa-check text-success"></i> Pre-K to Grade 5</li>
              <li><i class="fas fa-check text-success"></i> New games added monthly</li>
            </ul>
          </div>
        </div>

        <!-- Feature 2: Adaptive Learning -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
          <div class="feature-card-enhanced">
            <div class="feature-icon-wrapper mb-4">
              <div class="feature-icon" style="background: linear-gradient(135deg, #FF6584, #FF4568);">
                <i class="fas fa-brain fa-3x text-white"></i>
              </div>
            </div>
            <h3 class="h4 mb-3">Adaptive Technology</h3>
            <p class="mb-3">Our AI-powered system automatically adjusts difficulty and pace to match each child's unique learning style.</p>
            <ul class="feature-highlights">
              <li><i class="fas fa-check text-success"></i> Real-time difficulty adjustment</li>
              <li><i class="fas fa-check text-success"></i> Personalized learning paths</li>
              <li><i class="fas fa-check text-success"></i> Smart recommendations</li>
            </ul>
          </div>
        </div>

        <!-- Feature 3: Progress Tracking -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div class="feature-card-enhanced">
            <div class="feature-icon-wrapper mb-4">
              <div class="feature-icon" style="background: linear-gradient(135deg, #4ECDC4, #44A08D);">
                <i class="fas fa-chart-line fa-3x text-white"></i>
              </div>
            </div>
            <h3 class="h4 mb-3">Detailed Progress Reports</h3>
            <p class="mb-3">Track your child's learning journey with comprehensive analytics and weekly progress reports.</p>
            <ul class="feature-highlights">
              <li><i class="fas fa-check text-success"></i> Weekly email reports</li>
              <li><i class="fas fa-check text-success"></i> Skill mastery tracking</li>
              <li><i class="fas fa-check text-success"></i> Visual progress charts</li>
            </ul>
          </div>
        </div>

        <!-- Feature 4: Safe Environment -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
          <div class="feature-card-enhanced">
            <div class="feature-icon-wrapper mb-4">
              <div class="feature-icon" style="background: linear-gradient(135deg, #00D2A0, #00B894);">
                <i class="fas fa-shield-check fa-3x text-white"></i>
              </div>
            </div>
            <h3 class="h4 mb-3">100% Safe & Ad-Free</h3>
            <p class="mb-3">COPPA and FERPA compliant platform with no ads, ensuring a safe learning environment for kids.</p>
            <ul class="feature-highlights">
              <li><i class="fas fa-check text-success"></i> Zero advertisements</li>
              <li><i class="fas fa-check text-success"></i> Data privacy protected</li>
              <li><i class="fas fa-check text-success"></i> Age-appropriate content</li>
            </ul>
          </div>
        </div>

        <!-- Feature 5: Multi-Device -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div class="feature-card-enhanced">
            <div class="feature-icon-wrapper mb-4">
              <div class="feature-icon" style="background: linear-gradient(135deg, #6C5CE7, #A29BFE);">
                <i class="fas fa-devices fa-3x text-white"></i>
              </div>
            </div>
            <h3 class="h4 mb-3">Learn Anywhere, Anytime</h3>
            <p class="mb-3">Access on web, iOS, Android, or Chromebook. Learning continues seamlessly across all devices.</p>
            <ul class="feature-highlights">
              <li><i class="fas fa-check text-success"></i> Web browser access</li>
              <li><i class="fas fa-check text-success"></i> iOS & Android apps</li>
              <li><i class="fas fa-check text-success"></i> Offline mode available</li>
            </ul>
          </div>
        </div>

        <!-- Feature 6: Curriculum Aligned -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
          <div class="feature-card-enhanced">
            <div class="feature-icon-wrapper mb-4">
              <div class="feature-icon" style="background: linear-gradient(135deg, #FD79A8, #E84393);">
                <i class="fas fa-book-open fa-3x text-white"></i>
              </div>
            </div>
            <h3 class="h4 mb-3">Curriculum Aligned</h3>
            <p class="mb-3">All content aligns with Common Core standards and state-specific curricula for Pre-K through Grade 5.</p>
            <ul class="feature-highlights">
              <li><i class="fas fa-check text-success"></i> Common Core aligned</li>
              <li><i class="fas fa-check text-success"></i> State standards covered</li>
              <li><i class="fas fa-check text-success"></i> Teacher reviewed content</li>
            </ul>
          </div>
        </div>

        <!-- Feature 7: Worksheets -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
          <div class="feature-card-enhanced">
            <div class="feature-icon-wrapper mb-4">
              <div class="feature-icon" style="background: linear-gradient(135deg, #FFB800, #FFA502);">
                <i class="fas fa-file-download fa-3x text-white"></i>
              </div>
            </div>
            <h3 class="h4 mb-3">Printable Worksheets</h3>
            <p class="mb-3">Thousands of downloadable worksheets for offline practice and reinforcement of concepts.</p>
            <ul class="feature-highlights">
              <li><i class="fas fa-check text-success"></i> 10,000+ worksheets</li>
              <li><i class="fas fa-check text-success"></i> Answer keys included</li>
              <li><i class="fas fa-check text-success"></i> Organized by grade & skill</li>
            </ul>
          </div>
        </div>

        <!-- Feature 8: Rewards System -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.8s">
          <div class="feature-card-enhanced">
            <div class="feature-icon-wrapper mb-4">
              <div class="feature-icon" style="background: linear-gradient(135deg, #F093FB, #F5576C);">
                <i class="fas fa-trophy fa-3x text-white"></i>
              </div>
            </div>
            <h3 class="h4 mb-3">Engaging Rewards System</h3>
            <p class="mb-3">Kids earn badges, trophies, and unlock achievements as they progress, keeping them motivated.</p>
            <ul class="feature-highlights">
              <li><i class="fas fa-check text-success"></i> 200+ badges to earn</li>
              <li><i class="fas fa-check text-success"></i> Virtual trophies & certificates</li>
              <li><i class="fas fa-check text-success"></i> Customizable avatars</li>
            </ul>
          </div>
        </div>

        <!-- Feature 9: Parent Dashboard -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.9s">
          <div class="feature-card-enhanced">
            <div class="feature-icon-wrapper mb-4">
              <div class="feature-icon" style="background: linear-gradient(135deg, #667EEA, #764BA2);">
                <i class="fas fa-user-friends fa-3x text-white"></i>
              </div>
            </div>
            <h3 class="h4 mb-3">Parent Dashboard</h3>
            <p class="mb-3">Monitor progress, set learning goals, and receive weekly email updates on your child's achievements.</p>
            <ul class="feature-highlights">
              <li><i class="fas fa-check text-success"></i> Real-time progress updates</li>
              <li><i class="fas fa-check text-success"></i> Set learning goals</li>
              <li><i class="fas fa-check text-success"></i> Weekly email summaries</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!--======== For Teachers Section ========-->
  <section class="space bg-smoke">
    <div class="container">
      <div class="row text-center justify-content-center mb-50 wow fadeInUp" data-wow-delay="0.1s">
        <div class="col-xl-8">
          <div class="title-area">
            <span class="sub-title">For Educators</span>
            <h2 class="sec-title"><span class="gradient-text">Free</span> Tools for Teachers</h2>
            <p class="mt-3">Powerful classroom management features, completely free for all educators</p>
          </div>
        </div>
      </div>

      <div class="row gy-40">
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="teacher-feature-card">
            <div class="icon-badge">
              <i class="fas fa-users-class fa-2x" style="color: #6C63FF;"></i>
            </div>
            <h4>Class Management</h4>
            <p>Manage up to 100 students per class with easy rostering and organization tools.</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
          <div class="teacher-feature-card">
            <div class="icon-badge">
              <i class="fas fa-tasks fa-2x" style="color: #FF6584;"></i>
            </div>
            <h4>Assign Homework</h4>
            <p>Create and assign custom homework with automatic grading and progress tracking.</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div class="teacher-feature-card">
            <div class="icon-badge">
              <i class="fas fa-chart-bar fa-2x" style="color: #00D2A0;"></i>
            </div>
            <h4>Class Reports</h4>
            <p>View detailed analytics on class performance and individual student progress.</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
          <div class="teacher-feature-card">
            <div class="icon-badge">
              <i class="fas fa-book-reader fa-2x" style="color: #4ECDC4;"></i>
            </div>
            <h4>Lesson Plans</h4>
            <p>Access hundreds of ready-made lesson plans aligned with curriculum standards.</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div class="teacher-feature-card">
            <div class="icon-badge">
              <i class="fas fa-print fa-2x" style="color: #FFB800;"></i>
            </div>
            <h4>Teaching Resources</h4>
            <p>Download worksheets, activity guides, and supplementary materials.</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
          <div class="teacher-feature-card">
            <div class="icon-badge">
              <i class="fas fa-chalkboard-teacher fa-2x" style="color: #6C5CE7;"></i>
            </div>
            <h4>Differentiated Instruction</h4>
            <p>Easily assign different activities to students based on their skill levels.</p>
          </div>
        </div>
      </div>

      <div class="text-center mt-50 wow fadeInUp" data-wow-delay="0.7s">
        <router-link to="/for-teachers" class="vs-btn style2">
          Learn More About Teacher Features
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
            <span class="sub-title">Safe & Secure</span>
            <h2 class="sec-title">Your Child's Safety is Our <span class="gradient-text">Top Priority</span></h2>
            <p class="mb-4">We take privacy and security seriously. Mind Growup Jr is fully compliant with all major children's privacy regulations.</p>
          </div>

          <div class="security-features">
            <div class="security-item mb-4">
              <div class="d-flex align-items-start gap-3">
                <div class="security-icon">
                  <i class="fas fa-check-circle fa-2x text-success"></i>
                </div>
                <div>
                  <h5>COPPA Compliant</h5>
                  <p class="mb-0 text-muted">Full compliance with Children's Online Privacy Protection Act</p>
                </div>
              </div>
            </div>

            <div class="security-item mb-4">
              <div class="d-flex align-items-start gap-3">
                <div class="security-icon">
                  <i class="fas fa-check-circle fa-2x text-success"></i>
                </div>
                <div>
                  <h5>FERPA Compliant</h5>
                  <p class="mb-0 text-muted">Meets Family Educational Rights and Privacy Act standards</p>
                </div>
              </div>
            </div>

            <div class="security-item mb-4">
              <div class="d-flex align-items-start gap-3">
                <div class="security-icon">
                  <i class="fas fa-check-circle fa-2x text-success"></i>
                </div>
                <div>
                  <h5>Data Encryption</h5>
                  <p class="mb-0 text-muted">All data encrypted in transit and at rest using industry-standard protocols</p>
                </div>
              </div>
            </div>

            <div class="security-item mb-4">
              <div class="d-flex align-items-start gap-3">
                <div class="security-icon">
                  <i class="fas fa-check-circle fa-2x text-success"></i>
                </div>
                <div>
                  <h5>No Third-Party Ads</h5>
                  <p class="mb-0 text-muted">100% ad-free experience with zero tracking pixels</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 wow fadeInRight" data-wow-delay="0.2s">
          <div class="security-image-wrapper text-center">
            <img src="/assets/img/shape/shape-slide-1.png" alt="Security" class="img-fluid">
          </div>
        </div>
      </div>
    </div>
  </section>

  <!--======== CTA Section ========-->
  <section class="cta-section space-shape-plus" data-bg-src="/assets/img/bg/cta-4.jpg" data-opacity="8" data-overlay="custom">
    <div class="container text-center z-index-common">
      <div class="title-area mb-35 wow fadeInUp" data-wow-delay="0.1s">
        <span class="sub-title text-white">Ready to Get Started?</span>
        <h2 class="sec-title text-white">Start Your 7-Day Free Trial Today</h2>
        <p class="text-white fs-md mt-3">No credit card required • Access all features • Cancel anytime</p>
      </div>
      <div class="d-flex gap-3 justify-content-center flex-wrap">
        <a href="/register" class="vs-btn wave-btn">
          Start Free Trial
          <i class="fas fa-arrow-right ms-2"></i>
        </a>
        <router-link to="/pricing" class="vs-btn style4">
          View Pricing
        </router-link>
      </div>
    </div>
    <div class="section-before style-2"><img src="/assets/img/shape/main-shape-before.png" alt="shape"></div>
    <div class="section-after style-2"><img src="/assets/img/shape/main-shape-after.png" alt="shape"></div>
  </section>
  <!--======== / CTA Section ========-->
</template>

<style scoped>
/* Feature Cards Enhanced */
.feature-card-enhanced {
  background: white;
  padding: 40px 30px;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.08);
  transition: all 0.4s ease;
  height: 100%;
  border: 2px solid transparent;
}

.feature-card-enhanced:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(0,0,0,0.15);
  border-color: #6C63FF;
}

.feature-icon-wrapper {
  text-align: center;
}

.feature-icon {
  width: 100px;
  height: 100px;
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
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
  color: #636E72;
}

.feature-highlights i {
  font-size: 16px;
}

/* Teacher Feature Cards */
.teacher-feature-card {
  background: white;
  padding: 35px 25px;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.06);
  text-align: center;
  transition: all 0.3s;
  height: 100%;
}

.teacher-feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 50px rgba(0,0,0,0.12);
}

.icon-badge {
  width: 80px;
  height: 80px;
  background: #F7F8FA;
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
  color: #2D3436;
  font-weight: 700;
}

.teacher-feature-card p {
  color: #636E72;
  line-height: 1.6;
  margin: 0;
}

/* Security Features */
.security-features {
  margin-top: 30px;
}

.security-item h5 {
  font-weight: 700;
  color: #2D3436;
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
  background: radial-gradient(circle, rgba(108, 99, 255, 0.1), transparent);
  border-radius: 50%;
  z-index: -1;
}

/* Responsive */
@media (max-width: 991px) {
  .feature-icon {
    width: 80px;
    height: 80px;
  }

  .feature-icon i {
    font-size: 2rem !important;
  }
}

/* ========== Modern Hero Section Styles ========== */
.features-hero-section {
  position: relative;
  overflow: hidden;
}

.features-hero-bg {
  position: relative;
  background: linear-gradient(135deg, #6C63FF 0%, #A29BFE 45%, #FF6584 100%);
  padding: 100px 0 120px;
  min-height: 450px;
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

.badge-icon {
  width: 24px;
  height: 24px;
  animation: wiggle 2s ease-in-out infinite;
}

.hero-badge span {
  color: white;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 0.5px;
}

/* Hero Title */
.features-hero-title {
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
.features-hero-description {
  font-size: 19px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 35px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 400;
}

/* Trust Indicators */
.trust-indicators {
  display: flex;
  justify-content: center;
  gap: 35px;
  flex-wrap: wrap;
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.trust-item i {
  color: #FFE5B4;
  font-size: 20px;
}

.trust-item span {
  color: white;
  font-weight: 600;
  font-size: 15px;
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

@keyframes wiggle {
  0%, 100% { transform: rotate(-5deg); }
  50% { transform: rotate(5deg); }
}

/* Responsive Styles */
@media (max-width: 991px) {
  .features-hero-bg {
    padding: 80px 0 100px;
    min-height: 400px;
  }

  .features-hero-title {
    font-size: 46px;
  }

  .features-hero-description {
    font-size: 17px;
  }

  .trust-indicators {
    gap: 20px;
  }
}

@media (max-width: 767px) {
  .features-hero-bg {
    padding: 60px 0 80px;
    min-height: auto;
  }

  .features-hero-title {
    font-size: 36px;
  }

  .features-hero-description {
    font-size: 16px;
    margin-bottom: 30px;
  }

  .hero-badge span {
    font-size: 14px;
  }

  .badge-icon {
    width: 20px;
    height: 20px;
  }

  .trust-indicators {
    gap: 15px;
  }

  .trust-item {
    padding: 10px 18px;
  }

  .trust-item span {
    font-size: 14px;
  }

  .hero-wave-bottom svg {
    height: 80px;
  }
}

@media (max-width: 575px) {
  .features-hero-bg {
    padding: 74px 0 70px;
  }

  .features-hero-title {
    font-size: 32px;
  }

  .features-hero-description {
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

  .trust-indicators {
    flex-direction: column;
    gap: 12px;
    align-items: center;
  }

  .trust-item {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }

  .hero-wave-bottom svg {
    height: 60px;
  }
}
</style>
