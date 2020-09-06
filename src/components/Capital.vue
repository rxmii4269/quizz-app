<template>
  <div class="t">
    <p class="font-extrabold text-blue-900 pb-4 text-base1 mr-6">
      {{ question }}
    </p>
    <div class="mx-0">
      <p
        v-for="(answer, index) in answers"
        :key="index"
        class=" text-sm border border-solid rounded-lg p-1 px-18 pl-3 m-2 mx-0 mb-5 cursor-pointer hover:text-white hover:border-opacity-0 text-purple-500 hover:bg-orange-500 border-purple-500"
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
  </div>
</template>

<script>
// import CheckCircleOutline from "icons/CheckCircleOutline";
import { mapState } from "vuex";
export default {
  name: "Capital",
  data: function() {
    return {
      correctAnswer: null,
      pickedAnswer: null,
      count: false
    };
  },
  // components: {
  //   CheckCircleOutline
  // },
  computed: mapState({
    question: state => state.question,
    answers: state => state.answers,
    answerLetters: state => state.answerLetters
  }),
  watch: {
    count: function() {
      this.$emit("correct", this.count);
    }
  },
  methods: {
    selectAnswer(answer) {
      this.pickedAnswer = answer;
      this.correctAnswer = this.$store.getters.correctAns[0].Ans;
      if (answer.Ans === this.correctAnswer) {
        console.log(this.$store.getters.correctAns);
        this.$store.dispatch("incrementScore");
        this.count = true;
      } else {
        this.count = "incorrect";
      }
    }
  }
};
</script>

<style scoped>
.correct {
  background: #60bf88;
  border-color: #60bf88;
  color: white;
}

.incorrect {
  background: #ea8282;
  border-color: #ea8282;
  color: white;
}
</style>
