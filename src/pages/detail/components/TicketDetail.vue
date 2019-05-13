<template>
  <div class="ticket">
    <div class="ticket-item-right">
      <h6 class="ticket-title">【龙舌嘴入口】西溪洪园成人票</h6>
      <div class="ticket-status">
        <img class="ticket-status-icon" src="https://img1.qunarzz.com/piao/fusion/1804/25/792e9929973a9902.png">
        可订明日
      </div>
      <div class="ticket-explanation">
        <span class="ticket-explanation-item border">
          随时退
        </span>
      </div>
      <div class="ticket-sell">
        <div class="ticket-sell-company">去哪儿直销</div>
        <span class="border-right"></span>
        <div class="ticket-sell-notice">订票须知</div>
        <div class="iconfont ticket-sell-icon">&#xe624;</div>
      </div>
    </div>
    <div class="ticket-item-left">
      <div class="ticket-price">
        ￥<span class="ticket-price-num">70</span>
      </div>
      <div class="ticket-buy-btn">预定</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailTicketDetail'
}
</script>

<style lang="stylus" scoped>
.ticket
  display flex
  align-items center
  // width 100%
  background #eee
  padding .2rem
  .ticket-item-right
    flex 2.92
    color #616161
    .ticket-title
      display -webkit-box
      overflow hidden
      text-overflow ellipsis
      -webkit-line-clamp 2
      -webkit-box-orient vertical
      padding 0
      font-size .28rem
      line-height .4rem
    .ticket-status
      font-size .24rem
      line-height .28rem
      .ticket-status-icon
        width .2rem
        vertical-align 0 //垂直居中
    .ticket-explanation
      .ticket-explanation-item
        display inline-block
        margin-top .08rem
        padding 0 .04rem
        font-size .2rem
        color #00afc7
        line-height .32rem
        white-space nowrap
      .border:before
        border-color #00afc7
        border-radius .08rem
    .ticket-sell
      margin-top .08rem
      font-size .24rem
      line-height .32rem
      .ticket-sell-company
        display inline-block
        padding-right .08rem
      .border-right:before
        border-color #bdbdbd
      .ticket-sell-notice
        display inline-block
        padding-left .1rem
      .ticket-sell-icon
        display inline-block
        transform scaleX(-1)
        font-size .2rem
  .ticket-item-left
    overflow hidden
    flex 1
    margin-left .2rem
    .ticket-price
      color #ff9800
      font-size .24rem
      text-align center
      .ticket-price-num
        font-size .4rem
    .ticket-buy-btn
      // height .6rem
      color #fff
      font-size .28rem
      line-height .6rem
      border-radius .08rem
      text-align center
      background-image linear-gradient(130deg , #ffab1e 37%, #ff8c12 100%)
</style>
