import React from 'react';
import CommentBox from '../common/CommentBox';
import { getCommentList } from '../../lib/apis/commentApis';

export default function PostDetailComment({ post_id }) {
	let commenterName;
	let commenterImg;
	let comment;

	getCommentList(post_id).then((res) => {
		commenterName = res.comment.id;
		commenterImg = res.comment.author.image;
		comment = res.comment.content;
	});

	return (
		<>
			{commenterImg}
			{commenterName}
			{comment}
			<CommentBox post_id={post_id} />
		</>
	);
}
