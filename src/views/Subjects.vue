<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import {
  initTemplateScripts,
  cleanupTemplateScripts,
} from '@/utils/initScripts'

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
      <!-- Floating Particles -->
      <div class="hero-particles">
        <span
          class="particle"
          style="
            left: 8%;
            top: 20%;
            width: 10px;
            height: 10px;
            animation-delay: 0s;
            animation-duration: 7s;
          "
        ></span>
        <span
          class="particle"
          style="
            left: 85%;
            top: 30%;
            width: 8px;
            height: 8px;
            animation-delay: 1.5s;
            animation-duration: 9s;
          "
        ></span>
        <span
          class="particle"
          style="
            left: 25%;
            top: 65%;
            width: 12px;
            height: 12px;
            animation-delay: 3s;
            animation-duration: 8s;
          "
        ></span>
        <span
          class="particle"
          style="
            left: 70%;
            top: 15%;
            width: 7px;
            height: 7px;
            animation-delay: 2s;
            animation-duration: 10s;
          "
        ></span>
        <span
          class="particle"
          style="
            left: 50%;
            top: 75%;
            width: 9px;
            height: 9px;
            animation-delay: 4s;
            animation-duration: 7.5s;
          "
        ></span>
        <span
          class="particle"
          style="
            left: 92%;
            top: 55%;
            width: 11px;
            height: 11px;
            animation-delay: 1s;
            animation-duration: 8.5s;
          "
        ></span>
      </div>

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
            Curriculum-aligned content for Pre-K through Grade 5 • 4000+ Games •
            10,000+ Worksheets
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

  <!--======== Subjects Section ========-->
  <section class="space-top">
    <div class="container">
      <!--  Grade Selector Pills -->
      <div class="text-center mb-50 wow fadeInUp" data-wow-delay="0.2s">
        <div
          class="grade-pills d-inline-flex flex-wrap gap-2 bg-white p-3 rounded-pill shadow-sm"
        >
          <button
            class="grade-pill"
            :class="{ active: activeGrade === 'all' }"
            @click="gradeFilter('all')"
          >
            All Grades
          </button>
          <button
            class="grade-pill"
            :class="{ active: activeGrade === '3-6' }"
            @click="gradeFilter('3-6')"
          >
            3 to 6
          </button>
          <button
            class="grade-pill"
            :class="{ active: activeGrade === '7-8' }"
            @click="gradeFilter('7-8')"
          >
            7 and 8
          </button>
          <button
            class="grade-pill"
            :class="{ active: activeGrade === '8-12' }"
            @click="gradeFilter('8-12')"
          >
            8 to 12
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
              <div class="subject-icon-large subject-icon-img-wrap mb-4">
                <img
                  src="@/assets/math-icon.png"
                  alt="Mathematics"
                  class="subject-icon-img"
                />
              </div>
              <h2 class="sec-title mb-3">Mathematics</h2>
              <p class="fs-md mb-3">
                Build number sense, master arithmetic, explore geometry, and
                solve real-world problems through engaging games and activities.
              </p>
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
                  <div class="topic-item" style="--topic-hover-color: #f97316">
                    <div
                      class="topic-icon cartoon-icon"
                      style="background: #f97316; animation-delay: 0s"
                    >
                      <i class="fas fa-hashtag text-white"></i>
                    </div>
                    <div class="topic-info">
                      <h6>Counting & Numbers</h6>
                      <p class="small mb-0 text-muted">120 games</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="topic-item" style="--topic-hover-color: #0ea5e9">
                    <div
                      class="topic-icon cartoon-icon"
                      style="background: #0ea5e9; animation-delay: 0.15s"
                    >
                      <i class="fas fa-plus text-white"></i>
                    </div>
                    <div class="topic-info">
                      <h6>Addition</h6>
                      <p class="small mb-0 text-muted">95 games</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="topic-item" style="--topic-hover-color: #f97066">
                    <div
                      class="topic-icon cartoon-icon"
                      style="background: #f97066; animation-delay: 0.3s"
                    >
                      <i class="fas fa-minus text-white"></i>
                    </div>
                    <div class="topic-info">
                      <h6>Subtraction</h6>
                      <p class="small mb-0 text-muted">88 games</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="topic-item" style="--topic-hover-color: #14b8a6">
                    <div
                      class="topic-icon cartoon-icon"
                      style="background: #14b8a6; animation-delay: 0.45s"
                    >
                      <i class="fas fa-times text-white"></i>
                    </div>
                    <div class="topic-info">
                      <h6>Multiplication</h6>
                      <p class="small mb-0 text-muted">102 games</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="topic-item" style="--topic-hover-color: #6366f1">
                    <div
                      class="topic-icon cartoon-icon"
                      style="background: #6366f1; animation-delay: 0.6s"
                    >
                      <i class="fas fa-divide text-white"></i>
                    </div>
                    <div class="topic-info">
                      <h6>Division</h6>
                      <p class="small mb-0 text-muted">76 games</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="topic-item" style="--topic-hover-color: #10b981">
                    <div
                      class="topic-icon cartoon-icon"
                      style="background: #10b981; animation-delay: 0.75s"
                    >
                      <i class="fas fa-shapes text-white"></i>
                    </div>
                    <div class="topic-info">
                      <h6>Geometry</h6>
                      <p class="small mb-0 text-muted">64 games</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="topic-item" style="--topic-hover-color: #f59e0b">
                    <div
                      class="topic-icon cartoon-icon"
                      style="background: #f59e0b; animation-delay: 0.9s"
                    >
                      <i class="fas fa-percentage text-white"></i>
                    </div>
                    <div class="topic-info">
                      <h6>Fractions & Decimals</h6>
                      <p class="small mb-0 text-muted">85 games</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="topic-item" style="--topic-hover-color: #f43f5e">
                    <div
                      class="topic-icon cartoon-icon"
                      style="background: #f43f5e; animation-delay: 1.05s"
                    >
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

  <!--======== Your AI-Buddy Subject ========-->
  <section class="space-bottom bg-smoke">
    <div class="container">
      <div class="subject-card-large wow fadeInUp" data-wow-delay="0.1s">
        <div class="row align-items-center flex-row-reverse gy-40">
          <div class="col-lg-5">
            <div class="subject-header">
              <div class="subject-icon-large subject-icon-img-wrap mb-4">
                <img
                  src="@/assets/ai-buddy-icon.png"
                  alt="Your AI-Buddy"
                  class="subject-icon-img"
                />
              </div>
              <h2 class="sec-title mb-3">Your AI-Buddy</h2>
              <p class="fs-md mb-3">
                AI-powered feature combines friendly interaction, communication
                skills, general knowledge, and guides children on exploring the
                outside world — creating a fun, engaging, and educational
                experience all in one place.
              </p>
              <div class="subject-meta d-flex flex-wrap gap-3 mb-4">
                <div class="meta-badge">
                  <i class="fas fa-gamepad text-primary"></i>
                  <strong>500+</strong> Games
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
                  <div class="topic-item" style="--topic-hover-color: #f97066">
                    <div
                      class="topic-icon cartoon-icon"
                      style="background: #f97066; animation-delay: 0s"
                    >
                      <i class="fas fa-font text-white"></i>
                    </div>
                    <div class="topic-info">
                      <h6>Phonics & Letters</h6>
                      <p class="small mb-0 text-muted">150 games</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="topic-item" style="--topic-hover-color: #8b5cf6">
                    <div
                      class="topic-icon cartoon-icon"
                      style="background: #8b5cf6; animation-delay: 0.15s"
                    >
                      <i class="fas fa-spell-check text-white"></i>
                    </div>
                    <div class="topic-info">
                      <h6>Spelling</h6>
                      <p class="small mb-0 text-muted">110 games</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="topic-item" style="--topic-hover-color: #14b8a6">
                    <div
                      class="topic-icon cartoon-icon"
                      style="background: #14b8a6; animation-delay: 0.3s"
                    >
                      <i class="fas fa-book-reader text-white"></i>
                    </div>
                    <div class="topic-info">
                      <h6>Reading Comprehension</h6>
                      <p class="small mb-0 text-muted">180 games</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="topic-item" style="--topic-hover-color: #f59e0b">
                    <div
                      class="topic-icon cartoon-icon"
                      style="background: #f59e0b; animation-delay: 0.45s"
                    >
                      <i class="fas fa-language text-white"></i>
                    </div>
                    <div class="topic-info">
                      <h6>Vocabulary</h6>
                      <p class="small mb-0 text-muted">95 games</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="topic-item" style="--topic-hover-color: #6366f1">
                    <div
                      class="topic-icon cartoon-icon"
                      style="background: #6366f1; animation-delay: 0.6s"
                    >
                      <i class="fas fa-pen-fancy text-white"></i>
                    </div>
                    <div class="topic-info">
                      <h6>Grammar</h6>
                      <p class="small mb-0 text-muted">88 games</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="topic-item" style="--topic-hover-color: #10b981">
                    <div
                      class="topic-icon cartoon-icon"
                      style="background: #10b981; animation-delay: 0.75s"
                    >
                      <i class="fas fa-pencil-alt text-white"></i>
                    </div>
                    <div class="topic-info">
                      <h6>Writing</h6>
                      <p class="small mb-0 text-muted">72 games</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="topic-item" style="--topic-hover-color: #f43f5e">
                    <div
                      class="topic-icon cartoon-icon"
                      style="background: #f43f5e; animation-delay: 0.9s"
                    >
                      <i class="fas fa-comment-dots text-white"></i>
                    </div>
                    <div class="topic-info">
                      <h6>Parts of Speech</h6>
                      <p class="small mb-0 text-muted">65 games</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="topic-item" style="--topic-hover-color: #0ea5e9">
                    <div
                      class="topic-icon cartoon-icon"
                      style="background: #0ea5e9; animation-delay: 1.05s"
                    >
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

  <!--======== Science Subject (commented out) ========-->
  <!--
  <section class="space-bottom">
    <div class="container">
      <div class="subject-card-large wow fadeInUp" data-wow-delay="0.1s">
        <div class="row align-items-center gy-40">
          <div class="col-lg-5">
            <div class="subject-header">
              <div class="subject-icon-large subject-icon-img-wrap mb-4">
                <img src="@/assets/science-icon.png" alt="Science" class="subject-icon-img" />
              </div>
              <h2 class="sec-title mb-3">Science</h2>
              <p class="fs-md mb-3">Discover the wonders of the natural world through experiments, observations, and interactive science games covering biology, physics, and earth science.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  -->

  <!--======== Craft & Drawing Subject ========-->
  <section class="space-bottom">
    <div class="container">
      <div class="subject-card-large wow fadeInUp" data-wow-delay="0.1s">
        <div class="row align-items-center gy-40">
          <div class="col-lg-5">
            <div class="subject-header">
              <div class="subject-icon-large subject-icon-img-wrap mb-4">
                <img
                  src="@/assets/craft-drawing-icon.png"
                  alt="Craft & Drawing"
                  class="subject-icon-img"
                />
              </div>
              <h2 class="sec-title mb-3">Craft & Drawing</h2>
              <p class="fs-md mb-3">
                Unleash your child's creativity through fun drawing lessons,
                paper crafts, and hands-on art activities that build fine motor
                skills, imagination, and self-expression.
              </p>
              <div class="subject-meta d-flex flex-wrap gap-3 mb-4">
                <div class="meta-badge">
                  <i class="fas fa-paint-brush text-primary"></i>
                  <strong>200+</strong> Activities
                </div>
                <div class="meta-badge">
                  <i class="fas fa-file-alt text-success"></i>
                  <strong>500+</strong> Templates
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
                  <div class="topic-item" style="--topic-hover-color: #f59e0b">
                    <div
                      class="topic-icon cartoon-icon"
                      style="background: #f59e0b; animation-delay: 0s"
                    >
                      <i class="fas fa-pencil-alt text-white"></i>
                    </div>
                    <div class="topic-info">
                      <h6>Pencil Sketching</h6>
                      <p class="small mb-0 text-muted">45 activities</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="topic-item" style="--topic-hover-color: #e91e8c">
                    <div
                      class="topic-icon cartoon-icon"
                      style="background: #e91e8c; animation-delay: 0.15s"
                    >
                      <i class="fas fa-palette text-white"></i>
                    </div>
                    <div class="topic-info">
                      <h6>Color & Painting</h6>
                      <p class="small mb-0 text-muted">60 activities</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="topic-item" style="--topic-hover-color: #16a34a">
                    <div
                      class="topic-icon cartoon-icon"
                      style="background: #16a34a; animation-delay: 0.3s"
                    >
                      <i class="fas fa-cut text-white"></i>
                    </div>
                    <div class="topic-info">
                      <h6>Paper Craft</h6>
                      <p class="small mb-0 text-muted">50 activities</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="topic-item" style="--topic-hover-color: #6366f1">
                    <div
                      class="topic-icon cartoon-icon"
                      style="background: #6366f1; animation-delay: 0.45s"
                    >
                      <i class="fas fa-shapes text-white"></i>
                    </div>
                    <div class="topic-info">
                      <h6>Origami & Folding</h6>
                      <p class="small mb-0 text-muted">35 activities</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="topic-item" style="--topic-hover-color: #0ea5e9">
                    <div
                      class="topic-icon cartoon-icon"
                      style="background: #0ea5e9; animation-delay: 0.6s"
                    >
                      <i class="fas fa-hand-sparkles text-white"></i>
                    </div>
                    <div class="topic-info">
                      <h6>Clay & Modelling</h6>
                      <p class="small mb-0 text-muted">30 activities</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="topic-item" style="--topic-hover-color: #14b8a6">
                    <div
                      class="topic-icon cartoon-icon"
                      style="background: #14b8a6; animation-delay: 0.75s"
                    >
                      <i class="fas fa-magic text-white"></i>
                    </div>
                    <div class="topic-info">
                      <h6>Creative Projects</h6>
                      <p class="small mb-0 text-muted">40 activities</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-4">
                <router-link to="/subjects/craft-drawing" class="vs-btn style2">
                  Explore All Craft & Drawing Activities
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
  <section
    class="cta-section space-shape-plus"
    data-bg-src="/assets/img/bg/cta-4.jpg"
    data-opacity="8"
    data-overlay="custom"
  >
    <div class="container text-center z-index-common">
      <div class="title-area mb-35 wow fadeInUp" data-wow-delay="0.1s">
        <span class="sub-title text-white">Start Learning Today</span>
        <h2 class="sec-title text-white">Ready to Help Your Child Excel?</h2>
        <p class="text-white fs-md mt-3">
          Join 50M+ kids learning through play
        </p>
      </div>
      <router-link to="/pricing" class="vs-btn wave-btn">
        View Pricing Plans
        <i class="fas fa-arrow-right ms-2"></i>
      </router-link>
    </div>
    <div class="section-before style-2">
      <img src="/assets/img/shape/main-shape-before.png" alt="shape" />
    </div>
    <div class="section-after style-2">
      <img src="/assets/img/shape/main-shape-after.png" alt="shape" />
    </div>
  </section>
