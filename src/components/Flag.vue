<template>
  <div>
    <img class="small rounded" :src="flagUrl" alt="" />
    <p class="font-extrabold text-blue-900 py-4 text-base1 mr-6">
      Which country does this flag belong to?
    </p>
    <div>
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
        <span class="pr-4 text-lg font-bold">
          {{ answerLetters[index] }}
        </span>
        {{ answer.Ans }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Flag",
  data: function() {
    return {
      correctAnswer: null,
      pickedAnswer: null,
      count: false
    };
  },

  computed: mapState({
    answerLetters: state => state.answerLetters,
    flagUrl: state => state.flagUrl,
    answers: state => state.answers
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
.small {
  height: 50px;
  width: 70px;
}

.correct {
  background: #60bf88;
  border-color: #60bf88;
  color: white;
}
.correct:hover {
  background: #60bf88;
}

.incorrect {
  background: #ea8282;
  border-color: #ea8282;
  color: white;
}
.incorrect:hover {
  background: #ea8282;
}
</style>
