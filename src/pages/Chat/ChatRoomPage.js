import React from 'react';
import styled from 'styled-components';
import CommentBox from '../../component/common/CommentBox';
import userImg from '../../assets/icons/basic_profile_chat.png';
import plusBtn from '../../assets/icons/chat_upload.png';
import placeImg from '../../assets/image/camp.jpg';
import Header from '../../component/common/Header';
import moreHeader from '../../assets/icons/more_header.png';
export default function ChatRoomPage() {
	const otherData =
		'주열님 저번에 친구분들이랑 가셨다던 캠핑장 어디였죠? 사진 좀 볼 수 있을가요? 저 다음 달에 휴간데 그 때 가려고해서요 ㄱ- ';

	const boxIcon = plusBtn;
	return (
		<>
			<Header rightChild={<S_ModalBtn src={moreHeader} />} />
			<S_main>
				<S_OtherPersonWrapper>
					<S_OtherPersonImg src={userImg} />
					<S_OtherPersonContent>{otherData}</S_OtherPersonContent>
				</S_OtherPersonWrapper>
				<S_MyWrapper>
					<S_MyTextContent>아 거기 좋죠!!! 사진 여깄습니다!</S_MyTextContent>
					<S_MyImg src={placeImg} />
				</S_MyWrapper>
			</S_main>
			<CommentBox boxIcon={boxIcon} />
		</>
	);
}

const S_ModalBtn = styled.img`
	cursor: pointer;
`;

const S_main = styled.main`
	background-color: #fefcf3;
	justify-content: center;
	align-items: flex-start;
	font-size: 14px;

	padding: 15px;
	line-height: 19px;
`;

const S_OtherPersonWrapper = styled.div`
	display: flex;
`;
const S_OtherPersonImg = styled.img`
	width: 45px;
	height: 45px;
`;

const S_OtherPersonContent = styled.p`
	font-weight: 400;
	border: 1px solid #c4c4c4;
	border-radius: 10px;
	border-top-left-radius: 0;
	width: 240px;
	padding: 15px 10px;
	background-color: #ffffff;
	margin-left: 10px;
`;

const S_MyWrapper = styled.div`
	text-align: right;
`;
const S_MyTextContent = styled.p`
	display: inline-block;
	padding: 15px 10px;
	color: white;
	border-radius: 10px;
	border-top-right-radius: 0;
	/* width: 240px; */
	background-color: #5c6145;
	margin-top: 10px;
	margin-bottom: 10px;
`;

const S_MyImg = styled.img`
	width: 273px;
`;
