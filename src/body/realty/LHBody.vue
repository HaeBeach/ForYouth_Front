<template>
    <div id="title">
        LH청약정보
        <div id="page-size">
            <select name="pageSize" v-model="pageSize" @change="loadTableBody(1)">
                <option value="10">10개씩 보기</option>
                <option value="30">30개씩 보기</option>
                <option value="50">50개씩 보기</option>
            </select>
        </div>
    </div>
    <table>
        <tr id="table-title">
            <td id="column1">번호</td>
            <td id="column2">제목</td>
            <td id="column3">유형</td>
            <td id="column4">상세</td>
        </tr>
        <tr v-for="i in noticeList.length" :key={i}>
            <td id="column1">{{ firstIndex + i }}</td>
            <td id="column2">{{ noticeList[i - 1].bbsTl }}</td>
            <td id="column3">{{ noticeList[i - 1].aisTpCdNm }}</td>
            <td id="column4">청약센터 바로가기</td>
        </tr>
    </table>
    <div id="pagination">
        <div id="left2">
            <button id="noCurPage" @click="loadTableBody(1)">
                <img alt="2left" src="../../assets/2left.png">
            </button>
        </div>
        <div id="left1">
            <button id="noCurPage" @click="loadTableBody(this.currentPage - 1)">
                <img alt="1left" src="../../assets/1left.png">
            </button>
        </div>

        <div id="page-number" v-for="i in lastPageNumber - firstPageNumber + 1" :key={i}>
            <button id="curPage" v-if="firstPageNumber + i - 1 === currentPage" @click="loadTableBody(firstPageNumber + i - 1)">
                {{ firstPageNumber + i - 1 }}
            </button>
            <button id="noCurPage" v-if="firstPageNumber + i - 1 !== currentPage" @click="loadTableBody(firstPageNumber + i - 1)">
                {{ firstPageNumber + i - 1 }}
            </button>
        </div>

        <div id="right1">
            <button id="noCurPage" @click="loadTableBody(this.currentPage + 1)">
                <img alt="1right" src="../../assets/1right.png">
            </button>
        </div>
        <div id="right2">
            <button id="noCurPage" @click="loadTableBody(this.totalPageNumber)">
                <img alt="2right" src="../../assets/2right.png">
            </button>
        </div>
    </div>
</template>
<script>
import axios from "axios";
const { VUE_APP_BACK_SERVICE_HOST, VUE_APP_BACK_SERVICE_PORT } = process.env;

export default {
    name: 'LHBody',
    data() {
        return {
            currentPage: 1,         // 현재 페이지 (사용자 입력 변수)
            firstPageNumber: 1,     // pagination의 첫번째 페이지 번호
            lastPageNumber: 10,     // pagination의 마지막 페이지 번호
            totalPageNumber: 30,    // 총 페이지 수 (api 응답)
            pageSize: 10,           // 페이지당 list 갯수 (select box로 변경)
            firstIndex: 1,          // 현재 페이지의 첫번째 list 번호
            noticeList: []
        };
    },
    async created() {
        await this.loadTableBody(1);
    },
    methods: {
        loadTableBody: async function(currentPage) {
            console.log("===currentPage===");
            console.log(currentPage);
            if (currentPage < 1)
                return;
            else if (currentPage > this.totalPageNumber)
                return;
            const res = await axios.get(`http://${VUE_APP_BACK_SERVICE_HOST}:${VUE_APP_BACK_SERVICE_PORT}/realty/lh/pageSize/${this.pageSize}/pageNumber/${currentPage}`);
            console.log(res);
            this.currentPage = currentPage;
            this.totalPageNumber = (res.data.object[0].allCnt % this.pageSize > 0) ? parseInt(res.data.object[0].allCnt / this.pageSize) + 1 : parseInt(res.data.object[0].allCnt / this.pageSize);
            this.firstPageNumber = this.currentPage - ((this.currentPage - 1) % 10);
            this.lastPageNumber = (this.totalPageNumber >= this.firstPageNumber + 9) ? this.firstPageNumber + 9 : this.totalPageNumber;
            this.firstIndex = (this.currentPage - 1) * this.pageSize;
            this.noticeList = res.data.object;            
            
            console.log(res);
            console.log(this.noticeList);
            console.log(this.noticeList[0]);
            console.log(this.noticeList[0].bbsTl);
        }
    }
}
</script>
<style>
    #title {
        width: 1212px;
        height: 80px;
        font-size: 40px;
        margin-top: 20px;
    }
    #table-title {
        font-weight: bold;
        background-color: rgba(129, 119, 238, 0.5);
    }
    #page-size {
        height: 80px;
        float: right;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
    #column1 {
        width: 50px;
    }
    #column2 {
        width: 758px;
    }
    #column3 {
        width: 200px;
    }
    #column4 {
        width: 200px;
    }
    #pagination {
        width: 1212px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #page-number {
        padding-left: 8px;
        padding-right: 8px;
    }
    #left2 {
        padding-right: 8px;
    }
    #left1 {
        padding-right: 8px;
    }
    #right1 {
        padding-left: 8px;
    }
    #right2 {
        padding-left: 8px;
    }
    #noCurPage {
        border: 0;
        padding: 0px;
        cursor: pointer;
        background-color: transparent;
    }
    #curPage {
        padding: 0px;
        cursor: pointer;
    }

    tr {
        height: 40px;
    }
    td {
        padding-left: 8px;
        border: 1px solid #8177EE;
    }
    table {
        width: 1212px;
        font-size: 20px;
        border: 4px solid #8177EE;
        border-spacing: 0px;
    }
</style>