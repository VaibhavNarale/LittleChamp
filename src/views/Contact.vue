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
  <section class="contact-hero-section">
    <div class="contact-hero-bg">
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
            Have questions? We're here to help! Reach out to our friendly team anytime
          </p>
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

  <!--======== Contact Us Section ========-->
  <section class="contact-section space-page">
    <div class="container">
      <div class="row gx-50 gy-30">
        <div class="col-lg-5 wow fadeInLeft" data-wow-delay="0.1s">
          <div class="contact-form-box">
            <h2 class="contact-title">Leave a Message</h2>
            <p class="mb-35">Intrinsicly reinvent fully tested portals and performance based scenarios. Phosfluorescently exploit extensive opportunities for future.</p>
            <form action="https://html.vecurosoft.com/knirpse/demo/assets/mail.php" method="POST" class="contact-form ajax-contact">
              <div class="row">
                <div class="form-group col-12">
                  <label for="name" class="form-label">Your Name*</label>
                  <input type="text" class="form-control" name="name" id="name" placeholder="David Smith..." required>
                </div>
                <div class="form-group col-12">
                  <label for="email" class="form-label">Your Email*</label>
                  <input type="email" class="form-control" name="email" id="email" placeholder="info@example.com" required>
                </div>
                <div class="form-group col-12">
                  <label for="message" class="form-label">Your Message*</label>
                  <textarea class="form-control" name="message" id="message" placeholder="Describe Your Opinion" required></textarea>
                </div>
                <div class="form-group col-12">
                  <button type="submit" class="vs-btn wave-btn">Send Now</button>
                </div>
              </div>
              <p class="form-messages mb-0 mt-3"></p>
            </form>
          </div>
        </div>
        <div class="col-lg-7 wow fadeInRight" data-wow-delay="0.1s">
          <div class="contact-info-box">
            <h2 class="contact-title">Our Information</h2>
            <div class="info-media">
              <div class="media-icon">
                <img src="/assets/img/icon/location.png" alt="icon">
              </div>
              <div class="media-body">
                <h4 class="info-title">Office Address:</h4>
                <p class="info-text">3556 Hartford Way Vlg, Mount Pleasant, <br>SC, 29466, Australia.</p>
              </div>
            </div>
            <div class="info-media">
              <div class="media-icon">
                <img src="/assets/img/icon/phone.png" alt="icon">
              </div>
              <div class="media-body">
                <h4 class="info-title">Call Us For Help:</h4>
                <p class="info-text"><a href="tel:+25925632562">+259-2563-2562</a> (or) <a href="tel:+25636542156">+256-3654-2156</a></p>
              </div>
            </div>
            <div class="info-media">
              <div class="media-icon">
                <img src="/assets/img/icon/email.png" alt="icon">
              </div>
              <div class="media-body">
                <h4 class="info-title">Mail info:</h4>
                <p class="info-text"><a href="mailto:example@quera.com">example@quera.com</a> <a href="mailto:info@example.com">info@example.com</a></p>
              </div>
            </div>
            <div class="contact-location">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2557.0337709506216!2d8.722988251963706!3d50.14180007933297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0f52ee6af359%3A0x2213de038ec1bd12!2svecuro_themes%20%7C%20Webdesign%20%26%20Development!5e0!3m2!1sde!2sde!4v1648732976877!5m2!1sde!2sde" allowfullscreen="" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--======== / Contact Us Section ========-->
</template>

<style scoped>
/* ========== Modern Hero Section Styles ========== */
.contact-hero-section {
  position: relative;
  overflow: hidden;
}

.contact-hero-bg {
  position: relative;
  background: linear-gradient(135deg, #6C63FF 0%, #A29BFE 45%, #FF6584 100%);
  padding: 100px 0 120px;
  min-height: 450px;
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
.contact-hero-title {
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
.contact-hero-description {
  font-size: 19px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 35px;
  max-width: 700px;
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
  .contact-hero-bg {
    padding: 80px 0 100px;
    min-height: 400px;
  }

  .contact-hero-title {
    font-size: 46px;
  }

  .contact-hero-description {
    font-size: 17px;
  }
}

@media (max-width: 767px) {
  .contact-hero-bg {
    padding: 60px 0 80px;
    min-height: auto;
  }

  .contact-hero-title {
    font-size: 36px;
  }

  .contact-hero-description {
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
  .contact-hero-bg {
    padding: 74px 0 70px;
  }

  .contact-hero-title {
    font-size: 32px;
  }

  .contact-hero-description {
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
}
</style>
