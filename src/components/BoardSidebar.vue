<template>
  <div id="background">
    <div id="title">
      자유게시판
    </div>
  </div>
</template>
<script>
export default {
  name: 'BoardSidebar'
}
</script>
<style scoped>
  #background {
    margin: auto;
    width: 212px;
    height: 1024px;
    align-items: center;
    background-color: rgba(129, 119, 238, 0.5);
    border: 3px solid #8177EE;
    display: flex;
    flex-direction: column;
  }
  #title {
    width: 150px;
    height: 39px;
    font-size: 24px;
    margin-top: 10px;
    margin-bottom: 7.5px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
  #menu {
    width: 150px;
    height: 29px;
    font-size: 16px;
    margin-top: 2.5px;
    margin-bottom: 2.5px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    text-decoration: none;
  }
</style>