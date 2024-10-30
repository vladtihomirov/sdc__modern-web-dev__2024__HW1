import {Component} from 'react';
import styles from './MenuItem.module.css';
import {IMenuItem} from '../../../@types/IMenuItem.ts';
import {Button} from '../../atoms/button/Button.tsx';
import {Input} from '../../atoms/input/Input.tsx';
import {cartStore} from '../../../stores/CartStore.ts';

export type MenuItemProps = {
  item: IMenuItem;
};

export type MenuItemState = {
  count: number;
};

export class MenuItem extends Component<MenuItemProps, MenuItemState> {
  constructor(props: MenuItemProps) {
    super(props);
    this.state = {count: 1};
  }

  onAddToCart = () => {
    cartStore.addItem({count: this.state.count, item: this.props.item});
  };

  handleCountChange = (value: string | number) => {
    this.setState({count: Number(value)});
  };

  render() {
    return (
      <div className={styles.menuItem}>
        <img className={styles.menuItem__image} src={this.props.item.img} alt={this.props.item.meal}/>
        <div className={styles.menuItem__main}>
          <div className={styles.menuItem__main__header}>
            <h3 className={styles.menuItem__main__header__title}>{this.props.item.meal}</h3>
            <p className={styles.menuItem__main__header__price}>$ {this.props.item.price} USD</p>
          </div>
          <p className={styles.menuItem__main__description}>{this.props.item.instructions}</p>
          <div className={styles.menuItem__main__actions}>
            <Input
              value={this.state.count}
              type="number"
              onChange={this.handleCountChange}
              className={styles.menuItem__main__actions__input}
            />
            <Button appearance="primary" size="medium" onClick={this.onAddToCart}>
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
