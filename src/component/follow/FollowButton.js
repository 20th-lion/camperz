import styled, { css } from "styled-components";
import React from 'react';
import palette from "../../lib/styles/palette";

export default function FollowButton({ isfollow, onClick }) {
    return (
        <>
            <StyledFollowButton
                alt="팔로우 버튼"
                isfollow={isfollow}
                onClick={onClick}
            />
        </>
    );

}

const StyledFollowButton = styled.button`
border: 1px solid black;
::after {
    ${(props) =>
        props.isfollow
            ? css`
            content: '취소';
            color: ${palette.khaki[0]};
            border: 1px solid black;
            background-color: white
          `
            : css`
            content: '팔로우';
            color: ${palette.khaki[1]};
            border: 1px solid black;
            background-color: white
          `};
  }`