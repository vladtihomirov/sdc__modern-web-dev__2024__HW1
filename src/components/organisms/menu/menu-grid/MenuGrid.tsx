import { Component } from 'react';
import styles from './MenuGrid.module.css';
import { IMenuItem } from '../../../../@types/IMenuItem.ts';
import { MenuItem } from '../../../moleculas/menu-item/MenuItem.tsx';

type MenuGridProps = {
  menuItems: IMenuItem[];
};

export class MenuGrid extends Component<MenuGridProps> {
  public static defaultProps = {
    menuItems: [],
  }

  render() {
    return (
      <div className={styles.menuGrid}>
        {this.props.menuItems.map(item => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    );
  }
}
