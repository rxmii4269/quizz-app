<template>
  <div>
    <p class="font-extrabold text-blue-900 text-lg mr-6">{{ getQuestion }}</p>
    <div>
      <p
        class="border border-solid border-purple-500 text-purple-500 rounded-lg p-2 pl-3 m-2 mx-0 mb-5 hover:bg-orange-500 hover:text-white hover:border-opacity-0"
        @click="getResponse"
      >
        <span class="pr-4 text-lg font-bold">A</span>
        {{ getAnswers[0].Ans }}
      </p>
      <p
        class="border border-solid border-purple-500 text-purple-500 rounded-lg p-2 pl-3 m-2 mx-0 mb-5 hover:bg-orange-500 hover:text-white hover:border-opacity-0"
      >
        <span class="pr-4 text-lg font-bold">B</span>
        {{ getAnswers[1].Ans }}
      </p>
      <p
        class="border border-solid border-purple-500 text-purple-500 rounded-lg p-2 pl-3 m-2 mx-0 mb-5 hover:bg-orange-500 hover:text-white hover:border-opacity-0"
      >
        <span class="pr-4 text-lg font-bold">C</span>
        {{ getAnswers[2].Ans }}
      </p>
      <p
        class="border border-solid border-purple-500 text-purple-500 rounded-lg p-2 pl-3 m-2 mx-0 mb-5 hover:bg-orange-500 hover:text-white hover:border-opacity-0"
      >
        <span class="pr-4 text-lg font-bold">D</span>
        {{ getAnswers[3].Ans }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      answers: []
    };
  },
  computed: {
    getQuestion() {
      return this.$store.state.question;
    },
    getAnswers() {
      return this.$store.state.answers;
    }
  },
  methods: {
    getResponse({ target }) {
      let response = target.lastChild.data.trim();
      console.log(response);
      this.answers.forEach(Element => {
        console.log(Element.Ans);
        if (response === Element.Ans) {
          console.log(true);
        }
      });
    }
  }
};
</script>
