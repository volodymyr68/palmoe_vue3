<script>
import CounterButttons from "@/components/CounterButttons.vue";

export default {
  name: "Task13",
  components: {
    CounterButttons,
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<template>
  <div class="task">
    <p>13 Реалізуйте компонент лічильника, який використовує v-model для управління його значенням. Компонент повинен мати кнопки для збільшення та зменшення значення лічильника.</p>
    <span>Counter : {{ count }}</span>
    <CounterButttons v-model="count" />
  </div>
</template>

<style>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.purple {
  background-color: purple;
  color: white;
}

.green {
  background-color: green;
  color: white;
}

.border {
  border: 3px solid grey;
  width: 300px;
  height: 300px;
}

.task {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 20px;
  border: 3px solid red;
}
</style>