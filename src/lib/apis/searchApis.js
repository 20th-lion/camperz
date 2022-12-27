import { axiosPrivate } from './customAxios';

export const getSearchApiResponse = async (keyword) => {
	const reqPath = `/user/searchuser/?keyword=${keyword}`;
	try {
		const res = await axiosPrivate.get(reqPath);
		return res;
	} catch (error) {
		console.log(error);
	}
};
