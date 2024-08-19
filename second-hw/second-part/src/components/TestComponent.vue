<template>
  <div :class="theme">
    <div class="task">
      <TimeListComponent />
    </div>
    <div class="task">
     <FormComponent />
    </div>
    <div class="task">
     <DynamicButtonComponent />
    </div>
    <div class="task">
     <RandomItemsComponent />
    </div>
    <div class="task">
     <ToggleBoxComponent />
    </div>
    <div class="task">
      <ThemeToggleComponent @theme-change="toggleTheme" />
    </div>
    <div class="task">
     <DynamicTableComponent />
    </div>
    <div class="task">
      <FilteredListComponent :object-list="objectList" />
    </div>
    <div class="task">
      <PaginatedListComponent :object-list="objectList" />
    </div>
  </div>
</template>

<script>

import TimeListComponent from "@/components/task-components/TimeListComponent.vue";
import FormComponent from "@/components/task-components/FormComponent.vue";
import DynamicButtonComponent from "@/components/task-components/DynamicButtonComponent.vue";
import RandomItemsComponent from "@/components/task-components/RandomItemsComponent.vue";
import ToggleBoxComponent from "@/components/task-components/ToggleBoxComponent.vue";
import ThemeToggleComponent from "@/components/task-components/ThemeToggleComponent.vue";
import DynamicTableComponent from "@/components/task-components/DynamicTableComponent.vue";
import FilteredListComponent from "@/components/task-components/FilteredListComponent.vue";
import PaginatedListComponent from "@/components/task-components/PaginatedListComponent.vue";

export default {
  name: "TestComponent",
  components: {
    TimeListComponent,
    FormComponent,
    DynamicButtonComponent,
    RandomItemsComponent,
    ToggleBoxComponent,
    ThemeToggleComponent,
    DynamicTableComponent,
    FilteredListComponent,
    PaginatedListComponent
  },
  data() {
    return {
      objectList: [
        {
          id: 1,
          name: "Item 1"
        },
        {
          id: 2,
          name: "Item 2",
          subItems: ["Subitem 2.1", "Subitem 2.2"]
        },
        {
          id: 3,
          name: "Item 3",
          subItems: ["Subitem 3.1", "Subitem 3.2", "Subitem 3.3", "Subitem 3.4"]
        },
        {
          id: 4,
          name: "Item 4"
        },
        {
          id: 5,
          name: "Item 5",
          subItems: ["Subitem 5.1", "Subitem 5.2"]
        },
        {
          id: 6,
          name: "Item 6",
          subItems: ["Subitem 6.1", "Subitem 6.2", "Subitem 6.3", "Subitem 6.4"]
        }
      ],
      theme: "dark"
    };
  },
  methods: {
    toggleTheme() {
      console.log("Toggling theme");
      this.theme = this.theme === "dark" ? "light" : "dark";
    }
  }
};
</script>

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
.light {
  background-color: white;
  color: black;
}
.dark {
  background-color: black;
  color: white;
}
</style>