import { useState, useEffect, useRef } from 'react';
import { validateUsername, validateAccountname } from '../../lib/utils/profileValidation';
import styled from 'styled-components';
import iconSrc from '../../assets/icons/img_upload_post.png';
import defaultProfileImg from '../../assets/icons/basic_profile.png';

export default function ProfileForm({ setUserInfo, userInfo, setBtnActive }) {
	// userInfo에 인풋 입력값 얻기
	const { image, username, accountname, intro } = userInfo;
	const [currentImg, setCurrentImg] = useState(image);

	// 인풋 밸리데이션에 따라 에러메시지가 등장하거나 버튼 활성화됨
	const [errorMsg, setErrorMsg] = useState({
		usernameErr: '',
		accountnameErr: '',
	});

	useEffect(() => {
		showingActive();
	}, [errorMsg, userInfo]);

	const handleInputEntered = (e) => {
		const { name, value } = e.target;
		setUserInfo({
			...userInfo,
			[name]: value,
		});
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
			console.log(accountnameErr);
			if (accountnameErr === '*이미 가입된 계정ID 입니다.') {
				setErrorMsg({ ...errorMsg, accountnameErr });
			} else if (accountnameErr === '*영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.') {
				setErrorMsg({ ...errorMsg, accountnameErr });
			} else setErrorMsg({ ...errorMsg, accountnameErr: '' });
		}
	};

	// 이미지 삽입
	const photoInput = useRef();

	const handleImgChange = (e) => {
		setUserInfo((userInfo) => ({
			...userInfo,
			image: e.target.files[0],
		}));
		setCurrentImg(URL.createObjectURL(e.target.files[0]));
	};

	// 밸리데이션 이전 폼 전송 중단
	const handlePreventSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<S_Form onSubmit={handlePreventSubmit}>
				<S_ImgUploadBox
					onClick={() => {
						photoInput.current.click();
					}}
				>
					<label htmlFor="image"></label>
					<S_ImgInput
						name="image"
						ref={photoInput}
						accept="image/*"
						onChange={handleImgChange}
						type="file"
						id="image"
					/>
					<S_ProfileImg
						src={currentImg || userInfo.image || defaultProfileImg}
						alt="기본프로필사진"
					/>
					<S_UploadIcon src={iconSrc} />
				</S_ImgUploadBox>
				<S_InputBox>
					<S_Label htmlFor="username">
						사용자 이름<span>*</span>
					</S_Label>
					<S_Input
						name="username"
						value={username}
						onChange={handleInputEntered}
						onBlur={handleUsernameBlur}
						type="text"
						id="username"
						placeholder="2~10자 이내여야 합니다."
					/>
					<S_Strong>{errorMsg.usernameErr}</S_Strong>
				</S_InputBox>
				<S_InputBox>
					<S_Label htmlFor="accountname">
						계정 ID<span>*</span>
					</S_Label>
					<S_Input
						name="accountname"
						value={accountname}
						onChange={handleInputEntered}
						onBlur={handleAccountnameBlur}
						type="text"
						id="accountname"
						placeholder="영문, 숫자, 마침표(.), 언더바(_)만 사용 가능합니다."
					/>
					<S_Strong>{errorMsg.accountnameErr}</S_Strong>
				</S_InputBox>
				<S_InputBox>
					<S_Label htmlFor="intro">소개</S_Label>
					<S_Input
						name="intro"
						value={intro}
						onChange={handleInputEntered}
						type="text"
						id="intro"
						placeholder="자신과 판매할 상품에 대해 소개해주세요."
					/>
				</S_InputBox>
			</S_Form>
		</>
	);
}

const S_Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 32px 15px;
`;
const S_ImgUploadBox = styled.div`
  width: 114px;
  height: 112px;
  margin: 35px;
  position: relative;
  label {
    display: none;
  }
`
const S_ImgInput = styled.input`
	display: none;
`;
const S_ProfileImg = styled.img`
  width: 114px;
  height: 112px;
  border-radius: 50%;
	object-fit: cover;
	cursor: pointer;
`;
const S_UploadIcon = styled.img`
	width: 36px;
	height: 36px;
	position: absolute;
	bottom: 0px;
	right: 0px;
	z-index: 10;
	cursor: pointer;
`;
const S_InputBox = styled.div`
  width: 322px;
  height: 48px;
  margin-bottom: 25px;
`
const S_Label = styled.label`
	display: block;
	font-size: 12px;
	color: #767676;
	span {
		margin-left: 2px;
		font-weight: 400;
		color: #eb5757;
	}
`;
const S_Input = styled.input`
	width: 322px;
	font-size: 14px;
	font-weight: 400;
	line-height: 32px;
	border-bottom: 1px solid #dbdbdb;
	::placeholder {
		font-weight: 100;
		font-size: 12px;
	}
	:focus {
		border-bottom: 1px solid #eb5757;
	}
`;
const S_Strong = styled.strong`
	display: block;
	height: 50px;
	font-size: 12px;
	font-weight: 400;
	line-height: 21px;
	color: #eb5757;
	padding-bottom: 15px;
`;
