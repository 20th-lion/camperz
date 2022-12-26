import { useEffect } from 'react';
import { isLogin } from '../../lib/utils/isLogin';
import { useNavigate } from 'react-router-dom/dist';
import styled from 'styled-components';
import CAMPERZLogoLight from '../../assets/logo/CAMPERZ_light.png';

export default function Splash() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      isLogin() ? navigate('/home') : navigate('/login')
    }, 1500);
  }, [])

  return (
    <>
      <S_Main>
        <S_H1>
          <img src={CAMPERZLogoLight} alt='CAMPERZ' />
        </S_H1>
      </S_Main>
    </>
  )
}

const S_Main = styled.main`
  justify-content: center;
`
const S_H1 = styled.h1`
  position: relative;
  width: 192px;
  height: 100px;
  img {
    position: absolute;
    bottom: 60px;
  }
`