import React, { useState, useEffect } from 'react';
import { getProductList } from '../../lib/apis/productApis';
import ProductItem from '../../component/product/ProductItem';
import styled from 'styled-components';

export default React.memo(function ProductList({ user, type }) {
	const [productList, setProductList] = useState([]);

	const loadproductList = async () => {
		await getProductList(user).then((res) => {
			setProductList([...res.data.product]);
		});
	};

	useEffect(() => {
		loadproductList();
	}, [user]);

	return (
		<>
			{!!productList.length && (
				<>
					<S_ProductSection>
						<h2>판매 중인 상품</h2>
						<S_ProductList>
							{productList.map((item) => (
								<ProductItem key={item.id} {...item} onload={loadproductList} type={type} />
							))}
						</S_ProductList>
					</S_ProductSection>
				</>
			)}
		</>
	);
});

const S_ProductSection = styled.section`
  margin-top: 6px;
	width: 100%;
	height: 230px;
	background-color: #F3F1E8;
	border-top: 1px solid #dbdbdb;
	border-bottom: 1px solid #dbdbdb;
	h2 {
		font-size: 15px;
		font-weight: 400;
	  padding: 20px;
	}
`;
const S_ProductList = styled.ul`
	display: flex;
	height: 150px;
  gap: 10px;
  padding: 0 20px 0 20px;
	overflow-x: scroll;
	overflow-y: visible;
	&::-webkit-scrollbar {
		height: 14px;
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 8px;
		background: #d9d9d9;
		background-clip: padding-box;
		border: 4px solid transparent;
	}
`;
