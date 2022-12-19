import React, { useState, useEffect } from 'react';
import CommentBox from '../common/CommentBox';
import { getCommentList } from '../../lib/apis/commentApis';
import CommentItem from './CommentItem';
export default function PostDetailComment({ post_id }) {
	const [commentList, setCommentList] = useState([]);

	getCommentList(post_id).then((res) => {
		setCommentList([...res.data.comments]);
	});

	useEffect(() => {
		// loadPost();
		getCommentList(post_id).then((res) => {
			setCommentList([...res.data.comments]);
		});
	}, []);

	return (
		<>
			{commentList.map((comment, idx) => (
				<CommentItem key={idx} {...comment} />
			))}
			<CommentBox post_id={post_id} />
		</>
	);
}
