import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PostItem from './PostItem';
import { getPostList } from '../../lib/apis/postApis';

export default function PostList({ user }) {
	const [postList, setPostList] = useState([]);

	const loadPost = async () => {
		await getPostList().then((res) => {
			setPostList([...res.data.post]);
		});
	};
	useEffect(() => {
		// loadPost();
		getPostList(user).then((res) => {
			setPostList([...res.data.post]);
		});
	}, []);

	return (
		<>
			<div>
				{postList.map((post, idx) => (
					<PostItem key={idx} {...post} />
				))}
			</div>
		</>
	);
}
