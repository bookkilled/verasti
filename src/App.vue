<template>
  <div id="app">
    <!-- <transition name="slide-fade" mode="out-in"> -->
    <!-- <div class="loader-holder"></div> -->
    <transition 
      v-on:enter="enter"
      v-on:leave="leave"
    >
    <router-view></router-view>
    </transition>
    <div class="nav-wrap">
      <!-- <a class="closebtn"><span></span><span></span></a> -->
      <div class="menu-el">
      <div class="wrap-left">
          <div class="navbar-wrap">
            <ul class="nav navbar-nav">
              <li><a class="apphome" href="/home">首页</a></li>
              <li><a class="appsolution" href="/solution">产品</a></li>
              <li><a class="appnews" href="/news">大事记</a></li>
              <li><a class="apppartner" href="/partner">合作伙伴</a></li>
              <li><a class="appculture" href="/culture">企业文化</a></li>
              <li><a class="appcontact" href="/contact">关于我们</a></li>
            </ul>
          </div>
      </div>
      </div>
      <div class="menu-el">
      <div class="wrap-right">
        <div class="logo-wrap">
          <div class="logo-circle"></div>
          <router-link to="/home"><div class="logo_s"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="60" viewBox="0 0 67.6 101.3"><path class="logo-v" fill="#fff" d="M43.1 0l7.6 13.1-26.2 15.1-7.6-13.1L43.1 0zM19.3 33.8c0 25.4 1.2 41.2 14.5 48.3 13.3-7 14.5-22.9 14.5-48.3h19.3c0 50.8-14.4 61.8-33.8 67.6C14.4 95.6 0 84.6 0 33.8h19.3z"/></svg></div></router-link>
        </div>
      </div>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    enter: function enter(el, done) {
      done();
    },
    leave: function leave(el, done) {
      // $(el).hide();
      // $(".nav-wrap .wrap-left").animate({left:"100%"},1000,"easeInOutQuart");
      // $(".nav-wrap .wrap-right").animate({left:"100%"},1000,"easeInOutQuart",function(){
      //   $(".nav-wrap").removeClass("in");
      //   $(".nav-wrap .menu-el>div").css({"left":""});
        done();
      // });
    },
    handleWindowResize(event) {
      if (!Modernizr.cssvhunit) {
          $(".banner").css("height",$(window).height());
        }
    },
    createCookie:function(name,value,days){
      if (days) {
          var date = new Date();
          date.setTime(date.getTime()+(days*24*60*60*1000));
          var expires = "; expires="+date.toGMTString();
      }
      else var expires = "";
      document.cookie = name+"="+value+expires;
    },
    readCookie:function(name){
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for(var i=0;i < ca.length;i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1,c.length);
          if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
      }
      return null;
    },
    detectIE:function(){
      var ua = window.navigator.userAgent;

      var msie = ua.indexOf('MSIE ');
      if (msie > 0) {
          // IE 10 or older => return version number
          return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
      }

      var trident = ua.indexOf('Trident/');
      if (trident > 0) {
          // IE 11 => return version number
          var rv = ua.indexOf('rv:');
          return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
      }

      var edge = ua.indexOf('Edge/');
      if (edge > 0) {
         // Edge (IE 12+) => return version number
         return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
      }

      // other browser
      return false;
    }
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleWindowResize)
  },
  mounted:function (){
      /*$.Velocity.defaults.easing = 'easeInOutCubic';
      var chars = ['V','E','R','A','S','T','I','沃','廷'],
          charIndex= 0,
          $c_name = $(".c-name"),
          $c_logo = $(".c-logo"),
          $c_words= $(".c-words"),
          $c_shield_w = $(".c-shield-w"),
          $c_shield_p = $(".c-shield-p"),
          $c_scale= $(".c-scale"),
          $c_center = $(".c-v-center"),
          $c_loader = $("#loader-wrapper");

      // var $c_left = $(".loader-section.section-left"),
      //     $c_right = $(".loader-section.section-right");
      
      var name_anims = [];
      $c_name.each(function(index, name){
        var name_show = {e:name,p:{opacity:1},o:{display: "inline-block",duration: 100}},
            name_hide = {e:name,p:{opacity:0},o:{display: "none",delay: 100,duration: 100}};
          name_anims.push(name_show);
          name_anims.push(name_hide);
      });

      var typeChars = function(){
        var s = "YOU'RE GREAT PLAYER.";
        var index = 0;
        var length = s.length;
        var tId = null;
        $c_words.css({"display":"block","opacity":"1"});
        function start(){
          $c_words.text('');
          
          tId = setInterval(function(){
            $c_words.append(s.charAt(index));
            if(index++ === length){
              clearInterval(tId);
              index = 0;
            }
          },80);
        }

        start();
      }
      
      $.Velocity.hook($c_center, "translateX", "-50%");
      $.Velocity.hook($c_center, "translateY", "-50%");
      $.Velocity.hook($c_scale, "scale", "0");
      var anim1 = {e:$c_logo,p:{opacity:1},o:{display: "inline-block",duration: 150}};
      var anim2 = {e:$c_logo,p:{opacity:0},o:{ delay: 150,display:"none",duration: 150,complete:function(){
          typeChars();
      }}};
      var anim3 = {e:$c_shield_w,p:{scale:28},o:{display: "block",duration: 500,delay:1600,easing: "easeInOutQuart"}};
      var anim4 = {e:$c_shield_p,p:{scale:28},o:{display: "block",duration: 500,delay:250,easing: "easeInOutQuart",sequenceQueue: false,complete:function(){
          $(".center-ct").hide();
          $("body").addClass("preloaded");
      }}};
      // var anim5 = {e:$c_left,p:{translateX:'-100%'},o:{duration:300,easing: "easeInOutQuart"}};
      // var anim6 = {e:$c_right,p:{translateX:'100%'},o:{duration:300,easing: "easeInOutQuart",sequenceQueue: false,complete:function(){
      //   end();
      // }}};


      // var end = function(){
      //   $("body").addClass("preloaded");
      //   $("#loader-wrapper").hide();
      // }

      // var scrollT = $(window).scrollTop()+1;
      var sequence = [anim1,anim2,anim3,anim4,
        {e:$c_loader,p:{opacity:0},o:{display:"none",duration:300,easing: "easeInOutQuart",complete:function(){
            // $("body").scrollTop(scrollT);
            $("body").velocity("scroll", { offset: 1+'px'});
        }}}
      ];
      var sequenceAll = name_anims.concat(sequence);

      if(this.readCookie('preload') == null){
        $.Velocity.RunSequence(sequenceAll);
        this.createCookie('preload',1,1);
      }
      else{*/
        $("body").addClass("preloaded");
      /*}*/

      var version = this.detectIE();
      if (version === false) {

      } else if (version >= 12) {
        $("html").addClass('ie Edge' + version);
      } else {
        $("html").addClass('ie IE' + version);
      }

      if (!Modernizr.cssvhunit) {
        $(".banner").css("height",$(window).height());
      }
      window.addEventListener('resize', this.handleWindowResize);
  }
}
</script>

