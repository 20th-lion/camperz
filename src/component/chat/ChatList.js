import React from 'react';
import { chatListData } from '../../lib/dummy/chatdata';
import ChatItem from '../chat/ChatItem';
export default function ChatList() {
	return (
		<div>
			{chatListData.map((chat, idx) => (
				<ChatItem key={idx} {...chat} />
			))}
		</div>
	);
}
