/*
 * © Copyright InfoPlus 2021.
 *
 * @Author: nguyenminhcuong
 * @Date: 2021-09-16 23:58:02
 * @Project: InfoCity
 */

import axios from 'axios';
import { SERVER_API_URL } from '../constant/api';

/**
 * Create basic config axios
 */
export const apiClient = axios.create({
  baseURL: SERVER_API_URL,
  withCredentials: true,
  timeout: 15000,
});
