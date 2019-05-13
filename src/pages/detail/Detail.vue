<template>
  <div class="container">
    <detail-banner
      :title="sightName"
      :img="bannerImg"
      :galleryImgs="galleryImgs"
    ></detail-banner>
    <detail-header :title="sightName"></detail-header>
    <detail-introduction></detail-introduction>
    <detail-ticket v-if="categoryList.length" :list="categoryList"></detail-ticket>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailIntroduction from './components/Introduction'
import DetailTicket from './components/Ticket'
import Axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailIntroduction,
    DetailTicket
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      galleryImgs: [],
      categoryList: []
    }
  },
  methods: {
    getDetailData () {
      Axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      if (res.data.ret && res.data.data) {
        const data = res.data.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.galleryImgs = data.galleryImgs
        this.categoryList = data.categoryList
      }
    }
  },
  mounted () {
    this.getDetailData()
  },
  activated () {
    this.getDetailData()
  }
}
</script>

<style lang="stylus" scoped>
.container
  background #f5f5f5
  .content
    height 50rem
</style>
