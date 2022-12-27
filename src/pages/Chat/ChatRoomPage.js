import styled from 'styled-components';
import CommentBox from '../../component/common/CommentBox';
import userImg from '../../assets/logo/ISTP.png';
import plusBtn from '../../assets/icons/chat_upload.png';
import placeImg from '../../assets/image/camp.jpg';
import Header from '../../component/common/Header';
import moreHeader from '../../assets/icons/more_header.png';

export default function ChatRoomPage() {
	const otherData =
		'주열님, 저번에 친구분들이랑 가셨다던 캠핑장 어디였죠? 사진 좀 볼 수 있을까요? 저 다음 달에 휴간데 그 때 가려고 해서요 ㄱ- ';

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
	width: 22px;
	height: 22px;
	cursor: pointer;
`;
const S_main = styled.main`
	justify-content: flex-end;
	align-items: flex-start;
	background-color: #fefcf3;
	padding: 20px;
	font-size: 14px;
	line-height: 19px;
`;
const S_OtherPersonWrapper = styled.div`
	display: flex;
`;
const S_OtherPersonImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
`;
const S_OtherPersonContent = styled.p`
	border: 1px solid #c4c4c4;
	border-radius: 10px;
	border-top-left-radius: 0;
	width: 240px;
	padding: 10px 14px;
	background-color: #ffffff;
	margin-left: 10px;
`;
const S_MyWrapper = styled.div`
	text-align: right;
`;
const S_MyTextContent = styled.p`
	display: inline-block;
	padding: 10px 14px;
	color: white;
	border-radius: 10px;
	border-top-right-radius: 0;
	background-color: #5c6145;
	margin-top: 10px;
	margin-bottom: 10px;
`;
const S_MyImg = styled.img`
  width: 293px;
  height: 226px;
  object-fit: cover;
  border-radius: 10px;
`;
