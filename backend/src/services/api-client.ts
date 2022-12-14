import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

export const api = axios.create({
  baseURL: process.env.SPACE_X_API_BASE_URL
})