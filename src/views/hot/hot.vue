<template>
  <div class="cla">
    <shopcard :msg="msg"/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "https://enfinitas.tmall.com/"
    };
  }
};
</script>
<style scoped Lang="less">
.cla {
  height: 100vh;
}
</style>