import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FollowUser from "../follow/FollowUser";

export default function FollowContents({ followData, followMessage }) {
    const [userData, setUserData] = useState();

    useEffect(() => {
        setUserData(followData);
    }, [followData]);
    return (
        <StyledFollowBlock>
            {userData && userData.length === 0 ? (
                <StyledMessageBlock>{followMessage}</StyledMessageBlock>
            ) : (
                userData && userData.map((item) => {
                    return (
                        <StyledFollowBlock key={item._id}>
                            <FollowUser
                                username={item.username}
                                accountname={item.accountname}
                                intro={item.intro}
                                image={item.image}
                                isfollow={item.isfollow}
                            />
                        </StyledFollowBlock>

                    )
                })
            )}
        </StyledFollowBlock>
    );
}

const StyledFollowBlock = styled.div`
border: 1px solid black;
width: 100%;
	height: 100%;
`

const StyledMessageBlock = styled.div`
text-align: center;
font-size: 10px;
`;