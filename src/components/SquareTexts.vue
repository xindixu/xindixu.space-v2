<template>
  <div id="container" class="square-texts">
    <div>
      <p class="en">{{ en }}</p>
    </div>
    <div>
      <p class="h2 num">{{ num1 }}</p>
    </div>
    <div>
      <p class="h2 num">{{ num2 }}</p>
    </div>
    <div>
      <p class="zh chinese vertical" :class="letterSpacing">{{ zh }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SquareTexts',
  props: ['num1', 'num2', 'en', 'zh'],
  data: () => ({}),
  computed: {
    letterSpacing() {
      return this.zh.length == 4 ? 'zh4' : 'zh5';
    }
  }
};
</script>

<style lang="scss" scoped>
#container {
  height: 120px;
}

.h2,
p {
  margin-bottom: 0px;
}
.num {
  line-height: 45px;
}
.en {
  line-height: 30px;
}

.zh {
  position: absolute;
  right: -20px;
  top: 30px;
}
.zh4 {
  letter-spacing: 7px;
}
.zh5 {
  letter-spacing: 3px;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
  p {
    font-size: 0.6em;
  }

  p.h2.num {
    line-height: 1.2;
    font-size: 1.5em;
  }
  .zh5 {
    right: -5px;
    top: 30px;
  }
}

@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
  p {
    font-size: 0.8em;
  }

  p.h2.num {
    line-height: 1.2;
    font-size: 1.8em;
  }
  .zh5 {
    right: -5px;
    top: 30px;
  }
}

@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {
  p {
    font-size: 1em;
  }

  p.h2.num {
    line-height: 1.2;
    font-size: 2em;
  }
  .zh5 {
    right: -20px;
    top: 30px;
  }
}
</style>
