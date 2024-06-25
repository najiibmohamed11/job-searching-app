import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal'; // Rename the import to avoid conflict

ReactModal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function ModalComponent() { // Rename to avoid conflict with 'ReactModal'
  const [modalIsOpen, setIsOpen] = React.useState(false); // Initially set to false to keep modal closed
  const subtitle = React.useRef(null);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // Safe access to the subtitle ref
    if (subtitle.current) {
      subtitle.current.style.color = '#f00';
    }
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <ReactModal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        <div ref={subtitle}>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </ReactModal>
    </div>
  );
}

export default ModalComponent; // Correct the export to match the component name
