import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../common/Button';
import { getUserInfo } from '../../lib/apis/profileApis';

import FollowButton from '../follow/FollowButton';
import { followUser, unfollowUser } from '../../lib/apis/followApis';

export default function UserProfile({ type, user }) {
	const navigate = useNavigate();
	const [userInfo, setUserInfo] = useState({
		image: '',
		accountname: '',
		username: '',
		followerCount: '',
		followingCount: '',
		isfollow: '',
	});
	const { image, accountname, username, followerCount, followingCount, isfollow } = userInfo;

	useEffect(() => {
		getUserInfo(user).then((res) => {
			const { accountname, username, followingCount, followerCount, image, isfollow } =
				res.data.profile;
			setUserInfo({
				accountname,
				username,
				followingCount,
				followerCount,
				image,
				isfollow,
			});
		});
	}, [isfollow, user]);

	const goToFllowerPage = () => {
		navigate(`/profile/${user}/follower`);
	};
	const goToFllowingPage = () => {
		navigate(`/profile/${user}/following`);
	};

	const handleFollow = async () => {
		if (isfollow) {
			await unfollowUser(accountname).then((res) => {
				setUserInfo({ ...userInfo, isfollow: false });
			});
		} else {
			await followUser(accountname).then((res) => {
				setUserInfo({ ...userInfo, isfollow: true });
			});
		}
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
			<div onClick={goToFllowerPage}>팔로워:{followerCount}</div>
			<div onClick={goToFllowingPage}>팔로잉{followingCount}</div>

			{type === 'mine' ? (
				<>
					<Button text="프로필 수정" onClick={() => navigate('/profile/edit')} />
					<Button text="상품등록" onClick={() => navigate('/product')} />
				</>
			) : (
				<>
					<FollowButton isfollow={isfollow} onClick={handleFollow} />
				</>
			)}
		</UserProfileBlock>
	);
}

const UserProfileBlock = styled.div`
	text-align: center;
	width: 80%;
	padding: 30px;
	border: 1px solid black;
`;
