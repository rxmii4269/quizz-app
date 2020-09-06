<template>
  <div class="relative">
    <h1 class="font-extrabold text-2xl uppercase text-white pb-2">
      Country Quiz
    </h1>
    <img
      v-if="!gameOver"
      class="test absolute"
      src="@/assets/images/undraw_adventure_4hum 1.svg"
      alt=""
    />
    <div class="round bg-white max-w-sm overflow-hidden px-12">
      <div class="py-8 pt-8">
        <!-- <Capital
          v-if="!gameOver"
          :key="component"
          @correct="correctValue"
        ></Capital> -->
        <Flag></Flag>
        <Result v-if="gameOver"></Result>
        <div class="flex justify-end">
          <button
            v-if="count == true"
            class="rounded-lg bg-orange-500 px-6 py-2 text-white font-extrabold text-xs"
            @click="nextQuestion"
          >
            Next
          </button>
          <button
            v-if="count == 'incorrect'"
            class="rounded-lg bg-orange-500 px-6 py-2 text-white font-extrabold text-xs"
            @click="showScore"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Capital from "@/components/Capital.vue";
import Flag from "@/components/Flag.vue";
import Result from "@/components/Result.vue";
export default {
  name: "Quiz",
  components: {
    // Capital,
    Result,
    Flag
  },
  data() {
    return { count: false, component: 0, gameOver: null };
  },
  mounted: function() {
    this.$store.dispatch("getCountries");
  },
  methods: {
    nextQuestion() {
      this.$forceUpdate();
      this.component += 1;
      this.$store.dispatch("generateQuestion");
      this.count = false;
    },
    correctValue: function(params) {
      this.count = params;
    },
    showScore() {
      this.gameOver = true;
      this.count = null;
    }
  }
};
</script>

<style scoped>
.test {
  height: 70px;
  top: 30px;
  right: 30px;
}
.round {
  border-radius: 9px;
}
</style>
