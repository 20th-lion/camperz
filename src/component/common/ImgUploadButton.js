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
`;

export default function ImgUploadButton() {
	const fileInput = React.useRef(null);

	const handleButtonClick = (e) => {
		fileInput.current.click();
	};

	const handleChange = (e) => {
		console.log(e.target.files[0]);
		//e.target.files[0]는 0번째 이미지 값입니다.
	};

	return (
		<>
			<input
				type="file"
				ref={fileInput}
				multiple={true}
				style={{ display: 'none' }}
				onChange={handleChange}
			/>
			<ButtonContainer onClick={handleButtonClick} />
		</>
	);
}
