<script>
import ChildTestComponent from "@/components/ChildTestComponent.vue";
export default {
  name: "TestComponent",
  components: {ChildTestComponent},
  data(){
    return{
      user: {
        name: 'Volodymyr',
        age: 20
      },
      objects: [
        {id: 3, name: 'Object 3'},
        {id: 2, name: 'Object 2'},
        {id: 1, name: 'Object 1'}
      ],
      message:"old message"
    }
  },
  methods:{
    incrementAge(){
      this.user.age++
    },
    changeUserData() {
      this.user.name = 'Ihor';
      this.user.age = 30;
    },
    updateName(event){
      console.log(event.target.value)
      this.user.name = event.target.value;
    },
    sortObjectsById() {
      const comparator = (prev,next) =>{
        return prev.id - next.id;
      }
      this.objects = this.objects.sort(comparator);
    },
    changeChildComponent(){
      this.message = "new message"
    }
  }

}
</script>

<template>
  <div class="taskBox">
    <p>1)Створіть реактивний об'єкт і виведіть його властивості в шаблон. Змініть властивість об'єкта і спостерігайте за змінами в DOM.

      <br/>2)Створіть метод, який буде викликатися при кліку на кнопку і змінювати деякі дані в інстансі

      <br/>3)Створіть метод, який приймає подію і використовує ії для зміни даних інстанса.

      <br/>4)Створіть метод для фільтрації масиву об'єктів за деяким критерієм.

      <br/>5)Використайте метод для обробки події кліку, який змінює стан інших компонентів.</p>
    <br/>
    <p>{{user.name}} - {{user.age}}</p>
    <button @click="incrementAge">Increment Age</button>
    <button @click="changeUserData">Update Object</button>
    <input type="text" @input="updateName" placeholder="Введіть нове ім'я" />
    <p>{{objects}}</p>
    <button @click="sortObjectsById">Sort array</button>
    <ChildTestComponent :message/>
    <button @click="changeChildComponent">Change child component</button>
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