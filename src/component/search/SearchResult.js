import styled from 'styled-components';
import ProfileImg from '../../assets/icons/basic_profile_chat.png'

export default function SearchResult() {
  return (
    <>
      <li>
        <S_A>
          <S_ProfileImg src={ProfileImg} />
          <S_TextBox>
            <S_Username>애월읍 위니브 감귤농장</S_Username>
            <S_AccountID>@ weniv_Mandarin</S_AccountID>
          </S_TextBox>
        </S_A>
      </li>
    </>
  )   
}

const S_A = styled.a`
  width: 358px;
  height: 50px;
  display: flex;
  cursor: pointer;
`
const S_ProfileImg = styled.img`
  width: 50px;
  height: 50px;
`
const S_TextBox = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`
const S_Username = styled.p`
  font-weight: 400;
  font-size: 14px;
`
const S_AccountID = styled.p`
  font-size: 12px;
  color: #767676;
` 
