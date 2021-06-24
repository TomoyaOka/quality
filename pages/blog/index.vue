<template>
  <div class="warpper">
    <div class="page-blog">
      <div class="unit">
        <h2 class="page-blog__title etc">
          <span class="span">BLOG</span><br /><span class="span02"
            >各種記事 / ブログ / メディア</span
          >
        </h2>
        <p class="breadcrumb"><nuxt-link to="/">TOP</nuxt-link> > BLOG</p>
      </div>
      <div class="cover"><div class="page-blog__bg"></div></div>
    </div>
    <!-- blog -->
    <section id="blog" class="blog unit">
      <div class="blog__box">
        <nuxt-link
          :to="`/blog/${item.id}`"
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
    <!-- blog -->
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
      items: "" /*  itemsにデータを格納   */
    };
  },
  head: {
    script: []
  },
  async asyncData() {
    const { data } = await axios.get(
      `https://quality.microcms.io/api/v1/blog`,
      { headers: { "X-API-KEY": process.env.API_KEY } }
    );
    return {
      items: data.contents
    };
  },
  head() {
    return {
      title: "ブログ - ",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "掲載可能な実績を挙げています。群馬県にて活動しているWEB屋。"
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "掲載可能な実績を挙げています。群馬県にて活動しているWEB屋。"
        }
      ]
    };
  },
  mounted() {
    this.scrollItemA();
  },
  methods: {
    scrollItemA() {
      TweenMax.to(".page-blog__bg", 2, {
        width: "100%",
        ease: Power4.easeOut
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
        gsap.to(".page-blog__title", {
          opacity: 1,
          y: -20,
          duration: 0.5,
          scrollTrigger: {
            trigger: ".page-blog__title",
            start: "top 80%"
          }
        });
    }
  }
};
</script>

<style lang="scss">
.page-blog {
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
      blog
-----------------------*/
.blog {
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