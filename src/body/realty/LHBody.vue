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
</template>
<script>

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