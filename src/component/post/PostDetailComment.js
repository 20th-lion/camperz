import React from 'react';
import CommentBox from '../common/CommentBox';
import { getCommentList } from '../../lib/apis/commentApis';

export default function PostDetailComment({ post_id }) {
	const [commenterName, setCommenterName] = useState('');
	const [commenterImg, setCommenterImg] = useState('');
	const [comment, setComment] = useState('');

	getCommentList(post_id).then((res) => {
		setCommenterName(res.comment.id);
		setCommenterImg(res.comment.author.image);
		setComment(res.comment.content);
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
