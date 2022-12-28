import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { followUser, unfollowUser } from '../../lib/apis/followApis';
import ButtonSmall from '../common/ButtonSmall';
import defaultProfileImg from '../../assets/icons/basic_profile.png';

export default function FollowUser({ username, accountname, intro, image, isfollow }) {
	const navigate = useNavigate();
	const [is_Follow, setIsFollowed] = useState(isfollow);
	let userIntro = intro;

	const handleFollow = async () => {
		if (is_Follow) {
			await unfollowUser(accountname).then((res) => {
				setIsFollowed(false);
			});
		} else {
			await followUser(accountname).then((res) => {
				setIsFollowed(true);
			});
		}
	};

	const handleErrorImg = (e) => {
		e.target.src = defaultProfileImg;
	};
	return (
		<S_Li id={accountname}>
			<S_UserInfoContent
				onClick={() => {
					const id = accountname;
					navigate(`/profile/${id}`);
				}}
			>
				<S_ProfileImg src={image} alt="프로필이미지" onError={handleErrorImg} />
				<S_UserInfo>
					<S_UserName>{username}</S_UserName>
					<S_UserIntro>{userIntro}</S_UserIntro>
				</S_UserInfo>
			</S_UserInfoContent>
			<S_ButtonBox>
				<ButtonSmall isfollow={is_Follow} onClick={handleFollow} />
			</S_ButtonBox>
		</S_Li>
	);
}

const S_Li = styled.li`
	position: relative;
`;
const S_UserInfoContent = styled.a`
	width: 358px;
	height: 58px;
	display: flex;
	padding: 4px 8px;
	border-radius: 10px;
	background: #fefcf3;
	cursor: pointer;
`;
const S_ProfileImg = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	object-fit: cover;
`;
const S_UserInfo = styled.div`
	padding: 15px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 8px;
`;
const S_UserName = styled.p`
	font-weight: 400;
	font-size: 14px;
`;
const S_UserIntro = styled.p`
	font-size: 12px;
	color: #767676;
`;
const S_ButtonBox = styled.div`
	position: absolute;
	right: 8px;
	top: 15px;
`;
