import axios from 'axios';
import { BASE_URL } from './customAxios';
export const imageUpload = async (file) => {
	const reqPath = '/image/uploadfile';
	const formData = new FormData();
	formData.append('image', file);
	const res = await axios.post(BASE_URL + reqPath, formData);

	return res;
};

export const postImageUploader = async (file) => {
	const formData = new FormData();
	formData.append('image', file);
	const res = await axios.post(BASE_URL + '/image/uploadfile', formData, {
		headers: { 'Content-type': 'multipart/form-data' },
	});

	return res;
};
