import { useState } from 'react';
import ButtonRectangle from '../common/ButtonRectangle';
import styled from 'styled-components';

export default function AuthForm({ formType, errorMsg, handleValidate, onSubmit }) {
  // 폼 타입 지정
  const headingMap = {
    login: '로그인',
    register: '이메일로 회원가입',
  };
  const heading = headingMap[formType];

  // 인풋 입력값 얻기
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  })

  // 인풋 밸리데이션에 따라 에러메시지가 등장하거나 버튼 활성화됨
  const handleInputEntered = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  }

  const newErrorMsg = [...errorMsg];
  const [btnActive, setBtnActive] = useState(false);

  const emailValidation = /^[-0-9A-Z!#$%^&*()_=+\\|`,.;:''[\]{}?~]+@[0-9A-Z]+[-0-9A-Z_.]*.[a-z]$/i;
  const showingActive = () => {
    if (emailValidation.test(inputs.email) && inputs.password.length >= 6 && !newErrorMsg[0]) {
      setBtnActive(true);
    }
    if (formType === 'register')
      handleValidate(newErrorMsg, inputs);
  }

  const handleValidateEmail = () => {
    if (!emailValidation.test(inputs.email)) {
      newErrorMsg[0] = '*올바르지 않은 이메일 형식입니다.';
    } else {
      newErrorMsg[0] = undefined;
    }
    showingActive();
  }

  const handleValidatePassword = () => {
    if (inputs.password.length < 6) {
      newErrorMsg[1] = '*비밀번호는 6자 이상이어야 합니다.';
    } else {
      newErrorMsg[1] = undefined;
    }
    showingActive();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (btnActive === true) {
      onSubmit(inputs);
    }
  }

  return (
    <>
      <S_H2>{heading}</S_H2>
      <form onSubmit={handleSubmit}>
        <S_InputBox>
          <S_Label htmlFor='email'>이메일</S_Label>
          <S_Input 
            name='email' 
            value={inputs.email} 
            type='text'
            onChange={handleInputEntered}
            onBlur={handleValidateEmail}
            id='email' 
            placeholder='이메일을 입력해주세요' />
          <S_Strong>{errorMsg[0]}</S_Strong>
        </S_InputBox>
        <S_InputBox>
          <S_Label htmlFor='password'>비밀번호</S_Label>
          <S_Input 
            name='password' 
            value={inputs.password} 
            type='text'
            onChange={handleInputEntered}
            onBlur={handleValidatePassword}
            id='password' 
            placeholder='비밀번호를 입력해주세요' />
          <S_Strong>{errorMsg[1]}</S_Strong>
        </S_InputBox>
        <ButtonRectangle onClick={handleSubmit} text={formType === 'login' ? '로그인' : '다음'} active={btnActive} />
      </form>
    </>
  )
}

const S_H2 = styled.h2`
  color: #000000;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 40px;
`
const S_InputBox = styled.div`
  width: 322px;
  height: 48px;
  margin-bottom: 25px;
`
const S_Label = styled.label`
  display: block;
  font-size: 12px;
  color: #767676;
`
const S_Input = styled.input`
  width: 322px;
  font-size: 14px;
  font-weight: 400;
  line-height: 32px;
  border-bottom: 1px solid #DBDBDB;
  ::placeholder {
    font-weight: 100;
    font-size: 12px;
  }
  :focus {
    border-bottom: 1px solid #EB5757;
  }
`
const S_Strong = styled.strong`
  display: block;
  height: 50px;
  font-size: 12px;
  font-weight: 400;
  line-height: 21px;
  color: #EB5757;
  padding-bottom: 15px;
`