import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function ChatItem({ author, content, date }) {
  const navigate = useNavigate();
  const movetoChatRoom = () => {
    navigate('/chatlist/1');
  };

  return (
    <>
      <S_ChatBox onClick={movetoChatRoom}>
        <S_UserIcon src={author.image} />
        <S_Comment>
          <p>{author.userName}</p>
          <span>{content}</span>
        </S_Comment>
        <S_Date>{date}</S_Date>
      </S_ChatBox>
    </>
  );
}

const S_ChatBox = styled.li`
  display: flex;
  align-items: center;
  gap: 18px;
  position: relative;
  height: 60px;
  width: 358px;
  padding: 8px 3px;
  background: #FEFCF3;
  border-radius: 8px;
	cursor: pointer;
`;
const S_UserIcon = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;
const S_Comment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 293px;
  gap: 7px;
  font-size: 14px;
  font-weight: 400;
  span {
    font-size: 12px;
    color: #767676;
    font-weight: 300;
  }
`;
const S_Date = styled.p`
  color: #767676;
  font-size: 12px;
  position: absolute;
  top: 15px;
  right: 8px;
`;
