import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import NavBar from '../../component/common/NavBar';
import Header from '../../component/common/Header';
import UserProfile from '../../component/user/UserProfile';
import ProductList from '../../component/product/ProductList';
import PostList from './../../component/post/PostList';
import { logout } from '../../lib/utils/logout';
import { modals } from './../../component/modal/Modals';
import { useModals } from './../../lib/hooks/useModals';
import moreIcon from '../../assets/icons/more_header.png';

export default function ProfilePage() {
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
						logout();
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
					<ProfileSection>
						<h2 className="ir">유저 프로필</h2>
						<UserProfile user={user} type={type} />
					</ProfileSection>
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

const ProfileSection = styled.section`
	width: 100%;
	height: 314px;
	background-color: #f3f1e8;
	border-bottom: 0.5px solid #dbdbdb;
	box-sizing: border-box;
`;

const S_IconImg = styled.img`
	width: 24px;
	height: 24px;
	cursor: pointer;
`;
