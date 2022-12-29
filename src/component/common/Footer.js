import React, { useContext } from 'react';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';
import { modals } from './../../component/modal/Modals';
import { useModals } from './../../lib/hooks/useModals';
import { LoginDispatchContext } from '../../component/context/LoginContext';
import logoImg from '../../assets/logo/CAMPERZ.png';
import githubImg from '../../assets/logo/github.png';
import { hover } from '@testing-library/user-event/dist/hover';
export default function Footer() {
	const navigate = useNavigate();
	const { openModal } = useModals();
	const { logout } = useContext(LoginDispatchContext);
	const handleModalClick = () => {
		openModal(modals.profileModal, {
			onSetting: () => {},
			onLogout: () => {
				openModal(modals.confirmModal, {
					onConfirm: () => {
						logout();
						navigate('/');
					},
					message: '로그아웃 하시겠어요?',
					btnText: '로그아웃',
				});
			},
		});
	};

	return (
		<>
			<S_Footer>
				<S_Links>
					<Link to={'/search'}>
						<strong>유저 검색 하기</strong>
					</Link>
					<strong onClick={handleModalClick} style={{ cursor: 'pointer' }}>
						로그아웃
					</strong>
					<Link to={'/profile/edit'}>
						<strong>회원 정보 수정</strong>
					</Link>
				</S_Links>
				<S_ContactWrapper>
					<S_LogoBox src={logoImg} />
					<S_ContactBox>
						<S_ContactInfo>E-mail : tomato@gmail.com</S_ContactInfo>
						<S_ContactInfo>서비스 이용 약관 개인 정보 처리 방침</S_ContactInfo>
					</S_ContactBox>
					<a href="https://github.com/20th-lion/camperz" target="_blank">
						<S_GitHub src={githubImg} />
					</a>
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
	padding-left: 10px;
	display: flex;
	align-items: center;
`;
const S_LogoBox = styled.img`
	align-self: flex-end;
	padding-top: 10px;
	width: 90px;
`;

const S_ContactBox = styled.div`
	display: inline-block;
	padding-top: 20px;
	font-size: 10px;
	color: #a8a8a8;
`;

const S_ContactInfo = styled.p`
	display: inline-block;
	margin-bottom: 5px;
	margin-left: 7px;
`;

const S_GitHub = styled.img`
	display: inline-block;
	position: relative;
	top: 10px;
	margin-right: 2px;
	width: 23px;
	height: 23px;
`;
const S_CopyrightWrapper = styled.p`
	margin-top: 10px;
	margin-bottom: 10px;
	text-align: center;
	font-size: 11px;
`;
