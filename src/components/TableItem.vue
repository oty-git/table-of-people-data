<template>
  <div class="tableItem">
    <div class="row name">
      {{item_data.first_name}}
    </div>
    <div class="row surname">
      {{item_data.last_name}}
    </div>
    <div class="row email">
      {{item_data.email}}
    </div>
    <div class="row phone">
      {{item_data.phone}}
    </div>
    <div class="row reg-data">
      {{item_data.user_info_date}}
    </div>
    <button
        class="rembtn"
        v-on:click="deleteUser"
    >Delete</button>
  </div>
</template>

<script>

export default {
  name: "TableItem",
  props: {
    item_data: {
    type: Object,
    default: () => {
      return {}
    }
    }
  },
  methods: {
    deleteUser() {
      this.$emit("deleteUser")
    }
  },
}
</script>

<style scoped>
.tableItem {
  border-bottom: solid 1px black;
  display: flex;
  justify-content: space-around;
}

.row {
  padding: 4px;
  flex-basis: 20%;
  text-align: left;
}

.rembtn {
  background: indianred;
}
</style>