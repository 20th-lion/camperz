import { axiosPrivate } from './customAxios';

export const getSearchApiResponse = async (keyword) => {
	const reqPath = `/user/searchuser/?keyword=${keyword}`;
	const searchData = {
		user: keyword,
	};
	try {
		let res = await axiosPrivate.post(reqPath, searchData);
		return res;
	} 
  catch (error) {
		console.log(error);
	}
};
