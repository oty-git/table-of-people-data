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
    REMOVE_USER_FROM_LIST: (state, item) => {
      const indexOfItem = state.people.indexOf(item);
      state.people.splice(indexOfItem, 1);
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
    DELETE_USER({ commit }, item) {
      commit("REMOVE_USER_FROM_LIST", item);
    },
  },
  getters: {
    PEOPLE(state) {
      return state.people;
    },
  },
});

export default store;
