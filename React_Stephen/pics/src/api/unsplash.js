import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID ebe4e856c0e446aa3f9d5fc28c60b772b734b3c8ca5fec651267456f9fd4cadf"
  }
});
