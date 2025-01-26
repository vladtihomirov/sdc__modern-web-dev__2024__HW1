import styles from './Header.module.scss';
import {Logo} from "../../moleculas/logo/Logo.tsx";
import {MenuNavigation} from "../../moleculas/menu-navigation/MenuNavigation.tsx";
import {CartButton} from "../../atoms/cart-button/CartButton.tsx";
import {useEffect, useState} from "react";
import {UserBadge} from "../../moleculas/user-badge/UserBadge.tsx";
import {useSelector} from "react-redux";
import {userSelector} from "../../../slices/AuthSlice.ts";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const user = useSelector(userSelector);

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
          {user?.uid && (<div className={styles.header__navigation__user}>
            <UserBadge/>
            <CartButton/>
          </div>)}
        </div>
      </div>
    </header>
  );
};