import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import SocialLoginBtn from '../../component/login/SocialLoginBtn';
import { LoginStateContext } from '../../component/context/LoginContext';
import CAMPERZLogoDark from '../../assets/logo/CAMPERZ_dark.png';

export default function LoginPage() {
	const log = useContext(LoginStateContext);
	return (
		<>
			<S_Main>
				<S_BackGround>
					<S_H2>
						<img src={CAMPERZLogoDark} alt="CAMPERZ" />
					</S_H2>
				</S_BackGround>
				<S_FadeInSection>
					<S_SnsList>
						<SocialLoginBtn sns="카카오톡" />
						<SocialLoginBtn sns="구글" />
						<SocialLoginBtn sns="페이스북" />
					</S_SnsList>
					<S_LinkBox>
						<Link to={'/login/email'}>이메일로 로그인</Link>
						<span></span>
						<Link to={'/register'}>회원가입</Link>
					</S_LinkBox>
				</S_FadeInSection>
			</S_Main>
		</>
	);
}

const S_Main = styled.main`
  height: 100vh;
  background-color: #5C6145;
  justify-content: center;
`
const S_BackGround = styled.div`
	position: absolute;
`;
const S_H2 = styled.h2`
	position: relative;
	width: 192px;
	height: 100px;
	img {
		position: absolute;
		bottom: 60px;
	}
`;
const fadeIn = keyframes`
  from {
    bottom: -300px;
  }
  to {
    bottom: 0;
  }
`;
const S_FadeInSection = styled.section`
	z-index: 10;
	width: 390px;
	height: 319px;
	padding: 50px 34px;
	position: absolute;
	bottom: 0;
	align-self: flex-end;
	background-color: #ffffff;
	border-radius: 20px 20px 0 0;
	animation: ${fadeIn} 1.3s cubic-bezier(0, 0.3, 0.66, 1.02);
	color: #767676;
	text-align: center;
`;
const S_SnsList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 10px;
	font-size: 14px;
`;
const S_LinkBox = styled.div`
	width: 154px;
	margin: 20px auto 0;
	display: flex;
	gap: 12px;
	font-size: 12px;
	span {
		position: relative;
		top: 1px;
		width: 1px;
		height: 10px;
		background-color: #c4c4c4;
	}
`;
