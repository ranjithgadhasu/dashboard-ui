import Modal from "./Modal";
import EditContactForm from "./EditContactForm";

const EditContactModal = ({ isOpen, onClose, contact }) => {

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Edit Contact"
    >
      <EditContactForm
        contact={contact}
        onClose={onClose}
      />
    </Modal>
  );
};

export default EditContactModal;