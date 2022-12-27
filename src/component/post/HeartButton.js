import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import heart from '../../assets/icons/heart.png';
import heartFill from '../../assets/icons/heart_fill.png';
import { useEffect } from 'react';

export default function HeartButton({ onClick, pushHeart }) {
	return (
		<>
			<S_Button src={heart} onClick={onClick} pushHeart={pushHeart}></S_Button>
		</>
	);
}

const S_Button = styled.button`
	cursor: pointer;
	width: 20px;
	height: 20px;
	${(props) =>
		props.pushHeart
			? css`
					background-image: url(${heartFill});
					background-size: 20px;
					background-repeat: no-repeat;
			  `
			: css`
					background-image: url(${heart});
					background-size: 20px;
					background-repeat: no-repeat;
			  `}
`;
