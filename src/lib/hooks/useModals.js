import { ModalsDispatchContext } from '../../component/context/ModalsContext';
import { useContext } from 'react';

export function useModals() {
	const { open, close } = useContext(ModalsDispatchContext);

	const openModal = (component, props) => {
		open(component, props);
	};
	const closeModal = (component) => {
		close(component);
	};

	return { openModal, closeModal };
}
