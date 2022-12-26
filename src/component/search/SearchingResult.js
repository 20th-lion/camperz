import styled from 'styled-components';
import SearchingItem from './SearchingItem';

export default function SearchingResultList({ userList, keyword }) {
	return (
		<>
			<S_Ul>
				{userList.map((i) => {
					return (
						<SearchingItem
							key={i._id}
							image={i.image}
							username={i.username}
							accountname={i.accountname}
							keyword={keyword}
						/>
					);
				})}
			</S_Ul>
		</>
	);
}

const S_Ul = styled.ul`
	margin: 20px 15px;
	display: flex;
	flex-direction: column;
	gap: 8px;
`;
