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
      <main>
        <H1>
          <Img src={CAMPERZLogoLight} alt='CAMPERZ' />
        </H1>
      </main>
    </>
  )
}

const H1 = styled.h1`
  position: relative;
  width: 192px;
  height: 100px;
`
const Img = styled.img`
  position: absolute;
  bottom: 60px;
`