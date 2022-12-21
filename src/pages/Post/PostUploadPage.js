import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { postDetailLoader } from '../../lib/apis/postApis';
import { useParams } from 'react-router-dom';
import ImgUploadButton from '../../component/common/ImgUploadButton';
import UploadButton from '../../component/post/UploadButton';
import NavBar from '../../component/common/NavBar';
// import { postUploader } from '../../lib/apis/postApis';

export default function PostUploadPage() {
	const [text, setText] = useState('');
	const [fileImage, setFileImage] = useState('');
	const [preConvertedImg, setPreConvertedImg] = useState(undefined);
	// const navigate = useNavigate();
	const { id } = useParams();

	const [mode, setMode] = useState('');

	useEffect(() => {
		if (id !== undefined) {
			postDetailLoader(id).then((res) => {
				setText(res.data.post.content);
				setFileImage(res.data.post.image);
			});
		}
		if (id !== undefined) {
			setMode('edit');
		}
		if (id === undefined) {
			setMode('new');
		}
	}, []);

	const handleChange = (e) => {
		setText(e.target.value);
	};

	const handleImgChange = (e) => {
		if (e.target.files[0] === undefined) {
			console.log('사진없음');
		} else {
			setPreConvertedImg(e.target.files[0]);
			setFileImage(URL.createObjectURL(e.target.files[0]));
		}
		// console.log(e.target.files[0]);
		//e.target.files[0]는 0번째 이미지 값입니다.
	};

	return (
		<>
			<UploadButton
				text={text}
				fileImage={fileImage}
				preConvertedImg={preConvertedImg}
				mode={mode}
				postId={id}
			/>
			<PostTextArea
				onChange={(e) => handleChange(e)}
				value={text}
				placeholder="게시물을 입력하세요..."
			/>
			{fileImage === '' ? <></> : <PictureArea src={fileImage} style={{ margin: 'auto' }} />}
			<ImgUploadButton setFileImage={setFileImage} handleImgChange={handleImgChange} />
			<NavBar />
		</>
	);
}

//styled commponent
const PostTextArea = styled.textarea`
	width: 300px;
	height: 500px;
	resize: none;
`;

const PictureArea = styled.img`
	width: 200px;
	height: 150px;
	object-fit: cover;
`;
