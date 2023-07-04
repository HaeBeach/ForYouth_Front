<template>
    <div id="authBodyBackground">
        <div id="authbox1">
            <div id="authBodyLogo">
                <img alt="logo" src="../assets/ForYouthlogo.png">
            </div>
            <div id="authbox2">
                <button id="googleButton" @click="doGoogleLogin()">
                    <div id="googleIcon">
                        <img id="googleIcon" alt="googleIcon" src="../assets/google_icon.png">
                    </div>
                    <div id="googleButtonName">
                        Google로 로그인하기
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import cookies from "js-cookie";
const { VUE_APP_GOOGLE_AUTH_URL,
        VUE_APP_GOOGLE_CLIENT_ID,
        VUE_APP_GOOGLE_SIGNIN_REDIRECT_URL,
        VUE_APP_GOOGLE_RESPONSE_TYPE,
        VUE_APP_GOOGLE_SCOPE } = process.env;

export default {
    name: 'GoogleSigninPage',
    data() {

    },
    methods: {
        doGoogleLogin: async function() {
            const url = VUE_APP_GOOGLE_AUTH_URL
                        + VUE_APP_GOOGLE_CLIENT_ID
                        + '&redirect_uri=' + VUE_APP_GOOGLE_SIGNIN_REDIRECT_URL
                        + '&response_type=' + VUE_APP_GOOGLE_RESPONSE_TYPE
                        + '&scope=' + VUE_APP_GOOGLE_SCOPE;

            console.log("google url : " + url);
            await this.showSocialLoginPopup(url);
            console.log("email test : " + cookies.get("email"));
        },
        showSocialLoginPopup: async function(url) {
            const popupHeight = '500'
            const popupWidth = '500'
            let popupOptions = 'height=--popupHeight--,width=--popupWidth--,left=--popupX--,top=--popupY--,scrollbars=yes,resizable=yes'

            popupOptions = popupOptions.replace('--popupHeight--', popupHeight)
            popupOptions = popupOptions.replace('--popupWidth--', popupWidth)

            this.openPopup(url, popupOptions)
            return false
        },
        openPopup: async function(url, options) {
            window.open(
                url,
                '_blank',
                options
            )
        }
    }
}

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
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        background-color: rgba(255, 255, 255);
    }
    
    #googleIcon {
        width: 30px;
        height: 30px;
    }

    #googleButtonName {
        width: 180px;
        text-align: center;
        font-size: 20px;
    }
</style>