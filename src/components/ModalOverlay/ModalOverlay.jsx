import React from "react";
import styleModalOverlay from './ModalOverlay.module.css'
import PropTypes from 'prop-types';

export const ModalOverlay = ({onClick}) => (
  <div className={`${styleModalOverlay.background}`} onClick={onClick}/>
);
ModalOverlay['PropTypes'] = {
onClick: PropTypes.func,
};

