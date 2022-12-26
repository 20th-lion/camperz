import styled from 'styled-components';
import SearchingItem from './SearchingItem';

export default function SearchingResultList(props) {
  return (
    <>
      <S_Ul>
        {
          props.userList.map((i) => {
            return (
              <SearchingItem
                key={i._id}
                image={i.image}
                username={i.username}
                accountname={i.accountname}
              />
            )
          })
        }
      </S_Ul>
    </>
  )
}

const S_Ul = styled.ul`
  margin: 20px 15px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`