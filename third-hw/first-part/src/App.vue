<script>
import Tab from "@/components/Tab.vue";
import Main from "@/components/Main.vue";
import CustomInput from "@/components/CustomInput.vue";
import CounterButtons from "@/components/CounterButttons.vue";
import ToggleComponent from "@/components/ToggleComponent.vue";
import ToggleClass from "@/components/ToggleClass.vue";
import SelectComponent from "@/components/lastTask/SelectComponent.vue";
export default {
  name: "App",
  components: {
    SelectComponent,
    ToggleClass,
    ToggleComponent,
    CounterButtons,
    CustomInput,
    Tab,
    Main,
  },
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      form2: {
        firstName: "",
        lastName: "",
        email: "",
      },
      errors: [
        "First name is required",
        "Last name is required",
        "Email is required",
      ],
      form3: {
        name: "Vova",
        age: 20,
        user: false,
      },
      count: 0,
      isToggle: false,
      currentClass: "",
      country: "",
    };
  },
  watch: {
    "form2.firstName"(value) {
      this.errors = this.errors.filter(
          (error) =>
              error !== "First name is required" &&
              error !== "First name should contain only letters" &&
              error !== "First name should have at least 3 characters",
      );
      if (!value || value.trim() === "") {
        if (!this.errors.includes("First name is required")) {
          this.errors.push("First name is required");
        }
      } else {
        if (!/^[a-zA-Z]+$/.test(value)) {
          if (!this.errors.includes("First name should contain only letters")) {
            this.errors.push("First name should contain only letters");
          }
        }

        if (value.length < 3) {
          if (
              !this.errors.includes(
                  "First name should have at least 3 characters",
              )
          ) {
            this.errors.push("First name should have at least 3 characters");
          }
        }
      }
    },
    "form2.lastName"(value) {
      this.errors = this.errors.filter(
          (error) =>
              error !== "Last name is required" &&
              error !== "Last name should contain only letters" &&
              error !== "Last name should have at least 3 characters",
      );
      if (!value || value.trim() === "") {
        if (!this.errors.includes("Last name is required")) {
          this.errors.push("Last name is required");
        }
      } else {
        if (!/^[a-zA-Z]+$/.test(value)) {
          if (!this.errors.includes("Last name should contain only letters")) {
            this.errors.push("Last name should contain only letters");
          }
        }

        if (value.length < 3) {
          if (
              !this.errors.includes("Last name should have at least 3 characters")
          ) {
            this.errors.push("Last name should have at least 3 characters");
          }
        }
      }
    },
    "form2.email"(value) {
      this.errors = this.errors.filter(
          (error) =>
              error !== "Email is required" && error !== "Invalid email format",
      );
      if (!value || value.trim() === "") {
        if (!this.errors.includes("Email is required")) {
          this.errors.push("Email is required");
        }
      } else {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) {
          if (!this.errors.includes("Invalid email format")) {
            this.errors.push("Invalid email format");
          }
        }
      }
    },
  },
  methods: {
    formSubmit() {
      if (this.errors.length > 0) {
        alert("Please enter a correct data");
        return;
      }
      alert("Success");
    },
    updateModel() {
      this.form3.name = "Kristina";
      this.form3.age = 21;
      this.form3.user = true;
    },
  },
};
</script>

<template>
  <div class="app">
    <div class="task">
      <p>
        1)Налаштуйте базові маршрути для декількох компонентів у вашому додатку.
      </p>
      <Tab />
      <div class="border">
        <Main />
      </div>
    </div>
    <div class="task">
      <p>
        10 Реалізуйте компонент, який використовує v-model для налаштування
        власного введення даних.
      </p>
      <CustomInput v-model="form.firstName" />
      <p>{{ form }}</p>
    </div>
    <div class="task">
      <p>
        11 Реалізуйте розширену валідацію форми, використовуючи v-model для
        управління станом форми і виведенням повідомлень про помилки.
      </p>
      <form @submit.prevent="formSubmit">
        <input type="text" v-model="form2.firstName" placeholder="First Name" />
        <input type="text" v-model="form2.lastName" placeholder="Last Name" />
        <input type="email" v-model="form2.email" placeholder="Email" />
        <button>Submit</button>
      </form>
      <p>Errors : {{ errors }}</p>
      <div v-if="errors">
        <template>
          <ol>
            <li
                style="color: red"
                v-for="(error, errorIndex) in errors"
                :key="errorIndex"
            >
              {{ error }}
            </li>
          </ol>
        </template>
      </div>
      <p>{{ form2 }}</p>
    </div>

    <div class="task">
      <p>
        12 Створіть форму з різними типами полів вводу (текст, число, чекбокс) і
        використайте v-model для двонаправленого зв'язування даних.
      </p>
      <p>
        Змініть значення моделі в коді і перевірте, чи змінилось значення в полі
        вводу, і навпаки.
      </p>
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
    <div class="task">
      <p>
        13 Реалізуйте компонент лічильника, який використовує v-model для
        управління його значенням. Компонент повинен мати кнопки для збільшення
        та зменшення значення лічильника.
      </p>
      <span>Counter : {{ count }}</span>
      <CounterButtons v-model="count" />
    </div>

    <div class="task">
      <p>
        14 Створіть компонент перемикача (toggle), який використовує v-model.
        Компонент повинен міняти свій стан та виводити різні значення в
        залежності від свого стану.
      </p>
      <button @click="isToggle = !isToggle">Toggle outside component</button>
      <ToggleComponent v-model:is-toggle="isToggle" />
    </div>
    <div class="task">
      <div :class="currentClass">
        <p>
          15 Використовуйте v-model для динамічної зміни класів елемента на
          основі даних, введених користувачем.
        </p>

        <ToggleClass
            v-model="currentClass"
            :all-classes="['', 'purple', 'green']"
        />
      </div>
    </div>
    <div class="task">
      <p>16 Створити компонент "Select Component" з використанням v-model</p>
      <v-container>
        <SelectComponent
            v-model="country"
            :all-classes="['Ukraine', 'USA', 'Germany']"
        />
        <v-container>
          <v-container>
            <v-card-title>Current country : </v-card-title>
          </v-container>
          <v-container>
            <v-img
                v-if="country === 'USA'"
                width="100px"
                height="50px"
                src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
            ></v-img>
            <v-img
                v-else-if="country === 'Ukraine'"
                width="100px"
                height="50px"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAM1BMVEUAVbj/2AD/3ACvpmv92igATb392A792hMWXLoOWLoAVbkOWbkDVrcWXLwAT74AS70AU7/4RaM+AAABh0lEQVR4nO3Sy1GFABREwev3IaCYf7TutOQEAIvuCKZOzWz7Pvza932ZbV2v3nEv6+dsbnKyzMfVE25Hk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk1pmu3rC7SzzdRxv/DmO73nhbJ45m/cn/ntoEpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJPeaVsx9OYXkiGzrl+QAAAABJRU5ErkJggg=="
            ></v-img>
            <v-img
                v-else-if="country === 'Germany'"
                width="100px"
                height="50px"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAElBMVEUAAAD/zgDdAADnAADaAAD/2AAtsSEoAAAA+ElEQVR4nO3QMQGAMAAEsYeCf8tIuI0pkZANAAAAAAAAAAAAAAAAAAAAgB8dwm6CoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKewh7CbsIipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUofMGTNC8HkSxoAAAAASUVORK5CYII="
            ></v-img>
            <v-card-subtitle v-else>No Country selected</v-card-subtitle>
          </v-container>
        </v-container>
      </v-container>
    </div>
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
