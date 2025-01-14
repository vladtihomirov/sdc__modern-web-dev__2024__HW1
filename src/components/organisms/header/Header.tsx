import styles from './Header.module.scss';
import {Logo} from "../../moleculas/logo/Logo.tsx";
import {MenuNavigation} from "../../moleculas/menu-navigation/MenuNavigation.tsx";
import {CartButton} from "../../atoms/cart-button/CartButton.tsx";
import {useEffect, useState} from "react";
import {UserBadge} from "../../moleculas/user-badge/UserBadge.tsx";
import {useUser} from "../../../hooks/useUser.ts";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const user = useUser();

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
          {user.info && (<div className={styles.header__navigation__user}>
            <UserBadge/>
            <CartButton/>
          </div>)}
        </div>
      </div>
    </header>
  );
};