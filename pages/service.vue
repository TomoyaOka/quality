<template>
  <div>
    <div class="page-service">
      <div class="unit">
        <h2 class="page-service__title"><span class="span">SERVICE</span><br><span class="span02">Web Design / WordPress / Customize</span></h2>
        <p class="breadcrumb"><nuxt-link to="/">TOP</nuxt-link> > SERVICE</p>
      </div>
      <div class="cover"><div class="page-service__bg"></div></div>
    </div>
    <!--  -->
    <section class="service-list unit">
      <div class="mokuzi">
        <a href="#webdesign" v-scroll-to="'#webdesign'" class="item">サービスについて</a>
        <a href="#flow" v-scroll-to="'#flow'" class="item">制作の流れ</a>
      </div>
      <h2 class="catchphrase">より使いやすく、より見やすく</h2>
      <p class="catchphrase-sub">ユーザーがサイトを閲覧した際に、<br>知りたい情報を正確に伝えられるデザイン。<br>お客様の更新しやすいサイト設計をしていきます。</p>
      <div class="catchphrase__img"><img src="@/assets/img/service1.png"></div>


      <h3 id="webdesign" class="service-list__name">ホームページ制作</h3>
      <div class="service-list__box">
        <div class="img img__one"></div>
        <div class="text">
          <p>デザイン~サイトの構築まで一貫して制作していきます。<br>作る目的や制作後の運用方法に沿ったサイト設計を行います。<br>使いやすく見やすいサイトを提供いたします。<br>企画進行~最期の納品までは、約1か月~2か月を目安にしていただく形になります。</p>
          <nuxt-link to="/webdesign" class="more">詳しく見る</nuxt-link>

        </div>
      </div>

      <h3 id="coding" class="service-list__name">コーディング.CMS構築</h3>
      <div class="service-list__box">
        <div class="img img__two"></div>
        <p class="text">
          カンプからのコーディングやCMS導入などを請け負います。<br>
          納期目安：2週間~ (ボリュームにより前後)<br>
          ― 対応できる範囲<br>
          ・WordPressを使用したオリジナルテーマ構築<br>
          ・Vue.js  Nuxt.jsを使用したサイト制作範囲内の構築<br>
          ・シンプルHTML.CSSでの構築<br>
           <nuxt-link to="/coding" class="more">詳しく見る</nuxt-link>
          </p>
      </div>

      <h3 id="review" class="service-list__name">Mentor</h3>
      <div class="service-list__box">
        <div class="img img__three"></div>
        <p class="text">
            HTML.CSSのコードレビュー、制作指導を行います。<br>
            WordPressを使用してオリジナルテーマ制作についても対応可能ですので、
            学習に詰まってしまっている方、メンターを探している方は是非ご検討ください。<br>
            <nuxt-link to="/mentor" class="more">詳しく見る</nuxt-link>
          </p>
      </div>

    </section>
    <!--  -->
    <!-- flow -->
<section id="flow" class="flow-box">
  <div class="unit">
    <h2 class="flow-title"><span>FLOW</span><br>制作の流れ</h2>
    <div class="flow">

      <div class="flow__item">
        <div class="flex">
          <p class="num">1</p>
          <p class="title ff-n">お問い合わせ</p>
        </div>
        <p class="text ff-n">当サイト内にあるフォームよりお問い合わせをお願いいたします。<br>3日以内にお返事いたします。</p>
      </div>

      <div class="flow__item">
        <div class="flex">
          <p class="num">2</p>
          <p class="title ff-n">打ち合わせ</p>
        </div>
        <p class="text ff-n">お問い合わせいただいた内容を元に、具体的な内容や方向性についての打ち合わせを行います。<br>オンラインツールを使用。(群馬県内でしたらオフライン可。)</p>
      </div>

      <div class="flow__item">
        <div class="flex">
          <p class="num">3</p>
          <p class="title ff-n">デザイン制作</p>
        </div>
        <p class="text ff-n">ヒアリングした内容に基づいて、デザインを制作していく工程に移ります。<br>サイトの使用目的や方針に沿ったデザインを制作しご提案していきます。</p>
      </div>

      <div class="flow__item">
        <div class="flex">
          <p class="num">4</p>
          <p class="title ff-n">デザインの確認、修正</p>
        </div>
        <p class="text ff-n">完成したデザインを確認していただきます。<br>この時点で、細かな修正や変更などお申し付けください。</p>
      </div>

      <div class="flow__item">
        <div class="flex">
          <p class="num">5</p>
          <p class="title ff-n">サイト構築</p>
        </div>
        <p class="text ff-n">完成したデザインを実際に構築していく工程に移ります。</p>
      </div>

      <div class="flow__item">
        <div class="flex">
          <p class="num">6</p>
          <p class="title ff-n">テスト環境で動作確認</p>
        </div>
        <p class="text ff-n">構築完了後、こちらで保有しているテスト環境にて実際に動作を確認していただきます。</p>
      </div>

      <div class="flow__item">
        <div class="flex">
          <p class="num">7</p>
          <p class="title ff-n">本番環境に組み込み</p>
        </div>
        <p class="text ff-n">確認していただいた後、<br>お客様のドメインに制作したものを組み込んでいく工程に移ります。</p>
      </div>

      <div class="flow__item">
        <div class="flex">
          <p class="num">8</p>
          <p class="title ff-n">納品</p>
        </div>
        <p class="text ff-n">組み込みが完了次第、納品になります。<br>WordPressの操作などご不明点は対応いたします。<br>ここまでのおおよその目安期間は、1か月~1か月半程度になるかと思います。(内容により前後)</p>
      </div>
    </div>
  </div>
