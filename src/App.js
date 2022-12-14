import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ProfilePage from './pages/Profile/ProfilePage';
import ProductUploadPage from './pages/Product/ProductUploadPage';

export default function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/profile" element={<ProfilePage />}></Route>
					<Route path="/product" element={<ProductUploadPage />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}
