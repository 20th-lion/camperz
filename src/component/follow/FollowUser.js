import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { followUser, unfollowUser } from '../../lib/apis/followApis';
import palette from './../../lib/styles/palette';
import ButtonSmall from '../common/ButtonSmall';

export default function FollowUser({
    username,
    accountname,
    intro,
    image,
    isfollow,
}) {
    const navigate = useNavigate();
    const [is_Follow, setIsFollowed] = useState(isfollow);
    let userIntro = intro;

    const handleFollow = async () => {
        if (is_Follow) {
            await unfollowUser(accountname).then((res) => {
                setIsFollowed(false);
            })
        } else {
            await followUser(accountname).then((res) => {
                setIsFollowed(true);
            })
        }

    };

    return (
        <S_UserContainer id={accountname}>
            <S_UserInfoContent onClick={() => {
                const id = accountname;
                navigate(`/profile/${id}`);
            }}>
                <S_ProfileImg src={image} alt="프로필이미지" />
                <S_UserInfo>
                    <S_UserName>{username}</S_UserName>
                    <S_UserIntro>{userIntro}</S_UserIntro>
                </S_UserInfo>
            </S_UserInfoContent>

            <ButtonSmall isfollow={is_Follow} onClick={handleFollow} />

        </S_UserContainer>
    )
}

const S_UserContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 16px;
`
const S_UserInfoContent = styled.div`
cursor: pointer;
display: flex;
`
const S_ProfileImg = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
`
const S_UserInfo = styled.div`
width: 139px;
margin: 5px 101px 6px 12px ;
`
const S_UserName = styled.strong`
display: block;
font-size: 14px;
font-weight: 400;
margin-bottom: 6px;
`
const S_UserIntro = styled.strong`
display: block;
font-size: 12px;
font-weight: 400;
color: ${palette.accountname[0]};
`