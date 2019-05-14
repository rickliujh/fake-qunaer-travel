<template>
  <div id="app">
    <page-in-out-animation>
      <keep-alive> <!-- 缓存例外 Detail 组件 exclude="Detail" -->
        <router-view/>
      </keep-alive>
    </page-in-out-animation>
  </div>
</template>

<script>
import PageInOutAnimation from '@/common/animations/inout/PageInOutAnimation'
export default {
  name: 'App',
  components: {
    PageInOutAnimation
  }
}
</script>

<style lang="stylus" scoped>
</style>
