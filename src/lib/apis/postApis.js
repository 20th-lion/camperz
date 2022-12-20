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

export const postDetailLoader = async (id) => {
	const reqPath = `/post/${id}`;

	const res = await axiosPrivate.get(reqPath);
	return res;
};

export const postDelete = async (id) => {
	const reqPath = `/post/${id}`;

	const res = await axiosPrivate.delete(reqPath);
	return res;
};
