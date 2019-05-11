<template>
  <div>
    <div class="banner" @click="toggleGallery">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1904/a2/a23ae48aac0c0ab2a3.water.jpg_600x330_405288ba.jpg">
      <div class="banner-info">
        <div class="banner-title">西溪国家湿地洪园</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe730;</span> {{imgs.length}}</div>
      </div>
    </div>
    <common-gallery :imgs="imgs" v-show="isShowGallery" @galleryClick="toggleGallery"></common-gallery>
  </div>
</template>

<script>
import CommonGallery from '@/common/gallery/Gallery'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallery
  },
  data () {
    return {
      isShowGallery: false,
      imgs: [
        'http://img1.qunarzz.com/sight/p0/1904/6d/6dd775aa7d985158a3.water.jpg_r_800x800_ba5cbbe0.jpg',
        'http://img1.qunarzz.com/sight/p0/1904/87/87df7b4b2415ca29a3.water.jpg_r_800x800_0032b2e7.jpg'
      ]
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
