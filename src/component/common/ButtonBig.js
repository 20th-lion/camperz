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
  height: 34px;
  padding: 0 20px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 400;
  color: #F3F1E8;
  margin-left: 12px;
  line-height: 17px;
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
