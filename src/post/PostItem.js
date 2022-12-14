import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function PostItem({
    id,
    content,
    image,
    createdAt,
    updatedAt,
    hearted,
    heartCount,
    commentCount,
}) {
    return (
        <>
            <StyledItemBlock>
                <div>아이디{id}</div>
                <div>컨텐츠{content}</div>
                <div style={{
                    width: "10rem",
                    height: "100%",
                }}>
                    이미지
                    <Simg src={image} alt="" />
                </div>
                <div>작성일{createdAt}</div>
                <div>업데이트 시간{updatedAt}</div>
                <div>하트{hearted ? 'true' : 'false'}</div>
                <div>좋아요{heartCount}</div>
                <div>댓글{commentCount}</div>
            </StyledItemBlock>
        </>
    );
}

const StyledItemBlock = styled.div`
  border: 1px solid black;
`;

const Simg = styled.img`
  width: 100%;
  height: 100%;
`;