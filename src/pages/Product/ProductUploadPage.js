import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { registProduct } from '../../lib/apis/productApis';
import { imageUpload } from '../../lib/apis/imageUploadApi';

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
	const [btnActive, setBtnActive] = useState(false);

	const handleSaveBtn = async () => {
		await imageUpload(productInfo.itemImage).then((res) => {
			const itemImage = process.env.REACT_APP_BASE_URL + '/' + res.data.filename;
			registProduct({ ...productInfo, itemImage });
		});
		navigate('/profile');
	};

	return (
		<>
			<Header rightChild={<Button onClick={handleSaveBtn} text={'저장'} active={btnActive} />} />
			<div>
				<ProductForm
					setProductInfo={setProductInfo}
					productInfo={productInfo}
					setBtnActive={setBtnActive}
				/>
			</div>
		</>
	);
}
