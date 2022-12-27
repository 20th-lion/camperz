import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import { postUploader, postEditer } from '../../lib/apis/postApis';
import { postImageUploader } from '../../lib/apis/imageUploadApi';
export default function UploadButton({ fileImage, text, preConvertedImg, mode, postId }) {
	let uploadValidation = false;
	const navigate = useNavigate();
	if (!(fileImage === undefined && text === '')) {
		uploadValidation = true;
	}

	const handlePostUpload = async () => {
		//이미지가 없는 경우
		if (fileImage === undefined) {
			if (mode === 'edit') {
				const postContent = {
					post: {
						content: text,
						image: undefined,
						//"imageurl1, imageurl2" 형식으로
					},
				};
				postEditer(postId, postContent).then((res) => {
					navigate(`/postdetail/${res.data.post.id}`, { replace: true });
				});
			}
			if (mode === 'new') {
				if (mode === 'new') {
					const postContent = {
						post: {
							content: text,
							image: undefined,
						},
					};

					postUploader(postContent).then((res) => {
						navigate(`/postdetail/${res.data.post.id}`, { replace: true });
					});
				}
			}
		}
		// 이미지가 있는 경우
		if (fileImage !== undefined) {
			await postImageUploader(preConvertedImg).then((res) => {
				if (mode === 'edit') {
					const postContent = {
						post: {
							content: text,
							image: `https://mandarin.api.weniv.co.kr/${res.data.filename}`,
						},
					};

					postEditer(postId, postContent).then((res) => {
						navigate(`/postdetail/${res.data.post.id}`, { replace: true });
					});
				}

				if (mode === 'new') {
					const postContent = {
						post: {
							content: text,
							image: `https://mandarin.api.weniv.co.kr/${res.data.filename}`, //"imageurl1, imageurl2" 형식으로
						},
					};

					postUploader(postContent).then((res) => {
						navigate(`/postdetail/${res.data.post.id}`, { replace: true });
					});
				}
			});
		}
	};
	return (
		<>
			<Button onClick={handlePostUpload} text={'업로드'} active={uploadValidation} />
		</>
	);
}
