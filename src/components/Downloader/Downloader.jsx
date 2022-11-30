import React from 'react';
import styleDownloader from './Downloader.module.css'
import PropTypes from "prop-types";

export const Downloader = (type) => {
  return (
    <div className={`${styleDownloader.message}`}>
      {type === 'loading' && (
        <p className="text text_type_main-large">Загрузка.</p>
      )}
      {type === 'error' && (
        <>
          <p className="text_type_main-large">Возникла ошибка</p>
          <p className="text text_type_main-medium">Перезагрузите страницу</p>
        </>
      )}

    </div>
  );
};

Downloader.propTypes = {
  type: PropTypes.oneOf(['loading', 'error']).isRequired
}


