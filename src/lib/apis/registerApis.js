import { axiosPublic } from './customAxios';

export const getEmailValidApiResponse = async (email) => {
	const reqPath = '/user/emailvalid';
	const registerData = {
		user: { email },
	};
	try {
		const res = await axiosPublic.post(reqPath, registerData);
		return res;
	} catch (error) {
		return error;
	}
};

export const getAccountNameValidApiResponse = async (accountname) => {
	const reqPath = '/user/accountnamevalid';
	const registerData = {
		user: { accountname },
	};
	try {
		const res = await axiosPublic.post(reqPath, registerData);
		return res;
	} catch (error) {
		return error;
	}
};

export const getRegisterApiResponse = async (userInfo) => {
	const reqPath = '/user';
	const registerData = {
		user: { ...userInfo },
	};
	try {
		const res = await axiosPublic.post(reqPath, registerData);
		return res;
	} catch (error) {
		return error;
	}
};
