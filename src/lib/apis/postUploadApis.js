import { axiosPrivate } from './customAxios';

export const postUploader = async ({ postContent }) => {
	const reqPath = `/post`;

	const res = await axiosPrivate.post(reqPath, postContent);
	return res;
};

// import { axiosPrivate } from './customAxios';

// export const postUploader = async ({ postContent }) => {
// 	const reqPath = `/post`;
// 	const res = await axiosPrivate.post(`https://mandarin.api.weniv.co.kr${reqPath}`, postContent);
// 	return res;
// };
