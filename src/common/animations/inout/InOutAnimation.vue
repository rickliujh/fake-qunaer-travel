<template>
  <transition name='inout'>
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'InOutAnimation'
}
</script>

<style lang="stylus" scoped>
.inout-enter-active, .inout-leave-active
  overflow hidden
  transition .5s max-height ease-in-out
  max-height 10rem
.inout-enter, .inout-leave-to
  max-height 0
</style>
