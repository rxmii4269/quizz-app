<template>
  <div id="app" class="flex flex-col min-h-screen">
    <router-view class="mx-auto my-auto p-8"> </router-view>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import FooterComponent from "@/components/Footer.vue";

export default {
  components: {
    FooterComponent,
  },
};
</script>
