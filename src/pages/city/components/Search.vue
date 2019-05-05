<template>
  <div>
    <div class="search">
    <input
      class="search-input"
      type="text"
      placeholder="请输入城市名或拼音"
      v-model="keyword"
    >
    </div>
    <div class="search-content" ref="content" v-show="keyword">
      <ul>
        <li
          class="search-item border-topbottom"
          v-for="item of list"
          :key="item.id"
        >
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="isNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    isNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (!this.keyword) {
        this.list = []
        return
      }
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const result = []
        for (const i in this.cities) {
          this.cities[i].forEach(value => {
            if (value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.content)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles'
.search
  height .74rem
  padding 0 .1rem
  background $bgColor
  .search-input
    box-sizing border-box
    width 100%
    height .62rem
    padding 0 .1rem
    line-height .62rem
    text-align center
    border-radius .06rem
    color #666
.search-content
  z-index 1
  overflow hidden
  position absolute
  top 1.59rem
  right 0
  left 0
  bottom 0
  background #ccc
  .search-item
    line-height .62rem
    padding-left .2rem
    color #666
    background #fff
</style>
