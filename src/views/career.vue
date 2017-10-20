<template>
  <div>
  <div class="svg-defs">
    <svg xmlns="http://www.w3.org/2000/svg" width="79.9" height="137.3" viewBox="0 0 79.876 137.32" style="display: none"><defs><path id="leader_line" d="M79 0l1 .5L1 137.3l-1-.5L79 0z" style="fill: #c8c8c8;"/></defs></svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="13" viewBox="0 0 17 13" style="display: none"><defs><path id="job_arrow" fill="currentColor" d="M16.5 7l-.2.2-5.6 5.8-.7-.7L15 7H0V6h15L10 .7l.7-.7 5.6 5.8.2.2h.5v1h-.5z"/></defs></svg>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" style="display: none">
      <filter id="greyscale">
      <feColorMatrix type="matrix" values="0.3333 0.3333 0.3333 0 0
        0.3333 0.3333 0.3333 0 0
        0.3333 0.3333 0.3333 0 0
        0 0 0 1 0" />
      </filter>
    </svg>
  </div>
	<app-header :title="title"></app-header>
	<section class="banner career">
    <div class="fullpage">
      <div class="bg banner-career"></div>
      <!-- <div class="bg banner-career-2 wow fadeIn" data-wow-delay=".2s"></div> -->
      <div class="intro text-center">
          <h1 class="wow fadeInLeft" data-wow-delay=".3s" data-wow-duration="1.5s">EVERYONE MATTERS</h1>
          <p class="wow fadeInLeft" data-wow-delay=".5s">VERASTI值得您信赖</p>
      </div>
    </div>
     <div class="arrow-down"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.5 17.7"><path fill="none" stroke="currentColor" stroke-width="2.5" stroke-miterlimit="10" d="M30.6 1L15.8 15.9.9.9"/></svg></div> 
  </section>
	<section class="p-tb-110 culture">
    <div class="container">
      <h1 class="title text-center wow fadeInUp" data-wow-delay=".2s">Culture</h1>
      <p class="mrg-b-50 text-center wow fadeInUp" data-wow-delay=".4s">VERASTI将成为专业领域的领军者</p>
      <img class="img-responsive center-block mrg-b-100 wow fadeInUp" data-wow-delay=".6s" src="static/img/career_img.jpg">
      <div class="leaders">
        <div class="leader wow fadeInUp" data-wow-delay=".8s">
          <div class="leader-img img-circle">
            <img src="static/img/leader_1.jpg" class="img-responsive">
            <div class="overlay-img text-center">
              <div class="overlay-txt">
              <h4>Neil</h4>
              <p>CEO</p>
              </div>
            </div>
          </div>
          <div class="leader-line hidden-xs"><svg width="79.9" height="137.3" viewBox="0 0 79.876 137.32">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#leader_line" x="0" y="0"></use>
            </svg></div>
          <div class="leader-txt"><p>Foster engagement amongst global financial markets.<br class="hidden-xs hidden-sm">
Build bridges for greater collaboration between institutions and trading firms.<br class="hidden-xs hidden-sm">
Share best practices and standardise knowledge.</p></div>
        </div>
      </div>
    </div>
  </section>
  <section class="p-tb-110 team-members">
    <div class="container">
      <h1 class="title text-center wow fadeInUp" data-wow-delay=".2s">Great Team</h1>
      <p class="mrg-b-100 text-center wow fadeInUp" data-wow-delay=".4s">VERASTI是一家面向企业级服务的金融科技初创公司，团队成员均具有丰富的
金融行业开发经验。<br class="hidden-xs">我们的愿景是在金融行业内构建
平台级公司。</p>
      <div class="members wow fadeInUp" data-wow-delay="1.3s">
          <div class="row">
            <div class="col-sm-3 col-xs-6" v-for="member in members">
              <a class="member" @click="showDialogM(member)" data-toggle="modal" data-target="#modal_member">
                <img :src="member.avatar" class="img-responsive">
                <div class="overlay text-center">
                  <h4>{{member.name}}</h4>
                  <!-- <p>{{member.job}}</p> -->
                </div>
              </a>
            </div>
          </div>
      </div>
    </div>
  </section>
  <section class="p-tb-110 jobs">
    <div class="container">
      <h1 class="title text-center wow fadeInUp" data-wow-delay=".2s">Current Openings</h1>
      <div class="job-filter wow fadeInUp" data-wow-delay=".4s">
        <div class="filter-group" data-filter-group="department">
            <a data-filter="*" class="current">不限</a>
            <a data-filter=".jishu">技术</a>
            <a data-filter=".chanpin">产品</a>
            <a data-filter=".sheji">设计</a>
            <a data-filter=".xiaoshou">销售</a>
            <a data-filter=".kefu">客服</a>
        </div>
            <span class="split-bar hidden-xs"></span>
        <div class="filter-group" data-filter-group="place">
            <a data-filter="*" class="current">不限</a>
            <a data-filter=".hangzhou">杭州</a>
            <a data-filter=".shanghai">上海</a>
        </div>
      </div>
      <div class="job-grid">
        <!-- <div class="grid-sizer col-xs-4"></div> -->
        <template v-for="job in jobs"> 
          <div class="job-item col-xs-12 col-sm-6" :class="[job.department,job.pType,'wow fadeInUp']" data-wow-delay=".6s">
            <div class="job-cnt text-center">
              <span class="caret"></span>
              <h4>{{job["title"]}}</h4>
              <p class="text-left">{{job.brief}}</p>
              <a class="btn btn-border"  @click="showDialogJ(job)" data-toggle="modal" data-target="#modal_job">查看详情<i><svg width="17" height="13" viewBox="0 0 17 13"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#job_arrow" x="0" y="0"></use></svg></i></a>
            </div>
          </div>
        </template>
      </div>
      <!-- <div class="text-center wow fadeInUp" data-wow-delay=".7s"><a class="btn btn-grey">更多职位<i><svg width="17" height="13" viewBox="0 0 17 13"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#job_arrow" x="0" y="0"></use></svg></i></a></div> -->
    </div>
  </section>
  <section>
    <div class="whatis">
      <!-- <div class="container text-center">
        <p class="center-block wow fadeInUp" data-wow-delay=".8s">VERASTI是一家年轻富有活力的专业的金融服务商。<br>
