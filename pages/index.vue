<template>
  <div>
    <Opening v-if="!openingSeen" />
    <!-- fv -->
    <div class="fv">
      <div class="fv__title">
        <p class="title1"><span class="span">QUALITY</span></p>
        <p class="title2 ff-n">
          <span class="span">綿密なサイト設計と伝えるデザイン</span>
        </p>
        <p class="title3 ff-n">
          <span class="span"
            >万全の制作体制で様々な要望に<br />柔軟に対応することを可能としています</span
          >
        </p>
      </div>
      <div class="cover"><div class="fv__img"></div></div>
    </div>
    <!-- /fv -->
    <!-- news -->
    <section id="news" class="news unit">
      <h2 class="news__title">
        <span class="span">INFORMATION</span><br />お知らせ
      </h2>
      <div class="news__box">
        <div v-for="newn in news" :key="news.id" class="news__box-item">
          <p class="data">{{ newn.day }}</p>
          <p class="title ff-n">{{ newn.title }}</p>
        </div>
      </div>
    </section>
    <!-- /news -->
    <!-- service -->
    <section id="service" class="service">
      <h2 class="service__title">
        <span class="span">SERVICE</span><br />事業内容
      </h2>
      <div class="flex">
        <div class="img01"><div class="filter"></div></div>
        <div class="text-box">
          <p class="title ff-n">ホームページ制作</p>
          <p class="text ff-n">
            サイト設計 - デザイン - 構築までワンストップで受付ています。<br />UI
            /
            UXを考慮したサイト設計で、見やすい使いやすいを一番に考え制作させていただいております。
          </p>
          <nuxt-link to="/webdesign" class="more">詳しく見る</nuxt-link>
        </div>
      </div>

      <div class="flex flex-reverse">
        <div class="img02"><div class="filter02"></div></div>
        <div class="text-box">
          <p class="title ff-n">コーディング.CMS構築</p>
          <p class="text ff-n">
            CMS導入や小規模システム構築、HTMLとCSSによる構築を請け負っています。illustrator.Photoshop.figma.XDどのソフトにも対応しています。
          </p>
          <nuxt-link to="/coding" class="more">詳しく見る</nuxt-link>
        </div>
      </div>

      <div class="flex">
        <div class="img03"><div class="filter03"></div></div>
        <div class="text-box">
          <p class="title ff-n">Mentor</p>
          <p class="text ff-n">
            WordPressオリジナルテーマ制作やHTML.CSSなどのコードレビュー、技術的指導を行います。<br />
            基本的にマンツーマンで進行していくので、受講者のペースで確実に学ぶことが出来ます。
          </p>
          <nuxt-link to="/mentor" class="more">詳しく見る</nuxt-link>
        </div>
      </div>
    </section>
    <!-- /service -->
    <!-- works -->
    <section id="works" class="works unit">
      <h2 class="works__title">
        <span class="span">WORKS</span><br />制作実績
      </h2>
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
      <nuxt-link to="/works" class="works__more">さらに見る</nuxt-link>
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
  /* middleware: "store", */
  data() {
    return {};
  },
  head: {
    script: []
  },
  async asyncData({ params }) {
    const page = params.p || "1";
    const limit = 6;
    const works = await axios.get(
      `https://quality.microcms.io/api/v1/works?limit=${limit}&offset=${(page -
        1) *
        limit}`,
      { headers: { "X-API-KEY": process.env.API_KEY } }
    );
    const day = 3;
    const news = await axios.get(
      `https://quality.microcms.io/api/v1/news?limit=${day}&offset=${(page -
        1) *
        day}`,
      { headers: { "X-API-KEY": process.env.API_KEY } }
    );

    const openingSeen = sessionStorage.getItem("openingSeen");

    return {
      items: works.data.contents,
      news: news.data.contents,
      openingSeen
    };
  },
  //  GSAP
  async mounted() {
    console.log(this.opening);
    if (!this.openingSeen) {
      setTimeout(async () => {
        this.scrollItemA();
        sessionStorage.setItem("openingSeen", true);
      }, 3400);
    } else {
      this.scrollItemA();
    }
  },

  methods: {
    scrollItemA() {
      // TweenMax処理
      TweenMax.to(".fv__img", 1.5, {
        width: "100%",
        width: "100%",
        delay: 3.8,
        ease: Power4.easeOut
      }),
        TweenMax.to(".span", 0.5, { bottom: "0", delay: 3.8 }),
        // GSAp処理
        gsap.to(".fv__title", {
          yPercent: -70,
          scrollTrigger: {
            trigger: ".fv__title",
            scrub: true
          }
        }),
        gsap.to(".news__title", {
          opacity: 1,
          y: -20,
          duration: 0.5,
          scrollTrigger: {
            trigger: ".news__title",
            start: "top 80%",
            scrub: false
          }
        }),
        gsap.to(".service__title", {
          opacity: 1,
          y: -20,
          duration: 0.5,
          scrollTrigger: {
            trigger: ".service__title",
            start: "top 80%"
          }
        }),
        gsap.to(".filter", {
          height: 0,
          duration: 0.5,
          ease: Power4.easeOut,
          scrollTrigger: {
            trigger: ".filter",
            start: "top 80%"
          }
        }),
        gsap.to(".filter02", {
          height: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: ".filter02",
            start: "top 80%"
          }
        }),
        gsap.to(".filter03", {
          height: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: ".filter03",
            start: "top 80%"
          }
        }),
        gsap.to(".works__title", {
          opacity: 1,
          y: -20,
          duration: 0.5,
          scrollTrigger: {
            trigger: ".works__title",
            start: "top 80%"
          }
        }),
        gsap.to(".box", {
          opacity: 1,
          y: -20,
          duration: 0.5,
          scrollTrigger: {
            trigger: ".box",
            start: "top 80%",
            scrub: false
          },
          stagger: {
            from: "start",
            amount: 1
          }
        }),
        gsap.to(".item", {
          opacity: 1,
          y: -20,
          duration: 0.5,
          scrollTrigger: {
            trigger: ".item",
            start: "top 80%",
            scrub: false
          },
          stagger: {
            from: "start",
            amount: 0.3
          }
        });
      gsap.to(".news__box-item", {
        opacity: 1,
        y: -20,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".news__box-item",
          start: "top 80%",
          scrub: false
        },
        stagger: {
          from: "start",
          amount: 0.3
        }
      });
    }
  }
};
</script>

