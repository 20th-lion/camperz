import React from 'react';
import { postDetailLoader } from '../../lib/apis/postApis';
import styled from 'styled-components';

export default function PostDetailContent({ post_id }) {
	let userName;
	let content;
	let image;
	let updated;
	let heartCount;
	let conmentCount;

	postDetailLoader(post_id).then((res) => {
		userName = res.post.author.username;
		content = res.post.content;
		image = res.post.image;
		updated = res.post.updatedAt;
		heartCount = res.post.heartCount;
		conmentCount = res.post.conmentCount;
		console.log(res);
	});
	return (
		<>
			<UserInfo>{userName}</UserInfo>
			<Content>{content}</Content>
			<Image src={image} />
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
