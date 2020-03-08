<template>
  <div class="cla">
    <chattop/>
    <shopcard :msg="msg" />
  </div>
</template>
<script>
import chattop from "@/components/chat/chattop.vue";
export default {
  data() {
    return {
      msg: "https://yunnanbaiyao.tmall.com/"
    };
  },
  components: {
    chattop
  }
};
</script>
