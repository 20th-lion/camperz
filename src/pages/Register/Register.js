import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import AuthForm from '../../component/form/AuthForm';
import ProfileForm from '../../component/form/ProfileForm';
import ButtonRectangle from '../../component/common/ButtonRectangle';
import { imageUpload } from './../../lib/apis/imageUploadApi';
import { getEmailValidApiResponse, getRegisterApiResponse } from '../../lib/apis/registerApis';

export default function Register() {
	const navigate = useNavigate();
	const [authFormErrMsg, setAuthFormErrMsg] = useState({
		firstLineErr: null,
		secondLineErr: null,
	});
	const [profileErrorMsg, setProfileErrorMsg] = useState({
		usernameErr: null,
		accountnameErr: null,
	});

	const handleVerifyEmail = async (e) => {
		const inputEmail = e.target.value;

		const emailValidation = (email) => {
			const regEx = /^[-0-9A-Z!#$%^&*()_=+\\|`,.;:''[\]{}?~]+@[0-9A-Z]+[-0-9A-Z_.]*.[a-z]$/i;
			return regEx.test(email);
		};

		if (!emailValidation(inputEmail) && inputEmail) {
			setAuthFormErrMsg({ ...authFormErrMsg, firstLineErr: '올바르지 않은 이메일 형식입니다' });
			return;
		}

		await getEmailValidApiResponse(inputEmail).then((res) => {
			if (res.data.message === '이미 가입된 이메일 주소 입니다.') {
				setAuthFormErrMsg((prev) => ({ ...prev, firstLineErr: '* ' + res.data.message }));
			} else {
				setAuthFormErrMsg((prev) => ({ ...prev, firstLineErr: null }));
			}
		});
	};

	const handleValidatePassword = (e) => {
		if (e.target.value.length < 6) {
			setAuthFormErrMsg({ ...authFormErrMsg, secondLineErr: '*비밀번호는 6자 이상이어야 합니다.' });
		} else {
			setAuthFormErrMsg({ ...authFormErrMsg, secondLineErr: null });
		}
	};
	const [btnActive, setBtnActive] = useState(false);

	const [userInfo, setUserInfo] = useState({
		username: '',
		email: '',
		password: '',
		accountname: '',
		intro: '',
		image: 'https://mandarin.api.weniv.co.kr/1671513886026.png',
	});

	const [formtype, setFormtype] = useState('AuthForm');
	const handleChangingForm = (inputs) => {
		setUserInfo({ ...userInfo, ...inputs });
		setFormtype('ProfileForm');
	};

	const handleRegister = async () => {
		await imageUpload(userInfo.image).then((res) => {
			const fileName = res.data.filename || '1671513886026.png';
			const imageUrl = 'https://mandarin.api.weniv.co.kr/' + fileName;
			getRegisterApiResponse({ ...userInfo, image: imageUrl }).then((res) => {
				if (res.data.message === '회원가입 성공') {
					navigate('/login');
				}
			});
		});
	};

	return (
		<>
			{formtype === 'AuthForm' ? (
				<S_Main>
					<AuthForm
						formType="register"
						errorMsg={authFormErrMsg}
						onVerifyEmail={handleVerifyEmail}
						onValidatePassword={handleValidatePassword}
						onSubmit={handleChangingForm}
					/>
				</S_Main>
			) : (
				<S_Main>
					<S_H2>
						프로필 설정
						<p>나중에 언제든지 변경할 수 있습니다.</p>
					</S_H2>
					<ProfileForm
						userInfo={userInfo}
						setUserInfo={setUserInfo}
						setErrorMsg={setProfileErrorMsg}
						setBtnActive={setBtnActive}
						errorMsg={profileErrorMsg}
					/>
					<ButtonRectangle text="CAMPERZ 시작하기" onClick={handleRegister} active={btnActive} />
				</S_Main>
			)}
		</>
	);
}

const S_Main = styled.main`
	justify-content: flex-start;
`;
const S_H2 = styled.h2`
	color: #000000;
	font-size: 24px;
	font-weight: 400;
	text-align: center;
	margin-bottom: 10px;
	p {
		margin-top: 12px;
		color: #767676;
		font-size: 14px;
		font-weight: 300;
	}
`;
