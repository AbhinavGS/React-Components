import { useState } from "react";
import Modal from "./components/Modal";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div onKeyDown={(e) => e.key === "Escape" && setShowModal(false)}>
      <button onClick={handleModal}>Show Modal</button>
      {showModal && <Modal closeModal={setShowModal}></Modal>}
    </div>
  );
};

export default App;
