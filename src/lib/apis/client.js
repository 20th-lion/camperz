import axios from 'axios';

const token = localStorage.getItem('token');

const client = axios.create({
  baseURL: 'https://mandarin.api.weniv.co.kr',
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-type': 'application/json',
  },
});

export default client;
