<template>
  <div class="">
    <div v-if="!$isMobile" class="row">
      <div class="col half">
        <div class="white left" :class="obj.enTop ? 'top' : 'bottom'">
          <h1>{{ obj.enTitle }}</h1>
          <p>{{ obj.enPara }}</p>
        </div>
      </div>
      <div class="col half chinese">
        <div class="white right" :class="obj.enTop ? 'bottom' : 'top'">
          <h1 class="chineseTitle">{{ obj.zhTitle }}</h1>
          <p>{{ obj.zhPara }}</p>
        </div>
      </div>
    </div>
    <div v-else>
      <div v-if="!$userReadChinese" class="half">
        <div class="white left top">
          <h1>{{ obj.enTitle }}</h1>
          <p>{{ obj.enPara }}</p>
        </div>
      </div>
      <div v-else class="half chinese">
        <div class="white right top">
          <h1 class="chineseTitle">{{ obj.zhTitle }}</h1>
          <p>{{ obj.zhPara }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DoingSlide',
  props: {
    obj: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
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
  margin-top: 20vh;
}
.bottom {
  margin-top: 50vh;
}
.right {
  text-align: left;
}

@media only screen and (min-width: 1024px) and (max-width: 1960px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
  h1 {
    font-size: 5em;
  }
  p {
    font-size: 2em;
  }
}
</style>
