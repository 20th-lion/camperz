import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom/dist';
import styled from 'styled-components';
import CAMPERZLogoLight from '../../assets/logo/CAMPERZ_light.png';
import { LoginStateContext, LoginDispatchContext } from '../../component/context/LoginContext';
import { isValidToken } from './../../lib/utils/isValidToken';

export default function Splash() {
	const isLogedIn = useContext(LoginStateContext);
	const { logout } = useContext(LoginDispatchContext);
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(async () => {
			if (isLogedIn && (await isValidToken())) {
				navigate('/home');
			} else {
				logout();
				navigate('/login');
			}
		}, 1500);
	}, []);

	return (
		<>
			<S_Main>
				<S_H1>
					<img src={CAMPERZLogoLight} alt="CAMPERZ" />
				</S_H1>
			</S_Main>
		</>
	);
}

const S_Main = styled.main`
	justify-content: center;
`;
const S_H1 = styled.h1`
	position: relative;
	width: 192px;
	height: 100px;
	img {
		position: absolute;
		bottom: 60px;
	}
`;
