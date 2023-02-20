import styles from '../DragConstructorCard/DragConsrtuctorCard.module.css';
import {useRef} from "react";
import {useDispatch} from "react-redux";
import {useDrop, useDrag} from "react-dnd";
import {DragIcon, ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import ingredientType from "../../utils/types";
import {swapFillings} from "../../services/actions/burgerConstructorAction";
import PropTypes from "prop-types";

const DragConstructorCard = (props) => {
  const {index, data, handleRemove} = props;
  const dispatch = useDispatch();
  const ref = useRef(null);

  const [{isDragging}, dragRef] = useDrag({
    type: 'drag-constructor-card',
    item: {index},
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{isHovered}, dropRef] = useDrop({
    accept: 'drag-constructor-card',
    collect: (monitor) => ({
      isHovered: monitor.isOver(),
    }),
    hover: (item) => {
      if (!ref.current) return;
      const [dragIndex, hoverIndex] = [item.index, index];
      if (dragIndex === hoverIndex) return;
      dispatch(swapFillings({from: dragIndex, to: hoverIndex}));
      item.index = hoverIndex;
    },
  });

  dragRef(dropRef(ref));

  return (
    <div ref={ref}
         className={`mr-2 ${styles.wrapper} ${isDragging ? styles.dragging : ''}`}
         style={{opacity: isHovered ? 0.1 : 1}}>
      <div className={`${styles.dragIcon} mr-2`}>
        <DragIcon type="primary"/>
      </div>
      <ConstructorElement text={data.name} price={data.price} thumbnail={data.image}
                          handleClose={() => handleRemove(data)}/>
    </div>
  );
};

DragConstructorCard.propTypes = {
  data: ingredientType.isRequired,
  index: PropTypes.number.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default DragConstructorCard
