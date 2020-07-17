<template>
  <div>
    <p class=" font-extrabold text-blue-900 text-lg pl-2">
      {{ generateQuestion }}
    </p>
    <div>
      <p
        class="border border-solid border-purple-500 text-purple-500 rounded-lg p-2 pl-3 m-2 mb-5 hover:bg-orange-500 hover:text-white hover:border-opacity-0"
      >
        A
      </p>
      <p
        class="border border-solid border-purple-500 text-purple-500 rounded-lg p-2 pl-3 m-2 mb-6 hover:bg-orange-500 hover:text-white hover:border-opacity-0"
      >
        B
      </p>
      <p
        class="border border-solid border-purple-500 text-purple-500 rounded-lg p-2 pl-3 m-2 mb-6 hover:bg-orange-500 hover:text-white hover:border-opacity-0"
      >
        C
      </p>
      <p
        class="border border-solid border-purple-500 text-purple-500 rounded-lg p-2 pl-3 m-2 mb-6 hover:bg-orange-500 hover:text-white hover:border-opacity-0"
      >
        D
      </p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    generateCapitals() {
      return this.$store.state.capitals;
    },
    generateQuestion() {
      let randomCapital = this.generateCapitals[
        Math.floor(Math.random() * this.generateCapitals.length)
      ];
      return `${randomCapital} is the capital of`;
    }
  }
};
</script>
