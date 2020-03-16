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
            chapterBase: 1,
            chapterNumber: 0,
            vip: false
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
            if(this.chapterNumber < 1 || this.vip) {
                this.chapterNumber++
                this.scrollToTop();
            }else{
                // this.$message.error('想继续看的话请联系管理员!');
                this.showPrompt();
            }
        },
        showPrompt() {
            this.$prompt('请输入vip账号', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
            }).then(({ value }) => {
                if(value === "520520") {
                    this.$message({
                        type: 'success',
                        message: '您好尊贵的vip'
                    });
                    this.vip = true;
                    this.handleNext();
                }else {
                    this.$message({
                        type: 'error',
                        message: '您的vip账号有误'
                    });
                }
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '取消输入'
                });       
            });
      
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
        bottom: 20px;
        .title{
            font-size: 16px;
            font-weight: bold;
            font-style: italic;
            padding: 0 15px;
        }
    }
}
</style>
