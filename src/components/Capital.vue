<template>
  <div>
    <p class="font-extrabold text-blue-900 text-lg mr-6">{{ question }}</p>
    <div>
      <p
        v-for="(answer, index) in answers"
        :key="index"
        :class="baseStyles"
        @click="getResponse($event)"
      >
        <span class="pr-4 text-lg font-bold">{{ answerLetters[index] }}</span>

        {{ answer.Ans }}
      </p>
    </div>
    <div class="flex justify-end">
      <button
        v-if="isCorrect"
        class="rounded-lg bg-orange-500 px-6 py-2 text-white"
      >
        Next
      </button>
      <button
        v-if="isIncorrect"
        class="rounded-lg bg-orange-500 px-6 py-2 text-white"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
// import CheckCircleOutline from "icons/CheckCircleOutline";
import { mapState } from "vuex";
export default {
  // components: {
  //   CheckCircleOutline
  // },
  data: function() {
    return {
      baseStyles: {
        ["border border-solid rounded-lg p-2 pl-3 m-2 mx-0 mb-5 cursor-pointer hover:text-white hover:border-opacity-0 text-purple-500 hover:bg-orange-500 border-purple-500"]: true
      },
      answerLetters: ["A", "B", "C", "D"],
      isIncorrect: false,
      isCorrect: false
    };
  },
  computed: mapState({
    question: state => state.question,
    answers: state => state.answers
  }),
  methods: {
    getResponse({ target }) {
      let response = target.lastChild.data.trim();
      let correctAns = this.$store.getters.correctAns[0].Ans;
      if (response === correctAns) {
        console.log(this.$store.getters.correctAns);
        this.isCorrect = !this.isCorrect;
        this.isIncorrect = false;
      } else {
        this.isCorrect = false;
        this.isIncorrect = true;
      }
    },
    toggleClass: function({ target }) {
      this.isActive = !this.isActive;
      console.log(target.classList);
    }
  }
};
</script>
