import styles from './MenuItemControls.module.scss';
import {Button} from "../../atoms/button/Button.tsx";
import {useDispatch, useSelector} from "react-redux";
import {addItem, removeItem} from "../../../slices/CartSlice.ts";
import {AppDispatch, RootState} from "../../../store.ts";
import {IMenuItem} from "../../../@types/IMenuItem.ts";

type MenuItemControlsProps = {
  item: IMenuItem;
}

export const MenuItemControls = ({item}: MenuItemControlsProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const cartItem = useSelector((state: RootState) => state.cart.items.find(cartItem => cartItem.item.id === item.id));

  function handleItemReduction() {
    dispatch(removeItem({
      count: 1,
      item: item
    }))
  }

  function handleItemIncrement() {
    dispatch(addItem({
      count: 1,
      item: item
    }))
  }

  return (
    cartItem ?
      <div className={styles.menuItemControls}>
        <Button appearance="primary" size="small" onClick={() => handleItemReduction()} className="item-decrease-button">
          {cartItem.count > 1 ? '-' : 'X'}
        </Button>
        <div className={styles.menuItemControls__label}>{cartItem.count}</div>
        <Button appearance="primary" size="small" onClick={() => handleItemIncrement()}
                className="item-increase-button">+</Button>
      </div> :
      <Button className="add-to-cart" appearance="primary" size="small" onClick={() => handleItemIncrement()}>
        Add to cart
      </Button>
  )
}