<template>
  <div class="shopcar">
    <navbar />
    <vancard />
    <foot />
  </div>
</template>
<script>
import navbar from "@/components/search/navbar.vue";
import foot from "@/components/search/footer.vue";
import vancard from "@/components/search/vancard.vue";
export default {
  components: {
    navbar,
    foot,
    vancard
  },
  methods: {}
};
</script>

