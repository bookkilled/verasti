<template id="dialog-template">
    <div class="dialogs">
        <div class="dialog" v-bind:class="{ 'dialog-active': show,'primarybg':memberbg }">
            <div class="dialog-content">
                <div class="close" @click="$emit('close')">
                    <span></span>
                    <span></span>
                </div>
                <slot name="header"></slot>
                <slot name="body"></slot>
                <slot name="footer"></slot>
            </div>
        </div>
        <div class="dialog-overlay"></div>
    </div>
    <!--   <modal :show="showmember" @close="showmember=false" :memberbg="memberbg">
    <div class="dialog-body" slot="body" v-if="selmember">
      <div class="member-avatar">
      <img :src="selmember.avatar">
      </div>
      <div>{{selmember.des}}</div>
    </div>
  </modal> -->
</template>
<script>
export default {
    props: ['show','memberbg']
}
</script>
<style scoped>
.dialog {
    width: 900px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 2000;
    transition:height .35s ease-in-out;
    overflow: hidden;
    height: 0;
}
.dialog-content {
    background: #fff;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    transition:opacity .35s ease-in-out;
    opacity: 0;
}
.dialog-active{
    height: auto;
}
.dialog-active .dialog-content {
    opacity: 1;
}

.dialog-active ~ .dialog-overlay {
    opacity: 1;
    visibility: visible;
}

.dialog .dialog-header {
    background: #cb4a70;
    color: #fff;
}
.dialog .dialog-title {
    margin: 0;
    font-size: 2em;
    text-align: center;
    font-weight: 200;
    line-height: 2em;
}
.dialog .dialog-body {
    padding: 2em;
}

.dialog .dialog-footer {
    margin: 0 2em;
    padding: 2em 0;
    text-align: right;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.dialog-overlay {
    content: "";
    position: fixed;
    visibility: hidden;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1050;
    opacity: 0;
    background: rgba(0, 0, 0, 0);
    transition: all .6s;
}

.close {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 1rem;
    right: 1rem;
    transition: .4s -webkit-transform cubic-bezier(.19,1,.22,1);
    transition: .4s transform cubic-bezier(.19,1,.22,1);
}
.close>span {
    position: relative;
    display: block;
    width: 100%;
    height: 2px;
    background-color: #000;
    margin-bottom: 3px;
    overflow: hidden;
}
.close>span:first-child {
    -webkit-transform: translate3d(0,10px,0) rotate3d(0,0,1,-45deg);
    transform: translate3d(0,10px,0) rotate3d(0,0,1,-45deg);
}
.close>span:last-child {
    -webkit-transform: translate3d(0,5px,0) rotate3d(0,0,1,45deg);
    transform: translate3d(0,5px,0) rotate3d(0,0,1,45deg);
}

</style>