</section>
    <!-- /flow -->
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
      title: " 事業内容について - ",
      meta:[
        { hid: 'description', name: 'description', content: '事業内容についてご紹介しています。ホームページ制作やコーディング業務など是非お任せください。群馬県にて活動しているWEB屋。' },
        { hid: 'og:description', property: 'og:description', content: '事業内容についてご紹介しています。ホームページ制作やコーディング業務など是非お任せください。群馬県にて活動しているWEB屋。' },
      ]
    };
  },
  mounted() {
    this.scrollItemC();
  },
  methods: {
    scrollItemC() {
      TweenMax.to(".page-service__bg", 2, {
        width: "100%",
        ease: Power4.easeOut,
      }),
        gsap.to(".flow__item", {
          opacity: 1,
          y: -20,
          duration: 0.5,
          scrollTrigger: {
            trigger: ".flow__item",
            start: "top 80%",
            scrub: false,
          },
          stagger: {
            from: "start",
            amount: 0.5,
          },
        }),
        gsap.to(".flow-box", {
          background:"#f5f5f5",
          duration: 1,
          scrollTrigger: {
            trigger: ".flow-box",
            start: "top 50%",
            scrub: true,
          },
          stagger: {
            from: "start",
            amount: 0.5,
          },
        }),
        gsap.to(".page-service__title", {
          opacity: 1,
          y: -20,
          duration: 0.5,
          scrollTrigger: {
            trigger: ".page-service__title",
            start: "top 80%",
          },
        });
        
    },
  },
};
</script>

<style lang="scss">

