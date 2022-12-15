import React, { useEffect, useState } from 'react';
import { getUserInfo } from '../../lib/apis/profileApis';
import Header from '../../component/common/Header';
import Button from '../../component/common/Button';
import ProfileForm from '../../component/form/ProfileForm';
import { editProfile } from './../../lib/apis/profileApis';
import { useNavigate } from 'react-router-dom';

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
	const handleSave = async () => {
		console.log(userInfo);
		await editProfile(userInfo);
		navigate('/profile');
	};
	return (
		<div>
			<Header rightChild={<Button text={'저장'} onClick={handleSave} />} />
			<ProfileForm {...userInfo} setUserInfo={setUserInfo} userInfo={userInfo} />
		</div>
	);
}
