import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ProfilePage from './pages/Profile/ProfilePage';
import ProductUploadPage from './pages/Product/ProductUploadPage';
import ProfileEditPage from './pages/Profile/ProfileEditPage';
import ProductEditPage from './pages/Product/ProductEditPage';

export default function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/profile" element={<ProfilePage />}></Route>
					<Route path="/account/edit" element={<ProfileEditPage />}></Route>
					<Route path="/product" element={<ProductUploadPage />}></Route>
					<Route path="/product/:id/edit" element={<ProductEditPage />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}
