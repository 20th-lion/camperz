import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../../component/common/Header';
import Footer from '../../component/common/Footer';
import PostDetailContent from '../../component/post/PostDetailContent';
import PostDetailComment from '../../component/post/PostDetailComment';
import CommentBox from '../../component/common/CommentBox';
import boxIcon from '../../assets/icons/basic_profile_chat.png';

//post 상세 페이지를 보려면 해당 페이지의 id가 필요하다.
export default function PostDetailPage() {
  const { id } = useParams();
  const [commentList, setCommentList] = useState([]);
  return (
    <>
      <Header />
      <S_Wapper>
        <S_Main>
          <PostDetailContent id={id} />
          <PostDetailComment post_id={id} commentList={commentList} setCommentList={setCommentList} />
        </S_Main>
        <Footer />
      </S_Wapper>
      <CommentBox post_id={id} boxIcon={boxIcon} setCommentList={setCommentList} commentList={commentList} />
    </>
  );
}

const S_Wapper = styled.div`
	height: calc(100vh - 108px);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	overflow-y: scroll;
	-ms-overflow-style: none;
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}
`;
const S_Main = styled.main`
	height: fit-content;
	margin: 20px auto 0;
	overflow-y: visible;
`;
