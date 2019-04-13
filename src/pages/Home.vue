<template>
  <div>
    <div class="swiper-container">
      <swiper id="v" :options="swiperOptionV">
        <swiper-slide id="slide1">
          <div class="bg-img swiper-lazy" data-background="img/home/2.jpg">
            <div class="swiper-lazy-preloader"></div>
            <!--
              <p>Mobile: {{ $isMobile }} Chinese: {{ $userReadChinese }}</p>
            -->
            <div
              v-if="!$isMobile"
              class="col-lg-5 offset-lg-7 col-md-6 offset-md-6"
            >
              <div class="zhIntro vertical">
                <h1 class="chineseTitle">徐欣笛</h1>
                <div class="chinese indentV">
                  <h4>网页开发工程师</h4>
                  <h4>疯狂广告人</h4>
                  <h4>终身学习家</h4>
                </div>
              </div>
              <div class="enIntro">
                <h1>Xindi Xu</h1>
                <div class="english indentH">
                  <h4>Dedicated Web Developer</h4>
                  <h4>Passionate Advertiser</h4>
                  <h4>Lifelong Learner</h4>
                </div>
              </div>
            </div>
            <div v-else>
              <div v-if="$userReadChinese" class="">
                <div class="zhIntro vertical">
                  <h1 class="chineseTitle">徐欣笛</h1>
                  <div class="chinese indentV">
                    <h4>网页开发工程师</h4>
                    <h4>疯狂广告人</h4>
                    <h4>终身学习家</h4>
                  </div>
                </div>
              </div>
              <div v-else style="">
                <div class="enIntro">
                  <h1>Xindi Xu</h1>
                  <div class="english indentH">
                    <h4>Dedicated Web Developer</h4>
                    <h4>Passionate Advertiser</h4>
                    <h4>Lifelong Learner</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <scroll-down> </scroll-down>
        </swiper-slide>
        <swiper-slide id="slide2" class="slideHelp">
          <div class="bg-img swiper-lazy" data-background="img/bg/bg12.jpg">
            <div class="swiper-lazy-preloader"></div>
            <div v-if="!$isMobile">
              <div class="row">
                <div class="col-lg-6 col-md-8">
                  <h1>Web Development</h1>
                  <div>
                    <img class="introPic" src="img/home/web.svg" alt="" />
                  </div>
                  <h4 class="english">
                    Establishing web presence contributes a lot to the success
                    of your business.
                  </h4>
                  <h4 class="english">
                    Why not build a stunning website together?
                  </h4>
                </div>

                <div class="offset-lg-4 offset-md-2 col-lg-2 col-md-2">
                  <div class="zhIntro vertical">
                    <h1 class="chineseTitle">网页开发</h1>
                    <h4 class="chinese indentV">在网络上刷存在感很重要</h4>
                    <h4 class="chinese indentV">不如让我来帮你？</h4>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-4 col-md-6 offset-lg-6 offset-md-2 project">
                  <div>
                    <img class="projectPic" src="img/home/code.svg" alt="" />
                  </div>
                  <div class="row substitle">
                    <div class="col-1">
                      <h4>These</h4>
                      <h4 class="chinese">这</h4>
                    </div>
                    <div class="col-2">
                      <IncreaseNum start="0" end="10"></IncreaseNum>
                    </div>
                    <div class="col-9">
                      <h4>projects can prove my ability</h4>
                      <h4 class="chinese">个项目可以证明我</h4>
                    </div>
                    <div class="link">
                      <SquareLink link="work#development"
                        >take a look</SquareLink
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else>
              <div v-if="$userReadChinese">
                <div class="row">
                  <div class="offset-lg-4 offset-md-2 col-lg-2 col-md-2">
                    <div class="zhIntro vertical">
                      <h1 class="chineseTitle">网页开发</h1>
                      <h4 class="chinese indentV">在网络上刷存在感很重要</h4>
                      <h4 class="chinese indentV">不如让我来帮你？</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div v-else>
                <h1>Web Development</h1>
                <div>
                  <img class="introPic" src="img/home/web.svg" alt="" />
                </div>
                <h4 class="english">
                  Establishing web presence contributes a lot to the success of
                  your business.
                </h4>
                <h4 class="english">
                  Why not build a stunning website together?
                </h4>

                <div class="project">
                  <div>
                    <img class="projectPic" src="img/home/code.svg" alt="" />
                  </div>
                  <div class="row substitle">
                    <div class="col-2"><h4>These</h4></div>
                    <div class="col-1">
                      <IncreaseNum start="0" end="10"></IncreaseNum>
                    </div>
                    <div class="col-auto">
                      <h4>projects can prove my ability</h4>
                    </div>
                    <div class="link">
                      <SquareLink link="work#development"
                        >take a look</SquareLink
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="slideHelp">
          <div class="bg-img swiper-lazy" data-background="img/bg/bg10.jpg">
            <div
              class="swiper-lazy-preloader swiper-lazy-preloader-white"
            ></div>
            <div class="row">
              <div class="col-lg-6 col-md-8">
                <h1>Strategic Marketing</h1>
                <div>
                  <img class="introPic" src="img/home/analysis.svg" alt="" />
                </div>
                <h4 class="english">
                  Research is the cornerstone of an effective marketing
                  strategy.
                </h4>
                <h4 class="english">
                  Let me help you to translate the facts and numbers to
                  actionable business decisions that make an impact.
                </h4>
              </div>

              <div class="offset-lg-4 offset-md-2 col-lg-2 col-md-2">
                <div class="zhIntro vertical">
                  <h1 class="chineseTitle">营销企划</h1>
                  <h4 class="chinese indentV">从市场调研中披沙沥金</h4>
                  <h4 class="chinese indentV">规划出有效的广告策略</h4>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-4 col-md-6 offset-lg-6 offset-md-2 project">
                <div>
                  <img class="projectPic" src="img/home/project.svg" alt="" />
                </div>
                <div class="row substitle">
                  <div class="col-1">
                    <h4>These</h4>
                    <h4 class="chinese">这</h4>
                  </div>
                  <div class="col-2">
                    <IncreaseNum start="0" end="10"></IncreaseNum>
                  </div>
                  <div class="col-9">
                    <h4>projects can prove my ability</h4>
                    <h4 class="chinese">个项目可以证明我</h4>
                  </div>
                  <div class="link">
                    <SquareLink link="work#marketing">take a look</SquareLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="slideHelp">
          <div class="bg-img swiper-lazy" data-background="img/bg/bg25.jpg">
            <div class="swiper-lazy-preloader"></div>

            <div class="row">
              <div class="col-lg-6 col-md-8">
                <h1>Creative Execution</h1>
                <div>
                  <img class="introPic" src="img/home/visual.svg" alt="" />
                </div>
                <h4 class="english">
                  Got an amazing idea, but don't know how to execute it?
                </h4>
                <h4 class="english">
                  No worries. I can help you get your idea across with
                  compelling visuals.
                </h4>
              </div>

              <div class="offset-lg-4 offset-md-2 col-lg-2 col-md-2">
                <div class="zhIntro vertical">
                  <h1 class="chineseTitle">创意设计</h1>
                  <h4 class="chinese indentV">有想法却不知如何表达？</h4>
                  <h4 class="chinese indentV">让我帮你以最有趣的形式传达它</h4>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-4 col-md-6 offset-lg-6 offset-md-2 project">
                <div>
                  <img class="projectPic" src="img/home/graphic.svg" alt="" />
                </div>
                <div class="row substitle">
                  <div class="col-1">
                    <h4>These</h4>
                    <h4 class="chinese">这</h4>
                  </div>
                  <div class="col-2">
                    <IncreaseNum start="0" end="15"></IncreaseNum>
                  </div>
                  <div class="col-9">
                    <h4>projects can prove my ability</h4>
                    <h4 class="chinese">个项目可以证明我</h4>
                  </div>
                  <div class="link">
                    <SquareLink link="work#creative">take a look</SquareLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <div
          class="swiper-pagination swiper-pagination-v"
          slot="pagination"
        ></div>
      </swiper>
    </div>
  </div>
