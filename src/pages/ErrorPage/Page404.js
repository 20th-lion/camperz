import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom/dist';
import styled from 'styled-components';

import Header from '../../component/common/Header';
import iconSrc from '../../assets/icons/404_logo.png';
import { LoginStateContext } from '../../component/context/LoginContext';

export default function Page404() {
	const navigate = useNavigate();
	const isLogedIn = useContext(LoginStateContext);
	const handleHomeBtn = () => {
		navigate('/home');
	};
	const handleLoginBtn = () => {
		navigate('/login');
	};
	return (
		<>
			<Header />
			<S_Main>
				<S_Page404Wrapper>
					<S_NotFoundImg src={iconSrc} />
					<S_ErrorMsg>페이지를 찾을 수 없습니다. :(</S_ErrorMsg>
					{isLogedIn ? (
						<S_Button onClick={handleHomeBtn}>홈으로 가기</S_Button>
					) : (
						<S_Button onClick={handleLoginBtn}>로그인 하기</S_Button>
					)}
				</S_Page404Wrapper>
			</S_Main>
		</>
	);
}

const S_Main = styled.main`
	justify-content: flex-start;
	height: calc(100vh - 54px);
`;

const S_Page404Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto;
	align-items: center;
	gap: 23px;
	transform: translateY(-25%);
`;
const S_NotFoundImg = styled.img`
	width: 102px;
	height: 156px;
`;
const S_ErrorMsg = styled.p`
	font-weight: 400;
	font-size: 14px;
	color: #767676;
`;
const S_Button = styled.button`
	width: 181px;
	height: 44px;
	background-color: #5c6145;
	color: #f3f1e8;
	font-size: 14px;
	font-weight: 400;
`;
