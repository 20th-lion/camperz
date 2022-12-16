import ReactModal from "react-modal";

export default function ProductEditModal({
  onRemove,
  onEdit,
  onMove,
  onClose,
}) {
  const handleClickRemove = () => {
    onRemove();
    onClose();
  };

  const handleClickEdit = () => {
    onEdit();
    onClose();
  };

  const handleClickMove = () => {
    onMove();
    onClose();
  };
  return (
    <ReactModal isOpen ariaHideApp={false}>
      <div>모달입니다</div>
      <div>
        <button onClick={handleClickRemove}>삭제하기</button>
        <button onClick={handleClickEdit}>상품 수정하기</button>
        <button onClick={handleClickMove}>상품 페이지로 이동</button>
      </div>
    </ReactModal>
  );
}
