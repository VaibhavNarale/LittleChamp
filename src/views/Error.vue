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
  <!--======== Error Section ========-->
  <section
    class="vs-error-wrapper parallax"
    data-bg-src="/assets/img/bg/error-bg.jpg"
  >
    <div class="layer error-shape" data-depth="0.4">
      <img src="/assets/img/normal/astronut.png" alt="astronut" />
    </div>
    <div class="container">
      <div class="error-content wow fadeInUp" data-wow-delay="0.1s">
        <span class="h1 error-number">{{ $t('errorPage.errorNumber') }}</span>
        <h1 class="error-title text-white">{{ $t('errorPage.title') }}</h1>
        <p class="error-text text-white">{{ $t('errorPage.text') }}</p>
        <router-link to="/" class="vs-btn wave-btn">Back to Home</router-link>
      </div>
    </div>
  </section>
  <!--======== / Error Section ========-->
</template>
