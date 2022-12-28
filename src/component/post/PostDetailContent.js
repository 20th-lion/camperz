import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useModals } from '../../lib/hooks/useModals';
import { modals } from './../modal/Modals';
import HeartButton from '../post/HeartButton';
import { postDetailLoader } from '../../lib/apis/postApis';
import { addHeart, deleteHeart } from '../../lib/apis/heartApis';
import { postDelete } from '../../lib/apis/postApis';

import morePostIcon from '../../assets/icons/more_post.png';
import defaultProfileImg from '../../assets/icons/basic_profile.png';
import heart from '../../assets/icons/heart.png';
import message from '../../assets/icons/message.png';

export default function PostDetailContent({ id }) {
	const [userName, setUserName] = useState('');
	const [accountName, setAccountName] = useState('');
	const [content, setcontent] = useState('');
	const [image, setimage] = useState('');
	const [updated, setUpdated] = useState('');
	const [heartCount, setHeartCount] = useState('');
	const [commentCount, setCommentCount] = useState('');
	const [authorImg, setAuthorImg] = useState('');
	const [pushHeart, setPushHeart] = useState(false);

	const navigate = useNavigate();

	const { openModal } = useModals();

	postDetailLoader(id).then((res) => {
		setUserName(res.data.post.author.username);
		setcontent(res.data.post.content);
		setimage(res.data.post.image);
		setUpdated(res.data.post.updatedAt);
		setHeartCount(res.data.post.heartCount);
		setCommentCount(res.data.post.commentCount);
		setAuthorImg(res.data.post.author.image);
		setAccountName(res.data.post.author.accountname);
		setPushHeart(res.data.post.hearted);
	});

	const handleClickModal = () => {
		const type = localStorage.getItem('accountname') === accountName ? 'mine' : 'other';
		openModal(modals.postItemModal, {
			onRemove: async () => {
				openModal(modals.confirmModal, {
					onConfirm: async () => {
						await postDelete(id);
						navigate(`/profile`);
					},
					message: '삭제하시겠어요?',
					btnText: '삭제',
				});
			},
			onEdit: () => {
				navigate(`/postUpload/${id}`);
			},
			type: type,
		});
	};

	const pushHeartButton = async () => {
		await addHeart(id)
			.then((res) => {
				setPushHeart(res.data.post.hearted);
				setHeartCount(res.data.post.heartCount);
			})
			.catch((err) => console.log(err));
	};

	const cancelHeartButton = async () => {
		await deleteHeart(id)
			.then((res) => {
				setPushHeart(res.data.post.hearted);
				setHeartCount(res.data.post.heartCount);
			})
			.catch((err) => console.log(err));
	};

	const handleHeartClick = () => {
		pushHeart ? cancelHeartButton() : pushHeartButton();
	};

	const updatedAtPost = updated.substr(0, 11).replace('-', '년 ').replace('-', '월 ').replace('T', '일');

	const handleErrorImg = (e) => {
		e.target.src = defaultProfileImg;
	};

	const moveProfilePage = () => {
		navigate(`/profile/${accountName}`);
	};
	return (
		<>
			<S_ItemWrapper>
				<S_PostItemHeader>
					<S_ProfileImg src={authorImg} onClick={moveProfilePage} />
					<S_NameBox>
						<S_Username onClick={moveProfilePage}>{userName}</S_Username>
						<S_AccountID onClick={moveProfilePage}>@ {accountName}</S_AccountID>
					</S_NameBox>
					<S_ModalIconImg src={morePostIcon} onClick={handleClickModal} />
				</S_PostItemHeader>
				<S_ContentBox>
					<S_Text>{content}</S_Text>
					<S_ImgBox>{image === undefined ? <></> : <S_Img src={image} onError={handleErrorImg} />}</S_ImgBox>
					<S_SnsDate>
						<S_Sns>
							<HeartButton
								style={{ backgroundImage: heart }}
								src={heart}
								onClick={handleHeartClick}
								pushHeart={pushHeart}
							/>
							<span>{heartCount}</span>
							<S_CommentButtonImg src={message} />
							<span>{commentCount}</span>
						</S_Sns>
						<S_Date>{updatedAtPost}</S_Date>
					</S_SnsDate>
				</S_ContentBox>
			</S_ItemWrapper>
		</>
	);
}

const S_ItemWrapper = styled.section`
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
const S_ContentBox = styled.div`
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
	cursor: pointer;
`;
const S_Date = styled.div`
	margin-top: 7px;
	font-size: 12px;
`;
