import React from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import './modal.css';

export default function CommentModal({ onReport, onClose, onRemove, type }) {
	const handleClickReport = () => {
		onReport();
		onClose();
	};
	const handleClose = () => {
		onClose();
	};

	const handleClickRemove = () => {
		onRemove();
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
					</>
				) : (
					<>
						<ModalContent onClick={handleClickReport}>신고</ModalContent>
					</>
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