</template>

<style scoped>
/* Grade Pills */
.grade-pills {
  max-width: 800px;
}

.grade-pill {
  padding: 10px 20px;
  border: 2px solid #e0e0e0;
  background: white;
  border-radius: 25px;
  font-weight: 600;
  color: #636e72;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 15px;
}

.grade-pill:hover {
  border-color: #4a8b3f;
  color: #4a8b3f;
  transform: translateY(-2px);
}

.grade-pill.active {
  background: linear-gradient(135deg, #4a8b3f, #3a7032);
  color: white;
  border-color: #4a8b3f;
}

/* Subject Card Large */
.subject-card-large {
  background: white;
  padding: 50px 40px;
  border-radius: 24px;
  box-shadow: 0 15px 60px rgba(0, 0, 0, 0.1);
}

.subject-icon-large {
  width: 120px;
  height: 120px;
  border-radius: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}

.subject-icon-img-wrap {
  background: transparent !important;
  box-shadow: none;
  border-radius: 0;
  width: 140px;
  height: 140px;
}

.subject-icon-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.subject-meta {
}

.meta-badge {
  background: #f7f8fa;
  padding: 10px 20px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #2d3436;
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
  background: #d4edda;
  color: #155724;
}

.badge-pill.intermediate {
  background: #fff3cd;
  color: #856404;
}

.badge-pill.advanced {
  background: #f8d7da;
  color: #721c24;
}

/* Topic Grid */
.topic-grid {
}

.topic-item {
  background: #f7f8fa;
  padding: 15px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 15px;
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  border-left: 3px solid transparent;
  cursor: default;
}

.topic-item:hover {
  background: #fff;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  border-left-color: var(--topic-hover-color, #6c5ce7);
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

.cartoon-icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 3px solid #fff;
  box-shadow:
    0 4px 15px rgba(0, 0, 0, 0.15),
    0 0 0 2px rgba(0, 0, 0, 0.06);
  font-size: 18px;
  transform: rotate(-3deg);
  animation: cartoon-float 3s ease-in-out infinite;
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.topic-item:hover .cartoon-icon {
  animation: cartoon-bounce 0.5s ease;
  transform: scale(1.15) rotate(0deg);
  box-shadow:
    0 6px 20px rgba(0, 0, 0, 0.2),
    0 0 0 2px rgba(0, 0, 0, 0.08);
}

@keyframes cartoon-float {
  0%,
  100% {
    transform: translateY(0) rotate(-3deg);
  }
  50% {
    transform: translateY(-4px) rotate(-3deg);
  }
}

@keyframes cartoon-bounce {
  0% {
    transform: scale(1) rotate(-3deg);
  }
  30% {
    transform: scale(1.2) rotate(-5deg);
  }
  50% {
    transform: scale(1.1) rotate(5deg);
  }
  70% {
    transform: scale(1.18) rotate(-2deg);
  }
  100% {
    transform: scale(1.15) rotate(0deg);
  }
}

.topic-info h6 {
  margin: 0;
  font-weight: 700;
  color: #2d3436;
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
  background: linear-gradient(135deg, #4a8b3f 0%, #3a7a30 40%, #1b1464 100%);
  padding: 70px 0 80px;
}

.subjects-hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}

/* Floating Particles */
.hero-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}

.hero-particles .particle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.25);
  animation: float-particle linear infinite;
}

