import React, { useState } from 'react';
import styled from 'styled-components';
import ImgUploadButton from '../component/common/ImgUploadButton';
const PostTextArea = styled.textarea`
	width: 300px;
	height: 600px;
	resize: none;
`;
export default function PostUploadPage() {
	const [text, setText] = useState('');

	const handleChange = (e) => {
		setText(e.target.value);
	};
	return (
		<>
			{/* <UserImg /> */}
			<PostTextArea
				onChange={(e) => handleChange(e)}
				value={text}
				placeholder="게시물을 입력하세요..."
			/>
			<ImgUploadButton />
		</>
	);
}
