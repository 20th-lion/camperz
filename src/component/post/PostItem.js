import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { addHeart, deleteHeart } from '../../lib/apis/heartApis';
import { postDelete } from '../../lib/apis/postApis';
import { useModals } from './../../lib/hooks/useModals';
import Button from './../common/Button';
import HeartButton from './HeartButton';
import { modals } from '../modal/Modals';
import { getPostList } from './../../lib/apis/postApis';

import morePostIcon from '../../assets/icons/more_post.png';
import heart from '../../assets/icons/heart.png';
import heartFill from '../../assets/icons/heart_fill.png';
import message from '../../assets/icons/message.png';

export default function PostItem({
	id,
	content,
	image,
	createdAt,
	heartCount,
	commentCount,
	author,
	setPostList,
	user,
	type,
}) {
	const [pushHeart, setPushHeart] = useState(false);
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
			onReport: () => { },
			type: type,
		});
	};

	const createdAtPost = createdAt.substr(0, 11).replace('-', '년 ').replace('-', '월 ').replace('T', '일');

	return (
		<>
			<StyledItemBlock>
				<PostItemHeader>
					<img
						onClick={handleAuthorClick}
						style={{ width: '50px', height: '50px', borderRadius: '50%' }}
						src={author.image}
						alt="프로필 사진"
					/>
					<Name onClick={handleAuthorClick}>
						<UserName>{author.username}</UserName>
						<div>@ {author.accountname}</div>
					</Name>

					<ModalIconImg src={morePostIcon} onClick={handleClickModal} />
				</PostItemHeader>
				<ContentBox>{content}</ContentBox>
				<ImgContainer>{image && <Simg src={image} alt="" />}</ImgContainer>

				<SocialBtn>
					<HeartButton
						onClick={handleHeartClick}
						pushHeart={pushHeart}
					/>
					{count}

					<Link to={`/postdetail/${id}`}>
						<CommentButtonImg src={message} />
						{commentCount}
					</Link>
				</SocialBtn>
				<DateContainer>{createdAtPost}</DateContainer>
			</StyledItemBlock>
		</>
	);
}

const StyledItemBlock = styled.div`
	/* border: 1px solid black; */
	width: 390px;
	font-size: 14px;
`;

const Simg = styled.img`
	width: 100%;
	height: 100%;
`;

const ModalIconImg = styled.img`
	position: relative;
	left: 220px;
	cursor: pointer;
	margin-top: 5px;
`;

const PostItemHeader = styled.div`
	padding: 15px;
	height: 80px;
	/* border: 1px solid tomato; */
`;

const Name = styled.div`
	color: #767676;
	margin-left: 10px;
	margin-top: 8px;
	font-size: 12px;
	display: inline-block;
`;

const UserName = styled.div`
	color: black;
	font-size: 14px;
	margin-bottom: 2px;
`;

// const AccountName = styled.div``;

const ContentBox = styled.p`
	text-align: left;
	/* border: 2px solid blue; */
	width: 303px;
	margin: 0px 0px 0px 75px;
`;

const ImgContainer = styled.div`
	width: 303px;
	height: 100%;
	margin: 16px 0px 0px 75px;
`;

const SocialBtn = styled.div`
	margin-top: 10px;
	margin-left: 75px;
	/* border: 1px solid green; */
	display: flex;
	gap: 5px;
	color: #767676;
	font-weight: 400;
`;

const HeartButtonImg = styled.img``;

const CommentButtonImg = styled.img`
	width: 20px;
`;

const DateContainer = styled.div`
	font-size: 12px;
	color: #767676;
	margin-top: 10px;
	margin-left: 75px;
`;
