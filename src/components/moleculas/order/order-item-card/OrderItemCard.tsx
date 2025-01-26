import styles from './OrderItemCard.module.scss';
import {IOrderItem} from "../../../../@types/IOrderItem.ts";
import {Button} from "../../../atoms/button/Button.tsx";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../../store.ts";
import {addItem, removeItem} from "../../../../slices/CartSlice.ts";

type OrderItemCardProps = {
  item: IOrderItem;
}

export const OrderItemCard = ({item}: OrderItemCardProps) => {
  const dispatch = useDispatch<AppDispatch>();

  function handleItemReduction(item: IOrderItem) {
    dispatch(removeItem({
      count: 1,
      item: item.item
    }))
  }

  function handleItemIncrement(item: IOrderItem) {
    dispatch(addItem({
      count: 1,
      item: item.item
    }))
  }

  return (
    <div className={styles.orderItemCard}>
      <img className={styles.orderItemCard__image} src={item.item.img} alt={item.item.meal}/>
      <div className={styles.orderItemCard__title}>
        {item.item.meal}
      </div>
      <div className={styles.orderItemCard__price}>
        {item.item.price * item.count} $
      </div>
      <Button appearance="primary" size="medium" onClick={() => handleItemReduction(item)}>-</Button>
      <div className={styles.orderItemCard__count}>{item.count}</div>
      <Button appearance="primary" size="medium" onClick={() => handleItemIncrement(item)}>+</Button>
    </div>
  );
};