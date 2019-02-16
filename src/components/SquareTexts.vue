<template>
  <div id="container">
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
</style>
