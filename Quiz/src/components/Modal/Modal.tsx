import React, { Dispatch, SetStateAction, useContext } from "react";
import "./Modal.css";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { QuizContext } from "../Helpers/Contexts";

interface ModalProps {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ setModalOpen }) => {
  const { setGameState } = useContext(QuizContext);
  return (
    <div className="modal">
      <section className="modal-main">
        <h2>Do you want to end the test?</h2>
        <div className="modal-buttons">
          <Button onClick={() => setModalOpen(false)}>Cancel</Button>
          <Link to="/">
            <Button
              onClick={() => {
                setGameState("start");
                setModalOpen(false);
              }}
            >
              Confirm
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Modal;
