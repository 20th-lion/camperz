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
			<S_ProductSection>
				<h2>판매 중인 상품</h2>
				<S_ProductList>
					{productList &&
						productList.map((item) => (
							<ProductItem
								key={item.id}
								{...item}
								onload={loadproductList}
								type={type}
							/>
						))}
				</S_ProductList>
			</S_ProductSection>
		</>
	);
});

const S_ProductSection = styled.section`
	width: 100%;
	height: 208px;
	background-color: #f3f1e8;
	padding: 20px 16px;
	border-top: 0.5px solid #dbdbdb;
	border-bottom: 0.5px solid #dbdbdb;
	margin-bottom: 6px;
	box-sizing: border-box;
	h2 {
		font-weight: 400;
	}
`;

const S_ProductList = styled.ul`
	display: flex;
	overflow-x: scroll;
	padding: 0;
	margin-top: 16px;
`;
