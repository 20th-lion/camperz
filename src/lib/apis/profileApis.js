import { axiosPrivate } from './customAxios';

export const getUserInfo = async (accountname) => {
	const reqPath = `/profile/${accountname}`;

	const res = await axiosPrivate.get(reqPath);
	return res;
};

export const getMyInfo = async () => {
	const reqPath = `/user/myinfo`;

	const res = await axiosPrivate.get(reqPath);

	return res;
};
