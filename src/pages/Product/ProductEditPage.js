import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { getProductDetail } from '../../lib/apis/productApis';
import ProductForm from './../../component/form/ProductForm';
import Header from '../../component/common/Header';
import Button from '../../component/common/Button';
import { editProduct } from './../../lib/apis/productApis';

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

	const handleSave = () => {
		editProduct(id, productInfo);
		navigate('/profile');
	};
	return (
		<>
			<Header rightChild={<Button text="저장" onClick={handleSave} />} />
			<ProductForm productInfo={productInfo} setProductInfo={setProductInfo} />
		</>
	);
}
