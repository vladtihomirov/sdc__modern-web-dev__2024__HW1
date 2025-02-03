import styles from './OrderItemCard.module.scss';
import {IOrderItem} from "../../../../@types/IOrderItem.ts";
import {MenuItemControls} from "../../menu-item-controls/MenuItemControls.tsx";

type OrderItemCardProps = {
  cartItem: IOrderItem;
}

export const OrderItemCard = ({cartItem}: OrderItemCardProps) => {
  return (
    <div className={styles.orderItemCard}>
      <img className={styles.orderItemCard__image} src={cartItem.item.img} alt={cartItem.item.meal}/>
      <div className={styles.orderItemCard__title}>
        {cartItem.item.meal}
      </div>
      <div className={styles.orderItemCard__price}>
        {cartItem.item.price * cartItem.count} $
      </div>
      <MenuItemControls item={cartItem.item}/>
    </div>
  );
};