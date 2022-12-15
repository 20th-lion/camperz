import { axiosPrivate } from './customAxios';

export const getPostList = async () => {
	const reqPath = '/post/rkwl123/userpost';

	const res = await axiosPrivate.get(reqPath);
	return res;
};

export const postUploader = async ({ postContent }) => {
	const reqPath = `/post`;

	const res = await axiosPrivate.post(reqPath, postContent);
	return res;
};

export const postDetailLoader = async ({ post_id }) => {
	const reqPath = `/post/:${post_id}`;

	const res = await axiosPrivate.get(reqPath);
	return res;
};
