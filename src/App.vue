<template>
  <div v-show="!loader" id="app">
    <router-view/> 
    <div class="toast position-fixed bottom-0 left-0 z-index-4 ml-3" data-delay="8000">
      <div :class="['toast-header', {'bg-primary':alert.type == 0, 'bg-danger':alert.type == 1}]">
        <strong class="mr-auto text-white">{{alert.title}}</strong>
        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="toast-body">
        <span v-html="alert.msg"></span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import $ from 'jquery'

export default {
  created(){
    this.userAuthOnState();
    this.getDatas(['Users'])
  },
  computed: {
    ...mapState(["alert","Users"]),
    loader(){      
      if(this.Users.length){
        this.closeLoader()
        return false
      }else{
        return true
      }
      
    }
  },
  methods:{
    ...mapActions(["userAuthOnState","getDatas"]),
    closeLoader(){
      setTimeout(function () {
          $('#jsPreloader').fadeOut(500, function () {
            $('body').removeClass('overflow-hidden');
            $(this).remove();
          });
        }, 1000);
    }
  }
};
</script>
