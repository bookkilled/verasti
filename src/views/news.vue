<template>
  <div class="news">
	<app-header :title="title"></app-header>
	<section class="banner newsbg">
        <div class="roundline row">
            <div class="rleft col-sm-6 col-xs-6"></div>
            <div class="rright col-sm-6 col-xs-6"></div>
        </div>
    </section>
    <section class="newsbox" v-if="pcsite">
        <div class="newsLine"></div>
        <div class="newsLeft">
            <div class="newsModule" v-for="(el,index) in newsList" :key="index" v-if="(index+1)%2 == 1">
                <p class="newsModuleTitle">{{ el.title }}</p>
                <div class="newsModuleImg"><img v-bind:src="el.coverImageUrl"></div>
                <a v-bind:href="'/newsdetail?pageid='+el.id" class="newsModuleMore">查看全部</a>
                <div class="clear"></div>
                <span v-bind:class="{'whiteLeftLine':true,'yellowLeftLine': index == 0}" v-bind:style="{top: '20%'}">{{ el.postDate }}</span>
            </div>
            <!-- <div class="newsModule" v-for="(el,index) in newsList" :key="index" v-if="index == 1">
                <p class="newsModuleTitle">{{ el.title }}</p>
                <div class="newsModuleImg"><img v-bind:src="el.coverImageUrl"></div>
                <a v-bind:href="el.href" class="newsModuleMore">查看全部</a>
                <div class="clear"></div>
                <span class="whiteLeftLine">{{ el.postDate }}</span>
            </div> -->
        </div>
        <div class="newsRight">
            <div class="newsModule" v-for="(el,index) in newsList" :key="index" v-if="(index+1)%2 == 0">
                <p class="newsModuleTitle">{{ el.title }}</p>
                <div class="newsModuleImg"><img v-bind:src="el.coverImageUrl"></div>
                <a v-bind:href="el.href" class="newsModuleMore">查看全部</a>
                <div class="clear"></div>
                <span class="whiteRightLine" v-bind:style="{bottom: '20%'}">{{ el.postDate }}</span>
            </div>
            <!-- <div class="newsModule" v-for="(el,index) in newsList" :key="index" v-if="index == 3">
                <p class="newsModuleTitle">{{ el.title }}</p>
                <div class="newsModuleImg"><img v-bind:src="el.coverImageUrl"></div>
                <a v-bind:href="el.href" class="newsModuleMore">查看全部</a>
                <div class="clear"></div>
                <span class="whiteRightLine">{{ el.postDate }}</span>
            </div> -->
        </div>
        <span class="point"></span>
    </section>
    <section class="newsbox" v-else>
        <h1 class="caption txt-purple txtXL wow fadeInLeft" data-wow-delay=".2s">MEMORABILIA<br><small class="txt-white">公司大事记</small>
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
    </section>
    <a href="javascript:;" class="morelink" @click="getMore">{{ liststips }}</a>
	<app-footer></app-footer>
  </div>
</template>
<script>
import * as api from '../api'
export default {
  data: function() {
    return {
      pcsite: /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent) ? false : true,
      name:"news",
      title:"News",
      totalList: [], // 总新闻列表
      newsList: [], // 当前新闻列表
      newsInfo: {},
      pagenum: 1,
      cuspagenum: 4,
      liststips: /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent) ? '更多大事记 >>' : '更多'
    }
  },
  mounted:function(){
    let vm = this;
    api.getNews().then(function (res) {
        var data = res;
        var l = data.list.length > vm.cuspagenum ? vm.cuspagenum : data.list.length;
        vm.newsInfo = data.pageInfo;
        vm.totalList = data.list;
        for (var i = 0;i<l;i++) {
            vm.newsList.push({
                title: data.list[i].title,
                coverImageUrl: data.list[i].coverImageUrl,
                postDate: data.list[i].postDate,
                href: 'newsdetail?pageid=' + data.list[i].id,
                detail: data.list[i].details,
                summary: data.list[i].summary,
                id: data.list[i].id
            });
        }
        if(data.list.length < vm.cuspagenum) {
            vm.liststips = '没有更多了'
        }
    },function (err) {
        // vm.errstate = true
        // vm.errmsg = '接口请求异常！'
    }).always(function(){
        // vm.loading = false
    });
  },//组件实例化之前: 举个栗子：可以在这加个loading事件
  methods: {
      getMore: function () {
        var _ = this;
        _.pagenum ++;
        var l = 0;
        if (_.totalList.length > (_.pagenum-1)*_.cuspagenum) {
            l = _.pagenum*_.cuspagenum;
            for (var i = (_.pagenum-1)*_.cuspagenum;i<l;i++) {
                _.newsList.push({
                    title: _.totalList[i].title,
                    coverImageUrl: _.totalList[i].coverImageUrl,
                    postDate: _.totalList[i].postDate,
                    href: 'newsdetail?pageid=' + _.totalList[i].id,
                    detail: _.totalList[i].details
                });
            }
        } else {
            _.liststips = '没有更多了'
        }
      }
  }
}
</script>