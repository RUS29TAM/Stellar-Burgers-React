import React, {useState, useMemo} from 'react';
import styleConstructor from '../BurgerConstructor/BurgerConstructo.module.css';
import {IngredientGroupType} from '../ingredientGroupType/ingredientGroupType';
import {Button} from '@ya.praktikum/react-developer-burger-ui-components';
import {HalfBun} from '../HalfBun/HalfBun';
import currencyIcon from '../../images/icon/currency-icon.svg';
import {OrderDetails} from '../OrderDetails/OrderDetails';
import PropTypes from 'prop-types';

export const BurgerConstructor = ({ingredients}) => {

  const fillingBurger = ingredients.filter((item) => item.type === 'main' || item.type === 'sauce');
  const [isOrderPopupOpen, setOrderDetailsPopupOpen] = useState(false);
  const bun = ingredients.filter((item) => item.type === 'bun')[0];
  const handleOrderPopupOpen = () => {
    setOrderDetailsPopupOpen(true)
  };
  const burgerPrice = useMemo(() => {
    const ingredientPrice = fillingBurger.reduce((accumulator, item) => accumulator + item.price, 0);
    return bun.price * 2 + ingredientPrice
  }, [fillingBurger, bun]);


  return (
    <section className={`${styleConstructor.basket} mr-7`}>
      <div
        className={`${styleConstructor.constructorWrapper} mb-10 mt-25 ml-4`}
      >
        <HalfBun type='top' bun={bun} />
        <div className={styleConstructor.dragWrapper}>
          {fillingBurger.map((item) => (
            <IngredientGroupType
              key={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
        <HalfBun type='bottom' bun={bun} />
      </div>
      <div className={`${styleConstructor.acceptOrder} mr-4`}>
        <div className={`${styleConstructor.totalPrice}`}>
          <span className="text text_type_digits-medium">{burgerPrice}</span>
          {/*<CurrencyIcon type="primary" />*/}
          <img className={`currencyIcon ml-2`} src={currencyIcon} alt="Валюта"/>
        </div>
        <Button type="primary" size="large" htmlType={"button"} onClick={handleOrderPopupOpen}>
          Оформить заказ
        </Button>
      </div>
      <OrderDetails
        isOpen={isOrderPopupOpen}
        setOpen={setOrderDetailsPopupOpen}
      />
    </section>
  );
};
BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      type: PropTypes.string,
      proteins: PropTypes.number,
      fat: PropTypes.number,
      carbohydrates: PropTypes.number,
      calories: PropTypes.number,
      price: PropTypes.number,
      image: PropTypes.string,
      image_mobile: PropTypes.string,
      image_large: PropTypes.string,
      __v: PropTypes.number,
    })
  ).isRequired,
};
