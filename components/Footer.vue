<template>
  <div>
    <footer id="footer" class="footer">

      <nuxt-link to="/contact" class="footer__contact">
        <p class="footer__contact-text"><span class="ff-n">ご依頼はこちらから</span><br>CONTACT</p>
      </nuxt-link>

      <div class="footer__cover">
        <div class="list">
          <nuxt-link to="/works">WORKS</nuxt-link>
          <nuxt-link to="/about">ABOUT</nuxt-link>
          <nuxt-link to="/service">SERVICE</nuxt-link>
          <nuxt-link to="/service#flow">FLOW</nuxt-link>
          <nuxt-link to="/contact">CONTACT</nuxt-link>
        </div>
        <div class="sns">
          <a href="https://twitter.com/Create_toom" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.instagram.com/quality.web_studio/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://next-blog.site/" target="_blank" rel="noopener noreferrer">Media</a>
          <nuxt-link to="/Privacy">Privacy.policy</nuxt-link>
        </div>

        <p class="logo"><img src="@/assets/img/logo.svg"></p>
        <p class="copy">2021.Quality Web Studio</p>

      </div>


    </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.footer {
  display: flex;
  flex-direction: row-reverse;
  @include sp {
    display: block;
  }
  &__contact {
    display: block;
    width: 50%;
    height: 450px;
    background-color: #2A9963;
    transition: .2s;
    position: relative;
    @include sp {
      width: 100%;
      height: 200px;
    }
      &:hover {
        background-color: rgb(26, 78, 49);
        transition: .2s;
      }
    &-text {
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      font-size: 4rem;
      color: #fff;
    @include sp {
      font-size: 3rem;
    }
    span {
      font-size: 2rem;
      @include sp {
        font-size: 1.4rem;
      }
    }
    }
  }
  &__cover {
    width: 50%;
    height: 450px;
    padding-left: 10rem;
    padding-top: 16.5rem;
    background-color: #E1E1E1;
    @include sp {
      width: 100%;
      height: auto;
      padding: 5rem 1rem 1rem 1rem;
    }
    .list {
      display: flex;
      padding-bottom: 40px;
      border-bottom: 1px #A4A4A4 solid;
      @include sp {
        flex-wrap: wrap;
        line-height: 1.5;
      }
      a {
        display: block;
        font-size: 1.4rem;
        margin-right: 1rem;
        &:hover {
          color: #2A9963;
          transition: .2s;
        }
        @include sp {
          font-size: 1.2rem;
        }
      }
    }
    .sns {
      display: flex;
      padding-top: 40px;
      a {
        display: block;
        font-size: 1.4rem;
        margin-right: 1rem;
        @include sp {
          font-size: 1.2rem;
        }
        &:hover {
          color: #2A9963;
          transition: .2s;
        }
      }
    }
    .logo {
      width: 12rem;
      margin: 60px 0 25px 0;
      @include sp {
        width: 7rem;
      }
      img {
        width: 100%;
      }
    }
    .copy {
      font-size: 1.3rem;
        @include sp {
          font-size: 1rem;
        }
    }
  }
}

</style>