import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function PostPicture({ id, image }) {
	const navigate = useNavigate();
	const handleImgClick = () => {
		navigate(`/postdetail/${id}`);
	};
	return (
		<>
			{image && (
				<div onClick={handleImgClick}>
					<img src={image} alt="포스트 이미지" />
				</div>
			)}
		</>
	);
}
