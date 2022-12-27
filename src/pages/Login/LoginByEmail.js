import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getLoginApiResponse } from '../../lib/apis/loginApis';
import AuthForm from '../../component/form/AuthForm';
import styled from 'styled-components';
import { LoginDispatchContext } from '../../component/context/LoginContext';

export default function LoginByEmail() {
	const { login } = useContext(LoginDispatchContext);
	const navigate = useNavigate();
	const [loginErrMsg, setLoginErrMsg] = useState([]);

	const handleLogin = async (inputs) => {
		await getLoginApiResponse(inputs).then((res) => {
			if (res.name === 'AxiosError') {
				const errorMsg = res.response.data;
				console.log(errorMsg);
			} else if (res.data.message) {
				const loginErrMsg = res.data.message;
				setLoginErrMsg([, <span>*{loginErrMsg}</span>]);
			}
			const { accountname, token } = res.data.user;
			login(token, accountname);
			navigate('/home');
		});
	};

	return (
		<>
			<S_Main>
				<AuthForm formType="login" errorMsg={loginErrMsg} onSubmit={handleLogin} />
				<Link to="/register">이메일로 회원가입</Link>
			</S_Main>
		</>
	);
}

const S_Main = styled.main`
	justify-content: flex-start;
	color: #767676;
	font-size: 12px;
`;
