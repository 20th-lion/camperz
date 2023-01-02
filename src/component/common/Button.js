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
	width: 85px;
	height: 32px;
	border-radius: 32px;
	font-size: 14px;
	font-weight: 400;
	color: #f3f1e8;
	:hover {
		cursor: pointer;
	}
	${(props) =>
		!props.active &&
		css`
			background-color: '#8F9475';
			:hover {
			}
			pointer-events: none;
		`}
`;
