import React from 'react';
import PropTypes from "prop-types";
import stylesListBasket from './ListBasket.module.css'
import {IngredientCard} from "../IngredientCard/IngredientCard";

// @ts-ignore
export const ListBasket = ({ heading, list }) => {
    return (
        <>
            <h3 className='text text_type_main-medium mt-10 mb-6'>
                {heading}
            </h3>
            <div className={`${stylesListBasket.list} ml-4 mr-2`}>
                {list.map((item: { _id: React.Key | null | undefined; name: string; price: number; image: string; }) => (
                    <IngredientCard
                        key={item._id}
                        name={item.name}
                        price={item.price}
                        image={item.image}
                    />
                ))}
            </div>
        </>
    );
};

ListBasket.propTypes = {
    heading: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }))
};

