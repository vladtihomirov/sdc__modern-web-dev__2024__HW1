import styles from './MenuNavigation.module.css';
import {observer} from "mobx-react-lite";
import {navigationStore} from "../../../stores/NavigationStore.ts";
import {useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";

export const MenuNavigation = observer(() => {
  const {pathname} = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    navigationStore.setActiveItem(pathname);
  }, [pathname]);

  const onClick = (base: string) => {
    navigationStore.setActiveItem(base);
    navigate(base);
  }

  return (
    <nav className={styles.menu}>{
      navigationStore.navigationItems.map((item) => (
        <a key={item.name}
           onClick={() => onClick(item.base)}
           className={[styles.menu__item, item.isActive ? styles.menu__item__active : null].join(' ')}>
          {item.name}
        </a>
      ))
    }</nav>
  );
});