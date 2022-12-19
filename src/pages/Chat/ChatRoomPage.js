import React from 'react';
import CommentBox from '../../component/common/CommentBox';
import plusBtn from '../../assets/image/plus-button.svg';
export default function ChatRoomPage() {
	const boxIcon = plusBtn;
	return (
		<>
			안녕
			<CommentBox boxIcon={boxIcon} />
		</>
	);
}