创始团队由国内金融机构高管，美国斯坦福大学海归，前阿里巴巴搜索数据库核心员工，华为总部通信专家，大型金融软件核心开发及交易所核心成员。<br>
我们的提倡起来，陈词滥调的风险，我们争取文化，你不会找到任何隔间。<br>
加入我们，现在就起航！</p>
      </div> -->
      <!-- <img src="static/img/job_bg2.jpg" class="img-responsive"> -->
    </div>
  </section>
  <div id="modal_member" class="modal fade modal-cus primarybg" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-body" v-if="selmember">
          <div class="row col-pull-down">
            <div class="col-xs-6 col-xs-offset-3 col-sm-4 col-sm-offset-0">
              <div class="member-avatar"><img :src="selmember.avatar" class="img-responsive"></div>
            </div>
            <div class="col-xs-12 col-sm-8 col-down">
                <h4 class="member-name">{{selmember.name}}</h4>
                <p>{{selmember.des}}</p>
            </div>
          </div>
        </div>
         <a class="close-modal" data-dismiss="modal" aria-label="Close"><span></span><span></span></a>
      </div>
    </div>
  </div>
  <div id="modal_job" class="modal fade modal-cus" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <a class="close-modal" data-dismiss="modal" aria-label="Close"><span></span><span></span></a>
        <div class="modal-body" v-if="seljob">
          <h4>{{seljob.title}}</h4>
          <div class="row ppy">
            <div class="col-sm-3">所属部门：{{seljob.departmentZh}}部</div>
            <div class="col-sm-3">招聘人数：{{seljob.wanted}}</div>
            <div class="col-sm-3">工作地点：{{seljob.place}}</div>
            <div class="col-sm-3 text-right">发布日期：{{seljob.date}}</div>
          </div>
          <div class="line"></div>
          <h4 class="t2">岗位描述</h4>
          <div v-html="seljob.des"></div>
          <h4 class="t2">岗位要求</h4>
          <div v-html="seljob.required"></div>
          <h4 class="t2">投递邮箱地址</h4>
          <a href="" class="email">hr@verasti.com</a>
          <div class="line"></div>
          <div class="text-center">
            <a class="btn btn-primary btn-lg" @click="submitOffer" href="mailto:hr@verasti.com">提交简历</a>
          </div>
        </div>
       
      </div>
    </div>
  </div>
	<app-footer></app-footer>
  </div>
</template>
<script>
var Isotope = require('isotope-layout');
export default {
  data :function() {
    return {
      name:"culture",
    	title:"CULTURE",
      selmember:null,
      seljob:null,
      // filters :{
      //   "department":"*",
      //   "place" :"*"
      // },
      filters :{},
      members:[
        {avatar:"static/members/m3.jpg",name:"Jerry",job:"Software Developer",des:"The shortest answer is doing."},
        {avatar:"static/members/m5.jpg",name:"Lisa",job:"Software Developer",des:"Today is an opportunity to get better. Don't waste it."},
        {avatar:"static/members/m7.jpg",name:"Haya",job:"Software Developer",des:"You are not in charge of the universe, you are in charge of yourself."},
        {avatar:"static/members/m4.jpg",name:"Helen",job:"Financial Staff",des:"The best preparation for tomorrow is doing your best today."},
        {avatar:"static/members/m8.jpg",name:"Manfred",job:"Software Developer",des:"Try not to become a man of success but rather try to become a man of value."},
        {avatar:"static/members/m6.jpg",name:"Evy",job:"Software Developer",des:"Go where you want to be and then circle back where you have to be."},
        {avatar:"static/members/m11.jpg",name:"Steven",job:"Software Developer",des:"Think twice before acting."},
        {avatar:"static/members/m2.jpg",name:"Ann",job:"Sales",des:"If you want to get success, you should use persistence as your good friend, experience as your reference, prudence as your brother and hope as your sentry."}
      ],
      jobs:require("../assets/jobs.json")
    }
  },
  methods:{
    showDialogM:function(item){
      this.selmember = item;
    },
    showDialogJ:function(item){
      this.seljob = item;
    },
    submitOffer:function(){
       $('#modal_job').modal('hide');
    }
  },
  mounted:function (){
      var vm = this;
      var iso = new Isotope('.job-grid',{
        // options
        itemSelector: '.job-item',
        layoutMode: 'fitRows',
        animationOptions: {
            duration: 750,
            easing: 'easeInOutQuad',
            queue: false
        }
      });
      function concatValues( obj ) {
        var value = '';
        for ( var prop in obj ) {
          value += obj[ prop ];
        }
        return value;
      }
      $(".job-filter a").click(function(){
        var $this = $(this);
        var $buttonGroup = $this.parents('.filter-group');
        var filterGroup = $buttonGroup.attr('data-filter-group');
        vm.filters[ filterGroup ] = $this.attr('data-filter');
        $this.siblings("a").removeClass("current");
        $this.addClass('current');
        var filterValue = concatValues( vm.filters );
        iso.arrange({ filter: filterValue });
      });
  }
}
</script>