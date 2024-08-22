export default {
    data(){
        return{
            errors:[]
        }
    },
    methods:{
        validateName(name){
            if(name.length < 3){
                if(!this.errors.includes("Name should be at least 3 characters long")){
                    this.errors.push("Name should be at least 3 characters long")
                }
            }else{
                this.errors = this.errors.filter(error => error!== "Name should be at least 3 characters long")
            }
        },
        validateEmail(email){
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!emailRegex.test(email)){
                if(!this.errors.includes("Invalid email address")){
                    this.errors.push("Invalid email address");
                }
            }else{
                this.errors = this.errors.filter(error => error!== "Invalid email address")
            }
        },
        submitForm(){
            if (this.errors.length){
                alert("Please fix errors");
            }else {
                alert("Success!");
            }
        }
    }
}