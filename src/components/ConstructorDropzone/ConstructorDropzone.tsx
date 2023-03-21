import styles from '../ConstructorDropzone/ConstructorDropzone.module.css';
import {useEffect} from "react";
import {DropTargetMonitor, useDrop} from "react-dnd";
import {addBun, addFilling, removeFilling} from "../../services/actions/burgerConstructorAction";
import HalfBun from "../HalfBun/HalfBun";
import DragConstructorCard from '../DragConstructorCard/DragConsrtuctorCard';
import {updateCurrentOrderContent} from '../../services/actions/orderAction';
import {AppDispatch} from "../../hooks/appDispatch";
import {AppSelector} from "../../hooks/appSelector";
import {RootState} from "../../store/store";

const ConstructorDropzone = () => {
    const dispatch = AppDispatch();

    const {bun, filling} = AppSelector((store:RootState) => store.burgerConstructor);

    const [{isHovered}, dropRef] = useDrop({
        accept: 'ingredientCard',

        drop: (item: DragEvent) => {
            if (bun && item.type !== 'bun') {
                return dispatch(addFilling(item))
            }
            if (item.type === 'bun') {
                // @ts-ignore
                return dispatch(addBun(item))
            }

        },
        collect: (monitor:DropTargetMonitor) => ({
            isHovered: monitor.isOver(),
        }),
    });

    useEffect(() => {

        const orderIngredientsIDs = filling.length && bun
            ? [bun, ...filling.map((item) => item._id), bun]
            : [];

        dispatch(updateCurrentOrderContent(orderIngredientsIDs));
    }, [bun, filling]);

    const handleRemoveFillingFromConstructor = (item: any) => {
        dispatch(removeFilling(item));
    };

    return (
        <>
            {bun && <HalfBun type="top" bun={bun}/>}
            <div
                ref={dropRef}
                className={`${styles.constructorDropzoneWrapper} ${
                    !filling.length ? styles.cleanDropzone : ''
                } ${isHovered && !filling.length ? styles.hoveredCleanDropzone : ''}`}
            >
                {!bun && (
                    <>
                        <span
                            className={`text text_type_main-default ${styles.span} ${isHovered ? '' : 'text_color_inactive'}`}>П</span>
                        <span
                            className={`text text_type_main-default ${styles.span} ${isHovered ? '' : 'text_color_inactive'}`}>е</span>
                        <span
                            className={`text text_type_main-default ${styles.span} ${isHovered ? '' : 'text_color_inactive'}`}>р</span>
                        <span
                            className={`text text_type_main-default ${styles.span} ${isHovered ? '' : 'text_color_inactive'}`}>е</span>
                        <span
                            className={`text text_type_main-default ${styles.span} ${isHovered ? '' : 'text_color_inactive'}`}>н</span>
                        <span
                            className={`text text_type_main-default ${styles.span} ${isHovered ? '' : 'text_color_inactive'}`}>е</span>
                        <span
                            className={`text text_type_main-default ${styles.span} ${isHovered ? '' : 'text_color_inactive'}`}>с</span>
                        <span
                            className={`text text_type_main-default ${styles.span} ${isHovered ? '' : 'text_color_inactive'}`}>и</span>
                        <span
                            className={`text text_type_main-default ${styles.span} ${isHovered ? '' : 'text_color_inactive'}`}>т</span>
                        <span
                            className={`text text_type_main-default ${styles.span} ${isHovered ? '' : 'text_color_inactive'}`}>e</span>
                        <span
                            className={`text text_type_main-default ${styles.span} ${isHovered ? '' : 'text_color_inactive'}`}>&nbsp;с</span>
                        <span
                            className={`text text_type_main-default ${styles.span} ${isHovered ? '' : 'text_color_inactive'}`}>ю</span>
                        <span
                            className={`text text_type_main-default ${styles.span} ${isHovered ? '' : 'text_color_inactive'}`}>д</span>
                        <span
                            className={`text text_type_main-default ${styles.span} ${isHovered ? '' : 'text_color_inactive'}`}>а&nbsp;</span>
                        <span
                            className={`text text_type_main-default ${styles.span} ${isHovered ? '' : 'text_color_inactive'}`}>б</span>
                        <span
                            className={`text text_type_main-default ${styles.span} ${isHovered ? '' : 'text_color_inactive'}`}>у</span>
                        <span
                            className={`text text_type_main-default ${styles.span} ${isHovered ? '' : 'text_color_inactive'}`}>л</span>
                        <span
                            className={`text text_type_main-default ${styles.span} ${isHovered ? '' : 'text_color_inactive'}`}>к</span>
                        <span
                            className={`text text_type_main-default ${styles.span} ${isHovered ? '' : 'text_color_inactive'}`}>у</span>
                        <span></span>
                    </>
                )}
                {bun && !filling.length && (
                    <span
                        className={`text text_type_main-default ${styles.spanN} ${isHovered ? '' : 'text_color_inactive'}`}>
            Перенесите сюда как можно больше начинок и соусов
          </span>
                )}
                {filling.map((item, index) => (
                    <DragConstructorCard
                        key={item.uniqueId}
                        index={index}
                        data={item}
                        handleRemove={handleRemoveFillingFromConstructor}
                    />
                ))}
            </div>
            {bun && <HalfBun type="bottom" bun={bun}/>}
        </>
    );
};

export default ConstructorDropzone;