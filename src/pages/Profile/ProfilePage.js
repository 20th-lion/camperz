import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import NavBar from '../../component/common/NavBar';
import Header from '../../component/common/Header';
import UserProfile from '../../component/user/UserProfile';
import ProductList from '../../component/product/ProductList';
import PostList from './../../component/post/PostList';
import { modals } from './../../component/modal/Modals';
import { useModals } from './../../lib/hooks/useModals';
import moreIcon from '../../assets/icons/more_header.png';
import { LoginDispatchContext } from '../../component/context/LoginContext';

export default function ProfilePage() {
	const setIsLogedin = useContext(LoginDispatchContext);
	const myAccountname = localStorage.getItem('accountname');
	const { accountname } = useParams();
	const user = accountname || myAccountname;
	const type = user === myAccountname ? 'mine' : 'other';

	const { openModal } = useModals();
	const navigate = useNavigate();

	const handleModalClick = () => {
		openModal(modals.profileModal, {
			onSetting: () => {},
			onLogout: () => {
				openModal(modals.confirmModal, {
					onConfirm: () => {
						setIsLogedin(false);
						navigate('/');
					},
					message: '로그아웃 하시겠어요?',
					btnText: '로그아웃',
				});
			},
		});
	};

	return (
		<>
			<ProfilePageBlock>
				<h1 className="ir">프로필 페이지</h1>
				<Header rightChild={<S_IconImg onClick={handleModalClick} src={moreIcon} />} />
				<Main>
					<UserProfile user={user} type={type} />
					<ProductList user={user} type={type} />
					<PostList user={user} type={type} />
				</Main>
				<NavBar page={type === 'mine' ? 'user' : 'home'} />
			</ProfilePageBlock>
		</>
	);
}

const Main = styled.main`
	justify-content: flex-start;
`;
const ProfilePageBlock = styled.div`
	background-color: #f3f1e8;
`;

const S_IconImg = styled.img`
	width: 24px;
	height: 24px;
	cursor: pointer;
`;
