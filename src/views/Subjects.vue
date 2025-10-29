<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { initTemplateScripts, cleanupTemplateScripts } from '@/utils/initScripts'

const activeGrade = ref('all')

const gradeFilter = (grade) => {
  activeGrade.value = grade
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
  <section class="subjects-hero-section">
    <div class="subjects-hero-bg">
      <div class="container">
        <div class="subjects-hero-content">
          <!-- Subtle Breadcrumb -->
          <nav class="modern-breadcrumb">
            <router-link to="/" class="breadcrumb-link">Home</router-link>
            <i class="fas fa-chevron-right"></i>
            <span class="breadcrumb-current">Subjects</span>
          </nav>

          <!-- Hero Badge -->
          <div class="hero-badge">
            <i class="fas fa-book-open"></i>
            <span>Learning Subjects</span>
          </div>

          <!-- Hero Title -->
          <h1 class="subjects-hero-title">
            What Will Your Child
            <span class="gradient-text-light d-block">Master Today?</span>
          </h1>

          <!-- Hero Description -->
          <p class="subjects-hero-description">
            Curriculum-aligned content for Pre-K through Grade 5 • 4000+ Games • 10,000+ Worksheets
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

  <!--======== Subjects Section ========-->
  <section class="space-top">
    <div class="container">

      <!--  Grade Selector Pills -->
      <div class="text-center mb-50 wow fadeInUp" data-wow-delay="0.2s">
        <div class="grade-pills d-inline-flex flex-wrap gap-2 bg-white p-3 rounded-pill shadow-sm">
          <button
            class="grade-pill"
            :class="{ 'active': activeGrade === 'all' }"
            @click="gradeFilter('all')"
          >
            All Grades
          </button>
          <button
            class="grade-pill"
            :class="{ 'active': activeGrade === 'prek' }"
            @click="gradeFilter('prek')"
          >
            Pre-K
          </button>
          <button
            class="grade-pill"
            :class="{ 'active': activeGrade === 'k' }"
            @click="gradeFilter('k')"
          >
            K
          </button>
          <button
            class="grade-pill"
            :class="{ 'active': activeGrade === '1' }"
            @click="gradeFilter('1')"
          >
            1st
          </button>
          <button
            class="grade-pill"
            :class="{ 'active': activeGrade === '2' }"
            @click="gradeFilter('2')"
          >
            2nd
          </button>
          <button
            class="grade-pill"
            :class="{ 'active': activeGrade === '3' }"
            @click="gradeFilter('3')"
          >
            3rd
          </button>
          <button
            class="grade-pill"
            :class="{ 'active': activeGrade === '4' }"
            @click="gradeFilter('4')"
          >
            4th
          </button>
          <button
            class="grade-pill"
            :class="{ 'active': activeGrade === '5' }"
            @click="gradeFilter('5')"
          >
            5th
          </button>
        </div>
      </div>
    </div>
  </section>

  <!--======== Mathematics Subject ========-->
  <section class="space-bottom">
    <div class="container">
      <div class="subject-card-large wow fadeInUp" data-wow-delay="0.1s">
        <div class="row align-items-center gy-40">
          <div class="col-lg-5">
            <div class="subject-header">
              <div class="subject-icon-large mb-4" style="background: linear-gradient(135deg, #6C5CE7, #A29BFE);">
                <i class="fas fa-calculator fa-4x text-white"></i>
              </div>
              <h2 class="sec-title mb-3">Mathematics</h2>
              <p class="fs-md mb-3">Build number sense, master arithmetic, explore geometry, and solve real-world problems through engaging games and activities.</p>
              <div class="subject-meta d-flex flex-wrap gap-3 mb-4">
                <div class="meta-badge">
                  <i class="fas fa-gamepad text-primary"></i>
                  <strong>1000+</strong> Games
                </div>
                <div class="meta-badge">
                  <i class="fas fa-file-alt text-success"></i>
                  <strong>3500+</strong> Worksheets
                </div>
                <div class="meta-badge">
                  <i class="fas fa-graduation-cap text-warning"></i>
                  <strong>Pre-K to 5</strong>
                </div>
              </div>
              <div class="difficulty-badges mb-4">
                <span class="badge-pill beginner">Beginner</span>
                <span class="badge-pill intermediate">Intermediate</span>
                <span class="badge-pill advanced">Advanced</span>
              </div>
            </div>
          </div>

          <div class="col-lg-7">
            <div class="topic-grid">
              <h5 class="mb-4">Topics Covered:</h5>
              <div class="row g-3">
                <div class="col-md-6">
                  <div class="topic-item">
                    <div class="topic-icon" style="background: #6C5CE7;">
                      <i class="fas fa-hashtag text-white"></i>
                    </div>
                    <div class="topic-info">
                      <h6>Counting & Numbers</h6>
                      <p class="small mb-0 text-muted">120 games</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="topic-item">
                    <div class="topic-icon" style="background: #6C5CE7;">
                      <i class="fas fa-plus text-white"></i>
                    </div>
                    <div class="topic-info">
                      <h6>Addition</h6>
                      <p class="small mb-0 text-muted">95 games</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="topic-item">
                    <div class="topic-icon" style="background: #6C5CE7;">
                      <i class="fas fa-minus text-white"></i>
                    </div>
                    <div class="topic-info">
                      <h6>Subtraction</h6>
                      <p class="small mb-0 text-muted">88 games</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="topic-item">
                    <div class="topic-icon" style="background: #6C5CE7;">
                      <i class="fas fa-times text-white"></i>
                    </div>
                    <div class="topic-info">
                      <h6>Multiplication</h6>
                      <p class="small mb-0 text-muted">102 games</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="topic-item">
                    <div class="topic-icon" style="background: #6C5CE7;">
                      <i class="fas fa-divide text-white"></i>
                    </div>
                    <div class="topic-info">
                      <h6>Division</h6>
                      <p class="small mb-0 text-muted">76 games</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="topic-item">
                    <div class="topic-icon" style="background: #6C5CE7;">
                      <i class="fas fa-shapes text-white"></i>
                    </div>
                    <div class="topic-info">
                      <h6>Geometry</h6>
                      <p class="small mb-0 text-muted">64 games</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="topic-item">
                    <div class="topic-icon" style="background: #6C5CE7;">
                      <i class="fas fa-percentage text-white"></i>
                    </div>
                    <div class="topic-info">
                      <h6>Fractions & Decimals</h6>
                      <p class="small mb-0 text-muted">85 games</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="topic-item">
                    <div class="topic-icon" style="background: #6C5CE7;">
                      <i class="fas fa-question-circle text-white"></i>
                    </div>
                    <div class="topic-info">
                      <h6>Word Problems</h6>
                      <p class="small mb-0 text-muted">92 games</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-4">
                <router-link to="/subjects/math" class="vs-btn style2">
                  Explore All Math Games
                  <i class="fas fa-arrow-right ms-2"></i>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!--======== Reading & ELA Subject ========-->
  <section class="space-bottom bg-smoke">
    <div class="container">
      <div class="subject-card-large wow fadeInUp" data-wow-delay="0.1s">
        <div class="row align-items-center flex-row-reverse gy-40">
          <div class="col-lg-5">
            <div class="subject-header">
              <div class="subject-icon-large mb-4" style="background: linear-gradient(135deg, #FD79A8, #E84393);">
                <i class="fas fa-book-open fa-4x text-white"></i>
              </div>
              <h2 class="sec-title mb-3">Reading & ELA</h2>
              <p class="fs-md mb-3">Develop phonics, vocabulary, reading comprehension, grammar, and writing skills through interactive stories and activities.</p>
              <div class="subject-meta d-flex flex-wrap gap-3 mb-4">
                <div class="meta-badge">
                  <i class="fas fa-gamepad text-primary"></i>
                  <strong>1200+</strong> Games
                </div>
                <div class="meta-badge">
                  <i class="fas fa-file-alt text-success"></i>
                  <strong>4000+</strong> Worksheets
                </div>
                <div class="meta-badge">
                  <i class="fas fa-graduation-cap text-warning"></i>
                  <strong>Pre-K to 5</strong>
                </div>
              </div>
              <div class="difficulty-badges mb-4">
                <span class="badge-pill beginner">Beginner</span>
                <span class="badge-pill intermediate">Intermediate</span>
                <span class="badge-pill advanced">Advanced</span>
              </div>
            </div>
          </div>

          <div class="col-lg-7">
            <div class="topic-grid">
              <h5 class="mb-4">Topics Covered:</h5>
              <div class="row g-3">
                <div class="col-md-6">
                  <div class="topic-item">
                    <div class="topic-icon" style="background: #FD79A8;">
                      <i class="fas fa-font text-white"></i>
                    </div>
                    <div class="topic-info">
                      <h6>Phonics & Letters</h6>
                      <p class="small mb-0 text-muted">150 games</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="topic-item">
                    <div class="topic-icon" style="background: #FD79A8;">
                      <i class="fas fa-spell-check text-white"></i>
                    </div>
                    <div class="topic-info">
                      <h6>Spelling</h6>
                      <p class="small mb-0 text-muted">110 games</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="topic-item">
                    <div class="topic-icon" style="background: #FD79A8;">
                      <i class="fas fa-book-reader text-white"></i>
                    </div>
                    <div class="topic-info">
                      <h6>Reading Comprehension</h6>
                      <p class="small mb-0 text-muted">180 games</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="topic-item">
                    <div class="topic-icon" style="background: #FD79A8;">
                      <i class="fas fa-language text-white"></i>
                    </div>
                    <div class="topic-info">
                      <h6>Vocabulary</h6>
                      <p class="small mb-0 text-muted">95 games</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="topic-item">
                    <div class="topic-icon" style="background: #FD79A8;">
                      <i class="fas fa-grammar text-white"></i>
                    </div>
                    <div class="topic-info">
                      <h6>Grammar</h6>
                      <p class="small mb-0 text-muted">88 games</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="topic-item">
                    <div class="topic-icon" style="background: #FD79A8;">
                      <i class="fas fa-pen-fancy text-white"></i>
                    </div>
                    <div class="topic-info">
                      <h6>Writing</h6>
                      <p class="small mb-0 text-muted">72 games</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="topic-item">
                    <div class="topic-icon" style="background: #FD79A8;">
                      <i class="fas fa-comment-dots text-white"></i>
                    </div>
                    <div class="topic-info">
                      <h6>Parts of Speech</h6>
                      <p class="small mb-0 text-muted">65 games</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="topic-item">
                    <div class="topic-icon" style="background: #FD79A8;">
                      <i class="fas fa-quote-left text-white"></i>
                    </div>
                    <div class="topic-info">
                      <h6>Punctuation</h6>
                      <p class="small mb-0 text-muted">55 games</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-4">
                <router-link to="/subjects/reading" class="vs-btn style2">
                  Explore All Reading Games
                  <i class="fas fa-arrow-right ms-2"></i>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!--======== Science Subject ========-->
  <section class="space-bottom">
    <div class="container">
      <div class="subject-card-large wow fadeInUp" data-wow-delay="0.1s">
        <div class="row align-items-center gy-40">
          <div class="col-lg-5">
            <div class="subject-header">
              <div class="subject-icon-large mb-4" style="background: linear-gradient(135deg, #00B894, #00D2A0);">
                <i class="fas fa-flask fa-4x text-white"></i>
              </div>
              <h2 class="sec-title mb-3">Science</h2>
              <p class="fs-md mb-3">Discover the wonders of the natural world through experiments, observations, and interactive science games covering biology, physics, and earth science.</p>
              <div class="subject-meta d-flex flex-wrap gap-3 mb-4">
                <div class="meta-badge">
                  <i class="fas fa-gamepad text-primary"></i>
                  <strong>800+</strong> Games
                </div>
                <div class="meta-badge">
                  <i class="fas fa-file-alt text-success"></i>
                  <strong>2500+</strong> Worksheets
                </div>
                <div class="meta-badge">
                  <i class="fas fa-graduation-cap text-warning"></i>
                  <strong>K to 5</strong>
                </div>
              </div>
              <div class="difficulty-badges mb-4">
                <span class="badge-pill beginner">Beginner</span>
                <span class="badge-pill intermediate">Intermediate</span>
                <span class="badge-pill advanced">Advanced</span>
              </div>
            </div>
          </div>

          <div class="col-lg-7">
            <div class="topic-grid">
              <h5 class="mb-4">Topics Covered:</h5>
              <div class="row g-3">
                <div class="col-md-6">
                  <div class="topic-item">
                    <div class="topic-icon" style="background: #00B894;">
                      <i class="fas fa-paw text-white"></i>
                    </div>
                    <div class="topic-info">
                      <h6>Animals & Habitats</h6>
                      <p class="small mb-0 text-muted">110 games</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="topic-item">
                    <div class="topic-icon" style="background: #00B894;">
                      <i class="fas fa-seedling text-white"></i>
                    </div>
                    <div class="topic-info">
                      <h6>Plants & Life Cycles</h6>
                      <p class="small mb-0 text-muted">85 games</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="topic-item">
                    <div class="topic-icon" style="background: #00B894;">
                      <i class="fas fa-cloud-sun-rain text-white"></i>
                    </div>
                    <div class="topic-info">
                      <h6>Weather & Seasons</h6>
                      <p class="small mb-0 text-muted">72 games</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="topic-item">
                    <div class="topic-icon" style="background: #00B894;">
                      <i class="fas fa-globe-americas text-white"></i>
                    </div>
                    <div class="topic-info">
                      <h6>Earth & Space</h6>
                      <p class="small mb-0 text-muted">95 games</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="topic-item">
                    <div class="topic-icon" style="background: #00B894;">
                      <i class="fas fa-atom text-white"></i>
                    </div>
                    <div class="topic-info">
                      <h6>Matter & Energy</h6>
                      <p class="small mb-0 text-muted">68 games</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="topic-item">
                    <div class="topic-icon" style="background: #00B894;">
                      <i class="fas fa-microscope text-white"></i>
                    </div>
                    <div class="topic-info">
                      <h6>Scientific Method</h6>
                      <p class="small mb-0 text-muted">55 games</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-4">
                <router-link to="/subjects/science" class="vs-btn style2">
                  Explore All Science Games
                  <i class="fas fa-arrow-right ms-2"></i>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!--======== CTA Section ========-->
  <section class="cta-section space-shape-plus" data-bg-src="/assets/img/bg/cta-4.jpg" data-opacity="8" data-overlay="custom">
    <div class="container text-center z-index-common">
      <div class="title-area mb-35 wow fadeInUp" data-wow-delay="0.1s">
        <span class="sub-title text-white">Start Learning Today</span>
        <h2 class="sec-title text-white">Ready to Help Your Child Excel?</h2>
        <p class="text-white fs-md mt-3">Join 50M+ kids learning through play</p>
      </div>
      <router-link to="/pricing" class="vs-btn wave-btn">
        View Pricing Plans
        <i class="fas fa-arrow-right ms-2"></i>
      </router-link>
    </div>
    <div class="section-before style-2"><img src="/assets/img/shape/main-shape-before.png" alt="shape"></div>
    <div class="section-after style-2"><img src="/assets/img/shape/main-shape-after.png" alt="shape"></div>
  </section>
</template>

<style scoped>
/* Grade Pills */
.grade-pills {
  max-width: 800px;
}

.grade-pill {
  padding: 10px 20px;
  border: 2px solid #E0E0E0;
  background: white;
  border-radius: 25px;
  font-weight: 600;
  color: #636E72;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 15px;
}

.grade-pill:hover {
  border-color: #6C63FF;
  color: #6C63FF;
  transform: translateY(-2px);
}

.grade-pill.active {
  background: linear-gradient(135deg, #6C63FF, #5A52D5);
  color: white;
  border-color: #6C63FF;
}

/* Subject Card Large */
.subject-card-large {
  background: white;
  padding: 50px 40px;
  border-radius: 24px;
  box-shadow: 0 15px 60px rgba(0,0,0,0.1);
}

.subject-icon-large {
  width: 120px;
  height: 120px;
  border-radius: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 15px 40px rgba(0,0,0,0.2);
}

.subject-meta {

}

.meta-badge {
  background: #F7F8FA;
  padding: 10px 20px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #2D3436;
}

.meta-badge i {
  font-size: 18px;
}

/* Difficulty Badges */
.difficulty-badges {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.badge-pill {
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
}

.badge-pill.beginner {
  background: #D4EDDA;
  color: #155724;
}

.badge-pill.intermediate {
  background: #FFF3CD;
  color: #856404;
}

.badge-pill.advanced {
  background: #F8D7DA;
  color: #721C24;
}

/* Topic Grid */
.topic-grid {

}

.topic-item {
  background: #F7F8FA;
  padding: 15px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 15px;
  transition: all 0.3s;
}

.topic-item:hover {
  background: #ECEDF0;
  transform: translateX(5px);
}

.topic-icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.topic-info h6 {
  margin: 0;
  font-weight: 700;
  color: #2D3436;
  font-size: 15px;
}

/* Responsive */
@media (max-width: 991px) {
  .subject-card-large {
    padding: 30px 20px;
  }

  .subject-icon-large {
    width: 100px;
    height: 100px;
  }

  .subject-icon-large i {
    font-size: 2.5rem !important;
  }
}

/* ========== Modern Hero Section Styles ========== */
.subjects-hero-section {
  position: relative;
  overflow: hidden;
}

.subjects-hero-bg {
  position: relative;
  background: linear-gradient(135deg, #6C63FF 0%, #A29BFE 45%, #FF6584 100%);
  padding: 100px 0 120px;
  min-height: 450px;
}

.subjects-hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}

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

.subjects-hero-title {
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

.subjects-hero-description {
  font-size: 19px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 35px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 400;
}

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

@keyframes float-badge {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

@media (max-width: 991px) {
  .subjects-hero-bg {
    padding: 80px 0 100px;
    min-height: 400px;
  }

  .subjects-hero-title {
    font-size: 46px;
  }

  .subjects-hero-description {
    font-size: 17px;
  }
}

@media (max-width: 767px) {
  .subjects-hero-bg {
    padding: 60px 0 80px;
    min-height: auto;
  }

  .subjects-hero-title {
    font-size: 36px;
  }

  .subjects-hero-description {
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
  .subjects-hero-bg {
    padding: 74px 0 70px;
  }

  .subjects-hero-title {
    font-size: 32px;
  }

  .subjects-hero-description {
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
