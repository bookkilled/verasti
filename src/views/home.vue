<template>
  <div>
    <app-header :class="{'at-home':home}" :navhome='home' ></app-header>
  	<section id="banner" class="banner home">
      <div class="fullpage">
        <div class="bg bg-banner">
          <!-- <div class="banner-video" v-for="(dk,index) in bannerList" :key="index">
            <video playsinline loop muted autoplay class="bg_video">
            <source v-bind:src="dk.coverImageUrl" type="video/mp4">
            </video>
          </div> -->
          <!-- <swiper :options="swiperOption"  ref="mySwiper">  
              <swiper-slide  v-for="(dk,index) in bannerList" :key="index"> 
                 <video playsinline loop muted autoplay class="bg_video" v-if="dk.coverImageUrl.indexOf('mp4')>-1">
                  <source v-bind:src="dk.coverImageUrl" type="video/mp4">
                 </video>
                 <div v-else>
                   <img v-bind:src="dk.coverImageUrl">
                 </div>
              </swiper-slide>  
              <div class="swiper-pagination" slot="pagination"></div>  
          </swiper> -->
          <div class="swiper-container" id="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(dk,index) in bannerList" :key="index">
                <video playsinline loop muted autoplay class="bg_video" v-if="dk.coverImageUrl.indexOf('mp4')>-1">
                  <source v-bind:src="dk.coverImageUrl" type="video/mp4">
                 </video>
                 <div class="bg_img" v-else>
                   <img v-bind:src="dk.coverImageUrl" width="100%">
                 </div>
              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <div class="intro text-center">
          <h1 class="wow fadeInLeft" data-wow-delay=".5s" data-wow-duration="1.5s">FIND AND TRADE WHAT YOU <br class="hidden-xs">NEED THROUGH THE NETWORK YOU<br class="hidden-xs"> ALREADY TRUST</h1>
          <p class="wow fadeInLeft" data-wow-delay=".5s" data-wow-duration="1.5s">VERASTI开创了统一的跨市场交易入口，构建了一个连接金融机构、交易型私募基金的网络</p>
        </div>
      </div>
      <div class="arrow-down" v-if="!pcsite"></div>
    </section>
    <section id="basic" class="basic">
      <div class="container">
        <div class="row content text-center">
          <h1 class="caption txt-purple txtXL wow fadeInLeft" data-wow-delay=".5s">advantage<br><small class="txt-white">优势</small>
          </h1>
          <div class="advantagebox" v-if="pcsite">
            <div class="boxt wow fadeInLeft" data-wow-delay=".5s">
              <p class="tit">高效灵活</p>
              <p class="dt">通过统一API接入，对各交易平台的适配，高效灵活，支持中后台各类业务系统部署</p>
              <p class="tit">统一合规风控</p>
              <p class="dt">统一的风控合规系统部署在策略程序和柜台系统之间，实时监测包括流量，大单等异常情况，将风险降低到最低</p>
            </div>
            <div class="boxb wow fadeInRight" data-wow-delay=".5s">
              <p class="tit">匹配各方网络</p>
              <p class="dt">全网匹配专业化的证券及衍生品交易，支持多节点模块部署，支持模块无缝热插拨</p>
              <p class="tit">跨市场交易统一入口</p>
              <p class="dt">对交易型私募基金来说，VERASTI构建了一个安全，稳定地链接金融机构和交易型私募基金的网络</p>
            </div>
          </div>
          <div class="advantagebox" v-else>
            <p class="wow fadeInLeft" data-wow-delay=".5s" style="text-align:center"><img src="../../static/img/cap_img_pc.jpg" width="33%"></p>
            <div class="wow fadeInLeft" data-wow-delay=".5s">
              <p class="tit">高效灵活</p>
              <p class="dt">通过统一API接入，对各交易平台的适配，高效灵活，支持中后台各类业务系统部署</p>
              <p class="tit">统一合规风控</p>
              <p class="dt">统一的风控合规系统部署在策略程序和柜台系统之间，实时监测包括流量，大单等异常情况，将风险降低到最低</p>
            </div>
            <p class="wow fadeInRight" data-wow-delay=".5s"  style="text-align:center"><img src="../../static/img/cap_img_mac.jpg" width="33%"></p>
            <div class="wow fadeInRight" data-wow-delay=".5s" >
              <p class="tit">匹配各方网络</p>
              <p class="dt">全网匹配专业化的证券及衍生品交易，支持多节点模块部署，支持模块无缝热插拨</p>
              <p class="tit">跨市场交易统一入口</p>
              <p class="dt">对交易型私募基金来说，VERASTI构建了一个安全，稳定地链接金融机构和交易型私募基金的网络</p>
            </div>
          </div>
        </div>
      </div>
      <div class="arrow-down"></div>
    </section>
    <section id="risk" class="risk" v-if="pcsite">
      <div class="container">
        <div class="row content text-center">
          <h1 class="caption txt-purple txtXL wow fadeInLeft" data-wow-delay=".5s">memorabilia<br><small class="txt-white">公司大事记</small>
          </h1>
          <div class="riskbox wow fadeInUp" data-wow-delay=".5s">
            <div v-for="(el,index) in newsList" :key="index" :class="[index == 1 ? 'itema' : 'itemb', 'item']">
              <span class="ndate">{{ el.postDate }}</span>
              <div class="ndetail">
                <p class="p1">{{ el.title }}</p>
                <p class="p2">{{ el.summary }}</p>
                <a class="link" v-bind:href="'/newsdetail?pageid='+el.id">查看全部</a>
              </div>
            </div>
            <!-- <div class="itemb item">
              <span class="ndate">2017-09-04</span>
              <div class="ndetail">
                <p class="p1">VERASTI亮相2017全球（上海）人工智能创新峰会</p>
                <p class="p2">在国家重磅的监管之下，如何防范合规风险的基础上高效完成基金募......</p>
                <a class="link" href="/news/">查看全部</a>
              </div>
            </div> -->
            <div class="itemc item">
                <a class="link" href="/news">更多大事记 &gt;&gt;</a>
            </div>
          </div>
        </div>
      </div>
      <div class="arrow-down"></div>
    </section>
    <section class="newsbox" style="background: #193044" v-else>
        <h1 class="caption txt-purple txtXL wow fadeInLeft" data-wow-delay=".5s">MEMORABILIA<br><small class="txt-white">公司大事记</small>
        </h1>
        <div class="mitem" v-for="(el,index) in newsList" :key="index">
            <div v-bind:class="['mline',(index == 0 ? 'first' : '')]"></div>
            <span class="mpointer"></span>
            <p class="mdate">{{ el.postDate }}</p>
            <p class="mtit">{{ el.title }}</p>
            <p class="msummary">{{ el.summary }}</p>
            <p class="ming"><img v-bind:src="el.coverImageUrl" width="100%"></p>
            <p style="text-align:right"><a v-bind:href="'/newsdetail?pageid='+el.id" class="mlink">查看全部</a></p>
            <div v-if="index == newsList.length-1" class="lastline"></div>
        </div>
        <a href="/news" class="morelink">更多大事记 >></a>
    </section>
    <section id="adapter" class="adapter">
      <div class="container">
        <div class="row content text-center">
          <h1 class="caption txt-purple txtXL wow fadeInLeft" data-wow-delay=".5s">Cooperative  partner<br><small class="txt-white">合作伙伴</small>
          </h1>
          <div class="companybox" v-if="pcsite">
            <span class="bleft" @click="preimg"></span>
            <div class="imglist">
              <div class="row">
              <div class="col-xs-6 col-sm-3 citem" v-for="(item,index) in showcomplist" :key="index">
                <img v-bind:src="'../../static/img/'+item.i+'.png'" width="243" alt="" />
                <span>{{ item.name }}</span>
              </div>
              </div>
            </div>
            <span class="bright" @click="nextimg"></span>
          </div>
          <div class="complist" v-else>
            <div class="compbox clearfix">
              <div class="compitem" v-for="(item,index) in complist" :key="index">
                <img v-bind:src="'../../static/img/'+item.i+'.png'" width="100%" alt="" />
                <span>{{ item.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="arrow-down"></div>
    </section>
    <section id="rules" class="rules">
      <div class="container">
        <div class="row content text-center">
          <h1 class="caption txt-purple txtXL wow fadeInLeft" data-wow-delay=".5s">CONTACT US<br><small class="txt-white">联系我们</small>
          </h1>
          <p class="wxtit wow fadeInRight" data-wow-delay=".6s">微信公众号：VERASTI</p>
          <p class="qrcode wow fadeInRight" data-wow-delay=".7s">
            <img src="../assets/qrcode.jpg">
          </p>
          <div class="cinfo wow fadeInRight" data-wow-delay=".6s" v-if="pcsite">
            <p><span class="ctel">0571-81999811</span><span class="cemail">nuoee@nuoee.com</span></p>
            <p class="mt10"><span class="caddress">上海市，威海路696弄 | 杭州，江干区庆春东路西子国际C座2402室</span></p>
          </div>
          <div class="cinfom" v-else>
            <p><span class="ctel">0571-81999811</span></p>
            <p><span class="cemail">nuoee@nuoee.com</span></p>
            <p><span class="caddress">上海市，威海路696弄 | 杭州，江干区庆春东路西子国际C座2402室</span></p>
          </div>
        </div>
      </div>
      <!-- <div class="arrow-down"></div> -->
    </section>
    <app-footer :class="{'at-home':home}"></app-footer>
  </div>
</template>
<script>
import * as api from '../api'
import Swiper from 'swiper';
export default {
  data:function () {
    return {
      pcsite: /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent) ? false : true,
      name:"home",
    	home: true,
      title:"Home",
      bannerList: [], // banner列表
      newsList: [], // 新闻列表
      complist: [
        {i:'01',name:'东海证券'},
        {i:'02',name:'国联证券'},
        {i:'03',name:'联储证券'},
        {i:'04',name:'申银万国期货'},
        {i:'05',name:'华泰证券'},
        {i:'06',name:'信达证券'},
        {i:'07',name:'财通证券'},
        {i:'08',name:'华泰期货'},
        {i:'09',name:'中融汇信'},
        {i:'10',name:'国贸·期货'},
        {i:'11',name:'宝城期货'},
        {i:'12',name:'通惠期货有限公司'},
        {i:'13',name:'广州金融控股集团有限公司'},
        {i:'14',name:'信达期货'},
        {i:'15',name:'国联期货'},
        {i:'16',name:'东海期货'}
      ], // 合作单位列表
      showcomplist: [{i:'01',name:'东海证券'},
        {i:'02',name:'国联证券'},
        {i:'03',name:'联储证券'},
        {i:'04',name:'申银万国期货'}], // 当前展示列表
      currindex: 0 // 当前开始索引
    }
  },
  methods: {
    svgResize:function(){
      if(!Modernizr.csscalc){
        var p1_H = Math.round($("#graphic_p1").width() * 437.3/472.2);
        $("#graphic_p1").css("height",p1_H+"px");

        var p2_H = Math.round($("#graphic_p2").width() * 583.3/479.9);
        $("#risk svg").css("height",p2_H+"px");

        var p3_H = Math.round($("#graphic_p3").width() * 555/686);
        $("#adapter svg").css("height",p3_H+"px");


        $("#risk").css("padding-bottom",$("#graphic_p2").height());
        $("#adapter").css("padding-bottom",$("#graphic_p3").height())
      }
    },
    handleWindowResize: function(event) {
      if (this.timeoutHandle){
         window.clearTimeout(this.timeoutHandle);
      }
      this.timeoutHandle = window.setTimeout(this.svgResize, 50);
    },
    preimg: function() {
      if(this.currindex > 0) {
          this.currindex --;
          this.showcomplist = this.complist.slice(this.currindex,this.currindex+4);
      }
    },
    nextimg: function() {
      if(this.currindex >= 0 && this.currindex < 11) {
          this.currindex ++;
          this.showcomplist = this.complist.slice(this.currindex,this.currindex+4);
      }
    }
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleWindowResize)
  },
  //定义这个sweiper对象  
  // computed: {  
  //     swiper() {  
  //       return this.$refs.mySwiper.swiper;  
  //     }  
  // },
  mounted:function (){
    var _ = this;
    api.getBanner().then(function (res) {
        _.bannerList = res.list; // banner列表;      
    },function (err) {
        // vm.errstate = true
        // vm.errmsg = '接口请求异常！'
    });
    api.getNews(1).then(function (res) {
        for (var i = 0;i<2;i++) {
            _.newsList.push(res.list[i]);
        }
    },function (err) {
        // vm.errstate = true
        // vm.errmsg = '接口请求异常！'
    }).always(function(){
        // vm.loading = false
    });
    //这边就可以使用swiper这个对象去使用swiper官网中的那些方法  
    // this.swiper.slideTo(0, 3000, false);
    var mySwiper =setTimeout(function () {
      new Swiper('#swiper', {
        loop: true,
        pagination: '.swiper-pagination',
        autoplay: 2000,
        paginationClickable: true
      });
    }, 100);
    this.svgResize();
    window.addEventListener('resize', this.handleWindowResize);
  }
}
</script>
<style scoped>
@keyframes runH {
    from { transform: translate(-100%,0); }
    to { transform: translate(100%,0); }
}
@keyframes runH-2 {
    from { transform: translate(0,0); }
    to { transform: translate(200%,0); }
}
.img-1010 {
  animation: runH 3s infinite linear;
}
.img-1010-2 {
  animation: runH-2 3s infinite linear 1.5s;
}

.social ul{ margin-bottom: 0;padding: 40px 0; }
.social li a,.social li{
  display: inline-block;
  width: 40px;
  height: 40px;
  position: relative;
}
.social li+li{margin-left: 40px;}
.social .sina a{
  background: url("../assets/sina_n.png") no-repeat 100%;
}
.social .sina a:hover {
  background-image: url("../assets/sina.png");
}
.social .wechat a{
  background: url("../assets/wechat_n.png") no-repeat 100%;
}
.social .wechat a:hover {
  background-image: url("../assets/wechat.png");
}

</style>