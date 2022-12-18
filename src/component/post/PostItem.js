import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HeartButton from "./HeartBtton";
import { addHeart } from "../../lib/apis/heartApis";
import { deleteHeart } from "../../lib/apis/heartApis";


export default function PostItem({ id, content, image, createdAt, updatedAt, hearted, heartCount, commentCount }) {
	const [pushHeart, setPushHeart] = useState(false);
	const [count, setCount] = useState(heartCount);

	const pushHeartButton = async () => {
		await addHeart(id)
			.then((res) => {
				setPushHeart(res.data.post.hearted);
				setCount(res.data.post.heartCount);
				//console.log(res);
			})
			.catch((err) => console.log(err));
	};

	const cancelHeartButton = async () => {
		await deleteHeart(id)
			.then((res) => {
				setPushHeart(res.data.post.hearted);
				setCount(res.data.post.heartCount);
				//console.log(res);
			})
			.catch((err) => console.log(err));
	};

	const handleHeartClick = () => {
		pushHeart ? cancelHeartButton() : pushHeartButton();
	};

	return (
		<>
			<StyledItemBlock>
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
				<div>댓글{commentCount}</div>
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
