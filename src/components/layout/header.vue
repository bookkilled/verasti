<template>
	<header class="navbar navbar-fixed-top nav-down">
		<div class="fluid-container cf">
		<div class="logo"><router-link to="/home" v-if="!navhome">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 137.5 14.9" width="157" height="17">
			  <path d="M0 1.4V.6h6.6v.8c-.8 0-1.3 0-1.4.2-.2 0-.3.2-.3.3l.7 2.3 2.8 7 2.3-5.7c.8-2 1.3-3.3 1.3-3.7v-.4l-1.6-.2V.6h4.8v.8c-.7 0-1 0-1.2.2-.2 0-.6 1-1.2 2.3l-3 7.3-1.4 3.3H7L3.5 6.3l-1.7-4-.5-.7L0 1.4zm18.3 13.3v-.5c.4-.2.7-.3 1-.6l.2-6.6V2.4c0-.4-.2-.7-.3-.8l-1.5-.3V.6h11c-.2.7-.3 2-.4 3h-.8V2.2H27c-.6-.2-1.4-.3-2.6-.3h-2v5l2 .2c.8 0 1.4 0 1.6-.2 0 0 .2 0 .2-.3V5.2h1v4.5h-1V8.2l-.3-.2h-3.7v5.5h2c1.2 0 2.3 0 3.2-.2l.5-2h.8c-.2 1-.2 2.3-.3 3.4H18.3zm13 0V14l1.2-.3.2-.2V12l.2-3.5V4.2c0-1.3-.2-2-.3-2.4 0 0 0-.2-.2-.2l-1.3-.2V.6h7c1.2 0 2.6 0 3 .3.6 0 1 .4 1.3 1 .3.4.4 1 .4 1.5 0 .8-.3 1.5-.8 2-.5.7-1.3 1.2-2.4 1.7l2 3.2 1.8 2.5.7.6h.8v1h-3.8l-2.6-4.2-2-3v-.5h.7c.6 0 1.2-.3 1.8-1 .7 0 1-.8 1-1.8 0-.8-.2-1.4-.7-2-.5-.4-1.2-.6-2.2-.6h-1l-.2 3V12c0 1 0 1.6.2 1.7 0 0 0 .2.2.2l1.4.2v.7h-6.4zm15.8-1h1.3l.5-1 5-12.2h1.6L60 11.2c.5 1.4 1 2 1 2.2l1.3.3v1H56v-1h1.3l.2-.4s0-.6-.4-1.3l-.6-1.7h-5.2l-.4 1c0 .4-.3 1-.4 1.5v.7l1.5.2v1H47v-1zm6.7-9.6l-2 5.2h4.2l-2.3-5zM65 10.5h.8V12l.7.8c.3.3.8.5 1.3.7.5.2 1 .3 1.6.3 1 0 1.7-.2 2.3-.8.6-.5 1-1 1-2 0-.6-.3-1-.7-1.5-.4-.4-1-.6-2.2-.8-1.6-.2-2.7-.5-3.2-.7-.6-.3-1-.7-1.3-1.2-.3-.5-.5-1.2-.5-2 0-1.2.4-2.2 1.3-3 1-1 2.4-1.4 4.4-1.4.8 0 1.4 0 2 .2.6 0 1.2.3 1.8.6v1.4L74 4.4h-1c0-1 0-1.6-.2-1.7 0-.2-.4-.5-1-.7-.5-.2-1-.4-1.8-.4-1 0-1.6.2-2 .7-.6.4-1 1-1 1.7 0 .4.2.8.4 1 .2.4.5.7 1 .8.3.2 1 .3 2.3.5 1 .2 2 .3 2.3.5.6.3 1 .7 1.5 1.2.3.5.5 1.2.5 2 0 1.4-.5 2.6-1.6 3.5-1 1-2.6 1.4-4.5 1.4-1 0-1.7-.2-2.4-.3-.7-.2-1.4-.4-2-.8v-1.4c.3-.6.3-1.3.3-2.2zm15.6 4.3V14c.4 0 .8 0 1.2-.2.2 0 .3 0 .4-.2l.2-.4V2c0-.2-.2-.2-.6-.2h-2.4l-.7.2v.2L78.3 4h-1V.6h13c0 1 0 2-.2 3.4h-.8c0-1 0-1.8-.2-2H89c-.6-.2-1.7-.2-3.3-.2h-.2v11c0 .4 0 .7.2.8l1.6.2v.8h-6.7zm12 0V14c1 0 1.4-.2 1.5-.3.2 0 .3-.4.3-.8V4 2c0-.2 0-.3-.2-.4l-1.4-.2V.6H99v.8c-.8 0-1.3 0-1.4.2l-.2.6V13.4l.4.2 1.4.2v.8h-6.6zm13-14h3.2v2h-3v-2zm2 14l1.5-6-2-.5-1.7 5.8 2.2.7zm1.7-9.8V7h3c-1 2.2-2.2 4.3-3.6 6.2l2.3 1.3c1-1.7 2-3.4 2.8-5.3.8 2 1.7 3.6 2.8 5.3l2.3-1.3c-1.5-2-2.7-4-3.7-6.2h3V5h-3V2.5l3-.4L118 0l-8.4 1 .3 2.4 2.3-.3v2h-3zm-.5 0V7h-3V5h3zM130 9.3h2V7h-2.2V5h2.2V3l-1.5.2-.3-2.2 6.3-.8.3 2.2-1.8.2V5h2.2V7H135v2.2h2v2.3h-7V9.4zm7.5 3h-6.3c-1.2 0-2.4-.6-3.4-1.4l1.6-6h-1.6l.6-2.2.6-2.2h-4v2.2h1.2L125 7h1.6l-.6 2.3-.7-1-1.7 1.8c.5.8 1 1.5 1.7 2l-.6 2 2 .7.4-1.2c1.4.8 2.8 1.2 4.2 1.2h6.3v-2.4z"/></svg>
			</router-link>
			<a href="#banner" v-else>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 137.5 14.9" width="157" height="17">
			  <path d="M0 1.4V.6h6.6v.8c-.8 0-1.3 0-1.4.2-.2 0-.3.2-.3.3l.7 2.3 2.8 7 2.3-5.7c.8-2 1.3-3.3 1.3-3.7v-.4l-1.6-.2V.6h4.8v.8c-.7 0-1 0-1.2.2-.2 0-.6 1-1.2 2.3l-3 7.3-1.4 3.3H7L3.5 6.3l-1.7-4-.5-.7L0 1.4zm18.3 13.3v-.5c.4-.2.7-.3 1-.6l.2-6.6V2.4c0-.4-.2-.7-.3-.8l-1.5-.3V.6h11c-.2.7-.3 2-.4 3h-.8V2.2H27c-.6-.2-1.4-.3-2.6-.3h-2v5l2 .2c.8 0 1.4 0 1.6-.2 0 0 .2 0 .2-.3V5.2h1v4.5h-1V8.2l-.3-.2h-3.7v5.5h2c1.2 0 2.3 0 3.2-.2l.5-2h.8c-.2 1-.2 2.3-.3 3.4H18.3zm13 0V14l1.2-.3.2-.2V12l.2-3.5V4.2c0-1.3-.2-2-.3-2.4 0 0 0-.2-.2-.2l-1.3-.2V.6h7c1.2 0 2.6 0 3 .3.6 0 1 .4 1.3 1 .3.4.4 1 .4 1.5 0 .8-.3 1.5-.8 2-.5.7-1.3 1.2-2.4 1.7l2 3.2 1.8 2.5.7.6h.8v1h-3.8l-2.6-4.2-2-3v-.5h.7c.6 0 1.2-.3 1.8-1 .7 0 1-.8 1-1.8 0-.8-.2-1.4-.7-2-.5-.4-1.2-.6-2.2-.6h-1l-.2 3V12c0 1 0 1.6.2 1.7 0 0 0 .2.2.2l1.4.2v.7h-6.4zm15.8-1h1.3l.5-1 5-12.2h1.6L60 11.2c.5 1.4 1 2 1 2.2l1.3.3v1H56v-1h1.3l.2-.4s0-.6-.4-1.3l-.6-1.7h-5.2l-.4 1c0 .4-.3 1-.4 1.5v.7l1.5.2v1H47v-1zm6.7-9.6l-2 5.2h4.2l-2.3-5zM65 10.5h.8V12l.7.8c.3.3.8.5 1.3.7.5.2 1 .3 1.6.3 1 0 1.7-.2 2.3-.8.6-.5 1-1 1-2 0-.6-.3-1-.7-1.5-.4-.4-1-.6-2.2-.8-1.6-.2-2.7-.5-3.2-.7-.6-.3-1-.7-1.3-1.2-.3-.5-.5-1.2-.5-2 0-1.2.4-2.2 1.3-3 1-1 2.4-1.4 4.4-1.4.8 0 1.4 0 2 .2.6 0 1.2.3 1.8.6v1.4L74 4.4h-1c0-1 0-1.6-.2-1.7 0-.2-.4-.5-1-.7-.5-.2-1-.4-1.8-.4-1 0-1.6.2-2 .7-.6.4-1 1-1 1.7 0 .4.2.8.4 1 .2.4.5.7 1 .8.3.2 1 .3 2.3.5 1 .2 2 .3 2.3.5.6.3 1 .7 1.5 1.2.3.5.5 1.2.5 2 0 1.4-.5 2.6-1.6 3.5-1 1-2.6 1.4-4.5 1.4-1 0-1.7-.2-2.4-.3-.7-.2-1.4-.4-2-.8v-1.4c.3-.6.3-1.3.3-2.2zm15.6 4.3V14c.4 0 .8 0 1.2-.2.2 0 .3 0 .4-.2l.2-.4V2c0-.2-.2-.2-.6-.2h-2.4l-.7.2v.2L78.3 4h-1V.6h13c0 1 0 2-.2 3.4h-.8c0-1 0-1.8-.2-2H89c-.6-.2-1.7-.2-3.3-.2h-.2v11c0 .4 0 .7.2.8l1.6.2v.8h-6.7zm12 0V14c1 0 1.4-.2 1.5-.3.2 0 .3-.4.3-.8V4 2c0-.2 0-.3-.2-.4l-1.4-.2V.6H99v.8c-.8 0-1.3 0-1.4.2l-.2.6V13.4l.4.2 1.4.2v.8h-6.6zm13-14h3.2v2h-3v-2zm2 14l1.5-6-2-.5-1.7 5.8 2.2.7zm1.7-9.8V7h3c-1 2.2-2.2 4.3-3.6 6.2l2.3 1.3c1-1.7 2-3.4 2.8-5.3.8 2 1.7 3.6 2.8 5.3l2.3-1.3c-1.5-2-2.7-4-3.7-6.2h3V5h-3V2.5l3-.4L118 0l-8.4 1 .3 2.4 2.3-.3v2h-3zm-.5 0V7h-3V5h3zM130 9.3h2V7h-2.2V5h2.2V3l-1.5.2-.3-2.2 6.3-.8.3 2.2-1.8.2V5h2.2V7H135v2.2h2v2.3h-7V9.4zm7.5 3h-6.3c-1.2 0-2.4-.6-3.4-1.4l1.6-6h-1.6l.6-2.2.6-2.2h-4v2.2h1.2L125 7h1.6l-.6 2.3-.7-1-1.7 1.8c.5.8 1 1.5 1.7 2l-.6 2 2 .7.4-1.2c1.4.8 2.8 1.2 4.2 1.2h6.3v-2.4z"/></svg>  	
			</a>
		</div>
		<!-- <span v-if="!navhome" class="page-title">{{title}}</span> -->
		<nav class="nav-home hidden-xs hidden-sm" v-if="pcsite">
			<ul v-bind:class="{'nav':true, 'navbar-nav':true, 'contact': navhome}">
				<li v-bind:class="{'active': navhome == 'home'}"><router-link to="/home"><span>首页</span></router-link></li>
				<li v-bind:class="{'active': navhome == 'solution'}"><router-link to="/solution"><span>产品</span></router-link></li>
				<li v-bind:class="{'active': navhome == 'news'}"><router-link to="/news"><span>大事记</span></router-link></li>
				<li v-bind:class="{'active': navhome == 'partner'}"><router-link to="/partner"><span>合作伙伴</span></router-link></li>
				<li v-bind:class="{'active': navhome == 'culture'}"><router-link to="/culture"><span>企业文化</span></router-link></li>
				<li v-bind:class="{'active': navhome == 'contact'}"><router-link to="/contact"><span>关于我们</span></router-link></li>
			</ul>
		</nav>

	    </div>
	</header>
</template>
<script>
export default {
		data: function () {
			return {
				pcsite: /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent) ? false : true
			}
		},
    props: ['title','navhome'],
    mounted: function(){
    	
		// $('header').on('click',".nav-wrap .closebtn",function(){
		// 	$(this).addClass("out");
		// 	$(".nav-wrap").delay(300).animate({height:0},300,function(){
		// 		$(this).removeClass("in").css("height","");
		// 	})
		// })
		
    }
  }
</script>