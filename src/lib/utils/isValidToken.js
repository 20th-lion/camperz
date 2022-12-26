import { axiosPublic } from '../apis/customAxios';

export const isValidToken = async () => {
	let isValid = false;
	const reqPath = '/user/checktoken';
	await axiosPublic.get(reqPath).then((res) => {
		isValid = res.data.isValid;
	});
	return isValid;
};
