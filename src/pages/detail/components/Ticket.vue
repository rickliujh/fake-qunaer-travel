<template>
  <div class="container">
    <div class="title border-bottom">门票
      <div class="title-line"></div>
    </div>
    <div
      class="ticket-type"
      v-for="(item, index) of list"
      :key="index"
    >
      <div class="ticket-type-title border-bottom">
        <span class="ticket-type-title-icon"></span>
        {{item.title}}
      </div>
      <div
        class="ticket-item border-bottom"
        v-for="(ticketInfo, key) of item.ticketType"
        :key="key"
      >
        <div
          class="ticket-name border-bottom"
          @click="handleTicketClick(index,key)"
        >
          <h5 class="ticket-name-text">{{ticketInfo.title}}</h5>
          <div class="ticket-name-price">
            ￥<em class="ticket-name-num">{{ticketInfo.price}}</em><span class="ticket-name-word">起</span>
          </div>
          <div class="iconfont ticket-name-icon">&#xe624;</div>
        </div>
        <in-out-animation>
          <div v-show="showDetailFlags[index][key].isShow">
            <ticket-detail
              :ticketDetail="ticket"
              v-for="(ticket, idx) of ticketInfo.tickets"
              :key="idx"
            ></ticket-detail>
          </div>
        </in-out-animation>
      </div>
    </div>
  </div>
</template>

<script>
import TicketDetail from './TicketDetail'
import InOutAnimation from '@/common/animations/inout/InOutAnimation'
export default {
  name: 'DetailTicket',
  props: {
    list: Array
  },
  components: {
    TicketDetail,
    InOutAnimation
  },
  data () {
    return {
      showDetailFlags: []
    }
  },
  methods: {
    handleTicketClick (index, key) {
      this.showDetailFlags[index][key].isShow = !this.showDetailFlags[index][key].isShow
    }
  },
  beforeMount () {
    let result = []
    for (const key in this.list) {
      result[key] = []
      if (!this.list[key].ticketType) { break }
      for (const index in this.list[key].ticketType) {
        result[key][index] = {isShow: false}
      }
    }
    this.showDetailFlags = result
  }
}
</script>

<style lang="stylus" scoped>
.container
  background #fff
  .title
    position relative
    margin-top .1rem
    padding .3rem 0
    line-height .5rem
    text-align center
    font-size .4rem
    .title-line
      position absolute
      bottom 0
      right 3rem
      width 20%
      height .05rem
      background #00bcd4
  .ticket-type-title
    line-height .9rem
    padding-left .66rem
    font-size .32rem
  .ticket-type-title-icon
    display inline-block
    position absolute
    width .36rem
    height .36rem
    top .28rem
    left .2rem
    background url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
    background-image url(http://s.qunarzz.com/piao/image/touch/sight/detail.png)
    background-position-x 0px
    background-position-y -0.45rem
    background-size .4rem 3rem
    background-repeat-x no-repeat
    background-repeat-y no-repeat
    background-attachment initial
    background-origin initial
    background-clip initial
    background-color initial
    margin-right .1rem
    background-size .4rem 3rem
  .ticket-item
    .ticket-name
      position relative
      padding .24rem .2rem
      .ticket-name-text
        display -webkit-box
        overflow hidden
        text-overflow ellipsis
        -webkit-line-clamp 2
        -webkit-box-orient vertical
        margin-right 1.35rem
        line-height .48rem
        font-size .3rem
        color #333
      .ticket-name-price
        overflow hidden
        position absolute
        top 35%
        right .5rem
        line-height .4rem
        font-size .24rem
        color #ff9800
        .ticket-name-num
          font-size .4rem
        .ticket-name-word
          font-size .24rem
          color #9e9e9e
      .ticket-name-icon
        position absolute
        top 50%
        right .2rem
        font-size .2rem
        color #9e9e9e
        transform rotate(-90deg)
</style>
