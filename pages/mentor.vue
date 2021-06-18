<template>
  <div class="mentor unit">
    <h2 class="mentor__title">メンター</h2>
    <p class="mentor__sub">
      メンターをお引き受けいたします。<br />
      学習初期の方向けの講習やWordPressを使ったテーマ制作についての指導を行うことができます。
    </p>

    <section class="mentor01">
      <div class="mentor01__cover">
        <!-- one -->
        <div class="mentor01__box">
        <h2 class="mentor01__title mentor01__title-one">マンツーマンで対応</h2>
          <p class="text">
            Zoom又はSpatialChatを使って、マンツーマンで指導を行います。大勢で行うと質問しづらかったりでわからない状態で講習を終えてしまう可能性があります。そうならないよう個別で対応しています。
          </p>
        </div>
        <!-- two -->
        <div class="mentor01__box">
        <h2 class="mentor01__title mentor01__title-two">チャット相談</h2>
          <p class="text">
            講習の中でわからない事があった場合は、チャットにてご質問していただけます。状況によって返信までにお時間がかかる時もありますが、基本24時間以内には回答いたします。
          </p>
        </div>
      </div>

      <div class="mentor01__cover">
        <!-- three -->
        <div class="mentor01__box">
        <h2 class="mentor01__title mentor01__title-three">実案件を想定した指導</h2>
          <p class="text">
            実際のお仕事の中で頻出する点や躓きポイントを含みながら講習を進めていきます。<br />
            より具体的な例を交えてお話するので、理解度が増しそのままお仕事で実践することが出来ます。
          </p>
        </div>
        <!-- four -->
        <div class="mentor01__box">
        <h2 class="mentor01__title mentor01__title-four">スケジュール調節</h2>
          <p class="text">
            受講者の予定を考慮してスケジュール調整していきます。なので、無理なく自分のペースで学習を進めていく事が可能になっています。
          </p>
        </div>
      </div>
    </section>

    <div class="line02"></div>

    <!-- voice -->
    <section class="voice">
      <h2 class="voice__title">受講生からの声</h2>
      <p class="voice__sub">
        今まで担当させていただいた受講生の声を幾つかご紹介します。
      </p>

      <p class="voice__text">Oさん</p>
      <p class="voice__text-sub">
        飽き性の私でも、モチベーションを保ち続けられる講習をして頂きました！<br>
        はじめての講習だったので実際すごく緊張していたのですが、
        ラフな寄り添い方をして下さるので、緊張やプレッシャーはあっさりと解けました。<br>
        とにかく、わかりやすい！！<br>
        わからないことでもすぐに聞ける雰囲気が常にあったので、すごく心地よかったです。<br>
        解説や補足も、凄く丁寧で満足感で満たされる楽しい講習でした。<br>
        毎回すごく楽しみにしていました！！本当に、ありがとうございました！！
      </p>

      <p class="voice__text">Mさん</p>
      <p class="voice__text-sub">
        HTMLとCSSを1から教わりました。<br>
        順序立てて要領よく説明して下さったので、とても勉強になりました！<br>
        実際のお仕事のお話も一緒にしてくれたので、<br class="sp">今の自分では知り得なかった事も知ることが出来ました！<br>
        学習で行き詰っている方にトモヤさんの講習を是非おすすめしたいと思います。<br>
        ありがとうございました！
      </p>

      <p class="voice__text">Sさん</p>
      <p class="voice__text-sub">
        最初は不安だったのですが、人柄もよくお話がしやすい方だったのですぐに馴染めました。<br>
        不明点は納得するまで説明してくれますし、噛み砕いて話して下さったので理解するのに時間はかかりませんでした。<br>
        今回覚えたことを活かして次の技術にも取り組んでいきます！
      </p>
    </section>

    <div class="line02"></div>


    <!-- price -->
    <section class="price">
      <h2 class="price__title">メンター料金</h2>
      <table>
        <tbody>
          <tr>
            <th>HTML.CSS指導</th>
            <td>50,000円 (税込) 計5講座 1回/90分</td>
          </tr>
          <tr>
            <th>WordPressオリジナルテーマ制作指導</th>
            <td>70,000円 (税込) 計10講座  1回/90分</td>
          </tr>
          <tr>
            <th>コードレビュー</th>
            <td>10,000円(税込)~ /月</td>
          </tr>
        </tbody>
      </table>
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
      title: " メンター - ",
    };
  },
  mounted() {
    this.scrollItemN();
  },
  methods: {
    scrollItemN() {
        gsap.to(".line02", {
          width: "100%",
          duration: 0.5,
          scrollTrigger: {
            trigger: ".line02",
            start: "top 70%",
            scrub: false,
          },
        });
    },
  },
};
</script>

