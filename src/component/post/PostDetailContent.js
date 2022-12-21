import React, { useState } from 'react';
import { postDetailLoader } from '../../lib/apis/postApis';
import styled from 'styled-components';
import morePostIcon from '../../assets/icons/more_post.png';
import heart from '../../assets/icons/heart.png';
import heartFill from '../../assets/icons/heart_fill.png';
import message from '../../assets/icons/message.png';
export default function PostDetailContent({ id }) {
	const [userName, setUserName] = useState('');
	const [accountName, setAccountName] = useState('');
	const [content, setcontent] = useState('');
	const [image, setimage] = useState('');
	const [updated, setUpdated] = useState('');
	const [heartCount, setheartCount] = useState('');
	const [conmentCount, setconmentCount] = useState('');
	const [authorImg, setAuthorImg] = useState('');

	postDetailLoader(id).then((res) => {
		setUserName(res.data.post.author.username);
		setcontent(res.data.post.content);
		setimage(res.data.post.image);
		setUpdated(res.data.post.updatedAt);
		setheartCount(res.data.post.heartCount);
		setconmentCount(res.data.post.commentCount);
		setAuthorImg(res.data.post.author.image);
		setAccountName(res.data.post.author.accountname);
	});

	const updatedAtPost = updated.substr(0, 11).replace('-', '년 ').replace('-', '월 ').replace('T', '일');

	return (
		<>
			<PostContentContainer>
				<PostItemHeader>
					<AuthorImg src={authorImg} />
					<Name>
						<UserName>{userName}</UserName>@{accountName}
					</Name>
					<ModalIconImg src={morePostIcon} />
				</PostItemHeader>
				<ContentBox>{content}</ContentBox>

				{image === undefined ? <></> : <ImgContainer src={image} />}

				<SocialBtn>
					<HeartBtnImg src={heart} />
					{heartCount}
					<CommentBtnImg src={message} />
					{conmentCount}
				</SocialBtn>
				<DateContainer>{updatedAtPost}</DateContainer>
			</PostContentContainer>
		</>
	);
}

const PostContentContainer = styled.section`
	/* border-bottom: 1px solid #dbdbdb; */
`;
const PostItemHeader = styled.div`
	width: 400px;
	padding: 15px;
	height: 80px;
`;

const AuthorImg = styled.img`
	border-radius: 50%;
	width: 44px;
	height: 44px;
`;

const ModalIconImg = styled.img`
	margin-left: 230px;
	cursor: pointer;
	margin-top: 5px;
`;

const Name = styled.div`
	color: #767676;
	margin-left: 15px;
	margin-top: 8px;
	font-size: 12px;
	display: inline-block;
`;

const UserName = styled.div`
	color: black;
	font-size: 14px;
	margin-bottom: 2px;
`;

const AccountName = styled.div``;

const ContentBox = styled.p`
	text-align: left;
	/* border: 2px solid blue; */
	width: 303px;
	margin: 0px 0px 0px 75px;
`;

const ImgContainer = styled.img`
	width: 304px;
	height: 228px;
	margin: 16px 0px 0px 75px;
	object-fit: cover;
`;

const SocialBtn = styled.div`
	margin-top: 10px;
	margin-left: 75px;
	display: flex;
	gap: 5px;
	color: #767676;
	font-weight: 400;
`;

const DateContainer = styled.div`
	font-size: 12px;
	color: #767676;
	margin-top: 10px;
	margin-left: 75px;
	margin-bottom: 47px;
`;

const HeartBtnImg = styled.img`
	cursor: pointer;
`;
const CommentBtnImg = styled.img`
	cursor: pointer;
	width: 20px;
`;