</template>
<script>
import { SquareLink, IncreaseNum, ScrollDown } from '@/components';
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  name: 'Home',
  data() {
    return {
      swiperOptionV: {
        direction: 'vertical',
        speed: 600,
        pagination: {
          el: '.swiper-pagination-v',
          clickable: true,
          dynamicBullets: true
        },
        mousewheel: {
          forceToAxis: true,
          invert: true
        },
        keyboard: {
          enabled: true,
          onlyInViewport: false
        },
        lazy: {
          loadPrevNext: true
        },
        preloadImages: false
      }
    };
  },
  components: {
    SquareLink,
    IncreaseNum,
    swiper,
    swiperSlide,
    ScrollDown
  }
};
</script>
<style lang="scss">
@import '../assets/scss/now-ui-kit/variables.scss';
.swiper-container {
  height: 100vh;
  width: 100vw;

  .swiper-slide,
  .bg-img {
    background-position: center center;
    background-size: cover;
    height: 100vh;
    width: 100vw;
  }
  .bg-img {
    padding: 70px 5%;
  }

  .swiper-pagination {
    z-index: 10;
  }

  .swiper-pagination-bullet-active {
    background: $primary-color;
  }
}

#slide1 {
  color: white;
  .zhIntro {
    height: 500px;
    position: absolute;
    top: auto;
    right: auto;

    .chineseTitle {
      letter-spacing: 15px;
    }

    .chinese {
      letter-spacing: 15px;
    }
  }

  .enIntro {
    position: absolute;
    left: 10px;
    top: 60vh;
    letter-spacing: 1px;
  }
}

