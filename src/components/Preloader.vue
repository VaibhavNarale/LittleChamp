<template>
  <!-- White Background - Disappears when page loads -->
  <div v-if="loading" class="preloader">
    <!-- Old Preloader - Commented Out -->
    <!-- <button class="vs-btn wave-btn preloaderCls" @click="$emit('close')">Cancel Preloader</button>
    <div class="preloader-inner">
      <svg id="preloader" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128">
        <path id="Path_1" data-name="Path 1" d="M64,0,40.08,21.9a10.98,10.98,0,0,0-5.05,8.75C34.37,44.85,64,60.63,64,60.63Z" fill="#ffb118" />
        <path id="Path_2" data-name="Path 2" d="M128,64,106.12,40.1a10.97,10.97,0,0,0-8.75-5.05C83.17,34.4,67.4,64,67.4,64Z" fill="#80c141" />
        <path id="Path_3" data-name="Path 3" d="M63.7,69.73a110.97,110.97,0,0,1-5.04-20.54c-1.16-8.7.68-14.17.68-14.17H97.37s-4.3-.86-14.47,10.1C79.84,48.42,63.7,69.7,63.7,69.7Z" fill="#cadc28" />
        <path id="Path_4" data-name="Path 4" d="M64,128l23.9-21.88a10.97,10.97,0,0,0,5.05-8.75C93.6,83.17,64,67.4,64,67.4Z" fill="#cf171f" />
        <path id="Path_5" data-name="Path 5" d="M58.27,63.7a110.97,110.97,0,0,1,20.54-5.04c8.7-1.16,14.17.68,14.17.68V97.37s.86-4.3-10.1-14.47C79.58,79.84,58.3,63.7,58.3,63.7Z" fill="#ec1b21" />
        <path id="Path_6" data-name="Path 6" d="M0,64,21.88,87.9a10.97,10.97,0,0,0,8.75,5.05C44.83,93.6,60.6,64,60.6,64Z" fill="#018ed5" />
        <path id="Path_7" data-name="Path 7" d="M64.3,58.27a110.97,110.97,0,0,1,5.04,20.54c1.16,8.7-.68,14.17-.68,14.17H30.63s4.3.86,14.47-10.1c3.06-3.3,19.2-24.58,19.2-24.58Z" fill="#00bbf2" />
        <path id="Path_8" data-name="Path 8" d="M69.73,64.34a111.023,111.023,0,0,1-20.55,5.05c-8.7,1.14-14.15-.7-14.15-.7V30.65s-.86,4.3,10.1,14.5c3.3,3.05,24.6,19.2,24.6,19.2Z" fill="#f8f400" />
        <circle id="Ellipse_1" data-name="Ellipse 1" cx="2.03" cy="2.03" r="2.03" transform="translate(61.97 61.97)" />
      </svg>
    </div> -->
  </div>

  <!-- Rocket Animation - Continues flying even after page loads -->
  <div class="rocket-animation-container">
    <img :src="rocketImage" alt="Rocket" class="rocket-launch" />
  </div>
</template>

<script setup>
import rocketImage from '@/assets/new-images/rocket-image.png'

defineProps({
  loading: {
    type: Boolean,
    default: true,
  },
})

defineEmits(['close'])
</script>

<style scoped>
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* ========================================
   Rocket Launch Animation - Wave Pattern
   ======================================== */
.rocket-animation-container {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 999999;
  pointer-events: none;
  width: 224px;
  height: 224px;
  transform: translate(-50%, -50%);
}

.rocket-launch {
  width: 100%;
  height: 100%;
  object-fit: contain;
  animation: rocketWavePath 8s linear forwards;
  filter: drop-shadow(0 15px 40px rgba(108, 99, 255, 0.5));
  transform-origin: center center;
}

