import Header from '../../component/common/Header';
import ChatList from '../../component/chat/ChatList';
import NavBar from '../../component/common/NavBar';
import Footer from '../../component/common/Footer';
import styled from 'styled-components';
import WeatherContents from '../../component/chat/WeatherContents';

export default function ChatListPage() {
	return (
		<>
			<Header />
			<S_Wapper>
				<S_Main>
					<WeatherContents />
					<ChatList />
				</S_Main>

				<Footer />
			</S_Wapper>
			<NavBar page="message" />
		</>
	);
}

const S_Main = styled.main`
	height: fit-content;
	min-height: calc(100vh - 108px);
	overflow-y: visible;
`;
const S_Wapper = styled.div`
	height: calc(100vh - 108px);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	overflow-y: scroll;
	-ms-overflow-style: none;
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}
`;