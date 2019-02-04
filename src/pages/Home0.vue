<template>
  <div>
    <div class="swiper-container">
      <swiper id="v" :options="swiperOptionV">
        <swiper-slide
          id="slide1"
          style="background-image: url('img/bg/bg18.jpg');"
        >
          <div id="header">
            <SpreadText :text="greeting"></SpreadText>
            <!-- <h1 class="display display-3">{{ greeting }}</h1> -->

            <h1 class="display-3">
              I'm Xindi,
              <vue-typer
                :text="role"
                :repeat="Infinity"
                :shuffle="false"
                initial-action="typing"
                :pre-type-delay="100"
                :type-delay="100"
                :pre-erase-delay="6000"
                :erase-delay="250"
                erase-style="clear"
                :erase-on-complete="false"
                caret-animation="blink"
                class="display-3"
              ></vue-typer>
            </h1>

            <transition appear name="fade" mode="out-in">
              <h2 :key="headline">{{ headline }}</h2>
            </transition>
          </div>
        </swiper-slide>
        <swiper-slide style="background-image: url('img/bg/bg12.jpg');">
          <h2 class="mt-5">I can help you with...</h2>

          <div class="row mt-5" id="help">
            <div class="col-md">
              <div class="text-center"><img src="img/home/web.svg" /></div>
              <h3>Web Development</h3>
              <p>
                Establishing web presence contributes a lot to the success of
                your business. Let's build a <b>stunning website together</b>!
                Whether you want to use <b>CMS</b>, or<b>HTML, CSS, and JS</b>,
                or <b>JS frameworks</b> such as Vue.js and Angular, I am here to
                help!
              </p>
            </div>
            <div class="col-md">
              <div class="text-center"><img src="img/home/analysis.svg" /></div>
              <h3>Research &amp; Planning</h3>
              <p>
                <b>Research</b> is the cornerstone of any effective marketing
                strategy. However, data gathered from research are just raw
                facts without further meaning. Let me help you translate them
                into insights that <b>drive better decisions</b>.
              </p>
            </div>
            <div class="col-md">
              <div class="text-center"><img src="img/home/visual.svg" /></div>
              <h3>Visual Design</h3>
              <p>
                Got an amazing idea, but don't know how to execute it? No
                worries! From <b>graphic designs</b> to <b>video production</b>,
                from <b>computer graphics</b> to <b>online web games</b>, I will
                help you <b>get your idea across</b> with compelling contents.
              </p>
            </div>
          </div>
          <div class="row mt-5" id="stats">
            <div class="col-md">
              <div class="text-center"><img src="img/home/code.svg" /></div>

              <p>Numbers of programming projects done:</p>

              <div class="text-center navi cl-effect-1">
                <a href="computer-science.html">take a look</a>
              </div>
            </div>
            <div class="col-md">
              <div class="text-center"><img src="img/home/project.svg" /></div>
              <p>
                Numbers of ad projects done: <span class="h3" id="ad"></span>
              </p>
              <div class="text-center navi cl-effect-1">
                <a href="advertising.html">take a look</a>
              </div>
            </div>
            <div class="col-md">
              <div class="text-center"><img src="img/home/graphic.svg" /></div>
              <p>
                Numbers of visuals created: <span class="h3" id="visual"></span>
              </p>
              <div class="text-center navi cl-effect-1">
                <a href="digital-media-production.html">take a look</a>
              </div>
            </div>
          </div>
        </swiper-slide>
        <div
          class="swiper-pagination swiper-pagination-v"
          slot="pagination"
        ></div>
      </swiper>
      <!-- update https://jsfiddle.net/awolf2904/m9hxfmcz/ -->
    </div>
  </div>
</template>

<script>
import { VueTyper } from 'vue-typer';
import { TimelineLite } from 'gsap';
import SpreadText from '../components/SpreadText.vue';

export default {
  data() {
    return {
      // for setInterval & clearInterval
      running: String,
      index: 0,
      role: ['a Devsigner,', 'a Learner,', 'a Cat Mom,'],
      detail: [
        'designing the user experience of websites & apps.',
        'building web apps with latest technologies.',
        'studying Advertising & Computer Science at UT Austin.',
        'learning web development online.',
        'having fun with my kitty, Dr. Casper Meowspy.',
        'being frustrated because he is getting fat.'
      ],
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
      },
      cs: 0
    };
  },
  methods: {
    // visibilityChanged() {
    //   console.log("change")
    //   TweenLite.to(this.cs, 0.5, { tweenedNumber: this.number });
    // },
    // NOTE: come back later
    numberIncrease(el, done) {
      TweenLite.to({ d: 0 }, 5, {
        d: 9000,
        roundProps: 'd',
        ease: Linear.easeNone,
        onUpdate() {
          this.cs = this.target.d;
        }
      });
      done();
    }
  },
  computed: {
    greeting() {
      let time = new Date().getHours();
      let greeting = 'Hey There!';
      switch (true) {
        case time < 5:
          greeting = 'Good Night ~';
          break;
        case time < 12:
          greeting = 'Good Morning ~';
          break;
        case time < 17:
          greeting = 'Good Afternoon ~';
          break;
        case time < 20:
          greeting = 'Good Evening ~';
          break;
        case time < 24:
          greeting = 'Good Night ~';
          break;
      }
      return greeting;
    },
    headline() {
      return this.detail[this.index];
    },
    animatedNumber: function() {
      return this.tweenedNumber.toFixed(0);
    }
  },
  created() {
    this.running = setInterval(() => {
      this.index < this.detail.length - 1 ? this.index++ : (this.index = 0);
    }, 3500);
  },
  beforeRouteLeave(to, from, next) {
    this.index = 0;
    clearInterval(this.running);
    next();
  },
  components: {
    VueTyper,
    TimelineLite,
    SpreadText
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
    padding: 70px 5%;
  }

  .swiper-pagination {
    z-index: 10;
  }

  .swiper-pagination-bullet-active {
    background: $primary-color;
  }
}
#header {
  position: absolute;
  top: 15%;
  left: 10%;
}
#help img {
  margin-bottom: 50px;
  width: 80%;
}
#stats img {
  width: 50px;
}

</style>
