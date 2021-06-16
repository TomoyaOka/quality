<template>

   <div class="design unit">
    <h2 class="design__title">コーディング.CMS構築</h2>
    <p class="design__sub">
      WordPress構築・CMS組み込みなど幅広くお受けしています。<br>
      LP系の1ページサイトのコーディングやスポット対応も同様に可能です。
    </p>

    <section class="web02">
      <!-- one -->
      <h2 class="web02__title">システム構築.CMS構築</h2>
      <div class="web02__box">
        <p class="text">
          小規模なシステム構築やCMS導入を行います。<br>
          CMS導入は、WordPress・microCMSに対応しています。<br>
          カテゴリー.タグなどの出し分けやカスタムフィールドやカスタム投稿も構築可能になっています。
        </p>
        <div class="img img__one"></div>
      </div>
      <!-- two -->
      <h2 class="web02__title">様々なソフトに対応</h2>
      <div class="web02__box">
        <p class="text">
          illustrator / Photoshop / XD / figmaからのコーディングが可能です。その他ご不明点は、お問い合わせよりご連絡お願いいたします。
        </p>
        <div class="img img__two"></div>
      </div>
      <!-- three -->
      <h2 class="web02__title">マークアップ.スタイリング</h2>
      <div class="web02__box">
        <p class="text">
          HTMLでのマークアップとCSSによるスタイリングを行います。SEOを意識したマークアップで構築していきます。<br>
          マークアップ規則やCSS命名規則がある場合は、事前に詳細を共有していただければ対応致します。
        </p>
        <div class="img img__three"></div>
      </div>
    </section>

    <div class="line03"></div>
    

  </div>

</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}
export default {
  head() {
    return {
      title: " コーディング - ",
    };
  },
  mounted() {
    this.scrollItemG();
  },
  methods: {
    scrollItemG() {

 
        
    },
  },
};
</script>

<style lang="scss">
.design {
  margin: 20rem auto;
  @include sp {
    margin: 15rem auto;
  }
  &__title {
    font-size: 3.6rem;
    position: relative;
    @include sp {
      font-size: 2rem;
    }
    &::before {
      content: '';
      position: absolute;
      bottom: -1.5rem;
      left: 0;
      display: block;
      width: 8rem;
      height: 1px;
      background-color: #333;
    }
  }
  &__sub {
    font-size: 1.6rem;
    margin-top: 5.5rem;
    line-height: 1.85;
    @include sp {
      font-size: 1.3rem;
      margin-top: 4rem;
    }
  }
}
.web02 {
  margin-top: 13rem;
  @include sp {
    margin-top: 7rem;
  }
  &__title {
    font-size: 2.4rem;
    position: relative;
    @include sp {
      font-size: 1.8rem;
    }
    &::before {
      content: '';
      position: absolute;
      bottom: -1.5rem;
      left: 0;
      display: block;
      width: 8rem;
      height: 1px;
      background-color: #333;
      @include sp {
        width: 4rem;
      }
    }
  }

  &__box {
    margin-bottom: 12rem;
    @include sp {
      display: block;
      margin-bottom: 7rem;
    }
    .text {

      font-size: 1.6rem;
      line-height: 1.8;
      margin: 6rem 0 0 0;
      @include sp {
        font-size: 1.3rem;
        margin-top: 3rem;
      }
    }
    .img {
      width: 100%;
      height: 50rem;
      margin-top: 2rem;
      position: relative;
      @include sp {
        width: 100%;
        height: 25rem;
        margin-top: 2rem;
      }
      &__one {
        background-image: url(@/assets/img/web10.png);
        background-size: 100%;
        background-position: center;
        @include sp {
        background-image: url(@/assets/img/web10-sp.png);
        background-size: 120%;
        background-position: center;
        }
      }
      &__two {
        background-image: url(@/assets/img/web11.png);
        background-size: 120%;
        background-position: center;
        @include sp {
        background-size: 120%;
        background-position: center;
        }
      }
      &__three {
        background-image: url(@/assets/img/web09.png);
        background-size: 100%;
        background-position: top;
        @include sp {
        background-size: 125%;
        background-position: center;
        }
      }
    }
  }
}


.line03 {
  width: 100%;
  height: 1px;
  margin: 8rem auto;
  background-color: #9c9c9c;
  @include sp {
    margin: 4rem auto 5rem auto;
  }
}




</style>