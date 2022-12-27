import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { postDetailLoader } from '../../lib/apis/postApis';
import { useParams, useNavigate } from 'react-router-dom';
import ImgUploadButton from '../../component/common/ImgUploadButton';
import UploadButton from '../../component/post/UploadButton';
import Header from '../../component/common/Header';
import moreHeader from '../../assets/icons/more_header.png';
import leftArrow from '../../assets/icons/icon_arrow_left.png';
import { getMyInfo } from '../../lib/apis/profileApis';
// import { postUploader } from '../../lib/apis/postApis';

export default function PostUploadPage() {
	const [text, setText] = useState('');
	const [fileImage, setFileImage] = useState(undefined);
	const [preConvertedImg, setPreConvertedImg] = useState(undefined);
	// const navigate = useNavigate();
	const { id } = useParams();
	const navigate = useNavigate();
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
			// console.log(e.target.files[0].name);
			setPreConvertedImg(e.target.files[0].name);
			setFileImage(URL.createObjectURL(e.target.files[0]));
		}
		// console.log(e.target.files[0]);
		//e.target.files[0]는 0번째 이미지 값입니다.
	};

	const moveBack = () => {
		navigate(-1);
	};

	useEffect(() => {
		getMyInfo().then((res) => {
			console.log(res);
		});
	}, []);

	return (
		<>
			<Header
				leftChild={<ModalBtn src={leftArrow} onClick={moveBack} />}
				rightChild={
					<UploadButton text={text} fileImage={fileImage} preConvertedImg={preConvertedImg} mode={mode} postId={id} />
				}
			/>
			<Main>
				<UserImg src={moreHeader} />
				<PostTextArea onChange={(e) => handleChange(e)} value={text} placeholder="게시물을 입력하세요..." />
				{fileImage === undefined ? <></> : <PictureArea src={fileImage} style={{ margin: 'auto' }} />}
				<ImgButtonContainer>
					<ImgUploadButton setFileImage={setFileImage} handleImgChange={handleImgChange} />
				</ImgButtonContainer>
			</Main>
		</>
	);
}

//styled commponent
const PostTextArea = styled.textarea`
	padding-top: 12px;
	font-family: 'Noto Sans KR', sans-serif;
	color: black;
	background-color: #f3f1e8;
	width: 300px;
	height: 50%;
	resize: none;
	outline: none;
	margin-bottom: 10px;
	border: 0;
	&::placeholder {
		color: #c4c4c4;
	}
`;

const PictureArea = styled.img`
	position: relative;
	right: 27px;
	width: 200px;
	height: 150px;
	object-fit: cover;
`;

const ModalBtn = styled.img`
	cursor: pointer;
`;

const Main = styled.main`
	padding: 20px;
	text-align: center;
	justify-content: flex-start;
	display: block;
	height: calc(100vh - 54px);
`;

const UserImg = styled.img`
	margin-right: 5px;
	border: 2px solid tomato;
	width: 45px;
	height: 45px;
	border-radius: 50%;
`;

const ImgButtonContainer = styled.div`
	text-align: right;
	position: sticky;
	top: 90%; ;
`;
