import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../component/common/Button';
import NavBar from '../../component/common/NavBar';
import Header from '../../component/common/Header';
import UserProfile from '../../component/user/UserProfile';
import ProductList from '../../component/product/ProductList';
import PostList from '../../component/post/PostList';

export default function ProfilePage() {
	const navigate = useNavigate();

	return (
		<>
			<Header
				leftChild={<Button onClick={() => navigate(-1)} text={'뒤로가기'} active />}
				rightChild={<Button onClick={() => { }} text={'모달'} active />}
			/>
			<div>프로필</div>
			<UserProfile></UserProfile>
			<div>상품목록</div>
			<ProductList></ProductList>
			<div>포스트목록</div>
			<PostList></PostList>
			<NavBar />
		</>
	);
}
