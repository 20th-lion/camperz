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
		await imageUpload(userInfo.itemImage).then((res) => {
			const image = process.env.REACT_APP_BASE_URL + '/' + res.data.filename;
			setUserInfo({ ...userInfo, image });
		});
		await editProfile(userInfo);
		navigate('/profile');
	};
	return (
		<div>
			<Header leftChild={null} rightChild={<Button text={'저장'} onClick={handleSaveBtn} />} />
			<ProfileForm setUserInfo={setUserInfo} userInfo={userInfo} />
		</div>
	);
}
