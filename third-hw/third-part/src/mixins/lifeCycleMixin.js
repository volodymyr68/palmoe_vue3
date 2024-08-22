export default {
    created() {
        console.log(`Component ${this.$options.name} has been created.`);
    },
    beforeDestroy() { // Use 'beforeUnmount' in Vue 3
        console.log(`Component ${this.$options.name} is about to be destroyed.`);
    },
};