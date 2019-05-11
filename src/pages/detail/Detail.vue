<template>
  <div class="container">
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <!-- <detail-introduction></detail-introduction> -->
    <detail-list :list="list"></detail-list>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
// import DetailIntroduction from './components/Introduction'
import DetailList from './components/List'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    // DetailIntroduction,
    DetailList
  },
  data () {
    return {
      list: [{
        title: '成人票',
        children: [{
          title: '成人三张联票',
          'children': [{
            'title': '成人三馆联票 - 某一连锁店销售'
          }]
        }, {
          title: '成人五张联票'
        }]
      }, {
        title: '学生票'
      }, {
        title: '儿童票'
      }, {
        title: '特惠票'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  background #eee
  .content
    height 50rem
</style>
