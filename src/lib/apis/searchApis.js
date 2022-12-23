import { axiosPublic } from './customAxios';

export const getSearchApiResponse = async (inputs) => {
	const reqPath = '/user/searchuser/?keyword=keyword';
	const loginData = {
		user: inputs,
	};
	const headers = {
		'Content-type': 'application/json',
	};
	try {
		const res = await axiosPublic.post(reqPath, loginData, { headers });
		return res;
	} catch (error) {
		return error;
	}
};
