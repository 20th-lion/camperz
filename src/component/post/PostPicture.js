import React from 'react';
import { useNavigate } from 'react-router-dom';
import defaultProfileImg from '../../assets/icons/basic_profile_chat.png';

export default function PostPicture({ id, image }) {
	const navigate = useNavigate();
	const handleImgClick = () => {
		navigate(`/postdetail/${id}`);
	};
	const handleImgError = (e) => {
		e.target.src = defaultProfileImg;
	};

	return (
		<>
			{image && (
				<div onClick={handleImgClick}>
					<img src={image} alt="포스트 이미지" onError={handleImgError} />
				</div>
			)}
		</>
	);
}
