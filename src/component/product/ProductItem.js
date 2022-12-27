import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { modals } from '../modal/Modals';
import { removeProduct } from '../../lib/apis/productApis';
import { useModals } from './../../lib/hooks/useModals';
import defaultProfileImg from '../../assets/icons/basic_profile.png';

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

	const handleErrorImg = (e) => {
		e.target.src = defaultProfileImg;
	};
	return (
		<>
			<S_ItemBlock onClick={handleModalClick}>
				<S_ProductImg src={itemImage} alt="상품이미지" onError={handleErrorImg} />
				<S_Span>{itemName}</S_Span>
				<S_Span>{price.toLocaleString('ko-KR')} 원</S_Span>
			</S_ItemBlock>
		</>
	);
}

const S_ItemBlock = styled.li`
	display: flex;
	flex-direction: column;
	gap: 7px;
	cursor: pointer;
`;
const S_ProductImg = styled.img`
	width: 138px;
	height: 88px;
	border: 1px solid #dbdbdb;
	border-radius: 8px;
	object-fit: cover;
	background-color: #fff;
`;
const S_Span = styled.span`
	font-weight: 400;
	font-size: 14px;
	:last-child {
		font-size: 12px;
		color: #f26e22;
	}
`;
