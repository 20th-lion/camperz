import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getEmailValidApiResponse } from '../../lib/apis/registerApis';
import AuthForm from '../../component/form/AuthForm';

export default function Register() {
  const navigate = useNavigate();
  const [registerErrMsg, setRegisterErrMsg] = useState([,]);
  const handleVerifyEmail = (newErrorMsg, inputs) => {
    const newRegisterErrMsg = [...newErrorMsg];
    getEmailValidApiResponse(inputs.email).then((res) => {
      if (res.data.message === '이미 가입된 이메일 주소 입니다.') {
        newRegisterErrMsg[0] = '*이미 가입된 이메일 주소입니다.';
      } else {
        newRegisterErrMsg[0] = null;
      } 
    })
    setRegisterErrMsg(newRegisterErrMsg);
  }

  const [userInfo, setUserinfo] = useState({
    'user': {
      'username': '',
      'email': '',
      'password': '',
      'accountname': '',
      'intro': '',
      'image': ''
    },
  });

  const handleRegister = (inputs) => {
    setUserinfo({
      ...userInfo,
      ...inputs,
    })
    console.log(userInfo);
  }

  return (
    <>
      <AuthForm
        className='Register'
        formType='register'
        errorMsg={registerErrMsg}
        handleValidate={handleVerifyEmail}
        onSubmit={handleRegister} 
      />
    </>
  )
}