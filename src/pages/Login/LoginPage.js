import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import SocialLoginBtn from '../../component/login/SocialLoginBtn';
import CAMPERZLogoDark from '../../assets/logo/CAMPERZ_dark.png';

export default function LoginPage() {
  return (
    <>
      <Main>
        <BackGround>
          <H2>
            <Img src={CAMPERZLogoDark} alt='CAMPERZ' />
          </H2>
        </BackGround>
        <LoginFadeIn>
          <Ul>
            <SocialLoginBtn sns='카카오톡' />
            <SocialLoginBtn sns='구글' />
            <SocialLoginBtn sns='페이스북' />
          </Ul>
          <LinkBox>
            <Link to={'/login/email'}>이메일로 로그인</Link>
            <Span></Span>
            <Link to={'/register'}>회원가입</Link>
          </LinkBox>
        </LoginFadeIn>
      </Main>
    </>
  )
}

const Main = styled.main`
  height: 100vh;
  background-color: #5C6145;
`
const BackGround = styled.div`
    position: absolute;
`
const H2 = styled.h2`
  position: relative;
  width: 192px;
  height: 100px;
`
const Img = styled.img`
  position: absolute;
  bottom: 60px;
`
const fadeIn = keyframes`
  from {
    bottom: -300px;
  }
  to {
    bottom: 0;
  }
`
const LoginFadeIn = styled.section`
  z-index: 10;
  width: 390px;
  height: 319px;
  padding: 50px 34px;
  position: absolute;
  bottom: 0;
  align-self: flex-end;
  background-color: #FFFFFF;
  border-radius: 20px 20px 0 0;
  animation: ${fadeIn} 1.3s cubic-bezier(0, 0.3, 0.66, 1.02);
  color: #767676;
  text-align: center;
`
const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 14px;

`
const LinkBox = styled.div`
  width: 154px;
  margin: 20px auto 0; 
  display: flex;
  gap: 12px;
  font-size: 12px;
`
const Span = styled.span`
  position: relative;
  top: 1px;
  width: 1px;
  height: 10px;
  background-color: #C4C4C4;
`
