import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ButtonBig from '../common/ButtonBig';
import { getUserInfo } from '../../lib/apis/profileApis';
import FollowButton from '../follow/FollowButton';
import { followUser, unfollowUser } from '../../lib/apis/followApis';
import * as s from '../common/ProfileInfo';
import chatIcon from '../../assets/icons/yourProfile_chat.png';
import shareIcon from '../../assets/icons/yourProfile_share.png';


export default function UserProfile({ type, user }) {
	const navigate = useNavigate();
	const [userInfo, setUserInfo] = useState({
		image: '',
		accountname: '',
		username: '',
		followerCount: '',
		followingCount: '',
		isfollow: '',
		intro: '',
	});
	const { image, accountname, username, followerCount, followingCount, isfollow, intro } = userInfo;

	useEffect(() => {
		getUserInfo(user).then((res) => {
			const { accountname, username, followingCount, followerCount, image, isfollow, intro } =
				res.data.profile;
			setUserInfo({
				accountname,
				username,
				followingCount,
				followerCount,
				image,
				isfollow,
				intro,
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
		<s.ProfileBackground>
			<s.ProfileInfoContainer>
				<s.ProfileImg src={image} alt="프로필 이미지"></s.ProfileImg>
				<s.UserName>{username}</s.UserName>
				<s.AccountName>@ {accountname}</s.AccountName>
				<s.Intro>{intro}</s.Intro>
				<s.Follow onClick={goToFllowerPage} position={'left'}>
					<s.FollowCount>{followerCount}</s.FollowCount>
					<s.FollowSpan>followers</s.FollowSpan>
				</s.Follow>
				<s.Follow onClick={goToFllowingPage} position={'right'}>
					<s.FollowCount>{followingCount}</s.FollowCount>
					<s.FollowSpan>followings</s.FollowSpan>
				</s.Follow>

				{type === 'mine' ? (
					<s.ProfileBtnWrap>
						<ButtonBig text="프로필 수정" onClick={() => navigate('/profile/edit')} />
						<ButtonBig text="상품 등록" onClick={() => navigate('/product')} />
					</s.ProfileBtnWrap>

				) : (
					<s.ProfileBtnWrap>
						<s.ProfileBtnIcon>
							<chatIcon />
						</s.ProfileBtnIcon>
						<FollowButton isfollow={isfollow} onClick={handleFollow} />
						<s.ProfileBtnIcon>
							<shareIcon />
						</s.ProfileBtnIcon>
					</s.ProfileBtnWrap>
				)}
			</s.ProfileInfoContainer>
		</s.ProfileBackground>
	);
}