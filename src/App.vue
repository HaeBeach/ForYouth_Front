<template>
  <HeaderCom/>
  <BodyCom/>
  <!-- <div id="content" class="content">
    <router-view></router-view>
  </div> -->
</template>

<script>
import HeaderCom from './components/HeaderCom.vue'
import BodyCom from './components/BodyCom.vue'

export default {
  name: 'App',
  components: {
    HeaderCom,
    BodyCom
  }
}
</script>

<style>
  body {
    margin: 0px;
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
