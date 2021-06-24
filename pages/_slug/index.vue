<template>
  <div class="container">
    <article class="entry">
      <p class="entry__breadcrumb">
        <nuxt-link to="/">トップ</nuxt-link> ― {{ item.title }}
      </p>
      <h2 class="entry__title">{{ item.title }}<br><a v-bind:href="item.url" target="_blank" rel="noopener noreferrer">{{ item.url }}</a></h2>
      <div class="entry__img" :style="{ 'background-image': 'url(' + item.img.url + ')' }"></div>

      <p class="title">Outline</p>
      <div class="text" v-html="item.outline"></div>

      <p class="title">Details</p>
      <div class="text" v-html="item.details"></div>

    <div class="comment">
      <p class="title">Comment</p>
      <p class="comment__text">
        規模問わずお仕事をお受けしています。<br>
        WEB制作にお困りの方はお気軽にご相談ください。
      </p>
    </div>
    </article>
  </div>
</template>

<script>
import axios from "axios";

export default {
   head() {
    return { 
      title: this.item.title,
      meta: [
        { hid: 'description', name: 'description', content: this.item.description },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:title', property: 'og:title', content: this.item.title },
        { hid: 'og:description', property: 'og:description', content: this.item.description },
        { hid: 'og:url', property: 'og:url', content: 'https://quality-web.jp/'+this.item.id+'/'},
        { hid: 'twitter:title', property: 'twitter:title', content: this.item.title },
        { hid: 'twitter:description', property: 'twitter:description', content: this.item.description },
      ],
    }
  },
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://quality.microcms.io/api/v1/works/${params.slug}`,
      {
        headers: { "X-API-KEY": process.env.API_KEY },
      }
    );
    return {
      item:data
      }
  },
};
</script>

<style lang="scss">
.entry {
  max-width: 100rem;
  min-height: 1000px;
  margin: 150px auto 0 auto;
  padding: 0 1.5rem;
  @include sp {
    margin: 70px auto 0 auto;
    min-height: 50rem;
  }
  &__breadcrumb {
    font-size: 1.4rem;
    padding: 2rem 1rem;
    @include sp {
      font-size: 1.2rem;
      padding: 2rem 0;
    }
  }
  &__title {
    font-size: 4.6rem;
    padding: 2rem 1rem;
    line-height: 1.5;
    @include sp {
      font-size: 2rem;
      padding: 1rem .2rem 0 0;
    }
    a {
      display: block;
      font-size: 1.6rem;
      @include sp {
        font-size: 1.3rem;
      }
    }
  }
  &__img {
    width: 100%;
    height: 65rem;
    background-size: 100rem;
    background-repeat: no-repeat;
    background-position: center;
    @include sp {
      height: 24rem;
      background-size: 39rem;
    }
  }
  .title {
    width: fit-content;
    font-size: 3rem;
    font-weight: 300;
    margin: 4rem 1rem 1rem 1rem;
    position: relative;
    @include sp {
      font-size: 2rem;
      margin: 2rem 0rem .5rem 0rem;
    }
    &::after {
      content: '';
      display: block;
      position: absolute;
      bottom: 2px;
      right: -2rem;
      width: 1px;
      height: 2.5rem;
      transform: rotate(25deg);
      background-color: green;
      @include sp {
        height: 1.5rem;
      }
    }
  }
  .text {
    padding: 1rem 0;
    @include sp {
      padding: 0;
    }
    img {
      width: 100%;
      max-width: 100%;
      height: auto;
      margin: 1rem 0;
    }
    p {
      font-size: 1.6rem;
      line-height: 1.75;
      margin: 1rem 0;
      color: #333;
      @include sp {
        font-size: 1.3rem;
      }
    }
    span {
      color: #333!important;
    }
    h2 {
      font-size: 2rem;
      margin: 1.5rem 0;
      @include sp {
        font-size: 1.8rem;
      }
    }
    h3 {
      font-size: 1.8rem;
      margin: 1.5rem 0;
      @include sp {
        font-size: 1.6rem;
      }
    }
    a {
      font-size: 1.6rem;
      transition: .2s;
      @include sp {
        font-size: 1.4rem;
        color: #0044CC;
      }
      &:hover {
        opacity: .6;
        transition: .2s;
      }
    }
  }
}
.comment {
  padding: 5rem 0;
  @include sp {
    padding: 2rem 0;
  }
  &__text {
    font-size: 1.6rem;
    line-height: 1.6;
    padding: 1rem 1rem;
    @include sp {
      font-size: 1.4rem;
      padding: 1rem 0;
    }
  }
}
</style>