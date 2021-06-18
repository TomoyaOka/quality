<template>
  <div class="header_cv">
    <header class="header">
      <h1 class="header__logo">
        <nuxt-link to="/" v-on:click.native="flag = false"
          ><img src="~@/assets/img/logo.svg"
        /></nuxt-link>
      </h1>
      <nav class="nav">
        <ul class="nav__ul">
          <li class="nav__ul-li"><nuxt-link to="/works">WORKS</nuxt-link></li>
          <li class="nav__ul-li"><nuxt-link to="/about">ABOUT</nuxt-link></li>
          <div class="hover">
          <li class="nav__ul-li hover" @mouseover="isHoverFlag = true" @mouseleave="isHoverFlag = false"> 
            <nuxt-link to="/service">SERVICE</nuxt-link>


            <!-- hover-menu v-if="isHoverFlag" -->
            <div class="hover-menu" v-if="isHoverFlag">
              <nuxt-link to="/webdesign" class="item item_one" @mouseover.native="isOne = true" @mouseleave.native="isOne = false">ホームページ制作</nuxt-link>
              <nuxt-link to="/coding" class="item item_two" @mouseover.native="isTwo = true" @mouseleave.native="isTwo = false">コーディング、CMS構築</nuxt-link>
              <nuxt-link to="/mentor" class="item item_three" @mouseover.native="isThree = true" @mouseleave.native="isThree = false">メンター</nuxt-link>
              
              <div class="img-box img-box_default"></div>
              <transition name="fade">
                <div class="img-box img-box_one" v-if="isOne"></div>
              </transition>
              <transition name="fade">
                <div class="img-box img-box_two" v-if="isTwo"></div>
              </transition>
              <transition name="fade">
                <div class="img-box img-box_three" v-if="isThree"></div>
              </transition>
            </div>
            <!-- /hover-menu -->
          </li>
          </div>
          <li class="nav__ul-li nav__ul-li--green">
            <nuxt-link to="/contact">CONTACT</nuxt-link>
          </li>
        </ul>
      </nav>

      <!-- SP -->
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
            <nuxt-link to="/service" v-on:click.native="flag = false"
              ><span>04 ― </span>SERVICE</nuxt-link
            >
            <nuxt-link
              to="/webdesign"
              v-on:click.native="flag = false"
              class="mini"
              >― ホームページ制作</nuxt-link
            >
            <nuxt-link
              to="/coding"
              v-on:click.native="flag = false"
              class="mini"
              >― コーディング代行</nuxt-link
            >
            <nuxt-link
              to="/mentor"
              v-on:click.native="flag = false"
              class="mini"
              >― メンター</nuxt-link
            >
          </li>
          <li class="sp-ul__li" :class="{ fadein: flag }">
            <nuxt-link to="/contact" v-on:click.native="flag = false"
              ><span>05 ― </span>CONTACT</nuxt-link
            >
          </li>
        </ul>
        <div class="sns">
          <a
            href="https://twitter.com/Create_toom"
            target="_blank"
            rel="noopener noreferrer"
            class="icon"
            ><img src="@/assets/img/Twitter.png"
          alt="Twitter"/></a>
          <a
            href="https://www.instagram.com/quality.web_studio/"
            target="_blank"
            rel="noopener noreferrer"
            class="icon"
            ><img src="@/assets/img/Instagram.png"
          alt="Instagram"/></a>
        </div>
        <div class="etc">
          <li>__ address<br />Gunma.Takasaki</li>
          <li>__ name<br />Quality Web Studio</li>
          <li>__ project<br />Web Design / Coding / Mentor</li>
          <li>__ url<br />https://quality-web.jp</li>
        </div>
      </nav>
      <!-- /SP -->
    </header>
  </div>
</template>

<script>
export default {

  data() {
    return {
      isHoverFlag: false,
      isOne:false,
      isTwo:false,
      isThree:false,
      flag: false,
      button: false,
    };
  },
};
</script>

<style lang="scss">
.filter-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(53, 53, 53,0.3);
  z-index: 10;
  @include sp {
    display: none;
  }
}
.fade-enter-active {
  transition: all .3s ease;
}
.fade-leave-active {
  transition: all .3s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
.header {

  width: 1600px;
  max-width: 100%;
  padding: 21px 45px;
  position: fixed;
  top: 2.3rem;
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
    width: 10.5rem;
    position: relative;
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
      padding: 2rem 2rem;
      &--green {
        color: rgb(42, 153, 99);
      }
      a {
      &:hover {
        color: rgb(16, 65, 41);
      }
      }
    }
  }
  .hover {
      position: relative;
  }
}

.hover-menu {

  width: 84vw;
  height: 30rem;
  position: absolute;
  left: -70vw;
  bottom: -30rem;
  background-color: #fff;
  border: 1px #9c9c9c solid;
  transition: 1s;
  @include sp {
    display: none;
  }
  .item {
    display: block;
    width: 30%;
    max-width: 100%;
    height: 7rem;
    margin:2rem 0 2rem 5rem;
    padding: 2.5rem 0;
    text-align: center;
    border: 1px #9c9c9c solid;
    transition: .3s;

    &:hover {
      color: #fff;
      background-color:#2a9963;
      transition: .3s;
    }
  }
  .img-box {
    position: absolute;
    top: 50%;
    right: 7rem;
    transform: translateY(-50%);
    width: 47%;
    max-width: 100%;
    height: 26rem;
    &_default {
      background-image: url(@/assets/img/web06.png);
      background-size: 70rem;
      background-position: center;
    }
    &_one {
      background-image: url(@/assets/img/web05.png);
      background-size: 70rem;
      background-position: center;
    }
    &_two {
      background-image: url(@/assets/img/web10.png);
      background-size: 75rem;
      background-position: center;
    }
    &_three {
      background-image: url(@/assets/img/web13.png);
      background-size: 75rem;
      background-position: center;
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
  top: -3px;
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
      top: 9px;
    }
    &:nth-child(2) {
      top: 17px;
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
    animation: show 0.2s linear 0s;
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
      color: #9d9d9d;
    }
  }
}

@keyframes show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* ナビ開いてる時のボタン */
#menu-open.active span:nth-child(1) {
  top: 13px;
  left: 6px;
  background: #555;
  transform: rotate(-25deg);
}

#menu-open.active span:nth-child(2),
#menu-open.active span:nth-child(3) {
  top: 13px;
  background: #555;
  transform: rotate(25deg);
}
</style>