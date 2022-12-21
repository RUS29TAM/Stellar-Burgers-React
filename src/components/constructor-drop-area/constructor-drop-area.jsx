import React from 'react';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useDrop} from "react-dnd";
import {addBun, addFilling, removeFilling} from '../../services/action/burger-constructor';
import HalfBun from "../half-bun/half-bun";
import DragConstructor from "../drag-constructor/drag-constructor";
import {updateCurrentOrderContent} from '../../services/action/order';
import styles from '../constructor-drop-area/constructor-drop-area.module.css';


const ConstructorDropArea = () => {
  const dispatch = useDispatch();
  const {bun, filling} = useSelector((store) => store.burgerConstructor);
  const [{isHovered}, dropRef] = useDrop({
    accept: bun ? ['bun', 'main', 'sauce'] : 'bun',
    drop: (item) => (item.type === 'bun' ? dispatch(addBun(item)) : dispatch(addFilling(item))),
    collect: (monitor) => ({
      isHovered: monitor.isOver(),
    }),

  });

  useEffect(() => {
    const idIngredientsOrder = filling.length ? [bun._id, ...filling.map((item) => item._id), bun._id] : [];

    dispatch(updateCurrentOrderContent(idIngredientsOrder));
  }, [bun, filling]);

  const handleRemoveFilling = (item) => {
    dispatch(removeFilling(item));
  }

  return (
    <>
      {bun && <HalfBun type='top' bun={bun}/>}
      <div className={`${styles.constructorDropAreaWrapper}
      ${
        !filling.length ? styles.cleanDropArea : ''}
      ${
        isHovered ? styles.hoveredCleanDropArea : ''}`}
           ref={dropRef}
      >
        {!bun && (
          <p className={`text_type_main-default ${isHovered ? '' : 'text_color_inactive'}`}>
            Перенесите сюда булку
          </p>
        )}
        {bun && !filling.length && (
          <p className={`text_type_main-default ${isHovered ? '' : 'text_color_inactive'}`}>
            Перенесите сюда как можно больше начинок и соусов
          </p>
        )}
        {!!filling.length &&
          filling.map((item, index) => (
            <DragConstructor
              key={index}
              index={index}
              data={item}
              handleRemove={handleRemoveFilling}/>
          ))
        }
      </div>
      {bun && <HalfBun type="bottom" bun={bun}/>}
    </>
  )
};
ConstructorDropArea.displayName = 'ConstructorDropArea';

export default ConstructorDropArea;
