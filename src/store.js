import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  numbers: [1, 2, 3]
};

const mutations = {
  ADD_NUMBER(state, payload) {
    state.numbers.push(payload);
  },
  ADD_RANDOM_NUMBER(state, payload) {
      let num = Math.random() * ( state.numbers.length );
      state.numbers.splice(num, 0, payload)
  },
  REMOVE_NUMBER(state, payload) {
    state.numbers.splice(payload, 1)
  }
};

const actions = {
  addNumber(context, number) {
    context.commit("ADD_NUMBER", number);
  },
  addRandomNumber(context, number) {
    context.commit("ADD_RANDOM_NUMBER", number);
  }, 
  removeNumber(context, index) {
      context.commit('REMOVE_NUMBER', index)
  }
};

const getters = {
  getNumbers(state) {
    return state.numbers;
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
