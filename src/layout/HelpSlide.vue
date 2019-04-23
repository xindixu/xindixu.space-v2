<template>
  <div class="slideHelp">
    <div v-if="!$isMobile">
      <div class="row">
        <div class="col-lg-6 col-md-8">
          <h1>{{ obj.enTitle }}</h1>
          <div>
            <img
              class="introPic"
              :src="'img/home/' + obj.introPic + '.svg'"
              :alt="'Intro picture for' + obj.enTitle"
            />
          </div>
          <h4 class="english">{{ obj.enSubTitle1 }}</h4>
          <h4 class="english">{{ obj.enSubTitle2 }}</h4>
        </div>

        <div class="offset-lg-4 offset-md-2 col-lg-2 col-md-2">
          <div class="zhIntro vertical">
            <h1 class="chineseTitle">{{ obj.zhTitle }}</h1>
            <h4 class="chinese indentV">{{ obj.zhSubTitle1 }}</h4>
            <h4 class="chinese indentV">{{ obj.zhSubTitle2 }}</h4>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-6 col-md-6 offset-lg-6 offset-md-2 project">
          <div>
            <img
              class="projectPic"
              :src="'img/home/' + obj.projectPic + '.svg'"
              :alt="'Project icon for ' + obj.enTitle"
            />
          </div>
          <div class="row substitle">
            <div class="col-1">
              <h4>These</h4>
              <h4 class="chinese">这</h4>
            </div>
            <div class="col-2">
              <IncreaseNum start="0" :end="obj.numOfProjects"></IncreaseNum>
            </div>
            <div class="col-9">
              <h4>projects can prove my ability</h4>
              <h4 class="chinese">个项目可以证明我</h4>
            </div>
            <div class="link">
              <SquareLink :link="'work#' + obj.link">take a look</SquareLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div v-if="$userReadChinese">
        <div class="row">
          <div class="zhIntro vertical">
            <h1 class="chineseTitle">{{ obj.zhTitle }}</h1>
            <h4 class="chinese indentV">{{ obj.zhSubTitle1 }}</h4>
            <h4 class="chinese indentV">{{ obj.zhSubTitle2 }}</h4>
          </div>
        </div>

        <div class="verticalProject">
          <div class="substitle vertical">
            <h4 class="chinese">
              这<span>{{ 10 }}</span
              >个项目可以证明我
            </h4>
            <IncreaseNum start="0" :end="obj.numOfProjects"></IncreaseNum>
            <div class="link">
              <SquareLink class="chinese" :link="'work#' + obj.link"
                >看看</SquareLink
              >
            </div>
          </div>
          <div>
            <img
              class="projectPic"
              :src="'img/home/' + obj.projectPic + '.svg'"
              :alt="'Project icon for ' + obj.enTitle"
            />
          </div>
        </div>
      </div>
      <div v-else>
        <h1>{{ obj.enTitle }}</h1>
        <div>
          <img
            class="introPic"
            :src="'img/home/' + obj.introPic + '.svg'"
            :alt="'Intro picture for' + obj.enTitle"
          />
        </div>
        <h4 class="english">{{ obj.enSubTitle1 }}</h4>
        <h4 class="english">{{ obj.enSubTitle2 }}</h4>

        <div class="project">
          <div>
            <img
              class="projectPic"
              :src="'img/home/' + obj.projectPic + '.svg'"
              :alt="'Project icon for ' + obj.enTitle"
            />
          </div>
          <div class="row substitle">
            <div class="col-2"><h4>These</h4></div>
            <div class="col-1">
              <IncreaseNum start="0" :end="obj.numOfProjects"></IncreaseNum>
            </div>
            <div class="col-auto"><h4>projects can prove my ability</h4></div>
            <div class="link">
              <SquareLink :link="'work#' + obj.link">take a look</SquareLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SquareLink, IncreaseNum } from '@/components';

