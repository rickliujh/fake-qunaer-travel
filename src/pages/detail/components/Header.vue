<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="isShowAbs">
      <div class="iconfont back-icon">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!isShowAbs" :style="opacityStyle">
      景点详情
      <router-link to="/">
      <div class="iconfont header-fixed-back">&#xe624;</div>
    </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      isShowAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        this.isShowAbs = false
        let opacity = top / 180
        this.opacityStyle.opacity = opacity > 1 ? 1 : opacity
      } else {
        this.isShowAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles'
.header-abs
  position absolute
  top .2rem
  left .2rem
  width .7rem
  height .7rem
  line-height .7rem
  text-align center
  border-radius .35rem
  background rgba(0,0,0,0.8)
  .back-icon
    color #fff
    font-size .3rem
.header-fixed
  z-index 2
  position fixed
  top 0
  width 100%
  height $headerHeight
  line-height $headerHeight
  background $bgColor
  text-align center
  color #fff
  font-size .32rem
  .header-fixed-back
    position absolute
    top 0
    left 0
    width .64rem
    text-align center
    font-size .4rem
    color #fff
</style>
