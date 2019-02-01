<template>
  <div>
    <!-- Slider main container -->
    <div class="swiper-container">
      <swiper id="v" :options="swiperOptionV">
        <swiper-slide
          id="slide-1"
          style="background-image: url('img/bg/bg14.jpg');"
        >
          <b-row class="mb-5">
            <b-col cols="8">
              <SpreadText text="Hey there"></SpreadText>
              <h1 class="display display-3 my-3">Hey, you're here finally</h1>
            </b-col>
            <b-col>
              <div class="float-md-right">
                <img class="self" src="img/about/photo.png" />
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col id="name-wrap" class="pl-2 pt-2 col-lg-4">
              <h3>My name is</h3>
              <div class="svg-wrapper"><Xu0></Xu0><Xu></Xu></div>
              <div class="svg-wrapper"><Xin0></Xin0><Xin></Xin></div>
              <div class="svg-wrapper"><Di0></Di0><Di></Di></div>

            </b-col>
            <b-col class="mt-0 col-lg-8">
              <h3>What does my name mean?</h3>
              <p>
                My name consists of 3 Chinese characters, family name, 徐 and
                given name, 欣笛. 欣 means happiness. 笛 means bamboo flutes,
                whose music often trigger a peaceful joy among their listeners.
              </p>
              <h3>How to pronounce my name?</h3>
              <audio controls>
                <source src="image/about/name.mp3" type="audio/mpeg" />
                Sorry, your browser does not support the audio element.
              </audio>
            </b-col>
          </b-row>
        </swiper-slide>
        <swiper-slide
          id="slide-2"
          style="background-image: url('img/bg/bg14.jpg');"
        >
          <h1 class="display display-3">I'm working hard to become a ...</h1>
        </swiper-slide>
        <swiper-slide
          id="slide-3"
          style="background-image: url('img/bg/bg14.jpg');"
        >
          <h1 class="display display-3">I am ...</h1>
          <b-row class="mt-2" id="values">
            <b-col>
              <div class="text-center">
                <Learning></Learning>
              </div>
              <h2>Learning</h2>
              <p>
                I am a junior student at the University of Texas at Austin major
                in Advertising and Japanese. I am part of TexasMedia, the
                program of the kind in the US. I just finished my certificate
                for Computer Science and I will keep exploring more. Ever since
                I started programming in high school, I'd never stopped taking
                Computer Science classes even though I changed my major three
                times.
              </p>
            </b-col>
            <b-col>
              <div class="text-center">
                <Working></Working>
              </div>
              <h2>Working</h2>
              <p>
                At the beginning of my junior year, I finally made my decision
                to work in the web/software development field. I am currently
                interning at Nokia as a front-end web developer. My area of
                experitise includes Web Developement, Media Planning, Web
                Design, Computer Aided Graphic Design.
              </p>
            </b-col>
            <b-col>
              <div class="text-center">
                <Enjoying></Enjoying>
              </div>
              <h2>Enjoying</h2>
              <p>
                My kitty Dr. Casper Meowspy is a super needy dog-like cat. I'm
                always energetic. My boyfriend has to "walk" me a lot and
                sometimes we bring his cat, Arby, as well. Tae Kwon Do,
                swimming, weight training... I like them all. I like music and I
                am learning guitar by myself now, although I sing off-key all
                the time.
              </p>
            </b-col>
          </b-row>
        </swiper-slide>
