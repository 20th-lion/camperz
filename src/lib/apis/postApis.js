import { axiosPrivate } from './customAxios';

export const getPostList = async (accountname) => {
	const reqPath = `/post/${accountname}/userpost`;

	const res = await axiosPrivate.get(reqPath);
	return res;
};

export const postUploader = async ({ postContent }) => {
	const reqPath = '/post';

	const res = await axiosPrivate.post(reqPath, postContent);
	return res;
};
