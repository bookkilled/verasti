<template>
  <div>
	<app-header :title="title" navhome='contact' class="contact"></app-header>
	<section class="banner contact">
    <div class="fullpage">
      <div class="bg banner-contact wow fadeIn"></div>
      <div class="contact-forms">
      <div class="row ">
        <div class="col-xs-12 col-sm-6 col-md-5 col-md-offset-1 col-lg-4 col-lg-offset-2">
          <div class="form wow fadeInUp" data-wow-delay=".4s">
            <!-- <h4 class="form-title">learn more about verasti</h4>
            <p>Thank you for  your interesting in Verasti. We are looking forward to connect with you.</p>
            <form class="form-horizontal">
              <input class="form-control" name="first_name" type="text" placeholder="First Name">
              <input class="form-control" name="last_name" type="text" placeholder="Last Name">
              <input class="form-control" name="company_name" type="text" placeholder="Company Name">
              <input class="form-control" name="Email" type="text" placeholder="Email">
              <input class="form-control" name="Phone" type="text" placeholder="Phone">
              <button type="button" name="submit" value="submit" class="btn btn-orange">SUBMIT</button>
            </form> -->
            <div class="form-learn">
              <h3 class="form-title">联系我们</h3>
              <h4><div class="form-line"></div>
              诺奚信息技术有限公司</h4>
              <ul class="list-unstyled">
                <li>公司地址：杭州江干区庆春东路西子国际C座2402室</li>
                <li>联系电话：0571-81999811</li>
                <li>传真：0571-86059588</li>
                <li>电子邮件：HR@nuoee.com</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-5 col-lg-4">
          <div class="form map wow fadeInUp" data-wow-delay=".4s">
            <!-- <h4 class="form-title">Magnitude Login</h4>
            <form class="form-horizontal">
              <fieldset disabled>
              <input class="form-control" name="u_name" type="text" placeholder="User Name">
              <input class="form-control" name="password" type="text" placeholder="Password">
              <button type="button" name="submit" value="submit" class="btn btn-orange">COMING SOON……</button>
              </fieldset>
            </form> -->
            <img src="/static/img/map.png" class="img-responsive">
          </div>
        </div>
      </div>
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
      name:"contact",
    	title:"CONTACT"
    }
  },
  mounted:function(){
    $('.form.map').css('visibility','visible').hide().fadeIn('slow');
  }
}
</script>