.slideHelp {
  .introPic {
    width: 500px;
  }

  .zhIntro {
    height: 580px;
    position: absolute;
    top: auto;
    right: auto;

    .chineseTitle {
      letter-spacing: 15px;
    }

    .chinese {
      letter-spacing: 15px;
    }
  }

  .project {
    margin-top: 10vh;
    .projectPic {
      width: 80px;
      opacity: 0.5;
      margin-left: -50px;
    }

    .substitle {
      margin-top: -50px;
      h4 {
        margin-top: 0px;
      }
    }
  }

  .link {
    margin-left: 280px;
  }
}
// all iphones
@media only screen and (min-device-width: 320px) and (max-device-width: 896px) and (-webkit-min-device-pixel-ratio: 2) {
  #slide1 {
    .bg-img {
      background-position: bottom left;
    }

    .enIntro {
      padding: 0 10px;

      h1 {
        font-size: 2em;
        line-height: 0.8em;
        margin-bottom: 10px;
        text-align: right;
      }
      .indentH {
        h4 {
          font-size: 1.15em;
          line-height: 0.8em;
          text-align: right;
        }
        margin-left: 0px;
      }
      right: 30px;
      top: 58vh;
    }
  }

  .slideHelp {
    h1 {
      font-size: 2em;
      line-height: 0.8em;
      margin-bottom: 10px;
    }
    h4 {
      font-size: 1.15em;
      line-height: 1.5em;
    }

    .introPic {
      margin-top: 20px;
      width: 500px;
    }

    .zhIntro {
      height: 580px;
      position: absolute;
      top: auto;
      right: auto;

      .chineseTitle {
        letter-spacing: 15px;
      }

      .chinese {
        letter-spacing: 15px;
      }
    }

    .project {
      margin-top: 0px;

      h4 {
        font-size: 1.1em;
        line-height: 1.5em;
      }
      .projectPic {
        width: 40px;
        margin-left: 75vw;
      }

      .increase-num h2 {
        font-size: 1.2em;
        line-height: 1.5em;
        margin: 0px;
      }

      .substitle {
        margin-top: -20px;
        h4 {
          margin-top: 0px;
        }
      }
    }

    .link {
      margin-left: 50vw;
      margin-top: -10px;
    }
  }
}

