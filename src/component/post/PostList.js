import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getPostList } from '../../lib/apis/postApis';
import PostItem from './PostItem';
import PostPicture from './PostPicture';

import postListOff from '../../assets/icons/post-list-off.png';
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
			{!!postList.length && (
				<S_PostSection>
					<S_Header>
						<h2 className="ir">게시글 목록</h2>
						<img onClick={() => setToggle(true)} src={toggle ? postListFill : postListOff} />
						<img onClick={() => setToggle(false)} src={toggle ? postAlbum : postAlbumFill} />
					</S_Header>
					{toggle ? (
						<S_PostListBox>
							{postList.map((post, idx) => (
								<PostItem key={idx} {...post} setPostList={setPostList} user={user} type={type} />
							))}
						</S_PostListBox>
					) : (
						<S_PostAlbumBox>
							{postList.map((post, idx) => (
								<PostPicture key={idx} {...post} />
							))}
						</S_PostAlbumBox>
					)}
				</S_PostSection>
			)}
		</>
	);
}

const S_PostSection = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top: 6px;
	padding-bottom: 10px;
	background-color: #f3f1e8;
	border-top: 1px solid #dbdbdb;
`;
const S_Header = styled.header`
	height: 44px;
	display: flex;
	justify-content: end;
	align-items: center;
	padding-right: 20px;
	border-bottom: 1px solid #dbdbdb;
	gap: 16px;
	img {
		width: 26px;
		height: 26px;
		cursor: pointer;
	}
`;
const S_PostListBox = styled.div`
	display: flex;
	flex-direction: column;
	margin: 20px auto;
	gap: 25px;
`;
const S_PostAlbumBox = styled.div`
	display: flex;
	padding: 20px;
	justify-content: space-around;
	img {
		width: 110px;
		height: 110px;
		object-fit: cover;
		border: 1px solid #dbdbdb;
		border-radius: 8px;
		background-color: #fff;
	}
`;
