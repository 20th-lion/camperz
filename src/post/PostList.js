import styled from "styled-components";
import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";
import { getPostList } from "../apis/postApis";

export default function PostList() {
    const [postList, setPostList] = useState([]);

    const loadPost = async () => {
        await getPostList().then((res) => {
            setPostList([...res.data.post])
        })
    }
    useEffect(() => {
        // loadPost();
        getPostList().then((res) => {
            console.log(res);
            setPostList([...res.data.post])
        })
    }, []);

    return (
        <>
            <div>
                {
                    postList.map((post, idx) => (
                        <PostItem key={idx} {...post} />
                    ))}
            </div>
        </>
    );
}

