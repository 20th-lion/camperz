import styled, { css } from 'styled-components';

export default function Button({ onClick, text, active }) {
	return (
		<>
			<S_Button onClick={onClick} active={active}>
				{text}
			</S_Button>
		</>
	);
}

const S_Button = styled.button`
	background-color: '#5C6145';
	width: 322px;
	height: 43px;
	font-size: 14px;
	font-weight: 400;
	margin-top: 15px;
	margin-bottom: 27px;
	color: #f3f1e8;
	:hover {
		cursor: pointer;
	}
	${(props) =>
		props.active === false &&
		css`
			background-color: '#8F9475';
			:hover {
			}
			pointer-events: none;
		`}
`;
