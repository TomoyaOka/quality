<template>
  <div class="page-about_cover">
    <div class="page-about">
      <div class="unit">
        <h2 class="page-about__title">
          <span class="span">ABOUT</span><br /><span class="span02">Quality Web Studioについて</span>
        </h2>
        <p class="breadcrumb"><nuxt-link to="/">TOP</nuxt-link> > ABOUT</p>
      </div>
      <div class="cover"><div class="page-about__bg"></div></div>
    </div>
    <section class="about-phrase unit">
      <h2 class="phrase ff-n">様々な質を追及して制作しています</h2>
      <div class="phrase-flex">
        <div class="img"><div class="img-filter"></div></div>
        <p class="text phrase-flex-text ff-n">
          <span class="title">屋号名の由来</span>
          私が活動を始めた当初は、とにかくがむしゃらに数をこなしていくという考え方でした。しかし、時間が経つにつれて「数(量)」ではなく、「質」に拘っていきたいという想いが湧いてきました。制作物・人との関わり方など、色々な意味で形だけでなくしっかりと中身のある濃いものする。そういった決意と想いからこの「Quality(質)」という単語を選択しました。「より質の高いものを追求していく」を念頭に、お客様や私と関わっていく方々の役に少しでも立てるよう日々精進していきます。</p>
      </div>
    </section>
    <section class="strong">
      <h2 class="strong__title">
        <mark>Quality Web Studio</mark><br /><mark>３つの強み</mark>
      </h2>
      <div class="strong__box ff-n">
        <div class="item one">
          <p class="title">デザイン～構築まで<br />一貫して制作可能</p>
          <p class="text">
            デザインや構築などをそれぞれ他に頼む手間がありません。ワンストップで制作し、納品することが出来ます。<br>ご希望の方にはドメインやサーバー取得から行い更新管理等も行います。
          </p>
        </div>

        <div class="item two">
          <p class="title">お客様のご要望やその他を踏まえ<br>ご提案していきます</p>
          <p class="text">
            お客様のご要望、サイトの目的や納品後の運用方法など様々な視点を踏まえてご提案させていただきます。<br>綿密なヒアリングのもと制作を進行していきます。
          </p>
        </div>

        <div class="item three">
          <p class="title">納品後もサポートいたします<br>徹底したアフターフォロー</p>
          <p class="text">
            WordPressでの更新の仕方、ブログ投稿や管理画面の使い方など...ご不明な点を質問していただけます。不安な点を無くし快適にご使用していただけるようサポートしていきます。
          </p>
        </div>
      </div>
    </section>
    <section class="address unit">
      <table class="address__table">
        <tbody>
          <tr>
            <th>事業形態</th>
            <td>個人事業主</td>
          </tr>
          <tr>
            <th>屋号名</th>
            <td>Quality Web Studio(クオリティ ウェブ スタジオ)</td>
          </tr>
          <tr>
            <th>住所</th>
            <td>群馬県高崎市(自宅の為、ご契約の際に詳細をお伝えします。)</td>
          </tr>
          <tr>
            <th>定休日</th>
            <td>不定期(NEWSにて事前記載)</td>
          </tr>
          <tr>
            <th>サイトURL</th>
            <td><a href="/">https://quality-web.jp/</a></td>
          </tr>
          <tr>
            <th>業務内容</th>
            <td>・ホームページ制作、更新管理<br />・コーディング.CMS構築<br>・メンター</td>
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
      title: " Quality Web Studioについて- Quality Web Studio",
      meta:[
        { hid: 'description', name: 'description', content: 'QualityWebStudioの由来や強みについてご紹介しています。群馬県にて活動しているWEB屋。' },
        { hid: 'og:description', property: 'og:description', content: 'QualityWebStudioの由来や強みについてご紹介しています。群馬県にて活動しているWEB屋。' },
      ]
    };
  },
  mounted() {
    this.scrollItemB();
  },
  methods: {
    scrollItemB() {
        TweenMax.to('.page-about__bg', 2 , {width:'100%',ease: Power4.easeOut}),
        gsap.to(".item", {
          opacity: 1,
          y: -20,
          duration: 0.5,
          scrollTrigger: {
            trigger: ".item",
            start: "top 80%",
            scrub: false,
          },
          stagger: {
            from: "start",
            amount: .5,
          },
        }),
        gsap.to(".img-filter", {
          width: 0,
          duration: 0.5,
          ease: Power4.easeOut,
          scrollTrigger: {
            trigger: ".img-filter",
            start: "top 80%",
          },
        }),
        gsap.to(".phrase-flex-text", {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".phrase-flex-text",
            start: "top 80%",
          },
        }),
        gsap.to(".page-about__title", {
          opacity: 1, 
          y: -20,
          duration: 0.5,
          scrollTrigger: {
            trigger: ".page-about__title",
            start: "top 80%",
          },
        });
    },
  },
};
</script>

<style lang="scss">
.page-about {
  position: relative;
  height: 70rem;
  margin-top: 150px;
  @include sp {
    height:35rem;
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
    background-image: url(@/assets/img/about02.jpg);
    background-size: 110rem;
    background-position: center;
    border-radius: 15px 0 0 15px;
    @include sp {
      width: 0;
      height: 30rem;
      background-size: 50rem;
      background-position: left;
    }
  }
}

