export default {
    name: "CounterResult",
    template: `<p>{{ count }}</p>`,
    props: {
        count: {
            type: Number,
            required: true,
            default: 0,
        },
    },
    data() {
        return {
            count: this.count,
        };
    },
};
