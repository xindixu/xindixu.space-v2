<template>
  <div>
    <div class="swiper-container">
      <swiper ref="swiper" :options="swiperOptionV">
        <swiper-slide v-if="!$isMobile">
          <div class="bg-img swiper-lazy" data-background="img/bg/bg20.jpg">
            <div class="row">
              <div class="svg-wrapper">
                <Xu></Xu>
                <Xu0></Xu0>
              </div>
              <div class="svg-wrapper">
                <Xin></Xin>
                <Xin0></Xin0>
              </div>
              <div class="svg-wrapper">
                <Di></Di>
                <Di0></Di0>
              </div>
              <div style="margin-top: 130px">
                <span @click="pronounce">
                  <SquareLink>pronounce</SquareLink>
                </span>
              </div>
              <audio src="audio/name.mp3" id="audio"></audio>
            </div>
            <div class="row mt-5">
              <div class="col-lg-6">
                <p>
                  My name consists of 3 Chinese characters, family name,
                  <span class="chinese">徐</span> and given name,
                  <span class="chinese">欣笛</span>.
                  <span class="chinese">欣</span> means happiness.
                  <span class="chinese">笛</span> means bamboo flutes, whose
                  music often triggers a peaceful joy among the listeners.
                </p>
                <div class="col-lg-6">
                  <img
                    id="map"
                    src="img/about/avatar.png"
                    alt="avatar for Xindi Xu"
                  />
                  <a
                    href="https://www.cs.utexas.edu/users/xx2673/resume/build/index.html"
                    >View my resume</a
                  >
                </div>
              </div>
            </div>

            <div class="row" id="rowBelow">
              <div class="col-lg-5 col-md-10 offset-lg-6 content-container">
                <div id="map-container" class="mx-4">
                  <img id="map" src="img/about/map.png" />
                  <Pin class="label pinFZ"></Pin>
                  <Pin class="label pinAUS"></Pin>
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
                    I was born in Fuzhou, China and spent my first 18 years
                    there. I moved to the US for college. <br />Now, I am a
                    senior studying Advertising and Computer Science at the
                    University of Texas at Austin.
                  </p>
                </div>
              </div>
              <div class="col-lg-1 col-md-2">
                <div class="vertical chinese">
                  <p>
                    我生长于中国福州。三年前我来到了美国奥斯汀开启了我的大学生活。
                    <br />现在我大四，就读于德州大学奥斯汀分校，学习广告和计算机科学。
                  </p>
                </div>
              </div>
            </div>
            <scroll-down color="#000000" :scrollTo="5000"></scroll-down>
          </div>
        </swiper-slide>
        <swiper-slide v-else>
          <div class="bg-img swiper-lazy" data-background="img/bg/bg20.jpg">
            <div class="swiper-lazy-preloader"></div>
            <div class="row">
              <div class="svg-wrapper">
                <Xu></Xu>
                <Xu0></Xu0>
              </div>
              <div class="svg-wrapper">
                <Xin></Xin>
                <Xin0></Xin0>
              </div>
              <div class="svg-wrapper">
                <Di></Di>
                <Di0></Di0>
              </div>
            </div>
            <div id="link" class="text-right">
              <span @click="pronounce">
                <SquareLink>pronounce</SquareLink>
              </span>
            </div>
            <audio src="audio/name.mp3" id="audio"></audio>

            <div class="row mt-5">
              <div class="col-md-6 col-lg-5">
                <p>
                  My name consists of 3 Chinese characters, family name,
                  <span class="chinese">徐</span> and given name,
                  <span class="chinese">欣笛</span>.
                  <span class="chinese">欣</span> means happiness.
                  <span class="chinese">笛</span> means bamboo flutes, whose
                  music often triggers a peaceful joy among the listeners.
                </p>
              </div>
            </div>

            <scroll-down color="#000000" :scrollTo="5000"></scroll-down>
          </div>
        </swiper-slide>
        <swiper-slide v-if="$isMobile">
          <div class="bg-img swiper-lazy" data-background="img/bg/bg22.jpg">
            <div class="swiper-lazy-preloader"></div>

            <div id="map-container">
              <img id="map" src="img/about/map.png" />
              <Pin class="label pinFZ"></Pin>
              <Pin class="label pinAUS"></Pin>
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
            <div v-if="!$userReadChinese">
              <p>
                I was born in Fuzhou, China and spent my first 18 years there. I
                moved to the US for college.
              </p>
              <p>
                Now, I am a senior studying Advertising and Computer Science at
                the University of Texas at Austin.
              </p>
            </div>

            <div v-else>
              <div class="chinese">
                <p>
                  我生长于中国福州。三年前我来到了美国奥斯汀开启了我的大学生活。
                </p>
                <p>
                  现在我大四，就读于德州大学奥斯汀分校，学习广告和计算机科学。
                </p>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide v-for="obj in slideObjects" :key="obj.enTitle">
          <div
            class="bg-img swiper-lazy"
            :data-background="'img/bg/' + obj.background + '.jpg'"
          >
            <DoingSlide :obj="obj"></DoingSlide>
          </div>
        </swiper-slide>

        <swiper-slide style="background-color: white">
          <transition
            enter-active-class="animated bounceIn"
            leave-active-class="animated fadeOut fastest"
            mode="out-in"
          >
            <div
              class="full-screen"
              v-if="wordShow"
              style="background-color=white;"
            >
              <div v-if="$isMobile" class="screen-center text-center">
                <h4 v-if="$userReadChinese" class="chinese">我擅长于…</h4>
                <h4 v-else>I'm Skilled At ...</h4>
              </div>
              <div v-else class="screen-center text-center">
                <h2 class="chinese">我擅长于…</h2>
                <h2>I'm Skilled At ...</h2>
              </div>
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
            >
            </vue-word-cloud>
          </transition>
          <div v-observe-visibility="visibilityChangedS4"></div>
        </swiper-slide>
        <swiper-slide>
          <div class="full-screen" style="background-color: #E2B4BD">
            <div class="screen-center text-center">
              <div v-if="$isMobile">
                <h4 v-if="$userReadChinese" class="chinese">人生轨迹 ...</h4>
                <h4 v-else>My Life So Far ...</h4>
              </div>
              <div v-else>
                <h2 class="chinese">人生轨迹 ...</h2>
                <h2>My Life So Far ...</h2>
              </div>
              <n-button
                onclick="window.open('html/life-story.html','_blank');"
                type="warning"
                round
                >Click to Launch</n-button
              >
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { SquareLink, SquareTexts, Button, ScrollDown } from '@/components';
import { Xu0, Xu, Xin0, Xin, Di0, Di, Pin } from '../assets/svg';
import VueWordCloud from 'vuewordcloud';
import DoingSlide from '../layout/DoingSlide.vue';
import { Tooltip } from 'element-ui';
import { VueStars } from 'vue-stars';

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
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true,
        },
        mousewheel: {
          forceToAxis: true,
          invert: true,
        },
        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
        lazy: {
          loadPrevNext: true,
        },
        preloadImages: false,
        a11y: true,
      },
      slideObjects: [
        {
          enTitle: 'Learning...',
          zhTitle: '学习中...',
          enPara:
            'I major in advertising and I am part of TexasMedia. I just finished my certificate for Computer Science and I will keep explore more. I want to be a web developer after graduation so I am dedicated to learn lots of modern web technologies online.',
          zhPara:
            '我主修广告，是TexasMedia的一员。我刚刚拿到了我的计算机科学的证书，我也会继续深入学习。我毕业后想做个网页开发工程师，所以全身心地学习各种现代网页开发技术。',
          background: 'bg31',
          enTop: true,
        },
        {
          enTitle: 'Working...',
          zhTitle: '工作中...',
          enPara:
            'I am currently interning at Pingboard as a front-end software engineer. My work includes implementing features to improve our app that built with JS, React, and Ruby on Rails. We consistently deliver functions that are accessible, compatible, and responsive.',
          zhPara:
            '我现在在Pingboard实习，是软件开发工程师。我的工作包括设计，开发，维护软件，主要用JavaScript, React和Ruby on Rails。我们致力于开发无障碍，强兼容，多端使用可能的产品。',
          background: 'bg33',
          enTop: false,
        },
        {
          enTitle: 'Enjoying...',
          zhTitle: '玩耍中...',
          enPara:
            'I love my super needy kitty, Dr. Casper Meowspy. I love to exercise, weight training, Tae Kwon Do, swimming, anything without "balls". During my vacations, I love to travel around and explore new places.',
          zhPara:
            '我爱我的猫猫，Dr. Casper Meowspy。我常锻炼身体，健身房，跆拳道，游泳，任何和“球”无关的运动。在放假时，我喜欢出游，探索各种地方。',
          background: 'bg19',
          enTop: true,
        },
      ],
      words: [
        ['Angular', 20],
        ['Vue.js', 30],
        ['React', 40],
        ['JavaScript', 30],
        ['TypeScript', 10],
        ['Express.js', 20],
        ['Firebase', 20],
        ['Node.js', 20],
        ['Python3', 20],
        ['Django', 20],
        ['Flask', 20],
        ['Processing', 20],
        ['Swift', 20],
        ['MongoDB', 15],
        ['SQL', 15],
        ['Phaser', 10],
        ['Bootstrap', 10],
        ['Material', 10],
        ['Java', 10],
        ['Illustrator', 10],
        ['Photoshop', 10],
        ['Premiere', 10],
        ['Sketch', 10],
        ['AfterEffects', 10],
        ['Maya', 10],
        ['CMS', 10],
        ['Google Analytics', 15],
        ['Tableau', 10],
        ['Adwords', 5],
      ],
      wordShow: false,
      cloudShow: false,
      eleToScrollTo: '',
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
    getSkillLevel(skill) {
      return this.words[skill];
    },
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
    [Tooltip.name]: Tooltip,
    swiper,
    swiperSlide,
    ScrollDown,
    DoingSlide,
  },
  head: {
    title: {
      inner: 'About',
    },
  },
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
}

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

