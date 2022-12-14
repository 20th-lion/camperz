import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;
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