export default {
  name: 'HelpSlide',
  components: {
    SquareLink,
    IncreaseNum
  },
  props: {
    obj: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
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

.swiper-pagination {
  z-index: 10;
}

.swiper-pagination-bullet-active {
  background: #e2b4bd;
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
@media only screen and (min-device-width: 320px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
  .slideHelp {
    h1 {
      font-size: 2em;
      line-height: 0.8em;
      margin-bottom: 10px;
    }
    h4 {
      font-size: 1em;
      line-height: 1.4em;
    }

    .introPic {
      margin-top: 20px;
      width: 500px;
    }

    .zhIntro {
      height: 90vh;
      position: absolute;
      top: 12vh;
      right: 5vw;

      .chineseTitle {
        font-size: 2.5em;
        line-height: 0.8em;
        margin-bottom: 10px;
      }
    }

    .project {
      margin-top: 0px;

      h4 {
        font-size: 1em;
        line-height: 1.5em;
      }
      .projectPic {
        width: 40px;
        margin-left: 75vw;
      }

      .increase-num /deep/ h2 {
        font-size: 1.3em;
        line-height: 1.5em;
        margin: 0px;
      }

      .substitle {
        margin-top: -20px;
        h4 {
          margin-top: 0px;
        }
      }
      .link {
        margin-left: 50vw;
        margin-top: -10px;
      }
    }

    .verticalProject {
      position: absolute;
      left: 15vw;
      top: 40vh;
      height: auto;
      width: auto;

      .chinese {
        letter-spacing: 6px;
        font-size: 0.9em;
        line-height: 0.8em;
      }

      .projectPic {
        width: 40px;
        opacity: 0.5;
        margin-top: 0;
        margin-right: 8vw;
      }

      .substitle {
        height: 50vh;

        span {
          color: #ffffff00;
        }

        .increase-num {
          position: absolute;
          right: 5%;
          top: 15%;
          writing-mode: horizontal-tb;
          /deep/ h2 {
            font-size: 1.2em;
          }
        }
      }

      .link {
        margin-top: 50%;
        a {
          letter-spacing: 8px;
          font-size: 0.9em;
        }
      }
    }
  }
}

// iphone 5 / 5S / SE
@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) {
  .slideHelp {
    .zhIntro {
      .indentV {
        margin-top: 15vh;
        h4 {
          font-size: 1.15em;
          line-height: 0.8em;
          letter-spacing: 10px;
        }
      }
      h4.chinese {
        margin-top: 15vh;
        font-size: 1.15em;
        line-height: 1.2em;
        letter-spacing: 14px;
      }
    }
  }
}

// iphone 6 / 6S / 7 / 8
@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
  .slideHelp {
    h1 {
      font-size: 2.5em;
    }
    h4 {
      font-size: 1.2em;
      line-height: 1.5em;
    }

    .zhIntro {
      h1 {
        font-size: 2.8em;
      }
      h4.chinese {
        font-size: 1.3em;
      }
    }

    .project {
      margin-top: 20px;

      h4 {
        font-size: 1.1em;
        line-height: 1.2em;
      }
      .projectPic {
        width: 50px;
        margin-left: 75vw;
      }

      .increase-num /deep/ h2 {
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

    .verticalProject {
      position: absolute;
      left: 15vw;
      top: 45vh;

      .chinese {
        letter-spacing: 8px;
        font-size: 1.1em;
        line-height: 1em;
      }

      .projectPic {
        width: 50px;
        opacity: 0.5;
        margin-top: 0;
        margin-right: 6vw;
      }

      .substitle {
        .increase-num {
          position: absolute;
          right: 6%;
          top: 15%;
          /deep/ h2 {
            font-size: 1.3em;
          }
        }
      }

      .link {
        margin-top: 50%;
        a {
          letter-spacing: 10px;
          font-size: 1em;
        }
      }
    }
  }
}

// iphone 6 / 7 / 8 +
@media only screen and (min-device-width: 414px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
  .slideHelp {
    h1 {
      font-size: 3em;
    }
    h4 {
      font-size: 1.2em;
      line-height: 1.6em;
    }

    .zhIntro {
      height: 90vh;

      h1 {
        font-size: 3em;
        line-height: 0.8em;
        margin-bottom: 10px;
      }

      .indentV {
        margin-top: 15vh;
        h4.chinese {
          font-size: 1.3em;
          line-height: 1.1em;
        }
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

      .increase-num /deep/ h2 {
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

    .verticalProject {
      position: absolute;
      left: 15vw;
      top: 40vh;
      height: auto;
      width: auto;

      .chinese {
        letter-spacing: 8px;
        font-size: 1.1em;
        line-height: 1em;
      }

      .projectPic {
        width: 50px;
        opacity: 0.5;
        margin-top: 0;
        margin-right: 6vw;
      }

      .substitle {
        height: 50vh;

        span {
          color: #ffffff00;
        }

        .increase-num {
          position: absolute;
          right: 6%;
          top: 15%;
          writing-mode: horizontal-tb;
          /deep/ h2 {
            font-size: 1.2em;
          }
        }
      }

      .link {
        margin-top: 50%;
        a {
          letter-spacing: 10px;
          font-size: 1em;
        }
      }
    }
  }
}

// iphone X
@media only screen and (min-device-width: 375px) and (min-device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
  .slideHelp {
    h1 {
      font-size: 2.9em;
    }
    h4 {
      font-size: 1.4em;
      line-height: 1.8em;
    }

    .zhIntro {
      height: 90vh;

      h1 {
        font-size: 3em;
        line-height: 0.8em;
        margin-bottom: 10px;
      }

      .indentV {
        margin-top: 15vh;
        h4.chinese {
          font-size: 1.3em;
          line-height: 0.8em;
        }
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

      .increase-num /deep/ h2 {
        font-size: 1.4em;
        margin-left: -5px;
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

    .verticalProject {
      top: 50vh;

      .chinese {
        letter-spacing: 8px;
        font-size: 1.2em;
      }

      .projectPic {
        width: 60px;
        margin-top: -10px;
        margin-right: 6vw;
      }

      .substitle {
        .increase-num {
          right: 6%;
          top: 12%;
          /deep/ h2 {
            font-size: 1.4em;
          }
        }
      }

      .link {
        a {
          letter-spacing: 10px;
          font-size: 1.1em;
        }
      }
    }
  }
}

// Non-retina
@media only screen and (min-device-width: 1024px) and (max-device-width: 1439px) and (-webkit-min-device-pixel-ratio: 1) {
  .slideHelp {
    h1 {
      font-size: 2.5em;
    }
    h4 {
      font-size: 1.2em;
      line-height: 1.5em;
    }

    .project {
      margin-top: 0;

      h4 {
        font-size: 1.2em;
        line-height: 1.5em;
      }
      .projectPic {
        width: 70px;
        margin-left: -2vw;
      }

      .increase-num /deep/ h2 {
        font-size: 2.5em;
        margin-left: 20px;
      }

      .substitle {
        margin-top: -25px;
        margin-left: 5px;
      }
      .link {
        margin-left: 20vw;
        margin-top: -5px;
      }
    }
  }
}

// Laptop L
@media only screen and (min-width: 1440px) and (max-width: 1960px) and (-webkit-min-device-pixel-ratio: 1) {
  .slideHelp {
    h1 {
      font-size: 3.5em;
    }
    h4 {
      font-size: 1.5em;
      line-height: 1.5em;
    }

    .project {
      margin-top: 10px;

      h4 {
        font-size: 1.5em;
        line-height: 1.5em;
      }
    }
  }
}

// Retina
@media only screen and (min-width: 1024px) and (max-width: 1960px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
  .slideHelp {
    h1 {
      font-size: 3.5em;
    }
    h4 {
      font-size: 1.8em;
      line-height: 2em;
    }
    .introPic {
      width: 600px;
      margin-top: 10px;
    }

    .zhIntro {
      height: 680px;
      position: absolute;
      top: auto;
      right: auto;

      .chineseTitle {
        letter-spacing: 20px;
      }

      .chinese {
        letter-spacing: 20px;
      }
    }

    .project {
      margin-top: 10vh;
      .projectPic {
        width: 100px;
        opacity: 0.5;
        margin-left: -50px;
      }

      .increase-num /deep/ h2 {
        font-size: 3.5em;
        margin-left: 20px;
      }

      .substitle {
        margin-top: -50px;
        h4 {
          font-size: 1.8em;
          margin-top: 0px;
        }
      }
    }

    .link {
      margin-left: 280px;
    }
  }
}
</style>
