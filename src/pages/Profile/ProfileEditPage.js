import React, { useEffect, useState } from 'react';
import { getUserInfo } from '../../lib/apis/profileApis';
import Header from '../../component/common/Header';
import Button from '../../component/common/Button';
import ProfileForm from '../../component/form/ProfileForm';

export default function ProfileEditPage() {
	const savedAccountname = localStorage.getItem('accountname');
	const [userInfo, setUserInfo] = useState({});

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

	return (
		<div>
			<Header rightChild={<Button text={'저장'} onClick={() => {}} />} />
			<ProfileForm {...userInfo} />
		</div>
	);
}
