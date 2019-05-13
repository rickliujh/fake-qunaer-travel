<template>
  <div id="app">
    <keep-alive> //缓存例外 Detail 组件 exclude="Detail"
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
