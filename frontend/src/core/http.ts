import axios from "axios";
const { VITE_BASE_URL: baseURL } = import.meta.env

const http = axios.create({
    baseURL
})

export default http