import styled, { css } from 'styled-components';
import palette from './../../lib/styles/palette';
import React from 'react';

export default function Button({ onClick, text, active, isfollow }) {
	return (
		<>
			<S_Button onClick={onClick} active={active}
				isfollow={isfollow}>
				{text}
			</S_Button>
		</>
	);
}

const S_Button = styled.button`
  background-color: ${palette.khaki[0]};
  width: 56px;
  height: 28px;
  border-radius: 26px;
  line-height: 14px;
  font-size: 12px;
  font-weight: 400;
  color: #F3F1E8;
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
			
	::after {
		${(props) =>
		props.isfollow
			? css`
				  content: '취소';
				  color: #F3F1E8;
          font-size: 14px;
          font-weight: 400;
				`
			: css`
			  	  content: '팔로우';
			  	  color: #F3F1E8;
            font-size: 14px;
            font-weight: 400;
				`};
		}
		${(props) =>
		props.isfollow
			? css`
				  background-color: #8f9475;
			  	`
			: css`
				  background-color: #5C6145;
			    `};
`;
