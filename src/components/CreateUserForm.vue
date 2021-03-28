<template>
<div>
  <form class="create-form">
    <label for="input_name">Name:</label>
    <input type="text" id="input_name">
    <label for="input_surname">Surname:</label>
    <input type="text" id="input_surname">
    <label for="input_email">Email:</label>
    <input type="text" id="input_email">
    <label for="input_phone">Phone:</label>
    <input type="text" id="input_phone">
    <button class="create-button"
            type="submit"
    >Create user</button>
  </form>
</div>
</template>

<script>
export default {
name: "CreateUserForm"
}
</script>

<style scoped>
.create-form {
  margin: 10px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.create-button {
  margin-top: 10px;
}
</style>