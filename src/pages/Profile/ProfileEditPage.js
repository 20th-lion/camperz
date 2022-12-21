import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../component/common/Header';
import Button from '../../component/common/Button';
import ProfileForm from '../../component/form/ProfileForm';
import { getUserInfo } from '../../lib/apis/profileApis';
import { editProfile } from './../../lib/apis/profileApis';
import { imageUpload } from '../../lib/apis/imageUploadApi';

export default function ProfileEditPage() {
	const navigate = useNavigate();
	const savedAccountname = localStorage.getItem('accountname');
	const [userInfo, setUserInfo] = useState({ image: '', username: '', accountname: '', intro: '' });
	const [btnActive, setBtnActive] = useState(true);
	const [errorMsg, setErrorMsg] = useState({
		usernameErr: '',
		accountnameErr: '',
	});

	useEffect(() => {
		setPrevUserInfo();
	}, []);

	const setPrevUserInfo = async () => {
		await getUserInfo(savedAccountname).then((res) => {
			const { username, accountname, image, intro } = res.data.profile;
			setUserInfo({
				username,
				accountname,
				image,
				intro,
			});
		});
	};
	const handleSaveBtn = async () => {
		await imageUpload(userInfo.image).then((res) => {
			const image = res.data.filename
				? 'https://mandarin.api.weniv.co.kr/' + res.data.filename
				: userInfo.image;
			editProfile({ ...userInfo, image });
		});
		localStorage.setItem('accountname', userInfo.accountname);
		navigate(`/profile/${savedAccountname}`);
	};

	return (
		<div>
			<Header
				leftChild={null}
				rightChild={<Button text={'저장'} onClick={handleSaveBtn} active={btnActive} />}
			/>
			<ProfileForm
				setUserInfo={setUserInfo}
				userInfo={userInfo}
				setBtnActive={setBtnActive}
				setErrorMsg={setErrorMsg}
				errorMsg={errorMsg}
			/>
		</div>
	);
}
