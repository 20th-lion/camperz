import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getLoginApiResponse } from '../../lib/apis/loginApis';
import AuthForm from '../../component/form/AuthForm';

export default function LoginByEmail() {
  const navigate = useNavigate();
  const [loginErrMsg, setLoginErrMsg] = useState([]);

  const handleLogin = (inputs) => {
    getLoginApiResponse(inputs).then((res) => {
      if (res.name === 'AxiosError') {
        const errorMsg = res.response.data;
        console.log(errorMsg);
      } else if (res.data.message) {
        const loginErrMsg = res.data.message;
        setLoginErrMsg([,<span>*{loginErrMsg}</span>]);
      }
      const { accountname, token } = res.data.user;
      localStorage.setItem('token', token);
      localStorage.setItem('accountname', accountname); 
      navigate('/home');
    })
  }

  return (
    <>
      <AuthForm
        className='LoginByEmail'
        formType='login'
        errorMsg={loginErrMsg}
        onSubmit={handleLogin} />
      <Link to="/register">이메일로 회원가입</Link>
    </>
  )
}
