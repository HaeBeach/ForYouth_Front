<template>
    <div id="sidebar">
        <Sidebar/>
    </div>
    <div>
        JobPage
    </div>
</template>
<script>
import Sidebar from '../components/SidebarCom.vue'

export default {
  name: 'JobPage',
  components: {
    Sidebar
  }
}
</script>
<style>
    #sidebar {
        float: left;
    }
</style>