import React from 'react';
import Button from '../common/Button';
import { postUploader } from '../../lib/apis/postApis';
import { imageUpload } from '../../lib/apis/imageUploadApi';

export default function UploadButton({ fileImage, text, preConvertedImg }) {
	let uploadValidation = false;

	if (!(fileImage === '' && text === '')) {
		uploadValidation = true;
	}

	const handlePostUpload = () => {
		imageUpload(preConvertedImg).then((res) => {
			const postContent = {
				post: {
					content: text,
					image: res.data.filename, //"imageurl1, imageurl2" 형식으로
				},
			};
			// console.log(postContent);
			postUploader(postContent).then((res) => {
				console.log(res);
			});
		});
		// if (uploadValidation === true) {
		// 	console.log('업로드 완료!');
		// } 밸리데이션을 버튼에서 하고 있기 때문에 빼도 되지 않을까?
		// postUploader(postContent).then((res) => {
		// 	console.log(res);
		// }
		// );
	};
	return (
		<>
			<Button onClick={handlePostUpload} text={'업로드'} active={uploadValidation} />
		</>
	);
}
