import React from 'react';
import { useNavigate } from 'react-router-dom';
import { modals } from './../../component/modal/Modals';
import { useModals } from './../../lib/hooks/useModals';
import { deleteComment, reportComment } from '../../lib/apis/commentApis';
export default function CommentItem({ author, content, createdAt, id, post_id }) {
	const { openModal } = useModals();
	const navigate = useNavigate();

	const handleModalClick = () => {
		const myAccountname = localStorage.getItem('accountname');
		const commenterAccountName = author.username;
		let type;
		commenterAccountName === myAccountname ? (type = 'mine') : (type = 'other');
		openModal(modals.commentModal, {
			type: type,
			onReport: () => {
				reportComment(post_id, id, type).then((res) => {});
				// console.log('신고시 실행되는 함수');
			},
			onClose: () => {
				navigate(`/postdetail/${post_id}`);
			},
			onRemove: () => {
				deleteComment(post_id, id, type).then((res) => {});
				// console.log('댓글 삭제시 실행되는 함수');
			},
		});
	};

	return (
		<div>
			<img alt="댓글 이용자 프로필 사진" src={author.image} />
			{author.username}
			{createdAt}
			{content}
			<div onClick={handleModalClick}>댓글신고삭제버튼</div>
		</div>
	);
}
