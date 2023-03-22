import styles from '../DragConstructorCard/DragConsrtuctorCard.module.css';
import {FC, useRef} from "react";
import {useDrop, useDrag} from "react-dnd";
import {DragIcon, ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import {swapFillings} from "../../services/actions/burgerConstructorAction";
import {AppDispatch} from "../../hooks/appDispatch";
import {IIngredient} from "../../interfaces/data/IIngredient";

interface IDragConstructorCard {
    data: IIngredient,
    index?: number,
    handleRemove: (data: IIngredient) => void
}

const DragConstructorCard: FC<IDragConstructorCard> = ({index, data, handleRemove}) => {
    const dispatch = AppDispatch();
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
            // @ts-ignore
            const [dragIndex, hoverIndex] = [item.index, index];
            if (dragIndex === hoverIndex) return;
            dispatch(swapFillings({from: dragIndex, to: hoverIndex}));
            // @ts-ignore
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


export default DragConstructorCard
