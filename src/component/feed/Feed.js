import React, { useState, useEffect } from 'react';
import { getFeed } from './../../lib/apis/postApis';
import PostItem from '../post/PostItem';
export default function Feed() {
	const [feedList, setFeedList] = useState([]);
	useEffect(() => {
		getFeed().then((res) => {
			console.log(res);
			setFeedList([...res.data.posts]);
		});
	}, []);

	return <div>{feedList && feedList.map((item, idx) => <PostItem {...item} />)}</div>;
}
