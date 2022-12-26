import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
export default function ChatItem({ author, content }) {
	return (
		<>
			<S_ChatList>
				<ChatListContainer>
					<UserProfileImg src={author.image} />
					<S_div>
						<UserName>{author.userName}</UserName>
						<ChatContent>{content}</ChatContent>
					</S_div>
				</ChatListContainer>
				<S_chatDate>2022-12-31</S_chatDate>
			</S_ChatList>
		</>
	);
}

const S_ChatList = styled.div`
	align-items: center;
	display: flex;
	justify-content: space-between;
	width: 390px;
	cursor: pointer;
	/* &:hover {
		background-color: ${palette.khaki[1]};
		color: white;
	} */
`;
const ChatListContainer = styled.div`
	background-color: ${palette.khaki[2]};
	display: flex;
	/* &:hover {
		background-color: ${palette.khaki[1]};
		color: white;
	} */
	padding: 15px;
	padding-left: 3px;
	font-weight: 400;
	justify-content: flex-start;
	&::before {
		position: relative;
		left: 13px;
		content: '';
		width: 12px;
		height: 12px;
		background-color: tomato;
		border-radius: 50%;
	}
`;

const UserProfileImg = styled.img`
	width: 50px;
	height: 50px;
	&::before {
		content: '';
		width: 12px;
		height: 12px;
		background-color: tomato;
	}
`;

const S_div = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 5px;
	padding-left: 10px;
`;
const UserName = styled.div`
	font-size: 14px;
`;

const ChatContent = styled.p`
	font-size: 12px;
	color: #767676;
`;

const S_chatDate = styled.div`
	position: relative;
	top: 10px;
	color: #dbdbdb;
	font-size: 10px;
	margin-right: 15px;
`;
