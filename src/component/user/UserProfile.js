import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonBig from '../common/ButtonBig';
import { getUserInfo } from '../../lib/apis/profileApis';
import FollowButton from '../follow/FollowButton';
import { followUser, unfollowUser } from '../../lib/apis/followApis';
import chatIcon from '../../assets/icons/yourProfile_chat.png';
import shareIcon from '../../assets/icons/yourProfile_share.png';
import styled from 'styled-components';
import palette from "../../lib/styles/palette";

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
		<ProfileBackground>
			<ProfileInfoContainer>
				<ProfileImg src={image} alt="프로필 이미지"></ProfileImg>
				<UserName>{username}</UserName>
				<AccountName>@ {accountname}</AccountName>
				<Intro>{intro}</Intro>
				<Follow onClick={goToFllowerPage} position={'left'}>
					<FollowCount>{followerCount}</FollowCount>
					<FollowSpan>followers</FollowSpan>
				</Follow>
				<Follow onClick={goToFllowingPage} position={'right'}>
					<FollowCount>{followingCount}</FollowCount>
					<FollowSpan>followings</FollowSpan>
				</Follow>

				{type === 'mine' ? (
					<ProfileBtnWrap>
						<ButtonBig text="프로필 수정" onClick={() => navigate('/profile/edit')} />
						<ButtonBig text="상품 등록" onClick={() => navigate('/product')} />
					</ProfileBtnWrap>
				) : (
					<ProfileBtnWrap>
						<ProfileBtnIcon>
							<ChatIcon src={chatIcon} />
						</ProfileBtnIcon>
						<FollowButton isfollow={isfollow} onClick={handleFollow} size='large' />
						<ProfileBtnIcon>
							<ShareIcon src={shareIcon} />
						</ProfileBtnIcon>
					</ProfileBtnWrap>
				)}
			</ProfileInfoContainer>
		</ProfileBackground>
	);
}

const ChatIcon = styled.img`
	width: 34px;
	height: 34px;
`;
const ShareIcon = styled.img`
<<<<<<< HEAD
width: 34px;
  height: 34px;
`
const ProfileBackground = styled.div`
  display: block;
  background-color: ${palette.background[0]};
  margin-bottom: 6px;
  width: 390px;
`;

const ProfileInfoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 10px 26px;
`;

const ProfileImg = styled.img`
  width: 115px;
  height: 115px;
  border-radius: 50%;
  margin-bottom: 16px;
  object-fit: cover;
`;

const UserName = styled.strong`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 5px;
`;

const AccountName = styled.strong`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #767676;
  margin-bottom: 16px;
`;

const Intro = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #767676;
  margin-bottom: 24px;
`;

const Follow = styled.a`
  display: block;
  position: absolute;
  top: 67px;
  text-align: center;
  cursor: pointer;
  left: ${(props) => (props.position === 'right' ? '287px' : '56px')};
`;

const FollowCount = styled.strong`
  display: block;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: ${palette.followcount[0]};
`;

const FollowSpan = styled.span`
  font-weight: 400;
  font-size: 8px;
  line-height: 9px;
  color: ${palette.accountname[0]};
`;

const ProfileBtnWrap = styled.div`
  display: flex;
`;

const ProfileBtnIcon = styled.button`
  display: flex;
  align-items: center;
  width: 34px;
  height: 34px;
  border: 1px solid ${palette.profileBtnIcon[0]};
  border-radius: 50%;
  background-color: ${palette.background[0]};
  margin-right: 10px;
  margin-left: 10px;
`;

