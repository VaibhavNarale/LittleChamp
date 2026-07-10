<script setup>
import { computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import {
  initTemplateScripts,
  cleanupTemplateScripts,
} from '@/utils/initScripts'
import mathIcon from '@/assets/math-icon.png'
import readingIcon from '@/assets/ai-buddy-icon.png'
import scienceIcon from '@/assets/science-icon.png'
import craftIcon from '@/assets/craft-drawing-icon.png'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()

// Non-text metadata (icons, colors, gradients, images) preserved exactly.
// All human-visible text comes from the `subjectDetails` i18n namespace.
const subjectsMeta = {
  math: {
    icon: 'fas fa-calculator',
    iconImage: mathIcon,
    color: '#6C5CE7',
    gradient: 'linear-gradient(135deg, #6C5CE7, #5EA750)',
    topics: [
      { icon: 'fas fa-hashtag', color: '#F97316' },
      { icon: 'fas fa-plus', color: '#0EA5E9' },
      { icon: 'fas fa-minus', color: '#F97066' },
      { icon: 'fas fa-times', color: '#14B8A6' },
      { icon: 'fas fa-divide', color: '#6366F1' },
      { icon: 'fas fa-shapes', color: '#10B981' },
      { icon: 'fas fa-percentage', color: '#F59E0B' },
      { icon: 'fas fa-question-circle', color: '#F43F5E' },
    ],
    gradeCount: 7,
    featureIcons: [
      'fas fa-brain',
      'fas fa-chart-line',
      'fas fa-globe-americas',
      'fas fa-trophy',
    ],
  },
  reading: {
    icon: 'fas fa-book-open',
    iconImage: readingIcon,
    color: '#FD79A8',
    gradient: 'linear-gradient(135deg, #FD79A8, #E84393)',
    topics: [
      { icon: 'fas fa-font', color: '#F97066' },
      { icon: 'fas fa-spell-check', color: '#8B5CF6' },
      { icon: 'fas fa-book-reader', color: '#14B8A6' },
      { icon: 'fas fa-language', color: '#F59E0B' },
      { icon: 'fas fa-pen-fancy', color: '#6366F1' },
      { icon: 'fas fa-pencil-alt', color: '#10B981' },
      { icon: 'fas fa-comment-dots', color: '#F43F5E' },
      { icon: 'fas fa-quote-left', color: '#0EA5E9' },
    ],
    gradeCount: 7,
    featureIcons: [
      'fas fa-book',
      'fas fa-lightbulb',
      'fas fa-comments',
      'fas fa-trophy',
    ],
  },
  science: {
    icon: 'fas fa-paint-brush',
    iconImage: scienceIcon,
    color: '#00B894',
    gradient: 'linear-gradient(135deg, #00B894, #00D2A0)',
    topics: [
      { icon: 'fas fa-paw', color: '#16A34A' },
      { icon: 'fas fa-seedling', color: '#F97066' },
      { icon: 'fas fa-cloud-sun-rain', color: '#0EA5E9' },
      { icon: 'fas fa-globe-americas', color: '#6366F1' },
      { icon: 'fas fa-atom', color: '#F59E0B' },
      { icon: 'fas fa-microscope', color: '#14B8A6' },
    ],
    gradeCount: 6,
    featureIcons: [
      'fas fa-search',
      'fas fa-flask',
      'fas fa-globe-americas',
      'fas fa-trophy',
    ],
  },
  'craft-drawing': {
    icon: 'fas fa-palette',
    iconImage: craftIcon,
    color: '#F59E0B',
    gradient: 'linear-gradient(135deg, #F59E0B, #F97316)',
    topics: [
      { icon: 'fas fa-pencil-alt', color: '#F59E0B' },
      { icon: 'fas fa-palette', color: '#E91E8C' },
      { icon: 'fas fa-cut', color: '#16A34A' },
      { icon: 'fas fa-shapes', color: '#6366F1' },
      { icon: 'fas fa-hand-sparkles', color: '#0EA5E9' },
      { icon: 'fas fa-magic', color: '#14B8A6' },
    ],
    gradeCount: 7,
    featureIcons: [
      'fas fa-paint-brush',
      'fas fa-hand-paper',
      'fas fa-smile',
      'fas fa-trophy',
    ],
  },
}

const SKILLS_PER_GRADE = 4

// Built reactively so the object re-renders when the locale changes.
const subjectsData = computed(() => {
  const build = (key) => {
    const meta = subjectsMeta[key]
    const base = `subjectDetails.subjects.${key}`
    return {
      name: t(`${base}.name`),
      icon: meta.icon,
      iconImage: meta.iconImage,
      color: meta.color,
      gradient: meta.gradient,
      heroTitle: t(`${base}.heroTitle`),
      heroDescription: t(`${base}.heroDescription`),
      description: t(`${base}.description`),
      stats: {
        games: t(`${base}.stats.games`),
        worksheets: t(`${base}.stats.worksheets`),
        grades: t(`${base}.stats.grades`),
      },
      topics: meta.topics.map((topic, i) => ({
        icon: topic.icon,
        color: topic.color,
        name: t(`${base}.topics.${i}.name`),
        games: t(`${base}.topics.${i}.games`),
      })),
      grades: Array.from({ length: meta.gradeCount }, (_, gi) => ({
        name: t(`${base}.grades.${gi}.name`),
        ages: t(`${base}.grades.${gi}.ages`),
        skills: Array.from({ length: SKILLS_PER_GRADE }, (_, si) =>
          t(`${base}.grades.${gi}.skills.${si}`)
        ),
      })),
      features: meta.featureIcons.map((icon, i) => ({
        icon,
        title: t(`${base}.features.${i}.title`),
        description: t(`${base}.features.${i}.description`),
      })),
    }
  }
  return {
    math: build('math'),
    reading: build('reading'),
    science: build('science'),
    'craft-drawing': build('craft-drawing'),
  }
})

const subject = computed(() => {
  const key = route.params.subject
  if (subjectsData.value[key]) {
    return subjectsData.value[key]
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
          <div class="classdetails-hero-content">
            <nav class="modern-breadcrumb">
              <router-link to="/" class="breadcrumb-link">{{
                $t('subjectDetails.breadcrumb.home')
              }}</router-link>
              <i class="fas fa-chevron-right"></i>
              <router-link to="/subjects" class="breadcrumb-link">{{
                $t('subjectDetails.breadcrumb.subjects')
              }}</router-link>
              <i class="fas fa-chevron-right"></i>
              <span class="breadcrumb-current">{{ subject.name }}</span>
            </nav>
            <div class="hero-badge">
              <img
                v-if="subject.iconImage"
                :src="subject.iconImage"
                :alt="subject.name"
                class="hero-badge-img"
              />
              <i v-else :class="subject.icon"></i>
              <span>{{ subject.name }}</span>
            </div>
            <h1 class="classdetails-hero-title">
              {{ subject.heroTitle }}
              <span class="gradient-text-light d-block">{{
                $t('subjectDetails.hero.titleSuffix')
              }}</span>
            </h1>
            <p class="classdetails-hero-description">
              {{ subject.heroDescription }}
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

    <!--======== Section A: Subject Overview ========-->
    <section class="subject-overview-section space-top space-bottom">
      <div class="container">
        <div class="subject-card-large">
          <div class="row align-items-center gy-40">
            <div class="col-lg-5">
              <div class="subject-header">
                <div
                  v-if="subject.iconImage"
                  class="subject-icon-large subject-icon-img-wrap mb-4"
                >
                  <img
                    :src="subject.iconImage"
                    :alt="subject.name"
                    class="subject-icon-img"
                  />
                </div>
                <div
                  v-else
                  class="subject-icon-large mb-4"
                  :style="{ background: subject.gradient }"
                >
                  <i :class="subject.icon + ' fa-4x text-white'"></i>
                </div>
                <h2 class="sec-title mb-3">{{ subject.name }}</h2>
                <p class="fs-md mb-3">{{ subject.description }}</p>
                <div class="subject-meta d-flex flex-wrap gap-3 mb-4">
                  <div class="meta-badge">
                    <i class="fas fa-gamepad text-primary"></i>
                    <strong>{{ subject.stats.games }}</strong>
                    {{ $t('subjectDetails.labels.games') }}
                  </div>
                  <div class="meta-badge">
                    <i class="fas fa-file-alt text-success"></i>
                    <strong>{{ subject.stats.worksheets }}</strong>
                    {{ $t('subjectDetails.labels.worksheets') }}
                  </div>
                  <div class="meta-badge">
                    <i class="fas fa-graduation-cap text-warning"></i>
                    <strong>{{ subject.stats.grades }}</strong>
                  </div>
                </div>
                <div class="difficulty-badges mb-4">
                  <span class="badge-pill beginner">{{
                    $t('subjectDetails.labels.beginner')
                  }}</span>
                  <span class="badge-pill intermediate">{{
                    $t('subjectDetails.labels.intermediate')
                  }}</span>
                  <span class="badge-pill advanced">{{
                    $t('subjectDetails.labels.advanced')
                  }}</span>
                </div>
              </div>
            </div>

            <div class="col-lg-7">
              <div class="topic-grid">
                <h5 class="mb-4">
                  {{ $t('subjectDetails.labels.topicsCovered') }}
                </h5>
                <div class="row g-3">
                  <div
                    v-for="(topic, index) in subject.topics"
                    :key="topic.name"
                    class="col-md-6"
                  >
                    <div
                      class="topic-item"
                      :style="{ '--topic-hover-color': topic.color }"
                    >
                      <div
                        class="topic-icon cartoon-icon"
                        :style="{
                          background: topic.color,
                          animationDelay: index * 0.15 + 's',
                        }"
                      >
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
    <section
      class="grade-breakdown-section space-bottom"
      style="background: #f8f9fc"
    >
      <div class="container">
        <div class="text-center mb-50">
          <span
            class="section-tag"
            :style="{ background: subject.color + '18', color: subject.color }"
          >
            <img
              v-if="subject.iconImage"
              :src="subject.iconImage"
              :alt="subject.name"
              class="section-tag-img me-1"
            />
            <i v-else :class="subject.icon" class="me-1"></i>
            {{ $t('subjectDetails.gradeBreakdown.tag') }}
          </span>
          <h2 class="sec-title mt-3">
            {{ $t('subjectDetails.gradeBreakdown.title') }}
          </h2>
          <p class="sec-description">
            {{
              $t('subjectDetails.gradeBreakdown.description', {
                name: subject.name,
              })
            }}
          </p>
        </div>

        <div class="row g-4">
          <div
            v-for="grade in subject.grades"
            :key="grade.name"
            class="col-lg-4 col-md-6"
          >
            <div class="grade-card">
              <div
                class="grade-card-accent"
                :style="{ background: subject.color }"
              ></div>
              <div class="grade-card-body">
                <h5 class="grade-card-title">{{ grade.name }}</h5>
                <span class="grade-card-ages">{{ grade.ages }}</span>
                <ul class="grade-skills-list">
                  <li v-for="skill in grade.skills" :key="skill">
                    <i
                      class="fas fa-check"
                      :style="{ color: subject.color }"
                    ></i>
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
          <span
            class="section-tag"
            :style="{ background: subject.color + '18', color: subject.color }"
          >
            <i class="fas fa-star me-1"></i>
            {{ $t('subjectDetails.benefits.tag') }}
          </span>
          <h2 class="sec-title mt-3">
            {{ $t('subjectDetails.benefits.title', { name: subject.name }) }}
          </h2>
        </div>

        <div class="row g-4">
          <div
            v-for="feature in subject.features"
            :key="feature.title"
            class="col-lg-3 col-md-6"
          >
            <div class="feature-card">
              <div
                class="feature-icon"
                :style="{ background: subject.gradient }"
              >
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
    <section class="subject-cta-section" style="background: #f8f9fc">
      <div class="container">
        <div class="subject-cta-card" :style="{ background: subject.gradient }">
          <div class="cta-particles">
            <span
              class="cta-particle"
              style="
                left: 5%;
                top: 20%;
                width: 8px;
                height: 8px;
                animation-delay: 0s;
              "
            ></span>
            <span
              class="cta-particle"
              style="
                left: 90%;
                top: 30%;
                width: 6px;
                height: 6px;
                animation-delay: 1s;
              "
            ></span>
            <span
              class="cta-particle"
              style="
                left: 20%;
                top: 70%;
                width: 10px;
                height: 10px;
                animation-delay: 2s;
              "
            ></span>
            <span
              class="cta-particle"
              style="
                left: 75%;
                top: 60%;
                width: 7px;
                height: 7px;
                animation-delay: 0.5s;
              "
            ></span>
          </div>
          <div class="text-center position-relative" style="z-index: 2">
            <h2 class="cta-title">
              {{ $t('subjectDetails.cta.title', { name: subject.name }) }}
            </h2>
            <p class="cta-description">
              {{ $t('subjectDetails.cta.description', { name: subject.name }) }}
            </p>
            <div class="cta-buttons">
              <router-link to="/subjects" class="vs-btn cta-btn-secondary">
                <i class="fas fa-th-large me-2"></i>
                {{ $t('subjectDetails.cta.button') }}
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
  background: linear-gradient(135deg, #4a8b3f 0%, #3a7a30 40%, #1b1464 100%);
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
  color: #ffe5b4;
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
  color: #ffe5b4;
}

.hero-badge span {
  color: #fff;
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 0.5px;
}

@keyframes float-badge {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
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
  background: linear-gradient(135deg, #ffe5b4, #ffdab9);
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

.hero-badge-img {
  width: 20px;
  height: 20px;
  object-fit: contain;
}

.section-tag-img {
  width: 16px;
  height: 16px;
  object-fit: contain;
  vertical-align: middle;
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
  color: #636e72;
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
  color: #2d3436;
  font-size: 18px;
  margin-bottom: 4px;
}

.grade-card-ages {
  font-size: 13px;
  color: #b2bec3;
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
  color: #2d3436;
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
  color: #2d3436;
  margin-bottom: 10px;
}

.feature-description {
  font-size: 14px;
  color: #636e72;
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
  color: #2d3436 !important;
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
