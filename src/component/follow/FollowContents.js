import { useEffect, useState } from "react";
import styled from "styled-components";
import FollowUser from "../follow/FollowUser";

export default function FollowContents({ followData, followMessage }) {
    const [userData, setUserData] = useState();

    useEffect(() => {
        setUserData(followData);
    }, [followData]);
    return (
        <S_FollowWrap>
            {userData && userData.length === 0 ? (
                <S_Message>{followMessage}</S_Message>
            ) : (
                userData && userData.map((item) => {
                    return (
                        <S_FollowUserWrap key={item._id}>
                            <FollowUser
                                username={item.username}
                                accountname={item.accountname}
                                intro={item.intro}
                                image={item.image}
                                isfollow={item.isfollow}
                            />
                        </S_FollowUserWrap>

                    )
                })
            )}
        </S_FollowWrap>
    );
}

const S_FollowWrap = styled.div`
margin: 0 auto;
padding: 24px 16px 16px 16px;
height: calc(100vh - 108px);
`;

const S_FollowUserWrap = styled.div`
margin-bottom: 16px;
`;

const S_Message = styled.div`
text-align: center; 
font-size: 14px;
`;