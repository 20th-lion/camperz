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
		navigate('/');
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
			// style={{
			// 	overlay: {
			// 		position: 'fixed',
			// 		top: 0,
			// 		left: 0,
			// 		right: 0,
			// 		bottom: 0,
			// 		backgroundColor: 'rgba(0, 0, 0, 0.25)',
			// 	},
			// 	content: {
			// 		position: 'fixed',
			// 		bottom: '0px',
			// 		width: '390px',
			// 		height: '138px',
			// 		background: '#fff',
			// 		borderRadius: '10px 10px 0 0',
			// 		padding: '0',
			// 		overflow: 'hidden',
			// 		border: 'none',
			// 		filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
			// 		margin: '0 auto',
			// 	},
			// }}
			className="Modal"
			overlayClassName="Overlay"
		>
			<Rectangle></Rectangle>
			<section>
				<ModalContent onClick={handleClickSetting}>설정 및 개인정보</ModalContent>
				<ModalContent onClick={handleClickLogout}>로그아웃</ModalContent>
			</section>
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
