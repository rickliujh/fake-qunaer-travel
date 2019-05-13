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
          tickets: [{
            title: '【龙舌嘴入口】西溪洪园成人票',
            price: '70',
            status: '可订明日',
            explanation: [{text: '随时退'}],
            company: '同程旅游'
          }]
        }, {
          title: '西溪湿地成人门车船联票（龙舌嘴主入口）',
          price: '120',
          tickets: [{
            title: '西溪湿地成人门车船联票（龙舌嘴主入口）',
            price: '120',
            status: '可订明日',
            explanation: [
              {text: '自营'},
              {text: '无需换票'},
              {text: '随时退'},
              {text: '赠券￥10.0'}
            ],
            company: '去哪儿直销'
          }, {
            title: '【自动出票】洪园（龙舌嘴入口）门票+车船联票套餐成人票',
            price: '120',
            status: '可订明日',
            explanation: [
              {text: '随时退'}
            ],
            company: '杭州易游'
          }, {
            title: '【即买即用】西溪湿地洪园（龙舌嘴入口）大门票+船票+电瓶车票',
            price: '120',
            status: '可订明日',
            explanation: [
              {text: '随时退'}
            ],
            company: '游在路上'
          }]
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
  background #f5f5f5
  .content
    height 50rem
</style>
