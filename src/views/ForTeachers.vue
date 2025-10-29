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
  <!-- Hero Section -->
  <section class="servicedetails-hero-section">
    <div class="servicedetails-hero-bg">
      <div class="container">
        <div class="servicedetails-hero-content">
          <nav class="modern-breadcrumb">
            <router-link to="/" class="breadcrumb-link">Home</router-link>
            <i class="fas fa-chevron-right"></i>
            <span class="breadcrumb-current">For Teachers</span>
          </nav>
          <div class="hero-badge">
            <i class="fas fa-chalkboard-teacher badge-icon"></i>
            <span>Supporting Educators</span>
          </div>
          <h1 class="servicedetails-hero-title">
            Empower Your Classroom
            <span class="gradient-text-light d-block">with Mind Jr Group</span>
          </h1>
          <p class="hero-description">
            Free premium access for teachers! Engage your students with interactive learning games and track their progress in real-time
          </p>
        </div>
      </div>
    </div>
    <div class="hero-wave-bottom">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z" fill="#FFFFFF"/>
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
          <h3 class="banner-title">100% Free Premium Access for Teachers!</h3>
          <p class="banner-text">
            We believe in supporting educators. Get full access to all premium features at no cost when you register as a teacher.
          </p>
        </div>
        <div class="col-lg-4 text-lg-end">
          <router-link to="/register" class="vs-btn style-white">
            Register as Teacher
            <i class="fas fa-arrow-right ms-2"></i>
          </router-link>
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
          Teacher Benefits
        </span>
        <h2 class="sec-title">Everything You Need in the Classroom</h2>
      </div>

      <div class="row gy-4 mt-5">
        <div class="col-md-6 col-lg-4">
          <div class="feature-card">
            <div class="feature-card-icon">
              <i class="fas fa-users-class"></i>
            </div>
            <h3 class="box-title">Manage Multiple Classes</h3>
            <p class="feature-card-text">
              Create and manage unlimited classes with up to 40 students per class. Perfect for all grade levels.
            </p>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="feature-card">
            <div class="feature-card-icon">
              <i class="fas fa-tasks"></i>
            </div>
            <h3 class="box-title">Assign Activities</h3>
            <p class="feature-card-text">
              Easily assign specific games and activities to individuals, groups, or your entire class with one click.
            </p>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="feature-card">
            <div class="feature-card-icon">
              <i class="fas fa-chart-line"></i>
            </div>
            <h3 class="box-title">Real-Time Progress</h3>
            <p class="feature-card-text">
              Monitor student progress in real-time with detailed analytics and insights on individual performance.
            </p>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="feature-card">
            <div class="feature-card-icon">
              <i class="fas fa-clipboard-list"></i>
            </div>
            <h3 class="box-title">Standards-Aligned</h3>
            <p class="feature-card-text">
              All content is curriculum-aligned and mapped to educational standards for easy integration.
            </p>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="feature-card">
            <div class="feature-card-icon">
              <i class="fas fa-file-alt"></i>
            </div>
            <h3 class="box-title">Automated Reports</h3>
            <p class="feature-card-text">
              Generate comprehensive reports for students, parents, and administrators with just a few clicks.
            </p>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="feature-card">
            <div class="feature-card-icon">
              <i class="fas fa-desktop"></i>
            </div>
            <h3 class="box-title">Interactive Whiteboard</h3>
            <p class="feature-card-text">
              Display activities on your interactive whiteboard for whole-class instruction and engagement.
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
          Teacher Features
        </span>
        <h2 class="sec-title">What Teachers Get</h2>
      </div>

      <div class="row mt-5 justify-content-center">
        <div class="col-lg-8">
          <div class="features-list">
            <div class="feature-item">
              <i class="fas fa-check-circle"></i>
              <span>Unlimited student accounts</span>
            </div>
            <div class="feature-item">
              <i class="fas fa-check-circle"></i>
              <span>Access to all 4000+ educational games</span>
            </div>
            <div class="feature-item">
              <i class="fas fa-check-circle"></i>
              <span>Customizable learning paths</span>
            </div>
            <div class="feature-item">
              <i class="fas fa-check-circle"></i>
              <span>Parent communication tools</span>
            </div>
            <div class="feature-item">
              <i class="fas fa-check-circle"></i>
              <span>Printable worksheets and resources</span>
            </div>
            <div class="feature-item">
              <i class="fas fa-check-circle"></i>
              <span>Professional development resources</span>
            </div>
            <div class="feature-item">
              <i class="fas fa-check-circle"></i>
              <span>Priority support from our team</span>
            </div>
            <div class="feature-item">
              <i class="fas fa-check-circle"></i>
              <span>Regular content updates</span>
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
          Teacher Testimonials
        </span>
        <h2 class="sec-title">What Teachers Say</h2>
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
              "Mind Jr Group has transformed how I teach mathematics. My students are more engaged and their test scores have improved significantly!"
            </p>
            <div class="testimonial-author">
              <h5>Sarah Johnson</h5>
              <span>3rd Grade Teacher, Chicago</span>
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
              "The progress tracking tools are incredible. I can easily see which students need extra help and tailor my instruction accordingly."
            </p>
            <div class="testimonial-author">
              <h5>Michael Chen</h5>
              <span>2nd Grade Teacher, San Francisco</span>
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
              "My students love earning rewards and competing with each other. It's made learning fun and my classroom is more productive than ever!"
            </p>
            <div class="testimonial-author">
              <h5>Emily Rodriguez</h5>
              <span>1st Grade Teacher, Miami</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="space-bottom">
    <div class="container">
      <div class="cta-box">
        <div class="row align-items-center">
          <div class="col-lg-8">
            <h2 class="cta-title">Ready to Transform Your Classroom?</h2>
            <p class="cta-text">
              Join thousands of teachers using Mind Jr Group. Register now and get instant access to all premium features for free!
            </p>
          </div>
          <div class="col-lg-4 text-lg-end">
            <router-link to="/register" class="vs-btn style-white">
              Get Started Free
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
  background: linear-gradient(135deg, #00D2A0 0%, #00B894 100%);
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
  color: #00B894;
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
  background: linear-gradient(135deg, #FFD93D 0%, #FFC107 100%);
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
  color: #2D3436;
}

.banner-text {
  font-size: 16px;
  margin: 0;
  color: #2D3436;
  opacity: 0.9;
}

.feature-card {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s, box-shadow 0.3s;
  height: 100%;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 210, 160, 0.15);
}

.feature-card-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #00D2A0, #00B894);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  margin-bottom: 20px;
}

.box-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 15px;
  color: #2D3436;
}

.feature-card-text {
  color: #636E72;
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
  border-bottom: 1px solid #E0E0E0;
}

.feature-item:last-child {
  border-bottom: none;
}

.feature-item i {
  color: #00D2A0;
  font-size: 24px;
  flex-shrink: 0;
}

.feature-item span {
  font-size: 16px;
  color: #2D3436;
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
  color: #FFD93D;
  margin-bottom: 15px;
}

.testimonial-text {
  color: #636E72;
  font-style: italic;
  line-height: 1.6;
  margin-bottom: 20px;
}

.testimonial-author h5 {
  font-size: 18px;
  font-weight: 700;
  color: #2D3436;
  margin-bottom: 5px;
}

.testimonial-author span {
  color: #636E72;
  font-size: 14px;
}

.cta-box {
  background: linear-gradient(135deg, #00D2A0 0%, #00B894 100%);
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
  color: #00B894;
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
