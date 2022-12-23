import { useState, useEffect } from 'react';
import getSearchApiResponse from '../../lib/apis/searchApis.js'
import Header from '../../component/common/Header';
import NavBar from '../../component/common/NavBar';
import BackButton from '../../component/common/BackButton';
import SearchingResult from '../../component/search/SearchResult';
import styled from 'styled-components';

export default function SearchPage() {
  const [account, setAccount] = useState();
  const handleInputText = (e) => {
    setAccount(e.target.value);
    
  }
  useEffect(() => {
    console.log(account)
  }, [account])

  return (
    <>
      <Header
        leftChild={
          <><BackButton /><h2 className='ir'>검색페이지</h2></>}
        rightChild={
          <S_SearchingInput
            value={account}
            onChange={handleInputText}
            placeholder='계정 검색' />}
      />
      <S_Main>
        <ul>
          <SearchingResult />
          <SearchingResult />
          <SearchingResult />
        </ul>
      </S_Main>
      <NavBar page='home' />
    </>
  );
}

const S_SearchingInput = styled.input`
  width: 316px;
  height: 32px;
  background: #FEFCF3;
  border-radius: 32px;
  padding-left: 16px;
  font-size: 14px;
  font-weight: 400;
  ::placeholder {
    font-weight: 300;
  }
`
const S_Main = styled.main`
  justify-content: flex-start;
  ul {
    margin: 20px 15px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`