// iphone 5 / 5S / SE
@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) {
}

// iphone 6 / 6S / 7 / 8
@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
  #slide1 {
    .enIntro {
      h1 {
        font-size: 2.5em;
        line-height: 1em;
      }
      .indentH {
        h4 {
          font-size: 1.3em;
          line-height: 1em;
        }
      }
      right: 40px;
      top: 58vh;
    }
  }

  .slideHelp {
    h1 {
      font-size: 2.5em;
    }
    h4 {
      font-size: 1.3em;
      line-height: 1.7em;
    }

    .zhIntro {
      height: 580px;
      position: absolute;
      top: auto;
      right: auto;

      .chineseTitle {
        letter-spacing: 15px;
      }

      .chinese {
        letter-spacing: 15px;
      }
    }

    .project {
      margin-top: 20px;

      h4 {
        font-size: 1.2em;
        line-height: 1.5em;
      }
      .projectPic {
        width: 50px;
        margin-left: 75vw;
      }

      .increase-num h2 {
        font-size: 1.4em;
        margin-left: -8px;
      }

      .substitle {
        margin-top: -20px;
        margin-left: 15px;
      }
      .link {
        margin-left: 45vw;
      }
    }
  }
}

// iphone 6 / 7 / 8 +
@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {
  #slide1 {
    .enIntro {
      h1 {
        font-size: 3em;
        line-height: 1.4em;
      }
      .indentH {
        h4 {
          font-size: 1.4em;
          line-height: 1.2em;
        }
      }
      right: 50px;
      top: 55vh;
    }
  }

  .slideHelp {
    h1 {
      font-size: 3em;
    }
    h4 {
      font-size: 1.4em;
      line-height: 1.8em;
    }

    .zhIntro {
      height: 580px;
      position: absolute;
      top: auto;
      right: auto;

      .chineseTitle {
        letter-spacing: 15px;
      }

      .chinese {
        letter-spacing: 15px;
      }
    }

    .project {
      margin-top: 50px;

      h4 {
        font-size: 1.2em;
        line-height: 1.5em;
      }
      .projectPic {
        width: 60px;
        margin-left: 75vw;
      }

      .increase-num h2 {
        font-size: 1.4em;
        margin-left: -8px;
      }

      .substitle {
        margin-top: -20px;
        margin-left: 40px;
      }
      .link {
        margin-left: 43vw;
        margin-top: 0;
      }
    }
  }
}

// iphone X
@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-device-pixel-ratio: 3) {
  #slide1 {
    .enIntro {
      h1 {
        font-size: 3.5em;
        line-height: 1.5em;
      }
      .indentH {
        h4 {
          font-size: 1.6em;
          line-height: 1.2em;
        }
      }
      right: 50px;
      top: 55vh;
    }
  }

  .slideHelp {
    h1 {
      font-size: 3em;
    }
    h4 {
      font-size: 1.4em;
      line-height: 1.8em;
    }

    .zhIntro {
      height: 580px;
      position: absolute;
      top: auto;
      right: auto;

      .chineseTitle {
        letter-spacing: 15px;
      }

      .chinese {
        letter-spacing: 15px;
      }
    }

    .project {
      margin-top: 50px;

      h4 {
        font-size: 1.35em;
        line-height: 1.5em;
      }
      .projectPic {
        width: 60px;
        margin-left: 75vw;
      }

      .increase-num h2 {
        font-size: 1.4em;
        margin-left: 0;
      }

      .substitle {
        margin-top: -25px;
        margin-left: 5px;
      }
      .link {
        margin-left: 50vw;
        margin-top: -5px;
      }
    }
  }
}

// iphone XR
@media only screen and (min-device-width: 414px) and (max-device-height: 896px) and (-webkit-device-pixel-ratio: 2) {
}
// iphone XS
@media only screen and (min-device-width: 375px) and (max-device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
}
// iphone XS Max
@media only screen and (min-device-width: 414px) and (max-device-height: 896px) and (-webkit-device-pixel-ratio: 3) {
}
</style>
