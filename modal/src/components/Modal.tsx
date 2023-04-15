import "./Modal.css";

interface ModalProps {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ closeModal }: ModalProps) => {
  return (
    <div className="modal" onClick={() => closeModal(false)}>
      <div className="modal-content">
        <div className="modal-header">
          <h1>Hello, From The Modal</h1>
        </div>
        <div className="modal-body">
          <p>Close me with Escape key, close button below or click outside!</p>
        </div>
        <div className="modal-footer">
          <button onClick={() => closeModal(false)} className="button">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
