import axios from 'axios';

export const BASE_URL = 'https://api.mandarin.weniv.co.kr';
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

axiosPrivate.interceptors.request.use(
	(config) => {
		if (config.method === 'get') {
			document.body.classList.add('loading-indicator');
		}

		if (!TOKEN) {
			config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
		}

		return config;
	},
	(error) => Promise.reject(error),
);

axiosPrivate.interceptors.response.use(
	function (response) {
		document.body.classList.remove('loading-indicator');

		return response;
	},
	function (error) {
		return Promise.reject(error);
	},
);
