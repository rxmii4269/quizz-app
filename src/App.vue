<template>
  <div id="app" class="flex flex-col min-h-screen">
    <router-view class="flex-grow mx-auto p-8" />
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Footer
  }
};
</script>
