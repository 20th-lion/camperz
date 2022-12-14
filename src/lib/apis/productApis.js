import { axiosPrivate } from './customAxios';

export const getProductList = async () => {
	const reqPath = `/product/332qqq3`;

	const res = await axiosPrivate.get(reqPath);

	return res;
};

export const registProduct = async (productInfo) => {
	productInfo.price = parseInt(productInfo.price);
	const reqPath = '/product';
	const productData = {
		product: productInfo,
	};
	const res = axiosPrivate.post(reqPath, productData);
	return res;
};
