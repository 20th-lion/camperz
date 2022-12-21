import React from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../component/common/Header';
import PostDetailContent from '../../component/post/PostDetailContent';
import PostDetailComment from '../../component/post/PostDetailComment';
import CommentBox from '../../component/common/CommentBox';
import boxIcon from '../../assets/icons/basic_profile_chat.png';
//post 상세 페이지를 보려면 해당 페이지의 id가 필요하다.
export default function PostDetailPage() {
	const { id } = useParams();

	return (
		<>
			<Header leftChild={<h2>뒤로가기</h2>} rightChild={'점'} />
			<main>
				<PostDetailContent id={id} />

				<PostDetailComment post_id={id} />
			</main>
			<CommentBox post_id={id} boxIcon={boxIcon} />
		</>
	);
}
