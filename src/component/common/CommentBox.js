import { useState } from 'react';
import { postComment } from '../../lib/apis/commentApis';
import commentbtn from '../../assets/icons/chat_send.png';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

export default function CommentBox({ post_id, boxIcon }) {
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
	};

	return (
		<>
			<S_CommentBox>
				<S_UserIcon src={boxIcon} />
				<S_CommentInput
					onChange={(e) => {
						CommentInputValidator(e);
					}}
				/>
				{btnHandler === true ? (
					<S_CommentUploadButton onClick={btnClickEvent}>
						<S_CommentUploadButtonImg src={commentbtn} />
					</S_CommentUploadButton>
				) : (
					<></>
				)}
			</S_CommentBox>
		</>
	);
}

const S_UserIcon = styled.img`
	margin-left: 3px;
`;
const S_CommentInput = styled.input`
	padding-left: 15px;
	padding-right: 40px;
	display: inline-block;
	width: 306px;
	height: 36px;
	margin: 0 auto;
	margin-left: 15px;
	border: 1px solid ${palette.bottomBar[2]};
	border-radius: 18.5px;
	background-color: ${palette.bottomBar[1]};
`;
const S_CommentUploadButtonImg = styled.img`
	width: 24px;
	height: 24px;
`;
const S_CommentUploadButton = styled.div`
	position: relative;
	bottom: 31px;
	left: 330px;
	width: 24px;
	height: 24px;
	background-color: ${palette.bottomBar[0]};
	border-radius: 50%;
	cursor: pointer;
	/* background-image: url(${commentbtn}); */
`;
const S_CommentBox = styled.div`
	padding: 12px;
	width: 390px;
	height: 61px;
	background-color: ${palette.bottomBar[1]};
	/* display: flex; */
	/* gap: 10px; */
`;
