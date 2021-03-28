<template>
  <div class="tableOfPeopleData">
    <div class="header">
      <p>Name
        <i class="material-icons"
           @click="sortByName">
            filter_alt
        </i>
      </p>
      <p>Surname
        <i class="material-icons"
        @click="sortByLastName">
          filter_alt
        </i></p>
      <p>Email
        <i class="material-icons"
        @click="sortByEmail">
          filter_alt
        </i></p>
      <p>Phone
        <i class="material-icons"
        @click="sortByPhone">
          filter_alt
        </i></p>
      <p>Registration date
        <i class="material-icons"
        @click="sortByDate">
          filter_alt
        </i></p>
    </div>
    <TableItem
      v-for="(item, index) in paginatedPeople"
      :key="item.id"
      :item_data="item"
      @deleteUser="deleteUser(index)"
    />
    <div class="pagination">
      <div class="page"
           v-for="page in pages"
           :key="page"
           @click="pageClick(page)"
           :class="{'page__selected': page === pageNumber}"
      >{{page}}</div>
    </div>
  </div>

</template>

<script>
import TableItem from "./TableItem";
import {mapGetters, mapActions} from "vuex";

export default {
  name: "TableOfPeopleData",
  components: {TableItem},
  props: {
  people_data: {
    type: Array,
    default: () => {
      return []
    }
  }
  },
  data() {
  return {
    numberOfItems: 10,
    pageNumber: 1
  }
},
  computed: {
  pages() {
    return Math.ceil(this.people_data.length / 10);
  },
    paginatedPeople() {
      let from = (this.pageNumber-1) * this.numberOfItems;
      let to = from + this.numberOfItems;
      return this.people_data.slice(from, to);

    },
    ...mapGetters([
        "PEOPLE"
    ])
  },
  methods: {
    pageClick(page) {
      this.pageNumber = page;
    },
    sortByName() {
      this.people_data.sort((a, b) => a.first_name.localeCompare(b.first_name))
    },
    sortByLastName() {
      this.people_data.sort((a, b) => a.last_name.localeCompare(b.last_name))
    },
    sortByEmail() {
      this.people_data.sort((a, b) => a.email.localeCompare(b.email))
    },
    sortByPhone() {
      this.people_data.sort((a, b) => a.phone.localeCompare(b.phone))
    },
    sortByDate() {
      this.people_data.sort((a, b) => {
        a = a.user_info_date.split('/').reverse().join('');
        b = b.user_info_date.split('/').reverse().join('');
        return a.localeCompare(b)
      })
    },
    ...mapActions([
      "DELETE_USER"
    ]),
    deleteUser(index) {
      this.DELETE_USER(index)
    },
  }
  }
</script>

<style scoped>
.tableOfPeopleData {
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  padding: 4px;
  border: solid 1px black;
  display: flex;
  justify-content: space-around;
}

.header p {
  display: flex;
  align-items: center;
  flex-basis: 20%;
  text-align: left;
}

.pagination {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px;
}

.page {
  padding: 8px;
  border: solid 1px black;
  margin-right: 5px;
}

.page:hover {
  background: burlywood;
  cursor: pointer;
}
.page__selected {
  background: burlywood;
  cursor: pointer;
}
.material-icons {
  cursor: pointer;
}

</style>