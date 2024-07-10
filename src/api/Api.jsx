import axios from "axios";

const instance = axios.create({
    baseURL: "https://zen-class-student-dashboard-backend-c219.onrender.com" // BackEnd URL
});

export default instance;
