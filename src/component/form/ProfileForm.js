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
      <form onSubmit={handlePreventSubmit}>
        <ImgContainer
          htmlFor='image'
          onClick={() => {
            photoInput.current.click();
          }}
        >
          <LabelImg />
          <ImgInput
            name='image'
            ref={photoInput}
            accept='image/*'
            onChange={handleImgChange}
            type='file'
            id='image'
          />
          <PictureArea
            src={currentImg || userInfo.image || defaultProfileImg}
            alt='기본프로필사진'
          />
        </ImgContainer>
        <inputWrapper>
          <label htmlFor='username'>사용자 이름</label>
          <input
            name='username'
            value={username}
            onChange={handleInputEntered}
            onBlur={handleUsernameBlur}
            type='text'
            id='username'
            placeholder='2~10자 이내여야 합니다.'
          />
          <strong>{errorMsg.usernameErr}</strong>
        </inputWrapper>
        <inputWrapper>
          <label htmlFor='accountname'>계정 ID</label>
          <input
            name='accountname'
            value={accountname}
            onChange={handleInputEntered}
            onBlur={handleAccountnameBlur}
            type='text'
            id='accountname'
            placeholder='영문, 숫자, 마침표(.), 언더바(_)만 사용 가능합니다.'
          />
          <strong>{errorMsg.accountnameErr}</strong>
        </inputWrapper>
        <inputWrapper>
          <label htmlFor='intro'>소개</label>
          <input
            name='intro'
            value={intro}
            onChange={handleInputEntered}
            type='text'
            id='intro'
            placeholder='자신과 판매할 상품에 대해 소개해주세요.'
          />
        </inputWrapper>
      </form>
    </>
  );
}

const ImgContainer = styled.label`
  display: block;
  width: 200px;
  height: 200px;
  border: 1px solid black;
`
const LabelImg = styled.img`
	width: 50px;
	height: 50px;
	background-image: url(${iconSrc});
	border: 0;
	padding: 0;
	border-radius: 50px;
	cursor: pointer;
`;
const ImgInput = styled.img`
  display: none;
`
const PictureArea = styled.img`
	width: 200px;
	height: 150px;
	object-fit: cover;
`;
const inputWrapper = styled.div`
  width: auto;
`