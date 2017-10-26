<template>
  <div class="partner">
	<app-header :title="title" navhome='partner'></app-header>
	<section class="banner bannerbg">
    <div class="container">
      <div class="row content text-center">
        <h1 class="caption txt-purple txtXL wow fadeInLeft" data-wow-delay=".2s">PARTICIPANTS<br><small class="txt-white">合作 / 开放 / 共赢</small>
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
      <div class="row">
          <div class="col-xs-6 col-sm-3"><img src="../../static/img/partner_img_1.jpg" alt="" /></div>
          <div class="col-xs-6 col-sm-3"><img src="../../static/img/partner_img_2.jpg" alt="" /></div>
          <div class="col-xs-6 col-sm-3"><img src="../../static/img/partner_img_3.jpg" alt="" /></div>
          <div class="col-xs-6 col-sm-3"><img src="../../static/img/partner_img_4.jpg" alt="" /></div>
      </div>
    </div>
    <div class="pimglist bc203b54">
      <div class="row">
          <div class="col-xs-6 col-sm-3"><img src="../../static/img/partner_img_5.jpg" alt="" /></div>
          <div class="col-xs-6 col-sm-3"><img src="../../static/img/partner_img_6.jpg" alt="" /></div>
          <div class="col-xs-6 col-sm-3"><img src="../../static/img/partner_img_7.jpg" alt="" /></div>
          <div class="col-xs-6 col-sm-3"><img src="../../static/img/partner_img_8.jpg" alt="" /></div>
      </div>
    </div>
    <div class="pimglist bc22405a">
      <div class="row">
          <div class="col-xs-6 col-sm-3"><img src="../../static/img/partner_img_9.jpg" alt="" /></div>
          <div class="col-xs-6 col-sm-3"><img src="../../static/img/partner_img_10.jpg" alt="" /></div>
          <div class="col-xs-6 col-sm-3"><img src="../../static/img/partner_img_11.jpg" alt="" /></div>
          <div class="col-xs-6 col-sm-3"><img src="../../static/img/partner_img_12.jpg" alt="" /></div>
      </div>
    </div>
    <div class="pimglist bc203b54">
      <div class="row">
          <div class="col-xs-6 col-sm-3"><img src="../../static/img/partner_img_13.jpg" alt="" /></div>
          <div class="col-xs-6 col-sm-3"><img src="../../static/img/partner_img_14.jpg" alt="" /></div>
          <div class="col-xs-6 col-sm-3"><img src="../../static/img/partner_img_15.jpg" alt="" /></div>
          <div class="col-xs-6 col-sm-3"><img src="../../static/img/partner_img_16.jpg" alt="" /></div>
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