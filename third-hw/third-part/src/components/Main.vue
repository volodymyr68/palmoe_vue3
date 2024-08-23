<script>
import HelloWorld from '@/components/HelloWorld.vue'
import SimpleSlot from "@/components/slots/SimpleSlot.vue";
import NamedSlot from "@/components/slots/NamedSlot.vue";
import FallbackSlot from "@/components/slots/FallbackSlot.vue";
import PropsSlot from "@/components/slots/PropsSlot.vue";
import FifthTask from "@/components/FifthTask.vue";
import defaultMixin from "@/mixins/defaultMixin.js";
import lifeCycleMixin from "@/mixins/lifeCycleMixin.js";
import FormComponent from "@/components/FormComponent.vue";
export default {
  name: 'Main',
  components: {
    FormComponent,
    HelloWorld,
    SimpleSlot,
    NamedSlot,
    FallbackSlot,
    PropsSlot,
    FifthTask,
  },
  mixins: [defaultMixin,lifeCycleMixin],
  created() {
    this.helloWorld()
  },
  methods:{
    destroy(){
      this.$destroy()
    }
  },
  directives:{
    textStyle: {
      mounted(el) {
        el.style.color ="red"
      }
    },
    paramDirective: {
      mounted(el, binding) {
        const value = binding.value;
        if (value === "color") {
          el.style.color = "green";
        } else if (value === "border") {
          el.style.border = "1px solid green";
        } else {
          throw new Error("Invalid value");
        }
      }
    },
    tooltip: {
      mounted(el, binding) {
        el.addEventListener("mouseenter", () => {
          const tooltip = document.createElement("div");
          tooltip.textContent ="This is the tooltip";
          tooltip.style.position = "absolute";
          tooltip.style.backgroundColor = "black";
          tooltip.style.color = "white";
          tooltip.style.padding = "5px";
          tooltip.style.borderRadius = "3px";
          tooltip.style.whiteSpace = "nowrap";

          const rect = el.getBoundingClientRect();
          tooltip.style.top = `${rect.bottom + window.scrollY}px`;
          tooltip.style.left = `${rect.left + window.scrollX}px`;

          document.body.appendChild(tooltip);
          el.addEventListener("mouseleave", () => {
            document.body.removeChild(tooltip);
          }, { once: true });
        });
      }
    }
  }
}
</script>

<template>
  <div class="main">
      <p>1 Створіть компонент з одним слотом та використайте його, передаючи різний контент у слот з різних компонентів.</p>
      <SimpleSlot><HelloWorld/></SimpleSlot>
      <SimpleSlot>TEST TEXT</SimpleSlot>
    <div class="task">
      <p>2 Розробіть компонент з декількома іменованими слотами та передайте у них різний контент.</p>
      <NamedSlot>
        <template v-slot:header>
          <HelloWorld/>
        </template>
        <template v-slot:default>
          <div>TEST TEST TEST</div>
        </template>
        <template v-slot:footer>
          <div>FOOTER TEXT</div>
        </template>
      </NamedSlot>
    </div>
    <div class="task">
      <p>3 Створіть компонент з слотами, які мають фолбек контент, що відображається, якщо немає переданого контенту.</p>
      <FallbackSlot></FallbackSlot>
    </div>
    <div class="task">
      <p>4 Реалізуйте компонент, який передає дані назад у батьківський компонент через scoped slot.</p>
      <PropsSlot>
        <template v-slot:props="{items}">
          <li v-for="item in items"
              :key="item">
            {{item}}
          </li>
        </template>
      </PropsSlot>
    </div>
    <div class="task">
      <p>5 Стовріть слот для модального вікна за допомогою которого можно будет встановлювати контент для хедера, футера та тіла.</p>
      <router-link :to="{name:'FifthTask'}">FifthTask</router-link>
    </div>
    <div class="task">
      <p>6 Створіть базовий міксін, який додає декілька методів або даних у компонент.</p>
      <p>This is mixin method  : {{helloUser("Vova")}}</p>
      <p>Also check console</p>
    </div>
    <div class="task">
      <p>7 Створіть міксін, який включає хуки життєвого циклу для логування повідомлень при створенні та знищенні компоненту.</p>
        <p>All info in console</p>
    </div>
    <div class="task">
      <p>8 Створіть глобальний міксін і додайте його глобально в вашому основному файлі main.js або main.ts.</p>
      <p>{{this.helloGlobal()}}</p>
    </div>
    <div class="task">
      <p>8 Розробіть міксін, який додає валідацію для форми в компоненті.</p>
      <FormComponent/>
    </div>
    <div class="task">
      <p v-text-style>11 Створіть базову власну директиву, яка змінює колір тексту елемента, на якому вона використовується.</p>
    </div>
    <div class="task">
      <p>10 Створіть базову власну директиву, яка змінює колір тексту елемента, на якому вона використовується.</p>
      //mounted
      <div v-param-directive="'color'">test</div>
      <div v-param-directive="'border'">test2</div>
    </div>
    <div class="task">
      <p>11 Створіть власну директиву для відображення тултипа при наведенні миші.</p>
      <div v-tooltip> Use to see tooltip</div>
    </div>
    <div class="task" v-draggable>
      <p>12 Розробіть директиву, яка дозволяє зробити елемент перетягуваним.</p>
      <span >Drag me</span>
    </div>
  </div>
</template>

<style scoped>
.main{
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
.task{
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  border: 3px solid grey;
}

</style>
