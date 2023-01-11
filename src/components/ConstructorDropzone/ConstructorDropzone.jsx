import styles from '../ConstructorDropzone/ConstructorDropzone.module.css';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useDrop} from "react-dnd";
import {addBun, addFilling, removeFilling} from "../../services/actions/burgerConstructor";
import HalfBun from "../HalfBun/HalfBun";
import DragConstructorCard from '../DragConstructorCard/DragConsrtuctorCard';
import {updateCurrentOrderContent} from '../../services/actions/order';

const ConstructorDropzone = () => {
  const dispatch = useDispatch();

  const {bun, filling} = useSelector((store) => store.burgerConstructor);

  const [{isHovered}, dropRef] = useDrop({
    accept: 'ingredientCard',

    drop: (item) => {
      if (bun && item.type !== 'bun') {
        return dispatch(addFilling(item))
      }
      if (item.type === 'bun') {
       return dispatch(addBun(item))
      }

    },
    collect: (monitor) => ({
      isHovered: monitor.isOver(),
    }),
  });

  useEffect(() => {

    const orderIngredientsIDs = filling.length && bun
      ? [bun._id, ...filling.map((item) => item._id), bun._id]
      : [];

    dispatch(updateCurrentOrderContent(orderIngredientsIDs));
  }, [bun, filling]);

  const handleRemoveFillingFromConstructor = (item) => {
    dispatch(removeFilling(item));
  };


  return (
    <>
      {bun && <HalfBun type="top" bun={bun}/>}
      <div
        ref={dropRef}
        className={`${styles.constructorDropzoneWrapper} ${
          !filling.length ? styles.cleanDropzone : ''
        } ${isHovered ? styles.hoveredCleanDropzone : ''}`}
      >
        {!bun && (
          <p className={`text text_type_main-default ${isHovered ? '' : 'text_color_inactive'}`}>
            Перенесите сюда булку
          </p>
        )}
        {bun && !filling.length && (
          <p className={`text text_type_main-default ${isHovered ? '' : 'text_color_inactive'}`}>
            Перенесите сюда как можно больше начинок и соусов
          </p>
        )}
        {filling.map((item, index) => (
            <DragConstructorCard
              key={index}
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
