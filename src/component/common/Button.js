import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';


export default function Button({ onClick, text, active }) {
	return (
		<>
			<StyledButton onClick={onClick} active={active}>
				{text}
			</StyledButton>
		</>
	);
}

const StyledButton = styled.button`
	background-color: ${palette.khaki[0]};
	border: none;
	color: white;
	:hover {
		cursor: pointer;
	}
	${(props) =>
		props.active === false &&
		css`
			background-color: ${palette.khaki[1]};
			:hover {
			}
			pointer-events: none;
		`}
`;
