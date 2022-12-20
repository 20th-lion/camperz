import { getAccountNameValidApiResponse } from '../apis/registerApis';

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
