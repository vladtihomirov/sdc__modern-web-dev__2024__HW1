import styles from './Header.module.css';
import {Logo} from "../../moleculas/logo/Logo.tsx";
import {MenuNavigation} from "../../moleculas/menu-navigation/MenuNavigation.tsx";
import {CartButton} from "../../atoms/cart-button/CartButton.tsx";
import {useEffect, useState} from "react";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
        <header className={[styles.header, scrolled ? styles.header__scrolled : null].join(' ')}>
          <div className={["wrapper", styles.header__wrapper].join(' ')}>
            <Logo/>
            <div className={styles.header__navigation}>
                <MenuNavigation/>
                <CartButton/>
            </div>
          </div>
        </header>
    );
};