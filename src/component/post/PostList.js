import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getPostList } from '../../lib/apis/postApis';
import PostItem from './PostItem';
import PostPicture from './PostPicture';

import postList from '../../assets/icons/post_list.png';
import postListFill from '../../assets/icons/post_list_fill.png';
import postAlbum from '../../assets/icons/post_album.png';
import postAlbumFill from '../../assets/icons/post_album_fill.png';

export default function PostList({ user, type }) {
	const [postList, setPostList] = useState([]);
	const [toggle, setToggle] = useState(true);

	useEffect(() => {
		getPostList(user).then((res) => {
			setPostList([...res.data.post]);
		});
	}, [user]);

	return (
		<>
			<S_Section>
				<h2 className="ir">게시글 목록</h2>
				<S_Header>
					<img onClick={() => setToggle(true)} src={toggle ? postListFill : postList} />
					<img
						onClick={() => setToggle(false)}
						src={toggle ? postAlbum : postAlbumFill}
					/>
				</S_Header>
				{toggle ? (
					<S_PostListBox>
						{postList.map((post, idx) => (
							<PostItem
								key={idx}
								{...post}
								setPostList={setPostList}
								user={user}
								type={type}
							/>
						))}
					</S_PostListBox>
				) : (
					<S_PostAlbumBox>
						{postList.map((post, idx) => (
							<PostPicture key={idx} {...post} />
						))}
					</S_PostAlbumBox>
				)}
			</S_Section>
		</>
	);
}

const S_Section = styled.section`
	width: 100%;
	background-color: #f3f1e8;
	box-sizing: border-box;
	border-top: 0.5px solid #dbdbdb;
	margin-bottom: 6px;
`;

const S_Header = styled.header`
	width: 100%;
	height: 44px;
	box-sizing: border-box;
	border-bottom: 0.5px solid #dbdbdb;
	img {
		width: 26px;
		height: 26px;
	}
`;

const S_PostListBox = styled.div``;

const S_PostAlbumBox = styled.div`
	display: flex;
	padding: 12px;
	img {
		width: 114px;
		height: 114px;
		margin: 4px;
	}
`;
