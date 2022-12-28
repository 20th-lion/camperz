import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { getUserInfo } from '../../lib/apis/profileApis';
import { followUser, unfollowUser } from '../../lib/apis/followApis';
import ButtonBig from '../common/ButtonBig';
import palette from '../../lib/styles/palette';
import chatIcon from '../../assets/icons/yourProfile_chat.png';
import shareIcon from '../../assets/icons/yourProfile_share.png';
import defaultProfileImg from '../../assets/icons/basic_profile.png';

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
			const { accountname, username, followingCount, followerCount, image, isfollow, intro } = res.data.profile;
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

	const handleErrorImg = (e) => {
		e.target.src = defaultProfileImg;
	};

	return (
		<S_ProfileSection>
			<h2 className="ir">유저 프로필</h2>
			<S_ProfileWrapper>
				<S_ProfileInfoBox>
					<S_ProfileImg src={image} alt="프로필 이미지" onError={handleErrorImg} />
					<S_UserName>{username}</S_UserName>
					<S_AccountName>@ {accountname}</S_AccountName>
					<S_Intro>{intro}</S_Intro>
					<S_Follow onClick={goToFllowerPage} position={'left'}>
						{' '}
						<S_FollowCount>{followerCount}</S_FollowCount>
						<S_FollowSpan>followers</S_FollowSpan>
					</S_Follow>
					<S_Follow onClick={goToFllowingPage} position={'right'}>
						<S_FollowCount>{followingCount}</S_FollowCount>
						<S_FollowSpan>followings</S_FollowSpan>
					</S_Follow>

					{type === 'mine' ? (
						<S_ProfileBtnWrap>
							<ButtonBig text="userprofile" onClick={() => navigate('/profile/edit')} type={type} />
							<ButtonBig text="상품 등록" onClick={() => navigate('/product')} type={type} />
						</S_ProfileBtnWrap>
					) : (
						<S_ProfileBtnWrap>
							<S_ProfileBtnIcon>
								<S_ChatIcon src={chatIcon} />
							</S_ProfileBtnIcon>
							<ButtonBig text="follow" isfollow={isfollow} onClick={handleFollow} />
							<S_ProfileBtnIcon>
								<S_ShareIcon src={shareIcon} />
							</S_ProfileBtnIcon>
						</S_ProfileBtnWrap>
					)}
				</S_ProfileInfoBox>
			</S_ProfileWrapper>
		</S_ProfileSection>
	);
}

const S_ProfileSection = styled.section`
	height: 314px;
	border-bottom: 1px solid #dbdbdb;
	background-color: #f3f1e8;
`;
const S_ProfileWrapper = styled.div`
	display: block;
	width: 390px;
`;
const S_ProfileInfoBox = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 30px 10px 26px;
`;
const S_ProfileImg = styled.img`
	width: 115px;
	height: 115px;
	border-radius: 50%;
	margin-bottom: 15px;
	object-fit: cover;
`;
const S_Follow = styled.a`
	display: block;
	position: absolute;
	top: 67px;
	text-align: center;
	cursor: pointer;
	left: ${(props) => (props.position === 'right' ? '287px' : '56px')};
`;
const S_UserName = styled.strong`
	font-weight: 400;
	font-size: 16px;
	margin-bottom: 10px;
`;
const S_AccountName = styled.strong`
	font-size: 12px;
	color: #767676;
`;
const S_Intro = styled.p`
	font-size: 14px;
	color: #767676;
	margin: 15px 0;
`;

const S_FollowCount = styled.strong`
	display: block;
	font-weight: 400;
	font-size: 21px;
	color: ${palette.followcount[0]};
`;
const S_FollowSpan = styled.span`
	font-weight: 400;
	font-size: 10px;
	color: ${palette.accountname[0]};
`;
const S_ProfileBtnWrap = styled.div`
	display: flex;
	gap: 15px;
`;
const S_ProfileBtnIcon = styled.button`
	display: flex;
	align-items: center;
	width: 32px;
	height: 32px;
	border: 1px solid ${palette.profileBtnIcon[0]};
	border-radius: 50%;
	background-color: ${palette.background[0]};
`;
const S_ChatIcon = styled.img`
	width: 32px;
	height: 32px;
`;
const S_ShareIcon = styled.img`
	width: 32px;
	height: 32px;
`;
