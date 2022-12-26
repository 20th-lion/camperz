import { Link } from "react-router-dom";
import styled from 'styled-components';
import defaultProfileImg from '../../assets/icons/basic_profile_chat.png'

export default function SearchingItem({ image, username, accountname }) {
  const handleGoingtoUser = () => {

  }

  return (
    <>
      <li>
        <Link to={'/profile/'+accountname}>
          <S_A>
            <S_ProfileImg src={image !== 'https://mandarin.api.weniv.co.kr/undefined' ? image : defaultProfileImg} />
            <S_TextBox>
              <S_Username>{username}</S_Username>
              <S_AccountID>@ {accountname}</S_AccountID>
            </S_TextBox>
          </S_A>
        </Link>
      </li>
    </>
  )
}

const S_A = styled.a`
  width: 358px;
  height: 58px;
  display: flex;
  padding: 4px 8px;
  border-radius: 10px;
  background: #FEFCF3;
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
