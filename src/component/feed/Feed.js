import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import PostItem from '../post/PostItem';
import defaultProfileImg from '../../assets/icons/basic_profile.png';
import SearchButton from '../../component/common/SearchButton';

import { getFeed } from './../../lib/apis/postApis';

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
        feedList.map((item, idx) => <PostItem {...item} />)
      ) : (
        <>
          <NoFeed>
            <Img src={defaultProfileImg} alt="기본프로필사진" />
            <P>유저를 검색해 팔로우 해보세요!</P>
            <SearchButton />
          </NoFeed>
        </>
      )}
    </>
  );
}

const NoFeed = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Img = styled.img`
	width: 110px;
	height: 110px;
	display: block;
`
const P = styled.p`
	color: #767676;
	padding: 20px 0 20px;
`
