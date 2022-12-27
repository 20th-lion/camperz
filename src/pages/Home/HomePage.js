import { useNavigate } from 'react-router-dom';
import Header from '../../component/common/Header';
import NavBar from '../../component/common/NavBar';
import Feed from '../../component/feed/Feed';
import styled from 'styled-components';
import iconSearch from '../../assets/icons/icon_search.png';
import { useEffect } from 'react';

export default function HomePage() {
	const navigate = useNavigate();
	const handleSearching = () => {
		navigate('/search');
	};
	useEffect(() => {
		console.log('111');
	}, []);
	return (
		<>
			<Header
				leftChild={<h2>CAMPERZ 피드</h2>}
				rightChild={<S_SearchBtnSmall src={iconSearch} onClick={handleSearching} />}
			/>
			<main>
				<Feed></Feed>
			</main>
			<NavBar page="home" />
		</>
	);
}

const S_SearchBtnSmall = styled.img`
	width: 24px;
	height: 24px;
	cursor: pointer;
`;
