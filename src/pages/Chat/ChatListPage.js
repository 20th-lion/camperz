import React from 'react';
import ChatList from '../../component/chat/ChatList';
import NavBar from '../../component/common/NavBar';
import { Link } from 'react-router-dom';

export default function ChatListPage() {
	return (
		<>
			<Link to={`/chatlist/1`}>
				<ChatList />
			</Link>
			<NavBar />
		</>
	);
}