<style lang="scss">
/*----------------------
      FV
-----------------------*/
.fv {
  height: 100vh;
  position: relative;
  @include sp {
    height: 400px;
  }
  .cover {
    width: 70%;
    height: 700px;
    position: absolute;
    top: 55%;
    right: 0;
    border-radius: 15px 0 0 15px;
    transform: translateY(-50%);
    overflow: hidden;
    @include h-min {
      width: 100rem;
      max-width: 100%;
      height: 500px;
    }
    @include sp {
      width: 80%;
      height: 28rem;
      top: 20%;
      right: 0;
      transform: translateY(0%) translateX(0%);
    }

    .fv__img {
      width: 0;
      height: 100%;
      background-image: url(@/assets/img/top2.jpg);
      background-size: 140rem;
      background-repeat: no-repeat;
      @include h-min {
        background-size: 105rem;
      }
      @include sp {
        background-size: 50rem;
      }
    }
  }

  &__title {
    position: absolute;
    top: 60%;
    left: 10%;
    z-index: 3;
    @include sp {
      top: 85%;
      left: 0;
    }
    .title1 {
      width: fit-content;
      font-size: 10rem;
      color: #fff;
      overflow: hidden;
      position: relative;
      @include sp {
        max-width: 17rem;
        font-size: 3rem;
      }
      .span {
        display: inline-block;
        position: relative;
        bottom: -200px;
        padding: 0.5rem 2rem;
        background-color: #2a9963;
      }
    }
    .title2 {
      width: fit-content;
      max-height: 5.5rem;
      font-size: 3.6rem;
      color: rgb(87, 87, 87);
      margin: 1rem 0 0 0;
      overflow: hidden;
      position: relative;
      @include sp {
        max-height: 3rem;
        font-size: 1.8rem;
        margin: 0.2rem 0 0rem 0;
      }
      .span {
        display: inline-block;
        position: relative;
        bottom: -200px;
        padding: 0.5rem 1rem;
        background-color: #fff;
      }
    }
    .title3 {
      width: fit-content;
      font-size: 2.6rem;
      font-weight: 500;
      color: rgb(87, 87, 87);
      line-height: 1.8;
      overflow: hidden;
      position: relative;
      @include sp {
        font-size: 1.4rem;
      }
      .span {
        display: inline-block;
        position: relative;
        bottom: -200px;
        padding: 0.5rem 1rem;
        background-color: #fff;
      }
    }
  }
}

