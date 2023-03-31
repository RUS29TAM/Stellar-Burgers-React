import React, {FC} from 'react';
import styleModalOverlay from './modal-overlay.module.css';

interface IModalOverlay {
    onClick: () => void
}

const ModalOverlay: FC<IModalOverlay> = ({onClick}) => (
    <div className={`${styleModalOverlay.background}`} onClick={onClick}/>
);

export default ModalOverlay

