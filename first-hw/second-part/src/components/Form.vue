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
      let errorList = [...validateName(this.form.name),...validateAge(this.form.age)]
      this.errors = errorList.filter(error=>error!=="").join(", ");
    },
  }
}
const validateName = (name)=>{
  let errorList = [];
  if(name.trim()===""){
    errorList.push("Name cannot be empty");
  }
  if(isNaN(name)){
    errorList.push("Name must be a string");
  }
  if(name.length <3){
    errorList.push("Name must be at least 3 characters long");
  }
  return errorList;
}

const validateAge = (age)=>{
  let errorList = [];
  if(!isNaN(age)){
    errorList.push("Age must be a number");
  }
  if(age < 18){
    errorList.push("Age must be 18 or above");
  }
  return errorList;
}
</script>

<template>
  <div class="taskBox">
    <p>
      Створіть метод, який буде перевіряти введені дані у формі на відповідність
      деяким правилам.
    </p>
    <form class="wrapper" @submit.prevent="formValidation">
      <input type="text" v-model="form.name" placeholder="Enter your name" />
      <input type="text" v-model="form.age" placeholder="Enter your age" />
      <p>{{errors}}</p>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<style scoped>
.taskBox {
  display: flex;
  flex-direction: column;
  border: 3px solid #ffffff;
  margin: 10px;
  padding: 5px;
}
</style>
