import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
	const type = accountname ? 'other' : 'mine';

	const { openModal } = useModals();
	const navigate = useNavigate();

	const handleModalClick = () => {
		openModal(modals.profileModal, {
			onSetting: () => {},
			onLogout: () => {
				logout();
				navigate('/');
			},
		});
	};

	return (
		<>
			<Header rightChild={<Button onClick={handleModalClick} text={'모달'} active />} />
			<div>프로필</div>
			<UserProfile type={type} user={user} />
			<div>상품목록</div>
			<ProductList user={user} type={type} />
			<div>포스트목록</div>
			<PostList user={user} type={type} />
			<NavBar />
		</>
	);
}
