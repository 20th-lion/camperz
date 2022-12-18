import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { followUser, unfollowUser } from '../../lib/apis/followApis';
import FollowButton from './FollowButton';

export default function FollowUser({
    username,
    accountname,
    intro,
    image,
    isFollow,
}) {
    const navigate = useNavigate();
    const [is_Follow, setIsFollowed] = useState(isFollow);
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
        <StyledUserContainer id={accountname}>
            <StyledUserInfoContent onClick={() => {
                const id = accountname;
                navigate(`/profile/${id}`);
            }}>
                <StyledProfileImg src={image} alt="프로필이미지" />
                <StyledUserInfo>
                    <StyledUserName>{username}</StyledUserName>
                    <StyledUserIntro>{userIntro}</StyledUserIntro>
                </StyledUserInfo>
            </StyledUserInfoContent>

            <FollowButton isFollow={is_Follow} onClick={handleFollow} />

        </StyledUserContainer>
    )
}

const StyledUserContainer = styled.div`
display: flex;
border: 1px solid black;
width: 100%;
height: 100%;
`

const StyledUserInfoContent = styled.div`
display: flex;
`

const StyledProfileImg = styled.img`
width: 300px;
height: 100px;
`

const StyledUserInfo = styled.div`
width: 200px;
`

const StyledUserName = styled.strong`
border: 1px solid black;
display: block;
width: 100px;
`

const StyledUserIntro = styled.strong`
border: 1px solid black;
display: block;
width: 100px;
`