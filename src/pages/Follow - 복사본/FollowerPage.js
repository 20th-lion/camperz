import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../component/common/NavBar';
import { followerList } from '../../lib/apis/followApis';
import FollowContents from '../../component/follow/FollowContents';
import Header from '../../component/common/Header';
import styled from 'styled-components';
import BackButton from '../../component/common/BackButton';


export default function FollowerPage() {
	const { accountname } = useParams();
	const [followerData, setFollowerData] = useState();
	const [followerMessage, setFollowerMessage] = useState('');

	const getFollowerData = async () => {
		await followerList(accountname)
			.then((res) => {
				console.log(res);
				if (res.data.length > 0) {
					setFollowerData(res.data);
				} else {
					setFollowerMessage('팔로워가 없다.');
				}
			})
			.catch((err) => console.log(err));
	};
	useEffect(() => {
		getFollowerData();
		console.log(followerData);
	}, []);

	return (
		<>
			<Header leftChild={<S_div><BackButton />  Followers</S_div>}></Header>
			<S_Main>
				<FollowContents followData={followerData} followMessage={followerMessage} />
			</S_Main>
		</>
	);
}

const S_Main = styled.main`
  justify-content: flex-start;
  height: calc(100vh - 54px);
`
const S_div = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  align-items: center;
`
