<script setup>
import { computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { initTemplateScripts, cleanupTemplateScripts } from '@/utils/initScripts'

const route = useRoute()
const router = useRouter()

const subjectsData = {
  math: {
    name: 'Mathematics',
    icon: 'fas fa-calculator',
    color: '#6C5CE7',
    gradient: 'linear-gradient(135deg, #6C5CE7, #5EA750)',
    heroTitle: 'Master Mathematics',
    heroDescription: 'Build strong math foundations with interactive games, puzzles, and activities designed for Pre-K through Grade 5.',
    description: 'Build number sense, master arithmetic, explore geometry, and solve real-world problems through engaging games and activities.',
    stats: {
      games: '1000+',
      worksheets: '3500+',
      grades: 'Pre-K to 5',
    },
    topics: [
      { icon: 'fas fa-hashtag', name: 'Counting & Numbers', games: '120 games' },
      { icon: 'fas fa-plus', name: 'Addition', games: '95 games' },
      { icon: 'fas fa-minus', name: 'Subtraction', games: '88 games' },
      { icon: 'fas fa-times', name: 'Multiplication', games: '102 games' },
      { icon: 'fas fa-divide', name: 'Division', games: '76 games' },
      { icon: 'fas fa-shapes', name: 'Geometry', games: '64 games' },
      { icon: 'fas fa-percentage', name: 'Fractions & Decimals', games: '85 games' },
      { icon: 'fas fa-question-circle', name: 'Word Problems', games: '92 games' },
    ],
    grades: [
      { name: 'Pre-K', ages: '3-4 years', skills: ['Number recognition 1-10', 'Counting objects', 'Shape identification', 'Sorting & patterns'] },
      { name: 'Kindergarten', ages: '5-6 years', skills: ['Counting to 100', 'Addition within 10', 'Comparing numbers', 'Basic shapes & measurement'] },
      { name: '1st Grade', ages: '6-7 years', skills: ['Addition & subtraction to 20', 'Place value (tens & ones)', 'Telling time', 'Measuring lengths'] },
      { name: '2nd Grade', ages: '7-8 years', skills: ['Addition & subtraction to 100', 'Introduction to multiplication', 'Money concepts', 'Basic fractions'] },
      { name: '3rd Grade', ages: '8-9 years', skills: ['Multiplication & division facts', 'Fractions on number lines', 'Area & perimeter', 'Rounding numbers'] },
      { name: '4th Grade', ages: '9-10 years', skills: ['Multi-digit multiplication', 'Long division', 'Equivalent fractions', 'Angles & geometry'] },
      { name: '5th Grade', ages: '10-11 years', skills: ['Decimal operations', 'Adding & subtracting fractions', 'Volume measurement', 'Coordinate graphing'] },
    ],
    features: [
      { icon: 'fas fa-brain', title: 'Builds Problem Solving', description: 'Develop critical thinking and logical reasoning through real-world math challenges and puzzles.' },
      { icon: 'fas fa-chart-line', title: 'Adaptive Learning', description: 'Activities automatically adjust difficulty based on your child\'s skill level and progress.' },
      { icon: 'fas fa-globe-americas', title: 'Real-World Application', description: 'Learn math through practical scenarios like shopping, cooking, and measuring that kids encounter daily.' },
      { icon: 'fas fa-trophy', title: 'Progress Tracking', description: 'Visual dashboards and achievement badges keep kids motivated and parents informed.' },
    ],
  },
  reading: {
    name: 'Reading & ELA',
    icon: 'fas fa-book-open',
    color: '#FD79A8',
    gradient: 'linear-gradient(135deg, #FD79A8, #E84393)',
    heroTitle: 'Explore Reading & ELA',
    heroDescription: 'Spark a lifelong love of reading with phonics, vocabulary, comprehension, and writing activities for Pre-K through Grade 5.',
    description: 'Develop phonics, vocabulary, reading comprehension, grammar, and writing skills through interactive stories and activities.',
    stats: {
      games: '1200+',
      worksheets: '4000+',
      grades: 'Pre-K to 5',
    },
    topics: [
      { icon: 'fas fa-font', name: 'Phonics & Letters', games: '150 games' },
      { icon: 'fas fa-spell-check', name: 'Spelling', games: '110 games' },
      { icon: 'fas fa-book-reader', name: 'Reading Comprehension', games: '180 games' },
      { icon: 'fas fa-language', name: 'Vocabulary', games: '95 games' },
      { icon: 'fas fa-pen-fancy', name: 'Grammar', games: '88 games' },
      { icon: 'fas fa-pencil-alt', name: 'Writing', games: '72 games' },
      { icon: 'fas fa-comment-dots', name: 'Parts of Speech', games: '65 games' },
      { icon: 'fas fa-quote-left', name: 'Punctuation', games: '55 games' },
    ],
    grades: [
      { name: 'Pre-K', ages: '3-4 years', skills: ['Letter recognition', 'Rhyming words', 'Listening comprehension', 'Name writing'] },
      { name: 'Kindergarten', ages: '5-6 years', skills: ['Letter sounds & phonics', 'Sight words', 'Simple sentence reading', 'Print concepts'] },
      { name: '1st Grade', ages: '6-7 years', skills: ['Decoding & blending', 'Reading fluency', 'Story comprehension', 'Basic spelling patterns'] },
      { name: '2nd Grade', ages: '7-8 years', skills: ['Chapter book reading', 'Vocabulary building', 'Story elements', 'Writing paragraphs'] },
      { name: '3rd Grade', ages: '8-9 years', skills: ['Reading for information', 'Context clues', 'Grammar & punctuation', 'Writing essays'] },
      { name: '4th Grade', ages: '9-10 years', skills: ['Inference & analysis', 'Research skills', 'Parts of speech mastery', 'Narrative writing'] },
      { name: '5th Grade', ages: '10-11 years', skills: ['Critical reading', 'Advanced vocabulary', 'Persuasive writing', 'Literary analysis'] },
    ],
    features: [
      { icon: 'fas fa-book', title: 'Builds Literacy', description: 'Structured phonics and reading programs that develop confident, independent readers step by step.' },
      { icon: 'fas fa-lightbulb', title: 'Sparks Imagination', description: 'Interactive stories and creative writing prompts that nurture a love of reading and self-expression.' },
      { icon: 'fas fa-comments', title: 'Communication Skills', description: 'Grammar, vocabulary, and writing exercises that strengthen how kids express their ideas.' },
      { icon: 'fas fa-trophy', title: 'Progress Tracking', description: 'Visual dashboards and achievement badges keep kids motivated and parents informed.' },
    ],
  },
  science: {
    name: 'Science',
    icon: 'fas fa-flask',
    color: '#00B894',
    gradient: 'linear-gradient(135deg, #00B894, #00D2A0)',
    heroTitle: 'Discover Science',
    heroDescription: 'Explore the wonders of the natural world with hands-on experiments, observations, and interactive activities for K through Grade 5.',
    description: 'Discover the wonders of the natural world through experiments, observations, and interactive science games covering biology, physics, and earth science.',
    stats: {
      games: '800+',
      worksheets: '2500+',
      grades: 'K to 5',
    },
    topics: [
      { icon: 'fas fa-paw', name: 'Animals & Habitats', games: '110 games' },
      { icon: 'fas fa-seedling', name: 'Plants & Life Cycles', games: '85 games' },
      { icon: 'fas fa-cloud-sun-rain', name: 'Weather & Seasons', games: '72 games' },
      { icon: 'fas fa-globe-americas', name: 'Earth & Space', games: '95 games' },
      { icon: 'fas fa-atom', name: 'Matter & Energy', games: '68 games' },
      { icon: 'fas fa-microscope', name: 'Scientific Method', games: '55 games' },
    ],
    grades: [
      { name: 'Kindergarten', ages: '5-6 years', skills: ['Five senses', 'Living vs non-living', 'Basic weather', 'Animal needs'] },
      { name: '1st Grade', ages: '6-7 years', skills: ['Plant parts & needs', 'Day & night sky', 'Sound & light basics', 'Animal habitats'] },
      { name: '2nd Grade', ages: '7-8 years', skills: ['Life cycles', 'States of matter', 'Landforms & water', 'Push & pull forces'] },
      { name: '3rd Grade', ages: '8-9 years', skills: ['Ecosystems & food chains', 'Weather patterns', 'Simple machines', 'Inherited traits'] },
      { name: '4th Grade', ages: '9-10 years', skills: ['Earth\'s systems', 'Energy transfer', 'Rock cycle', 'Plant & animal structures'] },
      { name: '5th Grade', ages: '10-11 years', skills: ['Matter & chemical changes', 'Earth & space systems', 'Organisms & environments', 'Engineering design'] },
    ],
    features: [
      { icon: 'fas fa-search', title: 'Nurtures Curiosity', description: 'Hands-on experiments and discovery-based activities that encourage kids to ask questions and explore.' },
      { icon: 'fas fa-flask', title: 'Scientific Thinking', description: 'Learn the scientific method through observation, hypothesis, and experimentation activities.' },
      { icon: 'fas fa-globe-americas', title: 'Real-World Connections', description: 'Explore topics like weather, animals, and space that connect classroom learning to the world around them.' },
      { icon: 'fas fa-trophy', title: 'Progress Tracking', description: 'Visual dashboards and achievement badges keep kids motivated and parents informed.' },
    ],
  },
}

const subject = computed(() => {
  const key = route.params.subject
  if (subjectsData[key]) {
    return subjectsData[key]
  }
  router.replace('/subjects')
  return null
})

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
  <template v-if="subject">
    <!-- Modern Hero Section -->
    <section class="classdetails-hero-section">
      <div class="classdetails-hero-bg">
        <!-- Floating Particles -->
        <div class="hero-particles">
          <span class="particle" style="left: 8%; top: 20%; width: 10px; height: 10px; animation-delay: 0s; animation-duration: 7s;"></span>
          <span class="particle" style="left: 85%; top: 30%; width: 8px; height: 8px; animation-delay: 1.5s; animation-duration: 9s;"></span>
          <span class="particle" style="left: 25%; top: 65%; width: 12px; height: 12px; animation-delay: 3s; animation-duration: 8s;"></span>
          <span class="particle" style="left: 70%; top: 15%; width: 7px; height: 7px; animation-delay: 2s; animation-duration: 10s;"></span>
          <span class="particle" style="left: 50%; top: 75%; width: 9px; height: 9px; animation-delay: 4s; animation-duration: 7.5s;"></span>
          <span class="particle" style="left: 92%; top: 55%; width: 11px; height: 11px; animation-delay: 1s; animation-duration: 8.5s;"></span>
        </div>

        <div class="container">
          <div class="classdetails-hero-content">
            <nav class="modern-breadcrumb">
              <router-link to="/" class="breadcrumb-link">Home</router-link>
              <i class="fas fa-chevron-right"></i>
              <router-link to="/subjects" class="breadcrumb-link">Subjects</router-link>
              <i class="fas fa-chevron-right"></i>
              <span class="breadcrumb-current">{{ subject.name }}</span>
            </nav>
            <div class="hero-badge">
              <i :class="subject.icon"></i>
              <span>{{ subject.name }}</span>
            </div>
            <h1 class="classdetails-hero-title">
              {{ subject.heroTitle }}
              <span class="gradient-text-light d-block">With Fun & Games</span>
            </h1>
            <p class="classdetails-hero-description">{{ subject.heroDescription }}</p>
          </div>
        </div>
      </div>
      <div class="hero-wave-bottom">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z" fill="#FFFFFF"/>
        </svg>
      </div>
    </section>

    <!--======== Section A: Subject Overview ========-->
    <section class="subject-overview-section space-top space-bottom">
      <div class="container">
        <div class="subject-card-large">
          <div class="row align-items-center gy-40">
            <div class="col-lg-5">
              <div class="subject-header">
                <div class="subject-icon-large mb-4" :style="{ background: subject.gradient }">
                  <i :class="subject.icon + ' fa-4x text-white'"></i>
                </div>
                <h2 class="sec-title mb-3">{{ subject.name }}</h2>
                <p class="fs-md mb-3">{{ subject.description }}</p>
                <div class="subject-meta d-flex flex-wrap gap-3 mb-4">
                  <div class="meta-badge">
                    <i class="fas fa-gamepad text-primary"></i>
                    <strong>{{ subject.stats.games }}</strong> Games
                  </div>
                  <div class="meta-badge">
                    <i class="fas fa-file-alt text-success"></i>
                    <strong>{{ subject.stats.worksheets }}</strong> Worksheets
                  </div>
                  <div class="meta-badge">
                    <i class="fas fa-graduation-cap text-warning"></i>
                    <strong>{{ subject.stats.grades }}</strong>
                  </div>
                </div>
                <div class="difficulty-badges mb-4">
                  <span class="badge-pill beginner">Beginner</span>
                  <span class="badge-pill intermediate">Intermediate</span>
                  <span class="badge-pill advanced">Advanced</span>
                </div>
                <router-link to="/pricing" class="vs-btn">
                  Start Learning Free
                  <i class="fas fa-arrow-right ms-2"></i>
                </router-link>
              </div>
            </div>

            <div class="col-lg-7">
              <div class="topic-grid">
                <h5 class="mb-4">Topics Covered:</h5>
                <div class="row g-3">
                  <div class="col-md-6" v-for="topic in subject.topics" :key="topic.name">
                    <div class="topic-item">
                      <div class="topic-icon" :style="{ background: subject.color }">
                        <i :class="topic.icon + ' text-white'"></i>
                      </div>
                      <div class="topic-info">
                        <h6>{{ topic.name }}</h6>
                        <p class="small mb-0 text-muted">{{ topic.games }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--======== Section B: Grade-by-Grade Breakdown ========-->
    <section class="grade-breakdown-section space-bottom" style="background: #F8F9FC;">
      <div class="container">
        <div class="text-center mb-50">
          <span class="section-tag" :style="{ background: subject.color + '18', color: subject.color }">
            <i :class="subject.icon" class="me-1"></i> Grade-by-Grade
          </span>
          <h2 class="sec-title mt-3">What Your Child Will Learn</h2>
          <p class="sec-description">{{ subject.name }} skills and concepts broken down by grade level</p>
        </div>

        <div class="row g-4">
          <div class="col-lg-4 col-md-6" v-for="grade in subject.grades" :key="grade.name">
            <div class="grade-card">
              <div class="grade-card-accent" :style="{ background: subject.color }"></div>
              <div class="grade-card-body">
                <h5 class="grade-card-title">{{ grade.name }}</h5>
                <span class="grade-card-ages">{{ grade.ages }}</span>
                <ul class="grade-skills-list">
                  <li v-for="skill in grade.skills" :key="skill">
                    <i class="fas fa-check" :style="{ color: subject.color }"></i>
                    {{ skill }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--======== Section C: Why Learn This Subject ========-->
    <section class="features-section space-bottom">
      <div class="container">
        <div class="text-center mb-50">
          <span class="section-tag" :style="{ background: subject.color + '18', color: subject.color }">
            <i class="fas fa-star me-1"></i> Benefits
          </span>
          <h2 class="sec-title mt-3">Why Learn {{ subject.name }}?</h2>
        </div>

        <div class="row g-4">
          <div class="col-lg-3 col-md-6" v-for="feature in subject.features" :key="feature.title">
            <div class="feature-card">
              <div class="feature-icon" :style="{ background: subject.gradient }">
                <i :class="feature.icon + ' text-white'"></i>
              </div>
              <h5 class="feature-title">{{ feature.title }}</h5>
              <p class="feature-description">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--======== Section D: CTA Section ========-->
    <section class="subject-cta-section" style="background: #F8F9FC;">
      <div class="container">
        <div class="subject-cta-card" :style="{ background: subject.gradient }">
          <div class="cta-particles">
            <span class="cta-particle" style="left: 5%; top: 20%; width: 8px; height: 8px; animation-delay: 0s;"></span>
            <span class="cta-particle" style="left: 90%; top: 30%; width: 6px; height: 6px; animation-delay: 1s;"></span>
            <span class="cta-particle" style="left: 20%; top: 70%; width: 10px; height: 10px; animation-delay: 2s;"></span>
            <span class="cta-particle" style="left: 75%; top: 60%; width: 7px; height: 7px; animation-delay: 0.5s;"></span>
          </div>
          <div class="text-center position-relative" style="z-index: 2;">
            <h2 class="cta-title">Ready to Start Learning {{ subject.name }}?</h2>
            <p class="cta-description">Give your child the tools to succeed with fun, curriculum-aligned {{ subject.name.toLowerCase() }} activities.</p>
            <div class="cta-buttons">
              <router-link to="/pricing" class="vs-btn cta-btn-primary">
                <i class="fas fa-rocket me-2"></i> Start Free Trial
              </router-link>
              <router-link to="/subjects" class="vs-btn cta-btn-secondary">
                <i class="fas fa-th-large me-2"></i> Explore Other Subjects
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
</template>

<style scoped>
/* ========== Hero Section ========== */
.classdetails-hero-section {
  position: relative;
  overflow: hidden;
  z-index: 10;
}

.classdetails-hero-bg {
  background: linear-gradient(135deg, #4A8B3F 0%, #3a7a30 40%, #1B1464 100%);
  padding: 70px 0 80px;
  position: relative;
  z-index: 1;
}

.classdetails-hero-content {
  text-align: center;
  position: relative;
  z-index: 10;
  max-width: 900px;
  margin: 0 auto;
}

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
  0% { transform: translateY(0) rotate(0deg); opacity: 0.25; }
  50% { transform: translateY(-20px) rotate(180deg); opacity: 0.4; }
  100% { transform: translateY(0) rotate(360deg); opacity: 0.25; }
}

.modern-breadcrumb {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);
  padding: 7px 18px;
  border-radius: 50px;
  margin-bottom: 16px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.breadcrumb-link {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-weight: 500;
  font-size: 13px;
  transition: all 0.3s ease;
}

.breadcrumb-link:hover {
  color: #FFE5B4;
}

.modern-breadcrumb i {
  color: rgba(255, 255, 255, 0.6);
  font-size: 9px;
}

.breadcrumb-current {
  color: #fff;
  font-weight: 600;
  font-size: 13px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  padding: 8px 20px;
  border-radius: 50px;
  margin-bottom: 18px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  animation: float-badge 3s ease-in-out infinite;
}

.hero-badge i {
  font-size: 14px;
  color: #FFE5B4;
}

.hero-badge span {
  color: #fff;
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 0.5px;
}

@keyframes float-badge {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

.classdetails-hero-title {
  font-size: 40px;
  font-weight: 900;
  line-height: 1.2;
  margin-bottom: 15px;
  color: #fff;
  letter-spacing: -1px;
}

.classdetails-hero-description {
  font-size: 15px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin: 0 auto;
  font-weight: 400;
}

.gradient-text-light {
  background: linear-gradient(135deg, #FFE5B4, #FFDAB9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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
  display: block;
  width: 100%;
  height: 80px;
}

/* ========== Subject Overview (Section A) ========== */
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

/* ========== Section Tag ========== */
.section-tag {
  display: inline-block;
  padding: 6px 18px;
  border-radius: 50px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.sec-description {
  color: #636E72;
  font-size: 16px;
  max-width: 550px;
  margin: 10px auto 0;
}

/* ========== Grade Cards (Section B) ========== */
.grade-breakdown-section {
  padding-top: 80px;
}

.grade-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.3s;
  height: 100%;
}

.grade-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.12);
}

.grade-card-accent {
  height: 5px;
  width: 100%;
}

.grade-card-body {
  padding: 25px;
}

.grade-card-title {
  font-weight: 800;
  color: #2D3436;
  font-size: 18px;
  margin-bottom: 4px;
}

.grade-card-ages {
  font-size: 13px;
  color: #B2BEC3;
  font-weight: 500;
  display: block;
  margin-bottom: 16px;
}

.grade-skills-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.grade-skills-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 0;
  font-size: 14px;
  color: #2D3436;
}

.grade-skills-list li i {
  font-size: 11px;
  flex-shrink: 0;
}

/* ========== Feature Cards (Section C) ========== */
.feature-card {
  background: white;
  border-radius: 20px;
  padding: 35px 25px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.3s;
  height: 100%;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.12);
}

.feature-icon {
  width: 70px;
  height: 70px;
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 24px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.feature-title {
  font-weight: 800;
  font-size: 17px;
  color: #2D3436;
  margin-bottom: 10px;
}

.feature-description {
  font-size: 14px;
  color: #636E72;
  line-height: 1.6;
  margin: 0;
}

/* ========== CTA Section (Section D) ========== */
.subject-cta-section {
  padding: 0 0 80px;
}

.subject-cta-card {
  border-radius: 24px;
  padding: 60px 40px;
  position: relative;
  overflow: hidden;
}

.cta-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}

.cta-particle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  animation: float-particle 6s linear infinite;
}

