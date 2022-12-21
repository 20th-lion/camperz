import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../component/common/Header';
import PostDetailContent from '../../component/post/PostDetailContent';
import PostDetailComment from '../../component/post/PostDetailComment';
import CommentBox from '../../component/common/CommentBox';
import boxIcon from '../../assets/icons/basic_profile_chat.png';
import moreHeader from '../../assets/icons/more_header.png';
import leftArrow from '../../assets/icons/icon_arrow_left.png';
//post 상세 페이지를 보려면 해당 페이지의 id가 필요하다.
export default function PostDetailPage() {
	const { id } = useParams();

	return (
		<>
			<Header leftChild={<img src={leftArrow} />} rightChild={<img src={moreHeader} />} />
			<Main>
				<PostDetailContent id={id} />
				<PostDetailComment post_id={id} />
			</Main>
			<CommentBox post_id={id} boxIcon={boxIcon} />
		</>
	);
}

const modalBtn = styled.img``;
const Main = styled.main`
	align-items: flex-start;
	justify-content: flex-start;
	width: 390px;
	font-size: 14px;
`;
