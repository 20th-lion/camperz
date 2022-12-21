import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Header from '../../component/common/Header';
import NavBar from '../../component/common/NavBar';
import Feed from '../../component/feed/Feed';
import iconSearch from '../../assets/icons/icon_search.png';

export default function HomePage() {
  const navigate = useNavigate();
  const handleSearching = () => {
    navigate('/search');
  };
  return (
    <>
      <Header
        leftChild={<h2>CAMPERZ 피드</h2>}
        rightChild={<SearchBtnSmall src={iconSearch} onClick={handleSearching} />}
      />
      <main>
        <Feed></Feed>
      </main>
      <NavBar />
    </>
  );
}
const SearchBtnSmall = styled.img`
	width: 24px;
	height: 24px;
	cursor: pointer;
`