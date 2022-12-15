import React from 'react';
import { useParams } from 'react-router-dom';

import Button from '../../component/common/Button';
import NavBar from '../../component/common/NavBar';
import Header from '../../component/common/Header';
import UserProfile from '../../component/user/UserProfile';
import ProductList from '../../component/product/ProductList';
import PostList from './../../component/post/PostList';

export default function ProfilePage() {
	const myAccountname = localStorage.getItem('accountname');
	const { accountname } = useParams();
	const user = accountname || myAccountname;

	return (
		<>
			<Header rightChild={<Button onClick={() => {}} text={'모달'} active />} />
			<div>프로필</div>
			<UserProfile type={accountname ? 'other' : 'mine'} user={user} />
			<div>상품목록</div>
			<ProductList user={user} />
			<div>포스트목록</div>
			<PostList user={user} />
			<NavBar />
		</>
	);
}
