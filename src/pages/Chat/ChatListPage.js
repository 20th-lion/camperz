import React from 'react';
import ChatList from '../../component/chat/ChatList';
import NavBar from '../../component/common/NavBar';
import { Link } from 'react-router-dom';
import Header from '../../component/common/Header';
import styled from 'styled-components';
import moreHeader from '../../assets/icons/more_header.png';

export default function ChatListPage() {
	return (
		<>
			<Header rightChild={<ModalBtn src={moreHeader} />} />
			<S_Main>
				<Link to={`/chatlist/1`}>
					<ChatList />
				</Link>
			</S_Main>
			<NavBar />
		</>
	);
}

const ModalBtn = styled.img`
	cursor: pointer;
`;
const S_Main = styled.main`
	justify-content: flex-start;
	align-items: flex-start;
	padding: 0;
`;
