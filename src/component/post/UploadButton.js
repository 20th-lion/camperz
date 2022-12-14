import React from 'react';
import Button from '../common/Button';
import { postUploader } from '../../lib/apis/postUploadApis';
import { imageUpload } from '../../lib/apis/imageUploadApi';

export default function UploadButton({ fileImage, text, preConvertedImg }) {
	let uploadValidation = false;

	if (!(fileImage === '' && text === '')) {
		uploadValidation = true;
	}
	// console.log(text);

	const handlePostUpload = () => {
		imageUpload(preConvertedImg).then((res) => {
			console.log(res);
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
