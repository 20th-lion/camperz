import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { modals } from './../../component/modal/Modals';
import { useModals } from './../../lib/hooks/useModals';
import { deleteComment, reportComment } from '../../lib/apis/commentApis';
import { getCommentList } from '../../lib/apis/commentApis';
import moreHeader from '../../assets/icons/more_header.png';
import defaultProfileImg from '../../assets/icons/basic_profile.png';

export default function CommentItem({ author, content, createdAt, id, post_id, setCommentList }) {
	const { openModal } = useModals();
	const navigate = useNavigate();

	const handleModalClick = () => {
		const myAccountname = localStorage.getItem('accountname');
		const commenterAccountName = author.accountname;
		let type;
		commenterAccountName === myAccountname ? (type = 'mine') : (type = 'other');
		openModal(modals.commentModal, {
			onReport: () => {
				reportComment(post_id, id, type);
			},
			onRemove: () => {
				openModal(modals.confirmModal, {
					onConfirm: () => {
						deleteComment(post_id, id, type).then((res) => {
							getCommentList(post_id).then((res) => {
								setCommentList([...res.data.comments]);
							});
						});
					},
					message: '댓글을 삭제하시겠어요?',
					btnText: '삭제',
				});
			},
			type: type,
		});
	};

	const createdAtPost = createdAt.substr(0, 11).replace('-', '년 ').replace('-', '월 ').replace('T', '일');

	const handleErrorImg = (e) => {
		e.target.src = defaultProfileImg;
	};

	const moveProfilePage = () => {
		navigate(`/profile/${author.accountname}`);
	};
	return (
		<>
			<S_CommentBox>
				<S_UserIcon
					src={author.image}
					alt="댓글 이용자 프로필 사진"
					onError={handleErrorImg}
					onClick={moveProfilePage}
				/>
				<S_Comment>
					<S_UserDate>
						<S_CommenterName onClick={moveProfilePage}>{author.username}</S_CommenterName>
						<span>{createdAtPost}</span>
					</S_UserDate>
					<S_CommentModalButton src={moreHeader} onClick={handleModalClick} />
					<p>{content}</p>
				</S_Comment>
			</S_CommentBox>
		</>
	);
}

const S_CommentBox = styled.li`
	display: flex;
	height: 60px;
	justify-content: center;
	align-items: center;
	gap: 18px;
	position: relative;
`;
const S_UserIcon = styled.img`
	width: 36px;
	height: 36px;
	border-radius: 50%;
	margin-left: 3px;
	object-fit: cover;
	cursor: pointer;
`;
const S_Comment = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 293px;
	gap: 7px;
	font-size: 14px;
	font-weight: 400;
`;
const S_UserDate = styled.p`
	span {
		color: #767676;
		font-size: 12px;
		margin-left: 8px;
		font-weight: 300;
	}
`;
const S_CommentModalButton = styled.img`
	width: 20px;
	height: 20px;
	position: absolute;
	right: 3px;
	cursor: pointer;
`;

const S_CommenterName = styled.div`
	display: inline-block;
	cursor: pointer;
`;
