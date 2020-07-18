<template>
  <div>
    <p class=" font-extrabold text-blue-900 text-lg mr-6">
      {{ generateQuestion }}
    </p>
    <div>
      <p
        class="border border-solid border-purple-500 text-purple-500 rounded-lg p-2 pl-3 m-2 mx-0 mb-5 hover:bg-orange-500 hover:text-white hover:border-opacity-0"
      >
        <span class="pr-4 text-lg font-bold">A</span>
        {{ answers[0].Ans }}
      </p>
      <p
        class="border border-solid border-purple-500 text-purple-500 rounded-lg p-2 pl-3 m-2 mx-0 mb-5 hover:bg-orange-500 hover:text-white hover:border-opacity-0"
      >
        <span class="pr-4 text-lg font-bold">B</span>
        {{ answers[1].Ans }}
      </p>
      <p
        class="border border-solid border-purple-500 text-purple-500 rounded-lg p-2 pl-3 m-2 mx-0 mb-5 hover:bg-orange-500 hover:text-white hover:border-opacity-0"
      >
        <span class="pr-4 text-lg font-bold">C</span>
        {{ answers[2].Ans }}
      </p>
      <p
        class="border border-solid border-purple-500 text-purple-500 rounded-lg p-2 pl-3 m-2 mx-0 mb-5 hover:bg-orange-500 hover:text-white hover:border-opacity-0"
      >
        <span class="pr-4 text-lg font-bold">D</span>
        {{ answers[3].Ans }}
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
    generateCapitals() {
      let genCapitals = this.$store.state.capitals;
      if (typeof genCapitals !== "undefined") {
        return this.$store.state.capitals;
      } else {
        return "true";
      }
    },
    generateQuestion() {
      let randnum = Math.floor(Math.random() * this.generateCapitals.length);
      let randomCapital = this.generateCapitals[randnum];
      let question = `${randomCapital} is the capital of`;
      if (typeof randnum !== "undefined") {
        this.generateAnswers(randomCapital, randnum);
      }
      return question;
    }
  },
  methods: {
    generateAnswers(randomCapital, randnum) {
      if (typeof randomCapital !== "undefined") {
        let country = this.$store.state.countries[randnum].name;
        this.$store.dispatch("getAnswers", country);
        console.log(this.$store.state.answers);
        this.answers = this.$store.state.answers;
      }
    }
  }
};
</script>
