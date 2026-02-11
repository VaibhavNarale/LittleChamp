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
  <section class="event-hero-section">
    <div class="event-hero-bg">
      <div class="container">
        <div class="event-hero-content">
          <nav class="modern-breadcrumb">
            <router-link to="/" class="breadcrumb-link">Home</router-link>
            <i class="fas fa-chevron-right"></i>
            <span class="breadcrumb-current">Events</span>
          </nav>
          <div class="hero-badge">
            <i class="fas fa-calendar-star badge-icon"></i>
            <span>Upcoming Events</span>
          </div>
          <h1 class="event-hero-title">
            Join Our Exciting
            <span class="gradient-text-light d-block">Learning Events</span>
          </h1>
          <p class="event-hero-subtitle">Discover fun activities and educational events for your child</p>
        </div>
      </div>
    </div>
    <div class="hero-wave-bottom">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z" fill="#FFFFFF"/>
      </svg>
    </div>
  </section>

  <!--======== Event Section ========-->
  <section class="event-section bg-smoke space-page">
    <div class="container">
      <div class="row gy-70">
        <!-- Single Event -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="event-box">
            <div class="event-img">
              <router-link to="/event-details">
                <img src="/assets/img/event/e-1.jpg" alt="event">
              </router-link>
            </div>
            <div class="event-content">
              <span class="event-date">25 Oct</span>
              <h4 class="event-title"><router-link to="/event-details">Happy Halloween</router-link></h4>
              <ul class="event-info">
                <li><i class="fal fa-clock"></i>Nov 25 - Dec 5. Time: 12:00pm - 5:00pm</li>
                <li><i class="fal fa-map-marker-alt"></i>New York 242 Dancing Street Lolion</li>
              </ul>
              <router-link to="/event-details" class="link-btn">More Details <i class="far fa-long-arrow-right"></i></router-link>
            </div>
          </div>
        </div>
        <!-- Single Event -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="event-box">
            <div class="event-img">
              <router-link to="/event-details">
                <img src="/assets/img/event/e-2.jpg" alt="event">
              </router-link>
            </div>
            <div class="event-content">
              <span class="event-date">25 Jan</span>
              <h4 class="event-title"><router-link to="/event-details">Mother's Day Event</router-link></h4>
              <ul class="event-info">
                <li><i class="fal fa-clock"></i>Nov 25 - Dec 5. Time: 12:00pm - 5:00pm</li>
                <li><i class="fal fa-map-marker-alt"></i>New York 242 Dancing Street Lolion</li>
              </ul>
              <router-link to="/event-details" class="link-btn">More Details <i class="far fa-long-arrow-right"></i></router-link>
            </div>
          </div>
        </div>
        <!-- Single Event -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="event-box">
            <div class="event-img">
              <router-link to="/event-details">
                <img src="/assets/img/event/e-3.jpg" alt="event">
              </router-link>
            </div>
            <div class="event-content">
              <span class="event-date">25 Dec</span>
              <h4 class="event-title"><router-link to="/event-details">Kids Drawing Event</router-link></h4>
              <ul class="event-info">
                <li><i class="fal fa-clock"></i>Nov 25 - Dec 5. Time: 12:00pm - 5:00pm</li>
                <li><i class="fal fa-map-marker-alt"></i>New York 242 Dancing Street Lolion</li>
              </ul>
              <router-link to="/event-details" class="link-btn">More Details <i class="far fa-long-arrow-right"></i></router-link>
            </div>
          </div>
        </div>
        <!-- Single Event -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="event-box">
            <div class="event-img">
              <router-link to="/event-details">
                <img src="/assets/img/event/e-4.jpg" alt="event">
              </router-link>
            </div>
            <div class="event-content">
              <span class="event-date">25 Feb</span>
              <h4 class="event-title"><router-link to="/event-details">Father's Day Event</router-link></h4>
              <ul class="event-info">
                <li><i class="fal fa-clock"></i>Nov 25 - Dec 5. Time: 12:00pm - 5:00pm</li>
                <li><i class="fal fa-map-marker-alt"></i>New York 242 Dancing Street Lolion</li>
              </ul>
              <router-link to="/event-details" class="link-btn">More Details <i class="far fa-long-arrow-right"></i></router-link>
            </div>
          </div>
        </div>
        <!-- Single Event -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="event-box">
            <div class="event-img">
              <router-link to="/event-details">
                <img src="/assets/img/event/e-5.jpg" alt="event">
              </router-link>
            </div>
            <div class="event-content">
              <span class="event-date">20 Mar</span>
              <h4 class="event-title"><router-link to="/event-details">Holiday Events</router-link></h4>
              <ul class="event-info">
                <li><i class="fal fa-clock"></i>Nov 25 - Dec 5. Time: 12:00pm - 5:00pm</li>
                <li><i class="fal fa-map-marker-alt"></i>New York 242 Dancing Street Lolion</li>
              </ul>
              <router-link to="/event-details" class="link-btn">More Details <i class="far fa-long-arrow-right"></i></router-link>
            </div>
          </div>
        </div>
        <!-- Single Event -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="event-box">
            <div class="event-img">
              <router-link to="/event-details">
                <img src="/assets/img/event/e-6.jpg" alt="event">
              </router-link>
            </div>
            <div class="event-content">
              <span class="event-date">26 Mar</span>
              <h4 class="event-title"><router-link to="/event-details">Independent Events</router-link></h4>
              <ul class="event-info">
                <li><i class="fal fa-clock"></i>Nov 25 - Dec 5. Time: 12:00pm - 5:00pm</li>
                <li><i class="fal fa-map-marker-alt"></i>New York 242 Dancing Street Lolion</li>
              </ul>
              <router-link to="/event-details" class="link-btn">More Details <i class="far fa-long-arrow-right"></i></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--======== / Event Section ========-->
</template>

<style scoped>
/* Modern Hero Section - Event */
.event-hero-section {
  position: relative;
  overflow: hidden;
  z-index: 10;
}

.event-hero-bg {
  background: linear-gradient(135deg, #4A8B3F 0%, #5EA750 45%, #FF6584 100%);
  padding: 120px 0 80px;
  position: relative;
  z-index: 1;
}

.event-hero-content {
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
.event-hero-title {
  font-size: 56px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 20px;
  color: #fff;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.gradient-text-light {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.7) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Hero Subtitle */
.event-hero-subtitle {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.95);
  margin: 0 auto;
  max-width: 600px;
  line-height: 1.6;
  font-weight: 500;
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
  .event-hero-bg {
    padding: 100px 0 60px;
  }

  .event-hero-title {
    font-size: 42px;
  }

  .event-hero-subtitle {
    font-size: 18px;
  }

  .hero-wave-bottom svg {
    height: 60px;
  }
}

@media (max-width: 767px) {
  .event-hero-bg {
    padding: 80px 0 50px;
  }

  .event-hero-title {
    font-size: 36px;
  }

  .event-hero-subtitle {
    font-size: 16px;
    padding: 0 15px;
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
  .event-hero-bg {
    padding: 70px 0 40px;
  }

  .event-hero-title {
    font-size: 32px;
  }

  .event-hero-subtitle {
    font-size: 15px;
  }

  .hero-wave-bottom svg {
    height: 40px;
  }
}
</style>
