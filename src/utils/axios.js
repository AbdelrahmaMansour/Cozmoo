import axios from "axios";

const instance =  axios.create({
    baseURL: "http://localhost:5001/cozmoo-8f7bd/us-central1/api"
})

export default instance;