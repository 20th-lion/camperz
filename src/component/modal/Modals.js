import React, { useContext } from 'react';
import { ModalsStateContext, ModalsDispatchContext } from '../context/ModalsContext';
import ProfileModal from './ProfileModal';
import ProductEditModal from './ProductEditModal';

export const modals = {
	profileModal: ProfileModal,
	productEditModal: ProductEditModal,
};

export default function Modals() {
	const openedModals = useContext(ModalsStateContext);
	const { close } = useContext(ModalsDispatchContext);

	return openedModals.map((modal, index) => {
		const { Component, props } = modal;
		const onClose = () => {
			close(Component);
		};

		return <Component {...props} key={index} onClose={onClose} />;
	});
}
