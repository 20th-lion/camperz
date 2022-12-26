import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getEmailValidApiResponse, getRegisterApiResponse } from '../../lib/apis/registerApis';
import { imageUpload } from './../../lib/apis/imageUploadApi';
import AuthForm from '../../component/form/AuthForm';
import ProfileForm from '../../component/form/ProfileForm';
import ButtonRectangle from '../../component/common/ButtonRectangle';
import styled from 'styled-components';

export default function Register() {
  const navigate = useNavigate();
  const [registerErrMsg, setRegisterErrMsg] = useState([,]);
  const [errorMsg, setErrorMsg] = useState({
    usernameErr: '',
    accountnameErr: '',
  });

  const [btnActive, setBtnActive] = useState(false);

  const handleVerifyEmail = async (newErrorMsg, inputs) => {
    const newRegisterErrMsg = [...newErrorMsg];
    await getEmailValidApiResponse(inputs.email)
      .then((res) => {
        if (res.data.message === '이미 가입된 이메일 주소 입니다.') {
          newRegisterErrMsg[0] = '*이미 가입된 이메일 주소입니다.';
        } else {
          newRegisterErrMsg[0] = null;
        }
      })
      .then(setRegisterErrMsg(newRegisterErrMsg));
  };

  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
    password: '',
    accountname: '',
    intro: '',
    image: 'https://mandarin.api.weniv.co.kr/1671513886026.png',
  });

  const [form, setForm] = useState('AuthForm');
  const handleChangingForm = (inputs) => {
    setUserInfo({ ...userInfo, ...inputs });
    setForm('ProfileForm');
  };

  const handleRegister = async () => {
    await imageUpload(userInfo.image)
      .then((res) => {
        const fileName = res.data.filename || '1671513886026.png';
        const imageUrl = 'https://mandarin.api.weniv.co.kr/' + fileName;
        getRegisterApiResponse({ ...userInfo, image: imageUrl })
          .then((res) => {
            if (res.data.message === '회원가입 성공') {
              navigate('/login');
            }
          });
      });
  };

  return (
    <>
      {form === 'AuthForm' ? (
        <S_Main>
          <AuthForm
            formType="register"
            errorMsg={registerErrMsg}
            handleValidate={handleVerifyEmail}
            onSubmit={handleChangingForm}
          />
        </S_Main>
      ) : (
        <S_Main>
          <S_H2>프로필 설정
            <p>나중에 언제든지 변경할 수 있습니다.</p>
          </S_H2>
          <ProfileForm
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            setErrorMsg={setErrorMsg}
            setBtnActive={setBtnActive}
            errorMsg={errorMsg}
          />
          <ButtonRectangle text="CAMPERZ 시작하기" onClick={handleRegister} active={btnActive} />
        </S_Main>
      )}
    </>
  );
}

const S_Main = styled.main`
  justify-content: flex-start;
`
const S_H2 = styled.h2`
  color: #000000;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 10px;
  p {
    margin-top: 12px;
    color: #767676;
    font-size: 14px;
    font-weight: 300;
  }
`