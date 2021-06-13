<template>
  <div class="design unit">
    <h2 class="design__title">ホームページ制作</h2>
    <p class="design__sub">
      サイト設計、デザイン～構築までワンストップでお受けしています。<br />デザインの見た目だけでなく方向性や目指すべき所を考えて制作しています。
    </p>

    <section class="web">
      <!-- one -->
      <h2 class="web__title">UI / UXを配慮した設計</h2>
      <div class="web__box">
        <p class="text">
          サイトの見やすさ(UI)と視覚での体験(UX)を考えたサイト設計をしていきます。企業・ブランドイメージや方向性にあったデザインをご提案していきます。<br />コンテンツの余白や配置の仕方で大きく印象は変わってきます。様々なケースを想定して制作していきます。
        </p>
        <div class="img img__one"></div>
      </div>
      <!-- two -->
      <h2 class="web__title">綿密な方向性の擦り合わせ</h2>
      <div class="web__box">
        <p class="text">
          デザイン設計、ページ構成などを決定していく中で運用の仕方や展望によって変わってくる部分があります。<br />その点をしっかりと話し合い、お互いにしっかりと方向性を見定めた上で進行していきます。
          オンラインツールを使い、定期的に話し合いの場を設けていきます。
        </p>
        <div class="img img__two"></div>
      </div>
      <!-- three -->
      <h2 class="web__title">サーバー、ドメイン管理</h2>
      <div class="web__box">
        <p class="text">
          新規でホームページを作る場合は、サーバーやドメインの取得を行わなければいけません。<br />そういった所の取得管理も此方でお引き受けすることができます。(管理費は別途発生)
        </p>
        <div class="img img__three"></div>
      </div>
    </section>

    <div class="line"></div>
    <!-- LINEを伸ばす -->

    <!-- voice -->
    <section class="voice">
      <h2 class="voice__title">お客様からの声</h2>
      <p class="voice__sub">
        今まで担当させていただいたお客様の声を幾つかご紹介します。
      </p>

      <p class="voice__text-sub">
        大満足です！大変良いサイトを制作して頂けました！トモヤさんにお願いして大正解でした！<br />
        特にデザインが気に入りました。サイトの見た目も凄く大事なので、洗練されたサイトに仕上げて頂きありがとうございます！<br />
        いつでも迅速に、丁寧に対応してくださったので安心してお取引きさせて頂けました。予想より早く受け取ることもできて嬉しい限りです。<br />
        これから制作して頂いたサイトをどんどん使わせて頂きます！私も頑張ります！この度はありがとうございました。また何かあれば、是非宜しくお願い致します。
      </p>

      <p class="voice__text-sub">
        仕事が早い！！<br />
        レスポンスが早く、非常に丁寧に対応して頂けました。<br />
        完成品も想像以上の仕上がりで、大変満足しています。
      </p>

      <p class="voice__text-sub">
        オカダ様に依頼して本当に良かったと思っています！<br />
        ワードプレスの使い方がよくわからなかったのですが、丁寧に操作方法を教えてくださりましたので安心できました。<br />
        デザイン面でも私好みでとても気にいっています！<br />ありがとうございました。
      </p>
    </section>
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
      title: " ホームページ制作 - ",
    };
  },
    mounted() {
    this.scrollItemF();
  },
  methods: {
    scrollItemF() {
        gsap.to(".line", {
          width: "100%",
          duration: 0.5,
          scrollTrigger: {
            trigger: ".line",
            start: "top 90%",
            scrub: false,
          },
        });
    },
  },
};
</script>

<style lang="scss">
.design {
  margin: 20rem auto;
  @include sp {
    margin: 15rem auto 5rem auto;
  }
  &__title {
    font-size: 3.6rem;
    position: relative;
    @include sp {
      font-size: 2rem;
    }
    &::before {
      content: "";
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

.web {
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
      content: "";
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
    // display: flex;
    // justify-content: space-between;
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
        background-image: url(@/assets/img/web01.png);
        background-size: 110%;
        @include sp {
          background-size: 130%;
        }
      }
      &__two {
        background-image: url(@/assets/img/web02.png);
        background-size: 100%;
        background-position: center;
        @include sp {
          background-size: 110%;
        }
      }
      &__three {
        background-image: url(@/assets/img/web12.png);
        background-size: 95%;
        background-position: center;
        @include sp {
          background-size: 120%;
          background-position: center;
        }
      }
    }
  }
}

.line {
  width: 0;
  height: 1px;
  margin: 8rem auto;
  background-color: #9c9c9c;
  @include sp {
    margin: 4rem auto 5rem auto;
  }
}

.voice {
  &__title {
    font-size: 3.6rem;
    position: relative;
    @include sp {
      font-size: 2rem;
    }
    &::before {
      content: "";
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
  &__sub {
    font-size: 1.6rem;
    margin-top: 4rem;
    margin-bottom: 8rem;
    @include sp {
      font-size: 1.3rem;
      margin: 3rem 0 3rem 0;
      line-height: 1.7;
    }
  }
  &__text {
    font-size: 2.4rem;
    margin-bottom: 2rem;
    @include sp {
      font-size: 1.8rem;
    }
    &-sub {
      font-size: 1.6rem;
      line-height: 1.8;
      margin-bottom: 4rem;
      padding: 3rem 1.5rem;
      border: 1px #9c9c9c solid;
      @include sp {
        font-size: 1.3rem;
        padding: 1.2rem 1.2rem;
      }
    }
  }
}
</style>