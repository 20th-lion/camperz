import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { addHeart } from '../../lib/apis/HeartApis';
import { deleteHeart } from '../../lib/apis/HeartApis';
import { postDelete } from '../../lib/apis/postApis';
import { useModals } from './../../lib/hooks/useModals';
import Button from './../common/Button';
import HeartButton from './HeartBtton';
import { modals } from '../modal/Modals';
import { getPostList } from './../../lib/apis/postApis';

export default function PostItem({
	id,
	content,
	image,
	createdAt,
	updatedAt,
	heartCount,
	commentCount,
	setPostList,
	user,
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

	const handleClickModal = () => {
		openModal(modals.postItemModal, {
			onEdit: () => {
				navigate(`/postUpload/${id}`);
			},
			onRemove: async () => {
				await postDelete(id);
				getPostList(user).then((res) => {
					setPostList([...res.data.post]);
				});
			},
			onReport: () => {},
			type: user === localStorage.getItem('accountname'),
		});
	};
	return (
		<>
			<StyledItemBlock>
				<Button text="모달" onClick={handleClickModal} />
				<div>아이디{id}</div>
				<div>컨텐츠{content}</div>
				<div
					style={{
						width: '10rem',
						height: '100%',
					}}
				>
					이미지
					{image && <Simg src={image} alt="" />}
				</div>
				<div>작성일{createdAt}</div>
				<div>업데이트 시간{updatedAt}</div>
				<div>
					좋아요
					<HeartButton onClick={handleHeartClick} pushHeart={pushHeart} />
				</div>
				<div>좋아요{count}</div>
				<Link to={`/postdetail/${id}`}>
					<div>댓글{commentCount}</div>
				</Link>
			</StyledItemBlock>
		</>
	);
}

const StyledItemBlock = styled.div`
	border: 1px solid black;
`;

const Simg = styled.img`
	width: 100%;
	height: 100%;
`;
