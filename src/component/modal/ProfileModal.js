import ReactModal from 'react-modal';
import { useNavigate } from 'react-router-dom';

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
		<ReactModal isOpen ariaHideApp={false} onRequestClose={handleClose}>
			<div>
				<button onClick={handleClickSetting}>설정 및 개인정보</button>
				<button onClick={handleClickLogout}>로그아웃</button>
			</div>
		</ReactModal>
	);
}
