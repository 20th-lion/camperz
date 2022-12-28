import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
	}, []);

	return (
		<>
			<Header
				leftChild={
					<S_H2>
						<BackButton /> Followers
					</S_H2>
				}
			></Header>
			<S_Main>
				<FollowContents followData={followerData} followMessage={followerMessage} />
			</S_Main>
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
