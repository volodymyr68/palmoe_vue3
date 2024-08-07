<script>
export default {
  name:"Form",
  data(){
    return{
      form:{
        name:"",
        age:""
      },
      errors:""
    }
  },
  methods:{
    formValidation(){
      let errorList = []
      errorList.push(validateName(this.form.name));
      errorList.push(validateAge(this.form.age));
      this.errors = errorList.filter(error=>error!=="").join(", ");
    },
  }
}
const validateName = (name)=>{
  if(name.trim()===""){
    return "Name cannot be empty";
  }
  if(isNaN(name)){
    return "Name must be a string";
  }
  if(name.length <3){
    return "Name must be at least 3 characters long";
  }
  return "";
}

const validateAge = (age)=>{
  if(!isNaN(age)){
    return "Age must be a number";
  }
  if(age < 18){
    return "Age must be 18 or above";
  }
  return "";
}
</script>

<template>
  <div class="taskBox">
  <p>Створіть метод, який буде перевіряти введені дані у формі на відповідність деяким правилам.</p>
    <form class="wrapper" @submit.prevent="formValidation">
      <input type="text" v-model="form.name" placeholder="Enter your name">
      <input type="text" v-model="form.age" placeholder="Enter your age">
      <p>{{errors}}</p>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<style scoped>
.taskBox{
  display: flex;
  flex-direction: column;
  border: 3px solid #ffffff;
  margin: 10px;
  padding: 5px;
}
</style>