/* Simple Wave Pattern - Ultra Smooth with No Stuttering */
@keyframes rocketWavePath {
  0% {
    transform: translate(-50vw, 0vh) rotate(0deg) scale(0.6);
    opacity: 0;
  }
  1% {
    transform: translate(-48vw, 0vh) rotate(-1deg) scale(0.62);
    opacity: 0.2;
  }
  2% {
    transform: translate(-46vw, 0vh) rotate(-2deg) scale(0.64);
    opacity: 0.4;
  }
  3% {
    transform: translate(-44vw, 0vh) rotate(-3deg) scale(0.66);
    opacity: 0.6;
  }
  4% {
    transform: translate(-42vw, 0vh) rotate(-4deg) scale(0.68);
    opacity: 0.8;
  }
  5% {
    transform: translate(-40vw, 0vh) rotate(-5deg) scale(0.7);
    opacity: 1;
  }
  6% {
    transform: translate(-38vw, -1.6vh) rotate(-9deg) scale(0.72);
  }
  7% {
    transform: translate(-36vw, -3.2vh) rotate(-13deg) scale(0.74);
  }
  8% {
    transform: translate(-34vw, -4.8vh) rotate(-17deg) scale(0.76);
  }
  9% {
    transform: translate(-32vw, -6.4vh) rotate(-21deg) scale(0.78);
  }
  10% {
    transform: translate(-30vw, -8vh) rotate(-25deg) scale(0.8);
  }
  11% {
    transform: translate(-28.33vw, -8.67vh) rotate(-23.33deg) scale(0.808);
  }
  12% {
    transform: translate(-26.67vw, -9.33vh) rotate(-21.67deg) scale(0.817);
  }
  13% {
    transform: translate(-25vw, -10vh) rotate(-20deg) scale(0.825);
  }
  14% {
    transform: translate(-23.25vw, -10.5vh) rotate(-17.5deg) scale(0.836);
  }
  15% {
    transform: translate(-21.5vw, -11vh) rotate(-15deg) scale(0.848);
  }
  16% {
    transform: translate(-19.75vw, -11.25vh) rotate(-12.5deg) scale(0.859);
  }
  17% {
    transform: translate(-18vw, -11.5vh) rotate(-10deg) scale(0.87);
  }
  18% {
    transform: translate(-15.33vw, -11.67vh) rotate(-6.67deg) scale(0.88);
  }
  19% {
    transform: translate(-12.67vw, -11.83vh) rotate(-3.33deg) scale(0.89);
  }
  20% {
    transform: translate(-10vw, -12vh) rotate(0deg) scale(0.9);
  }
  21% {
    transform: translate(-7.67vw, -11.33vh) rotate(3.33deg) scale(0.908);
  }
  22% {
    transform: translate(-5.33vw, -10.67vh) rotate(6.67deg) scale(0.917);
  }
  23% {
    transform: translate(-3vw, -10vh) rotate(10deg) scale(0.925);
  }
  24% {
    transform: translate(-1.25vw, -9vh) rotate(13.33deg) scale(0.936);
  }
  25% {
    transform: translate(0.5vw, -8vh) rotate(16.67deg) scale(0.948);
  }
  26% {
    transform: translate(2.25vw, -7.5vh) rotate(18.33deg) scale(0.959);
  }
  27% {
    transform: translate(3vw, -7vh) rotate(20deg) scale(0.97);
  }
  28% {
    transform: translate(5.33vw, -4.67vh) rotate(21.67deg) scale(0.98);
  }
  29% {
    transform: translate(7.67vw, -2.33vh) rotate(23.33deg) scale(0.99);
  }
  30% {
    transform: translate(10vw, 0vh) rotate(25deg) scale(1);
  }
  31% {
    transform: translate(12vw, 1.6vh) rotate(25deg) scale(1.006);
  }
  32% {
    transform: translate(14vw, 3.2vh) rotate(25deg) scale(1.012);
  }
  33% {
    transform: translate(16vw, 4.8vh) rotate(25deg) scale(1.018);
  }
  34% {
    transform: translate(18vw, 6.4vh) rotate(25deg) scale(1.024);
  }
  35% {
    transform: translate(20vw, 8vh) rotate(25deg) scale(1.03);
  }
  36% {
    transform: translate(21.67vw, 8.67vh) rotate(23.33deg) scale(1.035);
  }
  37% {
    transform: translate(23.33vw, 9.33vh) rotate(21.67deg) scale(1.04);
  }
  38% {
    transform: translate(25vw, 10vh) rotate(20deg) scale(1.045);
  }
  39% {
    transform: translate(27vw, 10.5vh) rotate(15deg) scale(1.052);
  }
  40% {
    transform: translate(29vw, 11vh) rotate(10deg) scale(1.058);
  }
  41% {
    transform: translate(31vw, 11.25vh) rotate(7.5deg) scale(1.064);
  }
  42% {
    transform: translate(33vw, 11.5vh) rotate(5deg) scale(1.07);
  }
  43% {
    transform: translate(35.67vw, 10.5vh) rotate(1.67deg) scale(1.077);
  }
  44% {
    transform: translate(37.83vw, 9.25vh) rotate(-1.67deg) scale(1.083);
  }
  45% {
    transform: translate(40vw, 8vh) rotate(-5deg) scale(1.09);
  }
  46% {
    transform: translate(42vw, 6.5vh) rotate(-8deg) scale(1.095);
  }
  47% {
    transform: translate(44vw, 5vh) rotate(-12deg) scale(1.1);
  }
  48% {
    transform: translate(46vw, 3.5vh) rotate(-16deg) scale(1.105);
  }
  49% {
    transform: translate(48vw, 2vh) rotate(-20deg) scale(1.11);
  }
  50% {
    transform: translate(50vw, 0vh) rotate(-25deg) scale(1.12);
  }
  51% {
    transform: translate(52vw, -1.5vh) rotate(-26deg) scale(1.125);
  }
  52% {
    transform: translate(54vw, -3vh) rotate(-26deg) scale(1.13);
  }
  53% {
    transform: translate(56vw, -4.5vh) rotate(-26deg) scale(1.135);
  }
  54% {
    transform: translate(58vw, -6vh) rotate(-26deg) scale(1.14);
  }
  55% {
    transform: translate(60vw, -8vh) rotate(-25deg) scale(1.15);
  }
  56% {
    transform: translate(61.67vw, -8.67vh) rotate(-23.33deg) scale(1.155);
  }
  57% {
    transform: translate(63.33vw, -9.33vh) rotate(-21.67deg) scale(1.16);
  }
  58% {
    transform: translate(65vw, -10vh) rotate(-20deg) scale(1.165);
  }
  59% {
    transform: translate(67vw, -10.5vh) rotate(-15deg) scale(1.171);
  }
  60% {
    transform: translate(69vw, -11vh) rotate(-12.5deg) scale(1.177);
  }
  61% {
    transform: translate(71vw, -11.25vh) rotate(-8.75deg) scale(1.183);
  }
  62% {
    transform: translate(73vw, -11.5vh) rotate(-5deg) scale(1.19);
  }
  63% {
    transform: translate(75.33vw, -11vh) rotate(-1.67deg) scale(1.197);
  }
  64% {
    transform: translate(77.67vw, -10.5vh) rotate(1.67deg) scale(1.203);
  }
  65% {
    transform: translate(80vw, -10vh) rotate(5deg) scale(1.21);
  }
  66% {
    transform: translate(81.67vw, -9vh) rotate(8.33deg) scale(1.215);
  }
  67% {
    transform: translate(83.33vw, -8vh) rotate(11.67deg) scale(1.22);
  }
  68% {
    transform: translate(85vw, -7vh) rotate(15deg) scale(1.225);
  }
  69% {
    transform: translate(87.5vw, -6vh) rotate(17.5deg) scale(1.233);
  }
  70% {
    transform: translate(90vw, -5vh) rotate(20deg) scale(1.24);
  }
  71% {
    transform: translate(92vw, -4vh) rotate(19.6deg) scale(1.246);
  }
  72% {
    transform: translate(94vw, -3vh) rotate(19.2deg) scale(1.252);
  }
  73% {
    transform: translate(96vw, -2vh) rotate(18.8deg) scale(1.258);
  }
  74% {
    transform: translate(98vw, -1vh) rotate(18.4deg) scale(1.264);
  }
  75% {
    transform: translate(100vw, 0vh) rotate(18deg) scale(1.27);
  }
  76% {
    transform: translate(102vw, 0.4vh) rotate(16deg) scale(1.276);
  }
  77% {
    transform: translate(104vw, 0.8vh) rotate(14deg) scale(1.282);
  }
  78% {
    transform: translate(106vw, 1.2vh) rotate(12deg) scale(1.288);
  }
  79% {
    transform: translate(108vw, 1.6vh) rotate(10deg) scale(1.294);
  }
  80% {
    transform: translate(110vw, 2vh) rotate(8deg) scale(1.3);
    opacity: 1;
  }
  81% {
    transform: translate(112vw, 2.2vh) rotate(7.2deg) scale(1.306);
    opacity: 0.98;
  }
  82% {
    transform: translate(114vw, 2.4vh) rotate(6.4deg) scale(1.312);
    opacity: 0.96;
  }
  83% {
    transform: translate(116vw, 2.6vh) rotate(6deg) scale(1.318);
    opacity: 0.94;
  }
  84% {
    transform: translate(118vw, 2.8vh) rotate(5.4deg) scale(1.324);
    opacity: 0.92;
  }
  85% {
    transform: translate(120vw, 3vh) rotate(5deg) scale(1.33);
    opacity: 0.9;
  }
  86% {
    transform: translate(122vw, 3.2vh) rotate(4.4deg) scale(1.336);
    opacity: 0.86;
  }
  87% {
    transform: translate(124vw, 3.4vh) rotate(3.8deg) scale(1.342);
    opacity: 0.82;
  }
  88% {
    transform: translate(126vw, 3.6vh) rotate(3.4deg) scale(1.348);
    opacity: 0.78;
  }
  89% {
    transform: translate(128vw, 3.8vh) rotate(3.2deg) scale(1.354);
    opacity: 0.74;
  }
  90% {
    transform: translate(130vw, 4vh) rotate(3deg) scale(1.36);
    opacity: 0.7;
  }
  91% {
    transform: translate(132vw, 4.2vh) rotate(2.6deg) scale(1.366);
    opacity: 0.64;
  }
  92% {
    transform: translate(134vw, 4.4vh) rotate(2.4deg) scale(1.372);
    opacity: 0.58;
  }
  93% {
    transform: translate(136vw, 4.6vh) rotate(2.2deg) scale(1.378);
    opacity: 0.52;
  }
  94% {
    transform: translate(138vw, 4.8vh) rotate(2.1deg) scale(1.384);
    opacity: 0.46;
  }
  95% {
    transform: translate(140vw, 5vh) rotate(2deg) scale(1.39);
    opacity: 0.4;
  }
  96% {
    transform: translate(142vw, 5vh) rotate(1.6deg) scale(1.396);
    opacity: 0.32;
  }
  97% {
    transform: translate(144vw, 5vh) rotate(1.2deg) scale(1.402);
    opacity: 0.24;
  }
  98% {
    transform: translate(146vw, 5vh) rotate(0.8deg) scale(1.408);
    opacity: 0.16;
  }
  99% {
    transform: translate(148vw, 5vh) rotate(0.4deg) scale(1.414);
    opacity: 0.08;
  }
  100% {
    transform: translate(150vw, 5vh) rotate(0deg) scale(1.42);
    opacity: 0;
  }
}

