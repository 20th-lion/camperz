import React from 'react';
import { useParams } from 'react-router-dom';
import PostDetailContent from '../../component/post/PostDetailContent';
import PostDetailComment from '../../component/post/PostDetailComment';

//post 상세 페이지를 보려면 해당 페이지의 id가 필요하다.
export default function PostDetailPage() {
	const { id } = useParams();

	return (
		<>
			{/* <Headers /> */}
			<PostDetailContent id={id} />
			<PostDetailComment post_id={id} />
		</>
	);
}