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
			<StyledProductList>
				{productList &&
					productList.map((item) => (
						<ProductItem
							key={item.id}
							{...item}
							onload={loadproductList}
							type={type}
						/>
					))}
			</StyledProductList>
		</>
	);
});

const StyledProductList = styled.div`
width: 80%;
padding: 100px;
border: 1px solid black;
	display: flex;
	overflow-x: scroll;
`;
