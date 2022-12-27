import { useState } from 'react';
import { getCommentList } from '../../lib/apis/commentApis';
import CommentItem from './CommentItem';
import styled from 'styled-components';

export default function PostDetailComment({ post_id }) {
	const [commentList, setCommentList] = useState([]);
	getCommentList(post_id).then((res) => {
		setCommentList([...res.data.comments]);
	});

	return (
		<>
			<S_CommentList>
			  {commentList.map((comment, idx) => (
  				<CommentItem key={idx} {...comment} post_id={post_id} />
  			))}
			</S_CommentList>
		</>
	);
}

const S_CommentList = styled.ul`
  padding: 8px 0;
  margin: 20px 0;
  background: #FEFCF3;
  border-radius: 8px;
`