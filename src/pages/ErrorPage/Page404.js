import React from 'react';
import styled from 'styled-components';

import iconSrc from '../../assets/icons/404_logo.png';
import SearchButton from '../../component/common/SearchButton';

export default function Page404() {
	return (
		<>
			<S_Page404Wrapper>
				<S_NotFoundImg src={iconSrc} />
				<S_ErrorMsg>페이지를 찾을 수 없습니다. :(</S_ErrorMsg>
				<SearchButton />
			</S_Page404Wrapper>
		</>
	);
}
const S_Page404Wrapper = styled.div`
	font-weight: 400;
	font-size: 14px;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	align-items: center;
	gap: 23px;
`;
const S_NotFoundImg = styled.img`
	width: 102px;
	height: 156px;
`;
const S_ErrorMsg = styled.p`
	color: #767676;
`;
