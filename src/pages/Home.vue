<template>
  <div>
    <div class="swiper-container">
      <swiper id="v" :options="swiperOptionV">
        <swiper-slide
          id="slide1"
          style="background-image:url('img/home/2.jpg')"
        >
          <div class="col-lg-5 offset-lg-7 col-md-6 offset-md-6">
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
          <scroll-down> </scroll-down>
        </swiper-slide>
        <swiper-slide
          id="slide2"
          class="slideHelp"
          style="background-image: url('img/bg/bg12.jpg');"
        >
          <div class="row">
            <div class="col-lg-6 col-md-8">
              <h1>Web Development</h1>
              <div><img class="introPic" src="img/home/web.svg" alt="" /></div>
              <h4 class="english">
                Establishing web presence contributes a lot to the success of
                your business.
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
                  <SquareLink link="work#development">take a look</SquareLink>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide
          class="slideHelp"
          style="background-image: url('img/bg/bg10.jpg');"
        >
          <div class="row">
            <div class="col-lg-6 col-md-8">
              <h1>Strategic Marketing</h1>
              <div>
                <img class="introPic" src="img/home/analysis.svg" alt="" />
              </div>
              <h4 class="english">
                Research is the cornerstone of an effective marketing strategy.
              </h4>
              <h4 class="english">
                Let me help you to translate the facts and numbers to actionable
                business decisions that make an impact.
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
        </swiper-slide>
        <swiper-slide
          class="slideHelp"
          style="background-image: url('img/bg/bg25.jpg');"
        >
          <div class="row">
            <div class="col" lg="6" md="8">
              <h1>Creative Execution</h1>
              <div>
                <img class="introPic" src="img/home/visual.svg" alt="" />
              </div>
              <h4 class="english">
                Got an amazing idea, but don't know how to execute it?
              </h4>
              <h4 class="english">
                No worries. I can help you get your idea across with compelling
                visuals.
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
  name: '',
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
        }
      }
    };
  },
  computed: {
    greeting() {
      let time = new Date().getHours();
      let greeting = 'Hey There!';
      switch (true) {
        case time < 5:
          greeting = 'Good Night';
          break;
        case time < 12:
          greeting = 'Good Morning';
          break;
        case time < 17:
          greeting = 'Good Afternoon';
          break;
        case time < 20:
          greeting = 'Good Evening';
          break;
        case time < 24:
          greeting = 'Good Night';
          break;
      }
      return greeting;
    }
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

  .swiper-slide {
    background-position: center center;
    background-size: cover;
    background-color: white;
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

  #photo {
    background-position: center center;
    background-size: cover;
    position: absolute;
    top: 0%;
    left: 0%;
    height: 100vh;
    width: 100vh;

    #mask {
      position: absolute;
      right: 0px;
      top: 0px;
      height: 100%;
    }

    #greeting {
      position: absolute;
      top: -40px;
      /*   left: 15%; */
      letter-spacing: 4px;

      @media screen and (max-width: 768px) {
        left: 10%;
      }
      @media screen and (min-width: 769px) {
        left: 20%;
      }
    }

    #headline {
      background-position: center center;
      background-size: cover;
    }
  }

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
  .placeholder {
    height: 200px;
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
</style>
