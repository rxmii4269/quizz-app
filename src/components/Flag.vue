<template>
  <div>
    <img class="small rounded" :src="flagUrl" alt="" />
    <p class="font-extrabold text-blue-900 pb-4 text-base1 mr-6">
      Which country does this flag belong to?
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Flag",
  data: function() {
    return {};
  },
  computed: mapState({
    answerLetters: state => state.answerLetters,
    flagUrl: state => state.flagUrl
  })
};
</script>

<style scoped>
.small {
  height: 50px;
  width: 70px;
}
</style>
