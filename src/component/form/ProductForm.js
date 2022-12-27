import { useRef, useState } from 'react';
import styled from 'styled-components';

import iconSrc from '../../assets/icons/img_upload_post.png';
import { productValidation } from '../../lib/utils/productValidation';
import emptyImg from '../../assets/image/product_empty_img.png';

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
		console.log(productInfo);
		setProductInfo({
			...productInfo,
			itemImage: e.target.files[0],
		});
		setCurrentImg(URL.createObjectURL(e.target.files[0]));
	};

	return (
		<>
			<h2 className="ir">상품 등록 폼</h2>
			<S_ImgBox>
				이미지 등록
				<S_InputImgBox
					onClick={() => {
						photoInput.current.click();
					}}
				>
					<S_ButtonImg src={iconSrc}/>
					<input
						name="image"
						id="image"
						style={{ display: 'none' }}
						ref={photoInput}
						type="file"
						accept="image/*"
						onChange={handleImgChange}
					/>
					<S_Img src={currentImg || productInfo.itemImage || emptyImg} alt="상품 이미지" />
				</S_InputImgBox>
			</S_ImgBox>
			<S_InputBox>
				<S_Label htmlFor="itemName">상품명</S_Label>
				<S_Input
					name="itemName"
					type="text"
					value={productInfo.itemName}
					onChange={onChange}
					placeholder="상품명을 입력해 주세요"
				/>
			</S_InputBox>
			<S_InputBox>
				<S_Label htmlFor="price">가격</S_Label>
				<S_Input
					type="text"
					name="price"
					value={productInfo.price}
					onChange={onChange}
					placeholder="숫자만 입력 가능합니다"
				/>
			</S_InputBox>
			<S_InputBox>
				<S_Label htmlFor="link">판매 링크</S_Label>
				<S_Input
					type="text"
					name="link"
					value={productInfo.link}
					onChange={onChange}
					placeholder="URL을 입력해 주세요"
				/>
			</S_InputBox>
		</>
	);
}

const S_ImgBox = styled.div`
	margin-bottom: 30px;
`;
const S_InputImgBox = styled.div`
	position: relative;
	width: 322px;
	height: 204px;
	border-radius: 10px;
	overflow: hidden;
	background-color: #dbdbdb;
	cursor: pointer;
	margin-top: 18px;
`;
const S_Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	z-index: 99;
`;
const S_ButtonImg = styled.img`
	position: absolute;
	right: 12px;
	bottom: 12px;
	width: 35px;
	height: 35px;
	border-radius: 50%;
	pointer-events: 'none';
`;
const S_InputBox = styled.div`
	width: 322px;
	height: 48px;
	margin-bottom: 16px;
	color: #767676;
`;
const S_Input = styled.input`
	display: block;
	width: 100%;
	height: 33px;
	font-weight: 400;
	font-size: 14px;
	line-height: 14px;
	border-bottom: 0.5px solid #dbdbdb;
	::placeholder {
		font-weight: 100;
		font-size: 12px;
	}
	:focus {
		border-bottom: 1px solid #eb5757;
	}
`;
const S_Label = styled.label`
	display: block;
	font-size: 12px;
	color: #767676;
	span {
		margin-left: 2px;
		font-weight: 400;
		color: #eb5757;
	}
`;