.close {
  display: block;
  width: 5rem;
  height: 5rem;
  background-color: #333;
  color: #fff;
  text-align: center;
  font-size: 3.2rem;
  position: absolute;
  top: 20px;
  right: 2rem;
  @include sp {
    width: 4rem;
    height: 4rem;
    font-size: 2.5rem;
  }
}
.page-service {
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
    background-image: url(@/assets/img/web06.png);
    background-size: 110rem;
    background-position: center;
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
      service-list
-----------------------*/
.service-list {
  width: 120rem;
  max-width: 100% !important;
  margin-bottom: 80px;
  .mokuzi {
    display: flex;
    justify-content: center;
    margin-bottom: 18rem;
    .item {
      display: block;
      font-size: 1.8rem;
      margin: 0 2rem;
      position: relative;
      @include sp {
        font-size: 1.4rem;
      }
      &::before {
        content: url(@/assets/img/arrow.png);
        position: absolute;
        bottom: -40px;
        left: 50%;
        transform: translateX(-50%);
        transition: 0.2s;
        @include sp {
          transform: translateX(-50%) scale(0.5);
        }
      }
      &:hover::before {
        content: url(@/assets/img/arrow.png);
        position: absolute;
        bottom: -50px;
        left: 50%;
        transform: translateX(-50%);
        transition: 0.2s;
        @include sp {
          transform: translateX(-50%) scale(0.5);
        }
      }
    }
  }
  .catchphrase {
    font-size: 4rem;
    text-align: center;
    margin-bottom: 30px;
    @include sp {
      font-size: 1.8rem;
    }
    &-sub {
      font-size: 1.8rem;
      line-height: 1.6;
      text-align: center;
      margin-bottom: 4rem;
      @include sp {
        font-size: 1.4rem;
        margin-bottom: 3rem;
      }
    }
    &__img {
      width: 30rem;
      margin: 2rem auto 10rem auto;
      @include sp {
        width: 20rem;
      }
      img {
        width: 100%;
      }
    }
  }

  &__name {
    width: 51rem;
    max-width: 100%;
    font-size: 2.8rem;
    border-bottom: 1px solid;
    padding-bottom: 2rem;
    margin-bottom: 3rem;
    @include sp {
      font-size: 1.8rem;
      padding-bottom: 1rem;
      margin-bottom: 2rem;
    }
  }
  &__box {
    width: 110rem;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    margin-bottom: 7rem;
    @include sp {
      display: block;
      margin-bottom: 5rem;
    }
    .text {
      width: 51rem;
      max-width: 100%;
      font-size: 1.8rem;
      line-height: 1.75;
      @include sp {
        font-size: 1.4rem;
      }
      a {
        width: fit-content;
        display: block;
        color: #2a9963;
        margin: 3rem 0 0 auto;
        text-align: right;
      }
      span {
        display: block;
        margin-top: 2rem;
      }
      .plan {
        display: block;
        width: fit-content;
        color: #2a9963;
        border-bottom: 1px solid;
        margin-top: 2rem;
        transition: .2s;
        &:hover {
          color: #1d6442;
          transition: .2s;
        }
      }
    }
    .img {
      width: 50rem;
      height: 30rem;
      margin-top: -3rem;
      position: relative;
      @include sp {
        width: 100%;
        height: 20rem;
        margin: 2rem auto;
      }
      img {
        width: 100%;
      }
      &__one {
        background-image: url(@/assets/img/web05.png);
        background-size: 50rem;
        @include sp {
        background-size: 36rem;

        }
      }
      &__two {
        background-image: url(@/assets/img/web10.png);
        background-size: 50rem;
        background-position: center;
        @include sp {
        background-size: 36rem;
        }
      }
      &__three {
        background-image: url(@/assets/img/web09.png);
        background-size: 50rem;
        @include sp {
        background-size: 36rem;
        }
      }
    }
  }
}

/*----------------------
      flow
-----------------------*/
.flow-box {
  background-color: #fff;
  padding: 50px 2rem;
  @include sp {
    padding: 3rem 0;
  }
}
.flow-title {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  @include sp {
    font-size: 1.4rem;
    line-height: 1.4;
    margin-left: 1rem;
    margin-bottom: 6rem;
  }
  span {
    display: block;
    font-size: 4.2rem;
    position: relative;
    @include sp {
      font-size: 2.2rem;
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
        width: 4rem;
      }
    }
  }
}
.flow {
  width: 110rem;
  max-width: 100%;

  &__item {
    opacity: 0;
    margin: 6rem 0;
    padding: 4rem 0 7rem 0;
    border-bottom: 1px rgb(121, 121, 121) solid;
    @include sp {
      width: 100%;
      margin: 0 auto 2rem auto;
      padding: 2rem 0 4rem 0;
    }
    .flex {
      display: flex;
      margin-bottom: 2rem;
      @include sp {
        margin-bottom: 1rem;
      }
    }
    .num {
      font-size: 3.5rem;
      margin-right: 7rem;
      padding-right: 1rem;
      @include sp {
        font-size: 2.2rem;
        margin-right: 2rem;
      }
    }
    .title {
      font-size: 2.4rem;
      letter-spacing: 0.05em;
      font-weight: 500;
      @include sp {
        font-size: 1.8rem;
        margin-bottom: 10px;
        font-weight: 400;
        letter-spacing: 0.02em;
      }
    }
    .text {
      width: 100%;
      font-size: 2rem;
      font-weight: 300;
      margin-left: 10rem;
      line-height: 1.6;
      @include sp {
        font-size: 1.4rem;
        margin-left: 0;
        text-align: justify;
      }
    }
  }
  .unit {
    @include sp {
      padding: 0!important;
    }
  }
}
</style>
