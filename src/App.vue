<template>
  <HeaderCom/>
  <div id="content" class="content">
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderCom from './components/HeaderCom.vue'

export default {
  name: 'App',
  components: {
    HeaderCom
  }
}
</script>

<style>
  body {
    margin: 0px;
  }
  #content {
    margin: auto;
    width: 1440px;
    height: 100%;
    margin-top: 10px;
  }
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
} */
</style>
