import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { modals } from './../../component/modal/Modals';
import { useModals } from './../../lib/hooks/useModals';
import { deleteComment, reportComment } from '../../lib/apis/commentApis';
import moreHeader from '../../assets/icons/more_header.png';
export default function CommentItem({ author, content, createdAt, id, post_id }) {
	const { openModal } = useModals();
	const navigate = useNavigate();

	const handleModalClick = () => {
		const myAccountname = localStorage.getItem('accountname');
		const commenterAccountName = author.username;
		let type;
		commenterAccountName === myAccountname ? (type = 'mine') : (type = 'other');
		openModal(modals.commentModal, {
			onReport: () => {
				reportComment(post_id, id, type).then((res) => {});
				// console.log('신고시 실행되는 함수');
			},
			onRemove: () => {
				openModal(modals.confirmModal, {
					onConfirm: () => {
						deleteComment(post_id, id, type).then((res) => {});
					},
					message: '댓글을 삭제하시겠어요?',
					btnText: '삭제',
				});
				// console.log('댓글 삭제시 실행되는 함수');
			},
			type: type,
		});
	};

	const createdAtPost = createdAt.substr(0, 11).replace('-', '년 ').replace('-', '월 ').replace('T', '일');

	return (
		<>
			<CommentContainer>
				<CommentAthorImg src={author.image} alt="댓글 이용자 프로필 사진" />
				<Name>{author.username}</Name>
				<CommentModalButton src={moreHeader} onClick={handleModalClick} />
				<CommentBox>{content}</CommentBox>
			</CommentContainer>
			{/* {createdAtPost} */}
		</>
	);
}

const CommentAthorImg = styled.img`
	width: 36px;
	height: 36px;
	border-radius: 50%;
`;

const CommentModalButton = styled.img`
	margin-top: 5px;
	margin-left: 240px;
	width: 20px;
	height: 20px;
	cursor: pointer;
`;

const CommentContainer = styled.div`
	width: 400px;
	padding: 15px;
	height: 80px;
`;

const CommentBox = styled.p`
	text-align: left;
	width: 303px;
	margin-left: 50px;
`;

const Name = styled.div`
	color: black;
	margin-left: 15px;
	margin-top: 2px;
	font-size: 16px;
	display: inline-block;
`;
