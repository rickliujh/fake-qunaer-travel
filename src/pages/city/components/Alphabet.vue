<template>
  <ul class="list">
    <li class="item"
      v-for="item of letters"
      :key="item"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      :ref="item"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  computed: {
    letters () {
      let letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('letterChange', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        setTimeout(() => {
          let touchY = e.touches[0].clientY - 79
          let index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('letterChange', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles'
.list
  display flex
  flex-direction column
  justify-content center
  position absolute
  right 0
  top 1.6rem
  bottom 0
  width .4rem
  .item
    line-height .4rem
    text-align center
    color $bgColor
</style>
