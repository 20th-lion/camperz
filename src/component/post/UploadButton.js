import React from 'react';
import Button from '../common/Button';
export default function UploadButton({ fileImage, text }) {
	let uploadValidation = false;

	if (!(fileImage === '' && text === '')) {
		uploadValidation = true;
	}
	console.log(text);
	const handlePostUpload = () => {
		if (uploadValidation === true) {
			console.log('업로드 완료!');
		}
	};
	return (
		<>
			<Button onClick={handlePostUpload} text={'업로드'} active={uploadValidation} />
		</>
	);
}
