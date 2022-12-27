import React, { useState, useMemo } from 'react';
import { ModalsStateContext, ModalsDispatchContext } from './ModalsContext';
import { LoginDispatchContext, LoginStateContext } from './LoginContext';

export default function Provider({ children }) {
	const [openedModals, setOpenedModals] = useState([]);
	const [isLogedIn, setIsLogedIn] = useState(!!localStorage.getItem('token'));

	const login = async (token, accountname) => {
		localStorage.setItem('token', token);
		localStorage.setItem('accountname', accountname);
		setIsLogedIn(true);
	};

	const logout = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('accountname');
		setIsLogedIn(false);
	};

	const open = (Component, props) => {
		setOpenedModals((modals) => {
			return [...modals, { Component, props }];
		});
	};

	const logdispatch = useMemo(() => ({ login, logout }), []);

	const close = (Component) => {
		setOpenedModals((modals) => {
			return modals.filter((modal) => {
				return modal.Component !== Component;
			});
		});
	};
	const dispatch = useMemo(() => ({ open, close }), []);
	return (
		<LoginStateContext.Provider value={isLogedIn}>
			<LoginDispatchContext.Provider value={logdispatch}>
				<ModalsStateContext.Provider value={openedModals}>
					<ModalsDispatchContext.Provider value={dispatch}>{children}</ModalsDispatchContext.Provider>
				</ModalsStateContext.Provider>
			</LoginDispatchContext.Provider>
		</LoginStateContext.Provider>
	);
}
