import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom/dist';
import styled from 'styled-components';
import CAMPERZLogoLight from '../../assets/logo/CAMPERZ_light.png';
import { LoginStateContext, LoginDispatchContext } from '../../component/context/LoginContext';

export default function Splash() {
	const isLogedIn = useContext(LoginStateContext);
	const navigate = useNavigate();

	useEffect(() => {
		console.log(isLogedIn);
		setTimeout(() => {
			isLogedIn ? navigate('/home') : navigate('/login');
		}, 1500);
	}, []);

	return (
		<>
			<main>
				<S_H1>
					<img src={CAMPERZLogoLight} alt="CAMPERZ" />
				</S_H1>
			</main>
		</>
	);
}

const S_H1 = styled.h1`
	position: relative;
	width: 192px;
	height: 100px;
	img {
		position: absolute;
		bottom: 60px;
	}
`;
