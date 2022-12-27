import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { LoginStateContext } from '../context/LoginContext';

export default function SearchButton() {
	const isLogedIn = useContext(LoginStateContext);
	const navigate = useNavigate();
	const handleSearching = () => {
		navigate('/search');
	};
	const handleLogin = () => {
		navigate('/login');
	};
	return (
		<>
			{isLogedIn ? (
				<S_Button onClick={handleSearching}>검색하기</S_Button>
			) : (
				<S_Button onClick={handleLogin}>로그인하기</S_Button>
			)}
		</>
	);
}

const S_Button = styled.button`
	width: 181px;
	height: 44px;
	background-color: #5c6145;
	color: #f3f1e8;
	font-size: 14px;
	font-weight: 400;
`;