.cta-title {
  font-size: 32px;
  font-weight: 900;
  color: #fff;
  margin-bottom: 12px;
}

.cta-description {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.9);
  max-width: 550px;
  margin: 0 auto 30px;
  line-height: 1.6;
}

.cta-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-btn-primary {
  background: #fff !important;
  color: #2D3436 !important;
  font-weight: 700;
  padding: 14px 32px;
  border-radius: 50px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  transition: all 0.3s;
}

.cta-btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.cta-btn-secondary {
  background: rgba(255, 255, 255, 0.2) !important;
  color: #fff !important;
  font-weight: 600;
  padding: 14px 32px;
  border-radius: 50px;
  border: 2px solid rgba(255, 255, 255, 0.4) !important;
  transition: all 0.3s;
}

.cta-btn-secondary:hover {
  background: rgba(255, 255, 255, 0.3) !important;
  transform: translateY(-3px);
}

/* ========== Responsive ========== */
@media (max-width: 991px) {
  .classdetails-hero-bg {
    padding: 60px 0 70px;
  }

  .classdetails-hero-title {
    font-size: 34px;
  }

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

  .cta-title {
    font-size: 26px;
  }

  .subject-cta-card {
    padding: 50px 30px;
  }
}

@media (max-width: 767px) {
  .classdetails-hero-bg {
    padding: 50px 0 60px;
  }

  .classdetails-hero-title {
    font-size: 30px;
  }

  .classdetails-hero-description {
    font-size: 14px;
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

  .feature-card {
    padding: 25px 20px;
  }

  .cta-title {
    font-size: 24px;
  }

  .cta-description {
    font-size: 14px;
  }

  .subject-cta-card {
    padding: 40px 20px;
  }
}

@media (max-width: 575px) {
  .classdetails-hero-bg {
    padding: 45px 0 55px;
  }

  .classdetails-hero-title {
    font-size: 26px;
  }

  .classdetails-hero-description {
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

  .grade-breakdown-section {
    padding-top: 60px;
  }

  .cta-title {
    font-size: 22px;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .cta-btn-primary,
  .cta-btn-secondary {
    width: 100%;
    text-align: center;
  }
}
</style>
