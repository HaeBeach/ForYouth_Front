<template>
  <div id="background">

    <a id="logo" href="/">
      <img alt="logo" src="../assets/ForYouthlogo.png">
    </a>

    <div id="menu">
      <div id="menuButton">
        <a href="/realty">
          부동산
        </a>
      </div>
      <div id="menuButton">
        <a href="/job">
          취업
        </a>
      </div>
      <div id="menuButton">
        <a href="/board">
          게시판
        </a>
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
  #menuButton {
    width: 150px;
    margin-top: 2px;
    text-align: center;
    font-size: 24px;
    float: left;
  }

  a {
    color: #FFFFFF;
    text-decoration: none;
  }
  img.profileImage {
    width: 32px;
    height: 32px;
    border-radius: 100%;
  }

  /* @media (max-width: 1440px) {
    #background {
      margin: auto;
      width: 100%;
      min-height: 0;
      padding-top: 0;
      position: relative;
    }
  } */
</style>
