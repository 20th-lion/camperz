import React from 'react';
import { useNavigate } from 'react-router-dom';
import icon_arrow_left from '../../assets/icons/icon_arrow_left.png';
import styled from 'styled-components';

export default function BackButton() {
	const navigate = useNavigate();
	const goback = () => {
		navigate(-1);
	};
	return <ButtonImg onClick={goback} src={icon_arrow_left} />;

}

const ButtonImg = styled.img`      
	width: 24px;
	height: 24px;
	cursor: pointer;
`

