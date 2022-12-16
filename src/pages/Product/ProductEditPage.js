import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { getProductDetail } from '../../lib/apis/productApis';
import ProductForm from './../../component/form/ProductForm';
import Header from '../../component/common/Header';
import Button from '../../component/common/Button';
import { editProduct } from './../../lib/apis/productApis';
import { imageUpload } from '../../lib/apis/imageUploadApi';

export default function ProductEditPage() {
	const navigate = useNavigate();
	const { id } = useParams();
	const [productInfo, setProductInfo] = useState({});

	useEffect(() => {
		getProductDetail(id).then((res) => {
			const { itemImage, itemName, link, price } = res.data.product;
			setProductInfo({ itemImage, itemName, link, price });
		});
	}, []);

	const handleSaveBtn = async () => {
		await imageUpload(productInfo.itemImage).then((res) => {
			const itemImage = process.env.REACT_APP_BASE_URL + '/' + res.data.filename;
			setProductInfo({ ...productInfo, itemImage });
		});
		editProduct(id, productInfo);
		navigate('/profile');
	};
	return (
		<>
			<Header rightChild={<Button text="저장" onClick={handleSaveBtn} />} />
			<ProductForm productInfo={productInfo} setProductInfo={setProductInfo} />
		</>
	);
}
