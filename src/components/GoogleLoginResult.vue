<template>
    <div id="body">
        Google Login 성공
    </div>
</template>
<script>
import axios from "axios";
import cookies from "js-cookie";
const { VUE_APP_BACK_SERVICE_HOST, VUE_APP_BACK_SERVICE_PORT } = process.env;

export default {
    name: "GoogleLoginResult",
    async created() {
        console.log(this.$route.query.code);
        const apiUri = `http://${VUE_APP_BACK_SERVICE_HOST}:${VUE_APP_BACK_SERVICE_PORT}/auth/google/getToken`;
        const body = {
            code: this.$route.query.code
        };

        // const service = axios.create({
        //     baseURL: `http://${VUE_APP_BACK_SERVICE_HOST}:${VUE_APP_BACK_SERVICE_PORT}`,
        //     withCredentials: false,
        // });
        // service.interceptors.request.use(
        //     config => {
        //         config.headers['Content-Type'] = 'application/json;charset=UTF-8'
        //         config.headers['Access-Control-Allow-Origin'] = '*'
        //         config.headers['Access-Control-Allow-Headers'] = '*'
        //         return config
        //     },
        //     error => {
        //         // Do something with request error
        //         Promise.reject(error)
        //     }
        // )
        const res = await axios.post(apiUri, body);
        console.log(res);
        console.log(res.data.object);
        
        cookies.set("email", res.data.object.email);
        // window.opener.location.replace('/');
        // window.close();
    }
}
</script>
<style scoped>
    #body {
        width: 180px;
        height: 180px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 20px;
    }
</style>