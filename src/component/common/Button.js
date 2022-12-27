import styled, { css } from 'styled-components';
import palette from './../../lib/styles/palette';

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
  background-color: ${palette.khaki[0]};
  width: 85px;
  height: 32px;
  border-radius: 32px;
  font-size: 14px;
  font-weight: 400;
  color: #F3F1E8;
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
