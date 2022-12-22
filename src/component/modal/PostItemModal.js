import ReactModal from 'react-modal';
import styled from 'styled-components';
import './modal.css';

export default function PostItemModal({ onRemove, onEdit, onClose, onReport, type }) {
	const handleClickRemove = () => {
		onRemove();
		onClose();
	};

	const handleClickEdit = () => {
		onEdit();
		onClose();
	};

	const handleClickReport = () => {
		onReport();
		onClose();
	};

	const handleClose = () => {
		onClose();
	};
	return (
		<ReactModal
			isOpen
			ariaHideApp={false}
			onRequestClose={handleClose}
			className="Modal"
			overlayClassName="Overlay"
		>
			<div>
				<Rectangle></Rectangle>
				{type === 'mine' ? (
					<>
						<ModalContent onClick={handleClickRemove}>삭제</ModalContent>
						<ModalContent onClick={handleClickEdit}>수정</ModalContent>
					</>
				) : (
					<ModalContent onClick={handleClickReport}>신고</ModalContent>
				)}
			</div>
		</ReactModal>
	);
}

const Rectangle = styled.div`
	width: 50px;
	height: 4px;
	background: #dbdbdb;
	border-radius: 5px;
	margin: 16px auto;
`;

const ModalContent = styled.div`
	display: flex;
	align-items: center;
	width: 390px;
	height: 46px;
	padding: 26px;
	font-size: 14px;
	line-height: 16px;
	cursor: pointer;
`;
