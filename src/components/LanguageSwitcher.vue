<script setup>
import { useI18n } from 'vue-i18n'
import { SUPPORTED_LOCALES, setLocale } from '@/i18n'

const { locale } = useI18n()

const choose = (code) => setLocale(code)
</script>

<template>
  <div class="lang-switcher" role="group" :aria-label="$t('common.language')">
    <button
      v-for="l in SUPPORTED_LOCALES"
      :key="l.code"
      type="button"
      class="lang-option"
      :class="{ active: locale === l.code }"
      :aria-pressed="locale === l.code"
      :title="l.name"
      @click="choose(l.code)"
    >
      {{ l.label }}
    </button>
  </div>
</template>

<style scoped>
.lang-switcher {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 3px;
  border: 2px solid #e0e0e0;
  border-radius: 50px;
  background: #fff;
}

.lang-option {
  border: none;
  background: transparent;
  color: #636e72;
  font-weight: 700;
  font-size: 12px;
  line-height: 1;
  padding: 6px 10px;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.25s ease;
}

.lang-option:hover {
  color: #4a8b3f;
}

.lang-option.active {
  background: linear-gradient(135deg, #4a8b3f, #5ea750);
  color: #fff;
  box-shadow: 0 2px 8px rgba(74, 139, 63, 0.3);
}
</style>
