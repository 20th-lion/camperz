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
  width: 322px;
  height: 43px;
  font-size: 14px;
  font-weight: 400;
  margin-top: 15px;
  margin-bottom: 27px;
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
