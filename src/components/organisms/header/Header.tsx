import styles from './Header.module.css';
import {Logo} from "../../moleculas/logo/Logo.tsx";
import {MenuNavigation} from "../../moleculas/menu-navigation/MenuNavigation.tsx";
import {CartButton} from "../../atoms/cart-button/CartButton.tsx";

export const Header = () => {
    return (
        <header className={styles.header}>
            <Logo/>
            <div className={styles.header__navigation}>
                <MenuNavigation/>
                <CartButton/>
            </div>
        </header>
    );
};