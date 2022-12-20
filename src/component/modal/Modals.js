import React, { useContext } from 'react';
import { ModalsStateContext, ModalsDispatchContext } from '../context/ModalsContext';
import styled from 'styled-components';

import ProfileModal from './ProfileModal';
import ProductModal from './ProductModal';
import ConfirmModal from './ConfirmModal';
import PostItemModal from './PostItemModal';
import CommentModal from './CommentModal';

export const modals = {
	profileModal: ProfileModal,
	productModal: ProductModal,
	confirmModal: ConfirmModal,
	postItemModal: PostItemModal,
	commentModal: CommentModal,
};

export default function Modals() {
	const openedModals = useContext(ModalsStateContext);
	const { close } = useContext(ModalsDispatchContext);

	const handleClick = () => {
		close();
	};

	return (
		<>
			<StyledBlock onClick={handleClick}>
				{openedModals.map((modal, idx) => {
					const { Component, props } = modal;
					const onClose = () => {
						close(Component);
					};

					return <Component {...props} key={idx} onClose={onClose} />;
				})}
			</StyledBlock>
		</>
	);
}

const StyledBlock = styled.div`
	background-color: rgba(0, 0, 0, 0.2);
`;
