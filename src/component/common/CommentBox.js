import { useState, useEffect, useRef } from 'react';
import { postComment } from '../../lib/apis/commentApis';
import commentbtn from '../../assets/icons/chat_send.png';
import styled from 'styled-components';
import { getMyInfo } from '../../lib/apis/profileApis';

export default function CommentBox({ post_id, setCommentList, commentList }) {
	const inputRef = useRef();
	const [commentContent, setCommentContent] = useState('');

	const CommentInputValidator = (e) => {
		setCommentContent(e.target.value);
	};

	const btnClickEvent = () => {
		postComment(post_id, commentContent).then((res) => {
			setCommentList([res.data.comment, ...commentList]);
		});
		setCommentContent('');
	};

	const enterEventHandler = (e) => {
		if (commentContent !== '' && e.key === 'Enter') {
			btnClickEvent();
		}
	};

	const [userImg, setUserImg] = useState(null);

	useEffect(() => {
		getMyInfo().then((res) => {
			setUserImg(res.data.user.image);
		});
	}, []);

	return (
		<>
			<S_StickyBox>
				<S_CommentBox>
					<S_UserIcon src={userImg} />
					<S_CommentInput
						ref={inputRef}
						onChange={CommentInputValidator}
						value={commentContent}
						placeholder="댓글 입력하기..."
						onKeyDown={enterEventHandler}
					/>
					{!!commentContent ? (
						<>
							<S_CommentUploadButton onClick={btnClickEvent} src={commentbtn} />
						</>
					) : (
						<></>
					)}
				</S_CommentBox>
			</S_StickyBox>
		</>
	);
}

const S_StickyBox = styled.div`
	position: sticky;
	bottom: 0px;
`;
const S_CommentBox = styled.div`
	display: flex;
	height: 60px;
	justify-content: center;
	align-items: center;
	border-top: 1px solid #dbdbdb;
	background-color: #e3e3d3;
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
	border: 1px solid #92918a;
	background-color: #e3e3d3;
	padding: 0 38px 0 13px;
	font-size: 14px;
	line-height: 15px;
	font-weight: 400;
	::placeholder {
		line-height: 20px;
		font-size: 13px;
		font-weight: 100;
	}
`;
const S_CommentUploadButton = styled.img`
	width: 24px;
	height: 24px;
	position: absolute;
	right: 29px;
	cursor: pointer;
`;
