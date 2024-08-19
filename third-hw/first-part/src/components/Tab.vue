<script>
export default {
  name: "Tab",
  data() {
    return {
      id: randomNumber(),
      user: JSON.parse(localStorage.getItem("user")) || {
        name: "User",
        isAuthenticated: false,
        role: "default",
      },
    };
  },
  methods: {
    pushRoute() {
      this.$router.push({ name: "Home" });
    },
    setPass() {
      localStorage.setItem("pass", "123");
    },
    removePass() {
      localStorage.removeItem("pass");
    },
    setUser(event, type) {
      const user = {
        name: "John Doe",
        isAuthenticated: type !== "default",
        role: type,
      };
      localStorage.setItem("user", JSON.stringify(user));
      this.user = user;
    },
  },
};
const randomNumber = () => {
  return Math.floor(Math.random() * 1000);
};
</script>

<template>
  <router-link :to="{ name: 'Home' }">Home</router-link>
  <router-link :to="{ name: 'firstRoute' }">First Route</router-link>
  <router-link :to="{ name: 'secondRoute' }">Second Route</router-link>
  <div class="task">
    <p>
      2 Створіть маршрут, який використовує динамічний параметр, і виводьте його
      в компоненті.
    </p>
    <router-link :to="{ name: 'thirdRoute', params: { id: id } }"
    >Third Route</router-link
    >
  </div>
  <div class="task">
    <p>
      3 Налаштуйте вкладені маршрути і виведіть дочірній компонент в
      батьківському компоненті.
    </p>
    <router-link :to="{ name: 'fourthRoute' }">Fourth Route</router-link>
  </div>
  <div class="task">
    <p>
      4 Реалізуйте програмне перенаправлення між маршрутами за допомогою
      this.$router.push.
    </p>
    <a @click="pushRoute">this.$router.push -> HOME</a>
  </div>
  <div class="task">
    <p>
      5 Додайте navigation guards для захисту маршрутів від неавторизованих
      користувачів.
    </p>
    <button @click="setPass">Set pass</button>
    <button @click="removePass">Remove pass</button>
    <router-link :to="{ name: 'SixRouter' }">Six Router Guard</router-link>
  </div>
  <div class="task">
    <p>
      6 Використовуйте мета-поля маршруту для передачі даних між маршрутами.
    </p>
    <router-link :to="{ name: 'EightRouter' }">Eight Router META</router-link>
  </div>
  <div class="task">
    <p>
      7 Налаштуйте маршрут так, щоб параметри шляху передавалися як props до
      компонента.
    </p>
    <router-link :to="{ name: 'SevenRouter' }">Seven Router</router-link>
  </div>
  <div class="task">
    <p>
      8 Реалізуйте "404 Not Found" маршрут і сторінку, яка відображається, коли
      користувач переходить на неіснуючий маршрут.
    </p>
    <p style="color: purple">
      Перейди по не адресу которого нету и смотри на main
    </p>
  </div>
  <div class="task">
    <p>9 Треба щоб у проєкті було декілька сторінок котрі будуть:</p>
    <ul>
      <li>Сторінка яка доступна всім</li>
      <li>Сторінка доступна лише адміністратору</li>
      <li>Сторінка доступна лише авторизованим користувачам</li>
    </ul>
    <p>
      Використовувати Vue Router hooks (beforeEach, afterEach) для перевірки
      автентифікації користувача і його ролі перед переходом на відповідний
      маршрут. Якщо користувач спробує отримати доступ до сторінки, до якої у
      нього немає прав, він повинен бути перенаправлений на сторінку 404 Not
      Found Page.
    </p>
    <button @click="setUser($event, 'default')">Set default user</button>
    <button @click="setUser($event, 'user')">Set auth user</button>
    <button @click="setUser($event, 'admin')">Set admin user</button>
    <p>User - {{ user }}</p>
    <router-link :to="{ name: 'PublicView' }">Public view</router-link>
    <router-link :to="{ name: 'AuthView' }">Auth view</router-link>
    <router-link :to="{ name: 'AdminView' }">Admin view</router-link>
  </div>
</template>

<style scoped></style>
