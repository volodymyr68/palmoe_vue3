<script>
export default {
  name: "Task11",
  data() {
    return {
      form2: {
        firstName: "",
        lastName: "",
        email: "",
      },
      errors: [],
    };
  },
  watch: {
    "form2.firstName"(value) {
      this.errors = this.errors.filter(
          (error) =>
              error !== "First name is required" &&
              error !== "First name should contain only letters" &&
              error !== "First name should have at least 3 characters"
      );
      if (!value || value.trim() === "") {
        if (!this.errors.includes("First name is required")) {
          this.errors.push("First name is required");
        }
      } else {
        if (!/^[a-zA-Z]+$/.test(value)) {
          if (!this.errors.includes("First name should contain only letters")) {
            this.errors.push("First name should contain only letters");
          }
        }

        if (value.length < 3) {
          if (!this.errors.includes("First name should have at least 3 characters")) {
            this.errors.push("First name should have at least 3 characters");
          }
        }
      }
    },
    "form2.lastName"(value) {
      this.errors = this.errors.filter(
          (error) =>
              error !== "Last name is required" &&
              error !== "Last name should contain only letters" &&
              error !== "Last name should have at least 3 characters"
      );
      if (!value || value.trim() === "") {
        if (!this.errors.includes("Last name is required")) {
          this.errors.push("Last name is required");
        }
      } else {
        if (!/^[a-zA-Z]+$/.test(value)) {
          if (!this.errors.includes("Last name should contain only letters")) {
            this.errors.push("Last name should contain only letters");
          }
        }

        if (value.length < 3) {
          if (!this.errors.includes("Last name should have at least 3 characters")) {
            this.errors.push("Last name should have at least 3 characters");
          }
        }
      }
    },
    "form2.email"(value) {
      this.errors = this.errors.filter(
          (error) => error !== "Email is required" && error !== "Invalid email format"
      );
      if (!value || value.trim() === "") {
        if (!this.errors.includes("Email is required")) {
          this.errors.push("Email is required");
        }
      } else {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) {
          if (!this.errors.includes("Invalid email format")) {
            this.errors.push("Invalid email format");
          }
        }
      }
    },
  },
  methods: {
    formSubmit() {
      if (this.errors.length > 0) {
        alert("Please enter correct data");
        return;
      }
      alert("Success");
    },
  },
};
</script>

<template>
  <div class="task">
    <p>11 Реалізуйте розширену валідацію форми, використовуючи v-model для управління станом форми і виведенням повідомлень про помилки.</p>
    <form @submit.prevent="formSubmit">
      <input type="text" v-model="form2.firstName" placeholder="First Name" />
      <input type="text" v-model="form2.lastName" placeholder="Last Name" />
      <input type="email" v-model="form2.email" placeholder="Email" />
      <button>Submit</button>
    </form>
    <p>Errors : {{ errors }}</p>
    <div v-if="errors">
      <ol>
        <li style="color: red" v-for="(error, errorIndex) in errors" :key="errorIndex">
          {{ error }}
        </li>
      </ol>
    </div>
    <p>{{ form2 }}</p>
  </div>
</template>

<style scoped>
</style>