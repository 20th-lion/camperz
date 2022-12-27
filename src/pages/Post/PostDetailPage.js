import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../component/common/Header';
import PostDetailContent from '../../component/post/PostDetailContent';
import PostDetailComment from '../../component/post/PostDetailComment';
import CommentBox from '../../component/common/CommentBox';
import boxIcon from '../../assets/icons/basic_profile_chat.png';
import leftArrow from '../../assets/icons/icon_arrow_left.png';
//post 상세 페이지를 보려면 해당 페이지의 id가 필요하다.
export default function PostDetailPage() {
	const { id } = useParams();
	const navigate = useNavigate();
	const sayHi = () => {
		navigate(-1);
	};
	const [commentList, setCommentList] = useState([]);
	return (
		<>
			<Header />
			<S_Main>
				<PostDetailContent id={id} />
				<PostDetailComment post_id={id} commentList={commentList} setCommentList={setCommentList} />
			</S_Main>
			<CommentBox post_id={id} boxIcon={boxIcon} setCommentList={setCommentList} />
		</>
	);
}

const S_Main = styled.main`
	margin: 20px auto 0;
`;
