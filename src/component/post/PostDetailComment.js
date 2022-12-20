import React, { useState } from 'react';
import CommentBox from '../common/CommentBox';
import { useNavigate } from 'react-router-dom';
import { getCommentList } from '../../lib/apis/commentApis';
import { modals } from './../../component/modal/Modals';
import { useModals } from './../../lib/hooks/useModals';

import CommentItem from './CommentItem';
import userImg from '../../assets/image/chat-profile.svg';
export default function PostDetailComment({ post_id }) {
	const [commentList, setCommentList] = useState([]);
	const boxIcon = userImg;
	getCommentList(post_id).then((res) => {
		setCommentList([...res.data.comments]);
	});
	const { openModal } = useModals();
	const navigate = useNavigate();

	const handleModalClick = (post_id) => {
		openModal(modals.commentModal, {
			onReport: () => {
				console.log('신고시 실행되는 함수');
			},
			onClose: () => {
				navigate(`/postdetail/${post_id}`);
			},
			onRemove: () => {
				console.log('댓글 삭제시 실행되는 함수');
			},
			// onSetting: () => {},
		});
	};

	return (
		<>
			{commentList.map((comment, idx) => (
				<CommentItem key={idx} {...comment} />
			))}
			<div onClick={handleModalClick}>댓글신고버튼</div>
			<CommentBox post_id={post_id} boxIcon={boxIcon} />
		</>
	);
}
