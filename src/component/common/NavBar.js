import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

export default function NavBar() {
	const navigate = useNavigate();
	const accountname = localStorage.getItem('accountname');
	const goToProfile = () => {
		navigate(`/profile/${accountname}`);
	};
	return (
		<>
			<nav>
				<StyledUl>
					<li>
						<Link to="/home">홈</Link>
					</li>
					<li>
						<Link to="/chatlist">채팅</Link>
					</li>
					<li>
						<Link to="/postUpload">게시글</Link>
					</li>
					<li>
						<button onClick={goToProfile}>프로필</button>
					</li>
				</StyledUl>
			</nav>
		</>
	);
}

const StyledUl = styled.ul`
	display: flex;
	justify-content: space-between;
	width: 80%;
`;
