<template>
    <div id="sidebar">
        <RealtySidebar/>
    </div>
    <div id="body">
        Realty Page
        <router-view></router-view>
    </div>
</template>
<script>
import RealtySidebar from '../components/RealtySidebar.vue'

export default {
  name: 'RealtyPage',
  components: {
    RealtySidebar
  }
}
</script>
<style>
    #sidebar {
        float: left;
    }
    #body {
        padding-left: 10px;
        margin-top: 10px;
        float: left;
    }
</style>