@keyframes float-particle {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.25;
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
    opacity: 0.4;
  }
  100% {
    transform: translateY(0) rotate(360deg);
    opacity: 0.25;
  }
}

/* Breadcrumb */
.modern-breadcrumb {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 7px 18px;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);
  border-radius: 50px;
  margin-bottom: 16px;
  border: 1px solid rgba(255, 255, 255, 0.18);
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
  font-size: 9px;
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
  padding: 8px 20px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  margin-bottom: 18px;
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
.subjects-hero-title {
  font-size: 40px;
  font-weight: 900;
  line-height: 1.2;
  color: white;
  margin-bottom: 15px;
  letter-spacing: -1px;
}

.gradient-text-light {
  background: linear-gradient(135deg, #ffe5b4, #ffdab9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Hero Description */
.subjects-hero-description {
  font-size: 15px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 20px;
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

/* Responsive */
@media (max-width: 991px) {
  .subjects-hero-bg {
    padding: 60px 0 70px;
  }

  .subjects-hero-title {
    font-size: 34px;
  }

  .subjects-hero-description {
    font-size: 14px;
  }
}

@media (max-width: 767px) {
  .subjects-hero-bg {
    padding: 50px 0 60px;
  }

  .subjects-hero-title {
    font-size: 30px;
  }

  .subjects-hero-description {
    font-size: 14px;
    margin-bottom: 15px;
  }

  .hero-badge span {
    font-size: 12px;
  }

  .hero-badge i {
    font-size: 12px;
  }

  .hero-wave-bottom svg {
    height: 60px;
  }
}

@media (max-width: 575px) {
  .subjects-hero-bg {
    padding: 45px 0 55px;
  }

  .subjects-hero-title {
    font-size: 26px;
  }

  .subjects-hero-description {
    font-size: 13px;
  }

  .modern-breadcrumb {
    padding: 6px 16px;
  }

  .breadcrumb-link,
  .breadcrumb-current {
    font-size: 12px;
  }

  .hero-badge {
    padding: 6px 16px;
  }

  .hero-wave-bottom svg {
    height: 50px;
  }
}
</style>
