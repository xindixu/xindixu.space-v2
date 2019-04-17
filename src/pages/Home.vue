<template>
  <div>
    <div v-cloak class="swiper-container">
      <swiper id="v" :options="swiperOptionV" ref="homeSwiper">
        <swiper-slide id="slide1">
          <div class="bg-img" style="background-image:url(img/home/2.jpg)">
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
              <div v-if="$userReadChinese">
                <div class="zhIntro vertical">
                  <h1 class="chineseTitle">徐欣笛</h1>
                  <div class="chinese indentV">
                    <h4>网页开发工程师</h4>
                    <h4>疯狂广告人</h4>
                    <h4>终身学习家</h4>
                  </div>
                </div>
              </div>
              <div v-else>
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

        <swiper-slide v-for="obj in slideObjects" :key="obj.link">
          <div
            class="bg-img swiper-lazy"
            :data-background="'img/bg/' + obj.background + '.jpg'"
          >
            <div class="swiper-lazy-preloader"></div>
            <HelpSlide :obj="obj"></HelpSlide>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
import { ScrollDown } from '@/components';
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import HelpSlide from '../layout/HelpSlide.vue';

export default {
  name: 'Home',
  data() {
    return {
      loading: true,
      swiperOptionV: {
        direction: 'vertical',
        speed: 600,
        pagination: {
          el: '.swiper-pagination',
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
      },
      slideObjects: [
        {
          enTitle: 'Web Development',
          zhTitle: '网页开发',
          enSubTitle1:
            'Establishing web presence contributes a lot to the success of your business.',
          enSubTitle2: 'Why not build a stunning website together?',
          zhSubTitle1: '在网络上刷存在感很重要',
          zhSubTitle2: '不如让我来帮你？',
          numOfProjects: 15,
          link: 'development',
          introPic: 'web',
          projectPic: 'code',
          background: 'bg12'
        },
        {
          enTitle: 'Strategic Marketing',
          zhTitle: '营销企划',
          enSubTitle1:
            'Research is the cornerstone of any effective marketing strategy.',
          enSubTitle2:
            'Let me help you to translate the facts and numbers to actionable business decisions that make an impact.',
          zhSubTitle1: '从市场调研中披沙沥金',
          zhSubTitle2: '规划出有效的广告策略',
          numOfProjects: 10,
          link: 'marketing',
          introPic: 'analysis',
          projectPic: 'project',
          background: 'bg10'
        },
        {
          enTitle: 'Creative Execution',
          zhTitle: '创意设计',
          enSubTitle1:
            " Got an amazing idea, but don't know how to execute it?",
          enSubTitle2:
            'No worries. I can help you get your idea across with compelling visuals.',
          zhSubTitle1: '有想法却不知如何执行？',
          zhSubTitle2: '让我帮你传达吧',
          numOfProjects: 25,
          link: 'creative',
          introPic: 'visual',
          projectPic: 'graphic',
          background: 'bg25'
        }
      ]
    };
  },
  components: {
    swiper,
    swiperSlide,
    ScrollDown,
    HelpSlide
  }
};
</script>
<style lang="scss" scoped>
.swiper-container {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;

  .swiper-lazy-preloader {
    display: none;
  }

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

  .swiper-pagination-bullet-active {
    background: #e2b4bd;
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

/* ----------- Non-Retina Screens ----------- */
@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
}

/* ----------- Retina Screens ----------- */
@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
}

// all iphones
@media only screen and (min-device-width: 320px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
  #slide1 {
    .bg-img {
      background-position: bottom left;
    }

    .zhIntro {
      h1 {
        font-size: 2.5em;
        line-height: 0.8em;
        margin-bottom: 10px;
      }

      height: 80vh;
      position: absolute;
      top: 12vh;
      right: 5vw;

      .indentV {
        margin-top: 10vh;
        h4 {
          font-size: 1.15em;
          line-height: 0.8em;
        }
      }
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
}

// iphone 5 / 5S / SE
@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) {
}

// iphone 6 / 6S / 7 / 8
@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
  #slide1 {
    .zhIntro {
      h1 {
        font-size: 3em;
        line-height: 0.8em;
        margin-bottom: 10px;
      }

      .indentV {
        margin-top: 12vh;
        h4 {
          font-size: 1.5em;
          line-height: 1em;
        }
      }
    }

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
}

// iphone 6 / 7 / 8 +
@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {
  #slide1 {
    .zhIntro {
      h1 {
        font-size: 3em;
        line-height: 0.8em;
        margin-bottom: 10px;
      }

      .indentV {
        margin-top: 12vh;
        h4 {
          font-size: 1.5em;
          margin-bottom: 10px;
          line-height: 1.3em;
        }
      }
    }

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
}

// iphone X
@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-device-pixel-ratio: 3) {
  #slide1 {
    .zhIntro {
      h1 {
        font-size: 3.2em;
      }

      .indentV {
        h4 {
          font-size: 1.6em;
        }
      }
    }
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
}
</style>
