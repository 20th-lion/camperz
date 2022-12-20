import { axiosPrivate } from './customAxios';

export const getPostList = async (accountname) => {
	const reqPath = `/post/${accountname}/userpost`;

	const res = await axiosPrivate.get(reqPath);
	return res;
};

export const postUploader = async (postContent) => {
	const reqPath = '/post';
	const userData = {
		...postContent,
	};
	const res = await axiosPrivate.post(reqPath, userData);
	return res;
};

export const postDetailLoader = async (postId) => {
	const reqPath = `/post/${postId}`;

	const res = await axiosPrivate.get(reqPath);
	return res;
};

export const postEditer = async (postId, postContent) => {
	console.log(postId);
	const reqPath = `/post/${postId}`;
	const userData = {
		...postContent,
	};
	const res = await axiosPrivate.put(reqPath, userData);
	return res;
};
