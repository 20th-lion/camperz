import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { modals } from './../../component/modal/Modals';
import { useModals } from './../../lib/hooks/useModals';
import { deleteComment, reportComment } from '../../lib/apis/commentApis';
import moreHeader from '../../assets/icons/more_header.png';

export default function CommentItem({ author, content, createdAt, id, post_id }) {
  const { openModal } = useModals();
  const navigate = useNavigate();

  const handleModalClick = () => {
    const myAccountname = localStorage.getItem('accountname');
    const commenterAccountName = author.username;
    let type;
    commenterAccountName === myAccountname ? (type = 'mine') : (type = 'other');
    openModal(modals.commentModal, {
      onReport: () => {
        reportComment(post_id, id, type).then((res) => { });
      },
      onRemove: () => {
        openModal(modals.confirmModal, {
          onConfirm: () => {
            deleteComment(post_id, id, type).then((res) => { });
          },
          message: '댓글을 삭제하시겠어요?',
          btnText: '삭제',
        });
      },
      type: type,
    });
  };

  const createdAtPost = createdAt.substr(0, 11).replace('-', '년 ').replace('-', '월 ').replace('T', '일');

  return (
    <>
      <S_CommentBox>
        <S_UserIcon src={author.image} alt="댓글 이용자 프로필 사진" />
        <S_Comment>
          <S_UserDate>{author.username}
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
`;
const S_Comment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 293px;
  gap: 7px;
  font-size: 14px;
  font-weight: 400;
`
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