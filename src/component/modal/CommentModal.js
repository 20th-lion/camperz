import React from 'react';
import ReactModal from 'react-modal';

export default function CommentModal({ onReport, onClose, type }) {
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
				{type === 'mine' ? (
					<>
						<button onClick={handleClickReport}>댓글 삭제하기</button>
					</>
				) : (
					<>
						<button onClick={handleClickReport}>댓글 신고하기</button>
					</>
				)}
			</div>
		</ReactModal>
	);
}