<style lang="scss">
.mentor {
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
      content: '';
      position: absolute;
      bottom: -1.5rem;
      left: 0;
      display: block;
      width: 6rem;
      height: 1px;
      background-color: #2a9963;
      @include sp {
        width: 3rem;
      }
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

.mentor01 {
  margin: 13rem 0 1rem 0;
  @include sp {
    margin: 10rem 0 7rem 0;
  }
  &__cover {
    display: flex;
    justify-content: space-between;
    @include sp {
      display: block;
    }
  }
  &__title {
    width: fit-content;
    font-size: 2.4rem;
    position: relative;
    @include sp {
      font-size: 1.6rem;
    }
    &::before {
      content: '';
      position: absolute;
      bottom: -1.5rem;
      left: 0;
      display: block;
      width: 8rem;
      height: 1px;
      background-color: #2a9963;
      @include sp {
        width: 4rem;
        bottom: -1rem;
      }
    }

    &-one {
      &::after {
      content: '';
      position: absolute;
      top: -4rem;
      right: -12rem;
      display: block;
      width: 10rem;
      height: 10rem;
      background-image: url(@/assets/img/mentor02.png);
      background-size: 10rem;
      background-repeat: no-repeat;
      @include sp {
        background-size: 9rem;
      }
    }
    }
    &-two {
      &::after {
      content: '';
      position: absolute;
      top: -4rem;
      right: -12rem;
      display: block;
      width: 10rem;
      height: 10rem;
      background-image: url(@/assets/img/mentor03.png);
      background-size: 10rem;
      background-repeat: no-repeat;
      @include sp {
        background-size: 9rem;
      }
    }
    }
    &-three {
      &::after {
      content: '';
      position: absolute;
      top: -4rem;
      right: -12rem;
      display: block;
      width: 10rem;
      height: 10rem;
      background-image: url(@/assets/img/mentor01.png);
      background-size: 10rem;
      background-repeat: no-repeat;
      @include sp {
        background-size: 9rem;
      }
    }
    }
    &-four {
      &::after {
      content: '';
      position: absolute;
      top: -4rem;
      right: -12rem;
      display: block;
      width: 10rem;
      height: 10rem;
      background-image: url(@/assets/img/mentor04.png);
      background-size: 10rem;
      background-repeat: no-repeat;
      @include sp {
        background-size: 9rem;
      }
    }
    }
  }
  &__box {
    margin:1rem 0 13rem 0;
    @include sp {
    margin:1rem 0 7rem 0;
    }
    .text {
      width: 52rem;
      max-width: 100%;
      font-size: 1.6rem;
      line-height: 1.8;
      margin-top: 5rem;
    @include sp {
      font-size: 1.3rem;
      margin-top: 3rem;
    }
    }
  }
}



.line02 {
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
      background-color: #2a9963;
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

/*------------------------
          price
-------------------------*/
.price {
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
      background-color: #2a9963;
      @include sp {
        width: 4rem;
      }
    }
  }
  table {
    margin-top: 5rem;
    th {
      font-size: 1.8rem;
      font-weight: 500;
      padding: 2.5rem 3rem 2rem 0;
      border-right: 1px #9c9c9c solid;
      @include sp {
        font-size: 1.6rem;
        padding: 1rem 0;
        display: block;
        border-bottom: 1px #9c9c9c solid;
        border-right: 0px #9c9c9c solid;
      }
    }
    td {
      font-size: 1.6rem;
      line-height: 1.8;
      padding: 2rem 4rem;
      @include sp {
        font-size: 1.3rem;
        padding: 1rem 0;
        margin-bottom: 2rem;
        display: block;
      }
    }
  }
}

</style>