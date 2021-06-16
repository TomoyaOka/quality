<template>
  <div>
    <div class="thanks ff-n">
      <h2 class="thanks__flow"><img src="@/assets/img/form3.png" /></h2>
      <p class="name">{{ contactInfo.personName }}様</p>
      <p class="thanks__text">お問い合わせありがとうございます。</p>
      <p class="thanks__sub">
        3日以内に返事がない場合は、<br />お手数をおかけしますが下記メールアドレスにご連絡お願いいたします。<br />t.design@linkrec.net
      </p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    contactInfo() {
      console.log(this.$store.state);
      return this.$store.state.contactInfo;
    }
  },
  head() {
    return {
      title: " 完了 - "
    };
  }
};
</script>

<style lang="scss">
.thanks {
  min-height: 90vh;
  padding: 220px 0 100px 0;
  &__flow {
    width: 25rem;
    margin: 0 auto;
    text-align: center;
    @include sp {
      width: 20rem;
    }
    img {
      width: 100%;
    }
  }
  .name {
    font-size: 2.5rem;
    text-align: center;
    margin-top: 7rem;
    @include sp {
      font-size: 1.8rem;
    }
  }
  &__text {
    font-size: 2.5rem;
    margin: 2rem 0 5rem 0;
    text-align: center;
    @include sp {
      font-size: 1.8rem;
    }
  }
  &__sub {
    line-height: 1.75;
    text-align: center;
    @include sp {
      font-size: 1.4rem;
    }
  }
}
</style>