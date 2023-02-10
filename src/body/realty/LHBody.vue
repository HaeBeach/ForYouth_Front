<template>
    <div id="title">
        LH청약정보
        <div id="page-size">
            <select name="pageSize">
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
        <tr>
            <td id="column1">1</td>
            <td id="column2">청년매입임대주택 모집공고</td>
            <td id="column3">매입임대</td>
            <td id="column4">청약센터 바로가기</td>
        </tr>
    </table>
    <div id="pagination">
        <div id="left2">
            <a href="/">
                <img alt="2left" src="../../assets/2left.png">
            </a>
        </div>
        <div id="left1">
            <a href="/">
                <img alt="1left" src="../../assets/1left.png">
            </a>
        </div>

        <div id="page-number" v-for="i in lastPageNumber" :key={i}>
            <div>
                {{ i }}
            </div>
        </div>

        <div id="right1">
            <a href="/">
                <img alt="1right" src="../../assets/1right.png">
            </a>
        </div>
        <div id="right2">
            <a href="/">
                <img alt="2right" src="../../assets/2right.png">
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'LHBody',
    data() {
        return {
            currentPage: 1,
            lastPageNumber: 10,
            totalPageNumber: 30,
            pageSize: 10
        };
    },
    created() {
        
    },
    methods: {

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