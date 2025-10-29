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
  <section class="servicedetails-hero-section">
    <div class="servicedetails-hero-bg">
      <div class="container">
        <div class="servicedetails-hero-content">
          <nav class="modern-breadcrumb">
            <router-link to="/" class="breadcrumb-link">Home</router-link>
            <i class="fas fa-chevron-right"></i>
            <router-link to="/service" class="breadcrumb-link">Services</router-link>
            <i class="fas fa-chevron-right"></i>
            <span class="breadcrumb-current">Service Details</span>
          </nav>
          <div class="hero-badge">
            <i class="fas fa-info-circle badge-icon"></i>
            <span>Service Information</span>
          </div>
          <h1 class="servicedetails-hero-title">
            Learn About
            <span class="gradient-text-light d-block">Our Service</span>
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

  <!--======== Service Section ========-->
  <section class="service-section space">
    <div class="container">
      <div class="row gy-30">
        <div class="col-xl-9 col-lg-8">
          <div class="service-details">
            <div class="service-img">
              <img src="/assets/img/service/service-details.jpg" alt="service details">
            </div>
            <h2 class="single-title">Pre High School</h2>
            <div class="service-content">
              <p>Credibly plagiarize transparent benefits rather than functionalized information. Synergistically engineer error-free synergy vis-a-vis leveraged action items. Globally underwhelm team driven methodologies before quality products.</p>
              <p>Competently network parallel products with market-driven total linkage. Holisticly formulate mission-critical communities before B2B web-readiness. Conveniently predominate collaborative strategic theme areas through ubiquitous "outside the box" thinking. Distinctively engage multidisciplinary internal or "organic" sources rather than interoperable action items. Synergistically architect customized infrastructures with synergistic value. Objectively incentivize superior functionalities.</p>
              <blockquote class="block-quote style-left-icon">
                <p>Progressively matrix resource maximizing experiences via distinctive web readiness. Credibly implement technically sound data after error-free ROI. Conveniently synergize stand-alone best practices rather than functional systems. </p>
                <cite>Jerzzy Lamot</cite>
              </blockquote>
              <h3 class="h3">Learning Enviroment For Your Baby</h3>
              <p>Compellingly seize high-quality schemas with clicks-and-mortar initiatives. Collaboratively enhance equity invested value via team building action items. Competently empower strategic niche markets before long-term high-impact initiatives. Synergistically reintermediate just in time testing procedures vis-a-vis corporate internal or "organic" sources. </p>
              <div class="check-list style-4">
                <ul>
                  <li>Social Skill</li>
                  <li>Music Classes</li>
                  <li>Finger Plays</li>
                  <li>Sensory Activities</li>
                  <li>Self - Selected Play</li>
                  <li>Circle Time</li>
                  <li>Self Help Skills</li>
                  <li>Focused Learning</li>
                  <li>Communication</li>
                  <li>Singing Songs</li>
                  <li>Outdoor Activities</li>
                  <li>Online Playing</li>
                  <li>Konowledge Learning</li>
                  <li>Task Practice</li>
                  <li>Good Work</li>
                </ul>
              </div>
              <p>Collaboratively enhance equity invested value via team building action items. Competently empower strategic niche markets before long-term high-impact initiatives. Synergistically reintermediate just in time testing procedures vis-a-vis corporate internal or "organic" sources. Dynamically enable cooperative benefits through reliable ROI.</p>
              <div class="row gy-30 mt-20 mb-35">
                <div class="col-sm-6">
                  <div class="img-box-1">
                    <img class="w-100" src="/assets/img/service/sr-gallery-1.jpg" alt="service">
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="img-box-1">
                    <img class="w-100" src="/assets/img/service/sr-gallery-2.jpg" alt="service">
                  </div>
                </div>
              </div>
              <p>Uniquely maximize stand-alone sources with out-of-the-box alignments. Continually procrastinate alternative catalysts for change for user friendly processes. Dynamically negotiate tactical e-markets for holistic web services. Collaboratively benchmark alternative initiatives after clicks-and-mortar outsourcing. Conveniently customize strategic total linkage through functional data. Progressively seize go forward potentialities with end-to-end scenarios. Dynamically implement open-source web-readiness for robust communities. Competently mesh functionalized systems rather than stand-alone deliverables.</p>
            </div>
          </div> <!-- / service details -->
        </div> <!-- / col-8 end -->
        <!-- Sidebar -->
        <div class="col-xl-3 col-lg-4">
          <aside class="sidebar-area service-sidebar">
            <div class="widget widget_search wow fadeInUp" data-wow-delay="0.1s">
              <form class="search-form">
                <input type="text" placeholder="Search Here">
                <button type="submit"><i class="far fa-search"></i></button>
              </form>
            </div>
            <div class="widget wow fadeInUp" data-wow-delay="0.1s">
              <h4 class="widget_title">Our Services</h4>
              <ul class="popular-service-wrap">
                <li><router-link to="/service-details">Baby Sitting</router-link></li>
                <li><router-link to="/service-details">Baby Shower</router-link></li>
                <li><router-link to="/service-details">Full-Time Nanny</router-link></li>
                <li><router-link to="/service-details">Pre School</router-link></li>
                <li><router-link to="/service-details">Kids Training</router-link></li>
              </ul>
            </div>
            <div class="widget wow fadeInUp" data-wow-delay="0.1s">
              <div class="banner-2">
                <img class="d-none d-lg-block" src="/assets/img/banner/widget-banner-2.jpg" alt="ads banner">
                <img class="d-block d-lg-none" src="/assets/img/banner/widget-banner-3.jpg" alt="ads banner">
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </section>
  <!--======== / Service Section ========-->
</template>

<style scoped>
/* Modern Hero Section - Service Details */
.servicedetails-hero-section {
  position: relative;
  overflow: hidden;
  z-index: 10;
}

.servicedetails-hero-bg {
  background: linear-gradient(135deg, #6C63FF 0%, #A29BFE 45%, #FF6584 100%);
  padding: 100px 0 60px;
  position: relative;
  z-index: 1;
}

.servicedetails-hero-content {
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
.servicedetails-hero-title {
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
  .servicedetails-hero-bg {
    padding: 80px 0 50px;
  }

  .servicedetails-hero-title {
    font-size: 38px;
  }

  .hero-wave-bottom svg {
    height: 60px;
  }
}

@media (max-width: 767px) {
  .servicedetails-hero-bg {
    padding: 70px 0 40px;
  }

  .servicedetails-hero-title {
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
  .servicedetails-hero-bg {
    padding: 60px 0 35px;
  }

  .servicedetails-hero-title {
    font-size: 28px;
  }

  .hero-wave-bottom svg {
    height: 40px;
  }
}
</style>
