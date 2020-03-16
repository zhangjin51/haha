<template>
    <div class="container" :style="styleObject">
        <img
            class="lazy"
            v-for="(item) in pictureLength"
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
            IsPC: Vue.IsPC,
            chapterBase: 102504,
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
        },
        Catalog() {
            let base;
            switch(this.chapterNumber) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    base = this.chapterBase + this.chapterNumber;
                    break;
                case 7:
                    base = 102603;
                    break;
                case 8:
                    base = 102711;
                    break;
                case 9: 
                    base = 102902;
                    break;
                case 10:
                    base = 103015;
                    break;
                case 11:
                    base = 103372;
                    break;
                case 12:
                    base = 103528;
                    break;
                case 13:
                    base = 103636;
                    break;
                case 14:
                    base = 103731;
                    break;
                case 15:
                    base = 103949;
                    break;
            }
            return base;
        },
        pictureLength() {
            let length;
            switch(this.chapterNumber) {
                case 0:
                    length = 21
                    break;
                case 1:
                case 2:
                    length = 16
                    break; 
                case 3:
                    length = 20
                    break;
                case 4:
                    length = 19
                    break;
                case 5:
                    length = 22
                    break;
                case 6:
                    length = 24
                    break;
                case 7:
                    length = 18
                    break;
                case 8:
                    length = 21
                    break; 
                case 9:
                    length = 18
                    break; 
                case 10:
                    length = 22
                    break;
                case 11:
                    length = 28
                    break;
                case 12:
                    length = 27
                    break;
                case 13:
                    length = 24
                    break; 
                case 14:
                    length = 21
                    break;
                case 15:
                    length = 32
                    break;
            }
            return length;
        }
    },
    methods:{
        urlFilter(index) {
            return `https://qcdna.com/files/80838/${this.Catalog}/${index}.jpg`
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
