import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    people: [],
  },
  mutations: {
    SET_PEOPLE_TO_STATE: (state, people) => {
      state.people = people;
    },
    REMOVE_USER_FROM_LIST: (state, index) => {
      state.people.splice(index, 1);
    },
  },
  actions: {
    GET_API_PEOPLE({ commit }) {
      return axios("http://localhost:3000/people", {
        method: "GET",
      })
        .then((people) => {
          console.log(people);
          commit("SET_PEOPLE_TO_STATE", people.data);
          return people;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    DELETE_USER({ commit }, index) {
      commit("REMOVE_USER_FROM_LIST", index);
    },
  },
  getters: {
    PEOPLE(state) {
      return state.people;
    },
  },
});

export default store;
