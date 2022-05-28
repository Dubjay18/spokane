import axios from "axios";

const request = axios.create({
  baseURL: "https://freehouses.herokuapp.com/api/v1",
});

export default request;
