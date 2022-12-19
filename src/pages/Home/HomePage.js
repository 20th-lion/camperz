import React from 'react';
import { useNavigate } from 'react-router-dom';
import PostList from '../../component/post/PostList';
import NavBar from '../../component/common/NavBar';
import Header from '../../component/common/Header';
import Button from '../../component/common/Button';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <div className='HomePage'>
        <Header
          leftChild={<Button text='CAMPERZ 피드' />}
          rightChild={
            <Button
              onClick={() => {
                navigate('/search');
              }}
              text={'검색하기'}
              active
            />
          }
        ></Header>
        <div>
          <PostList />
        </div>
        <NavBar />
      </div>
    </>
  )
}
