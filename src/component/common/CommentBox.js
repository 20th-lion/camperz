import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import commentbtn from '../../assets/image/commentbtn.svg';
export default function CommentBox() {
	const [btnHandler, setBtnHandler] = useState(false);
	const commentInputValidator = (e) => {
		console.log(e.target.value);
		if (e.target.value.length === 0) {
			setBtnHandler(false);
		}
		if (e.target.value.length > 0) {
			setBtnHandler(true);
		}
	};
	return (
		<>
			<CommentContainer>
				<CommentInput
					onChange={(e) => {
						commentInputValidator(e);
					}}
				/>
				{btnHandler === true ? (
					<CommentUploadButton>
						<CommentUploadButtonImg src={commentbtn} />
					</CommentUploadButton>
				) : (
					<></>
				)}
			</CommentContainer>
		</>
	);
}

const CommentInput = styled.input`
	display: inline-block;
	width: 306px;
	height: 36px;
	margin: 0 auto;
	border: 1px solid ${palette.bottomBar[2]};
	border-radius: 18.5px;
	background-color: ${palette.bottomBar[1]};
`;

const CommentUploadButtonImg = styled.image`
	width: 24px;
	height: 24px;
`;

const CommentUploadButton = styled.div`
	position: absolute;
	left: 320px;
	width: 28px;
	height: 28px;
	background-color: ${palette.bottomBar[0]};
	border-radius: 50%;
	cursor: pointer;
	/* background-image: url(${commentbtn}); */
`;

const CommentContainer = styled.div`
	display: flex;
	width: 390px;
	height: 61px;
	background-color: ${palette.bottomBar[1]};
`;
