<script setup>
/* Reusable "how it works / what to expect" section shown above a
   registration form. Pass an eyebrow, a split title and a list of cards. */
defineProps({
  eyebrow: { type: String, default: '' },
  eyebrowIcon: { type: String, default: 'fas fa-heart' },
  titleLead: { type: String, default: '' },
  titleAccent: { type: String, default: '' },
  subtitle: { type: String, default: '' },
  // Accent theme for the eyebrow + title highlight: 'green' | 'pink'
  theme: { type: String, default: 'green' },
  // [{ variant, icon, step, title, text }]
  cards: { type: Array, default: () => [] },
})
</script>

<template>
  <section class="ri-section" :class="`ri-section--${theme}`">
    <div class="container">
      <div class="ri-head wow fadeInUp" data-wow-delay="0.1s">
        <span v-if="eyebrow" class="ri-eyebrow">
          <i :class="eyebrowIcon"></i> {{ eyebrow }}
        </span>
        <h2 class="ri-title">
          {{ titleLead }}
          <span v-if="titleAccent" class="ri-accent">{{ titleAccent }}</span>
        </h2>
        <p v-if="subtitle" class="ri-sub">{{ subtitle }}</p>
      </div>

      <div class="ri-grid">
        <div
          v-for="(c, i) in cards"
          :key="i"
          class="ri-card wow fadeInUp"
          :data-wow-delay="`${0.1 + i * 0.12}s`"
        >
          <span class="ri-number">{{ i + 1 }}</span>
          <div class="ri-icon" :class="`ri-icon--${c.variant || 'green'}`">
            <i :class="c.icon"></i>
          </div>
          <span v-if="c.step" class="ri-step">{{ c.step }}</span>
          <h3 class="ri-card-title">{{ c.title }}</h3>
          <p class="ri-card-text">{{ c.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ri-section {
  padding: 56px 0 8px;
}

/* Heading */
.ri-head {
  text-align: center;
  max-width: 640px;
  margin: 0 auto 40px;
}

.ri-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: #4a8b3f;
  background: #f1f8ee;
  border: 1px solid #d8ead0;
  padding: 7px 16px;
  border-radius: 50px;
  margin-bottom: 16px;
}

.ri-title {
  font-size: 32px;
  font-weight: 800;
  color: #1b1464;
  line-height: 1.25;
  margin: 0 0 12px;
}

.ri-accent {
  background: linear-gradient(135deg, #4a8b3f, #5ea750);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Pink theme (Playgroup) */
.ri-section--pink .ri-eyebrow {
  color: #e91e8c;
  background: #fdeef7;
  border-color: #f6d4e8;
}

.ri-section--pink .ri-accent {
  background: linear-gradient(135deg, #e91e8c, #f04da3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.ri-sub {
  font-size: 15px;
  color: #6b7280;
  margin: 0;
  line-height: 1.6;
}

/* Cards grid */
.ri-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.ri-card {
  position: relative;
  background: white;
  border: 1px solid #eef0f4;
  border-radius: 22px;
  padding: 34px 26px 28px;
  text-align: center;
  box-shadow: 0 10px 35px rgba(27, 20, 100, 0.06);
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.ri-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 22px 55px rgba(27, 20, 100, 0.13);
}

.ri-number {
  position: absolute;
  top: 18px;
  right: 20px;
  font-size: 38px;
  font-weight: 800;
  line-height: 1;
  color: #eef0f4;
  transition: color 0.35s ease;
}

.ri-card:hover .ri-number {
  color: #e3f0dd;
}

.ri-icon {
  width: 72px;
  height: 72px;
  margin: 0 auto 18px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: white;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.16);
  transition: transform 0.35s ease;
}

.ri-card:hover .ri-icon {
  transform: scale(1.08) rotate(-4deg);
}

.ri-icon--green {
  background: linear-gradient(135deg, #4a8b3f, #5ea750);
}
.ri-icon--whatsapp {
  background: linear-gradient(135deg, #25d366, #128c7e);
}
.ri-icon--navy {
  background: linear-gradient(135deg, #1b1464, #3f35b5);
}
.ri-icon--pink {
  background: linear-gradient(135deg, #e91e8c, #f04da3);
}
.ri-icon--amber {
  background: linear-gradient(135deg, #ffb800, #ff9500);
}

.ri-step {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: #8a93a2;
  background: #f5f6fa;
  padding: 4px 12px;
  border-radius: 50px;
  margin-bottom: 12px;
}

.ri-card-title {
  font-size: 19px;
  font-weight: 800;
  color: #1b1464;
  margin: 0 0 8px;
}

.ri-card-text {
  font-size: 14px;
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
}

/* Responsive */
@media (max-width: 991px) {
  .ri-grid {
    grid-template-columns: 1fr;
    max-width: 460px;
    margin: 0 auto;
  }
  .ri-title {
    font-size: 27px;
  }
}

@media (max-width: 575px) {
  .ri-section {
    padding: 40px 0 0;
  }
  .ri-title {
    font-size: 23px;
  }
}
</style>
