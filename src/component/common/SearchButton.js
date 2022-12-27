import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function SearchButton() {
	const navigate = useNavigate();
	const handleSearching = () => {
		navigate('/search');
	};
	return (
		<>
			<S_Button onClick={handleSearching}>검색하기</S_Button>
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
