<template>
  <div>
    <div class="page-contact">
      <div class="unit">
        <h2 class="page-contact__title">
          <span class="span">CONTACT</span><br /><span class="span02">即日対応 / 各種ご相談 / 問い合わせ</span>
        </h2>
        <p class="breadcrumb"><nuxt-link to="/">TOP</nuxt-link> > CONTACT</p>
        <div class="cover"><div class="page-contact__bg"></div></div>
      </div>
    </div>
    <section class="contact-form">
      <h2 class="contact-flow"><img src="@/assets/img/form1.png"></h2>

  <!-- form -->
  <div class="form ff-n">
     <div class="form__item">
      <label for="">お問い合わせ種別<span>必須</span></label>
      <select name="" id="" v-model="contactType">
        <option value="">選択する</option>
        <option value="ホームページ制作について">ホームページ制作について</option>
        <option value="コーディングについて">コーディングについて</option>
        <option value="メンターについて">メンターについて</option>
        <option value="その他">その他</option>
      </select>
      <span class="form__item-error" :class="{'active':err_contactType}">※必須項目を入力してください</span>
    </div>
    <div class="form__item">
      <label for="">会社名</label>
      <input type="text" placeholder="クオリティ ウェブ スタジオ" v-model="companyName">
    </div>

    <div class="form__item">
      <label for="">担当者名<span>必須</span></label>
      <input type="text" placeholder="オカダトモヤ" v-model="personName">
      <span class="form__item-error" :class="{'active':err_personName}">※必須項目を入力してください</span>
    </div>

    <div class="form__item">
      <label for="">メールアドレス<span>必須</span></label>
      <input type="text" placeholder="design@xxx.com" v-model="mail" >
      <span class="form__item-error" :class="{'active':err_mail}">{{errText_mail}}</span>
    </div>

    <label for="">お問い合わせ内容<span>必須</span></label>
    <textarea name="" id="" cols="30" rows="10" placeholder="例)ホームページ制作をしたいのですが、見積もりをお願いできますか？" v-model="text"></textarea>
      <span class="form__item-error" :class="{'active':err_text}">※必須項目を入力してください</span>
    <button type="submit" class="submit" @click="check">確認する</button>
  </div>
    </section>
</div>
<!-- /form -->
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
      title: "お問い合わせ - "
    };
  },
  mounted() {
    this.scrollItemE();
    this.contactType = this.$store.state.contactInfo.contactType;
    this.companyName = this.$store.state.contactInfo.companyName;
    this.personName = this.$store.state.contactInfo.personName;
    this.mail = this.$store.state.contactInfo.mail;
    this.text = this.$store.state.contactInfo.text;
  },
  data() {
    return {
      //入力欄の初期値をここで決めておく
      contactType: "",
      companyName: "",
      personName: "",
      mail: "",
      text: "",
      //入力欄のエラー検知用
      err_contactType: false,
      err_personName: false,
      err_mail: false,
      err_text: false,
      errText_mail: "必須項目を入力してください"
    };
  },
  methods: {
    scrollItemE() {
      TweenMax.to(".page-contact__bg", 2, {
        width: "100%",
        ease: Power4.easeOut
      }),
        gsap.to(".page-contact__title", {
          opacity: 1,
          y: -20,
          duration: 0.5,
          scrollTrigger: {
            trigger: ".page-contact__title",
            start: "top 80%"
          }
        });
    },
    check() {
      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      this.err_contactType = false;
      this.err_personName = false;
      this.err_mail = false;
      this.err_text = false;

      //各入力項目について確認
      if (!this.contactType) {
        this.err_contactType = true;
      }
      if (!this.personName) {
        this.err_personName = true;
      }
      console.log("mail", this.mail);
      if (!this.mail) {
        console.log("aa");
        this.err_mail = true;
        this.errText_mail = "必須項目を入力してください";
      }
      if (this.mail && !regex.test(this.mail)) {
        this.err_mail = true;
        this.errText_mail = "メールアドレスの形式を正しく入力してください。";
      }
      if (!this.text) {
        this.err_text = true;
      }
      //全部問題ないときだけ処理を開始。そうじゃないときはここで終了
      if (
        this.contactType &&
        this.personName &&
        this.mail &&
        regex.test(this.mail) &&
        this.text
      ) {
        console.log("All required fields are filled.");
        //storeに登録
        this.$store.commit("update", {
          contactInfo: {
            contactType: this.contactType,
            companyName: this.companyName,
            personName: this.personName,
            mail: this.mail,
            text: this.text
          }
        });
        console.log({ store: this.$store.state });
        //ページ遷移
        this.$router.push("/check");
      }
    }
  },
  watch: {
    "$store.state.contactInfo": function() {
      this.contactType = this.$store.state.contactInfo.contactType;
      this.companyName = this.$store.state.contactInfo.companyName;
      this.personName = this.$store.state.contactInfo.personName;
      this.mail = this.$store.state.contactInfo.mail;
      this.text = this.$store.state.contactInfo.text;
    }
  }
};
</script>

<style lang="scss">
.page-contact {
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
    background-image: url(@/assets/img/contact.png);
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
      form
-----------------------*/
.contact-form {
  .contact-flow {
    width: 23rem;
    text-align: center;
    margin: 50px auto;
    @include sp {
      width: 17rem;
    }
    img {
      width: 100%;
    }
  }

  .form {
    width: 1000px;
    max-width: 100%;
    margin: 20px auto 100px auto;
    padding: 0 20px;
    &__item {
      margin-bottom: 40px;
      &-error {
        display: none;
        font-size: 1.4rem;
        color: red;
        margin-top: 5px;
        &.active {
          display: block;
        }
        @include sp {
          font-size: 1.2rem;
        }
      }
    }
    label {
      display: block;
      font-size: 1.8rem;
      margin-bottom: 10px;
      cursor: auto;
      @include sp {
        font-size: 1.4rem;
      }
      span {
        display: inline-block;
        font-size: 1.4rem;
        margin-left: 10px;
        padding: 5px 10px;
        color: #fff;
        background-color: seagreen;
        @include sp {
          font-size: 1.2rem;
          padding: 5px 7px;
        }
      }
    }
    select {
      width: 100%;
      height: 80px;
      padding-left: 20px;
      display: inline-block;
      border: 1px #9c9c9c solid;
      @include sp {
        font-size: 1.4rem;
        height: 50px;
      }
    }
    input {
      width: 100%;
      height: 80px;
      padding-left: 20px;
      display: inline-block;
      border: 1px #9c9c9c solid;
      @include sp {
        font-size: 1.4rem;
        height: 50px;
      }
    }
    textarea {
      width: 100%;
      min-height: 300px;
      display: inline-block;
      padding: 20px;
      line-height: 1.7;
      border: 1px #9c9c9c solid;
      @include sp {
        font-size: 1.4rem;
        padding: 1.5rem;
      }
    }
    .submit {
      display: block;
      width: 600px;
      max-width: 100%;
      margin: 30px auto;
      padding: 30px;
      background-color: seagreen;
      color: #fff;
      text-align: center;
      font-size: 1.6rem;
      transition: 0.2s;
      @include sp {
        font-size: 1.4rem;
        padding: 20px;
      }
      &:hover {
        background-color: rgb(26, 78, 49);
        transition: 0.2s;
      }
    }
  }
}
</style>
