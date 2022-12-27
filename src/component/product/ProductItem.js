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
			<S_ItemBlock onClick={handleModalClick}>
				<S_ProductImg src={itemImage} alt="상품이미지" />
				<S_Span>{itemName}</S_Span>
				<S_Span>{price.toLocaleString('ko-KR')}원</S_Span>
			</S_ItemBlock>
		</>
	);
}

const S_ItemBlock = styled.div`
	display: flex;
	flex-direction: column;
	width: 140px;
	height: 132px;
	margin-right: 10px;
	cursor: pointer;
`;

const S_ProductImg = styled.img`
	border: 1px solid #dbdbdb;
	border-radius: 8px;
	margin-bottom: 6px;
	width: 140px;
	height: 90px;
`;

const S_Span = styled.span`
	height: 18px;
	font-weight: 400;
	font-size: 14px;
	line-height: 18px;
	margin-left: 2px;
	:last-child {
		height: 14px;
		font-size: 12px;
		line-height: 14px;
		color: #f26e22;
	}
`;
