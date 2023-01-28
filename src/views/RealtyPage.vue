<template>
    <div id="sidebar">
        <RealtySidebar/>
    </div>
    <div>
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
</style>