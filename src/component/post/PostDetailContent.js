import React, { useState } from 'react';
import { postDetailLoader } from '../../lib/apis/postApis';
import styled from 'styled-components';

export default function PostDetailContent({ id }) {
	const [userName, setUserName] = useState('');
	const [content, setcontent] = useState('');
	const [image, setimage] = useState('');
	const [updated, setUpdated] = useState('');
	const [heartCount, setheartCount] = useState('');
	const [conmentCount, setconmentCount] = useState('');

	postDetailLoader(id).then((res) => {
		setUserName(res.data.post.author.username);
		setcontent(res.data.post.content);
		setimage(res.data.post.image);
		setUpdated(res.data.post.updatedAt);
		setheartCount(res.data.post.heartCount);
		setconmentCount(res.data.post.conmentCount);
	});

	return (
		<>
			<UserInfo>{userName}</UserInfo>
			<Content>{content}</Content>
			{image === 'https://mandarin.api.weniv.co.kr/undefined' ? <></> : <Image src={image} />}
			<SocialInfo>
				{heartCount}
				{conmentCount}
			</SocialInfo>
			<PostDate>{updated}</PostDate>
		</>
	);
}

const UserInfo = styled.div``;
const Content = styled.p``;
const Image = styled.img``;
const SocialInfo = styled.div``;
const PostDate = styled.div``;
