import axios from "axios";
let token;

if (typeof window !== "undefined") {
  const accessToken = localStorage?.getItem("accessToken");
  token = accessToken && accessToken.slice(1, -1);
}

export const api = axios.create({
  baseURL: "http://localhost:9000/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
