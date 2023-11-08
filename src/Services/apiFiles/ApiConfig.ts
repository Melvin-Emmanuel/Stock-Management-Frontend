import axios from "axios"


const Instance = axios.create({
  baseURL: "http://localhost:3400/api/v1",
});
export default Instance