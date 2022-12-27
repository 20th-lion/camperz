import Header from '../../component/common/Header';
import ChatList from '../../component/chat/ChatList';
import NavBar from '../../component/common/NavBar';

export default function ChatListPage() {
  return (
    <>
      <Header />
      <main>
        <ChatList />
      </main>
      <NavBar page='message' />
    </>
  );
}
