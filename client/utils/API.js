// Integrating and configuring Axios:
// By default -> new directory called utils -> new file API.js
// Here we store our Axios configuration

import axios from "axios";

export default axios.create({
  baseURL: "https://randomuser.me/api/",
  responseType: "json"
});
