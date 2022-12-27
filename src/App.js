import React, { useContext } from 'react';
import GlobalStyle from './lib/styles/globalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import { LoginStateContext } from './component/context/LoginContext';
import Modals from './component/modal/Modals';
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
import FollowerPage from './pages/Follow/FollowerPage';
import FollowingPage from './pages/Follow/FollowingPage';
import ChatListPage from './pages/Chat/ChatListPage';
import ChatRoomPage from './pages/Chat/ChatRoomPage';

function Main() {
	const isLogedIn = useContext(LoginStateContext);
	return (
		<>
			<GlobalStyle />
			<FrameContainer>
				<BrowserRouter>
					<Routes>
						{isLogedIn ? (
							<>
								<Route path="/home" element={<HomePage />}></Route>
								<Route path="/search" element={<SearchPage />}></Route>
								<Route path="/profile" element={<ProfilePage />}></Route>
								<Route path="/profile/:accountname" element={<ProfilePage />}></Route>
								<Route path="/profile/edit" element={<ProfileEditPage />}></Route>
								<Route path="/product" element={<ProductUploadPage />}></Route>
								<Route path="/product/:id/edit" element={<ProductEditPage />}></Route>
								<Route path="/postUpload" element={<PostUploadPage />}></Route>
								<Route path="/postUpload/:id" element={<PostUploadPage />}></Route>
								<Route path="/postdetail/:id" element={<PostDetailPage />}></Route>
								<Route path="/profile/:accountname/follower" element={<FollowerPage />}></Route>
								<Route path="/profile/:accountname/following" element={<FollowingPage />}></Route>
								<Route path="/chatlist" element={<ChatListPage />}></Route>
								<Route path="/chatlist/:id" element={<ChatRoomPage />}></Route>
								<Route path="/*" element={<Page404 />}></Route>
								<Route path="/" element={<Splash />}></Route>
							</>
						) : (
							<>
								<Route path="/" element={<Splash />}></Route>
								<Route path="/login" element={<LoginPage />}></Route>
								<Route path="/login/email" element={<LoginByEmail />}></Route>
								<Route path="/register" element={<Register />}></Route>
								<Route path="/*" element={<Page404 />}></Route>
							</>
						)}
					</Routes>
					<Modals />
				</BrowserRouter>
			</FrameContainer>
		</>
	);
}

export default function App() {
	return (
		<Provider>
			<Main />
		</Provider>
	);
}

const FrameContainer = styled.div`
	max-width: 390px;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0 auto;
	background-color: #f3f1e8;
	box-shadow: 0px 0px 10px #adadad;
`;
