import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../../component/common/Button';
import NavBar from '../../component/common/NavBar';
import Header from '../../component/common/Header';
import UserProfile from '../../component/user/UserProfile';
import ProductList from '../../component/product/ProductList';
import PostList from './../../component/post/PostList';
import { logout } from '../../lib/utils/logout';
import { modals } from './../../component/modal/Modals';
import { useModals } from './../../lib/hooks/useModals';

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
		<ProfilePageBlock>
			<Header rightChild={<Button onClick={handleModalClick} text={'모달'} active />} />
			<main>
				<UserSection>
					<UserProfile user={user} type={type} />
				</UserSection>
				<ProductSection>
					<h2>판매 중인 상품</h2>
					<ProductList user={user} type={type} />
				</ProductSection>
				<PostSection>
					<PostList user={user} type={type} />
				</PostSection>
			</main>
			<NavBar />
		</ProfilePageBlock>
	);
}

const ProfilePageBlock = styled.div`
	background-color: #f2f2f2;
`;

const UserSection = styled.section`
	width: 100%;
	background-color: #f3f1e8;
	border-bottom: 0.5px solid #dbdbdb;
`;

const ProductSection = styled.section`
	width: 100%;
	height: 208px;
	background-color: #f3f1e8;
	padding: 20px 16px;
	border-top: 0.5px solid #dbdbdb;
	border-bottom: 0.5px solid #dbdbdb;
	margin-top: 6px;
	h2 {
		font-weight: 400;
	}
`;

const PostSection = styled.section`
	width: 100%;
	background-color: #f3f1e8;
	border-top: 0.5px solid #dbdbdb;
	border-bottom: 0.5px solid #dbdbdb;
	margin-top: 6px;
`;
