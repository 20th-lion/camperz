import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkContainer = styled.div`
	width: 102px;
	height: 156px;
`;

export default function searchButton() {
	return (
		<>
			<Link to="/">검색하기</Link>
		</>
	);
}
