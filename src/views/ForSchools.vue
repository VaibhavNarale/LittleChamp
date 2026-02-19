<script setup>
import { onMounted, onBeforeUnmount, nextTick } from 'vue'
import {
  initTemplateScripts,
  cleanupTemplateScripts,
} from '@/utils/initScripts'
import unlimitedStudentsImg from '@/assets/unlimited-students.png'
import ferpaCoppaImg from '@/assets/ferpa-coppa.png'
import schoolAnalyticsImg from '@/assets/school-analytics.png'
import dedicatedManagerImg from '@/assets/dedicated-manager.png'
import ssoIntegrationImg from '@/assets/sso-integration.png'
import professionalDevImg from '@/assets/professional-development.png'

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
            <span class="breadcrumb-current">For Schools</span>
          </nav>
          <div class="hero-badge">
            <i class="fas fa-school badge-icon"></i>
            <span>Enterprise Solutions</span>
          </div>
          <h1 class="servicedetails-hero-title">
            Transform Your School
            <span class="gradient-text-light d-block">with Mind Growup Jr</span>
          </h1>
          <p class="hero-description">
            Comprehensive learning platform for schools with unlimited students,
            advanced analytics, and dedicated support
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

  <!-- Features Section -->
  <section class="space">
    <div class="container">
      <div class="title-area text-center">
        <span class="sub-title">
          <i class="fas fa-building"></i>
          School Solutions
        </span>
        <h2 class="sec-title">Everything Your School Needs</h2>
      </div>

      <div class="row gy-4 mt-5">
        <div class="col-md-6 col-lg-4">
          <div class="feature-card">
            <div class="feature-card-icon-wrap">
              <img
                :src="unlimitedStudentsImg"
                alt="Unlimited Students & Teachers"
                class="feature-card-img"
              />
            </div>
            <h3 class="box-title">Unlimited Students & Teachers</h3>
            <p class="feature-card-text">
              Add unlimited students and teachers across multiple grades and
              classes with no per-user fees.
            </p>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="feature-card">
            <div class="feature-card-icon-wrap">
              <img
                :src="ferpaCoppaImg"
                alt="FERPA & COPPA Compliant"
                class="feature-card-img"
              />
            </div>
            <h3 class="box-title">FERPA & COPPA Compliant</h3>
            <p class="feature-card-text">
              Full compliance with educational data privacy regulations. Student
              data is secure and never shared.
            </p>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="feature-card">
            <div class="feature-card-icon-wrap">
              <img
                :src="schoolAnalyticsImg"
                alt="School-Wide Analytics"
                class="feature-card-img"
              />
            </div>
            <h3 class="box-title">School-Wide Analytics</h3>
            <p class="feature-card-text">
              Comprehensive analytics dashboard for administrators to track
              performance across grades and classes.
            </p>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="feature-card">
            <div class="feature-card-icon-wrap">
              <img
                :src="dedicatedManagerImg"
                alt="Dedicated Account Manager"
                class="feature-card-img"
              />
            </div>
            <h3 class="box-title">Dedicated Account Manager</h3>
            <p class="feature-card-text">
              Personal account manager to help with setup, training, and ongoing
              support for your school.
            </p>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="feature-card">
            <div class="feature-card-icon-wrap">
              <img
                :src="ssoIntegrationImg"
                alt="SSO & LMS Integration"
                class="feature-card-img"
              />
            </div>
            <h3 class="box-title">SSO & LMS Integration</h3>
            <p class="feature-card-text">
              Single sign-on support and seamless integration with popular LMS
              platforms like Google Classroom and Canvas.
            </p>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="feature-card">
            <div class="feature-card-icon-wrap">
              <img
                :src="professionalDevImg"
                alt="Professional Development"
                class="feature-card-img"
              />
            </div>
            <h3 class="box-title">Professional Development</h3>
            <p class="feature-card-text">
              Free training sessions and ongoing professional development
              resources for all teachers and staff.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Benefits Section -->
  <section class="space bg-smoke">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="title-area">
            <span class="sub-title">
              <i class="fas fa-trophy"></i>
              Proven Results
            </span>
            <h2 class="sec-title">Why Schools Choose Us</h2>
          </div>
          <div class="stats-grid mt-4">
            <div class="stat-item">
              <h3 class="stat-number">500+</h3>
              <p class="stat-label">Partner Schools</p>
            </div>
            <div class="stat-item">
              <h3 class="stat-number">100+</h3>
              <p class="stat-label">Active Students</p>
            </div>
            <div class="stat-item">
              <h3 class="stat-number">98%</h3>
              <p class="stat-label">Satisfaction Rate</p>
            </div>
            <div class="stat-item">
              <h3 class="stat-number">35%</h3>
              <p class="stat-label">Performance Boost</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="benefits-list">
            <div class="benefit-item">
              <i class="fas fa-check-circle"></i>
              <div>
                <h5>Cost-Effective Solution</h5>
                <p>
                  Significant savings compared to traditional learning resources
                  and software licenses
                </p>
              </div>
            </div>
            <div class="benefit-item">
              <i class="fas fa-check-circle"></i>
              <div>
                <h5>Easy Implementation</h5>
                <p>
                  Quick setup with minimal IT requirements. Get started in just
                  a few days
                </p>
              </div>
            </div>
            <div class="benefit-item">
              <i class="fas fa-check-circle"></i>
              <div>
                <h5>Flexible Deployment</h5>
                <p>
                  Works on any device - desktops, tablets, Chromebooks, and
                  interactive whiteboards
                </p>
              </div>
            </div>
            <div class="benefit-item">
              <i class="fas fa-check-circle"></i>
              <div>
                <h5>24/7 Technical Support</h5>
                <p>
                  Priority support from our dedicated school support team
                  whenever you need it
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Pricing Section -->
  <section class="space">
    <div class="container">
      <div class="title-area text-center">
        <span class="sub-title">
          <i class="fas fa-school"></i>
          School Pricing
        </span>
        <h2 class="sec-title">Simple, Transparent Pricing</h2>
        <p class="sec-text">
          Special pricing for schools with flexible payment options
        </p>
      </div>

      <div class="row justify-content-center mt-5">
        <div class="col-lg-4 col-md-6">
          <div class="pricing-card">
            <div class="pricing-badge">SMALL SCHOOLS</div>
            <h3 class="pricing-title">Starter</h3>
            <div class="pricing-price">
              <span class="price-amount">₹1,500</span>
              <span class="price-period">/year</span>
            </div>
            <ul class="pricing-features">
              <li><i class="fas fa-check"></i> Up to 250 students</li>
              <li><i class="fas fa-check"></i> 10 teacher accounts</li>
              <li><i class="fas fa-check"></i> Basic analytics</li>
              <li><i class="fas fa-check"></i> Email support</li>
              <li><i class="fas fa-check"></i> LMS integration</li>
            </ul>
            <router-link to="/contact" class="vs-btn style-outline"
              >Contact Sales</router-link
            >
          </div>
        </div>

        <div class="col-lg-4 col-md-6">
          <div class="pricing-card featured">
            <div class="pricing-badge featured-badge">MOST POPULAR</div>
            <h3 class="pricing-title">Professional</h3>
            <div class="pricing-price">
              <span class="price-amount">₹3,500</span>
              <span class="price-period">/year</span>
            </div>
            <ul class="pricing-features">
              <li><i class="fas fa-check"></i> Up to 750 students</li>
              <li><i class="fas fa-check"></i> Unlimited teachers</li>
              <li><i class="fas fa-check"></i> Advanced analytics</li>
              <li><i class="fas fa-check"></i> Priority support</li>
              <li><i class="fas fa-check"></i> Professional development</li>
              <li><i class="fas fa-check"></i> Dedicated account manager</li>
            </ul>
            <router-link to="/contact" class="vs-btn"
              >Contact Sales</router-link
            >
          </div>
        </div>

        <div class="col-lg-4 col-md-6">
          <div class="pricing-card">
            <div class="pricing-badge">LARGE DISTRICTS</div>
            <h3 class="pricing-title">Enterprise</h3>
            <div class="pricing-price">
              <span class="price-amount">Custom</span>
            </div>
            <ul class="pricing-features">
              <li><i class="fas fa-check"></i> Unlimited students</li>
              <li><i class="fas fa-check"></i> Unlimited teachers</li>
              <li><i class="fas fa-check"></i> Custom analytics</li>
              <li><i class="fas fa-check"></i> 24/7 phone support</li>
              <li><i class="fas fa-check"></i> SSO integration</li>
              <li><i class="fas fa-check"></i> API access</li>
              <li><i class="fas fa-check"></i> Custom content creation</li>
            </ul>
            <router-link to="/contact" class="vs-btn style-outline"
              >Contact Sales</router-link
            >
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
            <h2 class="cta-title">
              Ready to Bring Mind Growup Jr to Your School?
            </h2>
            <p class="cta-text">
              Contact our school sales team for a free demo, pricing
              information, and custom implementation plan.
            </p>
          </div>
          <div class="col-lg-4 text-lg-end">
            <router-link to="/contact" class="vs-btn style-white">
              Schedule a Demo
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
  background: linear-gradient(135deg, #1b1464 0%, #4a8b3f 100%);
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
  color: #1b1464;
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
  box-shadow: 0 10px 30px rgba(255, 107, 157, 0.15);
}

