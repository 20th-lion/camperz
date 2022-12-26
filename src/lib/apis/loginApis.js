import { axiosPublic } from './customAxios';

export const getLoginApiResponse = async (inputs) => {
	const reqPath = '/user/login';
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
