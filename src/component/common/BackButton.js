import { useNavigate } from 'react-router-dom';
import icon_arrow_left from '../../assets/icons/icon_arrow_left.png';
import styled from 'styled-components';

export default function BackButton() {
	const navigate = useNavigate();
	const goback = () => {
		navigate(-1);
	};
	return <S_ButtonImg onClick={goback} src={icon_arrow_left} alt="뒤로가기 화살표" />;
}

const S_ButtonImg = styled.img`
	width: 22px;
	height: 22px;
	cursor: pointer;
`;
