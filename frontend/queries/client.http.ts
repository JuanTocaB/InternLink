import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const PROTOCOL = process.env.PROTOCOL || "http";
const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 4000;

const client = {
  async get(path: string, body = {}) {
    const token = localStorage.getItem("authToken");
    return await axios.get(`${PROTOCOL}://${HOST}:${PORT}${path}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  async post(path: string, body = {}) {
    const token = localStorage.getItem("authToken");
    return await axios.post(`${PROTOCOL}://${HOST}:${PORT}${path}`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  async put(path: string, body = {}) {
    const token = localStorage.getItem("authToken");
    return await axios.put(`${PROTOCOL}://${HOST}:${PORT}${path}`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  async delete(path: string) {
    const token = localStorage.getItem("authToken");
    return await axios.delete(`${PROTOCOL}://${HOST}:${PORT}${path}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};

export default client;
