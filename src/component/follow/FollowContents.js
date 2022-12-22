import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FollowUser from "../follow/FollowUser";

export default function FollowContents({ followData, followMessage }) {
    const [userData, setUserData] = useState();

    useEffect(() => {
        setUserData(followData);
    }, [followData]);
    return (
        <FollowWrap>
            {userData && userData.length === 0 ? (
                <Message>{followMessage}</Message>
            ) : (
                userData && userData.map((item) => {
                    return (
                        <FollowUserWrap key={item._id}>
                            <FollowUser
                                username={item.username}
                                accountname={item.accountname}
                                intro={item.intro}
                                image={item.image}
                                isfollow={item.isfollow}
                            />
                        </FollowUserWrap>

                    )
                })
            )}
        </FollowWrap>
    );
}

const FollowWrap = styled.div`
margin: 0 auto;
padding: 24px 16px 16px 16px;
height: calc(100vh - 108px);
`;

const FollowUserWrap = styled.div`
margin-bottom: 16px;
`;

const Message = styled.div`
text-align: center; 
font-size: 14px;
`;