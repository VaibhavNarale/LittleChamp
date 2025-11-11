<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { initTemplateScripts, cleanupTemplateScripts } from '@/utils/initScripts'


// Billing toggle state
const isYearly = ref(true)

// FAQ accordion state
const activeFaq = ref(null)

const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index
}

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
  <section class="pricing-hero-section">
    <div class="pricing-hero-bg">
      <div class="container">
        <div class="pricing-hero-content">
          <!-- Subtle Breadcrumb -->

          <!-- Hero Badge -->
          <div class="hero-badge">
            <i class="fas fa-tag"></i>
            <span>Simple, Transparent Pricing</span>
          </div>

          <!-- Hero Title -->
          <h1 class="pricing-hero-title">
            Choose the
            <span class="gradient-text-light d-block">Perfect Plan</span>
            for Your Needs
          </h1>

          <!-- Hero Description -->
          <p class="pricing-hero-description">
            Flexible pricing for families, teachers, and schools. No hidden fees, cancel anytime.
          </p>

          <!-- Billing Toggle -->
          <div class="hero-billing-toggle">
            <div class="billing-toggle d-inline-flex align-items-center gap-3 p-2 rounded-pill">
              <button
                class="billing-option"
                :class="{ 'active': !isYearly }"
                @click="isYearly = false"
              >
                Monthly
              </button>
              <button
                class="billing-option"
                :class="{ 'active': isYearly }"
                @click="isYearly = true"
              >
                <span>Yearly</span>
                <span class="save-badge ms-2">Save 20%</span>
              </button>
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

  <!--======== Pricing Cards ========-->
  <section class="space-extra-bottom mt-12">
    <div class="container">
      <div class="row gy-40 justify-content-center">

        <!-- Free Trial Card -->
        <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="pricing-card">
            <div class="pricing-card-header">
              <div class="plan-icon mb-3">
                <i class="fas fa-gift fa-2x" style="color: #FFB800;"></i>
              </div>
              <h3 class="plan-title">Free Trial</h3>
              <p class="plan-subtitle">Try before you buy</p>
            </div>

            <div class="price-display">
              <span class="currency">$</span>
              <span class="amount">0</span>
            </div>
            <p class="billing-cycle">7 days free access</p>

            <ul class="feature-list">
              <li>
                <i class="fas fa-check-circle text-success"></i>
                <span>10 games per day</span>
              </li>
              <li>
                <i class="fas fa-check-circle text-success"></i>
                <span>All subjects (Math, Reading, Science)</span>
              </li>
              <li>
                <i class="fas fa-check-circle text-success"></i>
                <span>Basic progress tracking</span>
              </li>
              <li>
                <i class="fas fa-check-circle text-success"></i>
                <span>5 worksheets per week</span>
              </li>
              <li class="text-muted">
                <i class="fas fa-times-circle"></i>
                <span>Limited features</span>
              </li>
            </ul>

            <a href="/register?trial=true" class="vs-btn w-100">
              Start Free Trial
            </a>
            <p class="trial-note text-center mt-3 small">No credit card required</p>
          </div>
        </div>

        <!-- For Parents Card (Featured) -->
        <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
          <div class="pricing-card featured">
            <div class="popular-badge">Most Popular</div>

            <div class="pricing-card-header">
              <div class="plan-icon mb-3">
                <i class="fas fa-users fa-2x" style="color: #6C63FF;"></i>
              </div>
              <h3 class="plan-title">For Parents</h3>
              <p class="plan-subtitle">Perfect for families</p>
            </div>

            <div class="price-display">
              <span class="currency">$</span>
              <span class="amount">0</span>
            </div>
            <p class="billing-cycle">Free for now</p>

            <ul class="feature-list">
              <li>
                <i class="fas fa-check-circle text-success"></i>
                <span><strong>Unlimited games</strong> for up to 3 kids</span>
              </li>
              <li>
                <i class="fas fa-check-circle text-success"></i>
                <span>All subjects (Math, Reading, Science)</span>
              </li>
              <li>
                <i class="fas fa-check-circle text-success"></i>
                <span>Detailed progress reports & analytics</span>
              </li>
              <li>
                <i class="fas fa-check-circle text-success"></i>
                <span>Unlimited downloadable worksheets</span>
              </li>
              <li>
                <i class="fas fa-check-circle text-success"></i>
                <span>Personalized learning paths</span>
              </li>
              <li>
                <i class="fas fa-check-circle text-success"></i>
                <span>100% Ad-free experience</span>
              </li>
              <li>
                <i class="fas fa-check-circle text-success"></i>
                <span>Multi-device access (Web, iOS, Android)</span>
              </li>
            </ul>

            <a href="/register?plan=parent" class="vs-btn style2 w-100">
              Start 7-Day Free Trial
              <i class="fas fa-arrow-right ms-2"></i>
            </a>
            <p class="trial-note text-center mt-3 small">No credit card required</p>
          </div>
        </div>

        <!-- For Teachers Card (Free) -->
        <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div class="pricing-card">
            <div class="free-badge">Free Forever</div>

            <div class="pricing-card-header">
              <div class="plan-icon mb-3">
                <i class="fas fa-chalkboard-teacher fa-2x" style="color: #00D2A0;"></i>
              </div>
              <h3 class="plan-title">For Teachers</h3>
              <p class="plan-subtitle">Always free for educators</p>
            </div>

            <div class="price-display">
              <span class="currency">$</span>
              <span class="amount">0</span>
            </div>
            <p class="billing-cycle">Forever free</p>

            <ul class="feature-list">
              <li>
                <i class="fas fa-check-circle text-success"></i>
                <span><strong>All parent plan features</strong></span>
              </li>
              <li>
                <i class="fas fa-check-circle text-success"></i>
                <span>Class management (up to 100 students)</span>
              </li>
              <li>
                <i class="fas fa-check-circle text-success"></i>
                <span>Assign homework & track completion</span>
              </li>
              <li>
                <i class="fas fa-check-circle text-success"></i>
                <span>Class progress reports</span>
              </li>
              <li>
                <i class="fas fa-check-circle text-success"></i>
                <span>Lesson plans & teaching resources</span>
              </li>
              <li>
                <i class="fas fa-check-circle text-success"></i>
                <span>Teacher dashboard & analytics</span>
              </li>
              <li>
                <i class="fas fa-check-circle text-success"></i>
                <span>Priority email support</span>
              </li>
            </ul>

            <a href="/register?plan=teacher" class="vs-btn w-100">
              Sign Up Free
              <i class="fas fa-arrow-right ms-2"></i>
            </a>
            <p class="trial-note text-center mt-3 small">Verify your teacher status</p>
          </div>
        </div>

        <!-- For Schools Card -->
        <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
          <div class="pricing-card">
            <div class="pricing-card-header">
              <div class="plan-icon mb-3">
                <i class="fas fa-school fa-2x" style="color: #FF6584;"></i>
              </div>
              <h3 class="plan-title">For Schools</h3>
              <p class="plan-subtitle">Custom solutions</p>
            </div>

            <div class="price-display">
              <span class="currency">$</span>
              <span class="amount">0</span>
            </div>
            <p class="billing-cycle">Free for now</p>

            <ul class="feature-list">
              <li>
                <i class="fas fa-check-circle text-success"></i>
                <span><strong>All teacher plan features</strong></span>
              </li>
              <li>
                <i class="fas fa-check-circle text-success"></i>
                <span>Unlimited students & classes</span>
              </li>
              <li>
                <i class="fas fa-check-circle text-success"></i>
                <span>District-wide admin dashboard</span>
              </li>
              <li>
                <i class="fas fa-check-circle text-success"></i>
                <span>Custom reporting & analytics</span>
              </li>
              <li>
                <i class="fas fa-check-circle text-success"></i>
                <span>SSO & LMS integration</span>
              </li>
              <li>
                <i class="fas fa-check-circle text-success"></i>
                <span>Dedicated account manager</span>
              </li>
              <li>
                <i class="fas fa-check-circle text-success"></i>
                <span>Training & professional development</span>
              </li>
              <li>
                <i class="fas fa-check-circle text-success"></i>
                <span>FERPA & COPPA compliant</span>
              </li>
            </ul>

            <router-link to="/contact" class="vs-btn w-100">
              Request Demo
              <i class="fas fa-arrow-right ms-2"></i>
            </router-link>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!--======== Comparison Table ========-->
  <section class="space bg-smoke">
    <div class="container">
      <div class="row text-center justify-content-center mb-50 wow fadeInUp" data-wow-delay="0.1s">
        <div class="col-xl-8">
          <div class="title-area">
            <span class="sub-title">Detailed Comparison</span>
            <h2 class="sec-title">Compare All <span class="gradient-text">Features</span></h2>
          </div>
        </div>
      </div>

      <div class="table-responsive wow fadeInUp" data-wow-delay="0.2s">
        <table class="pricing-comparison-table">
          <thead>
            <tr>
              <th class="feature-col text-white">Features</th>
              <th class="text-white">Free Trial</th>
              <th class="featured-col text-white">For Parents</th>
              <th class="text-white">For Teachers</th>
              <th class="text-white">For Schools</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="feature-name"><strong>Number of Students/Children</strong></td>
              <td>1 child</td>
              <td>Up to 3 children</td>
              <td>Up to 100 students</td>
              <td>Unlimited</td>
            </tr>
            <tr>
              <td class="feature-name"><strong>Games & Activities</strong></td>
              <td>10 per day</td>
              <td><i class="fas fa-infinity text-success"></i> Unlimited</td>
              <td><i class="fas fa-infinity text-success"></i> Unlimited</td>
              <td><i class="fas fa-infinity text-success"></i> Unlimited</td>
            </tr>
            <tr>
              <td class="feature-name">All Subjects (Math, Reading, Science)</td>
              <td><i class="fas fa-check text-success"></i></td>
              <td><i class="fas fa-check text-success"></i></td>
              <td><i class="fas fa-check text-success"></i></td>
              <td><i class="fas fa-check text-success"></i></td>
            </tr>
            <tr>
              <td class="feature-name">Personalized Learning Paths</td>
              <td><i class="fas fa-times text-muted"></i></td>
              <td><i class="fas fa-check text-success"></i></td>
              <td><i class="fas fa-check text-success"></i></td>
              <td><i class="fas fa-check text-success"></i></td>
            </tr>
            <tr>
              <td class="feature-name">Progress Reports</td>
              <td>Basic</td>
              <td>Detailed</td>
              <td>Detailed + Class Reports</td>
              <td>Advanced Analytics</td>
            </tr>
            <tr>
              <td class="feature-name">Downloadable Worksheets</td>
              <td>5 per week</td>
              <td><i class="fas fa-infinity text-success"></i> Unlimited</td>
              <td><i class="fas fa-infinity text-success"></i> Unlimited</td>
              <td><i class="fas fa-infinity text-success"></i> Unlimited</td>
            </tr>
            <tr>
              <td class="feature-name">Ad-Free Experience</td>
              <td><i class="fas fa-times text-muted"></i></td>
              <td><i class="fas fa-check text-success"></i></td>
              <td><i class="fas fa-check text-success"></i></td>
              <td><i class="fas fa-check text-success"></i></td>
            </tr>
            <tr>
              <td class="feature-name">Multi-Device Access</td>
              <td>Web only</td>
              <td>Web, iOS, Android</td>
              <td>Web, iOS, Android</td>
              <td>Web, iOS, Android</td>
            </tr>
            <tr>
              <td class="feature-name"><strong>Classroom Management</strong></td>
              <td><i class="fas fa-times text-muted"></i></td>
              <td><i class="fas fa-times text-muted"></i></td>
              <td><i class="fas fa-check text-success"></i></td>
              <td><i class="fas fa-check text-success"></i></td>
            </tr>
            <tr>
              <td class="feature-name">Assign Homework</td>
              <td><i class="fas fa-times text-muted"></i></td>
              <td><i class="fas fa-times text-muted"></i></td>
              <td><i class="fas fa-check text-success"></i></td>
              <td><i class="fas fa-check text-success"></i></td>
            </tr>
            <tr>
              <td class="feature-name">Lesson Plans & Resources</td>
              <td><i class="fas fa-times text-muted"></i></td>
              <td><i class="fas fa-times text-muted"></i></td>
              <td><i class="fas fa-check text-success"></i></td>
              <td><i class="fas fa-check text-success"></i></td>
            </tr>
            <tr>
              <td class="feature-name"><strong>Admin Dashboard</strong></td>
              <td><i class="fas fa-times text-muted"></i></td>
              <td><i class="fas fa-times text-muted"></i></td>
              <td><i class="fas fa-times text-muted"></i></td>
              <td><i class="fas fa-check text-success"></i></td>
            </tr>
            <tr>
              <td class="feature-name">SSO & LMS Integration</td>
              <td><i class="fas fa-times text-muted"></i></td>
              <td><i class="fas fa-times text-muted"></i></td>
              <td><i class="fas fa-times text-muted"></i></td>
              <td><i class="fas fa-check text-success"></i></td>
            </tr>
            <tr>
              <td class="feature-name">Custom Branding</td>
              <td><i class="fas fa-times text-muted"></i></td>
              <td><i class="fas fa-times text-muted"></i></td>
              <td><i class="fas fa-times text-muted"></i></td>
              <td><i class="fas fa-check text-success"></i></td>
            </tr>
            <tr>
              <td class="feature-name"><strong>Support</strong></td>
              <td>Email</td>
              <td>Email</td>
              <td>Priority Email</td>
              <td>Phone + Email + Dedicated Manager</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!--======== FAQ Section ========-->
  <section class="space-extra">
    <div class="container">
      <div class="row text-center justify-content-center mb-50 wow fadeInUp" data-wow-delay="0.1s">
        <div class="col-xl-8">
          <div class="title-area">
            <span class="sub-title">Got Questions?</span>
            <h2 class="sec-title">Frequently Asked <span class="gradient-text">Questions</span></h2>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-xl-10">
          <div class="accordion-wrapper">

            <!-- FAQ 1 -->
            <div class="faq-item wow fadeInUp" data-wow-delay="0.1s">
              <button
                class="faq-question"
                :class="{ 'active': activeFaq === 1 }"
                @click="toggleFaq(1)"
              >
                <span>Can I cancel my subscription anytime?</span>
                <i class="fas fa-chevron-down"></i>
              </button>
              <div class="faq-answer" :class="{ 'show': activeFaq === 1 }">
                <p>Yes! You can cancel your subscription at any time with no questions asked. You'll continue to have access until the end of your current billing period.</p>
              </div>
            </div>

            <!-- FAQ 2 -->
            <div class="faq-item wow fadeInUp" data-wow-delay="0.2s">
              <button
                class="faq-question"
                :class="{ 'active': activeFaq === 2 }"
                @click="toggleFaq(2)"
              >
                <span>Is the 7-day free trial really free?</span>
                <i class="fas fa-chevron-down"></i>
              </button>
              <div class="faq-answer" :class="{ 'show': activeFaq === 2 }">
                <p>Absolutely! No credit card required. You get full access to all features for 7 days with no commitment. If you decide not to continue, your trial simply expires with no charges.</p>
              </div>
            </div>

            <!-- FAQ 3 -->
            <div class="faq-item wow fadeInUp" data-wow-delay="0.3s">
              <button
                class="faq-question"
                :class="{ 'active': activeFaq === 3 }"
                @click="toggleFaq(3)"
              >
                <span>How does the teacher plan verification work?</span>
                <i class="fas fa-chevron-down"></i>
              </button>
              <div class="faq-answer" :class="{ 'show': activeFaq === 3 }">
                <p>After signing up for the free teacher plan, you'll need to verify your educator status with a school email address or provide documentation such as a teacher ID or school employment letter. Verification typically takes 1-2 business days.</p>
              </div>
            </div>

            <!-- FAQ 4 -->
            <div class="faq-item wow fadeInUp" data-wow-delay="0.4s">
              <button
                class="faq-question"
                :class="{ 'active': activeFaq === 4 }"
                @click="toggleFaq(4)"
              >
                <span>Can I switch plans later?</span>
                <i class="fas fa-chevron-down"></i>
              </button>
              <div class="faq-answer" :class="{ 'show': activeFaq === 4 }">
                <p>Yes! You can upgrade or downgrade your plan at any time. If you upgrade, you'll be charged the prorated difference immediately. If you downgrade, the change will take effect at the start of your next billing cycle.</p>
              </div>
            </div>

            <!-- FAQ 5 -->
            <div class="faq-item wow fadeInUp" data-wow-delay="0.5s">
              <button
                class="faq-question"
                :class="{ 'active': activeFaq === 5 }"
                @click="toggleFaq(5)"
              >
                <span>Do you offer refunds?</span>
                <i class="fas fa-chevron-down"></i>
              </button>
              <div class="faq-answer" :class="{ 'show': activeFaq === 5 }">
                <p>Yes! We offer a 30-day money-back guarantee on all paid plans. If you're not completely satisfied within the first 30 days, contact our support team for a full refund, no questions asked.</p>
              </div>
            </div>

            <!-- FAQ 6 -->
            <div class="faq-item wow fadeInUp" data-wow-delay="0.6s">
              <button
                class="faq-question"
                :class="{ 'active': activeFaq === 6 }"
                @click="toggleFaq(6)"
              >
                <span>What payment methods do you accept?</span>
                <i class="fas fa-chevron-down"></i>
              </button>
              <div class="faq-answer" :class="{ 'show': activeFaq === 6 }">
                <p>We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and for school plans, we can arrange invoicing and purchase orders.</p>
              </div>
            </div>

            <!-- FAQ 7 -->
            <div class="faq-item wow fadeInUp" data-wow-delay="0.7s">
              <button
                class="faq-question"
                :class="{ 'active': activeFaq === 7 }"
                @click="toggleFaq(7)"
              >
                <span>Is my child's data safe and private?</span>
                <i class="fas fa-chevron-down"></i>
              </button>
              <div class="faq-answer" :class="{ 'show': activeFaq === 7 }">
                <p>Absolutely. We are fully COPPA and FERPA compliant. We never sell student data to third parties, and all data is encrypted and stored securely. We take privacy and security very seriously.</p>
              </div>
            </div>

            <!-- FAQ 8 -->
            <div class="faq-item wow fadeInUp" data-wow-delay="0.8s">
              <button
                class="faq-question"
                :class="{ 'active': activeFaq === 8 }"
                @click="toggleFaq(8)"
              >
                <span>Can I add more children to my parent plan?</span>
                <i class="fas fa-chevron-down"></i>
              </button>
              <div class="faq-answer" :class="{ 'show': activeFaq === 8 }">
                <p>The parent plan includes up to 3 children. If you need to add more children, please contact our support team and we can provide you with a customized family plan at a discounted rate.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>

  <!--======== Money-Back Guarantee ========-->
  <section class="space bg-smoke-blue">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-8 col-lg-10 wow fadeInUp" data-wow-delay="0.1s">
          <div class="guarantee-card text-center">
            <div class="guarantee-icon mb-4">
              <i class="fas fa-shield-check fa-5x" style="color: #00D2A0;"></i>
            </div>
            <h2 class="sec-title mb-3">30-Day Money-Back Guarantee</h2>
            <p class="fs-md mb-4">Try Mind Jr Group risk-free! If you're not completely satisfied with your subscription within the first 30 days, we'll give you a full refund. No questions asked, no hassle.</p>
            <div class="guarantee-features d-flex flex-wrap justify-content-center gap-4 mt-4">
              <div class="guarantee-feature">
                <i class="fas fa-check-circle text-success fa-2x mb-2"></i>
                <p class="mb-0"><strong>100% Refund</strong></p>
                <p class="small text-muted">Full money back</p>
              </div>
              <div class="guarantee-feature">
                <i class="fas fa-ban text-success fa-2x mb-2"></i>
                <p class="mb-0"><strong>No Questions</strong></p>
                <p class="small text-muted">Hassle-free process</p>
              </div>
              <div class="guarantee-feature">
                <i class="fas fa-clock text-success fa-2x mb-2"></i>
                <p class="mb-0"><strong>30 Days</strong></p>
                <p class="small text-muted">Full month to decide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!--======== Final CTA ========-->
  <section class="space">
    <div class="container">
      <div class="row text-center justify-content-center wow fadeInUp" data-wow-delay="0.1s">
        <div class="col-xl-8">
          <div class="cta-content">
            <h2 class="sec-title mb-3">Ready to Make Learning <span class="gradient-text">Magical</span>?</h2>
            <p class="fs-md mb-4">Join 50 million kids and 100,000+ teachers worldwide</p>
            <div class="d-flex gap-3 justify-content-center flex-wrap">
              <a href="/register" class="vs-btn style2">
                Start Your Free Trial
                <i class="fas fa-arrow-right ms-2"></i>
              </a>
              <router-link to="/contact" class="vs-btn style4">
                Contact Sales
              </router-link>
            </div>
            <p class="small text-muted mt-3">No credit card required • Cancel anytime • 30-day money-back guarantee</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Billing Toggle */
