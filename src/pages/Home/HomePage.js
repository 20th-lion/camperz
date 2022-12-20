import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../component/common/Header';
import NavBar from '../../component/common/NavBar';
import Button from '../../component/common/Button';
import defaultProfileImg from '../../assets/image/default-profile-img.svg';
import PostList from '../../component/post/PostList';

export default function HomePage() {
  const navigate = useNavigate();
  const handleSearching = () => {
    navigate('/search')
  }
  return (
    <>
      <section className='HomePage'>
        <Header leftChild={<p>CAMPERZ 피드</p>} rightChild={<Button onClick={handleSearching} text='🔍' active />} />
        <div>
          <img 
            src={ defaultProfileImg }
            alt="기본프로필사진" />
        </div>
        <NavBar />
      </section>

    </>
  )
}
