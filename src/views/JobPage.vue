<template>
    <div id="sidebar">
        <JobSidebar/>
    </div>
    <div id="body">
        JobPage
        <router-view></router-view>
    </div>
</template>
<script>
import JobSidebar from '../components/JobSidebar.vue'

export default {
  name: 'JobPage',
  components: {
    JobSidebar
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