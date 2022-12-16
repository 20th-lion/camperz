import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ProfilePage from './pages/Profile/ProfilePage';
import ProductUploadPage from './pages/Product/ProductUploadPage';
import ProfileEditPage from './pages/Profile/ProfileEditPage';
import ProductEditPage from './pages/Product/ProductEditPage';
import Page404 from './pages/ErrorPage/Page404';
import PostUploadPage from './pages/Post/PostUploadPage';
import Provider from './component/context/Provider';
import Modals from './component/modal/Modals';
import PostList from './component/post/PostList';
import FollowPage from './pages/follow/FollowPage';

export default function App() {
	return (
		<>
			<Provider>
				<BrowserRouter>
					<Routes>
						<Route path="/profile/" element={<ProfilePage />}></Route>
						<Route path="/profile/:accountname" element={<ProfilePage />}></Route>
						<Route path="/profile/edit" element={<ProfileEditPage />}></Route>
						<Route path="/product" element={<ProductUploadPage />}></Route>
						<Route path="/product/:id/edit" element={<ProductEditPage />}></Route>
						<Route path="/postUpload" element={<PostUploadPage />}></Route>
						<Route path="/pageNotFound" element={<Page404 />}></Route>
            					<Route path="profile/:accountname/follower" element={<FollowPage />}></Route>
					</Routes>
					<Modals />
				</BrowserRouter>
			</Provider>
		</>
	);
}
