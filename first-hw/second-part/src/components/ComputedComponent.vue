<script>
export default {
  name: "ComputedComponent",
  data(){
    return {
      firstName: "Vova",
      lastName: "Senchenko",
      users : [
          {name: "John", age: 30},
          {name: "Alice", age: 25},
          {name: "Bob", age: 28}
      ],
      filterAge: 0,
      NBU_URL:"https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json",
      response:null,
      watcherExample:"",
      watcherObject:{
        id:1,
        name:"Vasya"
      },
      watcherResponse:"",
      watcherResponseId:"",
      makeRequest:false,
      newResponse:null,
      fullNameWatcher:"",
      newUser: {
        firstName: "Vova",
        lastName: "Senchenko",
        address: {
          street: "Main St",
          city: "Kyiv"
        }
      },
      deepWatcher:""
    }
  },
  async created() {
    try {
      const response = await fetch(this.NBU_URL);
       let data = await response.json();
      this.response = data[0];
    } catch (error) {
      console.error(error);
    }
  },
  methods:{
    concat(){
      return `${this.firstName} ${this.lastName}`
    },
    setFilterAge(event){
      this.filterAge = event.target.value;
    },
  },
  computed: {
    fullName(){
      return `${this.firstName} ${this.lastName}`
    },
    filterUsersByAge(){
      return this.users.filter(user=>user.age>this.filterAge);
    },
    combineResponseAndFirstName(){
      return [
        this.response,
        this.firstName
      ];
    },
    greetings(){
      return `Hello, ${this.fullName}`
    }
  },
  watch:{
    watcherObject:{
      handler(next,old){
        this.watcherResponse = `old:${JSON.stringify(old)} next:${JSON.stringify(next)}`
      },
      deep:true
    },
    "watcherObject.id":{
      handler(newVal, oldVal){
        this.watcherResponseId = `old:${oldVal} next:${newVal}`
      },
      deep:false
    },
     makeRequest:{
       async handler(newVal,oldVal){
          if(newVal===true){
            try {
              const response = await fetch(this.NBU_URL);
              let data = await response.json();
              this.newResponse = data[0];
            } catch (error) {
              console.error(error);
            }
          }else {
            this.newResponse = null;
          }
        }
     },
    fullName(newVal,oldVal){
      this.fullNameWatcher = `old:${oldVal} next:${newVal}`;
    },
    newUser:{
      handler(newVal,oldVal){
        this.deepWatcher = `old:${JSON.stringify(oldVal)} next:${JSON.stringify(newVal)}`
      },
      deep:true,
      immediate:true
    }

  }
}
</script>

<template>
  <div class="taskBox">
    <p>Створіть обчислювальну властивість для виведення даних, обчислених на основі інших реактивних даних.</p>
    <h1>{{ fullName }}</h1>
    <input type="text" v-model="firstName" @input="concat" />
    <input type="text" v-model="lastName" />
  </div>
  <div class="taskBox">
    <p>Створіть computed property для фільтрації списку об'єктів.</p>
    <input type="text" :value="filterAge" @input="setFilterAge" >
    <div>{{filterUsersByAge}}</div>
  </div>
  <div class="taskBox">
    <p>Створіть computed property, яке комбінує дані відповіді від HTTP запиту та з рекативною змінною.</p>
    <div>{{combineResponseAndFirstName}}</div>
  </div>
  <div class="taskBox">
    <p>Створіть кілька computed properties, які залежать одне від одного.</p>
    <div>{{greetings}}</div>
  </div>
  <div class="taskBox">
    <p>Використовуйте watcher для відстеження змін у реактивному об’єкті та виведення повідомлення про це.</p>
    <input type="text" v-model="this.watcherObject.name" @input="this.watcherObject.name = $event.target.value" >
    <div>{{watcherResponse}}</div>
  </div>
  <div class="taskBox">
    <p>Використовуйте watcher для відстеження змін однієї властивості у реактивному об’єкті та виведення повідомлення про це.</p>
    <input type="text" v-model="this.watcherObject.id" @input="this.watcherObject.id = $event.target.value" >
    <div>{{watcherResponseId}}</div>
  </div>
  <div class="taskBox">
    <p>Використовуйте watcher для відправлення API запитів при зміні реактивних даних.</p>
    <div>
      <label>Press to make request</label>
      <input type="checkbox" @input="this.makeRequest = $event.target.checked">
    </div>
    <p>{{newResponse}}</p>
  </div>
  <div class="taskBox">
    <p>Створіть watcher, який реагує на зміни в computed property.</p>
    <input type="text" :value="firstName" @input="this.firstName = $event.target.value">
    <input type="text" :value="lastName" @input="this.lastName = $event.target.value">
    <p>watcher of computed fullName</p>
    <p>{{fullName}}</p>
  </div>

  <div class="taskBox">
    <p>Використовуйте deep опцію для відстеження властивостей внутрішніх об’єктів.</p>
    <input type="text"  @input="this.newUser.address.street=$event.target.value" />
    <p>{{deepWatcher}}</p>
  </div>

  <div class="taskBox">
    <p>Використовуйте опцію immediate для виклику watcher при ініціалізації компонента.</p>
    <p>{{deepWatcher}}</p>
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