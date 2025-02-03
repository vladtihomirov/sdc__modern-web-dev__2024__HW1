import styles from './OrderForm.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../store.ts";
import {OrderItemCard} from "../../../moleculas/order/order-item-card/OrderItemCard.tsx";
import {Button} from "../../../atoms/button/Button.tsx";
import {Input} from "../../../atoms/input/Input.tsx";
import {houseChange, placeAnOrder, streetChange} from "../../../../slices/CartSlice.ts";
import {NavLink, useNavigate} from "react-router-dom";
import {EPages} from "../../../../@types/EPages.ts";

export const OrderForm = () => {
  const orderItems = useSelector((state: RootState) => state.cart.items);
  const street = useSelector((state: RootState) => state.cart.street);
  const house = useSelector((state: RootState) => state.cart.house);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    dispatch(placeAnOrder());
    navigate(EPages.ORDER_PLACED)
  }

  return orderItems.length ? (
    <div className={styles.orderForm}>
      {orderItems.map((item, index) => <OrderItemCard cartItem={item} key={index}/>)}
      <div className={styles.orderForm__street}>
        <label>Street</label>
        <Input value={street} onChange={(e) => dispatch(streetChange(e.target.value))}/>
      </div>
      <div className={styles.orderForm__house}>
        <label>House</label>
        <Input value={house} onChange={(e) => dispatch(houseChange(e.target.value))}/>
      </div>
      <Button appearance="primary" onClick={() => handlePlaceOrder()}>Place Order</Button>
    </div>
  ) : (
    <div className={styles.orderForm}>
      <h1 className={styles.orderForm__empty}>Your cart is empty</h1>
      <NavLink to={EPages.MENU}>
        <Button appearance="primary">Go to menu</Button>
      </NavLink>
    </div>
  );
};