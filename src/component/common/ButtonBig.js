import styled, { css } from 'styled-components';
import palette from './../../lib/styles/palette';
import React from 'react';

export default function Button({ onClick, text, active, isfollow, type }) {
	return (
		<>
			<S_Button onClick={onClick} active={active}
				isfollow={isfollow} text={text}>
				{type === 'mine' ? (text === 'userprofile' ? "프로필 수정" : "상품 등록") :
					(isfollow ? "언팔로우" : "팔로우")}
			</S_Button>
		</>
	);
}

const S_Button = styled.button`
  background-color: ${palette.khaki[0]};
  height: 32px;
  padding: 0 20px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 400;
  color: ${(props) =>
		props.isfollow ? palette.khaki[0] : palette.khaki[2]};
  line-height: 17px;
	:hover {
		cursor: pointer;
	}
	${(props) =>
		props.active === false &&
		css`
			background-color: ${palette.khaki[1]};
			:hover {
			}
			pointer-events: none;
		`}
		${(props) =>
		props.isfollow
			? css`
					  /* background-color: ${palette.khaki[2]};
					  border: 1px solid ${palette.khaki[0]}; */
            background-color: ${palette.khaki[1]};
            color: ${palette.khaki[2]};
			`
			: css`
					  background-color: ${palette.khaki[0]};
			`}; 
`;
