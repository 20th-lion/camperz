import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSearchApiResponse } from '../../lib/apis/searchApis.js';
import Header from '../../component/common/Header';
import NavBar from '../../component/common/NavBar';
import BackButton from '../../component/common/BackButton';
import SearchingResult from '../../component/search/SearchingResult';
import styled from 'styled-components';

export default function SearchPage() {
	const navigate = useNavigate();
	const [keyword, setKeyword] = useState('');
	const [userList, setUserList] = useState([]);
	const handleInputText = (e) => {
		setKeyword(e.target.value);
	};
	useEffect(() => {
		if (keyword !== '') {
			getSearchApiResponse(keyword).then((res) => {
				const userInfo = res.data.map((i) => {
					const { _id, image, username, accountname } = i;
					return { _id, image, username, accountname };
				});
				setUserList(userInfo);
			});
		}
	}, [keyword]);

	return (
		<>
			<Header
				leftChild={
					<>
						<BackButton />
						<h2 className="ir">검색페이지</h2>
					</>
				}
				rightChild={<S_SearchingInput value={keyword} onChange={handleInputText} placeholder="계정 검색" />}
			/>
			<main>
				<SearchingResult userList={userList} keyword={keyword} />
			</main>
			<NavBar page="home" />
		</>
	);
}

const S_SearchingInput = styled.input`
	width: 316px;
	height: 32px;
	background: #fefcf3;
	border-radius: 32px;
	padding-left: 16px;
	font-size: 14px;
	font-weight: 400;
  padding-bottom: 2px;
	::placeholder {
		font-weight: 300;
	}
`;