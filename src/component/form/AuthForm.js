import { React, useState, useRef } from 'react';
import Button from '../common/Button';

const headingMap = {
  login: '로그인',
  register: '이메일로 회원가입',
};

export default function AuthForm({ className, formType, errorMsg, onSubmit }) {
  const heading = headingMap[formType];

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  })
  
  const [btnActive, setBtnActive] = useState(false);

  const handleInputEntered = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
    setBtnActive(inputs.email === '' || inputs.pw === '' ? false : true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputs);
  }

  return (
    <>
      <section className={className}>
        <h2>{heading}</h2>
        <form action='/'>
          <ul>
            <li>
              <label htmlFor='email'>이메일</label>
              <input name='email' value={inputs.email} type='text'
                onChange={handleInputEntered}
                id='email' placeholder='이메일을 입력해주세요' className='input' />
                <strong>{errorMsg[0]}</strong>
            </li>
            <li>
              <label htmlFor='password'>비밀번호</label>
              <input name='password' value={inputs.password} type='text'
                onChange={handleInputEntered}
                id='password' placeholder='비밀번호를 입력해주세요' className='input' />
              <strong>{errorMsg[1]}</strong>
            </li>
          </ul>
          <Button onClick={handleSubmit} text={formType === 'login' ? '로그인' : '다음'} active={btnActive} />
        </form>
      </section>
    </>
  )
}
// ref='emailRef' 
// ref='pwRef' 