<template>
  <div id="app">
    <Header></Header>
    <Video/>
  </div>
</template>

<script>
import Video from './components/video.vue'
import Header from './components/head.vue'

export default {
  name: 'App',
  components: {
    Header,
    Video
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
