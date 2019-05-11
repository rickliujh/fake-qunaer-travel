<template>
  <div class="introduction">
    <div class="info">
      <div class="info-item border-right">
        <div>
          <span class="item-score">5.0</span>
          <span class="item-text">分</span>
          <span class="item-desc">超赞</span>
        </div>
        <div>
          <span class="item-comment-num">109条评论</span>
          <div class="iconfont go-icon">&#xe624;</div>
        </div>
      </div>
      <div class="info-item">
        <div class="info-summary">
          <div class="summary-text">景点简介</div>
          <div class="summary-desc">开放时间、贴士</div>
        </div>
        <div class="iconfont go-icon">&#xe624;</div>
      </div>
    </div>
    <div class="address border-top">
      <div>
        <div class="iconfont address-icon">&#xe78e;</div>
        <div class="address-text">
          杭州市余杭区五常街道五常大道龙舌嘴主出入口（西溪印象城对面）
        </div>
        <div class="iconfont go-icon address-go-icon">&#xe624;</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailIntroduction'
}
</script>

<style lang="stylus" scoped>
.introduction
  position relative
  padding .1rem .2rem
  bottom .1rem
  // width 100%
  height 0
  padding-bottom 32%
  border-radius .1rem .1rem 0 0
  background #fff
  .go-icon
    position absolute
    top .22rem
    right .2rem
    font-size .3rem
    transform scaleX(-1)
  .info
    display flex
    width 100%
    padding .1rem 0
    .info-item
      position relative
      flex 1
      font-size 0
      padding-left .1rem
      background #fff
      .item-score
        font-size .44rem
        line-height .5rem
        color #ff8300
      .item-text
        font-size .28rem
        color #ff8300
      .item-desc
        margin-left .2rem
        font-size .28rem
        color #ff8300
      .item-comment-num
        font-size .24rem
        color #9e9e9e
    .info-summary
      padding-left .2rem
      .summary-text
        line-height .5rem
        font-size .28rem
      .summary-desc
        font-size .24rem
        color #9e9e9e
  .address
    position relative
    margin-top .2rem
    padding-top .3rem
    .address-icon
      position absolute
      top .28rem
      left .1rem
    .address-text
      padding-left .56rem
      padding-right .56rem
    .address-go-icon
      top .44rem
</style>