<style scoped>
/*.slide-fade-enter-active {
  transition: all .8s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter {
  transform: translateX(-100%);
  -webkit-transform: translateX(-100%);
  opacity: 0;
}
.slide-fade-leave-active{
  transform: translateX(50%);
  -webkit-transform: translateX(50%);
  opacity: 0;
}
*/

/*#loader-wrapper {
    z-index: 2000;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-family: "palatino-linotype","Helvetica Neue",Helvetica,STXihei, "华文细黑","Microsoft YaHei", "微软雅黑", SimSun, "宋体", Heiti, "黑体", sans-serif;
    background-color: #2e3257;
}
#loader-wrapper .loader-section {
    position: fixed;
    top: 0;
    width: 51%;
    height: 100%;
    background: #2e3257;
}
 
#loader-wrapper .loader-section.section-left {
    left: 0;
}
 
#loader-wrapper .loader-section.section-right {
    right: 0;
}
.center-ct{
  color:#E7BD85;
}
.center-ct .c-ele{
  display: none;
  opacity: 0;
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate3d(-50%,-50%,0);
  display: inline-block;
}
.center-ct .c-scale{
  transform:translate3d(-50%,-50%,0) scale(0);
}
.center-ct .c-words{
  font-size: 48px;
  margin-top: 10px;
  font-style:italic;
}
.center-ct .c-shield{
  opacity: 1;
  width: 85px;
  height: 85px;
}
.no-js #loader-wrapper,.no-js .loader-holder {
    display: none;
}
.loader-holder {
  height: 100vh;
  background-color: #2e3257;
}
.preloaded .loader-holder,.preloaded #loader-wrapper{
  display: none;
}*/
</style>
