import React from 'react';
import styled from 'styled-components';
import CommentBox from '../../component/common/CommentBox';
import userImg from '../../assets/image/chat-profile.svg';
import plusBtn from '../../assets/image/plus-button.svg';
import placeImg from '../../assets/image/camp.jpg';
export default function ChatRoomPage() {
	const otherData =
		'주열님 저번에 친구분들이랑 가셨다던 캠핑장 어디였죠? 사진 좀 볼 수 있을가요? 저 다음 달에 휴간데 그 때 가려고해서요 ㄱ- ';

	const boxIcon = plusBtn;
	return (
		<>
			<OtherPersonImg src={userImg} />
			<OtherPersonContent>{otherData}</OtherPersonContent>
			<MyTextContent>아 거기 좋죠!!! 사진 여깄습니다!</MyTextContent>
			<MyImg src={placeImg} />
			<CommentBox boxIcon={boxIcon} />
		</>
	);
}

const OtherPersonImg = styled.img``;

const OtherPersonContent = styled.p`
	border: 1px solid #c4c4c4;
	border-radius: 5px;
	width: 240px;
	padding: 10px;
`;

const MyTextContent = styled.p`
	padding: 10px;
	color: white;
	border-radius: 5px;
	width: 240px;
	background-color: #5c6145;
`;

const MyImg = styled.img`
	width: 273px;
`;
