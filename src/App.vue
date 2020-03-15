<template>
    <div id="app">
        <div class="button_group">
            <el-button type="primary" @click="handlePre">上一章</el-button>
            <span class="title">
                第{{chapterBase+chapterNumber}}话
            </span>
            <el-button type="success" @click="handleNext">下一章</el-button>
        </div>
        <Chapter :chapterNumber="chapterNumber"/>
    </div>
</template>

<script>
import Chapter from "./components/Chapter";

export default {
    name: "app",
    data(){
        return {
            chapterBase: 8,
            chapterNumber: 0
        }
    },
    components: {
        Chapter,
    },
    methods:{
        handlePre() {
            if(this.chapterNumber > 0){
                this.chapterNumber--
            }
        },
        handleNext() {
            this.chapterNumber++
            this.scrollToTop();
        },
        scrollToTop() {
            document.body.scrollIntoView();
        }
    }
};
</script>

<style lang="less">
html, body{
    width: 100%;
    margin: 0;
    padding: 0;
}
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    .button_group{
        margin-bottom: 10px;
        padding-top: 10px;
        width: 100%;
        position: fixed;
        .title{
            font-size: 16px;
            font-weight: bold;
            font-style: italic;
            padding: 0 15px;
        }
    }
}
</style>
