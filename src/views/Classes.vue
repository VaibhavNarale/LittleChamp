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
  <!-- Modern Hero Section -->
  <section class="classes-hero-section">
    <div class="classes-hero-bg">
      <div class="container">
        <div class="classes-hero-content">
          <nav class="modern-breadcrumb">
            <router-link to="/" class="breadcrumb-link">Home</router-link>
            <i class="fas fa-chevron-right"></i>
            <span class="breadcrumb-current">Classes</span>
          </nav>
          <div class="hero-badge">
            <i class="fas fa-graduation-cap badge-icon"></i>
            <span>Learning Programs</span>
          </div>
          <h1 class="classes-hero-title">
            Explore Our
            <span class="gradient-text-light d-block">Educational Classes</span>
          </h1>
          <p class="classes-hero-subtitle">
            Discover engaging programs designed to inspire and educate young
            minds
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

  <!--======== Classes Section ========-->
  <section class="classes-section bg-smoke-two space-top space-extra-bottom">
    <div class="container">
      <div class="row">
        <!-- Single Class -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="class-box">
            <div class="class-img">
              <router-link to="/class-details">
                <img src="/assets/img/class/class-1.jpg" alt="class" />
              </router-link>
            </div>
            <div class="class-content">
              <h2 class="class-title h4">
                <router-link to="/class-details">Language Class</router-link>
              </h2>
              <p class="class-text">
                Interactively brand client center through is customized value
                good ideas.
              </p>
              <div class="class-profile">
                <div class="profile">
                  <div class="avator">
                    <img src="/assets/img/blog/author-1.jpg" alt="author" />
                  </div>
                  <div class="info">
                    <h3 class="author-name text-title">
                      <router-link to="/team-details">Kavita Nair</router-link>
                    </h3>
                    <span class="author-desig">Teacher</span>
                  </div>
                </div>
                <span class="class-fee">$29.99</span>
              </div>
              <ul class="class-info">
                <li>
                  <p>Age:</p>
                  <span>3-5 Years</span>
                </li>
                <li>
                  <p>Time:</p>
                  <span>8-10 am</span>
                </li>
                <li>
                  <p>Capacity:</p>
                  <span>30 Kids</span>
                </li>
              </ul>
              <router-link to="/class-details" class="vs-btn style-1"
                >Read More</router-link
              >
            </div>
          </div>
        </div>
        <!-- Single Class -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="class-box">
            <div class="class-img">
              <router-link to="/class-details">
                <img src="/assets/img/class/class-2.jpg" alt="class" />
              </router-link>
            </div>
            <div class="class-content">
              <h2 class="class-title h4">
                <router-link to="/class-details">Mathematics Class</router-link>
              </h2>
              <p class="class-text">
                Interactively brand client center through is customized value
                good ideas.
              </p>
              <div class="class-profile">
                <div class="profile">
                  <div class="avator">
                    <img src="/assets/img/blog/author-2.jpg" alt="author" />
                  </div>
                  <div class="info">
                    <h3 class="author-name text-title">
                      <router-link to="/team-details"
                        >Deepa Kulkarni</router-link
                      >
                    </h3>
                    <span class="author-desig">Teacher</span>
                  </div>
                </div>
                <span class="class-fee">$29.99</span>
              </div>
              <ul class="class-info">
                <li>
                  <p>Age:</p>
                  <span>3-5 Years</span>
                </li>
                <li>
                  <p>Time:</p>
                  <span>8-10 am</span>
                </li>
                <li>
                  <p>Capacity:</p>
                  <span>30 Kids</span>
                </li>
              </ul>
              <router-link to="/class-details" class="vs-btn style-1"
                >Read More</router-link
              >
            </div>
          </div>
        </div>
        <!-- Single Class -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="class-box">
            <div class="class-img">
              <router-link to="/class-details">
                <img src="/assets/img/class/class-3.jpg" alt="class" />
              </router-link>
            </div>
            <div class="class-content">
              <h2 class="class-title h4">
                <router-link to="/class-details">Kids Online Class</router-link>
              </h2>
              <p class="class-text">
                Interactively brand client center through is customized value
                good ideas.
              </p>
              <div class="class-profile">
                <div class="profile">
                  <div class="avator">
                    <img src="/assets/img/blog/author-3.jpg" alt="author" />
                  </div>
                  <div class="info">
                    <h3 class="author-name text-title">
                      <router-link to="/team-details">Sneha Reddy</router-link>
                    </h3>
                    <span class="author-desig">Teacher</span>
                  </div>
                </div>
                <span class="class-fee">$29.99</span>
              </div>
              <ul class="class-info">
                <li>
                  <p>Age:</p>
                  <span>3-5 Years</span>
                </li>
                <li>
                  <p>Time:</p>
                  <span>8-10 am</span>
                </li>
                <li>
                  <p>Capacity:</p>
                  <span>30 Kids</span>
                </li>
              </ul>
              <router-link to="/class-details" class="vs-btn style-1"
                >Read More</router-link
              >
            </div>
          </div>
        </div>
        <!-- Single Class -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="class-box">
            <div class="class-img">
              <router-link to="/class-details">
                <img src="/assets/img/class/class-4.jpg" alt="class" />
              </router-link>
            </div>
            <div class="class-content">
              <h2 class="class-title h4">
                <router-link to="/class-details">Practical Classes</router-link>
              </h2>
              <p class="class-text">
                Interactively brand client center through is customized value
                good ideas.
              </p>
              <div class="class-profile">
                <div class="profile">
                  <div class="avator">
                    <img src="/assets/img/blog/author-2.jpg" alt="author" />
                  </div>
                  <div class="info">
                    <h3 class="author-name text-title">
                      <router-link to="/team-details">Kavita Nair</router-link>
                    </h3>
                    <span class="author-desig">Teacher</span>
                  </div>
                </div>
                <span class="class-fee">$29.99</span>
              </div>
              <ul class="class-info">
                <li>
                  <p>Age:</p>
                  <span>3-5 Years</span>
                </li>
                <li>
                  <p>Time:</p>
                  <span>8-10 am</span>
                </li>
                <li>
                  <p>Capacity:</p>
                  <span>30 Kids</span>
                </li>
              </ul>
              <router-link to="/class-details" class="vs-btn style-1"
                >Read More</router-link
              >
            </div>
          </div>
        </div>
        <!-- Single Class -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="class-box">
            <div class="class-img">
              <router-link to="/class-details">
                <img src="/assets/img/class/class-5.jpg" alt="class" />
              </router-link>
            </div>
            <div class="class-content">
              <h2 class="class-title h4">
                <router-link to="/class-details">Outdoor Learning</router-link>
              </h2>
              <p class="class-text">
                Interactively brand client center through is customized value
                good ideas.
              </p>
              <div class="class-profile">
                <div class="profile">
                  <div class="avator">
                    <img src="/assets/img/blog/author-1.jpg" alt="author" />
                  </div>
                  <div class="info">
                    <h3 class="author-name text-title">
                      <router-link to="/team-details">Kavita Nair</router-link>
                    </h3>
                    <span class="author-desig">Teacher</span>
                  </div>
                </div>
                <span class="class-fee">$29.99</span>
              </div>
              <ul class="class-info">
                <li>
                  <p>Age:</p>
                  <span>3-5 Years</span>
                </li>
                <li>
                  <p>Time:</p>
                  <span>8-10 am</span>
                </li>
                <li>
                  <p>Capacity:</p>
                  <span>30 Kids</span>
                </li>
              </ul>
              <router-link to="/class-details" class="vs-btn style-1"
                >Read More</router-link
              >
            </div>
          </div>
        </div>
        <!-- Single Class -->
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="class-box">
            <div class="class-img">
              <router-link to="/class-details">
                <img src="/assets/img/class/class-6.jpg" alt="class" />
              </router-link>
            </div>
            <div class="class-content">
              <h2 class="class-title h4">
                <router-link to="/class-details">Learning Care</router-link>
              </h2>
              <p class="class-text">
                Interactively brand client center through is customized value
                good ideas.
              </p>
              <div class="class-profile">
                <div class="profile">
                  <div class="avator">
                    <img src="/assets/img/blog/author-3.jpg" alt="author" />
                  </div>
                  <div class="info">
                    <h3 class="author-name text-title">
                      <router-link to="/team-details">Kavita Nair</router-link>
                    </h3>
                    <span class="author-desig">Teacher</span>
                  </div>
                </div>
                <span class="class-fee">$29.99</span>
              </div>
              <ul class="class-info">
                <li>
                  <p>Age:</p>
                  <span>3-5 Years</span>
                </li>
                <li>
                  <p>Time:</p>
                  <span>8-10 am</span>
                </li>
                <li>
                  <p>Capacity:</p>
                  <span>30 Kids</span>
                </li>
              </ul>
              <router-link to="/class-details" class="vs-btn style-1"
                >Read More</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--======== / Classes Section ========-->

  <!--======== CTA Section ========-->
  <section
    class="cta-section space-shape-plus"
    data-bg-src="/assets/img/bg/cta-4.jpg"
    data-opacity="8"
    data-overlay="custom"
  >
    <div class="container text-center z-index-common">
      <div class="title-area mb-35 wow fadeInUp" data-wow-delay="0.1s">
        <span class="sub-title text-white">Join Our New Session</span>
        <h2 class="sec-title text-white">
          Call To Enroll Your Child
          <a class="d-block text-inherit" href="tel:+25621582222"
            >256 2158 2222</a
          >
        </h2>
      </div>
      <router-link to="/about" class="vs-btn wave-btn">Learn More</router-link>
    </div>
    <div class="section-before style-2">
      <img src="/assets/img/shape/main-shape-before-2.png" alt="shape" />
    </div>
    <div class="section-after style-2">
      <img src="/assets/img/shape/main-shape-after-smoke.png" alt="shape" />
    </div>
  </section>
  <!--======== / CTA Section ========-->

  <!--======== Testimonial Section ========-->
  <section class="testimonial-section bg-smoke space-top space-bottom-page">
    <div class="container">
      <div class="row gy-30 gx-0 align-items-center">
        <div class="col-lg-4">
          <div
            class="title-area text-center text-lg-start wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <span class="sub-title">Testimonial</span>
            <h2 class="sec-title">Parent Say About Knirpse</h2>
          </div>
          <div class="rating-box">
            <h2 class="number h1">4.7</h2>
            <div class="total-rating">
              <div
                class="star-rating"
                role="img"
                aria-label="Rated 5.00 out of 5"
              >
                <span
                  >Rated <strong class="rating">5.00</strong> out of 5 based on
                  <span class="rating">1</span> customer rating</span
                >
              </div>
              <h5 class="rating-count">
                (<span class="count">450</span> Reviews) From Google
              </h5>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="testi-grid-wrapper ml-40">
            <div id="testi2" class="row vs-carousel" data-slide-show="2">
              <!-- Slider item -->
              <div class="col-md-6">
                <div class="testi-grid">
                  <div class="testi-text">
                    <p>
                      everage total linkage rather markets. ransition enabled
                      niches whereas cross media bene world class diverse error
                      free paradigms. maintain inexpensive good effort could
                      makes good happen.
                    </p>
                    <i class="fa-regular fa-quote-left"></i>
                  </div>
                  <div class="testi-author">
                    <div class="avater">
                      <img
                        src="/assets/img/testimonial/avator-1.jpg"
                        alt="avator"
                      />
                    </div>
                    <div class="media-body">
                      <h5 class="name">Vikram Desai</h5>
                      <span class="desig">Brother</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Slider item -->
              <div class="col-md-6">
                <div class="testi-grid">
                  <div class="testi-text">
                    <p>
                      everage total linkage rather markets. ransition enabled
                      niches whereas cross media bene world class diverse error
                      free paradigms. maintain inexpensive good effort could
                      makes good happen.
                    </p>
                    <i class="fa-regular fa-quote-left"></i>
                  </div>
                  <div class="testi-author">
                    <div class="avater">
                      <img
                        src="/assets/img/testimonial/avator-2.jpg"
                        alt="avator"
                      />
                    </div>
                    <div class="media-body">
                      <h5 class="name">Suresh Gupta</h5>
                      <span class="desig">Parent</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Slider item -->
              <div class="col-md-6">
                <div class="testi-grid">
                  <div class="testi-text">
                    <p>
                      everage total linkage rather markets. ransition enabled
                      niches whereas cross media bene world class diverse error
                      free paradigms. maintain inexpensive good effort could
                      makes good happen.
                    </p>
                    <i class="fa-regular fa-quote-left"></i>
                  </div>
                  <div class="testi-author">
                    <div class="avater">
                      <img
                        src="/assets/img/testimonial/avator-3.jpg"
                        alt="avator"
                      />
                    </div>
                    <div class="media-body">
                      <h5 class="name">Amit Joshi</h5>
                      <span class="desig">Gurdian</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Slider item -->
              <div class="col-md-6">
                <div class="testi-grid">
                  <div class="testi-text">
                    <p>
                      everage total linkage rather markets. ransition enabled
                      niches whereas cross media bene world class diverse error
                      free paradigms. maintain inexpensive good effort could
                      makes good happen.
                    </p>
                    <i class="fa-regular fa-quote-left"></i>
                  </div>
                  <div class="testi-author">
                    <div class="avater">
                      <img
                        src="/assets/img/testimonial/avator-4.jpg"
                        alt="avator"
                      />
                    </div>
                    <div class="media-body">
                      <h5 class="name">Manish Tiwari</h5>
                      <span class="desig">Parent</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <svg
              id="clipShape"
              xmlns="http://www.w3.org/2000/svg"
              width="58.124"
              height="38.113"
              viewBox="0 0 58.124 38.113"
            >
              <clipPath id="testiAfterShape">
                <path
                  id="testiAfter"
                  d="M1043.75,573s12,13.75-10,37c-.5-.25,10.25,3,56.25-37Z"
                  transform="translate(-1033.213 -572.5)"
                  fill="none"
                  stroke="#707070"
                  stroke-width="1"
                />
              </clipPath>
            </svg>
            <div class="vs-icon-box testi-2 d-none d-xl-block">
              <button
                data-slick-prev="#testi2"
                class="icon-btn style-3 arrow-left mb-15"
              >
                <i class="far fa-arrow-left"></i>
              </button>
              <button
                data-slick-next="#testi2"
                class="icon-btn style-3 arrow-right"
              >
                <i class="far fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--======== / Testimonial Section ========-->
