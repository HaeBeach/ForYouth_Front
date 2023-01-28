<template>
    <div id="sidebar">
        <Sidebar/>
    </div>
    <div>
        BoardPage
    </div>
</template>
<script>
import Sidebar from '../components/SidebarCom.vue'

export default {
  name: 'BoardPage',
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