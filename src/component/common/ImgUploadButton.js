import React from 'react';
import styled from 'styled-components';
import iconSrc from '../../assets/image/img-upload-icon.svg';

const ButtonContainer = styled.button`
	width: 50px;
	height: 50px;
	background-image: url(${iconSrc});
	border: 0;
	padding: 0;
	border-radius: 50px;
	cursor: pointer;
`;

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
			<ButtonContainer onClick={handleButtonClick} />
		</>
	);
}
