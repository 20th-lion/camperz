import React from 'react';

export default function ProfileForm({ image, username, accountname, intro }) {
	return (
		<div>
			<div
				style={{
					width: '100px',
					height: '100px',
				}}
			>
				이미지
				<img src={image} alt="프로필 사진" />
			</div>
			<div>
				사용자이름
				<input type="text" value={username} />
			</div>
			<div>
				계정id
				<input type="text" value={accountname} />
			</div>
			<div>
				소개
				<input type="text" value={intro} />
			</div>
		</div>
	);
}
