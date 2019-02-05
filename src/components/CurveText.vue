<template>
  <div class="">
    <svg :viewBox="vbox" :width="width" :height="height">
      <g>
        <path :stroke="stroke" :d="d" :id="textId" fill="none" />
        <text>
          <textPath
            :xlink:href="xlink"
            :fill="color"
            :startOffset="offset"
            text-anchor="middle"
          >
            <slot />
          </textPath>
        </text>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'CurveText',
  props: {
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 200
    },
    r: {
      type: Number,
      default: 100
    },
    offset: {
      type: String,
      default: '50%'
    },
    textid: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'white'
    },
    debug: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    stroke() {
      return this.debug ? 'grey' : 'none';
    },
    textId() {
      return this.textid === '' ? `vue-curve-text-${this._uid}` : this.textid;
    },
    xlink() {
      return `#${this.textId}`;
    },
    vbox() {
      return [0, 0, this.width, this.height].join(' ');
    },
    d() {
      return `M 0,${this.height} Q ${this.width / 2},${this.height -
        this.r * 2} ${this.width},${this.height}`;
    }
  },
  mounted() {
    const slots = this.$slots.default;
    if (!slots) {
      console.error('Slot content is not defined');
      return;
    }
    if (slots.length > 1) {
      console.error('Slot content must be a textNode', this.$slots.default);
      return;
    }
    if (slots[0].elm.nodeName !== '#text') {
      console.error('Slot content must be a textNode', this.$slots.default);
      return;
    }
  }
};
</script>

<style lang="scss" scoped>
text {
  font-size: 4rem;
}
</style>
