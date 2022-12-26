import styled from 'styled-components';
import KakaoLogo from '../../assets/logo/Kakao_Logo.png';
import GoogleLogo from '../../assets/logo/Google_Logo.png';
import FacebookLogo from '../../assets/logo/Facebook_Logo.png';

const handleBorderColor = (sns) => {
  switch (sns) {
    case '카카오톡':
      return '#F2C94C';
    case '구글':
      return '#767676';
    case '페이스북':
      return '#2D9CDB';
  }
};
const handleIconImg = (sns) => {
  switch (sns) {
    case '카카오톡':
      return KakaoLogo;
    case '구글':
      return GoogleLogo;
    case '페이스북':
      return FacebookLogo;
  }
};

export default function SocialLoginBtn({ sns }) {
  return (
    <>
      <S_Li sns={sns}>
        <S_Button sns={sns} type='button'>
          {sns} 계정으로 로그인
        </S_Button>
      </S_Li>
    </>
  )
}

const S_Li = styled.li`
  height: 44px;
  border-radius: 44px; 
  border: 1px solid ${({ sns }) => handleBorderColor(sns)};
  font-size: 14px;
`
const S_Button = styled.button`
  width: 100%;
  font: inherit;
  line-height: 44px;
  color: inherit;
  position: relative;

  &::before {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    position: absolute;
    left: 10px;
    top: 9px;
    background-image: url(${({ sns }) => handleIconImg(sns)});
  }
`