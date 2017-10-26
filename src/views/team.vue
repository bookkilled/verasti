<template>
  <div>
	<app-header :title="title" navhome='team'></app-header>
	<section class="banner"></section>
	<section>team</section>
	<app-footer></app-footer>
  </div>
</template>
<script>
export default {
  data :function() {
    return {
      name:"team",
    	title:"TEAM"
    }
  }
}
</script>