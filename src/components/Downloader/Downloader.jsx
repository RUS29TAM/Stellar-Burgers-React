import React from 'react';
import styleDownloader from './Downloader.module.css';
import PropTypes from 'prop-types';
import PreLoader from "../PreLoader/PreLoader";

const Downloader = ({type}) => {
  return (
    <> {type !== 'error'
      ?
      (<PreLoader/>)
      :
      <div className={`${styleDownloader.message}`}>
        {type === 'error' && (
          <>
            <p className="text_type_main-large">Возникла ошибка</p>
            <p className="text text_type_main-medium">Перезагрузите страницу</p>
          </>
        )}
      </div>}
    </>
  );
};

Downloader.propTypes = {
  type: PropTypes.oneOf(['loading', 'error']).isRequired
}

export default Downloader


