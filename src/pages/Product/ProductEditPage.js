import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import ProductForm from './../../component/form/ProductForm';
import Header from '../../component/common/Header';
import Button from '../../component/common/Button';
import { getProductDetail } from '../../lib/apis/productApis';
import { editProduct } from './../../lib/apis/productApis';
import { imageUpload } from '../../lib/apis/imageUploadApi';
import { BASE_URL } from './../../lib/apis/customAxios';

export default function ProductEditPage() {
	const navigate = useNavigate();
	const { id } = useParams();
	const [productInfo, setProductInfo] = useState({ itemImage: '', itemName: '', link: '', price: '' });
	const [btnActive, setBtnActive] = useState(false);

	useEffect(() => {
		getProductDetail(id).then((res) => {
			const { itemImage, itemName, link, price } = res.data.product;
			setProductInfo({ ...productInfo, itemImage, itemName, link, price });
		});
	}, []);

	const handleSaveBtn = async () => {
		await imageUpload(productInfo.itemImage).then(async (res) => {
			const itemImage = res.data.filename ? `${BASE_URL}/${res.data.filename}` : productInfo.itemImage;
			await editProduct(id, { ...productInfo, itemImage });
		});
		navigate('/profile');
	};
	return (
		<>
			<Header rightChild={<Button text="저장" onClick={handleSaveBtn} active={btnActive} />} />
			<Main>
				<ProductForm productInfo={productInfo} setProductInfo={setProductInfo} setBtnActive={setBtnActive} />
			</Main>
		</>
	);
}

const Main = styled.main`
	padding: 34px;
	justify-content: flex-start;
	height: calc(100vh - 54px);
	font-weight: 400;
	font-size: 12px;
	line-height: 14px;
	color: #767676;
`;
