import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { followingList } from '../../lib/apis/followApis';
import FollowContents from '../../component/follow/FollowContents';
import Header from '../../component/common/Header';
import styled from 'styled-components';
import NavBar from '../../component/common/NavBar';
import BackButton from '../../component/common/BackButton';

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
			<Header
				leftChild={
					<S_H2>
						<BackButton /> Followings
					</S_H2>
				}
			></Header>
			<S_Main>
				<FollowContents followData={followingData} followMessage={followingMessage} />
			</S_Main>
			<NavBar page="user" />
		</>
	);
}

const S_H2 = styled.h2`
	font-weight: 400;
	font-size: 16px;
	line-height: 21px;
`;
const S_Main = styled.main`
	height: calc(100vh - 44px);
`;
