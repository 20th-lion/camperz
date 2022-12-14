import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../component/common/Header';
import Button from '../../component/common/Button';
import { registProduct } from '../../lib/apis/productApis';
import { imageUpload } from '../../lib/apis/imageUploadApi';

export default function ProductUploadPage() {
	const navigate = useNavigate();
	const photoInput = useRef();
	const [productInfo, setProductInfo] = useState({
		itemName: '',
		price: 0,
		link: '',
		itemImage: '',
	});

	const onChange = (e) => {
		const { name, value } = e.target;
		setProductInfo({
			...productInfo,
			[name]: value,
		});
	};

	const onRegistImg = () => {
		const file = photoInput.current.files[0];
		imageUpload(file).then((res) => {
			const itemImage = 'https://mandarin.api.weniv.co.kr/' + res.data.filename;
			setProductInfo({ ...productInfo, itemImage });
		});
	};

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
			<Header
				leftChild={<Button onClick={() => navigate(-1)} text={'뒤로가기'} active />}
				rightChild={<Button onClick={handleSave} text={'저장'} active={isCompleted} />}
			/>
			<div>
				<div
					style={{
						width: '200px',
						height: '200px',
						backgroundColor: 'gray',
					}}
					onClick={() => {
						photoInput.current.click();
					}}
				>
					<input ref={photoInput} type="file" accept="image/*" onChange={onRegistImg} />
				</div>
				<div>
					이름
					<input type="text" name="itemName" onChange={(e) => onChange(e)} />
				</div>
				<div>
					가격
					<input type="number" name="price" onChange={(e) => onChange(e)} />
				</div>
				<div>
					링크
					<input type="text" name="link" onChange={(e) => onChange(e)} />
				</div>
			</div>
		</>
	);
}