</template>

<style scoped>
/* Modern Hero Section - Classes */
.classes-hero-section {
  position: relative;
  overflow: hidden;
  z-index: 10;
}

.classes-hero-bg {
  background: linear-gradient(135deg, #4a8b3f 0%, #5ea750 45%, #ff6584 100%);
  padding: 120px 0 80px;
  position: relative;
  z-index: 1;
}

.classes-hero-content {
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
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Hero Title */
.classes-hero-title {
  font-size: 56px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 20px;
  color: #fff;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.gradient-text-light {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.95) 0%,
    rgba(255, 255, 255, 0.7) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Hero Subtitle */
.classes-hero-subtitle {
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
  .classes-hero-bg {
    padding: 100px 0 60px;
  }

  .classes-hero-title {
    font-size: 42px;
  }

  .classes-hero-subtitle {
    font-size: 18px;
  }

  .hero-wave-bottom svg {
    height: 60px;
  }
}

@media (max-width: 767px) {
  .classes-hero-bg {
    padding: 80px 0 50px;
  }

  .classes-hero-title {
    font-size: 36px;
  }

  .classes-hero-subtitle {
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
  .classes-hero-bg {
    padding: 70px 0 40px;
  }

  .classes-hero-title {
    font-size: 32px;
  }

  .classes-hero-subtitle {
    font-size: 15px;
  }

  .hero-wave-bottom svg {
    height: 40px;
  }
}
</style>
