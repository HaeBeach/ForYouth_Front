<template>
  <div id="background">

    <a id="logo" href="http://localhost:8080">
      <img alt="logo" src="../assets/ForYouthlogo.png">
    </a>

    <div id="menu">
      <a class="menuButton" href="http://localhost:8080/realty">
        부동산
      </a>
      <a class="menuButton" href="http://localhost:8080/job">
        취업
      </a>
      <a class="menuButton" href="http://localhost:8080/board">
        게시판
      </a>
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

  a.menuButton {
    width: 150px;
    margin-top: 2px;
    text-align: center;
    color: #FFFFFF;
    font-size: 24px;
    float: left;
    text-decoration: none;
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
