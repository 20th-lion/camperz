import axios from 'axios';

const BASE_URL = "https://mandarin.api.weniv.co.kr";
const TOKEN = localStorage.getItem('token');

export const axiosPublic = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-type': 'application/json',
	},
});

export const axiosPrivate = axios.create({
	baseURL: BASE_URL,
	headers: {
		Authorization: `Bearer ${TOKEN}`,
		'Content-type': 'application/json',
	},
});
