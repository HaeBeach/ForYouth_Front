<template>
    <div id="authBodyBackground">
        <div id="authbox1">
            <div id="authBodyLogo">
                <img alt="logo" src="../assets/ForYouthlogo.png">
            </div>
            <div id="authbox2">
                <button id="googleButton"></button>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style>
    #authBodyBackground {
        width: 1440px;
        height: 800px;
        display: flex;
        justify-content: center;
        background-color: rgba(217, 217, 217, 0.5);
    }

    #authbox1 {
        width: 480px;
        height: 300px;
        margin-top: 180px;
    }

    #authbox2 {
        width: 480px;
        height: 240px;
        display: flex;
        justify-content: center;
        background-color: rgba(129, 119, 238, 0.5);
        border-radius: 3%;
    }

    #authBodyLogo {
        width: 212px;
        height: 48px;
    }

    #googleButton {
        width: 360px;
        height: 36px;
        margin-top: 120px;
        background-color: rgba(255, 255, 255);
    }
</style>