import styles from './MenuItem.module.css';
import {IMenuItem} from "../../../@types/IMenuItem.ts";
import {Button} from "../../atoms/button/Button.tsx";
import {Input} from "../../atoms/input/Input.tsx";
import {useState} from "react";

export type MenuItemProps = {
  item: IMenuItem;
}

export const MenuItem = ({item}: MenuItemProps) => {
  const [count, setCount] = useState(1)

  return (
    <div className={styles.menuItem}>
      <img className={styles.menuItem__image} src={item.image} alt={item.title}/>
      <div className={styles.menuItem__main}>
        <div className={styles.menuItem__main__header}>
          <h3 className={styles.menuItem__main__header__title}>{item.title}</h3>
          <p className={styles.menuItem__main__header__price}>$ {item.price} USD</p>
        </div>
        <p className={styles.menuItem__main__description}>{item.description}</p>
        <div className={styles.menuItem__main__actions}>
          <Input value={count}
                 type="number"
                 onChange={(value) => setCount(Number(value))}
                 className={styles.menuItem__main__actions__input}/>
          <Button appearance="primary" size="medium">Add to cart</Button>
        </div>
      </div>
    </div>
  )
}