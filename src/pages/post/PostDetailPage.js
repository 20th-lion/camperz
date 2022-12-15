import React from 'react';
import PostDetailContent from '../../component/post/PostDetailContent';
import PostDetailComment from '../../component/post/PostDetailComment';
// import { postDetailLoader } from '../../lib/apis/postApis';

export default function PostDetailPage() {
	// postDetailLoader(post_id).then((res) => {
	// 	console.log(res);
	// });
	return (
		<>
			{/* <Headers /> */}
			<PostDetailContent />
			<PostDetailComment />
		</>
	);
}
