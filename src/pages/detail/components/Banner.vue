<template>
  <div>
    <div class="banner" @click="toggleGallery">
      <img class="banner-img" :src="img">
      <div class="banner-info">
        <div class="banner-title">{{title}}</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe730;</span> {{galleryImgs.length}}</div>
      </div>
    </div>
    <fade-animation>
      <common-gallery
        :imgs="galleryImgs"
        v-show="isShowGallery"
        @galleryClick="toggleGallery"
      ></common-gallery>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallery from '@/common/gallery/Gallery'
import FadeAnimation from '@/common/animations/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallery,
    FadeAnimation
  },
  props: {
    title: String,
    img: String,
    galleryImgs: Array
  },
  data () {
    return {
      isShowGallery: false
    }
  },
  methods: {
    toggleGallery () {
      this.isShowGallery = !this.isShowGallery
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner
  position relative
  overflow hidden
  height 0
  padding-bottom 55%
  .banner-img
    width 100%
  .banner-info
    display flex
    align-items center
    position absolute
    bottom 0
    right 0
    left 0
    line-height .8rem
    color #fff
    background-image linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8))
    .banner-title
      flex 1
      font-size .38rem
      padding 0 .2rem
      margin-bottom .1rem
    .banner-number
      align-self center
      padding 0 .4rem
      height .4rem
      line-height .4rem
      // margin-top .2rem
      margin-right .2rem
      border-radius .2rem
      background rgba(0 , 0, 0, .8)
      .banner-icon
        font-size .28rem
</style>
