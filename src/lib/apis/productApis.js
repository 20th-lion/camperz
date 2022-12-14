import { axiosPrivate } from './customAxios';

export const getProductList = async () => {
	const reqPath = `/product/332qqq3`;

	const res = await axiosPrivate.get(reqPath);

	return res;
};
