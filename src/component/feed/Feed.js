import { useState, useEffect } from 'react';
import { getFeed } from './../../lib/apis/postApis';
import PostItem from '../post/PostItem';
import SearchButton from '../../component/common/SearchButton';
import styled from 'styled-components';
import defaultProfileImg from '../../assets/icons/basic_profile.png';

export default function Feed() {
	const [feedList, setFeedList] = useState([]);

	useEffect(() => {
		getFeed().then((res) => {
			setFeedList([...res.data.posts]);
		});
	}, []);

	return (
		<>
			{feedList.length ? (
				feedList.map((item, idx) => <PostItem key={idx} {...item} />)
			) : (
				<>
					<S_NoFeed>
						<img src={defaultProfileImg} alt='기본프로필사진' />
						<p>유저를 검색해 팔로우 해보세요!</p>
						<SearchButton />
					</S_NoFeed>
				</>
			)}
		</>
	);
}

const S_NoFeed = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
  margin-bottom: 36px;
  img {
    width: 110px;
    height: 110px;
    display: block;
  };
  p {
    font-size: 14px;
    color: #767676;
	  padding: 20px 0;
  };
`;
