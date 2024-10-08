import styles from './CartButton.module.css';

export const CartButton = () => {
    return (
        <button className={styles.cartButton}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path fill="#000" d="M5 5h14v2H5V5zm0 4h14v2H5V9zm0 4h14v2H5v-2zm0 4h14v2H5v-2z"/>
            </svg>
        </button>
    );
}