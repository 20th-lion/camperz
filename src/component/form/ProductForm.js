import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import iconSrc from '../../assets/icons/img_upload_post.png';
import defaultProfileImg from '../../assets/icons/basic_profile.png';
import { productValidation } from '../../lib/utils/productValidation';

export default function ProductForm({ setProductInfo, productInfo, setBtnActive }) {
	const photoInput = useRef();
	const [currentImg, setCurrentImg] = useState('');
	const [validation, setValidation] = useState({
		price: '',
		link: '',
	});

	const onChange = (e) => {
		const { name, value } = e.target;
		setProductInfo({
			...productInfo,
			[name]: value,
		});
		setValidation({ ...validation, [name]: productValidation(name, value) });
	};

	if (
		productInfo.itemName !== '' &&
		productInfo.price > 0 &&
		productInfo.link !== '' &&
		productInfo.itemImage !== '' &&
		validation.price &&
		validation.link
	) {
		setBtnActive(true);
	} else {
		setBtnActive(false);
	}

	const handleImgChange = (e) => {
		setProductInfo({
			...productInfo,
			itemImage: e.target.files[0],
		});
		setCurrentImg(URL.createObjectURL(e.target.files[0]));
	};

	return (
		<>
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
				<ButtonImg />
				<input
					name="image"
					id="image"
					style={{ display: 'none' }}
					ref={photoInput}
					type="file"
					accept="image/*"
					onChange={handleImgChange}
				/>
				<PictureArea
					src={currentImg || productInfo.itemImage || defaultProfileImg}
					alt="상품 이미지"
				/>
			</div>
			<div>
				이름
				<input type="text" value={productInfo.itemName} name="itemName" onChange={onChange} />
			</div>
			<div>
				가격
				<input type="number" name="price" value={productInfo.price} onChange={onChange} />
			</div>
			<div>
				링크
				<input type="text" name="link" value={productInfo.link} onChange={onChange} />
			</div>
		</>
	);
}

const PictureArea = styled.img`
	width: 200px;
	height: 150px;
	object-fit: cover;
`;

const ButtonImg = styled.img`
	width: 50px;
	height: 50px;
	background-image: url(${iconSrc});
	border: 0;
	padding: 0;
	border-radius: 50px;
	pointer-events: 'none';
`;
