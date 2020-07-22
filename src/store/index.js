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
    countries: [],
    score: 0,
    answers: [],
    question: ""
  },
  getters: {
    correctAns: state => {
      return state.answers.filter(answers => answers.isCorrect);
    }
  },
  mutations: {
    SAVE_COUNTRIES(state, countries) {
      state.countries = countries;
    },
    GENERATE_ANSWERS(state, answers) {
      state.answers = answers;
    },
    GENERATE_QUESTION(state, question) {
      state.question = question;
    }
  },
  actions: {
    getCountries({ commit, dispatch }) {
      Vue.prototype.$http
        .get("all?fields=name;capital;flag")
        .then(result => {
          commit("SAVE_COUNTRIES", result.data);
          dispatch("generateQuestion");
        })
        .catch(error => {
          throw new Error(`API ${error}`);
        });
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
    },
    generateQuestion({ commit, dispatch }) {
      let countries = this.state.countries;
      let randNum = Math.floor(Math.random() * countries.length);
      let randomCapital = countries[randNum].capital;
      let question = `${randomCapital} is the capital of`;
      if (typeof randNum !== "undefined") {
        commit("GENERATE_QUESTION", question);

        countries.forEach(Element => {
          if (randomCapital === Element.capital) {
            dispatch("getAnswers", Element.name);
          }
        });
      }
    }
  },
  modules: {}
});
