import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { registProduct } from '../../lib/apis/productApis';
import { imageUpload } from '../../lib/apis/imageUploadApi';

import Header from '../../component/common/Header';
import Button from '../../component/common/Button';
import ProductForm from '../../component/form/ProductForm';

export default function ProductUploadPage() {
	const navigate = useNavigate();
	const [productInfo, setProductInfo] = useState({
		itemName: '',
		price: '',
		link: '',
		itemImage: '',
	});
	const [btnActive, setBtnActive] = useState(false);

	const handleSaveBtn = async () => {
		await imageUpload(productInfo.itemImage).then((res) => {
			const itemImage = 'https://mandarin.api.weniv.co.kr/' + res.data.filename;
			registProduct({ ...productInfo, itemImage });
		});
		navigate('/profile');
	};

	return (
		<>
			<Header rightChild={<Button onClick={handleSaveBtn} text={'저장'} active={btnActive} />} />
			<h2 className="ir">상품 등록 페이지</h2>
			<S_Main>
				<ProductForm setProductInfo={setProductInfo} productInfo={productInfo} setBtnActive={setBtnActive} />
			</S_Main>
		</>
	);
}

const S_Main = styled.main`
	padding: 34px;
	height: calc(100vh - 54px);
	font-weight: 400;
	font-size: 12px;
	line-height: 14px;
	color: #767676;
`;
