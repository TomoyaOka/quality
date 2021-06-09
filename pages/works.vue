<template>
  <div class="warpper">
    <div class="page-works">
      <div class="unit">
        <h2 class="page-works__title etc">
          <span class="span">WORKS</span><br /><span class="span02">制作実績 / 構築 / デザイン</span>
        </h2>
        <p class="breadcrumb"><nuxt-link to="/">TOP</nuxt-link> > WORKS</p>
      </div>
      <div class="cover"><div class="page-works__bg"></div></div>
    </div>
    <!-- works -->
    <section id="works" class="works unit">
      <div class="works__box">
        <nuxt-link
          :to="item.id"
          v-for="item in items"
          :key="item.id"
          class="box"
        >
          <p
            class="img"
            :style="{ 'background-image': 'url(' + item.img.url + ')' }"
          ></p>
          <p class="title ff-n">{{ item.title }}</p>
        </nuxt-link>
      </div>
    </section>
    <!-- works -->
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import axios from "axios";
if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}

export default {
  data() {
    return {
      items: "" /*  itemsにデータを格納   */,
    };
  },
  head: {
    script: [],
  },
  async asyncData() {
    const { data } = await axios.get(
      `https://quality.microcms.io/api/v1/works`,
      { headers: { "X-API-KEY": process.env.API_KEY } }
    );
    return {
      items: data.contents,
    };
  },
  head() {
    return {
      title: "制作実績 - ",
    };
  },
  mounted() {
    this.scrollItemA();
  },
  methods: {
    scrollItemA() {
      TweenMax.to(".page-works__bg", 2, {
        width: "100%",
        ease: Power4.easeOut,
      }),
        gsap.to(".box", {
          opacity: 1,
          y: -20,
          duration: 0.5,
          scrollTrigger: {
            trigger: ".box",
            start: "top 80%",
            scrub: false,
          },
          stagger: {
            from: "start",
            amount: 1,
          },
        }),
        gsap.to(".page-works__title", {
          opacity: 1,
          y: -20,
          duration: 0.5,
          scrollTrigger: {
            trigger: ".page-works__title",
            start: "top 80%",
          },
        });
    },
  },
};
</script>

<style lang="scss">
.page-works {
  position: relative;
  height: 70rem;
  margin-top: 150px;
  @include sp {
    height: 43rem;
    margin-top: 90px;
  }
  &__title {
    opacity: 0;
    font-size: 1.4rem;
    line-height: 1.6;
    padding: 17.5rem 0 5rem 0;
    position: relative;
    z-index: 1;
    @include sp {
      font-size: 1.2rem;
      padding: 17.5rem 0 1rem 0;
    }
    .span {
      font-size: 7rem;
      padding-right: 1rem;
      background-color: #fff;
      @include sp {
        font-size: 3rem;
      }
    }
    .span02 {
      background-color: #fff;
      padding: 0.5rem 1rem 0.5rem 0;
    }
  }
  .breadcrumb {
    font-size: 1.4rem;
    @include sp {
      font-size: 1.1rem;
    }
    a {
      color: #2a9963;
    }
  }
  .cover {
    width: 110rem;
    height: 50rem;
    position: absolute;
    border-radius: 15px 0 0 15px;
    top: 0;
    right: 0;
    z-index: -1;
    @include sp {
      width: 60%;
      height: 30rem;
    }
  }
  &__bg {
    width: 0;
    height: 100%;
    background-image: url(@/assets/img/block.jpg);
    background-size: 110rem;
    border-radius: 15px 0 0 15px;
    background-repeat: no-repeat;
    @include sp {
      width: 0;
      height: 30rem;
      background-position: bottom;
    }
  }
}
/*----------------------
      WORKS
-----------------------*/
.etc {
  @include sp {
    padding: 17.5rem 0 1rem 0;
  }
}
</style>