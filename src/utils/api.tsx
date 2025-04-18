import axios from 'axios';

import { API_URL } from '@/constants/common';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || API_URL,
});
