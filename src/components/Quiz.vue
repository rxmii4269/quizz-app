<template>
  <div>
    <h1 class="font-extrabold text-2xl uppercase text-white pb-2">
      Country Quiz
    </h1>
    <div class="rounded-lg bg-white max-w-sm overflow-hidden">
      <div class="px-6 py-4 pt-8">
        <Capital></Capital>
        <!-- <Flag></Flag> -->
      </div>
    </div>
  </div>
</template>

<script>
import Capital from "@/components/Capital.vue";
// import Flag from "@/components/Flag.vue";
export default {
  name: "Quiz",
  components: {
    Capital
    // Flag
  },
  mounted: function() {
    this.$store.dispatch("getCountries");
  }
};
</script>
