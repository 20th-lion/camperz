import { useEffect, useState } from 'react';
import styled from 'styled-components';
import FollowUser from '../follow/FollowUser';

export default function FollowContents({ followData, followMessage }) {
  const [userData, setUserData] = useState();

  useEffect(() => {
    setUserData(followData);
  }, [followData]);
  return (
    <S_FollowWrap>
      {userData && userData.length === 0 ? (
        <div>{followMessage}</div>
      ) : (
        userData && userData.map((item) => {
          return (
            <div key={item._id}>
              <FollowUser
                username={item.username}
                accountname={item.accountname}
                intro={item.intro}
                image={item.image}
                isfollow={item.isfollow}
              />
            </div>
          )
        })
      )}
    </S_FollowWrap>
  );
}

const S_FollowWrap = styled.ul`
display: flex;
flex-direction: column;
padding: 20px;
gap: 8px;
`;