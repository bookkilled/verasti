<template>
  <div class="newsdetail">
	<app-header :title="title"></app-header>
	<section class="banner newsdetailbg"></section>
  <section class="ndetailbox">
    <div class="row">
      <div class="col-xs-12 col-sm-8 left">
        <p class="tit">{{ ptitle }}</p>
        <p class="tag">{{ pdate }} {{ pAuthor }}</p>
        <div class="info" v-html="pmsg">
          <!-- <p>8月30日，“2017全球(上海)人工智能创新峰会”在上海徐汇西岸艺术中心成功召开。此次峰会由工信部、科技部、国家发展改革委指导，上海市经济信息化委、市科委、市发展改革委、徐汇区政府、中国人工智能产业发展联盟共同主办，是上海市2017年举办的人工智能最高规格的会议，并获得了国际顶尖的人工智能科学家的莅临。<br>
作为上海市首次召开的全球性的人工智能峰会，“2017全球(上海)人工智能创新峰会”以最具前瞻性和国际化的视野，聚焦最前沿的国内外人工智能技术趋势，专家智库资源，突出上海在人工智能方面的全球性的合作。“万亿级市场正在被撬动”，现场嘉宾围绕人工智能未来发展、智能化卓越城市、脑机融合、商业价值突破、智能应用以及合作共赢等关键议题，展开讨论，交流和展示了国内外人工智能的发展现状和经验成果。
<br><br><br>
峰会批准了24家国内外知名企业参展，包括百度、阿里、腾讯、微软、领英、科大讯飞、中科创达等，更有来自中国工程院、中国科学院、麻省理工学院、德国工程科学院的专家学者助阵支持！VERASTI凭借过硬的系统与技术，成功通过层层筛选，最终与百度，助理来也等AI公司同台展示自己的产品。 </p>
          <p><img src="../../static/img/ndt_img_3.jpg"></p>
          <p>
VERASTI展示了其在合规方面的智能应用，悟空合规风控系统。从2016年5月至2017年5月，共有37次券商的违规，其中合规违规已经占到整体违规的40%以上，可见券商合规问题的突出。悟空系统，通过对各种交易数据的智能分析，帮助了金融机构在合规方面进行更有效率和智能化的管理，大大降低了金融机构的合规风险。
<br><br>
VERASTI作为一家为金融机构提供证券及金融衍生品交易整体解决方案的高科技公司，做的远不止于此，同时拥有技术领先的实时交易系统、量化直连服务以及独特的私募导流能力等业务；公司以“监管科技为根本，合规为标准，极简为己任”的工作理念，开创统一的跨市场跨金融行业交易入口，提供企业级的交易总线服务。目前已与10多家证券期货公司签订正式合作协议。
<br><br>
随着互联网金融平台和金融科技公司的兴起，如今金融行业已经广泛与人工智能技术相结合，我们有理由相信，随着人工智能技术的不断提高，必定会给金融行业带来广泛而深刻的影响。VERASTI也将继续深化和发展金融技术研究与应用，与合作伙伴共同助力智能产业与金融的融合发展！</p> -->
        </div>
      </div>
      <div class="col-xs-12 col-sm-4 right">
        <div class="rightTitle">最近大事</div>
        <div class="rightImg"><img src="../../static/img/ndt_img_4.jpg"></div>
        <div class="rightText">VERASTI受邀于杭州玉皇山南基金小镇管委会-私募的合规化管理</div>
        <div class="rightImg"><img src="../../static/img/ndt_img_2.jpg"></div>
        <div class="rightText">VERASTI受邀参加由斯坦福校友会与杉数科技共同 主办的关于AI与初创公司的讨论会</div>
        <div class="rightTitle">联系我们</div>
        <div class="rightCode">
          <img src="../../static/img/ndt_img_1.jpg">
          <div class="rightCodeText">微信公众号：VERASTI</div>
        </div>
      
      </div>
      <div style="clear:both"></div>
    </div>
  </section>
	<section>{{ pageID }}</section>
	<app-footer></app-footer>
  </div>
</template>
<script>
export default {
  data :function() {
    return {
        name:"newsDetail",
        title:"NewsDetail",
        pageID: this.$route.query.pageid,
        ptitle: localStorage.getItem('ptitle'),
        pdate: localStorage.getItem('pdate'),
        pAuthor: localStorage.getItem('pAuthor'),
        pmsg: localStorage.getItem('pmsg')
    }
  },
  mounted () {
    localStorage.setItem('ptitle',this.$route.params.detail.title)
    localStorage.setItem('pdate',this.$route.params.detail.postDate)
    localStorage.setItem('pAuthor',this.$route.params.detail.nickName)
    localStorage.setItem('pmsg',this.$route.params.detail.details)
    console.log(this.$route.params.detail)
  }
}
</script>