import styled from 'styled-components';
import { Link } from 'react-router-dom';
import home from '../../assets/icons/home.png';
import HomeFill from '../../assets/icons/home_fill.png';
import message from '../../assets/icons/message.png';
import messageFill from '../../assets/icons/message_fill.png';
import post from '../../assets/icons/post.png';
import postFill from '../../assets/icons/post_fill.png';
import user from '../../assets/icons/user.png';
import userFill from '../../assets/icons/user_fill.png';


export default function NavBar() {
  return (
    <>
      <Nav>
        <Ul>
          <Li>
            <Link to='/home'>
              <HomeIcon src={HomeFill} />
              홈
            </Link>
          </Li>
          <Li>
            <Link to='/chatlist'>
              <MsgIcon src={message} />
              채팅
            </Link>
          </Li>
          <Li>
            <Link to='/postUpload'>
              <PostIcon src={post} />
              게시물 작성
            </Link>
          </Li>
          <Li>
            <Link to='/profile'>
              <UserIcon src={user} />
              프로필
            </Link>
          </Li>
        </Ul>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  bottom: 0px;
  height: 60px;
  background-color: #E3E3D3;
  font-size: 10px;
  border-top: 1px solid #DBDBDB;
`
const Ul = styled.ul`
	display: flex;
	justify-content: space-around;
  color: #767676;
  height: 100%;
  margin: auto 0;
`
const Li = styled.li`
  width: 84px;
  text-align: center;
  padding: 11.5px 0 6px;
`
const HomeIcon = styled.img`
  width: 24px;
  height: 24px;
  display: block;
  margin: 0 auto 4px;
`
const MsgIcon = styled.img`
  width: 24px;
  height: 24px;
  display: block;
  margin: 0 auto 4px;
`
const PostIcon = styled.img`
  width: 24px;
  height: 24px;
  display: block;
  margin: 0 auto 4px;
`
const UserIcon = styled.img`
  width: 24px;
  height: 24px;
  display: block;
  margin: 0 auto 4px;
`