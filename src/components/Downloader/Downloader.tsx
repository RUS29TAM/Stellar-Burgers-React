import React, {FC} from 'react';
import styleDownloader from './Downloader.module.css';
import PreLoader from "../PreLoader/PreLoader";

interface IDownloader {
    type: 'loading' | 'error'
}
const Downloader: FC<IDownloader> = ({type}) => {
    return (
        <>
            {type !== 'error'
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

export default Downloader


