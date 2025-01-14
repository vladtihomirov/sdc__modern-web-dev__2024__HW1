import styles from './MenuGrid.module.scss';
import {IMenuItem} from "../../../../@types/IMenuItem.ts";
import {MenuItem} from "../../../moleculas/menu-item/MenuItem.tsx";

type MenuGridProps = {
  menuItems: IMenuItem[];
}

export const MenuGrid = ({menuItems = []}: MenuGridProps) => {
  return (
    <div className={styles.menuGrid}>
      {menuItems.map(item => (
        <MenuItem key={item.id} item={item}/>
      ))}
    </div>
  )
}