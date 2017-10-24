<template>
	<footer>
		<div class="container text-center">
			<p><span class="copyright">上海诺奚信息技术有限公司</span></p>
			<p><b>VERASTI</b> ©2016 <span class="copyright">版权所有</span> 沪ICP备16045301号-1</p>
		</div>
		<div class="gotop" v-if="pcsite" @click="gotop"></div>
	</footer>
</template>
<script>
export default {
	data: function () {
		return {
			pcsite: /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent) ? false : true
		}
	},
	methods: {
		gotop: function () {
			document.documentElement.scrollTop = document.body.scrollTop =0;
		}
	}
}
</script>

<style scoped>
.copyright {
	margin:0 14px;
}
footer{
	padding: 22px 0;
	background-color: #202224;
	color: #eee;
}
footer p {
	color: #b3aeae;
}
.at-home {
	background-color: #202224;
	color: #424243;
}
</style>