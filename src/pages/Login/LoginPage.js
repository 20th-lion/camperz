import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const SocialLoginBtn = ({ style, sns }) => {
    return (
      <>
        <li className='socialLoginBtn'>
          <button type='button' className={style}>{sns} 계정으로 로그인</button>
        </li>
      </>
    );
  };

  return (
    <>
      <section className='LoginPage'>
        <h2>
          <img src="CAMPERZ_DARK" alt="CAMPERZ" />
        </h2>
        <div>
          <ul>
            <SocialLoginBtn style='kakaoLogin' sns='카카오톡' />
            <SocialLoginBtn style='googleLogin' sns='구글' />
            <SocialLoginBtn style='facebookLogin' sns='페이스북' />
          </ul>
          <div>
            <Link to={'/login/email'}>이메일로 로그인</Link>
            |
            <Link to={'/join'}>회원가입</Link>
          </div>
        </div>
      </section>
    </>
  );
}

