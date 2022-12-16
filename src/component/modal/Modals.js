import React, { useContext } from 'react';
import { ModalsStateContext, ModalsDispatchContext } from '../context/ModalsContext';
import ProfileModal from './ProfileModal';
import ProductEditModal from './ProductEditModal';
import ConfirmModal from './ConfirmModal';

export const modals = {
	profileModal: ProfileModal,
	productEditModal: ProductEditModal,
	confirmModal: ConfirmModal,
};

export default function Modals() {
	const openedModals = useContext(ModalsStateContext);
	const { close } = useContext(ModalsDispatchContext);

	return openedModals.map((modal, idx) => {
		const { Component, props } = modal;
		const onClose = () => {
			close(Component);
		};

		return <Component {...props} key={idx} onClose={onClose} />;
	});
}
