import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';

import AuthForm from '../../component/form/AuthForm';
import { getLoginApiResponse } from '../../lib/apis/loginApis';
import { LoginDispatchContext } from '../../component/context/LoginContext';

export default function LoginByEmail() {
	const navigate = useNavigate();
	const { login } = useContext(LoginDispatchContext);
	const [authFormErrMsg, setAuthFormErrMsg] = useState({
		firstLineErr: null,
		secondLineErr: null,
	});

	const handleLogin = async (inputs) => {
		await getLoginApiResponse(inputs).then((res) => {
			if (res.data.message) {
				const ErrorMsg = res.data.message;
				setAuthFormErrMsg({ ...authFormErrMsg, secondLineErr: '*' + ErrorMsg });
				return;
			}
			const { token, accountname } = res.data.user;
			login(token, accountname);
			navigate('/home');
		});
	};

	return (
		<>
			<S_Main>
				<AuthForm formType="login" errorMsg={authFormErrMsg} onSubmit={handleLogin} />
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
