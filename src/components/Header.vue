<template>
  <div id="background">

    <div id="logo">
      <img alt="logo" src="../assets/ForYouthlogo.png">
    </div>

    <div id="menu">
      <div class="menuButton">
        부동산
      </div>
      <div class="menuButton">
        취업
      </div>
      <div class="menuButton">
        게시판
      </div>
    </div>

    <div id="profileImage">
      <img class="profileImage" src="../assets/ForYouthlogo.png">
    </div>
    <div id="profile">
      idExample
    </div>

  </div>
</template>

<script>
export default {
  name: 'HeaderCom'
}
</script>
<style scoped>
  #background {
    margin: auto;
    width: 1440px;
    height: 72px;
    align-items: center;
    background-color: #8177EE;
  }
  #logo {
    width: 212px;
    margin-top: 20px;
    text-align: center;
    float: left;
  }
  #menu {
    width: 675px;
    margin-top: 20px;
    text-align: center;
    float: left;
  }
  #profile {
    width: 212px;
    margin-top: 22px;
    text-align: right;
    color: #FFFFFF;
    font-size: 24px;
    float: right;
  }
  #profileImage {
    width: 32px;
    height: 32px;
    margin-top: 20px;
    padding-left: 8px;
    padding-right: 8px;
    text-align: center;
    float: right;
  }

  div.menuButton {
    width: 150px;
    margin-top: 2px;
    text-align: center;
    color: #FFFFFF;
    font-size: 24px;
    float: left;
  }
  img.profileImage {
    width: 32px;
    height: 32px;
    border-radius: 100%;
  }

  @media (max-width: 1440px) {
    #background {
      margin: auto;
      width: 100%;
      min-height: 0;
      padding-top: 0;
      position: relative;
    }
  }
</style>
