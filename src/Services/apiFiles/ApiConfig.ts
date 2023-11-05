import axios from "axios"


const Instance = axios.create({
  baseURL: "localhost:3400/api/v1"
});
export default Instance