import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { addHeart, deleteHeart } from '../../lib/apis/heartApis';
import { postDelete } from '../../lib/apis/postApis';
import { useModals } from './../../lib/hooks/useModals';
import HeartButton from './HeartButton';
import { modals } from '../modal/Modals';
import { getPostList } from './../../lib/apis/postApis';

import morePostIcon from '../../assets/icons/more_post.png';
import message from '../../assets/icons/message.png';
import defaultProfileImg from '../../assets/icons/basic_profile.png';

export default function PostItem({
	id,
	content,
	image,
	createdAt,
	hearted,
	heartCount,
	commentCount,
	author,
	setPostList,
	user,
	type,
}) {
	const [pushHeart, setPushHeart] = useState(hearted);
	const [count, setCount] = useState(heartCount);
	const { openModal } = useModals();
	const navigate = useNavigate();

	const pushHeartButton = async () => {
		await addHeart(id)
			.then((res) => {
				setPushHeart(res.data.post.hearted);
				setCount(res.data.post.heartCount);
			})
			.catch((err) => console.log(err));
	};

	const cancelHeartButton = async () => {
		await deleteHeart(id)
			.then((res) => {
				setPushHeart(res.data.post.hearted);
				setCount(res.data.post.heartCount);
			})
			.catch((err) => console.log(err));
	};

	const handleHeartClick = () => {
		pushHeart ? cancelHeartButton() : pushHeartButton();
	};

	const handleAuthorClick = () => {
		navigate(`/profile/${author.accountname}`);
	};
	const handleClickModal = () => {
		openModal(modals.postItemModal, {
			onEdit: () => {
				navigate(`/postUpload/${id}`);
			},
			onRemove: async () => {
				openModal(modals.confirmModal, {
					onConfirm: async () => {
						await postDelete(id);
						getPostList(user).then((res) => {
							setPostList([...res.data.post]);
						});
					},
					message: '삭제하시겠어요?',
					btnText: '삭제',
				});
			},
			onReport: () => {},
			type: type,
		});
	};

	const handleErrorImg = (e) => {
		e.target.src = defaultProfileImg;
	};
	const createdAtPost = createdAt.substr(0, 11).replace('-', '년 ').replace('-', '월 ').replace('T', '일');

	return (
		<>
			<S_ItemWrapper>
				<S_PostItemHeader>
					<S_ProfileImg onClick={handleAuthorClick} src={author.image} alt="프로필 사진" onError={handleErrorImg} />
					<S_NameBox onClick={handleAuthorClick}>
						<S_Username>{author.username}</S_Username>
						<S_AccountID>@ {author.accountname}</S_AccountID>
					</S_NameBox>
					<S_ModalIconImg src={morePostIcon} onClick={handleClickModal} />
				</S_PostItemHeader>
				<S_ContentBox>
					<S_Text>{content}</S_Text>
					<S_ImgBox>{image && <S_Img src={image} alt="포스트 이미지" onError={handleErrorImg} />}</S_ImgBox>
					<S_SnsDate>
						<S_Sns>
							<HeartButton onClick={handleHeartClick} pushHeart={pushHeart} />
							<span>{count}</span>
							<Link to={`/postdetail/${id}`}>
								<S_CommentButtonImg src={message} />
							</Link>
							<span>{commentCount}</span>
						</S_Sns>
						<S_Date>{createdAtPost}</S_Date>
					</S_SnsDate>
				</S_ContentBox>
			</S_ItemWrapper>
		</>
	);
}

const S_ItemWrapper = styled.div`
	width: 358px;
`;
const S_PostItemHeader = styled.div`
	height: 50px;
	display: flex;
	position: relative;
	cursor: pointer;
`;
const S_ProfileImg = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	object-fit: cover;
`;
const S_NameBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-left: 10px;
	width: 276px;
	gap: 7px;
`;
const S_Username = styled.p`
	font-weight: 400;
	font-size: 14px;
`;
const S_AccountID = styled.p`
	font-size: 12px;
	color: #767676;
`;
const S_ModalIconImg = styled.img`
	position: absolute;
	right: 0px;
	width: 18px;
	height: 18px;
	margin-top: 6px;
	cursor: pointer;
`;
const S_ContentBox = styled.p`
	margin-left: 61px;
`;
const S_Text = styled.div`
	margin-top: 8px;
	font-size: 14px;
	font-weight: 300;
	line-height: 18px;
`;
const S_ImgBox = styled.div`
	margin: 14px 0;
`;
const S_Img = styled.img`
	width: 293px;
	height: 226px;
	object-fit: cover;
	border-radius: 10px;
`;
const S_SnsDate = styled.div`
	color: #767676;
	font-size: 12px;
	span {
		margin-left: 4px;
		height: 20px;
		text-align: center;
		position: relative;
		top: 3px;
	}
	span:nth-child(2) {
		margin-right: 10px;
	}
`;
const S_Sns = styled.div`
	display: flex;
	align-items: center;
	font-weight: 400;
`;
const S_CommentButtonImg = styled.img`
	width: 20px;
	height: 20px;
`;
const S_Date = styled.div`
	margin-top: 7px;
	font-size: 12px;
`;
