import styles from './MenuItem.module.scss';
import {IMenuItem} from "../../../@types/IMenuItem.ts";
import {Button} from "../../atoms/button/Button.tsx";
import {Input} from "../../atoms/input/Input.tsx";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addItem} from "../../../slices/CartSlice.ts";

export type MenuItemProps = {
  item: IMenuItem;
}

export const MenuItem = ({item}: MenuItemProps) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);

  const onAddToCart = () => {
    dispatch(addItem({count, item}));
  }

  return (
    <div className={styles.menuItem}>
      <img className={styles.menuItem__image} src={item.img} alt={item.meal}/>
      <div className={styles.menuItem__main}>
        <div className={styles.menuItem__main__header}>
          <h3 className={styles.menuItem__main__header__title}>{item.meal}</h3>
          <p className={styles.menuItem__main__header__price}>$ {item.price} USD</p>
        </div>
        <p className={styles.menuItem__main__description}>{item.instructions}</p>
        <div className={styles.menuItem__main__actions}>
          <Input value={count}
                 type="number"
                 onChange={(value) => setCount(Number(value))}
                 className={styles.menuItem__main__actions__input}/>
          <Button appearance="primary" size="medium" onClick={() => onAddToCart()}>
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  )
}