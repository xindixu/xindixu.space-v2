<template>
  <div class="quick-menu" ref="quickMenu" :style="quickMenuStyle">
    <div v-for="(n, key) in menuCount" :key="key" class="sub-menu" :style="getSubMenu(n - 1)">
      <router-link
        v-if="menuUrlList[n - 1].isLink"
        :to="menuUrlList[n - 1].url"
        :target="openNewTab"
        :style="subMenuStyle"
        @mouseover.stop="mouseEnterSubMenu"
        @mouseout.stop="mouseOutSubMenu"
      >
        <component ref="icon" class="icon" :is="iconClass[n - 1]"></component>
      </router-link>
      <a
        v-else
        :style="subMenuStyle"
        :href="menuUrlList[n - 1].url"
        target="_blank"
        @mouseover.stop="mouseEnterSubMenu"
        @mouseout.stop="mouseOutSubMenu"
        @click="processCallback(key);"
      >
        <component ref="icon" class="icon" :is="iconClass[n - 1]"></component>
      </a>
    </div>

    <div class="menu" :style="menuStyle">
      <div class="core-menu" @click="toggleMenu">
        <div class="bar"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'QuickMenu',
  props: {
    menuCount: {
      type: Number,
      required: true,
      default: 4
    },
    iconClass: {
      type: Array,
      required: true
    },
    menuUrlList: {
      type: Array,
      required: true
    },
    backgroundColor: {
      type: String,
      default: '#20babb'
    },
    color: {
      type: String,
      default: '#fff'
    },
    isOpenNewTab: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'top-left'
    }
  },
  computed: {
    openNewTab() {
      return this.isOpenNewTab ? '_blank' : '_self';
    },
    quickMenuStyle() {
      const topPosition = { top: '30px' },
        bottomPosition = { bottom: '30px' },
        leftPosition = { left: '30px' },
        rightPosition = { right: '30px' };

      let style = this.isTop ? topPosition : bottomPosition;
      Object.assign(style, this.isLeft ? leftPosition : rightPosition);
      Object.assign(style, {
        transform: this.isLeft ? 'rotate(-180deg)' : 'rotate(180deg)'
      });
      return style;
    },
    menuStyle() {
      return {
        backgroundColor: this.backgroundColor,
        color: this.color
      };
    },
    subMenuStyle() {
      const style = {
        backgroundColor: this.backgroundColor,
        color: this.color
      };
      return style;
    },

    isTop() {
      return !!~this.position.toLowerCase().indexOf('top');
    },
    isLeft() {
      return !!~this.position.toLowerCase().indexOf('left');
    }
  },
  data() {
    return {
      menuSize: 60,
      //  subMenu4:[[["0","-160"],["-80","-138.6"],["-138.6","-80"],["-160","0"]],[["0","-160"],["80", "-138.6"],["138.6","-80"],["160","0"]],[["0","160"],["138.6","80"],["80","138.6"],["160","0"]],[["-160","0"],["-138.6","80"],["-80","138.6"],["0","160"]]],
      subMenu4: [
        [['0', '-80'], ['-40', '-69.3'], ['-69.3', '-40'], ['-80', '0']],
        [['0', '-80'], ['40', '-69.3'], ['69.3', '-40'], ['80', '0']],
        [['0', '80'], ['69.3', '40'], ['40', '69.3'], ['80', '0']],
        [['-80', '0'], ['-69.3', '40'], ['-40', '69.3'], ['0', '80']]
      ],
      subMenu3: [
        [['-160', '0'], ['-113', '-113'], ['0', '-160']],
        [['0', '-160'], ['113', '-113'], ['160', '0']],
        [['0', '160'], ['113', '113'], ['160', '0']],
        [['-160', '0'], ['-113', '113'], ['0', '160']]
      ],
      subMenu2: [
        [['-160', '0'], ['0', '-160']],
        [['0', '-160'], ['160', '0']],
        [['0', '160'], ['160', '0']],
        [['-160', '0'], ['0', '160']]
      ]
    };
  },
  methods: {
    getSubMenu(n) {
      let menuPosition =
        this.menuCount === 4
          ? this.subMenu4
          : this.menuCount === 3
          ? this.subMenu3
          : this.subMenu2;
      menuPosition =
        this.isTop && this.isLeft
          ? menuPosition[2]
          : this.isTop && !this.isLeft
          ? menuPosition[1]
          : !this.isTop && this.isLeft
          ? menuPosition[3]
          : menuPosition[0];
      return {
        top: menuPosition[n][0] + 'px',
        left: menuPosition[n][1] + 'px'
      };
    },
    toggleMenu() {
      let menuEl = this.$refs.quickMenu;
      let menuIconEl = this.$refs.icon;
      if (!~menuEl.className.indexOf(' active')) {
        menuEl.className += ' active';
        menuIconEl.forEach(function(element) {
          element.className += ' menu-animate';
        });
      } else {
        menuEl.className = menuEl.className.replace(' active', '');
        menuIconEl.forEach(function(element) {
          element.className = element.className.replace(' menu-animate', '');
        });
      }
    },
    processCallback(key) {
      this.$emit('process', key);
    },
    mouseEnterSubMenu(e) {
      if (e.target.tagName === 'A') {
        e.target.style.backgroundColor = this.lightenColor(
          this.backgroundColor,
          20
        );
        // e.target.firstElementChild.style.backgroundColor = this.lightenColor(this.backgroundColor, 20)
      } else if (e.target.tagName === 'I') {
        e.target.parentElement.style.backgroundColor = this.lightenColor(
          this.backgroundColor,
          20
        );
        // e.target.style.backgroundColor = this.lightenColor(this.backgroundColor, 20)
      }
    },
    mouseOutSubMenu(e) {
      if (e.target.tagName === 'A') {
        e.target.style.backgroundColor = this.backgroundColor;
        // e.target.firstElementChild.style.backgroundColor = this.backgroundColor
      } else if (e.target.tagName === 'I') {
        e.target.parentElement.style.backgroundColor = this.backgroundColor;
        // e.target.style.backgroundColor = this.backgroundColor
      }
    },
    lightenColor(hex, amt) {
      var usePound = false;

      if (hex[0] === '#') {
        hex = hex.slice(1);
        usePound = true;
      }

      var num = parseInt(hex, 16);
      var r = (num >> 16) + amt;

      if (r > 255) r = 255;
      else if (r < 0) r = 0;

      var b = ((num >> 8) & 0x00ff) + amt;

      if (b > 255) b = 255;
      else if (b < 0) b = 0;

      var g = (num & 0x0000ff) + amt;

      if (g > 255) g = 255;
      else if (g < 0) g = 0;
      return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16);
    }
  }
};
</script>
<style lang="scss" scoped>
.quick-menu {
  color: #fff;
  position: fixed;
  width: 30px;
  height: 30px;
  transition: all 1s ease;
  right: 30px;
  z-index: 100;
  > .menu {
    display: block;
    position: absolute;
    border-radius: 50% !important;
    width: 30px;
    height: 30px;
    text-align: center;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
    color: #fff;
    transition: all 1s ease;
    .core-menu {
      width: 50%;
      height: 50%;
      position: absolute;
      left: 0px;
      top: 0px;
      width: 30px;
      height: 30px;
      transform: rotate(180deg);
      transition: all 1s ease;
      cursor: pointer;
      .bar {
        transition: all 1s ease;
        width: 14px;
        height: 1.5px;
        background: #fff;
        position: absolute;
        top: 35%;
        margin-top: -1.5px;
        left: 8px;
        transform-origin: 0% 50%;
        &:before,
        &:after {
          transition: all 1s ease;
          content: '';
          width: 14px;
          height: 1.5px;
          background: #fff;
          position: absolute;
          left: 0px;
          transform-origin: 0% 50%;
        }
        &:before {
          margin-top: 30%;
        }
        &:after {
          margin-top: 60%;
        }
      }
    }
  }
  .sub-menu {
    box-sizing: border-box;
    position: absolute;
    width: 30px;
    height: 30px;
    font-size: 15px;
    text-align: center;
    border-radius: 50% !important;
    a {
      outline: none;
      text-decoration: none;
      display: inline-block;
      border-radius: 50% !important;
      width: 100%;
      height: 100%;
      .icon {
        width: 15px;
        position: absolute;
        top: 25%;
        left: 25%;
        background: transparent;
        &:before {
          vertical-align: middle;
        }
      }
      &:hover {
        cursor: pointer;
      }
    }
  }
  &.active {
    transform: rotate(0deg) !important;
    .menu {
      transform: scale(0.7);
      .bar {
        top: 50%;
        margin-top: -1.5px;
        left: 66%;
        margin-left: -12px;
        transform-origin: 50% 50%;
        transform: rotate(405deg);
        &:before {
          transform-origin: 50% 50%;
          transform: rotate(-450deg);
          margin-top: 0px;
        }
        &:after {
          opacity: 0;
        }
      }
    }
  }
}
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0px);
  }
  10% {
    transform: translateY(6px);
  }
  30% {
    transform: translateY(-4px);
  }
  70% {
    transform: translateY(3px);
  }
  90% {
    transform: translateY(-2px);
  }
}
</style>
