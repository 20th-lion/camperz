import BackButton from './BackButton';
import styled from "styled-components";

export default function Header({ leftChild, rightChild }) {
	return (
		<CommonHeader>
			{leftChild} | {rightChild}
		</CommonHeader>
	);
}

Header.defaultProps = {
	leftChild: <BackButton />,
};

const CommonHeader = styled.header`
  height: 48px;
  padding-left: 16px;
  border-bottom: 1px solid #DBDBDB;
  font-weight: 400;
`;
