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
  <section class="contact-hero-section">
    <div class="contact-hero-bg">
      <div class="contact-hero-particles">
        <span
          v-for="n in 6"
          :key="n"
          class="particle"
          :style="{ animationDelay: `${n * 0.5}s` }"
        ></span>
      </div>
      <div class="container">
        <div class="contact-hero-content">
          <!-- Subtle Breadcrumb -->
          <nav class="modern-breadcrumb">
            <router-link to="/" class="breadcrumb-link">Home</router-link>
            <i class="fas fa-chevron-right"></i>
            <span class="breadcrumb-current">Contact Us</span>
          </nav>

          <!-- Hero Badge -->
          <div class="hero-badge">
            <i class="fas fa-envelope"></i>
            <span>Get In Touch</span>
          </div>

          <!-- Hero Title -->
          <h1 class="contact-hero-title">
            We'd Love to
            <span class="gradient-text-light d-block">Hear From You</span>
          </h1>

          <!-- Hero Description -->
          <p class="contact-hero-description">
            Have questions? We're here to help! Reach out to our friendly team
            anytime
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

  <!--======== Split Contact Section ========-->
  <section class="split-contact-section">
    <div class="container">
      <div class="split-contact-wrapper wow fadeInUp" data-wow-delay="0.1s">
        <div class="row g-0">
          <!-- Left: Green Gradient Info Panel -->
          <div class="col-lg-5">
            <div class="contact-panel">
              <h2 class="panel-title">Let's Start a <br />Conversation</h2>
              <p class="panel-brand">
                with <span class="brand-mind">Mind</span>
                <span class="brand-growup">Growup</span>
                <span class="brand-jr">Jr.</span>
              </p>
              <p class="panel-desc">
                We're happy to help parents, teachers, and schools. Reach out
                anytime!
              </p>

              <div class="panel-items">
                <a href="tel:+919821749524" class="panel-item">
                  <div class="panel-item-icon">
                    <i class="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <span class="panel-item-label">Call Us</span>
                    <span class="panel-item-value">+91 9821749524</span>
                  </div>
                </a>

                <a href="mailto:Info@mindgrowupjr.com" class="panel-item">
                  <div class="panel-item-icon">
                    <i class="fas fa-envelope"></i>
                  </div>
                  <div>
                    <span class="panel-item-label">Email</span>
                    <span class="panel-item-value">Info@mindgrowupjr.com</span>
                  </div>
                </a>

                <div class="panel-item">
                  <div class="panel-item-icon">
                    <i class="fas fa-clock"></i>
                  </div>
                  <div>
                    <span class="panel-item-label">Working Hours</span>
                    <span class="panel-item-value"
                      >Mon - Sat, 9am - 6pm IST</span
                    >
                  </div>
                </div>
              </div>

              <div class="panel-socials">
                <a href="#" class="panel-social panel-social--facebook"
                  ><i class="fab fa-facebook-f"></i
                ></a>
                <a href="#" class="panel-social panel-social--instagram"
                  ><i class="fab fa-instagram"></i
                ></a>
                <a href="#" class="panel-social panel-social--twitter"
                  ><i class="fab fa-twitter"></i
                ></a>
                <a href="#" class="panel-social panel-social--youtube"
                  ><i class="fab fa-youtube"></i
                ></a>
              </div>

              <!-- Decorative circles -->
              <div class="panel-decor panel-decor--1"></div>
              <div class="panel-decor panel-decor--2"></div>
            </div>
          </div>

          <!-- Right: White Form -->
          <div class="col-lg-7">
            <div class="form-panel">
              <h2 class="form-panel-title">Send Us a Message</h2>
              <p class="form-panel-desc">
                Fill the form below and we'll get back to you within 24 hours.
              </p>

              <form class="contact-form-modern">
                <div class="row g-3">
                  <div class="col-md-6">
                    <label class="field-label">Full Name</label>
                    <input
                      type="text"
                      class="field-input"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="field-label">Email Address</label>
                    <input
                      type="email"
                      class="field-input"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="field-label">Phone Number</label>
                    <input
                      type="tel"
                      class="field-input"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="field-label">I am a...</label>
                    <select class="field-input">
                      <option value="" disabled selected>
                        Select your role
                      </option>
                      <option>Parent</option>
                      <option>Teacher</option>
                      <option>School Administrator</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div class="col-12">
                    <label class="field-label">Subject</label>
                    <input
                      type="text"
                      class="field-input"
                      placeholder="How can we help?"
                      required
                    />
                  </div>
                  <div class="col-12">
                    <label class="field-label">Your Message</label>
                    <textarea
                      class="field-input field-textarea"
                      placeholder="Tell us more about your question..."
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  <div class="col-12 mt-2">
                    <button type="submit" class="send-btn">
                      Send Message
                      <i class="fas fa-paper-plane ms-2"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--======== / Split Contact Section ========-->
</template>

<style scoped>
/* ========== Modern Hero Section Styles ========== */
.contact-hero-section {
  position: relative;
  overflow: hidden;
}

