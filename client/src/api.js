import axios from "axios";

const API = axios.create({
  baseURL: "https://shopify-cro-opportunity-engine.onrender.com",
});

export default API;