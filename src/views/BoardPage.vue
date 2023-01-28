<template>
    <div id="sidebar">
        <BoardSidebar/>
    </div>
    <div>
        BoardPage
    </div>
</template>
<script>
import BoardSidebar from '../components/BoardSidebar.vue'

export default {
  name: 'BoardPage',
  components: {
    BoardSidebar
  }
}
</script>
<style>
    #sidebar {
        float: left;
    }
</style>