<template>
  <div class="text-center my-4 mx-4">
    <img
      class="winners"
      src="@/assets/images/undraw_winners_ao2o 2.svg"
      alt=""
    />
    <h1
      class="capitalize text-3xl text-center mb-1 font-extrabold text-blue-900"
    >
      Results
    </h1>
    <p class="text-blue-900 mb-10">
      You got
      <span class="text-green-400 text-3xl font-bold  ">{{ score }}</span>
      correct answers
    </p>
    <button
      class="border-2 font-bold text-center text-blue-900 border-blue-900 rounded-lg py-1 px-6 text-sm"
    >
      Try again
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: mapState({
    score: state => state.score
  })
};
</script>

<style scoped>
.winners {
  height: 100px;
  width: 140px;
  display: inline-block;
}
</style>
