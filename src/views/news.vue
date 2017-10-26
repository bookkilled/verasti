<template>
  <div class="news">
	<app-header :title="title" navhome='news'></app-header>
	<section class="banner newsbg">
        <div class="roundline row">
            <div class="rleft col-sm-6 col-xs-6"></div>
            <div class="rright col-sm-6 col-xs-6"></div>
        </div>
        <div class="bgtxt">
            <h1 class="wow fadeInLeft" data-wow-delay=".2s" >WHAT IS VERASTI?</h1>
            <p class="wow fadeInLeft" data-wow-delay=".2s" >他是一个匹配金融交易各方的网络</p>
        </div>
    </section>
    <section class="newsbox" v-if="pcsite">
        <div class="newsLine"></div>
        <div class="newsLeft">
            <a class="newsModule" v-for="(el,index) in newsList" :key="index" v-if="(index+1)%2 == 1" v-bind:href="'/newsdetail?pageid='+el.id">
                <p class="newsModuleTitle wow fadeInLeft" data-wow-delay=".2s">{{ el.title }}</p>
                <div class="newsModuleImg wow fadeInLeft" data-wow-delay=".2s"><img v-bind:src="el.coverImageUrl"></div>
                <span class="newsModuleMore wow fadeInLeft" data-wow-delay=".2s">查看全部</span>
                <div class="clear"></div>
                <span v-bind:class="{'whiteLeftLine wow fadeInLeft':true,'yellowLeftLine': index == 0}" v-bind:style="{top: '20%'}"  data-wow-delay=".2s">{{ el.postDate }}</span>
            </a>
            <!-- <div class="newsModule" v-for="(el,index) in newsList" :key="index" v-if="index == 1">
                <p class="newsModuleTitle">{{ el.title }}</p>
                <div class="newsModuleImg"><img v-bind:src="el.coverImageUrl"></div>
                <a v-bind:href="el.href" class="newsModuleMore">查看全部</a>
                <div class="clear"></div>
                <span class="whiteLeftLine">{{ el.postDate }}</span>
            </div> -->
        </div>
        <div class="newsRight">
            <a class="newsModule" v-for="(el,index) in newsList" :key="index" v-if="(index+1)%2 == 0" v-bind:href="el.href">
                <p class="newsModuleTitle wow fadeInRight" data-wow-delay=".2s">{{ el.title }}</p>
                <div class="newsModuleImg wow fadeInRight" data-wow-delay=".2s"><img v-bind:src="el.coverImageUrl"></div>
                <span class="newsModuleMore wow fadeInRight" data-wow-delay=".2s">查看全部</span>
                <div class="clear"></div>
                <span class="whiteRightLine wow fadeInRight" v-bind:style="{bottom: '20%'}"  data-wow-delay=".2s">{{ el.postDate }}</span>
            </a>
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
        <a v-bind:href="'/newsdetail?pageid='+el.id" class="mitem wow fadeInLeft" data-wow-delay=".2s" v-for="(el,index) in newsList" :key="index">
            <div v-bind:class="['mline',(index == 0 ? 'first' : '')]"></div>
            <span class="mpointer"></span>
            <p class="mdate">{{ el.postDate }}</p>
            <p class="mtit">{{ el.title }}</p>
            <p class="msummary">{{ el.summary }}</p>
            <p class="ming"><img v-bind:src="el.coverImageUrl" width="100%"></p>
            <p style="text-align:right"><span class="mlink">查看全部</span></p>
            <div v-if="index == newsList.length-1" class="lastline"></div>
        </a>
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
      totalnum: 0,
      totalpage: 0,
      newsList: [], // 当前新闻列表
      newsInfo: {},
      pagenum: 1,
      cuspagenum: 4,
      liststips: /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent) ? '更多大事记 >>' : '更多'
    }
  },
  mounted:function(){
    var vm = this;
    api.getNews(vm.pagenum).then(function (res) {
        var data = res;
        var l = data.list.length > vm.cuspagenum ? vm.cuspagenum : data.list.length;
        vm.totalnum = data.pageInfo.totalCount;
        vm.totalpage = data.pageInfo.totalPage;
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
        if(data.list.length < data.pageInfo.pageSize) {
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
        _.pagenum <= _.totalpage && api.getNews(_.pagenum).then(function (res) {
            var data = res;
            var l = data.list.length;
            _.totalnum = data.pageInfo.totalCount;
            _.totalpage = data.pageInfo.totalPage;
            for (var i = 0;i<l;i++) {
                _.newsList.push({
                    title: data.list[i].title,
                    coverImageUrl: data.list[i].coverImageUrl,
                    postDate: data.list[i].postDate,
                    href: 'newsdetail?pageid=' + data.list[i].id,
                    detail: data.list[i].details,
                    summary: data.list[i].summary,
                    id: data.list[i].id
                });
            }
            if(data.list.length < data.pageInfo.pageSize) {
                _.liststips = '没有更多了'
            }
            console.log(_.totalList.length,_.totalnum );
        },function (err) {
            // vm.errstate = true
            // vm.errmsg = '接口请求异常！'
        }).always(function(){
            // vm.loading = false
        });
        // var l = 0;
        // if (_.totalList.length > (_.pagenum-1)*_.cuspagenum) {
        //     l = _.pagenum*_.cuspagenum;
        //     for (var i = (_.pagenum-1)*_.cuspagenum;i<l;i++) {
        //         _.newsList.push({
        //             title: _.totalList[i].title,
        //             coverImageUrl: _.totalList[i].coverImageUrl,
        //             postDate: _.totalList[i].postDate,
        //             href: 'newsdetail?pageid=' + _.totalList[i].id,
        //             detail: _.totalList[i].details
        //         });
        //     }
        // } else {
        //     _.liststips = '没有更多了'
        // }
      }
  }
}
</script>