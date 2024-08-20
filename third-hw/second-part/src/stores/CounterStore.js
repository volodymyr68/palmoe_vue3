import {defineStore} from "pinia";

export const useCounterStore = defineStore( "counter",{
    state: () =>(
        {counter : null}
    ),
    getters:{
        counters: (state) => state.counter
    },
    actions:{
        increment(){
            this.counter++;
        },
        decrement(){
            this.counter--;
        },
        setCounter(){
            this.counter = 0;
        }
    }

});