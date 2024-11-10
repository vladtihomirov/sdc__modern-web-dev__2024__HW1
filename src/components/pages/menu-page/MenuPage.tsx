import {MenuSmallView} from '../../organisms/menu/menu-small-view/MenuSmallView';
import styles from './MenuPage.module.css';

export const MenuPage = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.menu__hero}>
        <h1 className={styles.menu__hero__title}>Browse our menu</h1>
        <p className={styles.menu__hero__description}>
          Use our menu to place an order online, or <span data-hint="+48 000 000 00">phone</span> our store<br/>
          to place a pickup order. Fast and fresh food.
        </p>
      </div>
      <MenuSmallView/>
    </div>
  );
};