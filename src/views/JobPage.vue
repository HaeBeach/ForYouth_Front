<template>
    <div id="sidebar">
        <JobSidebar/>
    </div>
    <div>
        JobPage
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
</style>