import axios from "axios";
const KEY = "AIzaSyClW6qxzVNVI9ja4QNTKWnWtnpwtkXYwcg";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { part: "snippet", maxResults: "5", key: KEY }
});
