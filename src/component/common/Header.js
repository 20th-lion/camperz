import BackButton from './BackButton';
import styled from 'styled-components';

export default function Header({ leftChild, rightChild }) {
	return (
		<CommonHeader>
			{leftChild} {rightChild}
		</CommonHeader>
	);
}
Header.defaultProps = {
	leftChild: <BackButton />,
};

const CommonHeader = styled.header`
	height: 48px;
	padding-left: 16px;
	padding-right: 16px;
	border-bottom: 1px solid #dbdbdb;
	font-size: 18px;
	font-weight: 400;
	background-color: #f3f1e8;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
