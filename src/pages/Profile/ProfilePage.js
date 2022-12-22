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
			onSetting: () => { },
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
				<Header rightChild={<Button onClick={handleModalClick} text={'모달'} active />} />
				<Main>
					<ProfileSection>
						<h2 className="ir">유저 프로필</h2>
						<UserProfile user={user} type={type} />
					</ProfileSection>
					<ProductSection>
						<h2>판매 중인 상품</h2>
						<ProductList user={user} type={type} />
					</ProductSection>
					<PostSection>
						<h2 className="ir">게시글 목록</h2>
						<PostList user={user} type={type} />
					</PostSection>
				</Main>
				<NavBar />
			</ProfilePageBlock>
		</>
	);
}

const Main = styled.main`
	justify-content: flex-start;
`;
const ProfilePageBlock = styled.div`
	background-color: #f2f2f2;
`;

const ProfileSection = styled.section`
	width: 100%;
	height: 314px;
	background-color: #f3f1e8;
	border-bottom: 0.5px solid #dbdbdb;
	box-sizing: border-box;
	margin-bottom: 6px;
`;

const ProductSection = styled.section`
	width: 100%;
	height: 208px;
	background-color: #f3f1e8;
	padding: 20px 16px;
	border-top: 0.5px solid #dbdbdb;
	border-bottom: 0.5px solid #dbdbdb;
	margin-bottom: 6px;
	box-sizing: border-box;
	h2 {
		font-weight: 400;
	}
`;

const PostSection = styled.section`
	width: 100%;
	background-color: #f3f1e8;
	box-sizing: border-box;
	border-top: 0.5px solid #dbdbdb;
	margin-bottom: 6px;
`;
