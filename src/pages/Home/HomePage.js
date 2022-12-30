import { useNavigate } from 'react-router-dom';
import Header from '../../component/common/Header';
import NavBar from '../../component/common/NavBar';
import Footer from '../../component/common/Footer';
import Feed from '../../component/feed/Feed';
import styled from 'styled-components';
import iconSearch from '../../assets/icons/icon_search.png';

export default function HomePage() {
	const navigate = useNavigate();
	const handleSearching = () => {
		navigate('/search');
	};
	return (
    <>
			<Header
				leftChild={<h2>CAMPERZ 피드</h2>}
				rightChild={<S_SearchBtnSmall src={iconSearch} onClick={handleSearching} />}
			/>
			<S_Wapper>
				<S_Main>
					<Feed></Feed>
				</S_Main>
				<Footer />
			</S_Wapper>
			<NavBar page="home" />
		</>
	);
}

const S_SearchBtnSmall = styled.img`
	width: 24px;
	height: 24px;
	cursor: pointer;
`;
const S_Main = styled.main`
	height: fit-content;
	overflow-y: visible;
`;
const S_Wapper = styled.div`
	height: calc(100vh - 108px);
	display: flex;
	flex-direction: column;
	overflow-y: scroll;
	-ms-overflow-style: none;
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}
`;