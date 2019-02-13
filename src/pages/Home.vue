<template>
  <div>
    <div class="swiper-container">
      <swiper id="v" :options="swiperOptionV">
        <swiper-slide
          id="slide1"
          style="background-image:url('img/home/2.jpg')"
        >
          <!--
            <div id="photo" style="background-image: url('img/home/photo.jpg');">
              <svg id="mask" width="150" viewbox="0 0 100 100">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop
                      offset="0%"
                      style="stop-color:rgb(255,255,255);stop-opacity:0"
                    />
                    <stop
                      offset="100%"
                      style="stop-color:rgb(255,255,255);stop-opacity:1"
                    />
                  </linearGradient>
                </defs>
                <rect width="150" height="1000" style="fill:url(#grad1)"></rect>
              </svg>
              <CurveText id="greeting">{{ greeting }}</CurveText>
            </div>
          -->
          <b-col lg="5" offset-lg="7" md="6" offset-md="6">
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
          </b-col>
        </swiper-slide>
        <swiper-slide
          id="slide2"
          class="slideHelp"
          style="background-image: url('img/bg/bg12.jpg');"
        >
          <b-row>
            <b-col lg="6" md="8">
              <h1>Web Development</h1>
              <div><img class="introPic" src="img/home/web.svg" alt="" /></div>
              <h4 class="english">
                Establishing web presence contributes a lot to the success of
                your business.
              </h4>
              <h4 class="english">
                Why not build a stunning website together?
              </h4>
            </b-col>

            <b-col offset-lg="4" offset-md="2" lg="2" md="2">
              <div class="zhIntro vertical">
                <h1 class="chineseTitle">网页开发</h1>
                <h4 class="chinese indentV">在网络上刷存在感很重要</h4>
                <h4 class="chinese indentV">不如让我来帮你？</h4>
              </div>
            </b-col>
          </b-row>

          <b-row>
            <b-col class="project" offset-lg="6" offset-md="2" lg="4" md="6">
              <div>
                <img class="projectPic" src="img/home/code.svg" alt="" />
              </div>
              <b-row class="substitle">
                <b-col cols="1">
                  <h4>These</h4>
                  <h4 class="chinese">这</h4>
                </b-col>
                <b-col cols="2"
                  ><IncreaseNum start="0" end="10"></IncreaseNum
                ></b-col>
                <b-col cols="9">
                  <h4>projects can prove my ability</h4>
                  <h4 class="chinese">个项目可以证明我</h4>
                </b-col>
                <div class="link">
                  <SquareLink link="work">take a look</SquareLink>
                </div>
              </b-row>
            </b-col>
          </b-row>
        </swiper-slide>
        <swiper-slide
          class="slideHelp"
          style="background-image: url('img/bg/bg10.jpg');"
        >
          <b-row>
            <b-col lg="6" md="8">
              <h1>Advertising Strategy</h1>
              <div>
                <img class="introPic" src="img/home/analysis.svg" alt="" />
              </div>
              <h4 class="english">
                Research is the cornerstone of an effective advertising
                strategy.
              </h4>
              <h4 class="english">
                Let me help you to translate the facts and numbers to actionable
                business decisions that make an impact.
              </h4>
            </b-col>

            <b-col offset-lg="4" offset-md="2" lg="2" md="2">
              <div class="zhIntro vertical">
                <h1 class="chineseTitle">广告策划</h1>
                <h4 class="chinese indentV">从市场调研中披沙沥金</h4>
                <h4 class="chinese indentV">规划出有效的广告策略</h4>
              </div>
            </b-col>
          </b-row>

          <b-row>
            <b-col class="project" offset-lg="6" offset-md="2" lg="4" md="6">
              <div>
                <img class="projectPic" src="img/home/project.svg" alt="" />
              </div>
              <b-row class="substitle">
                <b-col cols="1">
                  <h4>These</h4>
                  <h4 class="chinese">这</h4>
                </b-col>
                <b-col cols="2">
                  <IncreaseNum start="0" end="10"></IncreaseNum>
                </b-col>
                <b-col cols="9">
                  <h4>projects can prove my ability</h4>
                  <h4 class="chinese">个项目可以证明我</h4>
                </b-col>
                <div class="link">
                  <SquareLink link="work">take a look</SquareLink>
                </div>
              </b-row>
            </b-col>
          </b-row>
        </swiper-slide>
        <swiper-slide
          class="slideHelp"
          style="background-image: url('img/bg/bg25.jpg');"
        >
          <b-row>
            <b-col lg="6" md="8">
              <h1>Visual Design</h1>
              <div>
                <img class="introPic" src="img/home/visual.svg" alt="" />
              </div>
              <h4 class="english">
                Got an amazing idea, but don't know how to execute?
              </h4>
              <h4 class="english">
                No worries. I can help you get your idea across with compelling
                visuals.
              </h4>
            </b-col>

            <b-col offset-lg="4" offset-md="2" lg="2" md="2">
              <div class="zhIntro vertical">
                <h1 class="chineseTitle">视觉设计</h1>
                <h4 class="chinese indentV">有想法却不知如何表达？</h4>
                <h4 class="chinese indentV">让我帮你以最有趣的形式传达它</h4>
              </div>
            </b-col>
          </b-row>

          <b-row>
            <b-col class="project" offset-lg="6" offset-md="2" lg="4" md="6">
              <div>
                <img class="projectPic" src="img/home/graphic.svg" alt="" />
              </div>
              <b-row class="substitle">
                <b-col cols="1">
                  <h4>These</h4>
                  <h4 class="chinese">这</h4>
                </b-col>
                <b-col cols="2">
                  <IncreaseNum start="0" end="15"></IncreaseNum>
                </b-col>
                <b-col cols="9">
                  <h4>projects can prove my ability</h4>
                  <h4 class="chinese">个项目可以证明我</h4>
                </b-col>
                <div class="link">
                  <SquareLink link="work">take a look</SquareLink>
                </div>
              </b-row>
            </b-col>
          </b-row>
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
import { SquareLink, IncreaseNum, CurveText } from '../components';

export default {
  name: '',
  data() {
    return {
      swiperOptionV: {
        direction: 'vertical',
        speed: 500,
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
    CurveText
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
      left: 25%;
      letter-spacing: 4px;
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

/*
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/

@media (min-width: 1281px) {
  //CSS
}

/*
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/

@media (min-width: 1025px) and (max-width: 1280px) {
  //CSS
}

/*
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) {
  //CSS
}

/*
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  //CSS
}

/*
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

@media (min-width: 481px) and (max-width: 767px) {
}

/*
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {
  //CSS
}
</style>
