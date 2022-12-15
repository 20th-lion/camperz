import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../common/Button';
import { getUserInfo } from '../../lib/apis/profileApis';

export default React.memo(function UserProfile({ type, user }) {
	const navigate = useNavigate();
	const [userInfo, setUserInfo] = useState({});

	const { image, accountname, username, followerCount, followingCount } = userInfo;

	useEffect(() => {
		getUserInfo(user).then((res) => {
			const { accountname, username, followingCount, followerCount, image } = res.data.profile;
			setUserInfo({
				accountname,
				username,
				followingCount,
				followerCount,
				image,
			});
		});
	}, []);

	const goFllowerPage = () => {
		navigate(`/profile/${user}/follower`);
	};
	const goFllowingPage = () => {
		navigate(`/profile/${user}/following`);
	};

	return (
		<UserProfileBlock>
			<img
				style={{
					width: '100px',
					height: '100px',
				}}
				src={image}
				alt="프로필 이미지"
			></img>
			<div>id:{accountname}</div>
			<div>이름:{username}</div>
			<div onClick={goFllowerPage}>팔로워:{followerCount}</div>
			<div onClick={goFllowingPage}>팔로잉{followingCount}</div>
			{type === 'mine' ? (
				<>
					<Button text="프로필 수정" onClick={() => navigate('/profile/edit')} />
					<Button text="상품등록" onClick={() => navigate('/product')} />
				</>
			) : (
				<>
					<Button text="언팔로우" onClick={() => {}} />
				</>
			)}
		</UserProfileBlock>
	);
});

const UserProfileBlock = styled.div`
	text-align: center;
	width: 80%;
	padding: 30px;
	border: 1px solid black;
`;
