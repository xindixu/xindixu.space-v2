<template>
  <div>
    <div class="swiper-container">
      <swiper ref="swiper" :options="swiperOptionV">
        <swiper-slide v-if="!$isMobile">
          <div class="bg-img swiper-lazy" data-background="img/bg/bg29.jpg">
            <div class="swiper-lazy-preloader"></div>
            <div class="row">
              <div class="svg-wrapper"><Xu></Xu><Xu0></Xu0></div>
              <div class="svg-wrapper"><Xin></Xin><Xin0></Xin0></div>
              <div class="svg-wrapper"><Di></Di><Di0></Di0></div>
              <div style="margin-top:130px">
                <span @click="pronounce">
                  <SquareLink>pronounce</SquareLink>
                </span>
              </div>
              <audio src="audio/name.mp3" id="audio"></audio>
            </div>
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

            <div class="row" style="margin-top:10em">
              <div class="col-lg-6 col-md-10 offset-lg-5">
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
                    there. I moved to the US for college. <br />
                    Now, I am a senior studying Advertising and Computer Science
                    at the University of Texas at Austin.
                  </p>
                </div>
              </div>
              <div class="col-lg-1 col-md-2">
                <div class="vertical chinese">
                  <p>
                    我生长于中国福州。三年前我来到了美国奥斯汀开启了我的大学生活。<br />
                    现在我大四，就读于德州大学奥斯汀分校，学习广告和计算机科学。
                  </p>
                </div>
              </div>
            </div>
            <scroll-down color="#000000" :scrollTo="5000"></scroll-down>
          </div>
        </swiper-slide>
        <swiper-slide v-else>
          <div class="bg-img swiper-lazy" data-background="img/bg/bg29.jpg">
            <div class="swiper-lazy-preloader"></div>
            <div class="row">
              <div class="svg-wrapper"><Xu></Xu><Xu0></Xu0></div>
              <div class="svg-wrapper"><Xin></Xin><Xin0></Xin0></div>
              <div class="svg-wrapper"><Di></Di><Di0></Di0></div>
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
                  现在我大四，就读于德州大学奥斯汀分校，学习广告和计算机科学。
                </p>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="bg-img swiper-lazy" data-background="img/bg/bg31.jpg">
            <div v-if="!$isMobile" class="row">
              <div class="col half">
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
              </div>
              <div class="col half chinese">
                <div class="white right bottom">
                  <h1 class="chineseTitle">学习中...</h1>
                  <p>
                    我主修广告，是TexasMedia的一员。我刚刚拿到了我的计算机科学的证书，我也会继续深入学习。
                  </p>
                  <p>
                    我毕业后想做个网页开发工程师，所以全身心地学习各种现代网页开发技术。
                  </p>
                </div>
              </div>
            </div>
            <div v-else>
              <div v-if="!$userReadChinese" class="half">
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
              </div>
              <div v-else class="half chinese">
                <div class="white right top">
                  <h1 class="chineseTitle">学习中...</h1>
                  <p>
                    我主修广告，是TexasMedia的一员。我刚刚拿到了我的计算机科学的证书，我也会继续深入学习。
                  </p>
                  <p>
                    我毕业后想做个网页开发工程师，所以全身心地学习各种现代网页开发技术。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="bg-img swiper-lazy" data-background="img/bg/bg33.jpg">
            <div v-if="!$isMobile" class="row">
              <div class="col half">
                <div class="white left bottom">
                  <h1>Working...</h1>
                  <p>
                    I am currently interning at Nokia as a front-end web
                    developer. My work includes designing, implementing, and
                    maintaining websites with Sketch, WordPress, HTML, JS, and
                    Python Django.
                  </p>
                </div>
              </div>
              <div class="col half chinese">
                <div class="white right top">
                  <h1 class="chineseTitle">工作中...</h1>
                  <p>
                    我现在在Nokia实习，做前端开发。我的工作包括设计，开发，维护网站，主要用Sketch，WordPress，HTML，JS，和Python
                    Django.
                  </p>
                </div>
              </div>
            </div>
            <div v-else>
              <div v-if="!$userReadChinese" class="half">
                <div class="white left top">
                  <h1>Working...</h1>
                  <p>
                    I am currently interning at Nokia as a front-end web
                    developer. My work includes designing, implementing, and
                    maintaining websites with Sketch, WordPress, HTML, JS, and
                    Python Django.
                  </p>
                </div>
              </div>
              <div v-else class="half chinese">
                <div class="white right top">
                  <h1 class="chineseTitle">工作中...</h1>
                  <p>
                    我现在在Nokia实习，做前端开发。我的工作包括设计，开发，维护网站，主要用Sketch，WordPress，HTML，JS，和Python
                    Django.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="bg-img swiper-lazy" data-background="img/bg/bg19.jpg">
            <div v-if="!$isMobile" class="row">
              <div class="col half">
                <div class="white left top">
                  <h1>Enjoying...</h1>
                  <p>
                    I love my super needy kitty, Dr. Casper Meowspy. I love to
                    exercise, weight trainning, Tae Kwon Do, swimming, anything
                    without "balls". During my vocations, I love to travel
                    around and explore new places.
                  </p>
                </div>
              </div>
              <div class="col half chinese">
                <div class="white right bottom">
                  <h1 class="chineseTitle">玩耍中...</h1>
                  <p>
                    我爱我的猫猫，Dr. Casper Meowspy。
                    我乐于锻炼身体，健身房，跆拳道，游泳，任何和“球”无关的运动。在放假时，我喜欢出游，探索各种地方。
                  </p>
                </div>
              </div>
            </div>
            <div v-else>
              <div v-if="!$userReadChinese" class="half">
                <div class="white left top">
                  <h1>Enjoying...</h1>
                  <p>
                    I love my super needy kitty, Dr. Casper Meowspy. I love to
                    exercise, weight trainning, Tae Kwon Do, swimming, anything
                    without "balls". During my vocations, I love to travel
                    around and explore new places.
                  </p>
                </div>
              </div>
              <div v-else class="half chinese">
                <div class="white right top">
                  <h1 class="chineseTitle">玩耍中...</h1>
                  <p>
                    我爱我的猫猫，Dr. Casper Meowspy。
                    我乐于锻炼身体，健身房，跆拳道，游泳，任何和“球”无关的运动。在放假时，我喜欢出游，探索各种地方。
                  </p>
                </div>
              </div>
            </div>

            <div v-observe-visibility="visibilityChangedS3"></div>
          </div>
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
              <h4 v-if="$isMobile" class="screen-center">I'm Skilled At ...</h4>
              <h2 v-else class="screen-center">I'm Skilled At ...</h2>
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
        },
        lazy: {
          loadPrevNext: true
        },
        preloadImages: false
      },
      words: [
        ['Angular', 40],
        ['Vue.js', 40],
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
        ['Adwords', 5]
      ],
      wordShow: false,
      cloudShow: false,
      eleToScrollTo: ''
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

// all iphones

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
</style>
