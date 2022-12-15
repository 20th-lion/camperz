import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BackButton() {
	const navigate = useNavigate();
	const goback = () => {
		navigate(-1);
	};
	return <button onClick={goback}>뒤로가기</button>;
}
