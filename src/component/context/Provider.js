import React, { useState, useMemo } from 'react';
import { ModalsStateContext, ModalsDispatchContext } from './ModalsContext';
import { LoginDispatchContext, LoginStateContext } from './LoginContext';
export default function Provider({ children }) {
	const [openedModals, setOpenedModals] = useState([]);
	const [isLogedin, setIsLogedIn] = useState(false);

	const open = (Component, props) => {
		setOpenedModals((modals) => {
			return [...modals, { Component, props }];
		});
	};

	const close = (Component) => {
		setOpenedModals((modals) => {
			return modals.filter((modal) => {
				return modal.Component !== Component;
			});
		});
	};
	const dispatch = useMemo(() => ({ open, close }), []);
	return (
		<LoginStateContext.Provider value={isLogedin}>
			<LoginDispatchContext.Provider value={setIsLogedIn}>
				<ModalsStateContext.Provider value={openedModals}>
					<ModalsDispatchContext.Provider value={dispatch}>{children}</ModalsDispatchContext.Provider>
				</ModalsStateContext.Provider>
			</LoginDispatchContext.Provider>
		</LoginStateContext.Provider>
	);
}
