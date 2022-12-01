import React, {useEffect} from 'react';
import styleModal from './Modal.module.css'
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import {ModalOverlay} from '../ModalOverlay/ModalOverlay'

const modalNode = document.getElementById('modal');

export const Modal = (props) => {
  const {isOpen, setOpen, children} = props;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isOpen) {
    return null
  }

  const modal = (
    <div>
      <ModalOverlay onClick={closeModal}/>
      <div className={`${styleModal.popup}`}>
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
  children: PropTypes.element,
}

// компонент сделать немного иначе
// const Popup = ({isOpenPopup, setOpenPopup, children}) => {
//   const closePopup = (event) => {
//     event.stopPropagation();
//     setOpenPopup(false);
//   };
//
//   useEffect(() => {
//     const handleCloseEscape = (event) => {
//       if (event.key === 'Escape') {
//         closePopup(event);
//       }
//     };
//
//     document.addEventListener('keydown', handleCloseEscape);
//
//     return () => document.removeEventListener('keydown', handleCloseEscape);
//   }, []);
//   return createPortal(
//     <div>
//       <ModalOverlay onClick={closePopup}/>
//       <div className={`${styleModal.popup}`}>
//         <button className={`${styleModal.closeBtn}`} onClick={closePopup}>
//           <CloseIcon type="primary"/>
//         </button>
//         {children}
//       </div>
//     </div>,
//     popups
//   );
// };
//
// export default Popup;
