import {Component} from 'react';
import styles from './CartButton.module.css';
import {observer} from 'mobx-react';
import {cartStore} from '../../../stores/CartStore.ts';
import {EPages} from '../../../@types/EPages.ts';

@observer
export class CartButton extends Component {
  render() {
    return (
      <a className={styles.cartButton} href={EPages.ORDER}>
        <img src={'/icons/cart.svg'} alt={'Cart icon'} height={17} width={25}/>
        <div className={styles.cartButton__badge}>{cartStore.itemCount}</div>
      </a>
    );
  }
}
