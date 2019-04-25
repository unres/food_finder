import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID c4ea277074f1418d1274908bbea8697e36ad90e8065ef0f8921d9028371e92bf"
  }
});
