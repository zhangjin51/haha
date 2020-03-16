<template>
	<div class="books_container">
		<div
			class="book"
			v-for="book in booksList"
			:key="book.bookNumber"
            @click="handleBookClick(book)"
            v-loading.fullscreen.lock="fullscreenLoading"
		>
            <img :src="book.coverImage" alt="coverImage">
		</div>
	</div>
</template>

<script>
import book1 from "../assets/book1";

export default {
	data() {
		return {
            fullscreenLoading: false,
			booksList: [book1]
		};
    },
    methods: {
        handleBookClick(book) {
            this.fullscreenLoading = true;
            setTimeout(() => {
                this.fullscreenLoading = false;
                this.$emit("confirmCurrrentBook", book);
            }, 2000);
        }
    }
};
</script>

<style lang="less">
    .books_container{
        padding: 20px 0;
        .book{
            width: 84px;
            height: 112px;
            display: block;
            margin: 0 auto;
            box-shadow: 2px 2px 1px #adabab;
            cursor: pointer;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>