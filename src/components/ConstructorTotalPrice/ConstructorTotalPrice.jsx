import styles from '../ConstructorTotalPrice/ConstructorTotalPrice.module.css';
import {useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {CurrencyIcon, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import{createOrder} from "../../services/actions/order";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import {current} from "@reduxjs/toolkit";

const ConstructorTotalPrice = () => {
  const dispatch = useDispatch();
  const [modalState, setModalState] = useState(false);
  const order = useSelector(state => state.order)

  const { bun, filling } = useSelector((store) => store.burgerConstructor);

    const costOfBurger = useMemo(() => {
    const costOfBun = bun?.price || 0;
    const costOfFilling = filling.reduce((acc, item) => acc + item.price, 0);

    return costOfBun * 2 + costOfFilling;
  }, [filling, bun]);

  const handleOrderCreate = () => {
    dispatch(createOrder(order.currentOrderContent))
    setModalState(true)
  };

  return (
    <>
      {bun && (
        <div className={`${styles.totalPrice} mt-10`}>
          <div className="mr-10">
            <span className="text text_type_digits-medium">{costOfBurger}</span>
            <CurrencyIcon type="primary" />
          </div>
          {bun && filling.length && (
            <Button type="primary" size="large" onClick={handleOrderCreate} htmlType={'button'}>
              Оформить заказ
            </Button>
          )}

        </div>
      )}
      {modalState && <Modal setOpen={setModalState}>
        <OrderDetails lastOrder={order.createdOrders[0]} />
      </Modal>}
    </>
  );
};

export default ConstructorTotalPrice;