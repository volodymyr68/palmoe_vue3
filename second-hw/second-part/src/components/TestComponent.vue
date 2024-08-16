<script>
import ChildComponent from "@/components/ChildComponent.vue";
import ObjectListComponent from "@/components/ObjectListComponent.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  name: "TestComponent",
  components: {Pagination, ObjectListComponent, ChildComponent},
  data(){
    return{
      counter:0,
      timeList:[],
      formData: {
        name: '',
        email: ''
      },
      errors: [],
      items: [],
      isHandlerOne: true,
      message: "Click the button to see the action",
      isMoved: false,
      cols:2,
      rows:2,
      objectList:[
        {
          "id": 1,
          "name": "Item 1"
        },
        {
          "id": 2,
          "name": "Item 2",
          "subItems": [
            "Subitem 2.1",
            "Subitem 2.2"
          ]
        },
        {
          "id": 3,
          "name": "Item 3",
          "subItems": [
            "Subitem 3.1",
            "Subitem 3.2",
            "Subitem 3.3",
            "Subitem 3.4"
          ]
        },
        {
          "id": 4,
          "name": "Item 4"
        },
        {
          "id": 5,
          "name": "Item 5",
          "subItems": [
            "Subitem 5.1",
            "Subitem 5.2"
          ]
        },
        {
          "id": 6,
          "name": "Item 6",
          "subItems": [
            "Subitem 6.1",
            "Subitem 6.2",
            "Subitem 6.3",
            "Subitem 6.4"
          ]
        }
      ],
      objectId:1
    }
  },
  computed: {
    currentClickHandler() {
      return this.isHandlerOne ? this.handleClickOne : this.handleClickTwo;
    },
    filteredList(){
      return this.objectList.filter(item => item.id===this.objectId);
    }
  },
  created() {
    this.generateItems();
  },
  methods: {
    increment() {
      this.counter++
    },
    saveClickTime() {
      const currentTime = new Date().toLocaleTimeString();
      this.timeList.push(currentTime);
    },
    handleSubmit() {
      this.errors = [];

      if (!this.formData.name) {
        this.errors.push("Name is required.");
      }

      if(this.formData.name.length<3){
        this.errors.push("Name must be at least 3 characters long.");
      }

      if (!this.formData.email) {
        this.errors.push("Email is required.");
      } else if (!this.validEmail(this.formData.email)) {
        this.errors.push("Valid email is required.");
      }
    },
    validEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    },
    generateItems() {
      const numberOfItems = 10;
      for (let i = 0; i < numberOfItems; i++) {
        this.items.push({
          text: `Item ${i + 1}`,
          style: {
            backgroundColor: this.getRandomColor(),
            fontSize: `${this.getRandomFontSize()}px`
          }
        });
      }
    },
    getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },
    getRandomFontSize() {
      const minSize = 14;
      const maxSize = 30;
      return Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
    },
    handleClickOne() {
      this.message = "Handler One was called!";
    },
    handleClickTwo() {
      this.message = "Handler Two was called!";
    },
    toggleHandler() {
      this.isHandlerOne = !this.isHandlerOne;
    },
    togglePosition() {
      this.isMoved = !this.isMoved;
    },
  },
}
</script>

<template>
  <div class="app">
    <div class="task">
      <p>
        Створіть компонент, де кожен клік на кнопку зберігає поточний час кліка
        в масив і виводить цей масив на екран.
      </p>
      <p>Time list{{ timeList }}</p>
      <ChildComponent v-for="n in 10" :key="n" @child-click="saveClickTime" />
    </div>
    <div class="task">
      <p>
        Реалізуйте форму, де при submit ви використовуєте модіфікатор .prevent,
        і дані форми обробляються методом Vue інстанса, який також валідує їх на
        правильність введення перед відправкою.
      </p>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="name">Name:</label>
          <input type="text" v-model="formData.name" id="name" />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="text" v-model="formData.email" id="email" />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div v-if="errors.length">
        <h3>Please correct the following error(s):</h3>
        <ul>
          <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
        </ul>
      </div>
    </div>
    <div class="task">
      <p>
        Створіть два методи і динамічно змінюйте обробник події кліка між цими
        методами на основі деякої умови (наприклад, значення змінної).
      </p>
      <button @click="currentClickHandler">Click Me</button>
      <button @click="toggleHandler">Toggle Handler</button>
      <p>{{ message }}</p>
    </div>
    <div class="task">
      <p>
        Створіть динамічний список елементів, де кожен елемент має випадковий
        колір фону та розмір шрифту, згенеровані методом при створенні
        компоненту.
      </p>
      <ul>
        <li v-for="(item, index) in items" :key="index" :style="item.style">
          {{ item.text }}
        </li>
      </ul>
    </div>
    <div class="task">
      <p>
        Реалізуйте динамічне змінення стилів елемента (наприклад, зміна позиції,
        коліру, розміру) за допомогою CSS Transitions або Animations при
        натисканні кнопки.
      </p>
      <button @click="togglePosition">Toggle Position</button>
      <div :class="['box', { moved: isMoved }]"></div>
    </div>
    <div class="task">
      <p>
        Створіть переключатель тем, який динамічно змінює стилі всього додатку
        між темною та світлою темами.
      </p>
      <button @click="$emit('theme-change')">Toggle Theme</button>
    </div>
    <div class="task">
      <p>
        За допомогою v-for, створіть таблицю, де кількість рядків і стовпців
        задається динамічно через інпут або інший елемент керування.
      </p>
      <input type="number" v-model.number="rows" placeholder="rows" />
      <input type="number" v-model.number="cols" placeholder="columns" />
      <table border="1">
        <tr v-for="row in rows" :key="row">
          <td v-for="col in cols" :key="col">
            Cell {{ (row - 1) * cols + col }}
          </td>
        </tr>
      </table>
    </div>
    <div class="task">
      <p>
        Реалізуйте компонент, що виводить список об'єктів, де кожен об'єкт має
        вкладений список. Використовуйте вкладені v-for для виведення елементів
        вкладеного списку.
      </p>
      <ObjectListComponent :object-list="objectList" />
    </div>
    <div class="task">
      <p>
        Виведіть довгий список елементів з пагінацією, використовуючи v-for, і
        динамічно змінюйте відображені елементи при кліку на кнопки пагінації.
      </p>
      <div>
        <Pagination
            :data="objectList"
            :total-pages="objectList.length!==0?objectList.length/2:1"
        />
      </div>
    </div>
    <div class="task">
      <p>
        Виведіть список елементів, використовуючи v-for, і додайте умову v-if
        для фільтрації елементів.
      </p>
      <label for="sortInput">Enter id</label>
      <input
          type="text"
          id="sortInput"
          @input="objectId = Number($event.target.value)"
      />
      <ObjectListComponent :object-list="filteredList"/>
    </div>
  </div>
</template>

<style scoped>
.task {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  justify-content: center;
  align-items: center;
  border: 3px solid gray;
}

.box {
  width: 100px;
  height: 100px;
  background-color: lightblue;
  transition: all 0.5s ease;
}

.moved {
  transform: translateX(40px) translateY(-20px);
  background-color: coral;
  width: 150px;
  height: 150px;
}

tr {
  color: white;
}

td {
  color: white;
}
</style>
