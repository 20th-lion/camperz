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
					<img
						style={{
							width: '100px',
							height: '100px',
						}}
						src={image}
						alt=""
					/>
				</div>
			)}
		</>
	);
}
