import {defineStore} from "pinia";
import {axiosPlaceholderInstance} from "@/services/axios.js";

export const usePlaceholderStore = defineStore("placeholderStore",{
   store : (store) => ({
       response : [],
       currentPage: 1,
       itemsPerPage: 5,
       totalPages:10,
       prev:false,
       next:true,
       error: [],
   }),
    getters:{
        getAllPlaceholders : (state) => state.response,
        getNext : (state) => state.next,
        getPrev : (state) => state.prev,
        getCurrentPage : (state) => state.currentPage,
        getTotalPages :(state) => state.totalPages,
     },
    actions:{
       async fetchRecords(currentPage = 1){
           try{
               const response = await axiosPlaceholderInstance
                   .get(`/posts?_page=${this.currentPage}&_limit=5`);
               this.currentPage = currentPage;
               this.response = response.data
           }catch (e){
               this.error.push(e)
           }
       },
       async nextPage(){
           if(this.currentPage<10){
               this.currentPage++;
               this.next = true;
               this.prev = true;
               await this.fetchRecords(this.currentPage)
           }else {
               this.next = false;
           }
       },
        async prevPage(){
           if(this.currentPage>1) {
               this.currentPage--;
               this.prev = true
               this.next = true;
               await this.fetchRecords(this.currentPage)
           }else {
               this.prev = false
           }
        },
        setDefaultData(){
            this.prev = false;
            this.next = true;
            this.currentPage = 1;
            this.totalPages = 10;
        },
        async fetchByPage(page){
           this.currentPage = page;
            if(this.currentPage===1) {
                this.prev = false;
                this.next = true;
            }else {
                this.prev = true;
            }

            if(this.currentPage===10) {
                this.prev = true;
                this.next =false;
            }else {
                this.next = true;
            }
            await this.fetchRecords(this.currentPage)
        }
    }
});