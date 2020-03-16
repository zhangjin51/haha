<template>
	<div id="app">
		<Books @confirmCurrrentBook="handleCurrentBook" />
		{{book.bookNumber}}
		<Chapters
			@confirmChapter="handleConfirmChapter"
			v-if="Object.keys(book).length > 0"
			:chapterList="book.chapterList"
		/>
	</div>
</template>

<script>
import Books from "./components/Books";
import Chapters from "./components/Chapters";

export default {
	name: "app",
	data() {
		return {
			book: {},
			chapter: {}
		};
	},
	methods: {
		handleCurrentBook(book) {
			this.book = book;
		},
		handleConfirmChapter(chapter) {
			this.chapter = chapter;
		}
	},
	components: {
		Books,
		Chapters
	}
};
</script>

<style lang="less">
html,
body {
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
	.button_group {
		margin-bottom: 10px;
		padding-top: 10px;
		width: 100%;
		position: fixed;
		.title {
			font-size: 16px;
			font-weight: bold;
			font-style: italic;
			padding: 0 15px;
		}
	}
}
</style>
