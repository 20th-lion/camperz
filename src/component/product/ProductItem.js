import React from 'react';
import styled from 'styled-components';

export default function ProductItem({ itemName, price, itemImage, link, id }) {
	return (
		<>
			<StyledItemBlock onClick={() => {}}>
				<div>상품명{itemName}</div>
				<div>가격{price}</div>
				<div
					style={{
						width: '100px',
						height: '100px',
					}}
				>
					이미지
					<Simg src={itemImage} alt="" />
				</div>
				<div>링크{link}</div>
			</StyledItemBlock>
		</>
	);
}

const StyledItemBlock = styled.div`
	border: 1px solid black;
`;

const Simg = styled.img`
	width: 100%;
	height: 100%;
`;
