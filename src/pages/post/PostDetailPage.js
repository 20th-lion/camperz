import React from 'react';
import { useParams } from 'react-router-dom';
import PostDetailContent from '../../component/post/PostDetailContent';
import PostDetailComment from '../../component/post/PostDetailComment';
// import { postDetailLoader } from '../../lib/apis/postApis';

//post 상세 페이지를 보려면 해당 페이지의 id가 필요하다.
export default function PostDetailPage() {
	const params = useParams();
	// postDetailLoader(post_id).then((res) => {
	// 	console.log(res);
	// });
	return (
		<>
			{/* <Headers /> */}
			<PostDetailContent post_id={params} />
			<PostDetailComment post_id={params} />
		</>
	);
}
