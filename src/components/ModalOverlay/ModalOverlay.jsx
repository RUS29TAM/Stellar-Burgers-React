import React from 'react';
import styleModalOverlay from './ModalOverlay.module.css';
import PropTypes from 'prop-types';

const ModalOverlay = ({onClick}) => (
  <div className={`${styleModalOverlay.background}`} onClick={onClick}/>
);

ModalOverlay.propTypes = {
  onClick: PropTypes.func,
};

export default ModalOverlay

