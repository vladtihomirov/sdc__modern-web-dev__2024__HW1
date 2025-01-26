import styles from './OrderPage.module.scss';
import {OrderForm} from "../../organisms/order/order-form/OrderForm.tsx";

export const OrderPage = () => {
  return (
    <div className={styles.orderPage}>
      <div className={styles.orderPage__title}>
        Finish your order
      </div>
      <div className={styles.orderPage__form}>
        <OrderForm />
      </div>
    </div>
  );
};