import { Link } from 'react-router-dom';
import styled from 'styled-components';
import home from '../../assets/icons/home.png';
import homeFill from '../../assets/icons/home_fill.png';
import message from '../../assets/icons/message.png';
import messageFill from '../../assets/icons/message_fill.png';
import post from '../../assets/icons/post.png';
import postFill from '../../assets/icons/post_fill.png';
import user from '../../assets/icons/user.png';
import userFill from '../../assets/icons/user_fill.png';

export default function NavBar({ page }) {
  return (
    <>
      <S_Nav>
        <S_Ul>
          <S_Li>
            <Link to='/home'>
              {page === 'home'
                ?
                <>
                  <S_HomeIcon src={homeFill} />
                  <S_IconText>홈</S_IconText>
                </>
                :
                <>
                  <S_HomeIcon src={home} />
                  <p>홈</p>
                </>
              }
            </Link>
          </S_Li>
          <S_Li>
            <Link to='/chatlist'>
              {page === 'message'
                ?
                <>
                  <S_MsgIcon src={messageFill} />
                  <S_IconText>채팅</S_IconText>
                </>
                :
                <>
                  <S_MsgIcon src={message} />
                  <p>채팅</p>
                </>
              }
            </Link>
          </S_Li>
          <S_Li>
            <Link to='/postUpload'>
              {page === 'post'
                ?
                <>
                  <S_PostIcon src={postFill} />
                  <S_IconText>게시물 작성</S_IconText>
                </>
                :
                <>
                  <S_PostIcon src={post} />
                  <p>게시물 작성</p>
                </>
              }
            </Link>
          </S_Li>
          <S_Li>
            <Link to='/profile'>
              {page === 'user'
                ?
                <>
                  <S_UserIcon src={userFill} />
                  <S_IconText>프로필</S_IconText>
                </>
                :
                <>
                  <S_UserIcon src={user} />
                  <p>프로필</p>
                </>
              }
            </Link>
          </S_Li>
        </S_Ul>
      </S_Nav>
    </>
  );
}

const S_Nav = styled.nav`
  bottom: 0px;
  height: 60px;
  background-color: #E3E3D3;
  font-size: 10px;
  font-weight: 400;
  border-top: 1px solid #DBDBDB;
`
const S_Ul = styled.ul`
	display: flex;
	justify-content: space-around;
  color: #767676;
  height: 100%;
  margin: auto 0;
`
const S_Li = styled.li`
  width: 84px;
  text-align: center;
  padding: 11.5px 0 6px;
`
const S_HomeIcon = styled.img`
  width: 24px;
  height: 24px;
  display: block;
  margin: 0 auto 4px;
`
const S_MsgIcon = styled.img`
  width: 24px;
  height: 24px;
  display: block;
  margin: 0 auto 4px;
`
const S_PostIcon = styled.img`
  width: 24px;
  height: 24px;
  display: block;
  margin: 0 auto 4px;
`
const S_UserIcon = styled.img`
  width: 24px;
  height: 24px;
  display: block;
  margin: 0 auto 4px;
`
const S_IconText = styled.p`
  color: #546500;
`
