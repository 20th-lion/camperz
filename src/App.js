import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ProfilePage from './pages/Profile/ProfilePage';

export default function App() {
	return;
	<>
		<BrowserRouter>
			<Routes>
				<Route path="/profile" element={<ProfilePage />}></Route>
			</Routes>
		</BrowserRouter>
	</>;
}
