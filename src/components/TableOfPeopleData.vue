<template>
  <div class="tableOfPeopleData">
    <div class="header">
      <p>Name</p>
      <p>Surname</p>
      <p>Email</p>
      <p>Phone</p>
      <p>Registration date</p>
    </div>
    <TableItem
      v-for="item in people_data"
      :key="item.id"
      :item_data="item"
    />
  </div>
</template>

<script>
import TableItem from "./TableItem"

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
  flex-basis: 20%;
  text-align: left;
}
</style>