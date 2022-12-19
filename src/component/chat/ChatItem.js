import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
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
	background-color: ${palette.khaki[2]};
	display: flex;
	cursor: pointer;
	&:hover {
		background-color: ${palette.khaki[1]};
		color: white;
	}
`;

const UserProfileImg = styled.img``;

const UserName = styled.div``;

const ChatContent = styled.p``;
