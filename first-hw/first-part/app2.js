import Counter from "./Counter.js";

const App2={

    components: {
        Counter
    },
    template:`
      <p>{{getFullName}}</p>
      <p>{{ inputText }}</p>
      <input type="text" v-model="inputText" placeholder="Введите текст"/>
      <Counter/>
    `,
    data() {
        return {
            firstName: "Volodymyr",
            lastName: "Senchenko",
            inputText:''
        }
    },
    computed: {
        getFullName() {
            return this.firstName + " " + this.lastName;
        }
    }
}

const app2 = Vue.createApp(App2);
app2.mount("#app2")