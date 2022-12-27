import axios from 'axios';

export const imageUpload = async (file) => {
	const reqPath = '/image/uploadfile';
	const formData = new FormData();
	formData.append('image', file);
	const res = await axios.post('https://mandarin.api.weniv.co.kr' + reqPath, formData);
  
	return res;
};

export const postImageUploader = async (file) => {
	const formData = new FormData();
	formData.append('image', file);
	const res = await axios.post('https://mandarin.api.weniv.co.kr/image/uploadfile', formData, {
		headers: { 'Content-type': 'multipart/form-data' },
	});

	return res;
};