// all phone
@media only screen and (min-device-width: 320px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
  p {
    font-size: 1rem;
  }
  #link {
    margin-top: 100px;
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
      top: 16%;
      left: 32%;
    }
    .pinAUS {
      top: 15%;
      left: 68%;
    }
  }

  #text-container {
    position: relative;
    height: 80px;
    margin: -10px 0 30px 0;

    #tagFZ {
      position: absolute;
      left: 10%;
    }

    #tagAUS {
      position: absolute;
      right: 10%;
    }
  }

  .screen-center h2 {
    font-size: 1.5em;
  }
}

// iphone 6 / 6S / 7 / 8
@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
  #text-container {
    margin: -10px 0 50px 0;
  }
}

// iphone 6 / 7 / 8 +
@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {
  #text-container {
    margin: 10px 0 90px 0;
  }
}

// iphone X
@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-device-pixel-ratio: 3) {
  p {
    font-size: 1.2em;
  }
  #text-container {
    margin: 20px 0 80px 0;
  }
}

// Laptop M
@media only screen and (min-width: 1024px) and (max-width: 1439px) and (-webkit-device-pixel-ratio: 1) {
  p {
    font-size: 1em;
  }
  #rowBelow {
    margin-top: -20vh;

    .vertical {
      margin-left: 10px;
    }

    .content-container {
      #map-container {
        #map {
          width: 95%;
          height: 95%;
        }

        .label {
          position: absolute;
        }
        .pinFZ {
          top: 9%;
          left: 33.5%;
        }
        .pinAUS {
          top: 9.5%;
          left: 66.5%;
        }
      }
      #text-container {
        position: relative;
        margin-top: -80px;
        height: 150px;

        #tagFZ {
          position: absolute;
          left: 20%;
        }

        #tagAUS {
          position: absolute;
          left: 60%;
        }
      }
    }
  }
}

// Laptop L
@media only screen and (min-width: 1440px) and (max-width: 1960px) and (-webkit-device-pixel-ratio: 1) {
  p {
    font-size: 1.4em;
  }

  #rowBelow {
    margin-top: 0;
  }
}

// Retina
@media only screen and (min-width: 760px) and (max-width: 1960px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
  #rowBelow {
    margin-top: 0;
  }
}
</style>
