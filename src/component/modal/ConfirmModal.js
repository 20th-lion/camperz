import ReactModal from 'react-modal';
import styled from 'styled-components';

export default function ConfirmModal({ onConfirm, onClose, message, btnText }) {
	const handleClickCancel = () => {
		onClose();
	};

	const handleClickConfirm = () => {
		onConfirm();
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
			className="ModalSmall"
			overlayClassName="Overlay"
		>
			<Message>{message}</Message>
			<ButtonBox>
				<ModalButton onClick={handleClickCancel}>취소</ModalButton>
				<ModalButton onClick={handleClickConfirm}>{btnText}</ModalButton>
			</ButtonBox>
		</ReactModal>
	);
}

const Message = styled.p`
	margin: 22px auto;
`;

const ButtonBox = styled.div`
	position: absolute;
	bottom: 0;
	display: flex;
`;

const ModalButton = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 126px;
	height: 46px;
	border-top: 0.5px solid #dbdbdb;
	:first-child {
		border-right: 0.5px solid #dbdbdb;
	}
	:last-child {
		color: #f26e22;
	}
	cursor: pointer;
`;
