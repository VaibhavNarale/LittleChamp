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
  <!-- Modern Hero Section -->
  <section class="teamdetails-hero-section">
    <div class="teamdetails-hero-bg">
      <div class="container">
        <div class="teamdetails-hero-content">
          <nav class="modern-breadcrumb">
            <router-link to="/" class="breadcrumb-link">Home</router-link>
            <i class="fas fa-chevron-right"></i>
            <span class="breadcrumb-current">Team Member</span>
          </nav>
          <div class="hero-badge">
            <i class="fas fa-user-circle badge-icon"></i>
            <span>Our Team</span>
          </div>
          <h1 class="teamdetails-hero-title">
            Meet Our
            <span class="gradient-text-light d-block">Team Member</span>
          </h1>
        </div>
      </div>
    </div>
    <div class="hero-wave-bottom">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z" fill="#FFFFFF"/>
      </svg>
    </div>
  </section>

  <!--======== Team Section ========-->
  <section class="team-section space-top space-bottom-shape2-plus">
    <div class="container">
      <div class="row team-details">
        <div class="team-img">
          <img src="/assets/img/team/team-details.png" alt="team member">
        </div>
        <div class="col-lg-10 offset-lg-2">
          <div class="team-content-card bg-smoke">
            <h2 class="team-name">Melandina Julieo</h2>
            <span class="team-desig">Full Time Teacher</span>
            <p class="team-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
            <div class="info-list">
              <ul>
                <li><strong>Experience:</strong>10 Years</li>
                <li><strong>Experience At:</strong>Kid's Training, Kid's Caring.</li>
                <li><strong>Email:</strong><a href="mailto:member@domain.com">member@domain.com</a></li>
                <li><strong>Mobile:</strong><a href="tel:+82012345678">+820-123-456-78</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--======== / Team Section ========-->

  <!--======== Team Section ========-->
  <section class="team-section bg-smoke space-extra">
    <div class="container">
      <div class="row text-center justify-content-center">
        <div class="col-xl-6 col-lg-7 col-md-8 col-sm-9">
          <div class="title-area">
            <span class="sub-title">Our Expert Staff</span>
            <h2 class="sec-title">Most Dedicated Staff For Your Child</h2>
          </div>
        </div>
      </div>
      <div class="row  slider-shadow vs-carousel" data-slide-show="3" data-lg-slide-show="2">
        <!-- Single Team -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="team-card">
            <div class="team-img" data-mask-src="/assets/img/team/t-mask.png">
              <img src="/assets/img/team/t-1.jpg" alt="team">
              <div class="team-content">
                <p class="team-text">Assertively repurpose orthogonal architectures through just in time manufactured products.</p>
                <div class="multi-social">
                  <a href="#"><i class="fab fa-facebook-f"></i></a>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                  <a href="#"><i class="fab fa-pinterest-p"></i></a>
                  <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
            <button class="icon-btn expand-btn"><i class="fas fa-share-alt"></i></button>
            <div class="team-info">
              <h4 class="team-title"><router-link to="/team-details">Bableo Dablo</router-link></h4>
              <span class="team-desig">Kids Specialist</span>
            </div>
          </div>
        </div>
        <!-- Single Team -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="team-card">
            <div class="team-img" data-mask-src="/assets/img/team/t-mask.png">
              <img src="/assets/img/team/t-2.jpg" alt="team">
              <div class="team-content">
                <p class="team-text">Assertively repurpose orthogonal architectures through just in time manufactured products.</p>
                <div class="multi-social">
                  <a href="#"><i class="fab fa-facebook-f"></i></a>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                  <a href="#"><i class="fab fa-pinterest-p"></i></a>
                  <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
            <button class="icon-btn expand-btn"><i class="fas fa-share-alt"></i></button>
            <div class="team-info">
              <h4 class="team-title"><router-link to="/team-details">Rose Marry</router-link></h4>
              <span class="team-desig">Drawing Teacher</span>
            </div>
          </div>
        </div>
        <!-- Single Team -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="team-card">
            <div class="team-img" data-mask-src="/assets/img/team/t-mask.png">
              <img src="/assets/img/team/t-3.jpg" alt="team">
              <div class="team-content">
                <p class="team-text">Assertively repurpose orthogonal architectures through just in time manufactured products.</p>
                <div class="multi-social">
                  <a href="#"><i class="fab fa-facebook-f"></i></a>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                  <a href="#"><i class="fab fa-pinterest-p"></i></a>
                  <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
            <button class="icon-btn expand-btn"><i class="fas fa-share-alt"></i></button>
            <div class="team-info">
              <h4 class="team-title"><router-link to="/team-details">Jabian Joe</router-link></h4>
              <span class="team-desig">Kids Teacher</span>
            </div>
          </div>
        </div>
        <!-- Single Team -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="team-card">
            <div class="team-img" data-mask-src="/assets/img/team/t-mask.png">
              <img src="/assets/img/team/t-4.jpg" alt="team">
              <div class="team-content">
                <p class="team-text">Assertively repurpose orthogonal architectures through just in time manufactured products.</p>
                <div class="multi-social">
                  <a href="#"><i class="fab fa-facebook-f"></i></a>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                  <a href="#"><i class="fab fa-pinterest-p"></i></a>
                  <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
            <button class="icon-btn expand-btn"><i class="fas fa-share-alt"></i></button>
            <div class="team-info">
              <h4 class="team-title"><router-link to="/team-details">Sonia Khan</router-link></h4>
              <span class="team-desig">Kids Specialist</span>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="shape-before"><img src="/assets/img/shape/before-shape-5.png" alt="shape"></div>
    <div class="shape-after"><img src="/assets/img/shape/after-shape-5.png" alt="shape"></div>

    <div class="shape-mockup movingX d-none d-hd-block" data-top="12%" data-left="6%"><img src="/assets/img/icon/doll-1.png" alt="shapes"></div>
    <div class="shape-mockup movingX d-none d-hd-block" data-bottom="9%" data-left="5%"><img src="/assets/img/icon/shoe-1.png" alt="shapes"></div>
    <div class="shape-mockup shapePulse d-none d-hd-block" data-top="12%" data-right="5%"><img src="/assets/img/icon/dog-2.png" alt="shapes"></div>
    <div class="shape-mockup movingX d-none d-hd-block" data-bottom="12%" data-right="3%"><img src="/assets/img/icon/plane-1.png" alt="shapes"></div>
  </section>
  <!--======== / Team Section ========-->

  <!--======== Simple Section ========-->
  <section class="mockup2 space-top-shape2-plus space-bottom-page">
    <div class="container">
      <div class="row gx-60 gy-30 align-items-center">
        <div class="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
          <div class="img-box-1">
            <img src="/assets/img/normal/img-1.jpg" alt="photo">
          </div>
        </div>
        <div class="col-lg-6 wow fadeInRight" data-wow-delay="0.1s">
          <span class="sub-title">Service Benefits</span>
          <h2 class="sec-title">We Are Here To Bring Your Child Next Level</h2>
          <p class="mb-50">Monotonectally conceptualize economically sound value after accurate growth strategies. Quickly parallel task client-centric materials with worldwide technologies. Assertively re-engineer interoperable customer</p>
          <div class="feature-box">
            <div class="feature-icon">
              <img src="/assets/img/icon/t-1.png" alt="icon">
            </div>
            <div class="feature-info">
              <h4 class="feature-title">Full Care Of Your Child</h4>
              <p class="feature-text">Proactively myocardinate high-quality quality vectors rather than collaborative best practices. Continually create go forward total linkage vis-a-vis wireless mindshare.</p>
            </div>
          </div>
          <div class="feature-box">
            <div class="feature-icon">
              <img src="/assets/img/icon/t-2.png" alt="icon">
            </div>
            <div class="feature-info">
              <h4 class="feature-title">Professional Teachers</h4>
              <p class="feature-text">Proactively myocardinate high-quality quality vectors rather than collaborative best practices. Continually create go forward total linkage vis-a-vis wireless mindshare.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--======== / Simple Section ========-->
