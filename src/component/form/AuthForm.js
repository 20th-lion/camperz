import { useState, useEffect } from 'react';
import ButtonRectangle from '../common/ButtonRectangle';
import styled from 'styled-components';

export default function AuthForm({ formType, errorMsg, onSubmit, onVerifyEmail, onValidatePassword }) {
	// 폼 타입 지정
	const headingMap = {
		login: '로그인',
		register: '이메일로 회원가입',
	};
	const heading = headingMap[formType];

	const [btnActive, setBtnActive] = useState(false);
	const [inputs, setInputs] = useState({
		email: '',
		password: '',
	});

	useEffect(() => {
		showingActive();
	}, [errorMsg, inputs]);

	// 인풋 입력값 얻기
	const handleInputChange = (e) => {
		setInputs({
			...inputs,
			[e.target.name]: e.target.value,
		});
	};

	// 인풋 밸리데이션에 따라 버튼 활성화됨
	const showingActive = () => {
		if (formType === 'login') {
			if (inputs.password.length > 5 && !!inputs.email) {
				setBtnActive(true);
			} else {
				setBtnActive(false);
			}
		} else {
			//errorMsg가 모두 null이고 input값이 비어있지 않으면 버튼 활성화
			if (Object.values(errorMsg).every((v) => !v) && !!inputs.email && inputs.password.length > 5) {
				setBtnActive(true);
			} else {
				setBtnActive(false);
			}
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (btnActive) {
			onSubmit(inputs);
		}
	};

	return (
		<>
			<S_H2>{heading}</S_H2>
			<form onSubmit={handleSubmit}>
				<S_InputBox>
					<S_Label htmlFor="email">이메일</S_Label>
					<S_Input
						name="email"
						value={inputs.email}
						type="text"
						onChange={handleInputChange}
						onBlur={onVerifyEmail}
						id="email"
						placeholder="이메일을 입력해주세요"
					/>
					<S_Strong>{errorMsg.firstLineErr}</S_Strong>
				</S_InputBox>
				<S_InputBox>
					<S_Label htmlFor="password">비밀번호</S_Label>
					<S_Input
						name="password"
						value={inputs.password}
						type="password"
						onChange={handleInputChange}
						onBlur={onValidatePassword}
						id="password"
						placeholder="비밀번호를 입력해주세요"
					/>
					<S_Strong>{errorMsg.secondLineErr}</S_Strong>
				</S_InputBox>
				<ButtonRectangle onClick={handleSubmit} text={formType === 'login' ? '로그인' : '다음'} active={btnActive} />
			</form>
		</>
	);
}

const S_H2 = styled.h2`
	color: #000000;
	font-size: 24px;
	font-weight: 400;
	text-align: center;
	margin-bottom: 40px;
`;
const S_InputBox = styled.div`
	width: 322px;
	height: 48px;
	margin-bottom: 25px;
`;
const S_Label = styled.label`
	display: block;
	font-size: 12px;
	color: #767676;
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
