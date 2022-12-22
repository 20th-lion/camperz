import ReactModal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import './modal.css';

export default function ProfileModal({ onClose, onLogout, onSetting }) {
	const navigate = useNavigate();
	const handleClickSetting = () => {
		onSetting();
		onClose();
	};

	const handleClickLogout = () => {
		onLogout();
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
			<Rectangle></Rectangle>
			<ModalContent onClick={handleClickSetting}>설정 및 개인정보</ModalContent>
			<ModalContent onClick={handleClickLogout}>로그아웃</ModalContent>
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
	font-weight: 400;
	cursor: pointer;
`;
