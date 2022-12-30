import Header from '../../component/common/Header';
import ChatList from '../../component/chat/ChatList';
import NavBar from '../../component/common/NavBar';
import Footer from '../../component/common/Footer';
import styled from 'styled-components';
export default function ChatListPage() {
	return (
		<>
			<Header />
			<S_Wapper>
				<S_Main>
					<ChatList />
				</S_Main>
			</S_Wapper>
				<Footer />
			<NavBar page="message" />
		</>
	);
}

const S_Main = styled.main`
	height: fit-content;
	/* min-height: calc(100vh - 108px); */
	margin: 20px auto 0;
	overflow-y: visible;
`;

const S_Wapper = styled.div`
	word-break: break-all;
	height: calc(100vh - 108px);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	/* align-items: center; */

	overflow-x: hidden;
	overflow-y: scroll;
	-ms-overflow-style: none;
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}
`;
