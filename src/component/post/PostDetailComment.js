import React, { useState } from 'react';
import CommentBox from '../common/CommentBox';

import { getCommentList } from '../../lib/apis/commentApis';

import CommentItem from './CommentItem';
import userImg from '../../assets/icons/basic_profile_chat.png';
export default function PostDetailComment({ post_id }) {
	const [commentList, setCommentList] = useState([]);
	const boxIcon = userImg;
	getCommentList(post_id).then((res) => {
		setCommentList([...res.data.comments]);
	});

	return (
		<>
			{commentList.map((comment, idx) => (
				<CommentItem key={idx} {...comment} post_id={post_id} />
			))}
			{/* <CommentBox post_id={post_id} boxIcon={boxIcon} /> */}
		</>
	);
}
