import styled, { css } from 'styled-components';
import React from 'react';

export default function Button({ onClick, text, active, isfollow, type }) {
	return (
		<>
			<S_Button onClick={onClick} active={active} isfollow={isfollow} text={text}>
				{type === 'mine' ? (text === 'userprofile' ? '프로필 수정' : '상품 등록') : isfollow ? '언팔로우' : '팔로우'}
			</S_Button>
		</>
	);
}

const S_Button = styled.button`
	background-color: '#5C6145';
	height: 32px;
	padding: 0 20px;
	border-radius: 30px;
	font-size: 14px;
	font-weight: 400;
	color: ${(props) => (props.isfollow ? '#5C6145' : '#F3F1E8')};
	line-height: 17px;
	:hover {
		cursor: pointer;
	}
	${(props) =>
		props.active === false &&
		css`
			background-color: '#8F9475';
			:hover {
			}
			pointer-events: none;
		`}
	${(props) =>
		props.isfollow
			? css`
					background-color: '#8F9475';
					color: '#F3F1E8';
			  `
			: css`
					background-color: '#5C6145';
			  `};
`;
