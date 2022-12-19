import React from 'react';
import styled from 'styled-components';
export default function ChatItem({ author, content }) {
	return (
		<>
			<ChatListContainer>
				<UserProfileImg src={author.image} />
				<div>
					<UserName>{author.userName}</UserName>
					<ChatContent>{content}</ChatContent>
				</div>
			</ChatListContainer>
		</>
	);
}
const ChatListContainer = styled.div`
	display: flex;
`;

const UserProfileImg = styled.img``;

const UserName = styled.div``;

const ChatContent = styled.p``;
