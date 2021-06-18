<template>
  <div>
    <div class="check ff-n">
      <h2 class="check__flow"><img src="@/assets/img/form2.png" /></h2>
      <!-- form -->
      <div class="form">
        <div class="form__item">
          <label for="">お問い合わせ種別</label>
          <p class="text">{{ contactInfo.contactType }}</p>
        </div>
        <div class="form__item">
          <label for="">会社名</label>
          <p class="text">{{ contactInfo.companyName }}</p>
        </div>

        <div class="form__item">
          <label for="">担当者名</label>
          <p class="text">{{ contactInfo.personName }}</p>
        </div>

        <div class="form__item">
          <label for="">メールアドレス</label>
          <p class="text">{{ contactInfo.mail }}</p>
        </div>

        <label for="">お問い合わせ内容</label>
        <p class="textarea">{{ contactInfo.text }}</p>
        <button type="submit" class="submit" @click="submit">送信する</button>
      </div>
    </div>
    <!-- /form -->
  </div>
</template>
　
<script>
export default {
  head() {
    return {
      title: " 確認 - Quality Web Studio"
    };
  },
  computed: {
    contactInfo() {
      console.log(this.$store.state);
      return this.$store.state.contactInfo;
    }
  },
  methods: {
    async submit() {
      const call = this.$functions.httpsCallable("sendMessage");
      const res = await call({
        contactType: this.contactInfo.contactType,
        companyName: this.contactInfo.companyName,
        personName: this.contactInfo.personName,
        mail: this.contactInfo.mail,
        text: this.contactInfo.text
      }).then(res => {
        console.log(res);
        this.$router.push("/thanks");
      });
    }
  }
};
</script>

<style lang="scss">
/*----------------------
      form
-----------------------*/
.check {
  padding-top: 180px;
  @include sp {
    padding-top: 100px;
  }
  .check__flow {
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
    .text {
      width: 100%;
      height: 80px;
      padding: 2.8rem 2rem;
      display: inline-block;
      border: 1px #9c9c9c solid;
      @include sp {
        font-size: 1.4rem;
        padding: 1.4rem 1.5rem;
        height: 50px;
      }
    }
    .textarea {
      width: 100%;
      min-height: 300px;
      display: inline-block;
      padding: 2rem;
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