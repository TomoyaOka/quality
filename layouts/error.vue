<template>
  <div class="error-page">
    <h1 class="error" v-if="error.statusCode === 404"><span>404</span><br>お探しのページは見つかりませんでした。</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink class="error-top" to="/">トップページへ戻る</NuxtLink>
  </div>
</template>

<script>
  export default {
  　head() {
    　return {
       title: " ページが見つかりません - ",
     };
   　},

    props: ['error'],
    layout: 'error'
  }
</script>

<style lang="scss">
.error-page {
  min-height: 50rem;
}
.error {
  font-size: 2.2rem;
  font-weight: bold;
  color: #26a69a;
  text-align: center;
  line-height: 1.7;
  margin: 27rem 0 50px 0;
    @include sp {
      font-size: 1.4rem;
    }
  span {
    font-size: 5rem;
    @include sp {
      font-size: 3rem;
    }
  }
  &-top {
    display: block;
    width: fit-content;
    font-size: 1.6rem;
    text-align: center;
    border-bottom: 1px #333 solid;
    margin: 0 auto;
    transition: .2s;
    @include sp {
      font-size: 1.4rem;
    }
    &:hover {
      transition: .2s;
      opacity: .5;
    }
  }
}
</style>