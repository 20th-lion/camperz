import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { registProduct } from '../../lib/apis/productApis';

import Header from '../../component/common/Header';
import Button from '../../component/common/Button';
import ProductForm from '../../component/form/ProductForm';

export default function ProductUploadPage() {
	const navigate = useNavigate();
	const [productInfo, setProductInfo] = useState({
		itemName: '',
		price: 0,
		link: '',
		itemImage: '',
	});

	let isCompleted = false;
	if (
		productInfo.itemName !== '' &&
		productInfo.price > 0 &&
		productInfo.link !== '' &&
		productInfo.itemImage !== ''
	) {
		isCompleted = true;
	}

	const handleSave = () => {
		registProduct(productInfo);
		navigate('/profile');
	};

	return (
		<>
			<Header rightChild={<Button onClick={handleSave} text={'저장'} active={isCompleted} />} />
			<div>
				<ProductForm setProductInfo={setProductInfo} productInfo={productInfo} />
			</div>
		</>
	);
}
