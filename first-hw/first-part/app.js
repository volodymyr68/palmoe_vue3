const { reactive, toRefs } = Vue;

const reactiveState = reactive({
    secondaryMessage: "This is second message",
});

const App = {
    data() {
        return {
            first_message: "first message",
            message: "Hello world!",
            ...toRefs(reactiveState),
        };
    },
    methods: {
        secondMessage() {
            this.first_message =
                this.first_message === "first message"
                    ? "second message"
                    : "first message";
        },
        syncMessages() {
            this.message = this.secondaryMessage;
        },
    },
};

const app = Vue.createApp(App);

app.mount("#app");

const App3 = {
    data() {
        return {
            ...toRefs(reactiveState),
        };
    },
};

const secondaryApp = Vue.createApp(App3);
secondaryApp.mount("#secondary-app");