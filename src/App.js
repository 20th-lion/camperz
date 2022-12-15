import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ProfilePage from './pages/Profile/ProfilePage';
import ProductUploadPage from './pages/Product/ProductUploadPage';
import ProfileEditPage from './pages/Profile/ProfileEditPage';
import ProductEditPage from './pages/Product/ProductEditPage';
import PostUploadPage from './pages/post/PostUploadPage';
import Page404 from './pages/ErrorPage/Page404';


export default function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/profile" element={<ProfilePage />}></Route>
					<Route path="/account/edit" element={<ProfileEditPage />}></Route>
					<Route path="/product" element={<ProductUploadPage />}></Route>
					<Route path="/product/:id/edit" element={<ProductEditPage />}></Route>
					<Route path="/postUpload" element={<PostUploadPage />}></Route>
					<Route path="/pageNotFound" element={<Page404 />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}
