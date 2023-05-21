// eslint-disable-next-line prettier/prettier
import axios from "axios";

export const api = axios.create({
  baseURL: 'http://192.168.1.151:3333',
})
