import React from 'react';

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
		</>
	);
}
