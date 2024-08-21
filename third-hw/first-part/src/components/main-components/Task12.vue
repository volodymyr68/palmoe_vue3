<script>
export default {
  name: "Task12",
  data() {
    return {
      form3: {
        name: "Vova",
        age: 20,
        user: false,
      },
    };
  },
  methods: {
    updateModel() {
      this.form3.name = "Kristina";
      this.form3.age = 21;
      this.form3.user = true;
    },
  },
};
</script>

<template>
  <div class="task">
    <p>12 Створіть форму з різними типами полів вводу (текст, число, чекбокс) і використайте v-model для двонаправленого зв'язування даних.</p>
    <p>Змініть значення моделі в коді і перевірте, чи змінилось значення в полі вводу, і навпаки.</p>
    <div class="form-group">
      <input type="text" id="name" v-model="form3.name" />
    </div>
    <div class="form-group">
      <input type="number" id="age" v-model="form3.age" />
    </div>
    <div class="form-group">
      <input type="checkbox" v-model="form3.user" />
    </div>

    <button @click="updateModel">Change values</button>
    <p>{{ form3 }}</p>
  </div>
</template>

<style scoped>

</style>