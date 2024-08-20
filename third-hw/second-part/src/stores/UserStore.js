import {defineStore} from "pinia";

export const useUserStore = defineStore("userStore",{
    state: (state)=>({
        fullName:"",
        access:false
    }),
    getters:{
        getFullName:(state) => state.fullName,
        getAccess:(state) => state.access,
    },
    actions:{
        setAccess(access){
            this.access = access;
        },
        setDefaultFullName(){
            this.fullName = "Ivan Ivanov";
        }
    }
})