<!--  动态绑定src路径  https://blog.csdn.net/nalaluky/article/details/82965079-->
          <swiper-slide
          id="slide-4"
          style="background-image: url('img/bg/bg14.jpg');"
        >
          <h1 class="display display-3">I am skilled in ...</h1>
          <li>
            <img
              src="img/about/skills/ps.svg"
              width="50"
              onmouseover="this.src='img/about/skills/ps0.svg';"
              onmouseout="this.src='img/about/skills/ps.svg';"
            />
          </li>
          <li>
            <img
              src="img/about/skills/ai.svg"
              width="50"
              onmouseover="this.src='img/about/skills/ai0.svg';"
              onmouseout="this.src='img/about/skills/ai.svg';"
            />
          </li>
          <li>
            <img
              src="img/about/skills/id.svg"
              width="50"
              onmouseover="this.src='img/about/skills/id0.svg';"
              onmouseout="this.src='img/about/skills/id.svg';"
            />
          </li>
          <li>
            <img
              src="img/about/skills/pr.svg"
              width="50"
              onmouseover="this.src='img/about/skills/pr0.svg';"
              onmouseout="this.src='img/about/skills/pr.svg';"
            />
          </li>
          <li>
            <img
              src="img/about/skills/ae.svg"
              width="50"
              onmouseover="this.src='img/about/skills/ae0.svg';"
              onmouseout="this.src='img/about/skills/ae.svg';"
            />
          </li>
          <li>
            <img
              src="img/about/skills/an.svg"
              width="50"
              onmouseover="this.src='img/about/skills/an0.svg';"
              onmouseout="this.src='img/about/skills/an.svg';"
            />
          </li>
          <li>
            <img
              src="img/about/skills/maya.svg"
              width="50"
              onmouseover="this.src='img/about/skills/maya0.svg';"
              onmouseout="this.src='img/about/skills/maya.svg';"
            />
          </li>
          <li>
            <img
              src="img/about/skills/java.svg"
              width="50"
              onmouseover="this.src='img/about/skills/java0.svg';"
              onmouseout="this.src='img/about/skills/java.svg';"
            />
          </li>
          <li>
            <img
              src="img/about/skills/python.svg"
              width="50"
              onmouseover="this.src='img/about/skills/python0.svg';"
              onmouseout="this.src='img/about/skills/python.svg';"
            />
          </li>
          <li>
            <img
              src="img/about/skills/prossessing.svg"
              width="50"
              onmouseover="this.src='img/about/skills/prossessing0.svg';"
              onmouseout="this.src='img/about/skills/prossessing.svg';"
            />
          </li>
          <li>
            <img
              src="img/about/skills/swift.svg"
              width="50"
              onmouseover="this.src='img/about/skills/swift0.svg';"
              onmouseout="this.src='img/about/skills/swift.svg';"
            />
          </li>
          <li>
            <img
              class="mt-3"
              src="img/about/skills/phaser.svg"
              width="100"
              onmouseover="this.src='img/about/skills/phaser0.svg';"
              onmouseout="this.src='img/about/skills/phaser.svg';"
            />
          </li>
          <li>
            <img
              src="img/about/skills/html.svg"
              width="50"
              onmouseover="this.src='img/about/skills/html0.svg';"
              onmouseout="this.src='img/about/skills/html.svg';"
            />
          </li>
          <li>
            <img
              src="img/about/skills/css.svg"
              width="50"
              onmouseover="this.src='img/about/skills/css0.svg';"
              onmouseout="this.src='img/about/skills/css.svg';"
            />
          </li>
          <li>
            <img
              src="img/about/skills/js.svg"
              width="50"
              onmouseover="this.src='img/about/skills/js0.svg';"
              onmouseout="this.src='img/about/skills/js.svg';"
            />
          </li>
          <li>
            <img
              src="img/about/skills/bootstrap.svg"
              width="50"
              onmouseover="this.src='img/about/skills/bootstrap0.svg';"
              onmouseout="this.src='img/about/skills/bootstrap.svg';"
            />
          </li>
        </swiper-slide>
        <swiper-slide style="padding:0px; margin: 0px;">
          <swiper id="h" :options="swiperOptionH">
            <swiper-slide style="background-image: url('img/bg/bg12.jpg');">
              <h1>Horizontal Slide 1</h1>
            </swiper-slide>
            <swiper-slide style="background-image: url('img/bg/bg3.jpg');">
              <h1>Horizontal Slide 2</h1>
            </swiper-slide>
            <swiper-slide style="background-image: url('img/bg/bg4.jpg');">
              <h1>Horizontal Slide 3</h1>
            </swiper-slide>
            <swiper-slide style="background-image: url('img/bg/bg5.jpg');">
              <h1>Horizontal Slide 4</h1>
            </swiper-slide>
            <swiper-slide style="background-image: url('img/bg/bg6.jpg');">
              <h1>Horizontal Slide 5</h1>
            </swiper-slide>
            <div
              class="swiper-pagination swiper-pagination-h"
              slot="pagination"
            ></div>
          </swiper>
        </swiper-slide>
        <div
          class="swiper-pagination swiper-pagination-v"
          slot="pagination"
        ></div>
      </swiper>
      <!-- swiper -->
    </div>
  </div>
</template>

<script>
import SpreadText from '../components/SpreadText.vue';
import { Xu0, Xu, Xin0, Xin, Di0, Di, Learning, Working, Enjoying } from '../assets/svg';


export default {
  data() {
    return {
      swiperOptionH: {
        speed: 500,
        pagination: {
          el: '.swiper-pagination-h',
          clickable: true
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
      swiperOptionV: {
        direction: 'vertical',
        effect: 'fade',
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
  components:{
    SpreadText,
    Xu0, Xu, Xin0, Xin, Di0, Di, Learning, Working, Enjoying
  }
};
</script>

<style scoped lang="scss">
.swiper-container {
  height: 100vh;
  width: 100vw;

  .swiper-slide {
    background-position: center center;
    background-size: cover;
    padding: 70px 5%;
  }

  .swiper-pagination {
    z-index: 10;
  }
}

#slide-1 {
  .self {
    width: 300px;
    height: 100%;
  }

  .svg-wrapper {
    display: inline-block;
    width: 100px;
    height: 80px;
  }
}

#slide-4 {
  li {
    display: inline-block;
    margin: 0px 10px;
  }
}

svg {
  width: 100%;
  height: 100%;
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
</style>
