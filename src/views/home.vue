<template>
  <div>
    <app-header :class="{'at-home':home}" :navhome='home' ></app-header>
  	<section id="banner" class="banner home">
      <div class="fullpage">
        <div class="bg bg-banner">
          <div class="banner-video">
          <video playsinline loop muted autoplay class="bg_video">
                <!-- <source src="http://thenewcode.com/assets/videos/polina.webm" type="video/webm"> -->
            <source src="static/bg_video.mp4" type="video/mp4">
            </video>
            </div>
          </div>
        <div class="intro text-center">
          <h1 class="wow fadeInLeft" data-wow-delay=".1s" data-wow-duration="1.5s">FIND AND TRADE WHAT YOU <br class="hidden-xs">NEED THROUGH THE NETWORK YOU<br class="hidden-xs"> ALREADY TRUST</h1>
          <p class="wow fadeInLeft" data-wow-delay=".5s" data-wow-duration="1.5s">VERASTI开创了统一的跨市场交易入口，构建了一个连接金融机构、交易型私募基金的网络</p>
        </div>
      </div>
      <div class="arrow-down"></div>
    </section>
    <section id="basic" class="basic">
      <div class="container">
        <div class="row content text-center">
          <h1 class="caption txt-purple txtXL wow fadeInLeft" data-wow-delay=".2s">advantage<br><small class="txt-white">优势</small>
          </h1>
          <div class="advantagebox">
            <div class="boxt">
              <p class="tit">高效灵活</p>
              <p class="dt">通过统一API接入，对各交易平台的适配，高效灵活，支持中后台各类业务系统部署</p>
              <p class="tit">统一合规风控</p>
              <p class="dt">统一的风控合规系统部署在策略程序和柜台系统之间，实时监测包括流量，大单等异常情况，将风险降低到最低</p>
            </div>
            <div class="boxb">
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
    <section id="risk" class="risk">
      <div class="container">
        <div class="row content text-center">
          <h1 class="caption txt-purple txtXL wow fadeInLeft" data-wow-delay=".2s">memorabilia<br><small class="txt-white">公司大事记</small>
          </h1>
          <div class="riskbox">
            <div class="itema item">
              <span class="ndate">2017-09-04</span>
              <div class="ndetail">
                <p class="p1">VERASTI受邀于杭州玉皇山南基金小镇管委会-私募的合规风控化管理</p>
                <p class="p2">在国家重磅的监管之下，如何防范合规风险的基础上高效完成基金募......</p>
                <a class="link" href="#">查看全部</a>
              </div>
            </div>
            <div class="itemb item">
              <span class="ndate">2017-09-04</span>
              <div class="ndetail">
                <p class="p1">VERASTI亮相2017全球（上海）人工智能创新峰会</p>
                <p class="p2">在国家重磅的监管之下，如何防范合规风险的基础上高效完成基金募......</p>
                <a class="link" href="#">查看全部</a>
              </div>
            </div>
            <div class="itemc item">
                <a class="link" href="#">更多大事记 &gt;&gt;</a>
            </div>
          </div>
        </div>
      </div>
      <div class="arrow-down"></div>
    </section>
    <section id="adapter" class="adapter">
      <div class="container">
        <div class="row content text-center">
          <h1 class="caption txt-purple txtXL wow fadeInLeft" data-wow-delay=".2s">Cooperative  partner<br><small class="txt-white">合作伙伴</small>
          </h1>
          <div class="companybox">
            <span class="bleft"></span>
            <div class="imglist">
              <div class="row">
              <div class="col-xs-6 col-sm-3"><img src="../../static/img/cap_img_1.jpg" width="243" alt="" /></div>
              <div class="col-xs-6 col-sm-3"><img src="../../static/img/cap_img_2.jpg" width="243" alt="" /></div>
              <div class="col-xs-6 col-sm-3"><img src="../../static/img/cap_img_3.jpg" width="243" alt="" /></div>
              <div class="col-xs-6 col-sm-3"><img src="../../static/img/cap_img_4.jpg" width="243" alt="" /></div>
              </div>
            </div>
            <span class="bright"></span>
          </div>
        </div>
      </div>
      <div class="arrow-down"></div>
    </section>
    <section id="rules" class="rules">
      <div class="container">
        <div class="row content text-center">
          <h1 class="caption txt-purple txtXL wow fadeInLeft" data-wow-delay=".2s">CONTACT US<br><small class="txt-white">联系我们</small>
          </h1>
          <p class="wxtit">微信公众号：VERASTI</p>
          <p class="qrcode">
            <img src="../assets/qrcode.jpg">
          </p>
          <div class="cinfo">
            <p><span class="ctel">0571-81999811</span><span class="cemail">nuoee@nuoee.com</span></p>
            <p class="mt10"><span class="caddress">上海市，威海路696弄 | 杭州，江干区庆春东路西子国际C座2402室</span></p>
          </div>
        </div>
      </div>
      <div class="arrow-down"></div>
    </section>
<!--     <section id="player">
      <div class="container content wow fadeInLeft">
        <h1 class="caption txt-orange">YOU ARE OUR PRIORITY!</h1>
        <p>从匹配金融机构和交易型私募基金开始，您和您客户的<br class="hidden-xs">价值将在VERASTI上构建。</p>
      </div>
    </section> -->
<!--     <section class="text-center social">
      <ul class="">
        <li class="sina"><a data-trigger="hover" data-placement="top" data-title="新浪微博" data-content="<img src='static/img/sina_qr.jpg'>"></a></li>
        <li class="wechat"><a data-trigger="hover" data-placement="top" data-title="微信" data-content="<img src='static/img/sina_qr.jpg'>"></a></li>
      </ul>
    </section> -->
    <app-footer :class="{'at-home':home}"></app-footer>
  </div>
</template>
<script>
export default {
  data:function () {
    return {
      name:"home",
    	home: true,
    	title:"Home"
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
    handleWindowResize(event) {
      if (this.timeoutHandle){
         window.clearTimeout(this.timeoutHandle);
      }

      this.timeoutHandle = window.setTimeout(this.svgResize, 50);
    }
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleWindowResize)
  },
  mounted:function (){

    $(".nav-home a,.logo a").click(function(){
      var ahash = this.hash;
      var target = $(ahash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            var $li = $(this).closest("li");
            var navHeight = 70;
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000,function(){
              // window.location.hash = ahash;
              if($li.length){
                $li.siblings(".active").removeClass("active");
                $li.addClass("active");
              }

            });
        }
          return false;
    })

/*    var popoverTemplate = ['<div class="popover">',
          '<div class="arrow"></div>',
          '<div class="social-at"><div class="popover-title"></div>@verasti</div>',
          '<div class="popover-content">',
          '</div>',
          '</div>'].join('');
    $('.social a').popover({
      html:true,
      template:popoverTemplate
    });
*/
    this.svgResize();
    window.addEventListener('resize', this.handleWindowResize);
    
    // new Vivus('graphic_p1', {type:'scenario'}, function(){});
    // new Vivus('graphic_p2', {type: 'sync',duration: 100}, function(){
    //   $(".img-1010").css({'animation':'none',"-webkit-animation":"none"});
    //   $(".img-1010-2").css({'display':'none'});
    // });
    // new Vivus('graphic_p3', {type: 'scenario'}, function(){});
  
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