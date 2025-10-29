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
  <section class="classdetails-hero-section">
    <div class="classdetails-hero-bg">
      <div class="container">
        <div class="classdetails-hero-content">
          <nav class="modern-breadcrumb">
            <router-link to="/" class="breadcrumb-link">Home</router-link>
            <i class="fas fa-chevron-right"></i>
            <router-link to="/classes" class="breadcrumb-link">Classes</router-link>
            <i class="fas fa-chevron-right"></i>
            <span class="breadcrumb-current">Class Details</span>
          </nav>
          <div class="hero-badge">
            <i class="fas fa-chalkboard-teacher badge-icon"></i>
            <span>Class Information</span>
          </div>
          <h1 class="classdetails-hero-title">
            Discover
            <span class="gradient-text-light d-block">Class Details</span>
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

  <!--======== Class Section ========-->
  <section class="class-section bg-smoke space-page">
    <div class="container">
      <div class="row gx-60">
        <div class="col-xl-8 col-lg-7">
          <div class="class-details">
            <div class="row class-big-img vs-carousel" id="classBig" data-slide-show="1" data-md-slide-show="1" data-fade="true">
              <div class="col-12">
                <img src="/assets/img/class/class-details-1.jpg" alt="class">
              </div>
              <div class="col-12">
                <img src="/assets/img/class/class-details-2.jpg" alt="class">
              </div>
              <div class="col-12">
                <img src="/assets/img/class/class-details-3.jpg" alt="class">
              </div>
              <div class="col-12">
                <img src="/assets/img/class/class-details-4.jpg" alt="class">
              </div>
              <div class="col-12">
                <img src="/assets/img/class/class-details-5.jpg" alt="class">
              </div>
              <div class="col-12">
                <img src="/assets/img/class/class-details-6.jpg" alt="class">
              </div>
            </div>
            <div class="row class-thumb-img mb-35 vs-carousel" data-slide-show="5" data-lg-slide-show="4" data-md-slide-show="5" data-sm-slide-show="3" data-xs-slide-show="2" data-asnavfor="#classBig">
              <div class="col-auto">
                <img src="/assets/img/class/thumb-1.jpg" alt="class">
              </div>
              <div class="col-auto">
                <img src="/assets/img/class/thumb-2.jpg" alt="class">
              </div>
              <div class="col-auto">
                <img src="/assets/img/class/thumb-3.jpg" alt="class">
              </div>
              <div class="col-auto">
                <img src="/assets/img/class/thumb-4.jpg" alt="class">
              </div>
              <div class="col-auto">
                <img src="/assets/img/class/thumb-5.jpg" alt="class">
              </div>
              <div class="col-auto">
                <img src="/assets/img/class/thumb-6.jpg" alt="class">
              </div>
            </div>
            <h2 class="single-title">Pre High School</h2>
            <div class="service-content">
              <p>Continually restore backward-compatible networks for goal-oriented results. Rapidiously provide access to best of breed manufactured products whereas out-of-the-box "outside the box" thinking. Assertively plagiarize error-free "outside the box" thinking rather than optimal supply chains. Proactively benchmark flexible opportunities before out-of-the-box materials. Authoritatively streamline multimedia based...</p>
              <p>Seize high-quality schemas with clicks-and-mortar initiatives. Collaboratively enhance equity invested value via team building action items. Competently empower strategic niche markets before long-term high-impact initiatives. life Synergistically reintermediate just in time testing procedures vis-a-vis corporate internal</p>
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
              <p>Uniquely maximize stand-alone sources with out-of-the-box alignments. Continually procrastinate alternative catalysts for change for user friendly processes. Dynamically negotiate tactical e-markets for holistic web services. benchmark alternative initiatives after clicks-and-mortar outsourcing. Conveniently customize strategic total linkage through functional data. Progressively seize go forward potentialities with end-to-end scenarios. Dynamically implement open-source web-readiness for robust communities egotiate tactical e-markets for holistic web services</p>
            </div>
            <!-- Register Form -->
            <div class="vs-register-form">
              <div class="form-title">
                <h3 class="blog-inner-title">Register For Your Child</h3>
              </div>
              <div class="row">
                <div class="col-md-6 form-group">
                  <input type="text" placeholder="Your Name" class="form-control style2">
                  <i class="fal fa-user"></i>
                </div>
                <div class="col-md-6 form-group">
                  <input type="text" placeholder="Your Email" class="form-control style2">
                  <i class="fal fa-envelope"></i>
                </div>
                <div class="form-group col-12">
                  <select name="classes" id="classselect" class="form-select style2">
                    <option value="" disabled selected hidden>Select Class</option>
                    <option value="languageclass">Language Class</option>
                    <option value="mathematicsclass">Mathematics Class</option>
                    <option value="kidsonlineclass">Kids Online Class</option>
                    <option value="practicalclasses">Practical Classes</option>
                  </select>
                </div>
                <div class="col-12 form-group">
                  <textarea placeholder="Write a Comment" id="commentForm" class="form-control style2"></textarea>
                  <i class="far fa-pencil-alt"></i>
                </div>
                <div class="col-12 form-group">
                  <button class="vs-btn"><i class="fal fa-paper-plane"></i> Register Now</button>
                </div>
              </div>
            </div>
          </div> <!-- / class details -->
        </div> <!-- / col-8 end -->
        <!-- Sidebar -->
        <div class="col-xl-4 col-lg-5">
          <aside class="sidebar-area class-sidebar">
            <div class="widget wow fadeInUp" data-wow-delay="0.1s">
              <div class="class-info-wrap">
                <div class="info-item">
                  <i class="fas fa-calendar-alt"></i>
                  <div class="info">
                    <h6 class="title">Start Date: </h6>
                    <span class="text">25 October, 2024</span>
                  </div>
                </div>
                <div class="info-item">
                  <i class="fas fa-user"></i>
                  <div class="info">
                    <h6 class="title">Student Ages: </h6>
                    <span class="text">03 - 06 Years</span>
                  </div>
                </div>
                <div class="info-item">
                  <i class="fas fa-users-class"></i>
                  <div class="info">
                    <h6 class="title">Number Of Kids: </h6>
                    <span class="text">30 Child Student</span>
                  </div>
                </div>
                <div class="info-item">
                  <i class="fas fa-clock"></i>
                  <div class="info">
                    <h6 class="title">Class Time: </h6>
                    <span class="text">9:00am - 12:00pm</span>
                  </div>
                </div>
                <div class="info-item">
                  <i class="fas fa-sunrise"></i>
                  <div class="info">
                    <h6 class="title">Class Day: </h6>
                    <span class="text">Monday, Friday</span>
                  </div>
                </div>
                <div class="info-item">
                  <i class="fas fa-language"></i>
                  <div class="info">
                    <h6 class="title">Language: </h6>
                    <span class="text">English</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="widget wow fadeInUp" data-wow-delay="0.1s">
              <div class="author-widget-wrap">
                <div class="avator">
                  <img src="/assets/img/blog/author-2.jpg" alt="avator">
                </div>
                <div class="author-info">
                  <h4 class="name text-title"><router-link to="/classes">Jenny Rose</router-link></h4>
                  <span class="desig">Teacher</span>
                </div>
                <p class="author-bio">Gressively reinvent optimal expertise without go forward initiatives. virtual applications without resource.</p>
                <div class="multi-social">
                  <a href="#"><i class="fab fa-facebook-f"></i></a>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                  <a href="#"><i class="fab fa-pinterest-p"></i></a>
                  <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </section>
  <!--======== / Class Section ========-->
</template>

<style scoped>
/* Modern Hero Section - Class Details */
.classdetails-hero-section {
  position: relative;
  overflow: hidden;
  z-index: 10;
}

.classdetails-hero-bg {
  background: linear-gradient(135deg, #6C63FF 0%, #A29BFE 45%, #FF6584 100%);
  padding: 100px 0 60px;
  position: relative;
  z-index: 1;
}

.classdetails-hero-content {
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
.classdetails-hero-title {
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
  .classdetails-hero-bg {
    padding: 80px 0 50px;
  }

  .classdetails-hero-title {
    font-size: 38px;
  }

  .hero-wave-bottom svg {
    height: 60px;
  }
}

@media (max-width: 767px) {
  .classdetails-hero-bg {
    padding: 70px 0 40px;
  }

  .classdetails-hero-title {
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
  .classdetails-hero-bg {
    padding: 74px 0 35px;
  }

  .classdetails-hero-title {
    font-size: 28px;
  }

  .hero-wave-bottom svg {
    height: 40px;
  }
}
</style>
