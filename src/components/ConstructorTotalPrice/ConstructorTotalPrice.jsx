import styles from '../ConstructorTotalPrice/ConstructorTotalPrice.module.css';
import {useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {CurrencyIcon, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import{createOrder} from "../../services/actions/order";

const ConstructorTotalPrice = () => {
  const dispatch = useDispatch();

  const { bun, filling } = useSelector((store) => store.burgerConstructor);

    const costOfBurger = useMemo(() => {
    const costOfBun = bun?.price || 0;
    const costOfFilling = filling.reduce((acc, item) => acc + item.price, 0);

    return costOfBun * 2 + costOfFilling;
  }, [filling, bun]);

  const handleOrderCreate = () => {
    dispatch(createOrder());
  };

  return (
    <>
      {bun && (
        <div className={`${styles.totalPrice} mt-10`}>
          <div className="mr-10">
            <span className="text text_type_digits-medium">{costOfBurger}</span>
            <CurrencyIcon type="primary" />
          </div>
          {!!filling.length && (
            <Button type="primary" size="large" onClick={handleOrderCreate}>
              Оформить заказ
            </Button>
          )}
        </div>
      )}
    </>
  );
};

export default ConstructorTotalPrice;
