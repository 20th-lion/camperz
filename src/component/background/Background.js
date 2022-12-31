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
      <S_BG onMouseMove={handleMoving}>
        <S_Wrapper>
          <S_Mold>
            <li>CAMPERZ</li>
            <li>-</li>
            <li>by</li>
            <li>20th</li>
            <li>century</li>
            <li>lions</li>
          </S_Mold>
          <S_FillingBox className='fillingBox'>
            <S_Filling className='filling'>
              <li>CAMPERZ</li>
              <li>-</li>
              <li>by</li>
              <li>20th</li>
              <li>century</li>
              <li>lions</li>
            </S_Filling>
          </S_FillingBox>
          <S_A 
            href='https://github.com/20th-lion/camperz'>
            캠퍼즈 깃헙 바로가기
            <S_Img src={arrow}/>
          </S_A>
        </S_Wrapper>
      </S_BG>
    </>
  );
}

const S_BG = styled.div`
  width: 100vw;
  height: 100vh;
  background: #F7F7F7;
  position: absolute;
  font-size: 80px;
  line-height: 70px;
  font-family: 'Racing Sans One';
`
const S_Wrapper = styled.div`
  margin-left: 5%;
  height: 100%;
  position: relative;
`
const S_Mold = styled.ul`
  position: absolute;
  top: 7%;
  color: transparent;
  -webkit-text-stroke: 1px black;
`
const S_FillingBox = styled.div`
  position: relative;
  height: 70px;
  overflow: hidden;
`
const S_Filling = styled.ul`
  position: absolute;
  top: 74%;
`
const S_A = styled.a`
  position: absolute;
  left: 155px;
  top: 14%;
  font-size: 18px;
  color: #000;
  ::before {
    content: '';
    display: inline-block;
    width: 200px;
    height: 1px;
    position: absolute;
    bottom: 20px;
    background-color: #DBDBDB;
  }
`
const S_Img = styled.img`
position: absolute;
bottom: 31px;
right: -29px;
height: 8px;
`
