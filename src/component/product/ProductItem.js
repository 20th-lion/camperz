import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { modals } from '../modal/Modals';
import { removeProduct } from '../../lib/apis/productApis';
import { useModals } from './../../lib/hooks/useModals';

export default function ProductItem({ itemName, price, itemImage, link, id, onload, type }) {
	const navigate = useNavigate();
	const { openModal } = useModals();

	const handleModalClick = () => {
		openModal(modals.productModal, {
			onRemove: () => {
				openModal(modals.confirmModal, {
					onConfirm: async () => {
						await removeProduct(id);
						onload();
					},
					message: '삭제하시겠어요?',
					btnText: '삭제',
				});
			},
			onEdit: () => {
				navigate(`/product/${id}/edit`);
			},
			onMove: () => {
				window.open(link);
			},
			type,
		});
	};

	return (
		<>
			<StyledItemBlock onClick={handleModalClick}>
				<ProductImg src={itemImage} alt="" />
				<ProductSpan>{itemName}</ProductSpan>
				<ProductSpan>{price.toLocaleString('ko-KR')}원</ProductSpan>
			</StyledItemBlock>
		</>
	);
}

const StyledItemBlock = styled.div`
	display: flex;
	flex-direction: column;
	width: 140px;
	height: 132px;
	margin-right: 10px;
`;

const ProductImg = styled.img`
	width: 140px;
	height: 90px;
	border: 0.5px solid #dbdbdb;
	border-radius: 8px;
`;

const ProductSpan = styled.span`
	font-weight: 400;
	font-size: 14px;
	line-height: 18px;

	:last-child {
		color: #f26e22;
	}
`;
