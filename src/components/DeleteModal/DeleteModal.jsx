import css from './DeleteModal.module.css';

const DeleteModal = ({ isOpen, onClose, onConfirm, contactName }) => {
  if (!isOpen) return null;

  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <p>
          Are you sure you want to delete &quot;{contactName}&quot;?
        </p>
        <div className={css.buttons}>
          <button onClick={onConfirm}>Delete</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;



