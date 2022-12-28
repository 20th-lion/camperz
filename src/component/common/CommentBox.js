import { useState, useEffect, useRef } from 'react';
import { postComment } from '../../lib/apis/commentApis';
import commentbtn from '../../assets/icons/chat_send.png';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { getMyInfo } from '../../lib/apis/profileApis';

export default function CommentBox({ post_id, setCommentList, commentList }) {
	const inputRef = useRef();
	const [commentContent, setCommentContent] = useState('');

	const CommentInputValidator = (e) => {
		setCommentContent(e.target.value);
	};

	const btnClickEvent = () => {
		postComment(post_id, commentContent).then((res) => {
			setCommentList([...commentList, res.data.comment]);
		});
		setCommentContent('');
	};

	const [userImg, setUserImg] = useState(null);

	useEffect(() => {
		getMyInfo().then((res) => {
			setUserImg(res.data.user.image);
		});
	}, []);

	return (
		<>
			<S_CommentBox>
				<S_UserIcon src={userImg} />
				<S_CommentInput
					ref={inputRef}
					onChange={CommentInputValidator}
					value={commentContent}
					placeholder="댓글 입력하기..."
				/>
				{!!commentContent ? (
					<>
						<S_CommentUploadButton onClick={btnClickEvent} src={commentbtn} />
					</>
				) : (
					<></>
				)}
			</S_CommentBox>
		</>
	);
}

const S_CommentBox = styled.div`
	display: flex;
	height: 60px;
	justify-content: center;
	align-items: center;
	border-top: 1px solid #dbdbdb;
	background-color: ${palette.bottomBar[1]};
	gap: 18px;
	position: relative;
`;
const S_UserIcon = styled.img`
	width: 36px;
	height: 36px;
	border-radius: 50%;
	margin-left: 3px;
	object-fit: cover;
`;
const S_CommentInput = styled.input`
	width: 293px;
	height: 36px;
	border-radius: 18px;
	border: 1px solid ${palette.bottomBar[2]};
	background-color: ${palette.bottomBar[1]};
	padding: 0 13px 1px;
	font-size: 14px;
	font-weight: 400;
	::placeholder {
		padding-bottom: 3px;
		font-size: 12px;
		font-weight: 300;
	}
`;
const S_CommentUploadButton = styled.img`
	width: 24px;
	height: 24px;
	position: absolute;
	right: 29px;
	cursor: pointer;
`;
