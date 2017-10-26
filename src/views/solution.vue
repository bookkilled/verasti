<template>
  <div>
  <div class="svg-defs">
    <svg xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92" style="display: none">
      <defs>
        <g id="tech_icon_1" stroke="#3D3D3D">
          <path fill="none" d="M25 45c0 6 5 11 11 11s11-5 11-11"/>
          <path fill="none" d="M46 46c0-6 5-11 11-11s11 5 11 11"/>
          <circle cx="25" cy="45" r="5" fill="#D8D8D8" class="icon1"></circle>
          <circle cx="68" cy="45" r="5" fill="#D8D8D8"/>
          <circle cx="47" cy="45" r="5" fill="#D8D8D8"/>
        </g>
        <g id="tech_icon_2" stroke="#3D3D3D">
          <path fill="none" d="M46 27v37M46 27l16 21M46 27l-16 21"><animate
            attributeName="d" values="M46 27v0M46 27l0 0M46 27l0 0;M46 27v37M46 27l16 21M46 27l-16 21;M46 27v37M46 27l16 21M46 27l-16 21;M46 27v0M46 27l0 0M46 27l0 0" dur="2.4s" repeatCount="indefinite" /></path>
          <circle cx="46" cy="29" r="5" fill="#D8D8D8"/>
          <circle cx="46" cy="63" r="5" fill="#D8D8D8"><animate
            attributeName="cy" values="29;63;63;29" dur="2.4s" repeatCount="indefinite" /></circle>
          <circle cx="30" cy="50" r="5" fill="#D8D8D8">">
            <animate attributeName="cx" values="46;30;30;46" dur="2.4s" repeatCount="indefinite" />
            <animate attributeName="cy" values="29;50;50;29" dur="2.4s" repeatCount="indefinite" /></circle>
          <circle cx="62" cy="50" r="5" fill="#D8D8D8">
            <animate attributeName="cx" values="46;62;62;46" dur="2.4s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="29;50;50;29" dur="2.4s" repeatCount="indefinite" /></circle>
        </g>
        <g id="tech_icon_3" stroke="#3D3D3D">
          <path id="icon_3_path" fill="none" d="M45 28l18 26H27z"/>
          <circle cx="45" cy="29" r="5" fill="#D8D8D8">
            <animateMotion path="M0 0l-16 25 33 0 -16 -25" dur="5s" repeatCount="indefinite"/>
          </circle>
          <circle cx="29" cy="54" r="5" fill="#D8D8D8">
            <animateMotion path="M0 0l33 0 -16 -25 -16 25" dur="5s" repeatCount="indefinite"/>
          </circle>
          <circle cx="62" cy="54" r="5" fill="#D8D8D8">            
            <animateMotion path="M0 0l-16 -25 -16 25 33 0" dur="5s" repeatCount="indefinite"/>
          </circle>
        </g>
        <g id="tech_icon_4" stroke="#3D3D3D">
          <path fill="none" d="M27 46.5c3 8 10.6 13.5 19.5 13.5S63 54.4 66 46.5C63 38.5 55.4 33 46.5 33S30 38.6 27 46.5z"/>
          <circle cx="30" cy="47" r="5" fill="#D8D8D8"><animate attributeName="cx" values="47;30;30;47" dur="2.4s" repeatCount="indefinite"/></circle>
          <circle cx="63" cy="47" r="5" fill="#D8D8D8"><animate attributeName="cx" values="47;63;63;47" dur="2.4s" repeatCount="indefinite"/></circle>
          <circle cx="47" cy="47" r="5" fill="#D8D8D8"/>
        </g>
        <g id="tech_icon_5">
          <g>
          <circle cx="46" cy="46" r="22" fill="none" stroke="#3D3D3D"/>
          <circle cx="46" cy="25" r="5" fill="#D8D8D8" stroke="#3D3D3D">
            <animateMotion path="M-22,20a22,22 0 1,0 44,0a22,22 0 1,0 -44,0" dur="4s" repeatCount="indefinite"/>
          </circle>
          <circle cx="46" cy="67" r="5" fill="#D8D8D8" stroke="#3D3D3D">
            <animateMotion path="M22,-20a22,22 0 1,0 -44,0a22,22 0 1,0 44,0" dur="4s" repeatCount="indefinite"/>
          </circle>
          </g>
          <path fill="#D8D8D8" stroke="#3D3D3D" d="M46 33l-10 4.6v7c0 6.3 4.3 12.2 10 13.7C51.7 57 56 51 56 44.5v-7L46 33z"/>
          <path fill="#3D3D3D" d="M45.5 46.7l-2-2-.5.8 2.5 2.5 5.5-5.5-.6-.6"/>
        </g>
      </defs>
    </svg>
  </div>
  <app-header :title="title" navhome='solution'></app-header>
	<!-- <app-header :title="title" :class="'at-solution'" ></app-header> -->
	<section class="banner solution">
   <div class="fullpage">
        <div class="bg bg-banner">
          <div class="banner-video">
          <video playsinline loop muted autoplay class="bg_video">
                <!-- <source src="http://thenewcode.com/assets/videos/polina.webm" type="video/webm"> -->
            <source src="static/bg_video_s.mp4" type="video/mp4">
            </video>
            </div>
          </div>
        <div class="intro text-center">
          <h1 class="wow fadeInLeft" data-wow-delay=".1s" data-wow-duration="1.5s">EVERYTHING THAT MATTERS</h1>
          <p class="wow fadeInLeft" data-wow-delay=".5s">对专业的交易型私募基金来说，<br class="hidden-xs"> 在VERASTI以前，并没有一个统一高效的，安全可信的方式接入证券期货公司。 </p>
        </div>
      </div>
      <div class="arrow-down">
        <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.5 17.7"><path fill="none" stroke="currentColor" stroke-width="2.5" stroke-miterlimit="10" d="M30.6 1L15.8 15.9.9.9"/></svg> -->
      </div> 
  </section>
  <section class="p-tb-110 products">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 col-md-8 col-lg-7 content">
            <h3 class="wow fadeInLeft txt-white oneline" data-wow-delay=".2s">统一风控</h3>
            <p class="wow fadeInLeft" data-wow-delay=".4s">统一风控系统部署在策略程序和柜台系统之间。易用、快速、安全、实时管理拦截各种异常交易情况，定义了包括接入控制、流量控制、异常大单、乌龙指等多类事前风控规则。</p>
            <p class="wow fadeInLeft" data-wow-delay=".4s">低延迟，系统处理平均延迟40us，最快处理延迟10us；可视化运维；支持多节点多模块部署，支持模块无缝热插拔。</p>
        </div>
        <div class="col-sm-4 col-md-4 col-lg-5 interface1 hidden-xs">
          <div class="wow fadeInLeft" data-wow-delay=".3s">
          <img src="../assets/product1.svg" width="200px">
          </div>
          <!-- <object data="../assets/product1.svg" type="image/svg+xml">
          </object> --> 
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4 col-md-4 col-lg-5 content interface2 hidden-xs"> 
          <div class="wow fadeInLeft" data-wow-delay=".4s">
            <img src="../assets/product2.svg" width="200px">
          </div>
        </div>
        <div class="col-sm-8 col-md-8 col-lg-7 content">
            <h3 class="txt-white wow fadeInLeft oneline" data-wow-delay=".5s">跨市场套利终端</h3>
            <p class="wow fadeInLeft" data-wow-delay=".6s">针对中国境内证券和期货市场订制，涵盖了期现套利、ETF套利、分级基金套利、商品期货跨期套利。完美实现了基差监控、篮子管理、策略监控、自动化套利等常用功能。</p>
            <p class="wow fadeInLeft" data-wow-delay=".6s">自带多种套利策略模型，高效的行情吞吐与交易处理性能；适配PB、O3等主流资管系统的接口。</p>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8 col-md-8 col-lg-7 content">
            <h3 class="wow fadeInLeft txt-white oneline" data-wow-delay=".7s">FinHub灵动适配</h3>
            <p class="wow fadeInLeft" data-wow-delay=".8s">支持中后台各类业务系统，标准化API，支持多节点、多证券期货公司部署。</p>
            <h3 class="wow fadeInLeft txt-white oneline last" data-wow-delay=".9s">统一V行情</h3>
            <p class="wow fadeInLeft" data-wow-delay="1s">极速行情，时延小于10μs，多路择优；最高支持level2数据；支持组播；统一API，支持各周期的历史K线数据。</p>
        </div>
        <div class="col-sm-4 col-md-4 col-lg-5 interface3 hidden-xs">
          <div class="wow fadeInLeft" data-wow-delay=".8s">
          <img src="../assets/product3.svg" width="200px">
          </div>
        </div>
      </div>
    </div>
  </section>
	<section class="p-tb-110 middleware">
    <div class="container">
      <h1 class="title text-center wow fadeInUp" data-wow-delay=".2s">Technologies</h1>
      <!-- <p class="brief m-lr-10p mrg-b-50 text-center wow fadeInUp" data-wow-delay=".4s">
      VERASTI消息中间件是面向分布式应用的消息队列中间件。支持TCP/IP,UDP,进程间通讯，广播等多种通讯协议。实现消息在不同的网络协议，不同的应用程序之间传递。特点： 多消息协议：支持TCP/IP,UDP,进程间通讯，广播等协议，提供点对点、发布订阅、广播等多种通讯方式;数据路由：根据内容、功能路由消息，支持事务处理；负载均衡：组件多节点的系统集群；集成管理和监控：集成、可视化的运维监控授权加密：提供完善的安全控制机制 。</p> -->
      <div class="text-center wow fadeInUp" data-wow-delay=".6s"><div class="caption solution-t2">Key Elements<small><span class="text-center">要素</span></small></div></div>

      <div class="techs wow fadeInUp clearfix" data-wow-delay=".7s">
        <div class="tech" v-for="(tech,index) in techs">
          <div>
            <svg width="90" height="90" viewBox="0 0 92 92">
              <circle cx="46" cy="46" r="45" fill="none" stroke="#3D3D3D"/>
              <use :class="'icon-'+(index+1)" :xlink:href="'#tech_icon_' + (index+1)" x="0" y="0"></use>
            </svg>
          </div>
          <h4>{{tech.title}}</h4>
        </div>
      </div>
    </div> 
  </section>
  <section class="p-tb-110 system">
    <div class="container">
      <h1 class="title text-center wow fadeInUp" data-wow-delay=".2s">Infrastructure</h1>
      <!-- <p class="brief m-lr-10p mrg-b-50 text-center wow fadeInUp" data-wow-delay=".4s">VERASTI消息中间件的系统逻辑结构：多层架构，灵活部署：DB+应用服务器+消息中间件，应用服务可横向扩展；跨平台：支持多种数据库，windows+linux ；高效：风控系统来回穿透系统时间小于40us，行情系统采用高效的内存数据库。</p> -->
      <div class="text-center wow fadeInUp" data-wow-delay=".5s"><div class="caption solution-t2">Key Elements<small><span class="text-center">要素</span></small></div></div>
      <div class="m-lr-10p features">
        <div class="row">
          <div class="col-xs-12 col-sm-4 text-center">
            <div class="feature wow fadeInUp" data-wow-delay=".6s">
              <div><svg width="100px" height="100px" viewBox="0 0 102 100">        <g id="system_1" stroke="#3D3D3D" transform="translate(0 5)">
                <circle cx="51" cy="42" r="45" fill="none"/>
                <path class="run-circle" fill="#D8D8D8" d="M52 92c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5zM96 47c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5zM6 47c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5z"/>
                <path fill="none" d="M33 26.8c0-.5.4-1 1-.7l14 3.6c.5 0 1 .7 1 1.2v22c0 .6-.4 1-1 1.2l-14 3.5c-.5 0-1-.2-1-.7v-30z"/>
                <path fill="#F4F4F4" d="M44 26.8c0-.5.4-1 1-.7l14 3.6c.5 0 1 .7 1 1.2v22c0 .6-.4 1-1 1.2l-14 3.5c-.5 0-1-.2-1-.7v-30z"/>
                <path fill="#D8D8D8" d="M55 26.8c0-.5.4-1 1-.7l14 3.6c.5 0 1 .7 1 1.2v22c0 .6-.4 1-1 1.2l-14 3.5c-.5 0-1-.2-1-.7v-30z"/>
              </g></svg></div>
              <h4 class="">多层架构/灵活部署</h4>
            </div>
          </div>
          <div class="col-xs-12 col-sm-4 text-center">
            <div class="feature wow fadeInUp" data-wow-delay=".7s">
              <div><svg width="100px" height="100px" viewBox="0 0 100 100"><g id="system_2" transform="translate(4, 5)">
                  <circle cx="45" cy="45" r="45" fill="none" stroke="#3D3D3D"/>
                  <path class="run-circle" fill="#D8D8D8" stroke="#3D3D3D" d="M14 17c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5zM27 90c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5zM89 48c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5z"/>
                  <rect width="27" height="31" x="16" fill="none" stroke="#3D3D3D" rx="2" transform="translate(21 26)"/>
                  <rect width="38" height="26" x="5" y="5" fill="#D8D8D8" stroke="#3D3D3D" rx="2" transform="translate(21 26)"/>
                  <path fill="#3D3D3D" d="M21 57h48v1H21z"/>
                </g></svg></div>
              <h4>跨平台</h4>
            </div>
          </div>
          <div class="col-xs-12 col-sm-4 text-center">
            <div class="feature wow fadeInUp" data-wow-delay=".8s">
              <div><svg width="100px" height="100px" viewBox="0 0 100 101"><g id="system_3" stroke="#3D3D3D" transform="translate(5, 1)">
                <circle cx="45" cy="49" r="45" fill="none"/>
                <path class="run-circle" fill="#D8D8D8" d="M46 10c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5zM46 99c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5zM85 74c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5z"/>
                <path fill="none" d="M44 44V23l20 33H49v21L29 44h15z"/>
                <path fill="#D8D8D8" d="M38 44V23l20 33H43v21L23 44h15z"/>
              </g></svg></div>
              <h4>高效</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
	<app-footer></app-footer>
  </div>
</template>
<script>
export default {
  data :function() {
    return {
      name:"solution",
    	title:"SOLUTION",
      techs:require("../assets/tech.json")
    }
  }
}
</script>
<style scoped>
@keyframes spin {
    to { transform: rotate(1turn); }
}
.run-circle {
    animation: spin 3s infinite linear;
    transform-origin:45px 45px;
}
#system_1 .run-circle{
    transform-origin:50% 44px;
}
#system_2 .run-circle{
    transform-origin:45px 45px;
}
#system_3 .run-circle{
    transform-origin:45px 50%;
}
@keyframes vrotate{
  70% { transform:rotate(360deg);}
  100% { transform:rotate(360deg); }
}
.tech .icon-1{
  animation: vrotate 3s infinite linear;
  transform-origin: 50% 50%;
}
</style>