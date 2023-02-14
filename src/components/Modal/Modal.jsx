import React, {useEffect} from 'react';
import styleModal from './Modal.module.css';
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ModalOverlay from '../ModalOverlay/ModalOverlay';

const modalNode = document.getElementById('modal');

const Modal = ({setOpen, children}) => {
  const closeModal = (event) => {
    event.stopPropagation();
    setOpen(false);
  };

  useEffect(() => {
    const handleCloseEscape = (event) => {
      if (event.key === 'Escape') {
        closeModal(event);
      }
    };

    document.addEventListener('keydown', handleCloseEscape);

    return () => document.removeEventListener('keydown', handleCloseEscape);
    // eslint-disable-next-line
  }, []);


  const modal = (
    <div>
      <ModalOverlay onClick={closeModal}/>
      <div className={` ${styleModal.popup}`}>
        <button className={`${styleModal.closeBtn}`} onClick={closeModal}>
          <CloseIcon type="primary"/>
        </button>
        {children}
      </div>
    </div>
  );
  return ReactDOM.createPortal(modal, modalNode);
};

Modal.propsTypes = {
  isOpenPopup: PropTypes.bool.isRequired,
  setOpenPopup: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
}

export default Modal
