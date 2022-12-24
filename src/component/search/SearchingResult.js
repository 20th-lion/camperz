import styled from 'styled-components';
import SearchingItem from './SearchingItem';

export default function SearchingResultList(username, accountname) {
  return (
    <>
      <S_Ul>
        hello 
        <SearchingItem />
        <SearchingItem />
        <SearchingItem />
      </S_Ul>
    </>
  )
}

const S_Ul = styled.ul`
  margin: 20px 15px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`
SearchingResultList.defaultProps = {
  username: '',
  accountname: '',
}