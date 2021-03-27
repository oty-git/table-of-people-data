<template>
  <div id="app">
  <TableOfPeopleData
      :people_data="PEOPLE" />
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import TableOfPeopleData from "./components/TableOfPeopleData";

export default {
  name: 'App',
  components: {
    TableOfPeopleData
  },
  methods: {
    ...mapActions([
        "GET_API_PEOPLE"
    ])
  },
  computed: {
    ...mapGetters([
        "PEOPLE"
    ])
  },
  mounted() {
    this.GET_API_PEOPLE()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
