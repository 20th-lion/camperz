import BackButton from './BackButton';

export default function Header({ leftChild, rightChild }) {
	return (
		<div>
			{leftChild} | {rightChild}
		</div>
	);
}

Header.defaultProps = {
	leftChild: <BackButton />,
};
