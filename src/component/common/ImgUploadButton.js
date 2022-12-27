import React from 'react';
import styled from 'styled-components';
import iconSrc from '../../assets/icons/img_upload_post.png';

export default function ImgUploadButton({ setFileImage, handleImgChange }) {
	const fileInput = React.useRef(null);

	const handleButtonClick = (e) => {
		fileInput.current.click();
	};

	return (
		<>
			<input
				type="file"
				ref={fileInput}
				multiple={true}
				style={{ display: 'none' }}
				onChange={handleImgChange}
				//handleImgChange에 함수를 전달하면 이미지 업로드 했을 때의 값을 가져올 수 있습니다.
			/>
			<S_ButtonBox src={iconSrc} onClick={handleButtonClick} />
		</>
	);
}
const S_ButtonBox = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50px;
	cursor: pointer;
`;
