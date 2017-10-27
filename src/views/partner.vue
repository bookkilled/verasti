<template>
  <div class="partner">
	<app-header :title="title" navhome='partner'></app-header>
	<section class="banner bannerbg">
    <div class="container">
      <div class="row content text-center">
        <h1 class="caption txt-purple txtXL wow fadeInLeft" data-wow-delay=".3s">PARTICIPANTS<br><small class="txt-white">合作 / 开放 / 共赢</small>
        </h1>
        <div class="wow fadeInLeft txt-white bg-purple clearfix" data-wow-delay=".4s">
            <div class="col-xs-4 col-sm-4 border-r border-t">
              <h3 class="caption txt-orange">Subscription</h3>
              <p>机构订阅</p>
            </div>
            <div class="col-xs-4 col-sm-4 border-r border-t">
              <h3 class="caption txt-orange">Open Source</h3>
              <p>开源</p>
            </div>
            <div class="col-xs-4 col-sm-4 border-t">
              <h3 class="caption txt-orange">Fintech Community</h3>
              <p>金融社区</p>
            </div>
        </div>
      </div>
    </div>
  </section>
	<section class="pimgbox">
    <div class="pimglist bc22405a">
      <div class="row wow fadeInLeft" data-wow-delay=".3s">
          <div class="col-xs-6 col-sm-3"><img src="../../static/img/partner_img_1.jpg" alt="" /><span>东海证券</span></div>
          <div class="col-xs-6 col-sm-3"><img src="../../static/img/partner_img_2.jpg" alt="" /><span>国联证券</span></div>
          <div class="col-xs-6 col-sm-3"><img src="../../static/img/partner_img_3.jpg" alt="" /><span>联储证券</span></div>
          <div class="col-xs-6 col-sm-3"><img src="../../static/img/partner_img_4.jpg" alt="" /><span>申银万国期货</span></div>
      </div>
    </div>
    <div class="pimglist bc203b54">
      <div class="row wow fadeInLeft" data-wow-delay=".3s">
          <div class="col-xs-6 col-sm-3"><img src="../../static/img/partner_img_5.jpg" alt="" /><span>华泰证券</span></div>
          <div class="col-xs-6 col-sm-3"><img src="../../static/img/partner_img_6.jpg" alt="" /><span>信达证券</span></div>
          <div class="col-xs-6 col-sm-3"><img src="../../static/img/partner_img_7.jpg" alt="" /><span>财通证券</span></div>
          <div class="col-xs-6 col-sm-3"><img src="../../static/img/partner_img_8.jpg" alt="" /><span>华泰期货</span></div>
      </div>
    </div>
    <div class="pimglist bc22405a">
      <div class="row wow fadeInLeft" data-wow-delay=".3s">
          <div class="col-xs-6 col-sm-3"><img src="../../static/img/partner_img_9.jpg" alt="" /><span>中融汇信</span></div>
          <div class="col-xs-6 col-sm-3"><img src="../../static/img/partner_img_10.jpg" alt="" /><span>国贸·期货</span></div>
          <div class="col-xs-6 col-sm-3"><img src="../../static/img/partner_img_11.jpg" alt="" /><span>宝城期货</span></div>
          <div class="col-xs-6 col-sm-3"><img src="../../static/img/partner_img_12.jpg" alt="" /><span>通惠期货有限公司</span></div>
      </div>
    </div>
    <div class="pimglist bc203b54">
      <div class="row wow fadeInLeft" data-wow-delay=".3s">
          <div class="col-xs-6 col-sm-3"><img src="../../static/img/partner_img_13.jpg" alt="" /><span>广州金融控股集团有限公司</span></div>
          <div class="col-xs-6 col-sm-3"><img src="../../static/img/partner_img_14.jpg" alt="" /><span>信达期货</span></div>
          <div class="col-xs-6 col-sm-3"><img src="../../static/img/partner_img_15.jpg" alt="" /><span>国联期货</span></div>
          <div class="col-xs-6 col-sm-3"><img src="../../static/img/partner_img_16.jpg" alt="" /><span>东海期货</span></div>
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
      name:"partner",
    	title:"Partner"
    }
  }
}
</script>