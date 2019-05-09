<template>
  <div class="container" @click="handleGalleryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item,index) in imgs" :key="index">
          <img
            class="gallery-img"
            :src="item"
          >
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination" slot="pagination"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGralery',
  props: {
    imgs: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGalleryClick () {
      this.$emit('galleryClick')
    }
  }
}
</script>

<style lang="stylus" scoped>
.container >>> .swiper-wrapper
  align-items center
.container
  display flex
  // flex-direction column
  // justify-content center
  // z-index 99
  position fixed
  top 0
  height 100%
  width 100%
  background black
  .wrapper
    display flex
    align-items center
    width 100%
    height 100%
    .gallery-img
      width 100%
    .swiper-pagination
      color #fff
      width 100%
      bottom 1rem
</style>
