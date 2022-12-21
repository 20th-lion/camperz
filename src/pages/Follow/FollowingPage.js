import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { followingList } from '../../lib/apis/followApis';
import FollowContents from '../../component/follow/FollowContents';
import Header from '../../component/common/Header';

export default function FollowingPage() {
	const { accountname } = useParams();
	const [followingData, setFollowingData] = useState();
	const [followingMessage, setFollowingMessage] = useState('');

	const getFollowingData = async () => {
		await followingList(accountname)
			.then((res) => {
				console.log(res);
				if (res.data.length > 0) {
					setFollowingData(res.data);
				} else {
					setFollowingMessage('팔로잉이 없다.');
				}
			})
			.catch((err) => console.log(err));
	};
	useEffect(() => {
		getFollowingData();
		console.log(followingData);
	}, []);

	return (
		<>
			<p>팔로잉창</p>
			<Header></Header>
			<FollowContents followData={followingData} followMessage={followingMessage} />
		</>
	);
}