.feature-card-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #4a8b3f, #1b1464);
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
  animation: school-float 3s ease-in-out infinite;
}

.feature-card:hover .feature-card-img {
  transform: scale(1.1) rotate(3deg);
  animation: none;
}

@keyframes school-float {
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

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.stat-item {
  text-align: center;
  padding: 20px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
}

.stat-number {
  font-size: 40px;
  font-weight: 800;
  color: #4a8b3f;
  margin-bottom: 5px;
}

.stat-label {
  color: #636e72;
  margin: 0;
  font-weight: 600;
}

.benefits-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.benefit-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
}

.benefit-item i {
  color: #4a8b3f;
  font-size: 24px;
  flex-shrink: 0;
  margin-top: 3px;
}

.benefit-item h5 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 5px;
  color: #2d3436;
}

.benefit-item p {
  color: #636e72;
  margin: 0;
  font-size: 14px;
}

.pricing-card {
  background: white;
  padding: 40px 30px;
  border-radius: 20px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.pricing-card.featured {
  transform: scale(1.05);
  box-shadow: 0 10px 40px rgba(255, 107, 157, 0.2);
}

.pricing-badge {
  background: #636e72;
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  display: inline-block;
  margin-bottom: 20px;
}

.featured-badge {
  background: linear-gradient(135deg, #4a8b3f, #1b1464);
}

.pricing-title {
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 20px;
  color: #2d3436;
}

.pricing-price {
  margin-bottom: 30px;
}

.price-amount {
  font-size: 48px;
  font-weight: 800;
  color: #4a8b3f;
  display: block;
}

.price-period {
  font-size: 16px;
  color: #636e72;
}

.pricing-features {
  list-style: none;
  padding: 0;
  margin: 0 0 30px 0;
  flex-grow: 1;
}

.pricing-features li {
  padding: 12px 0;
  color: #2d3436;
  text-align: left;
}

.pricing-features i {
  color: #4a8b3f;
  margin-right: 10px;
}

.cta-box {
  background: linear-gradient(135deg, #4a8b3f 0%, #1b1464 100%);
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
  color: #1b1464;
}

.vs-btn.style-white:hover {
  background: rgba(255, 255, 255, 0.9);
}

.vs-btn.style-outline {
  background: transparent;
  border: 2px solid #4a8b3f;
  color: #4a8b3f;
}

.vs-btn.style-outline:hover {
  background: #4a8b3f;
  color: white;
}

/* Tablet and Below */
@media (max-width: 991px) {
  .servicedetails-hero-title {
    font-size: 36px;
  }

  .pricing-card.featured {
    transform: scale(1);
    margin-bottom: 30px;
  }

  .pricing-card {
    margin-bottom: 30px;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 20px;
  }

  .cta-box {
    padding: 40px 30px;
    text-align: center;
  }

  .cta-box .vs-btn {
    margin-top: 20px;
  }

  .feature-card {
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

  .feature-icon {
    width: 50px;
    height: 50px;
    font-size: 20px;
  }

  .feature-title {
    font-size: 18px;
  }

  .stats-grid {
    grid-template-columns: 1fr !important;
    gap: 20px;
  }

  .stat-number {
    font-size: 36px;
  }

  .pricing-card {
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }

  .pricing-card .vs-btn {
    padding: 12px 28px !important;
    font-size: 14px !important;
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

  .feature-card {
    padding: 20px;
  }

  .pricing-card {
    padding: 25px;
  }

  .price-amount {
    font-size: 40px;
  }

  .pricing-features li {
    font-size: 14px;
  }
}
</style>
