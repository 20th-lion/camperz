import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import logoImg from '../../assets/logo/CAMPERZ.png';
import githubImg from '../../assets/logo/github.png';
export default function Footer() {
	const navigate = useNavigate();
	return (
		<>
			<S_Footer>
				<S_Links>
					<strong>유저 검색 하기</strong>
					<strong>로그아웃</strong>
					<strong>회원 정보 수정</strong>
				</S_Links>
				<S_ContactWrapper>
					<S_LogoBox src={logoImg} />
					<S_ContactBox>
						<S_ContactInfo>E-mail : tomato@gmail.com</S_ContactInfo>
						<S_ContactInfo>서비스 이용 약관 개인 정보 처리 방침</S_ContactInfo>
					</S_ContactBox>
					<S_GitHub src={githubImg} />
				</S_ContactWrapper>
				<S_CopyrightWrapper>© 2022 CAMPERZ from LikeLion 3th All right reserved.</S_CopyrightWrapper>
			</S_Footer>
		</>
	);
}

const S_Footer = styled.footer`
	margin: 0 auto;
	margin-top: 100px;
	padding: 10px;
	width: 317px;

	border-top: 1px solid #b1b1b1;
	/* background-color: tomato; */
	color: #767676;
`;

const S_Links = styled.div`
	display: flex;
	font-size: 10px;
	justify-content: space-around;
	margin-top: 10px;
`;

const S_ContactWrapper = styled.div`
	display: flex;
	align-items: center;
`;
const S_LogoBox = styled.img`
	padding-top: 10px;
	width: 110px;
`;

const S_ContactBox = styled.div`
	display: inline-block;
	padding-top: 10px;
	font-size: 10px;
	color: #a8a8a8;
`;

const S_ContactInfo = styled.p`
	display: inline-block;
	margin-bottom: 5px;
	margin-left: 7px;
`;

const S_GitHub = styled.img`
	width: 23px;
	height: 23px;
	margin-left: 5px;
`;
const S_CopyrightWrapper = styled.p`
	text-align: center;
	font-size: 11px;
`;
