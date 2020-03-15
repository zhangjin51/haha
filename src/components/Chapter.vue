<template>
    <div class="container" :style="styleObject">
        <img
            class="lazy"
            v-for="(item) in 25"
            :key="item"
            :data-original="urlFilter(item)"
            width="100%"
            height="100%"
            :src="urlFilter(item)"
            style="display: block;"
        />
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    props:{
        chapterNumber:{
            required: true
        }
    },
    data() {
        return {
            pictureLength: 16,
            chapterBase: 102711,
            IsPC: Vue.IsPC,
        };
    },
    computed: {
        styleObject() {
            if(this.IsPC){
                return {}
            }else{
                return {
                    width: '100%',
                }
            }
        }
    },
    methods:{
        urlFilter(index) {
            return `https://qcdna.com/files/80838/${this.chapterBase+this.chapterNumber}/${index}.jpg`
        }
    },
    mounted() {
        // const imageList = document.getElementsByTagName('img');
        
        // for(let i=0; i<imageList.length; i++){
        //     // console.log(imageList[i].style)
        //     imageList[i].onload = function () {
        //         console.log(this.style)
        //     }
        //     if(imageList[i].style.height === 26){
        //         imageList[i].style.display = "none"
        //     }
        // }
    }
};
</script>

<style lang="less" scoped>
    .container{
        width: 60%;
        margin: 0 auto;
    }
</style>