.contact-hero-bg {
  position: relative;
  background: linear-gradient(135deg, #4a8b3f 0%, #3a7a30 40%, #1b1464 100%);
  padding: 70px 0 80px;
  min-height: auto;
}

.contact-hero-particles {
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

.contact-hero-content {
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
.contact-hero-title {
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
.contact-hero-description {
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
  .contact-hero-bg {
    padding: 60px 0 70px;
  }

  .contact-hero-title {
    font-size: 34px;
  }

  .contact-hero-description {
    font-size: 14px;
  }
}

@media (max-width: 767px) {
  .contact-hero-bg {
    padding: 50px 0 60px;
  }

  .contact-hero-title {
    font-size: 28px;
  }

  .contact-hero-description {
    font-size: 13px;
  }

  .hero-wave-bottom svg {
    height: 60px;
  }
}

@media (max-width: 575px) {
  .contact-hero-bg {
    padding: 45px 0 50px;
  }

  .contact-hero-title {
    font-size: 24px;
  }

  .contact-hero-description {
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
}

/* ========== Split Contact Section ========== */
.split-contact-section {
  padding: 60px 0 80px;
}

.split-contact-wrapper {
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
}

/* Left Panel */
.contact-panel {
  background: #3f35b5;
  padding: 48px 36px;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  min-height: 600px;
}

.panel-title {
  font-size: 30px;
  font-weight: 800;
  color: white;
  line-height: 1.25;
  margin-bottom: 10px;
}

.panel-brand {
  font-size: 18px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 20px;
}

.brand-mind {
  color: #4a8b3f;
  font-weight: 800;
}
.brand-growup {
  color: white;
  font-weight: 800;
}
.brand-jr {
  color: #e91e8c;
  font-weight: 800;
}

.panel-desc {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.6;
  margin-bottom: 36px;
}

.panel-items {
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex-grow: 1;
}

.panel-item {
  display: flex;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  color: white;
  transition: transform 0.3s;
}

a.panel-item:hover {
  transform: translateX(6px);
  color: white;
}

.panel-item-icon {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
  backdrop-filter: blur(4px);
}

.panel-item-label {
  display: block;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0.7;
  margin-bottom: 2px;
}

.panel-item-value {
  display: block;
  font-size: 15px;
  font-weight: 600;
}

/* Social icons */
.panel-socials {
  display: flex;
  gap: 12px;
  margin-top: 36px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
}

.panel-social {
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
  text-decoration: none;
  transition: all 0.3s;
}

.panel-social--facebook {
  background: #1877f2;
}

.panel-social--instagram {
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
}

.panel-social--instagram i {
  font-size: 18px;
}

.panel-social--twitter {
  background: #1da1f2;
}

.panel-social--youtube {
  background: #ff0000;
}

.panel-social:hover {
  filter: brightness(1.2);
  transform: translateY(-3px);
}

/* Decorative circles */
.panel-decor {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
}

.panel-decor--1 {
  width: 200px;
  height: 200px;
  bottom: -60px;
  right: -60px;
}

.panel-decor--2 {
  width: 120px;
  height: 120px;
  top: -30px;
  right: 40px;
}

/* Right Form Panel */
.form-panel {
  background: white;
  padding: 48px 40px;
  height: 100%;
}

.form-panel-title {
  font-size: 26px;
  font-weight: 800;
  color: #1b1464;
  margin-bottom: 8px;
}

.form-panel-desc {
  font-size: 15px;
  color: #6b7280;
  margin-bottom: 28px;
}

.field-label {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: #1b1464;
  margin-bottom: 6px;
}

.field-input {
  width: 100%;
  padding: 13px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 14px;
  color: #1f2937;
  background: #fafafa;
  transition: all 0.3s ease;
  outline: none;
  appearance: none;
  font-family: inherit;
}

.field-input:focus {
  border-color: #4a8b3f;
  background: white;
  box-shadow: 0 0 0 4px rgba(74, 139, 63, 0.08);
}

.field-input::placeholder {
  color: #b0b7bf;
}

.field-textarea {
  resize: none;
  min-height: 120px;
}

select.field-input {
  cursor: pointer;
  color: #b0b7bf;
}

select.field-input option {
  color: #1f2937;
}

.send-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  background: linear-gradient(135deg, #4a8b3f, #5ea750);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(74, 139, 63, 0.3);
}

.send-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(74, 139, 63, 0.45);
}

.send-btn i {
  transition: transform 0.3s;
}

.send-btn:hover i {
  transform: translateX(4px);
}

/* ========== Responsive ========== */
@media (max-width: 991px) {
  .split-contact-wrapper {
    border-radius: 20px;
  }

  .contact-panel {
    min-height: auto;
    padding: 36px 28px;
  }

  .panel-title {
    font-size: 24px;
  }

  .form-panel {
    padding: 36px 28px;
  }

  .form-panel-title {
    font-size: 22px;
  }
}

@media (max-width: 767px) {
  .split-contact-section {
    padding: 40px 0 60px;
  }

  .contact-panel {
    padding: 32px 24px;
  }

  .panel-title {
    font-size: 22px;
  }

  .form-panel {
    padding: 32px 24px;
  }
}

@media (max-width: 575px) {
  .split-contact-wrapper {
    border-radius: 16px;
  }

  .contact-panel {
    padding: 28px 20px;
  }

  .form-panel {
    padding: 28px 20px;
  }

  .form-panel-title {
    font-size: 20px;
  }

  .send-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
