import React from 'react';
import Button from '../common/Button';
export default function UploadButton() {
	return (
		<>
			<Button
				onClick={() => {
					console.log('클릭!');
				}}
				text={'업로드'}
				active
			/>
		</>
	);
}
