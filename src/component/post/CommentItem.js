import React from 'react';

export default function CommentItem({ author, content, createdAt }) {
	return (
		<div>
			<img alt="댓글 이용자 프로필 사진" src={author.image} />
			{author.username}
			{createdAt}
			{content}
		</div>
	);
}
