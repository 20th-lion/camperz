import React from 'react';
import styled from 'styled-components';
import iconSrc from '../../assets/image/404logo.svg';
import SearchButton from '../../component/common/SearchButton';

const NotFoundImg = styled.img`
	width: 102px;
	height: 156px;
`;

export default function Page404() {
	return (
		<>
			<NotFoundImg src={iconSrc} />
			<div>페이지를 찾을 수 없습니다. :</div>
			<SearchButton />
		</>
	);
}
