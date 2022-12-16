import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfilePage from './pages/Profile/ProfilePage';
import ProductUploadPage from './pages/Product/ProductUploadPage';
import PostList from './component/post/PostList';
import FollowPage from './pages/follow/FollowPage';


export default function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/profile" element={<ProfilePage />}></Route>
					<Route path="/product" element={<ProductUploadPage />}></Route>
					<Route path="/follow" element={<FollowPage />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}
