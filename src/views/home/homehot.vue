<template>
  <div>
    <swipe />
    <gezi />
    <card />
  </div>
</template>
<script>
import gezi from "@/components/home/gezi.vue";
import card from "@/components/home/card.vue";
import swipe from "@/components/home/swipe.vue";
export default {
  components: {
    gezi,
    card,
    swipe
  }
};
</script>