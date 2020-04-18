import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://snnbwt41tb.execute-api.eu-central-1.amazonaws.com/dev',
});
