<template>
  <transition :name="transitionName">
    <slot>
      <div>

      </div>
    </slot>
  </transition>
</template>

<script>
export default {
  name: 'PageInOutAnimation',
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  watch: {
    '$route' (to, from) {
      let r = /[a-zA-Z0-9]+/
      const toDepth = to.path.split(r).length
      const fromDepth = from.path.split(r).length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
</script>

<style lang="stylus" scoped>
div
  position absolute
  width 100%
  transition  all .8s cubic-bezier(.55,0,.1,1)
.slide-left-enter, .slide-right-leave-active
  opacity  0
  -webkit-transform  translate(50px, 0)
  transform  translate(50px, 0)
.slide-left-leave-active, .slide-right-enter
  opacity  0
  -webkit-transform  translate(-50px, 0)
  transform  translate(-50px, 0)
</style>
