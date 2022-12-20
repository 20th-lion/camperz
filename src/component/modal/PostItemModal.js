import ReactModal from 'react-modal';
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
		<ReactModal isOpen ariaHideApp={false} onRequestClose={handleClose}>
			<div>
				{type ? (
					<>
						<button onClick={handleClickEdit}>수정</button>
						<button onClick={handleClickRemove}>삭제</button>
					</>
				) : (
					<>
						<button onClick={handleClickReport}>신고</button>
					</>
				)}
			</div>
		</ReactModal>
	);
}
