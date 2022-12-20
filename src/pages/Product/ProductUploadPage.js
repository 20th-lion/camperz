import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { registProduct } from '../../lib/apis/productApis';
import { imageUpload } from '../../lib/apis/imageUploadApi';

import Header from '../../component/common/Header';
import Button from '../../component/common/Button';
import ProductForm from '../../component/form/ProductForm';
import { useEffect } from 'react';

export default function ProductUploadPage() {
	const navigate = useNavigate();
	const [productInfo, setProductInfo] = useState({
		itemName: '',
		price: 0,
		link: '',
		itemImage: '',
	});
	useEffect(() => {
		console.log(productInfo);
	}, [productInfo]);
	let isCompleted = false;
	if (
		productInfo.itemName !== '' &&
		productInfo.price > 0 &&
		productInfo.link !== '' &&
		productInfo.itemImage !== ''
	) {
		isCompleted = true;
	}

	const handleSaveBtn = async () => {
		console.log(productInfo.itemImage);
		await imageUpload(productInfo.itemImage).then((res) => {
			const imageUrl = 'https://mandarin.api.weniv.co.kr/' + res.data.filename;
			console.log(res);
			registProduct({ ...productInfo, itemImage: imageUrl });
		});
		navigate('/profile');
	};

	return (
		<>
			<Header rightChild={<Button onClick={handleSaveBtn} text={'저장'} active={isCompleted} />} />
			<div>
				<ProductForm setProductInfo={setProductInfo} productInfo={productInfo} />
			</div>
		</>
	);
}
