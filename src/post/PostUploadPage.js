import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../component/common/Header';
import ImgUploadButton from '../component/common/ImgUploadButton';
import UploadButton from '../component/post/UploadButton';
// import NavBar from '../component/common/NavBar';

const PostTextArea = styled.textarea`
	width: 300px;
	height: 500px;
	resize: none;
`;
export default function PostUploadPage() {
	const [text, setText] = useState('');

	const handleChange = (e) => {
		setText(e.target.value);
	};
	return (
		<>
			<Header />
			<UploadButton />
			{/* <UserImg /> */}
			<PostTextArea
				onChange={(e) => handleChange(e)}
				value={text}
				placeholder="게시물을 입력하세요..."
			/>
			<ImgUploadButton />
			{/* <NavBar /> */}
		</>
	);
}
