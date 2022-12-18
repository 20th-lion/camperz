import { axiosPrivate } from './customAxios';

export const getProductList = async (accountname) => {
	const reqPath = `/product/${accountname}`;

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

export const removeProduct = async (productId) => {
	const reqPath = `/product/${productId}`;
	const res = await axiosPrivate.delete(reqPath);

	return res;
};

export const editProduct = async (product_id, productInfo) => {
	const reqPath = `/product/${product_id}`;
	const productData = {
		product: productInfo,
	};
	const res = axiosPrivate.put(reqPath, productData);
	return res;
};

export const getProductDetail = async (product_id) => {
	const reqPath = `/product/detail/${product_id}`;

	const res = await axiosPrivate.get(reqPath);

	return res;
};
