import styles from './CartButton.module.css';

export const CartButton = () => {
    return (
      <a className={styles.cartButton} href="/cart">
        <img src={'/icons/cart.svg'} alt={'Cart icon'} height={17} width={25}/>
      </a>
    );
}