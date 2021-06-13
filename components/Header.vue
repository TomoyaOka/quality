<template>
  <div>
    <header class="header">
      <h1 class="header__logo"><nuxt-link to="/" v-on:click.native="flag = false"><img src="~@/assets/img/logo.svg"></nuxt-link></h1>
      <nav class="nav">
        <ul class="nav__ul">
          <li class="nav__ul-li"><nuxt-link to="/works">WORKS</nuxt-link></li>
          <li class="nav__ul-li"><nuxt-link to="/about">ABOUT</nuxt-link></li>
          <li class="nav__ul-li"><nuxt-link to="/service">SERVICE</nuxt-link></li>
          <li class="nav__ul-li nav__ul-li--green"><nuxt-link to="/contact">CONTACT</nuxt-link></li>
        </ul>
      </nav>

      <div id="menu-open" :class="{ active: flag }" v-on:click="flag = !flag">
        <span></span>
        <span></span>
      </div>
      <nav id="menu-body" :class="{ open: flag }">
        <ul class="sp-ul">
          <li class="sp-ul__li" :class="{ fadein: flag }">
            <nuxt-link to="/" v-on:click.native="flag = false"
              ><span>01 ― </span>TOP</nuxt-link
            >
          </li>
          <li class="sp-ul__li" :class="{ fadein: flag }">
            <nuxt-link to="/works" v-on:click.native="flag = false"
              ><span>02 ― </span>WORKS</nuxt-link
            >
          </li>
          <li class="sp-ul__li" :class="{ fadein: flag }">
            <nuxt-link to="/about" v-on:click.native="flag = false"
              ><span>03 ― </span>ABOUT</nuxt-link
            >
          </li>
          <li class="sp-ul__li" :class="{ fadein: flag }">
            <nuxt-link to="/service" v-on:click.native="flag = false"><span>04 ― </span>SERVICE</nuxt-link>
            <nuxt-link to="/webdesign" v-on:click.native="flag = false" class="mini">― ホームページ制作</nuxt-link>
            <nuxt-link to="/coding" v-on:click.native="flag = false" class="mini">― コーディング代行</nuxt-link>
            <nuxt-link to="/mentor" v-on:click.native="flag = false" class="mini">― コードレビュー、技術的指導</nuxt-link>
          </li>
            <li class="sp-ul__li" :class="{ fadein: flag }">
            <nuxt-link to="/contact" v-on:click.native="flag = false"
              ><span>05 ― </span>CONTACT</nuxt-link>
          </li>
        </ul>
        <div class="sns">
          <a href="https://twitter.com/Create_toom" target="_blank" rel="noopener noreferrer" class="icon"><img src="@/assets/img/Twitter.png"></a>
          <a href="https://www.instagram.com/quality.web_studio/" target="_blank" rel="noopener noreferrer" class="icon"><img src="@/assets/img/Instagram.png"></a>
        </div>
        <div class="etc">
          <li>__ address<br>Gunma.Takasaki</li>
          <li>__ name<br>Quality Web Studio </li>
          <li>__ project<br>Web Design / Coding</li>
          <li>__ url<br>https://quality-web.jp</li>
        </div>
      </nav>
    </header>

  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
      button:false,
    };
  },
  
}
</script>

<style lang="scss">
.header {
  width: 1600px;
  max-width: 100%;
  padding: 21px 45px;
  position: fixed;
  top:25px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 60px;
  z-index: 9998;
  @include h-min {
    top: 0;
  }
  @include sp {
    width: 100%;
    top: 0;
    padding: 1.6rem 1.5rem;
  }
  &__logo {
    width: 12rem;
    @include sp {
      width: 7rem;
      position: relative;
      z-index: 9998;
    }
    img {
      width: 100%;
    }
  }
}

.nav {
  &__ul {
    width: 44rem;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include sp {
      display: none;
    }
    &-li {
      font-size: 1.8rem;
      &--green {
        color: rgb(42, 153, 99);
      }
      &:hover {
        color: rgb(16, 65, 41);
      }
    }
  }
}

/*-----------------
      SP-menu
------------------*/
#menu-open {
  display: none;
  width: 60px;
  height: 60px;
  z-index: 9998;
  position: relative;
  top:-3px;
  transition: 0.2s;
  @include sp {
    display: block;
    width: 40px;
    height: 20px;
  }
  span {
    display: block;
    position: absolute;
    width: 30px;
    height: 1px;
    left: 6px;
    background: #555;
    transition: 0.3s ease-in-out;

    &:nth-child(1) {
      top:9px;
    }
    &:nth-child(2) {
      top:17px;
    }
  }
}
#menu-body {
  display: none;
  position: fixed;
  top: 0;
  left: -1px;
  z-index: 9997;
  width: 103%;
  height: 100vh;
  background-color: #fff;
  transition: 0.3s;
  &.open {
    display: block;
    overflow-y: scroll;
    animation: show .2s linear 0s;
  }

  .sp {
    &-text {
      font-size: 1.8rem;
      padding: 25px;
      background-position: center;
      font-weight: bold;
    }
    &-ul {
      padding-top: 80px;
      &__li {
        a {
          display: block;
          font-size: 1.6rem;
          padding: 20px 25px;
        }
        span {
          font-size: 1.2rem;
          color: rgb(129, 129, 129);
          margin-right: 0.3rem;
        }
        .mini {
          display: block;
          font-size: 1.2rem;
          padding: 1rem 2.5rem;
          color: rgb(129, 129, 129);
        }
      }
    }
  }
  .sns {
    display: flex;
    padding: 2rem;
    .icon {
      display: block;
      width: 30px;
      margin-right: 1rem;
      img {
        width: 100%;
      }
    }
  }
  .etc {
    padding-top: 2rem;
    li {
      list-style: none;
      line-height: 1.6;
      padding: 5px 30px;
      font-size: 1.4rem;
      color: #9D9D9D;
    }
  }
}

@keyframes show{
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}

/* ナビ開いてる時のボタン */
#menu-open.active span:nth-child(1) {
  top : 13px;
  left: 6px;
  background :#555;
  transform        : rotate(-25deg);
}

#menu-open.active span:nth-child(2),
#menu-open.active span:nth-child(3) {
  top: 13px;
  background :#555;
  transform        : rotate(25deg);
}

</style>