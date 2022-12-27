import { chatListData } from '../../lib/dummy/chatdata';
import ChatItem from '../chat/ChatItem';
import styled from 'styled-components';

export default function ChatList() {
  return (
    <>
      <S_Ul>
        {chatListData.map((chat, idx) => (
          <ChatItem key={idx} {...chat} />
        ))}
      </S_Ul>
    </>
  );
}

const S_Ul = styled.ul`
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  :first-child::before {
		content: '';
		width: 12px;
		height: 12px;
    border-radius: 50%;
    display: block;
    position: absolute;
    top: 6px;
		left: 4px;
		background-color: #FF5E00;
    z-index: 10;
  }
`