</template>

<style scoped>
/* Modern Hero Section - Team Details */
.teamdetails-hero-section {
  position: relative;
  overflow: hidden;
  z-index: 10;
}

.teamdetails-hero-bg {
  background: linear-gradient(135deg, #4A8B3F 0%, #5EA750 45%, #FF6584 100%);
  padding: 100px 0 60px;
  position: relative;
  z-index: 1;
}

.teamdetails-hero-content {
  text-align: center;
  position: relative;
  z-index: 2;
}

/* Modern Breadcrumb */
.modern-breadcrumb {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  padding: 10px 24px;
  border-radius: 50px;
  margin-bottom: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.breadcrumb-link {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.breadcrumb-link:hover {
  color: #fff;
  transform: translateX(-2px);
}

.modern-breadcrumb i {
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
}

.breadcrumb-current {
  color: #fff;
  font-weight: 600;
}

/* Hero Badge */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 12px 28px;
  border-radius: 50px;
  margin-bottom: 28px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  animation: float 3s ease-in-out infinite;
}

.badge-icon {
  font-size: 20px;
  color: #fff;
}

.hero-badge span {
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 0.5px;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Hero Title */
.teamdetails-hero-title {
  font-size: 48px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 0;
  color: #fff;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.gradient-text-light {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.7) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Wave Bottom */
.hero-wave-bottom {
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  z-index: 1;
}

.hero-wave-bottom svg {
  display: block;
  width: 100%;
  height: 80px;
}

/* Responsive Design */
@media (max-width: 991px) {
  .teamdetails-hero-bg {
    padding: 80px 0 50px;
  }

  .teamdetails-hero-title {
    font-size: 38px;
  }

  .hero-wave-bottom svg {
    height: 60px;
  }
}

@media (max-width: 767px) {
  .teamdetails-hero-bg {
    padding: 70px 0 40px;
  }

  .teamdetails-hero-title {
    font-size: 32px;
  }

  .modern-breadcrumb {
    padding: 8px 20px;
    gap: 10px;
    font-size: 14px;
  }

  .hero-badge {
    padding: 10px 24px;
    font-size: 14px;
  }

  .badge-icon {
    font-size: 18px;
  }

  .hero-wave-bottom svg {
    height: 50px;
  }
}

@media (max-width: 575px) {
  .teamdetails-hero-bg {
    padding: 60px 0 35px;
  }

  .teamdetails-hero-title {
    font-size: 28px;
  }

  .hero-wave-bottom svg {
    height: 40px;
  }
}
</style>
