import { getAccountNameValidApiResponse } from '../apis/registerApis';
import { getEmailValidApiResponse } from '../apis/registerApis';

export const validateEmail = async (email) => {
	let validationMsg = {};
	const emailValidation = (email) => {
		const regEx = /^[-0-9A-Z!#$%^&*()_=+\\|`,.;:''[\]{}?~]+@[0-9A-Z]+[-0-9A-Z_.]*.[a-z]$/i;
		return regEx.test(email);
	};

	if (!emailValidation(email) && email) {
		validationMsg = { firstLineErr: '올바르지 않은 이메일 형식입니다' };
		return validationMsg;
	}

	await getEmailValidApiResponse(email).then((res) => {
		if (res.data.message === '이미 가입된 이메일 주소 입니다.') {
			validationMsg = { firstLineErr: '*이미 가입된 이메일 주소입니다.' };
		} else {
			validationMsg = { firstLineErr: null };
		}
	});
	return validationMsg;
};

export const validatePassword = (password) => {
	let validationMsg = {};
	if (password.length < 6) {
		validationMsg = { secondLineErr: '*비밀번호는 6자 이상이어야 합니다.' };
	} else {
		validationMsg = { secondLineErr: null };
	}
	return validationMsg;
};

export const validateUsername = (username) => {
	if (username.length < 2 || username.length > 10) {
		const errorMsg = '*2자~10자 이내여야 합니다.';
		return errorMsg;
	}
};

export const validateAccountname = async (accountname) => {
	const accountnameValidation = /^[0-9a-zA-Z._]+$/;
	let validationMsg = '';
	if (!accountnameValidation.test(accountname)) {
		const errorMsg = '*영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.';
		return errorMsg;
	} else {
		await getAccountNameValidApiResponse(accountname).then((res) => {
			validationMsg = '*' + res.data.message;
		});
	}
	return validationMsg;
};
