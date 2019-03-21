<template>
  <div>
    <div class="swiper-container">
      <swiper ref="swiper" :options="swiperOptionV">
        <swiper-slide style="background-image: url('img/bg/bg29.jpg');">
          <b-row>
            <div class="svg-wrapper"><Xu></Xu><Xu0></Xu0></div>
            <div class="svg-wrapper"><Xin></Xin><Xin0></Xin0></div>
            <div class="svg-wrapper"><Di></Di><Di0></Di0></div>
            <div style="margin-top:130px">
              <span @click="pronounce">
                <SquareLink>pronounce</SquareLink>
              </span>
            </div>
            <audio src="audio/name.mp3" id="audio"></audio>
          </b-row>
          <b-row class="mt-5">
            <b-col md="6" lg="5">
              <p>
                My name consists of 3 Chinese characters, family name,
                <span class="chinese">徐</span> and given name,
                <span class="chinese">欣笛</span>.
                <span class="chinese">欣</span> means happiness.
                <span class="chinese">笛</span> means bamboo flutes, whose music
                often triggers a peaceful joy among the listeners.
              </p>
            </b-col>
          </b-row>

          <b-row style="margin-top:10em">
            <b-col lg="6" offset-lg="5" md="10">
              <div id="map-container" class="mx-4">
                <img id="map" src="img/about/map.png" />
                <Pin class="label pinFZ"></Pin>
                <Pin class="label pinAUS"></Pin>
                <!-- <Route class="label route"></Route> -->
              </div>
              <div id="text-container">
                <SquareTexts
                  id="tagFZ"
                  num1="0324"
                  num2="1998"
                  en="Fuzhou, China"
                  zh="中国福州"
                ></SquareTexts>
                <SquareTexts
                  id="tagAUS"
                  num1="0809"
                  num2="2016"
                  en="Austin, U.S.A."
                  zh="美国奥斯汀"
                ></SquareTexts>
              </div>
              <div>
                <p>
                  I was born in Fuzhou, China and spent my first 18 years there.
                  I moved to the US for college. <br />
                  Now, I am a senior studying Advertising and Computer Science
                  at the University of Texas at Austin.
                </p>
              </div>
            </b-col>
            <b-col lg="1" md="2">
              <div class="vertical chinese">
                <p>
                  我生长于中国福州。三年前我来到了美国奥斯汀开启了我的大学生活。<br />
                  现在我大四，就读于德州大学奥斯汀分校，学习广告和计算机科学。
                </p>
              </div>
            </b-col>
          </b-row>
          <scroll-down color="#000000"></scroll-down>
        </swiper-slide>

        <swiper-slide style="background-image: url('img/bg/bg31.jpg');">
          <b-row>
            <b-col class="half">
              <div class="white left top">
                <h1>Learning...</h1>
                <p>
                  I major in advertising and I am part of TexasMedia. I just
                  finished my certificate for Computer Science and I will keep
                  explore more.
                </p>
                <p>
                  I want to be a web developer after graduation so I am
                  dedicated to learn lots of modern web technologies online.
                </p>
              </div>
            </b-col>
            <b-col class="half chinese">
              <div class="white right bottom">
                <h1 class="chineseTitle">学习中...</h1>
                <p>
                  我主修广告，是TexasMedia的一员。我刚刚拿到了我的计算机科学的证书，我也会继续深入学习。
                </p>
                <p>
                  我毕业后想做个网页开发工程师，所以全身心地学习各种现代网页开发技术。
                </p>
              </div>
            </b-col>
          </b-row>
        </swiper-slide>

        <swiper-slide style="background-image: url('img/bg/bg33.jpg');">
          <b-row>
            <b-col class="half">
              <div class="white left bottom">
                <h1>Working...</h1>
                <p>
                  I am currently interning at Nokia as a front-end web
                  developer. My work includes designing, implementing, and
                  maintaining websites with Sketch, WordPress, HTML, JS, and
                  Python Django.
                </p>
              </div>
            </b-col>
            <b-col class="half chinese">
              <div class="white right top">
                <h1 class="chineseTitle">工作中...</h1>
                <p>
                  我现在在Nokia实习，做前端开发。我的工作包括设计，开发，维护网站，主要用Sketch，WordPress，HTML，JS，和Python
                  Django.
                </p>
              </div>
            </b-col>
          </b-row>
        </swiper-slide>
        <swiper-slide style="background-image: url('img/bg/bg19.jpg');">
          <b-row>
            <b-col class="half">
              <div class="white left top">
                <h1>Enjoying...</h1>
                <p>
                  I love my super needy kitty, Dr. Casper Meowspy. I love to
                  exercise, weight trainning, Tae Kwon Do, swimming, anything
                  without "balls". During my vocations, I love to travel around
                  and explore new places.
                </p>
              </div>
            </b-col>
            <b-col class="half chinese">
              <div class="white right bottom">
                <h1 class="chineseTitle">玩耍中...</h1>
                <p>
                  我爱我的猫猫，Dr. Casper Meowspy。
                  我乐于锻炼身体，健身房，跆拳道，游泳，任何和“球”无关的运动。在放假时，我喜欢出游，探索各种地方。
                </p>
              </div>
            </b-col>
          </b-row>
          <div v-observe-visibility="visibilityChangedS3"></div>
        </swiper-slide>
        <swiper-slide style="background-color:white">
          <transition
            enter-active-class="animated bounceIn"
            leave-active-class="animated fadeOut faster"
            mode="out-in"
          >
            <div
              class="full-screen"
              v-if="wordShow"
              style="background-color=white;"
            >
              <h2 class="screen-center">I'm skilled at ...</h2>
            </div>

            <vue-word-cloud
              class="front"
              v-if="cloudShow"
              :words="words"
              :color="
                ([, weight]) =>
                  weight > 35 ? '#9B6A6C' : weight > 25 ? '#E2B4BD' : '#7B6077'
              "
              font-family="Fredericka the Great"
              enter-animation="animated bounceIn"
              leave-animation="animated hinge"
              :font-size-ratio="5"
              :animation-overlap="0.2"
              :animation-duration="2000"
            />
          </transition>
          <div v-observe-visibility="visibilityChangedS4"></div>
        </swiper-slide>
        <swiper-slide>
          <div class="full-screen" style="background-color:#E2B4BD">
            <div class="screen-center text-center">
              <h2>My Life So Far...</h2>
              <n-button
                onclick="window.open('html/life-story.html','_blank');"
                type="warning"
                round
                >Click to Launch</n-button
              >
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
import { SquareLink, SquareTexts, Button, ScrollDown } from '@/components';
import { Xu0, Xu, Xin0, Xin, Di0, Di, Pin } from '../assets/svg';
import VueWordCloud from 'vuewordcloud';

