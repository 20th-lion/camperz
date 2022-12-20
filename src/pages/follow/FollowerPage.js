import React, { useEffect, useState } from "react";
import { followerList } from "../../lib/apis/followApis"
import FollowContents from "../../component/follow/FollowContents";
import Header from "../../component/common/Header";

export default function FollowerPage() {

    const [followerData, setFollowerData] = useState();
    const [followerMessage, setFollowerMessage] = useState('');

    const getFollowerData = async () => {
        const accountname = 'rkwl123'
        await followerList(accountname).then((res) => {
            console.log(res);
            if (res.data.length > 0) {
                setFollowerData(res.data);
            } else {
                setFollowerMessage('팔로워가 없다.');
            }

        }).catch(
            (err) => console.log(err)
        )
    };
    useEffect(() => {
        getFollowerData();
        console.log(followerData);
    }, [])

    return (
        <>
            <p>팔로우창</p>
            <Header></Header>
            <FollowContents
                followData={followerData}
                followMessage={followerMessage}
            />
        </>

    )

}