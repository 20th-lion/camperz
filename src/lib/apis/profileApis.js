import { axiosPrivate } from './customAxios';

export const getUserInfo = async (accountname) => {
	const reqPath = `/profile/${accountname}`;

	const res = await axiosPrivate.get(reqPath);
	return res;
};