/*----------------------
      about-phrase
-----------------------*/
.about-phrase {
  margin: 3rem auto 15rem auto;
  @include sp {
    margin: 7rem 0 8rem 0;
  }
  .phrase {
    width: fit-content;
    font-size: 3rem;
    font-weight: 300;
    margin: 0 auto 3rem auto;
    padding-bottom: 1rem;
    text-align: center;
    border-bottom: 1px #9c9c9c solid;
    @include sp {
      font-size: 1.8rem;
    }
    &__text {
      width: 60rem;
      text-align: center;
      max-width: 100%;
      margin: 0 auto;
      font-size: 2rem;
      line-height: 1.6;
      @include sp {
        font-size: 1.4rem;
        padding: 0 10px;
      }
    }
  }
  .phrase-flex {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 10rem;
    font-weight: 300;
    @include sp {
      display: block;
      margin-top: 5rem;
    }
    .img {
      width: 60rem;
      height: 40rem;
      background-image: url(@/assets/img/about02.png);
      background-size: 60rem;
      background-position: center;
      background-repeat: no-repeat;
      position: relative;
      @include sp {
        width: 100%;
        height: 20rem;
        background-size: 34rem;
      }
      &-filter {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
      }
    }
    .text {
      width: 60rem;
      padding: 2rem;
      font-size: 1.6rem;
      line-height: 1.85;
      @include sp {
        width: 100%;
        font-size: 1.4rem;
        padding: 1rem 0;
      }
      .title {
        display: block;
        width: fit-content;
        font-size: 3rem;
        margin-bottom: 2rem;
        position: relative;
      @include sp {
        font-size: 2rem;
        margin-bottom: 1rem;
      }
      &::after {
        content: '/ Origin';
        position: absolute;
        top: 50%;
        right: -7rem;
        transform: translateY(-50%);
        font-size: 1.5rem;
        letter-spacing: 0.05em;
        @include sp {
          right: -6rem;
          font-size: 1.3rem;
        }
      }
      }
    }
    &-text {
      opacity: 0;
    }
  }
}
/*----------------------
      strong
-----------------------*/
.strong {
  min-height: 450px;
  background-color: #e7e7e7;
  position: relative;
  padding-bottom:15rem;
  @include sp {
    min-height: 90rem;
  }
  &__title {
    font-size: 4rem;
    line-height: 1.7;
    text-align: center;
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    @include sp {
      width: 30rem;
      max-width: 100%;
      top: -15px;
      font-size: 2rem;
      line-height: 1.85;
    }
    mark {
      padding: 0.5rem 2rem;
      color: #fff;
      background-color: #285b52;
    }
  }

  &__box {
    display: flex;
    justify-content: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    padding-top: 20rem;
    @include sp {
      display: block;
      padding-top: 140px;
    }
    .item {
      opacity: 0;
      width: 35rem;
      min-height: 35rem;
      background: #ffffff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      margin: 0 3rem;
      padding: 6rem 0;
      position: relative;
      @include sp {
        width: 27rem;
        min-height: 25rem;
        margin: 0 0 5rem 0;
        padding: 4rem 0;
      }
      .title {
        font-size: 2rem;
        text-align: center;
        line-height: 1.6;
        margin-bottom: 2rem;
        @include sp {
          font-size: 1.6rem;
        }
      }
      .text {
        font-size: 1.6rem;
        line-height: 1.6;
        padding: 1.5rem 2rem;
        text-align: justify;
        @include sp {
          font-size: 1.3rem;
        }
      }
    }
    .one::before {
      content: "1";
      position: absolute;
      top: -37px;
      left: 50%;
      transform: translateX(-50%);
      display: block;
      width: 7rem;
      height: 7rem;
      font-size: 3rem;
      text-align: center;
      padding: 2rem 0;
      border-radius: 100%;
      background: #ffffff;
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    }
    .two::before {
      content: "2";
      position: absolute;
      top: -37px;
      left: 50%;
      transform: translateX(-50%);
      display: block;
      width: 7rem;
      height: 7rem;
      font-size: 3rem;
      text-align: center;
      padding: 2rem 0;
      border-radius: 100%;
      background: #ffffff;
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    }
    .three::before {
      content: "3";
      position: absolute;
      top: -37px;
      left: 50%;
      transform: translateX(-50%);
      display: block;
      width: 7rem;
      height: 7rem;
      font-size: 3rem;
      text-align: center;
      padding: 2rem 0;
      border-radius: 100%;
      background: #ffffff;
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    }
  }
}

/*----------------------
      address
-----------------------*/
.address {
  padding: 23rem 0 10rem 0;
  @include sp {
    padding: 20rem 0 5rem 0;
  }
  &__table {
    width: 100%;
    padding: 0 50px;
    margin-bottom: 100px;
    @include sp {
      width: 90%;
      margin: 10px auto 100px auto;
    }
    tr {
      border-bottom: 1px #dbdbdb solid;
    }
    th {
      font-size: 1.8rem;
      font-weight: 300;
      padding: 3rem 4rem;
      @include sp {
        font-size: 1.3rem;
        padding: 18px 0;
      }
    }
    td {
      font-size: 1.6rem;
      padding: 3rem 0 3rem 38rem;
      line-height: 1.7;
      @include sp {
        font-size: 1.2rem;
        padding: 15px 0 15px 10px;
      }
      a {
        display: inline-block;
        padding: 1rem;
        background-color: rgba(0, 0, 0, 0.4);
        border: 1px solid;
        color: #fff;
        transition: 0.2s;
        &:hover {
          transition: 0.2s;
          background-color: #2A9963;
        }
      }
    }
  }
}
</style>
