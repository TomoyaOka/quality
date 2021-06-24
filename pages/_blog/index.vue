<template>
  <div class="container">

    <div class="blog-detail-flex">
    <article class="blog-detail">
      <p class="blog-detail__breadcrumb">
        <nuxt-link to="/">トップ</nuxt-link> ― {{ item.title }}
      </p>
      <h2 class="blog-detail__name ff-n">{{ item.title }}</h2>
      <div class="blog-detail__img" :style="{ 'background-image': 'url(' + item.img.url + ')' }"></div>
      <div class="text" v-html="item.content"></div>
    </article>

    <aside class="sidebar">
      <p class="sidebar__text">よく読まれている記事</p>
      <ul class="sidebar__ul">
        <li><nuxt-link to="">■リスト１リストリストリスト</nuxt-link></li>
        <li><nuxt-link to="">■リスト２リストリストリストリスト</nuxt-link></li>
        <li><nuxt-link to="">■リスト３リストリストリストリストリストリスト３リストリストリストリストリストリスト３リストリストリストリストリスト</nuxt-link></li>
      </ul>
    </aside>
    </div>
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
      `https://quality.microcms.io/api/v1/blog/${params.blog}`,
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
.blog-detail {
  max-width: 70%;
  min-height: 1000px;
  padding: 0 1.5rem;
  @include sp {
    max-width: 100%;
    margin: 60px auto 0 auto;
    min-height: 50rem;
  }

  &-flex {
    display: flex;
    justify-content: space-between;
    max-width: 150rem;
    margin: 150px auto 150px auto;
    @include sp {
      display: block;
      margin: 80px auto 80px auto;
    }
    .sidebar {
      width: 29%;
      padding: 4rem 2rem;
      @include sp {
        width: 100%;
      }
      &__text {
        font-size: 2rem;
        margin: 1rem 0 2rem 0;
        padding-left: 2.5rem;
        position: relative;
        @include sp {
          font-size: 1.8rem;
          padding-left: 1.8rem;
          margin: 1rem 0 1rem 0;
        }
        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          display: block;
          width: 2rem;
          height: 2rem;
          border-radius: 100%;
          background-color: rgb(42, 153, 99);
        @include sp {
          width: 1.5rem;
          height: 1.5rem;
        }
        }
      }
      &__ul {
        li {
          padding: 2rem 0;
          line-height: 1.8;
          border-bottom: 1px #9c9c9c solid;
          font-size: 1.6rem;
          @include sp {
            font-size: 1.4rem;
            padding: 1.5rem 0;
          }
          a {
          font-size: 1.6rem;
                    @include sp {
            font-size: 1.4rem;
          }
          }
        }
      }
    }
  }

  &__breadcrumb {
    font-size: 1.4rem;
    padding: 2rem 2rem;
    @include sp {
      font-size: 1.2rem;
      padding: 2rem 0;
    }
  }
  &__name {
    font-size: 3rem;
    padding: 2rem 2rem;
    line-height: 1.5;
    @include sp {
      font-size: 2rem;
      padding: 1rem .2rem 1rem 0;
    }
  }
  &__img {
    width: 95%;
    height: 55rem;
    margin: 0 auto;
    background-size: 100rem;
    background-repeat: no-repeat;
    background-position: center;
    border: 1px solid;
    @include sp {
      width: 99%;
      height: 20rem;
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
  }
  .text {
    padding: 1rem 2rem;
    margin-bottom: 10rem;
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
      line-height: 1.8;
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
      line-height: 1.6;
      @include sp {
        font-size: 1.8rem;
      }
    }
    h3 {
      font-size: 1.8rem;
      margin: 1.5rem 0;
      line-height: 1.6;
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
</style>