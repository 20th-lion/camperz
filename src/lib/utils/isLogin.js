import { isValidToken } from './isValidToken';

export const isLogin = () => {
	const token = localStorage.getItem('token');
	if (token) {
		return true;
	}
	return false;
};
