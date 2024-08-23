import ERRORS from "@/errors/errors.js";
import errors from "@/errors/errors.js";
export default {
    data(){
        return{
            errors:[]
        }
    },
    methods:{
        validateName(name){
            if(name.length < 3){
                if(!this.errors.includes(ERRORS.NAME_SIZE_ERROR)){
                    this.errors.push(ERRORS.NAME_SIZE_ERROR)
                }
            }else{
                this.errors = this.errors.filter(error => error!== ERRORS.NAME_SIZE_ERROR)
            }
        },
        validateEmail(email){
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!emailRegex.test(email)){
                if(!this.errors.includes(ERRORS.EMAIL_FORMAT_ERROR)){
                    this.errors.push(ERRORS.EMAIL_FORMAT_ERROR);
                }
            }else{
                this.errors = this.errors.filter(error => error!== ERRORS.EMAIL_FORMAT_ERROR)
            }
        }
    }
}