<template>
  <div>
    <p class="font-extrabold text-blue-900 text-lg mr-6">{{ question }}</p>
    <div>
      <p
        v-for="(answer, index) in answers"
        :key="index"
        class="border border-solid rounded-lg p-2 pl-3 m-2 mx-0 mb-5 cursor-pointer hover:text-white hover:border-opacity-0 text-purple-500 hover:bg-orange-500 border-purple-500"
        :class="{
          correct: answer.isCorrect && pickedAnswer,
          incorrect: !answer.isCorrect && pickedAnswer === answer
        }"
        @click="selectAnswer(answer)"
      >
        <span class="pr-4 text-lg font-bold">{{ answerLetters[index] }}</span>
        {{ answer.Ans }}
      </p>
    </div>
    <div class="flex justify-end">
      <button hidden class="rounded-lg bg-orange-500 px-6 py-2 text-white">
        Next
      </button>
    </div>
  </div>
</template>

<script>
// import CheckCircleOutline from "icons/CheckCircleOutline";
import { mapState } from "vuex";
export default {
  data: function() {
    return {
      answerLetters: ["A", "B", "C", "D"],
      correctAnswer: null,
      pickedAnswer: null
    };
  },
  // components: {
  //   CheckCircleOutline
  // },
  computed: mapState({
    question: state => state.question,
    answers: state => state.answers
  }),
  methods: {
    selectAnswer(answer) {
      this.pickedAnswer = answer;
      this.correctAnswer = this.$store.getters.correctAns[0].Ans;
      if (answer.Ans === this.correctAnswer) {
        console.log(this.$store.getters.correctAns);
        this.$store.dispatch("incrementScore");
      }
    }
  }
};
</script>

<style scoped>
.correct {
  background: #60bf88;
  border-color: #60bf88;
}

.incorrect {
  background: #ea8282;
  border-color: #ea8282;
}
</style>
