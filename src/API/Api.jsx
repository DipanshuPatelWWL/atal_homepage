import axios from "axios";

const API = axios.create({
  baseURL: "https://atal-backend.onrender.com/api",
  // baseURL: "http://localhost:4000",
  withCredentials: true,
})

export default API;