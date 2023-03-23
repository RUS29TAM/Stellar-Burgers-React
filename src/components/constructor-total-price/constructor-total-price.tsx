import styles from './constructor-total-price.module.css';
import {useMemo, useState} from "react";
import {CurrencyIcon, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {createOrder} from "../../services/actions/orderAction";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import useAuthorisation from "../../hooks/useAuthorisation";
import {useNavigate} from "react-router-dom";
import useToken from "../../hooks/useToken";
import {AppDispatch} from "../../hooks/appDispatch";
import {AppSelector} from "../../hooks/appSelector";
import {RootState} from "../../store/store";

const ConstructorTotalPrice = () => {
    const dispatch = AppDispatch();
    const navigate = useNavigate()
    const [modalState, setModalState] = useState(false);
    const order = AppSelector((state:RootState) => state.order)

    const user = useAuthorisation()
    const tokenStore = useToken()

    const {bun, filling} = AppSelector((store:RootState) => store.burgerConstructor);

    const priceOfBurger = useMemo(() => {
         // @ts-ignore
        const priceOfBun = bun?.price || 0;
        const priceOfFilling = filling.reduce((acc, item) => acc + item.price, 0);

        return priceOfBun * 2 + priceOfFilling;
    }, [filling, bun]);

    const handleOrderCreate = () => {
        if (user.isAuth) {
            dispatch(createOrder(order.currentOrderContent, tokenStore.getToken()))
            setModalState(true)
        } else {
            navigate('/login')
        }
    };

    return (
        <>
            {bun && (
                <div className={`${styles.totalPrice} mt-10`}>
                    <div className="mr-10">
                        <span className="text text_type_digits-medium">{priceOfBurger}</span>
                        <CurrencyIcon type="primary"/>
                    </div>
                    {filling.length !== 0 && bun &&
                        <Button type="primary" size="large" onClick={handleOrderCreate} htmlType={'button'}>
                            Оформить заказ
                        </Button>
                    }
                </div>
            )}
            {modalState && order.createdOrders && <Modal setOpen={setModalState}>
                <OrderDetails lastOrder={order.createdOrders.number}/>
            </Modal>}
        </>
    );
};

export default ConstructorTotalPrice;