.billing-toggle {
  max-width: 400px;
}

.billing-option {
  padding: 12px 24px;
  border: none;
  background: transparent;
  border-radius: 25px;
  font-weight: 600;
  color: #636E72;
  cursor: pointer;
  transition: all 0.3s;
}

.billing-option.active {
  background: linear-gradient(135deg, #6C63FF, #5A52D5);
  color: white;
}

.save-badge {
  background: #FFB800;
  color: white;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 700;
}

/* Pricing Cards */
.pricing-card {
  background: white;
  border-radius: 24px;
  padding: 40px 30px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.08);
  position: relative;
  transition: all 0.4s;
  border: 2px solid transparent;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.pricing-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(0,0,0,0.15);
}

.pricing-card.featured {
  border-color: #6C63FF;
  transform: scale(1.05);
  box-shadow: 0 20px 80px rgba(108, 99, 255, 0.25);
}

.pricing-card.featured:hover {
  transform: scale(1.05) translateY(-10px);
}

.popular-badge,
.free-badge {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 24px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.popular-badge {
  background: linear-gradient(135deg, #6C63FF, #A29BFE);
  color: white;
}

.free-badge {
  background: linear-gradient(135deg, #00D2A0, #00B894);
  color: white;
}

.pricing-card-header {
  text-align: center;
  margin-bottom: 20px;
}

.plan-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #2D3436;
}

.plan-subtitle {
  color: #636E72;
  font-size: 14px;
}

.price-display {
  text-align: center;
  margin: 20px 0 10px;
  line-height: 1;
}

.currency {
  font-size: 24px;
  vertical-align: super;
  color: #2D3436;
}

.amount {
  font-size: 48px;
  font-weight: 800;
  color: #2D3436;
}

.amount-custom {
  font-size: 36px;
  font-weight: 800;
  color: #6C63FF;
}

.period {
  font-size: 18px;
  color: #636E72;
  font-weight: 400;
}

.billing-cycle {
  text-align: center;
  color: #636E72;
  font-size: 14px;
  margin-bottom: 30px;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 30px 0;
  flex-grow: 1;
}

.feature-list li {
  padding: 12px 0;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 15px;
}

.feature-list i {
  font-size: 18px;
  flex-shrink: 0;
  margin-top: 2px;
}

.trial-note {
  color: #636E72;
}

/* Comparison Table */
.pricing-comparison-table {
  width: 100%;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0,0,0,0.08);
}

.pricing-comparison-table thead {
  background: linear-gradient(135deg, #6C63FF, #5A52D5);
  color: white;
}

.pricing-comparison-table th {
  padding: 20px;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
}

.pricing-comparison-table th.feature-col {
  text-align: left;
}

.pricing-comparison-table th.featured-col {
  background: linear-gradient(135deg, #FF6584, #FF4568);
}

.pricing-comparison-table td {
  padding: 16px 20px;
  text-align: center;
  border-bottom: 1px solid #F0F0F0;
}

.pricing-comparison-table td.feature-name {
  text-align: left;
  font-weight: 500;
}

.pricing-comparison-table tbody tr:hover {
  background: #F7F8FA;
}

/* FAQ Accordion */
.accordion-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.faq-item {
  background: white;
  border-radius: 12px;
  margin-bottom: 16px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.06);
  overflow: hidden;
}

.faq-question {
  width: 100%;
  padding: 20px 24px;
  border: none;
  background: white;
  text-align: left;
  font-size: 18px;
  font-weight: 600;
  color: #2D3436;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s;
}

.faq-question:hover {
  background: #F7F8FA;
}

.faq-question.active {
  color: #6C63FF;
}

.faq-question i {
  transition: transform 0.3s;
  color: #6C63FF;
}

.faq-question.active i {
  transform: rotate(180deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  padding: 0 24px;
}

.faq-answer.show {
  max-height: 300px;
  padding: 0 24px 20px 24px;
}

.faq-answer p {
  color: #636E72;
  line-height: 1.7;
  margin: 0;
}

/* Guarantee Card */
.guarantee-card {
  background: white;
  padding: 60px 40px;
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.1);
}

.guarantee-feature {
  min-width: 150px;
}

/* Responsive */
@media (max-width: 991px) {
  .pricing-card.featured {
    transform: scale(1);
  }

  .pricing-card.featured:hover {
    transform: scale(1) translateY(-10px);
  }
}

/* ========== Modern Hero Section Styles ========== */
.pricing-hero-section {
  position: relative;
  overflow: hidden;
}

.pricing-hero-bg {
  position: relative;
  background: linear-gradient(135deg, #6C63FF 0%, #A29BFE 45%, #FF6584 100%);
  padding: 100px 0 120px;
  min-height: 500px;
}

.pricing-hero-content {
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

.hero-badge i {
  color: #FFE5B4;
  font-size: 18px;
}

.hero-badge span {
  color: white;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 0.5px;
}

/* Hero Title */
.pricing-hero-title {
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
.pricing-hero-description {
  font-size: 19px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 35px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 400;
}

/* Hero Billing Toggle */
.hero-billing-toggle {
  margin-top: 40px;
}

.hero-billing-toggle .billing-toggle {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  max-width: 400px;
}

.hero-billing-toggle .billing-option {
  background: transparent;
}

.hero-billing-toggle .billing-option.active {
  background: rgba(255, 255, 255, 0.95);
  color: #6C63FF;
}

.hero-billing-toggle .save-badge {
  background: #FFB800;
  color: white;
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

/* Responsive Styles */
@media (max-width: 991px) {
  .pricing-hero-bg {
    padding: 80px 0 100px;
    min-height: 450px;
  }

  .pricing-hero-title {
    font-size: 46px;
  }

  .pricing-hero-description {
    font-size: 17px;
  }
}

@media (max-width: 767px) {
  .pricing-hero-bg {
    padding: 60px 0 80px;
    min-height: auto;
  }

  .pricing-hero-title {
    font-size: 36px;
  }

  .pricing-hero-description {
    font-size: 16px;
    margin-bottom: 30px;
  }

  .hero-badge span {
    font-size: 14px;
  }

  .hero-badge i {
    font-size: 16px;
  }

  .hero-wave-bottom svg {
    height: 80px;
  }
}

@media (max-width: 575px) {
  .pricing-hero-bg {
    padding: 74px 0 70px;
  }

  .pricing-hero-title {
    font-size: 32px;
  }

  .pricing-hero-description {
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

  .hero-wave-bottom svg {
    height: 60px;
  }

  .hero-billing-toggle .billing-toggle {
    flex-direction: column;
    align-items: stretch;
    padding: 10px;
  }

  .hero-billing-toggle .billing-option {
    width: 100%;
    text-align: center;
  }
}
</style>
