<template>
  <div class="opening">
    <p class="opening__text ff-n">
      <span class="opening__text-span">綿密なサイト設計と伝えるデザイン</span>
    </p>
    <p class="opening__logo">
      <span class="opening__logo-span">
        <img src="@/assets/img/q-logo.svg" alt="Quality Web Studio" />
      </span>
    </p>
  </div>
</template>

<script>
import { gsap, TweenMax, Expo } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(Expo);
}

export default {
  //  GSAP
  mounted() {
    this.opening();
  },
  methods: {
    opening() {
      /*-------------------
          Opening-txt
      ---------------------*/
      TweenMax.to(".opening__text-span", 0.3, { bottom: "-2", delay: 0.1 });
      TweenMax.to(".opening__text-span", 0.2, { opacity: "0", delay: 1.7 });

      /*--------------------
          Opening-Logo
      ---------------------*/
      TweenMax.to(".opening__logo-span", 0.8, { opacity: "1", delay: 1.8 });
      TweenMax.to(".opening__logo-span", 0.3, { opacity: "0", delay: 3.1 });

      /*--------------------
          Opening-bg
      ---------------------*/
      TweenMax.to(".opening", 0.5, {
        height: "0",
        delay: 3.4,
        ease: Expo.easeOut
      });
    }
  }
};
</script>

<style lang="scss">
.opening {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #0d955a;
  z-index: 9999;
  &__text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    color: #fff;
    font-size: 3rem;
    overflow: hidden;
    padding: 0.2rem 0;
    @include sp {
      width: fit-content;
      font-size: 2rem;
    }
    &-span {
      display: block;
      position: relative;
      overflow: hidden;
      padding-bottom: 0.5rem;
      bottom: -30px;
      border-bottom: 2px solid;
    }
  }

  &__logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    color: #fff;
    overflow: hidden;
    padding: 0.2rem 0;
    &-span {
      width: 20rem;
      display: block;
      position: relative;
      opacity: 0;
      @include sp {
        width: 15rem;
      }
      img {
        width: 100%;
      }
    }
  }
}
</style>