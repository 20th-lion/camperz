import { Link } from 'react-router-dom';
import styled from 'styled-components';
import defaultProfileImg from '../../assets/icons/basic_profile_post.png';

export default function SearchingItem({ image, username, accountname, keyword }) {
	const ColoredItem = ({ item, query }) => {
		return item.includes(query) ? (
			<>
				{item.split(query)[0]}
				<S_ColoredSpan color={'#FF5E00'}>{keyword}</S_ColoredSpan>
				{item.split(query)[1]}
			</>
		) : (
			<>{item}</>
		);
	};

	const handleErrorImg = (e) => {
		e.target.src = defaultProfileImg;
	};

	return (
		<>
			<li>
				<Link to={'/profile/' + accountname}>
					<S_A>
						<S_ProfileImg src={image} onError={handleErrorImg} />
						<S_TextBox>
							<S_Username>
								<ColoredItem item={username} query={keyword} />
							</S_Username>
							<S_AccountID>
								@ <ColoredItem item={accountname} query={keyword} />
							</S_AccountID>
						</S_TextBox>
					</S_A>
				</Link>
			</li>
		</>
	);
}
const S_ColoredSpan = styled.span`
	color: ${(props) => props.color || `none`};
`;
const S_A = styled.a`
	width: 358px;
	height: 58px;
	display: flex;
	padding: 4px 8px;
	border-radius: 10px;
	background: #fefcf3;
	cursor: pointer;
`;
const S_ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`
const S_TextBox = styled.div`
	padding: 15px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 8px;
`;
const S_Username = styled.p`
	font-weight: 400;
	font-size: 14px;
`;
const S_AccountID = styled.p`
	font-size: 12px;
	color: #767676;
`;
const S_ColorSpan = styled.span`
	color: red;
`;
