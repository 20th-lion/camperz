import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { modals } from '../modal/Modals';
import { removeProduct } from '../../lib/apis/productApis';
import { ModalsDispatchContext } from './../context/ModalsContext';

export default function ProductItem({ itemName, price, itemImage, link, id, onload }) {
	const navigate = useNavigate();
	const { open } = useContext(ModalsDispatchContext);

	const handleModalClick = () => {
		open(modals.productEditModal, {
			onRemove: () => {
				open(modals.confirmModal, {
					onRemove: async () => {
						await removeProduct(id);
						onload();
					},
				});
			},
			onEdit: () => {
				navigate(`/product/${id}/edit`);
			},
			onMove: () => {},
		});
	};
	return (
		<>
			<StyledItemBlock onClick={handleModalClick}>
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
