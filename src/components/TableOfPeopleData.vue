<template>
  <div class="tableOfPeopleData">
    <div class="header">
      <p>Name
        <i class="material-icons">
            filter_alt
        </i>
      </p>
      <p>Surname
        <i class="material-icons">
          filter_alt
        </i></p>
      <p>Email
        <i class="material-icons">
          filter_alt
        </i></p>
      <p>Phone
        <i class="material-icons">
          filter_alt
        </i></p>
      <p>Registration date
        <i class="material-icons">
          filter_alt
        </i></p>
    </div>
    <TableItem
      v-for="item in paginatedPeople"
      :key="item.id"
      :item_data="item"
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

    }
  },
  methods: {
    pageClick(page) {
      this.pageNumber = page;
    }
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

</style>