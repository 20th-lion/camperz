import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import iconSrc from '../../assets/icons/img-button.png';
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
			<h2 className="ir">상품 등록 폼</h2>
			<ImgBox>
				이미지 등록
				<InputImgBox
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
						src={currentImg || productInfo.itemImage}
						alt="상품 이미지"
						onError={(e) => (e.target.style.display = 'none')}
					/>
				</InputImgBox>
			</ImgBox>
			<div>
				상품명
				<input type="text" value={productInfo.itemName} name="itemName" onChange={onChange} />
			</div>
			<div>
				가격
				<input type="number" name="price" value={productInfo.price} onChange={onChange} />
			</div>
			<div>
				판매 링크
				<input type="text" name="link" value={productInfo.link} onChange={onChange} />
			</div>
		</>
	);
}

const ImgBox = styled.div`
	margin-bottom: 30px;
`;
const InputImgBox = styled.div`
	position: relative;
	width: 322px;
	height: 204px;
	border-radius: 10px;
	overflow: hidden;
	background-color: #dbdbdb;
	cursor: pointer;
	margin-top: 18px;
`;
const PictureArea = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const ButtonImg = styled.img`
	position: absolute;
	right: 12px;
	bottom: 12px;
	width: 35px;
	height: 35px;
	background-image: url(${iconSrc});
	background-repeat: no-repeat;
	background-position: center;
	border-radius: 50%;
	pointer-events: 'none';
`;
