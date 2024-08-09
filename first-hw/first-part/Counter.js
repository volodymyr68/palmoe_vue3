import CounterResult from "./CounterResult.js";
export default {
    name: "Counter",
    components: { CounterResult },
    template: `
      <CounterResult :count="count" />
        <button @click="increment">Increment</button>
    `,
    data() {
        return {
            count: 0,
        };
    },
    methods: {
        increment() {
            this.count++;
        },
    },
};
