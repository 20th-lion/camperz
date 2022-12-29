import { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import NavBar from '../../component/common/NavBar';
import Header from '../../component/common/Header';
import UserProfile from '../../component/user/UserProfile';
import ProductList from '../../component/product/ProductList';
import PostList from './../../component/post/PostList';
import { modals } from './../../component/modal/Modals';
import { useModals } from './../../lib/hooks/useModals';
import moreIcon from '../../assets/icons/more_header.png';
import { LoginDispatchContext } from '../../component/context/LoginContext';
import Footer from '../../component/common/Footer';

export default function ProfilePage() {
	const { logout } = useContext(LoginDispatchContext);
	const myAccountname = localStorage.getItem('accountname');
	const { accountname } = useParams();
	const user = accountname || myAccountname;
	const type = user === myAccountname ? 'mine' : 'other';

	const { openModal } = useModals();
	const navigate = useNavigate();

	const handleModalClick = () => {
		openModal(modals.profileModal, {
			onSetting: () => {},
			onLogout: () => {
				openModal(modals.confirmModal, {
					onConfirm: () => {
						logout();
						navigate('/');
					},
					message: '로그아웃 하시겠어요?',
					btnText: '로그아웃',
				});
			},
		});
	};

	return (
		<>
			<Header rightChild={<S_IconImg onClick={handleModalClick} src={moreIcon} />} />
			<h2 className="ir">프로필 페이지</h2>
			<S_Wapper>
				<S_Main>
					<UserProfile user={user} type={type} />
					<ProductList user={user} type={type} />
					<PostList user={user} type={type} />
				</S_Main>
				<Footer />
			</S_Wapper>
			<NavBar page={type === 'mine' ? 'user' : 'home'} />
		</>
	);
}

const S_Main = styled.main`
	background-color: #f2f2f2;
	height: fit-content;
	/* min-height: calc(100vh - 108px); */
	margin: 20px auto 0;
	overflow-y: visible;
`;
const S_IconImg = styled.img`
	width: 24px;
	height: 24px;
	cursor: pointer;
`;

const S_Wapper = styled.div`
	word-break: break-all;
	height: calc(100vh - 108px);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	/* align-items: center; */

	overflow-x: hidden;
	overflow-y: scroll;
	-ms-overflow-style: none;
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}
`;
