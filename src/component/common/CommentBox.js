import { useState, useEffect } from 'react';
import { postComment } from '../../lib/apis/commentApis';
import commentbtn from '../../assets/icons/chat_send.png';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { getMyInfo } from '../../lib/apis/profileApis';

export default function CommentBox({ post_id }) {
	const [btnHandler, setBtnHandler] = useState(false);
	const [commentContent, setCommentContent] = useState('');

	const CommentInputValidator = (e) => {
		setCommentContent(e.target.value);
		if (e.target.value.length === 0) {
			setBtnHandler(false);
		}
		if (e.target.value.length > 0) {
			setBtnHandler(true);
		}
	};

	const btnClickEvent = () => {
		postComment(post_id, commentContent);
		setCommentContent('');
	};

	const [userImg, setUserImg] = useState(null);

	useEffect(() => {
		getMyInfo().then((res) => {
			// MyInfoData.userName = res.data.user.username;
			setUserImg(res.data.user.image);
		});
	}, []);

	return (
		<>
			<S_CommentBox>
				<S_UserIcon src={userImg} />
				<S_CommentInput
					onChange={(e) => {
						CommentInputValidator(e);
					}}
					value={commentContent}
				/>
				{btnHandler === true ? (
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
	padding: 0 13px;
	font-size: 14px;
	font-weight: 400;
`;
const S_CommentUploadButton = styled.img`
	width: 24px;
	height: 24px;
	position: absolute;
	right: 29px;
	cursor: pointer;
`;
