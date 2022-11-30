import React, {useEffect} from 'react';
import styleModal from './Modal.module.css'
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import ReactDOM from "react-dom/client";
import PropTypes from "prop-types";
import {ModalOverlay} from '../ModalOverlay/ModalOverlay'

const popups = document.getElementById('popup')
export const Popup = (props) => {
  const {isOpenPopup, setOpenPopup, children} = props;
  const closePopup = (event) => {
    event.stopPropagation();
    setOpenPopup(false);
  };

  useEffect(() => {
    const handleCloseEscape = (event) => {
      if (event.key === 'Escape') {
        closePopup(event);
      }
    };

    document.addEventListener('keydown', handleCloseEscape);

    return () => document.removeEventListener('keydown', handleCloseEscape);
  }, []);

  if (!isOpenPopup) {
    return null
  }

  const popup = (
    <>
      <ModalOverlay onClick={closePopup}/>
      <div className={`${styleModal.popup}`}>
        <button className={`${styleModal.closeBtn}`} onClick={closePopup}>
          <CloseIcon type="primary"/>
        </button>
        {children}
      </div>
    </>
  );

  return ReactDOM.createPortal(popup, popups);
};
Popup.propsTypes = {
  isOpenPopup: PropTypes.bool.isRequired,
  setOpenPopup: PropTypes.func.isRequired,
  children: PropTypes.element,
}
