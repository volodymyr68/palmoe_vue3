import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:"https://fakestoreapi.com/",
    headers:{"Content-Type":"application/json"}
});


///api/?results=30
export const axiosPlaceholderInstance = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/",
    headers:{"Content-Type":"application/json"}
})