import 'swiper/dist/css/swiper.css';

import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  data() {
    return {
      swiperOptionV: {
        direction: 'vertical',
        effect: 'slide',
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
      },
      words: [
        ['Angular', 40],
        ['Vue.js', 40],
        ['React', 40],
        ['JavaScript', 30],
        ['TypeScript', 20],
        ['Express.js', 20],
        ['Firebase', 20],
        ['Node.js', 20],
        ['Python3', 20],
        ['Django', 20],
        ['Processing', 20],
        ['Swift', 20],
        ['MongoDB', 15],
        ['SQL', 15],
        ['Phaser', 15],
        ['Bootstrap', 10],
        ['Material', 10],
        ['ElementUI', 10],
        ['Java', 10],
        ['Illustrator', 10],
        ['Photoshop', 10],
        ['Premiere', 10],
        ['Sketch', 10],
        ['AfterEffects', 10],
        ['Maya', 10],
        ['CMS', 10],
        ['Google Analytics', 5],
        ['Tableau', 8],
        ['Adwords', 5]
      ],
      wordShow: false,
      cloudShow: false
    };
  },
  methods: {
    pronounce() {
      let audio = document.getElementById('audio');
      let playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise;
      }
    },
    visibilityChangedS4(isVisible) {
      this.wordShow = isVisible;
      let v = this;
      setTimeout(() => {
        v.wordShow = !isVisible;
        v.cloudShow = isVisible;
      }, 2000);
    },
    visibilityChangedS3() {
      this.cloudShow = false;
    },
    callback() {
      console.log('change');
    }
  },
  components: {
    Xu0,
    Xu,
    Xin0,
    Xin,
    Di0,
    Di,
    Pin,
    SquareLink,
    SquareTexts,
    VueWordCloud,
    [Button.name]: Button,
    swiper,
    swiperSlide,
    ScrollDown
  },
  mounted() {
    // //do something after mounting vue instance
    // let scriptTag = document.createElement('script');
    // scriptTag.src = 'https://cdn.wordart.com/wordart.min.js';
    // document.getElementsByTagName('head')[0].appendChild(scriptTag);
  }
};
</script>

<style lang="scss" scoped>
svg {
  width: 100%;
  height: 100%;
}

.svg-wrapper {
  display: inline-block;
  width: 100px;
  height: 80px;
}

.path {
  stroke-dasharray: 500;
  stroke-dashoffset: 1000;
  animation: dash 3s linear infinite;
}

@keyframes dash {
  from {
    stroke-dashoffset: 1000;
  }

  to {
    stroke-dashoffset: 0;
  }
}

#map-container {
  #map {
    width: 95%;
    height: 95%;
  }

  .label {
    position: absolute;
  }
  .pinFZ {
    top: 20%;
    left: 35.5%;
  }
  .pinAUS {
    top: 17.5%;
    left: 68.5%;
  }
  .route {
    top: 20%;
    left: 30%;
  }
}
#text-container {
  position: relative;
  margin-top: -80px;
  height: 150px;

  #tagFZ {
    position: absolute;
    left: 30%;
  }

  #tagAUS {
    position: absolute;
    left: 65%;
  }
}

.half {
  height: 90vh;
  .white {
    color: white;
  }
}
.left {
  text-align: right;
}
.top {
  margin-top: 30vh;
}
.bottom {
  margin-top: 60vh;
}
.right {
  text-align: left;
}

.tint {
  background-color: white;
  opacity: 0.8;
}

.full-screen {
  z-index: 10;
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
}

.screen-center {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.screen-corner {
  position: absolute;
  right: 0%;
  bottom: 0%;
}
.behind {
  z-index: 0;
}
.front {
  z-index: 10;
}
</style>