/*----------------------
      NEWS
-----------------------*/
.news {
  display: flex;
  justify-content: space-around;
  padding: 10rem 1rem;
  @include sp {
    display: block;
    padding: 12rem 2rem 5rem 2rem;
  }
  &__title {
    font-size: 1.8rem;
    line-height: 1.6;
    opacity: 0;
    @include sp {
      font-size: 1.4rem;
      margin-bottom: 30px;
    }
    .span {
      display: block;
      font-size: 6rem;
      position: relative;
      @include sp {
        font-size: 3.5rem;
      }
      &::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: -10px;
        width: 14rem;
        height: 1px;
        background-color: #2a9963;
        @include sp {
          width: 7rem;
        }
      }
    }
  }
  &__box {
    &-item {
      opacity: 0;
      width: 63rem;
      max-width: 100%;
      display: flex;
      align-items: center;
      padding: 23px 0;
      border-bottom: 1px #dbdbdb solid;
      .data {
        width: 20rem;
        max-width: 100%;
        font-size: 1.4rem;
        @include sp {
          width: 10rem;
          font-size: 1.2rem;
        }
      }
      .title {
        width: 30rem;
        max-width: 100%;
        font-size: 1.8rem;
        font-weight: 300;
        @include sp {
          font-size: 1.4rem;
        }
      }
    }
  }
}

