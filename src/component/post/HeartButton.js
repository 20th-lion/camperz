import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import heart from '../../assets/icons/heart.png';
export default function HeartButton({ onClick, pushHeart }) {
	return (
		<>
			<StyledButton src={heart} onClick={onClick} pushHeart={pushHeart}></StyledButton>
		</>
	);
}

const StyledButton = styled.img`
	cursor: pointer;
	width: 20px;
	height: 20px;
	background-color: ${palette.Heart[1]};
	${(props) =>
		props.pushHeart === false &&
		css`
			background-color: ${palette.Heart[0]};
		`}
`;
