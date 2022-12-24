import { axiosPublic } from './customAxios';

export const getSearchApiResponse = async (inputs) => {
	const reqPath = '/user/searchuser/?keyword=keyword';
	const loginData = {
		user: inputs,
	};
	try {
		const res = await axiosPublic.post(reqPath, loginData);
		return res;
	} catch (error) {
		return error;
	}
};
