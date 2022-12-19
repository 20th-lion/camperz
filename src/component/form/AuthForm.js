import { React, useState, useRef } from 'react';
import Button from '../common/Button';

const headingMap = {
  login: '로그인',
  register: '이메일로 회원가입',
};

export default function AuthForm({ className, formType, errorMsg, handleValidate, onSubmit }) {
  const heading = headingMap[formType];

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  })
  
  const [btnActive, setBtnActive] = useState(false);
  const newErrorMsg = [...errorMsg];

  const handleInputEntered = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  }

  const emailValidation = /[-0-9A-Z!#$%^&*()_=+\\|`,.;:''[\]{}?~]+@[0-9A-Z]+[-0-9A-Z_.]*.[a-z]/i;
    // 

  const showingActive = () => {
    if (emailValidation.test(inputs.email) && inputs.password.length >= 6 && !newErrorMsg[0]) {
      setBtnActive(true);
    }
    if(formType === 'register') 
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
      <section className={className}>
        <h2>{heading}</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='email'>이메일</label>
            <input name='email' value={inputs.email} type='text'
              onChange={handleInputEntered}
              onBlur={handleValidateEmail}
              id='email' placeholder='이메일을 입력해주세요' className='input' />
              <strong>{errorMsg[0]}</strong>
          </div>
          <div>
            <label htmlFor='password'>비밀번호</label>
            <input name='password' value={inputs.password} type='text'
              onChange={handleInputEntered}
              onBlur={handleValidatePassword}
              id='password' placeholder='비밀번호를 입력해주세요' className='input' />
            <strong>{errorMsg[1]}</strong>
          </div>
          <Button onClick={handleSubmit} text={formType === 'login' ? '로그인' : '다음'} active={btnActive} />
        </form>
      </section>
    </>
  )
}