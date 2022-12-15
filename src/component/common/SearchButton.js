import React from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';

const linktext = {
	color: '#ffffff',
	textDecoration: 'none',
	width: '181px',
	height: '34px',
	display: 'block',
	backgroundColor: '#5c6145',
	textAlign: 'center',
	paddingTop: '10px',
};
export default function SearchButton() {
	return (
		<>
			{/* //link에 있는 주소는 search 페이지로 이동 예정입니다.  */}

			<Link to="/" style={linktext}>
				검색하기
			</Link>
		</>
	);
}
