<<<<<<< HEAD
import React from 'react';
import { useGlobalContext } from './context';

const Modal = () => {
  const { isModalOpen, closeModal, correct, questions } = useGlobalContext();
  return (
    <div
      className={`${
        isModalOpen ? 'modal-container isOpen' : 'modal-container'
      }`}
    >
      <div className="modal-content">
        <h2>congrats!</h2>
      </div>
    </div>
  );
};

export default Modal;
=======
import React from 'react'
import { useGlobalContext } from './context'

const Modal = () => {
  return <h2>modal component</h2>
}

export default Modal
>>>>>>> 4d7f02c8d37324fe5567b73651de8eb8fb0950c6
