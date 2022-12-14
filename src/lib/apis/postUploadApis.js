// import { axiosPrivate } from './customAxios';

// export const postUploader = async () => {
// 	const reqPath = `/post`;
// 	const exampleContent = {
// 		post: {
// 			content: String,
// 			image: String, //"imageurl1, imageurl2" 형식으로
// 		},
// 	};
// 	const res = await axiosPrivate.post(reqPath, exampleContent);
// 	return res;
// };

import { axiosPrivate } from './customAxios';

export const postUploader = async ({ postContent }) => {
	const reqPath = `/post`;
	const res = await axiosPrivate.post(`https://mandarin.api.weniv.co.kr${reqPath}`, postContent);
	return res;
};
