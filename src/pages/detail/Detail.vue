<template>
  <div class="container">
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-introduction></detail-introduction>
    <detail-ticket :list="ticketList"></detail-ticket>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailIntroduction from './components/Introduction'
import DetailTicket from './components/Ticket'
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
      ticketList: [{
        title: '龙舌嘴&洪园入口',
        ticketType: [{
          title: '西溪湿地成人门票（龙舌嘴主入口）',
          price: '70',
          tickets: {}
        }, {
          title: '西溪湿地成人门车船联票（龙舌嘴主入口）',
          price: '120',
          tickets: {}
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
