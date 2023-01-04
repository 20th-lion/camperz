import React from 'react';
import { useNavigate } from 'react-router-dom';
import postAltImg from '../../assets/image/post_alt_img.png';

export default function PostPicture({ id, image }) {
	const navigate = useNavigate();
	const handleImgClick = () => {
		navigate(`/postdetail/${id}`);
	};

	const handleErrorImg = (e) => {
		e.target.src = postAltImg;
	};
	return (
		<>
			{image && (
				<div onClick={handleImgClick}>
					<img src={image} alt="포스트 이미지" onError={handleErrorImg} />
				</div>
			)}
		</>
	);
}
