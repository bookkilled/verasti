<template>
  <div class="news">
	<app-header :title="title"></app-header>
	<section class="banner newsbg">
        <div class="roundline row">
            <div class="rleft col-sm-6"></div>
            <div class="rright col-sm-6"></div>
        </div>
    </section>
    <section class="newsbox">
        <div class="newsLine"></div>
        <div class="newsLeft">
            <div class="newsModule">
                <p class="newsModuleTitle">VERASTI受邀于杭州玉皇山南基金小镇 管委会-私募的合规风控化管理</p>
                <div class="newsModuleImg"><img src="../../static/img/ndt_img_4.jpg"></div>
                <span class="newsModuleMore">查看全部</span>
                <div class="clear"></div>
                <span class="yellowLeftLine">2017-09-04</span>
            </div>
            <div class="newsModule">
                <p class="newsModuleTitle">VERASTI受邀于杭州玉皇山南基金小镇 管委会-私募的合规风控化管理</p>
                <div class="newsModuleImg"><img src="../../static/img/ndt_img_4.jpg"></div>
                <span class="newsModuleMore">查看全部</span>
                <div class="clear"></div>
                <span class="whiteLeftLine">2017-09-04</span>
            </div>
        </div>
        <div class="newsRight">
            <div class="newsModule mt225">
                <p class="newsModuleTitle">VERASTI受邀于杭州玉皇山南基金小镇 管委会-私募的合规风控化管理</p>
                <div class="newsModuleImg"><img src="../../static/img/ndt_img_4.jpg"></div>
                <span class="newsModuleMore">查看全部</span>
                <div class="clear"></div>
                <span class="yellowRightLine">2017-09-04</span>
            </div>
            <div class="newsModule">
                <p class="newsModuleTitle">VERASTI受邀于杭州玉皇山南基金小镇 管委会-私募的合规风控化管理</p>
                <div class="newsModuleImg"><img src="../../static/img/ndt_img_4.jpg"></div>
                <span class="newsModuleMore">查看全部</span>
                <div class="clear"></div>
                <span class="whiteRightLine">2017-09-04</span>
            </div>
        </div>
        <span class="point"></span>
    </section>
    <a href="javascript:;" class="morelink">更多</a>
	<app-footer></app-footer>
  </div>
</template>
<script>
import * as api from '../api'
export default {
  data: function() {
    return {
      name:"news",
      title:"News"
    }
  },
  beforeCreate:function(){
    let vm = this
    api.getNews().then(function (res) {
        console.log(res)
    },function (err) {
        // vm.errstate = true
        // vm.errmsg = '接口请求异常！'
    }).always(function(){
        // vm.loading = false
    });
  },//组件实例化之前: 举个栗子：可以在这加个loading事件
  mounted: function() {
      
  } 
}
</script>