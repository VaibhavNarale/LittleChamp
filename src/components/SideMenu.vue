<template>
  <div class="sidemenu-wrapper" :class="{ show: show }">
    <div class="sidemenu-content">
      <button class="closeButton sideMenuCls" @click="$emit('close')">
        <i class="far fa-times"></i>
      </button>

      <div class="widget footer-widget">
        <div class="vs-widget-about">
          <div class="about-logo">
            <router-link to="/" @click="$emit('close')">
              <img src="/assets/img/logo.svg" alt="Little Champ" />
            </router-link>
          </div>
          <p class="about-text">
            Eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum ultrice gravida isus commodo viverra.
          </p>
          <div class="multi-social">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-pinterest-p"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      <div class="widget footer-widget">
        <h3 class="widget_title">Contact Us</h3>
        <div class="vs-widget-contact">
          <p class="footer-info">
            <i class="fas fa-map-marker-alt"></i>256 Lonely Street Ave, Brooklyn
            CA, United State
          </p>
          <p class="footer-info">
            <i class="fas fa-envelope"></i
            ><a href="mailto:info@Knirpseteam.com">info@Knirpseteam.com</a>
          </p>
          <p class="footer-info">
            <i class="fas fa-phone-alt"></i
            ><a href="tel:+25631562156236">+256 (3156) 2156 236</a>
          </p>
        </div>
      </div>

      <div class="widget footer-widget">
        <h4 class="widget_title">News Feed</h4>
        <div class="recent-post-wrap">
          <div class="recent-post">
            <div class="media-img">
              <router-link to="/blog-details" @click="$emit('close')">
                <img src="/assets/img/blog/blog-thumb-1.jpg" alt="Blog Image" />
              </router-link>
            </div>
            <div class="media-body">
              <div class="recent-post-meta">
                <router-link to="/blog" @click="$emit('close')"
                  ><i class="fal fa-calendar-alt"></i> 25th March,
                  2024</router-link
                >
              </div>
              <h4 class="post-title">
                <router-link to="/blog-details" @click="$emit('close')"
                  >User's Pepare Using Story Guide Yes</router-link
                >
              </h4>
            </div>
          </div>
          <div class="recent-post">
            <div class="media-img">
              <router-link to="/blog-details" @click="$emit('close')">
                <img src="/assets/img/blog/blog-thumb-2.jpg" alt="Blog Image" />
              </router-link>
            </div>
            <div class="media-body">
              <div class="recent-post-meta">
                <router-link to="/blog" @click="$emit('close')"
                  ><i class="fal fa-calendar-alt"></i> 25th March,
                  2024</router-link
                >
              </div>
              <h4 class="post-title">
                <router-link to="/blog-details" @click="$emit('close')"
                  >How to prepare child for examination</router-link
                >
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  show: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['close'])
</script>