/* Colorful sparkling trail effect - Follows rocket */
.rocket-launch::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
  background: radial-gradient(
    ellipse at center,
    rgba(255, 215, 0, 0.8) 0%,
    rgba(255, 140, 0, 0.6) 20%,
    rgba(255, 69, 0, 0.5) 40%,
    rgba(255, 20, 147, 0.4) 60%,
    transparent 100%
  );
  border-radius: 50%;
  filter: blur(25px);
  animation: sparkleTrailWave 8s ease-out forwards;
  pointer-events: none;
}

/* Secondary smoke trail - Follows rocket */
.rocket-launch::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 180px;
  height: 180px;
  background: radial-gradient(
    ellipse at center,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(220, 220, 255, 0.6) 25%,
    rgba(180, 180, 255, 0.4) 50%,
    transparent 100%
  );
  border-radius: 50%;
  filter: blur(30px);
  animation: smokeTrailWave 8s ease-out forwards;
  pointer-events: none;
}

@keyframes sparkleTrailWave {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
  10% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(0.8);
  }
  30% {
    opacity: 0.95;
    transform: translate(-50%, -50%) scale(1.2);
  }
  60% {
    opacity: 0.9;
    transform: translate(-50%, -50%) scale(1.5);
  }
  85% {
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(2);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(2.5);
  }
}

@keyframes smokeTrailWave {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.4);
  }
  15% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(0.9);
  }
  40% {
    opacity: 0.8;
    transform: translate(-50%, -50%) scale(1.3);
  }
  70% {
    opacity: 0.6;
    transform: translate(-50%, -50%) scale(1.8);
  }
  90% {
    opacity: 0.3;
    transform: translate(-50%, -50%) scale(2.3);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(2.8);
  }
}

/* Hide rocket after animation completes */
.rocket-animation-container {
  animation: hideRocket 0.1s 8s forwards;
}

@keyframes hideRocket {
  to {
    display: none;
    visibility: hidden;
  }
}

/* Responsive adjustments */
@media (max-width: 1200px) {
  .rocket-animation-container {
    width: 192px;
    height: 192px;
  }
}

@media (max-width: 767px) {
  .rocket-animation-container {
    width: 160px;
    height: 160px;
  }
}

@media (max-width: 575px) {
  .rocket-animation-container {
    width: 128px;
    height: 128px;
  }
}
</style>
