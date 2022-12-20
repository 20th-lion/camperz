import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Splash from './pages/Home/Splash';
import HomePage from './pages/Home/HomePage.js';
import SearchPage from './pages/Search/SearchPage.js';
import LoginPage from './pages/Login/LoginPage';
import LoginByEmail from './pages/Login/LoginByEmail';
import Register from './pages/Register/Register';
import ProfilePage from './pages/Profile/ProfilePage';
import ProductUploadPage from './pages/Product/ProductUploadPage';
import ProfileEditPage from './pages/Profile/ProfileEditPage';
import ProductEditPage from './pages/Product/ProductEditPage';
import Page404 from './pages/ErrorPage/Page404';
import PostDetailPage from './pages/Post/PostDetailPage';
import PostUploadPage from './pages/Post/PostUploadPage';
import Provider from './component/context/Provider';
import Modals from './component/modal/Modals';
import FollowerPage from './pages/Follow/FollowerPage';
import FollowingPage from './pages/Follow/FollowingPage';
import ChatListPage from './pages/Chat/ChatListPage';
import ChatRoomPage from './pages/Chat/ChatRoomPage';

export default function App() {
	return (
		<>
			<Provider>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Splash />}></Route>
						<Route path="/home" element={<HomePage />}></Route>
						<Route path="/search" element={<SearchPage />}></Route>
						<Route path="/login" element={<LoginPage />}></Route>
						<Route path="/login/email" element={<LoginByEmail />}></Route>
						<Route path="/register" element={<Register />}></Route>
						<Route path="/profile" element={<ProfilePage />}></Route>
						<Route path="/profile/:accountname" element={<ProfilePage />}></Route>
						<Route path="/profile/edit" element={<ProfileEditPage />}></Route>
						<Route path="/product" element={<ProductUploadPage />}></Route>
						<Route path="/product/:id/edit" element={<ProductEditPage />}></Route>
						<Route path="/postUpload" element={<PostUploadPage />}></Route>
						<Route path="/pageNotFound" element={<Page404 />}></Route>
						<Route path="/postdetail/:id" element={<PostDetailPage />}></Route>
						<Route
							path="/profile/:accountname/follower"
							element={<FollowerPage />}
						></Route>
						<Route
							path="/profile/:accountname/following"
							element={<FollowingPage />}
						></Route>
						<Route path="/login" element={<LoginPage />}></Route>
						<Route path="/login/email" element={<LoginByEmail />}></Route>
						<Route path="/chatlist" element={<ChatListPage />}></Route>
						<Route path="/chatlist/:id" element={<ChatRoomPage />}></Route>
					</Routes>
					<Modals />
				</BrowserRouter>
			</Provider>
		</>
	);
}
