import { useState, useEffect } from 'react';
import { getSearchApiResponse } from '../../lib/apis/searchApis.js'
import Header from '../../component/common/Header';
import NavBar from '../../component/common/NavBar';
import BackButton from '../../component/common/BackButton';
// import SearchingResult from '../../component/search/SearchingResult';
import styled from 'styled-components';

export default function SearchPage() {
  const [keyword, setKeyword] = useState();
  const handleInputText = (e) => {
    setKeyword(e.target.value);
    const res = getSearchApiResponse(keyword)
    .then((res)=> {console.log(res);})
  }
  // useEffect(() => {
    //
    // const { username, accountname } = res.stringify();
  // }, [keyword])


  return (
    <>
      <Header
        leftChild={
          <><BackButton /><h2 className='ir'>검색페이지</h2></>}
        rightChild={
          <S_SearchingInput
            value={keyword}
            onChange={handleInputText}
            placeholder='계정 검색' />}
      />
      <S_Main>
        {/* <SearchingResult
          username={username}
          accountname={accountname}
        /> */}
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
`