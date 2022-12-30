import gsap from 'gsap';
import styled from 'styled-components';
import arrow from '../../assets/icons/arrow.png';

export default function Background() {
  const handleMoving = (e) => {
    const y = e.clientY - 35;
    gsap.to('.fillingBox', {
      y: y
    });
    gsap.to('.filling', {
      y: -y
    });
  };

  return (
    <>
      <S_Wrapper onMouseMove={handleMoving}>

        <S_Mold>CAMPERZ</S_Mold>
        <S_FillingBox className='fillingBox'>
          <S_Filling className='filling'>CAMPERZ</S_Filling>
        </S_FillingBox>
        <S_A 
          href='https://github.com/20th-lion/camperz'>
          캠퍼즈 깃헙 바로가기
          <S_Img src={arrow}/>
        </S_A>
      </S_Wrapper>
    </>
  );
}

const S_Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #F7F7F7;
  position: absolute;
  font-size: 80px;
  line-height: 70px;
  font-family: 'Racing Sans One';
`
const S_Mold = styled.div`
  position: absolute;
  top: 50px;
  left: 80px;
  color: transparent;
  -webkit-text-stroke: 1px black;
`
const S_FillingBox = styled.div`
  position: relative;
  height: 70px;
  overflow: hidden;
`
const S_Filling = styled.div`
  position: absolute;
  top: 50px;
  left: 80px;
`
const S_A = styled.a`
  position: relative;
  left: 235px;
  top: 10px;
  font-size: 18px;
  color: #000;
  ::before {
    content: '';
    display: inline-block;
    width: 200px;
    height: 1px;
    position: absolute;
    bottom: -1px;
    background-color: #DBDBDB;
  }
`
const S_Img = styled.img`
position: absolute;
bottom: 6px;
right: -30px;
height: 8px;
`