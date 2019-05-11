<template>
  <div class="container">
    <div
      class="item"
      v-for="(item, index) of list"
      :key="index"
    >
      <div class="item-title border-bottom">
        <span class="mp-ticketype-ticket"></span>
        {{item.title}}
      </div>
      <div class="item-children" v-if="item.children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
.container
  background #fff
  .item-title
    line-height .68rem
    padding-left .66rem
    font-size .32rem
  .item-children
    padding 0 .3rem
  .mp-ticketype-ticket
    display inline-block
    position absolute
    width .36rem
    height .36rem
    top .15rem
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
</style>
