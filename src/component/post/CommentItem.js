import React from 'react';

export default function CommentItem({ author, content, createdAt }) {
	return (
		<div>
			<img src={author.image} />
			{author.username}
			{createdAt}
			{content}
		</div>
	);
}
