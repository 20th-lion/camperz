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
  width: 120px;
  height: 34px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 400;
  color: #F3F1E8;
  line-height: 17px;
::after {
    ${(props) =>
        props.isfollow
            ? css`
            content: '언팔로우';
            color: ${palette.khaki[0]};
          `
            : css`
            content: '팔로우';
            color: ${palette.khaki[3]};
          `};
  }
  ${(props) =>
        props.isfollow
            ? css`
            background-color: ${palette.khaki[3]};
            border: 1px solid ${palette.khaki[0]};
        `
            : css`
            background-color: ${palette.khaki[0]};
        `};
  `