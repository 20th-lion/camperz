import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import iconSrc from '../../assets/image/img-upload-icon.svg';
import defaultProfileImg from '../../assets/image/default-profile-img.svg';
import { validateUsername, validateAccountname } from '../../lib/utils/profileValidation';
import { useEffect } from 'react';


export default function ProfileForm({ setUserInfo, userInfo, setBtnActive }) {
	const photoInput = useRef();

	const { image, username, accountname, intro } = userInfo;

	const [currentImg, setCurrentImg] = useState(image);
	const [errorMsg, setErrorMsg] = useState({
		usernameErr: '',
		accountnameErr: '',
	});

	useEffect(() => {
		showingActive();
	}, [errorMsg, userInfo]);


	const onChange = (e) => {
		const { name, value } = e.target;
		setUserInfo({
			...userInfo,
			[name]: value,
		});
	};

	const handleImgChange = (e) => {
		setUserInfo((userInfo) => ({
			...userInfo,
			image: e.target.files[0],
		}));
		setCurrentImg(URL.createObjectURL(e.target.files[0]));
	};

	const showingActive = () => {
		errorMsg.usernameErr === '' && errorMsg.accountnameErr === ''
			? username && accountname
				? setBtnActive(true)
				: setBtnActive(false)
			: setBtnActive(false);
	};

	const handleUsernameBlur = (e) => {
		setErrorMsg({
			...errorMsg,
			usernameErr: validateUsername(e.target.value) || '',
		});
	};


	const handleAccountnameBlur = async (e) => {
		const savedAccountname = localStorage.getItem('accountname');
		
    if (savedAccountname !== accountname) {
			let validationMsg = validateAccountname(e.target.value);
			let accountnameErr = await validationMsg;
			if (accountnameErr === '*이미 가입된 계정ID 입니다.') {
				setErrorMsg({ ...errorMsg, accountnameErr });
			} else setErrorMsg({ ...errorMsg, accountnameErr: '' });
		}
  };
  
	const handleUsernameBlur = (e) => {
		setErrorMsg({
			...errorMsg,
			usernameErr: validateUsername(e.target.value) || '',
		});
	};




	const handlePreventSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<section className="ProfileForm">
			<form onSubmit={handlePreventSubmit}>
				<div
					className="ImgContainer"
					style={{
						width: '200px',
						height: '200px',
						backgroundColor: 'gray',
					}}
					onClick={() => {
						photoInput.current.click();
					}}
				>
					<LabelImg />
					<input
						name="image"
						id="image"
						style={{ display: 'none' }}
						ref={photoInput}
						type="file"
						accept="image/*"
						onChange={handleImgChange}
					/>
					<PictureArea
						src={currentImg || userInfo.image || defaultProfileImg}
						alt="기본프로필사진"
					/>
				</div>
				<div className="inputWrapper">
					<label htmlFor="username">사용자 이름</label>
					<input
						name="username"
						value={username}
						type="text"
						onChange={(e) => onChange(e)}
						onBlur={handleUsernameBlur}
						id="username"
						placeholder="2~10자 이내여야 합니다."
						className="input"
					/>
					<strong>{errorMsg.usernameErr}</strong>
				</div>
				<div className="inputWrapper">
					<label htmlFor="accountname">계정 ID</label>
					<input
						name="accountname"
						value={accountname}
						type="text"
						onChange={(e) => onChange(e)}
						onBlur={handleAccountnameBlur}
						id="accountname"
						placeholder="영문, 숫자, 마침표(.), 언더바(_)만 사용 가능합니다."
						className="input"
					/>
					<strong>{errorMsg.accountnameErr}</strong>
				</div>
				<div className="inputWrapper">
					<label htmlFor="intro">소개</label>
					<input
						name="intro"
						value={intro}
						type="text"
						onChange={(e) => onChange(e)}
						id="intro"
						placeholder="자신과 판매할 상품에 대해 소개해주세요."
						className="input"
					/>
				</div>
			</form>
		</section>
	);
}

const PictureArea = styled.img`
	width: 200px;
	height: 150px;
	object-fit: cover;
`;

const LabelImg = styled.img`
	width: 50px;
	height: 50px;
	background-image: url(${iconSrc});
	border: 0;
	padding: 0;
	border-radius: 50px;
	cursor: pointer;
`;
