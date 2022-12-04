import React from 'react';
import preLoader from '../../images/icon/load.svg';
import stylePreLoader from './PreLoader.module.css';

const PreLoader = () => {
  return (
    <div className={stylePreLoader.wrapper}>
      <svg className={stylePreLoader.preLoader} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
           viewBox="0 0 24 24"
      >
        <circle cx="12" cy="20" r="2" className={stylePreLoader.a}></circle>
        <circle cx="12" cy="4" r="2" className={stylePreLoader.b}></circle>
        <circle cx="6.343" cy="17.657" r="2" className={stylePreLoader.c}></circle>
        <circle cx="17.657" cy="6.343" r="2" className={stylePreLoader.d}></circle>
        <circle cx="4" cy="12" r="2.001" className={stylePreLoader.e}></circle>
        <circle cx="20" cy="12" r="2" className={stylePreLoader.f}></circle>
        <circle cx="6.343" cy="6.344" r="2" className={stylePreLoader.g}></circle>
        <circle cx="17.657" cy="17.658" r="2" className={stylePreLoader.h}></circle>
      </svg>
      {/*<img className={`${stylePreLoader.preLoader}`} src={preLoader} alt='Загрузка'/>*/}
    </div>
  );
};

export default PreLoader;
