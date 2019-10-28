<template>
  <div id="app">       
    <div class="toast position-fixed bottom-0 right-0 z-index-4" data-delay="5000">
      <div :class="['toast-header', {'bg-success':alert.type == 0, 'bg-danger':alert.type == 1}]">
        <img src="@/assets/logo.png" class="rounded-circle mr-2 w-15 bg-white" alt="...">
        <strong class="mr-auto text-white">{{alert.title}}</strong>
        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="toast-body">
        <span v-html="alert.msg"></span>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["alert"]),
  },
};
</script>
