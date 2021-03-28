<template>
<div>
  <form
      class="create-form"
      @submit.prevent="onSubmit"
  >
    <label for="input_name">Name:</label>
    <input
        type="text"
        id="input_name"
        v-model.trim="name"
        placeholder="Name"
    >
    <label for="input_surname">Surname:</label>
    <input
        type="text"
        id="input_surname"
        v-model.trim="surname"
        placeholder="Surname"
    >
    <label for="input_email">Email:</label>
    <input type="email"
           id="input_email"
           v-model.trim="email"
           placeholder="name@domain.com"
    >
    <label for="input_phone">Phone:</label>
    <input
        type="text"
        id="input_phone"
        v-model.trim="phone"
        placeholder="(111) 1111111"
    >
    <button class="create-button"
            type="submit"
    >Create user</button>
  </form>
</div>
</template>

<script>
export default {
  name: "CreateUserForm",
  data() {
    return {
      name: "",
      surname: "",
      email: "",
      phone: "",
    }
  },
  methods: {
    onSubmit() {
        const newUser = {
        id: Date.now(),
        first_name: this.name,
        last_name: this.surname,
        email: this.email,
        phone: this.phone,
        user_info_date: new Date().toLocaleString().replace('.', '/').split(',')[0].replace('.', '/')
      }
      this.$emit("addUser", newUser)
    },
  }
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