/*----------------------
      SERVICE
-----------------------*/
.service {
  margin: 7rem 0 10rem 0;
  &__title {
    font-size: 1.8rem;
    line-height: 1.6;
    text-align: center;
    margin-bottom: 5rem;
    opacity: 0;
    @include sp {
      font-size: 1.4rem;
      margin-bottom: 30px;
    }
    .span {
      display: block;
      font-size: 6rem;
      position: relative;
      @include sp {
        font-size: 3.5rem;
      }
      &::before {
        content: "";
        position: absolute;
        left: 50%;
        bottom: -5px;
        transform: translateX(-50%);
        width: 14rem;
        height: 1px;
        background-color: #2a9963;
        @include sp {
          width: 7rem;
        }
      }
    }
  }
  .flex {
    display: flex;
    @include sp {
      display: block;
    }
    &-reverse {
      flex-direction: row-reverse;
      margin: 20rem 0;
      @include sp {
        margin: 3.5rem 0;
      }
    }
    .img01 {
      width: 50%;
      height: 40rem;
      border-radius: 0 20px 20px 0;
      background-image: url(@/assets/img/web06.png);
      background-size: 100rem;
      position: relative;
      @include sp {
        width: 70%;
        height: 16rem;
        background-size: 40rem;
        background-position: center;
      }
      .filter {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #fff;
      }
    }
    .img02 {
      width: 50%;
      height: 40rem;
      border-radius: 20px 0 0 20px;
      background-image: url(@/assets/img/web10.png);
      background-size: 95rem;
      background-position: center;
      position: relative;
      @include sp {
        width: 70%;
        height: 16rem;
        margin-left: auto;
        background-size: 26rem;
        background-position: center;
      }
      .filter02 {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #fff;
      }
    }
    .img03 {
      width: 50%;
      height: 40rem;
      border-radius: 0 20px 20px 0;
      background-image: url(@/assets/img/web13.png);
      background-size: 95rem;
      background-position: center;
      position: relative;
      @include sp {
        width: 70%;
        height: 16rem;
        background-size: 67rem;
        background-position: 60% 30%;
      }
      .filter03 {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #fff;
      }
    }
    .text-box {
      width: 60rem;
      max-width: 100%;
      padding: 6rem 5rem;
      @include sp {
        padding: 1rem 2rem;
      }
      .title {
        font-size: 3.6rem;
        margin-bottom: 2.4rem;
        @include sp {
          font-size: 1.6rem;
          margin: 1rem 0 1rem 0;
        }
      }
      .text {
        font-size: 1.6rem;
        font-weight: 300;
        line-height: 1.8;
        @include sp {
          font-size: 1.4rem;
          line-height: 1.7;
        }
      }
      .more {
        display: block;
        width: fit-content;
        margin-left: auto;
        font-size: 2rem;
        margin-top: 8rem;
        padding: 1rem 2rem;
        position: relative;
        @include sp {
          font-size: 1.6rem;
          margin-top: 2rem;
        }
        &::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 0rem;
          transform: translateY(-50%);
          width: 1rem;
          height: 1rem;
          background-color: #2a9963;
          border-radius: 100%;
          transition: 0.2s;
        }
        &:hover {
          color: #fff;
          &::before {
            content: "";
            position: absolute;
            top: 49%;
            left: 0rem;
            transform: translateY(-50%);
            width: 14rem;
            height: 4rem;
            background-color: #2a9963;
            border-radius: 0;
            transition: 0.2s;
            z-index: -1;
            @include sp {
              width: 12rem;
            }
          }
        }
      }
    }
  }
}
/*----------------------
      WORKS
-----------------------*/
.works {
  padding: 5rem 1rem;
  margin-bottom: 10rem;
  @include sp {
    padding: 10px;
  }
  &__title {
    opacity: 0;
    font-size: 1.8rem;
    margin-bottom: 20px;
    line-height: 1.6;
    @include sp {
      font-size: 1.4rem;
    }
    .span {
      display: block;
      font-size: 6rem;
      position: relative;
      @include sp {
        font-size: 3.5rem;
      }
      &::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: -10px;
        width: 14rem;
        height: 1px;
        background-color: #2a9963;
        @include sp {
          width: 5rem;
        }
      }
    }
  }

  &__box {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @include sp {
      display: block;
    }
    &::after {
      content: "";
      width: 32%;
      @include sp {
        width: 95%;
      }
    }
    .box {
      opacity: 0;
      display: block;
      width: 32%;
      margin-top: 30px;
      overflow: hidden;
      @include sp {
        width: 31rem;
        margin: 30px auto 10px auto;
      }
      .img {
        width: 100%;
        height: 25rem;
        background-size: 42rem;
        background-position: center;
        background-repeat: no-repeat;
        @include sp {
          height: 18rem;
          background-size: 34.5rem;
        }
        &:hover {
          opacity: 0.7;
          transition: 0.2s;
        }
      }
      .title {
        font-size: 1.6rem;
        color: #2a9963;
        margin-top: 10px;
        @include sp {
          font-size: 1.3rem;
          margin: 1rem 0 0 0;
        }
        &:hover {
          opacity: 0.7;
          transition: 0.2s;
        }
      }
    }
  }
  &__more {
    display: block;
    width: fit-content;
    margin-left: auto;
    font-size: 2rem;
    margin-top: 8rem;
    padding: 1rem 2rem;
    position: relative;
    @include sp {
      font-size: 1.6rem;
      margin-top: 2rem;
    }
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0rem;
      transform: translateY(-50%);
      width: 1rem;
      height: 1rem;
      background-color: #2a9963;
      border-radius: 100%;
      transition: 0.2s;
    }
    &:hover {
      color: #fff;
      &::before {
        content: "";
        position: absolute;
        top: 49%;
        left: 0rem;
        transform: translateY(-50%);
        width: 14rem;
        height: 4rem;
        background-color: #2a9963;
        border-radius: 0;
        transition: 0.2s;
        z-index: -1;
        @include sp {
          width: 12rem;
        }
      }
    }
  }
}
</style>
