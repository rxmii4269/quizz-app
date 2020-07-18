import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://restcountries.eu/rest/v2"
});

Vue.prototype.$http = instance;

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    countries: Object,
    score: 0,
    capitals: Object,
    flags: Object,
    answers: Object
  },
  mutations: {
    SAVE_COUNTRIES(state, countries) {
      state.countries = countries;
    },
    SAVE_CAPITALS(state, capitals) {
      state.capitals = capitals;
    },
    SAVE_FLAGS(state, flags) {
      state.flags = flags;
    },
    GENERATE_ANSWERS(state, answers) {
      state.answers = answers;
    }
  },
  actions: {
    getCountries({ commit, dispatch }) {
      Vue.prototype.$http
        .get("all")
        .then(result => {
          commit("SAVE_COUNTRIES", result.data);
          dispatch("getCapitals");
          dispatch("getFlags");
        })
        .catch(error => {
          throw new Error(`API ${error}`);
        });
    },
    getCapitals({ commit }) {
      let x;
      let countries = this.state.countries;
      let capitals = [];
      for (x in countries) {
        capitals.push(countries[x].capital);
      }
      commit("SAVE_CAPITALS", capitals);
    },
    getFlags({ commit }) {
      let x;
      let countries = this.state.countries;
      let flags = [];
      for (x in countries) {
        flags.push(countries[x].flag);
      }
      commit("SAVE_FLAGS", flags);
    },
    getAnswers({ commit }, correctAns) {
      let answers = [];
      answers.push({ Ans: correctAns, isCorrect: true });
      for (var i = 0; i < 3; i++) {
        var rand = this.state.countries[Math.floor(Math.random() * 250)].name;
        answers.push({ Ans: rand, isCorrect: false });
      }
      function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = a[i];
          a[i] = a[j];
          a[j] = x;
        }
        return a;
      }

      commit("GENERATE_ANSWERS", shuffle(answers));
    }
  },
  modules: {}
});
