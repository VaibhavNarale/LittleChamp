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
  <section class="eventdetails-hero-section">
    <div class="eventdetails-hero-bg">
      <div class="container">
        <div class="eventdetails-hero-content">
          <nav class="modern-breadcrumb">
            <router-link to="/" class="breadcrumb-link">Home</router-link>
            <i class="fas fa-chevron-right"></i>
            <router-link to="/event" class="breadcrumb-link">Events</router-link>
            <i class="fas fa-chevron-right"></i>
            <span class="breadcrumb-current">Event Details</span>
          </nav>
          <div class="hero-badge">
            <i class="fas fa-calendar-check badge-icon"></i>
            <span>Event Information</span>
          </div>
          <h1 class="eventdetails-hero-title">
            Explore
            <span class="gradient-text-light d-block">Event Details</span>
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

  <!--======== Event Section ========-->
  <section class="event-section bg-smoke space-page">
    <div class="container">
      <div class="event-details">
        <div class="row gy-30">
          <div class="col-xl-7 col-lg-6 event-slider-area">
            <div class="event-img-slider vs-carousel" id="eventimgslide" data-slide-show="1" data-md-slide-show="1">
              <div class="img-box-1">
                <img src="/assets/img/event/e-details-1.jpg" alt="event">
              </div>
              <div class="img-box-1">
                <img src="/assets/img/event/e-details-2.jpg" alt="event 2">
              </div>
              <div class="img-box-1">
                <img src="/assets/img/event/e-details-3.jpg" alt="event 3">
              </div>
            </div>
            <div class="vs-icon-box">
              <button data-slick-prev="#eventimgslide" class="icon-btn style-4 arrow-left"><i class="far fa-arrow-left"></i></button>
              <button data-slick-next="#eventimgslide" class="icon-btn style-4 arrow-right"><i class="far fa-arrow-right"></i></button>
            </div>
          </div>
          <div class="col-xl-5 col-lg-6">
            <div class="event-location">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2557.0337709506216!2d8.722988251963706!3d50.14180007933297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0f52ee6af359%3A0x2213de038ec1bd12!2svecuro_themes%20%7C%20Webdesign%20%26%20Development!5e0!3m2!1sde!2sde!4v1648732976877!5m2!1sde!2sde" allowfullscreen="" loading="lazy"></iframe>
            </div>
          </div>
        </div>
        <div class="row mt-40 mb-35 align-items-center">
          <div class="col-lg-7">
            <div class="event-title-box">
              <div class="date">
                <span class="day">25</span>
                <span class="month">Oct</span>
              </div>
              <div class="title-info">
                <h2 class="h2 event-title">Wonder Park Adventures </h2>
                <ul class="event-info">
                  <li><i class="fal fa-clock"></i>Time: 12:00pm - 5:00pm</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-5 text-start text-lg-end">
            <div class="two-btns">
              <a href="#" class="vs-btn wave-btn">Save On Calendar</a>
              <a href="#" class="vs-btn wave-btn">Ical Export</a>
            </div>
          </div>
        </div>
        <p>Proactively enable reliable partnerships whereas process-centric potentialities. Authoritatively integrate covalent vortals whereas virtual e-markets. Competently empower customized customer service with standards compliant infrastructures. Energistically deliver integrated e-tailers after reliable technologies. Conveniently customize dynamic architectures with high-quality e-commerce. Efficiently productize just in time process improvements whereas transparent action items. Dynamically incubate multidisciplinary models vis-a-vis 2.0 ROI. Efficiently plagiarize fully researched experiences through bricks-and-clicks expertise. Seamlessly reconceptualize flexible content before viral web-readiness. Globally transform scalable content without process-centric meta-services.</p>
        <div class="row mt-10 gy-30">
          <div class="col-lg-6 col-md-7">
            <h3 class="h2">What will You Learn?</h3>
            <div class="check-list style-2">
              <ul>
                <li>Children will enjoy having this little rabbit hopping together while they walk.</li>
                <li>When pulled, it will move and hop like a real rabbit.</li>
                <li>Hopping Rabbit has a sweet face, flexible ears and real wood wheels</li>
                <li>Big blue rear wheels to help prevent the pull-along from toppling over</li>
                <li>Smaller green front wheels make the toy maneuverable</li>
                <li>Energistically deliver integrated e-tailers after reliable technologies.</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6 col-md-5">
            <h3 class="h2">Event Details</h3>
            <ul class="event-info-list">
              <li><i class="fas fa-calendar-alt"></i>Date: June 22, 2024</li>
              <li><i class="fas fa-clock"></i>Time: 8:00 am - 5:00 pm</li>
              <li><i class="fas fa-map-marker-alt"></i>Venue: School of Arts</li>
              <li><i class="fas fa-map"></i>Address: 437 S Olive St</li>
              <li><i class="fas fa-user"></i>Organizer Name: School of Arts</li>
              <li><i class="fas fa-phone-alt"></i>Phone: 1-677-124-44227</li>
            </ul>
          </div>
        </div>
      </div> <!-- / Details  -->
    </div>
  </section>
  <!--======== / Event Section ========-->
</template>

<style scoped>
/* Modern Hero Section - Event Details */
.eventdetails-hero-section {
  position: relative;
  overflow: hidden;
  z-index: 10;
}

.eventdetails-hero-bg {
  background: linear-gradient(135deg, #4A8B3F 0%, #5EA750 45%, #FF6584 100%);
  padding: 100px 0 60px;
  position: relative;
  z-index: 1;
}

.eventdetails-hero-content {
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
.eventdetails-hero-title {
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
  .eventdetails-hero-bg {
    padding: 80px 0 50px;
  }

  .eventdetails-hero-title {
    font-size: 38px;
  }

  .hero-wave-bottom svg {
    height: 60px;
  }
}

@media (max-width: 767px) {
  .eventdetails-hero-bg {
    padding: 70px 0 40px;
  }

  .eventdetails-hero-title {
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
  .eventdetails-hero-bg {
    padding: 60px 0 35px;
  }

  .eventdetails-hero-title {
    font-size: 28px;
  }

  .hero-wave-bottom svg {
    height: 40px;
  }
}
</style>
