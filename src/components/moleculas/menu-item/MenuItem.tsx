import styles from './MenuItem.module.scss';
import {IMenuItem} from "../../../@types/IMenuItem.ts";
import {MenuItemControls} from "../menu-item-controls/MenuItemControls.tsx";

export type MenuItemProps = {
  item: IMenuItem;
}

export const MenuItem = ({item}: MenuItemProps) => {
  return (
    <div className={styles.menuItem}>
      <img className={styles.menuItem__image} src={item.img} alt={item.meal}/>
      <div className={styles.menuItem__main}>
        <div className={styles.menuItem__main__header}>
          <h3 className={styles.menuItem__main__header__title}>{item.meal}</h3>
          <p className={styles.menuItem__main__header__price}>$ {item.price}</p>
        </div>
        <p className={styles.menuItem__main__description}>{item.instructions}</p>
        <div className={styles.menuItem__main__actions}>
          <MenuItemControls item={item}/>
        </div>
      </div>
    </div>
  )
}