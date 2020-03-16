<template>
	<div class="chapter_container" :style="styleObject">
		<div
			class="chapter"
			v-for="(chapter, index) in chapterList"
			:key="index"
            @click="handleChapterClick(chapter)"
            
		>
			<p class="chapter_name">
				{{chapter.chapterName}}
			</p>
            <el-image :src="chapter.chapterImage" />
               
            
		</div>
	</div>
</template>

<script>
import Vue from 'vue'

export default {
	props: {
		chapterList: {
			type: Array,
			required: true
		}
    },
    computed:{
        styleObject() {
            if(Vue.IsPC){
                return {}
            }else{
                return {
                    width: '100%',
                }
            }
        },
    },
    methods: {
        handleChapterClick(chapter) {
            this.$emit("confirmChapter", chapter)
        }
    }
};
</script>

<style lang="less">
    div{
        margin: 0;
        padding: 0;
    }
    .chapter_container{
        overflow: hidden;
        width: 30vw;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: row;
        .chapter{
            width: 100%;
            box-sizing: border-box;
            cursor: pointer;
            border: 1px solid #808080;
            p{
                width: 100%;
                font-size: 12px;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
            }
            .el-image{
                overflow: hidden;
                img{
                    display: block;
                    border-top: 1px solid #808080;
                }
            }
            &:nth-child(3n){
                margin-right: 0px;
            }
        }
    }
</style>