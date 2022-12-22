import styled, { css } from "styled-components";
import React from 'react';
import palette from "../../lib/styles/palette";

export default function FollowButton({ isfollow, onClick, size }) {
    return (
        <>
            <StyledFollowButton
                alt="팔로우 버튼"
                isfollow={isfollow}
                onClick={onClick}
                size={size}
            />

        </>
    );

}

const StyledFollowButton = styled.button`
  font-weight: 400;
  ${(props) =>
        props.size === 'large'
            ? css`
  ::after {
    
  ${(props) =>
                    props.isfollow
                        ? css`
            content: '언팔로우';
            color: ${palette.khaki[0]};
          `
                        : css`
            content: '팔로우';
            color: ${palette.khaki[2]};
          `};
  }
  ${(props) =>
                    props.isfollow
                        ? css`
            background-color: ${palette.khaki[2]};
            border: 1px solid ${palette.khaki[0]};
        `
                        : css`
            background-color: ${palette.khaki[0]};
        `}
        width: 120px;
    height: 34px;
    font-size: 14px;
    line-height: 17px;
    border-radius: 30px;
    `
            : css`
          ::after {
            ${(props) =>
                    props.isfollow
                        ? css`
                    content: '취소';
                    color: #F3F1E8;
                  `
                        : css`
                content: '팔로우';
                color: #F3F1E8;
                  `};
          }
          ${(props) =>
                    props.isfollow
                        ? css`
              background-color: #8f9475;
              border: 1px solid #dbdbdb;
                `
                        : css`
              background-color: #5C6145;
                `}
                font-size: 12px;
            width: 56px;
            height: 28px;
            line-height: 14px;
            border-radius: 26px;
        `}
`;