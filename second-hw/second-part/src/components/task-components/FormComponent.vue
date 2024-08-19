<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="name">Name:</label>
      <input type="text" v-model="formData.name" id="name" />
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="text" v-model="formData.email" id="email" />
    </div>
    <button type="submit">Submit</button>
    <div v-if="errors.length">
      <h3>Please correct the following error(s):</h3>
      <ul>
        <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
      </ul>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: ''
      },
      errors: [],
    };
  },
  methods: {
    handleSubmit() {
      this.errors = [];

      if (!this.formData.name) {
        this.errors.push("Name is required.");
      }

      if (this.formData.name.length < 3) {
        this.errors.push("Name must be at least 3 characters long.");
      }

      if (!this.formData.email) {
        this.errors.push("Email is required.");
      } else if (!this.validEmail(this.formData.email)) {
        this.errors.push("Valid email is required.");
      }
    },
    validEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
  },
};
</script>