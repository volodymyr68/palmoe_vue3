const App={
    data() {
        return {
            first_message: "first message"
        }
    },
    methods:{
        secondMessage(){
            this.first_message=this.first_message==="first message"?"second message":"first message"
        }
    }
}



const app = Vue.createApp(App);

app.mount("#app");