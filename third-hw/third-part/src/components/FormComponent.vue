<script>
import validationMixin from "@/mixins/validationMixin.js";

export default {
  name: "FormComponent",
  data() {
    return {
      name: "",
      email: "",
      submitResult:""
    };
  },
  methods:{
    submitForm(){
      if (this.errors.length){
        this.submitResult =  JSON.stringify(this.errors);
      }else {
        this.submitResult =  "Success";
      }
    }
  },
  mixins:[validationMixin]
}
</script>

<template>
  <form @submit.prevent="submitForm">
    <input @input="validateName(name)" v-model="name" type="text" placeholder="Name" required />
    <input @input="validateEmail(email)" v-model="email" type="text" placeholder="Email" required />
    <button type="submit">Submit</button>
  </form>
  <div v-if="errors.length">
    <li v-for="error in errors"
    :key="error">
      {{errors}}
    </li>
  </div>
  <div v-if="submitResult">
    Result of submission {{submitResult}}
  </div>
</template>
