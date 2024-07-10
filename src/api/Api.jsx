import axios from "axios";

const instance = axios.create({
    baseURL: "https://zenclass-backend-j184.onrender.com" // BackEnd URL
});

export default instance;
