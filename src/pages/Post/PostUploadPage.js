import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { postDetailLoader } from '../../lib/apis/postApis';
import { useParams, useNavigate } from 'react-router-dom';
import ImgUploadButton from '../../component/common/ImgUploadButton';
import UploadButton from '../../component/post/UploadButton';
import Header from '../../component/common/Header';

import { getMyInfo } from '../../lib/apis/profileApis';
// import { postUploader } from '../../lib/apis/postApis';

export default function PostUploadPage() {
	const [text, setText] = useState('');
	const [fileImage, setFileImage] = useState(undefined);
	const [preConvertedImg, setPreConvertedImg] = useState(undefined);
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

	const handleImgChange = (e) => {
		if (e.target.files[0] === undefined) {
			console.log('사진없음');
		} else {
			// console.log(e.target.files[0]);
			setPreConvertedImg(e.target.files[0]);
			setFileImage(URL.createObjectURL(e.target.files[0]));
		}
		// console.log(e.target.files[0]);
		//e.target.files[0]는 0번째 이미지 값입니다.
	};

	const handleChange = (e) => {
		setText(e.target.value);
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
			<Header
				rightChild={
					<UploadButton text={text} fileImage={fileImage} preConvertedImg={preConvertedImg} mode={mode} postId={id} />
				}
			/>
			<S_Main>
				<S_UserImg src={userImg} />
				<S_PostBox>
					<S_PostTextArea
						onChange={(e) => handleChange(e)}
						value={text}
						placeholder="게시물을 입력하세요..."
						maxLength="1000"
					/>
					{fileImage === undefined ? <></> : <S_PictureArea src={fileImage} style={{ margin: 'auto' }} />}
				</S_PostBox>
				<S_ImgButtonBox>
					<ImgUploadButton setFileImage={setFileImage} handleImgChange={handleImgChange} />
				</S_ImgButtonBox>
			</S_Main>
		</>
	);
}

const S_Main = styled.main`
	height: calc(100vh - 48px);
	padding: 20px;
	flex-direction: row;
	align-items: flex-start;
	gap: 10px;
	position: relative;
`;

const S_UserImg = styled.img`
	width: 45px;
	height: 45px;
	border-radius: 50%;
	object-fit: cover;
`;
const S_PostBox = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 30px;
`;
const S_PostTextArea = styled.textarea`
	resize: none;
	width: 100%;
	min-height: calc(50vh - 40px);

  word-break: keep-all;
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  word-break: break-all;
  ::placeholder {
    font-size: 12px;
    font-weight: 100;
  }

`;
const S_PictureArea = styled.img`
	width: 293px;
	height: 226px;
	object-fit: cover;
	border-radius: 10px;
`;
const S_ImgButtonBox = styled.div`
	position: absolute;
	right: 20px;
	bottom: 20px;
`;
