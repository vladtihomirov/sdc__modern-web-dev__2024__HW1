import styles from './MenuNavigation.module.scss';
import {INavigationItem} from "../../../@types/INavigationItem.ts";
import {EPages} from "../../../@types/EPages.ts";
import {NavLink} from "react-router-dom";
import {userSelector} from "../../../slices/AuthSlice.ts";
import {useSelector} from "react-redux";

const navigationItems: INavigationItem[] = [
  {name: 'Home', url: EPages.HOME, base: EPages.HOME},
  {name: 'Menu', url: EPages.MENU, base: EPages.MENU},
  {name: 'Company', url: EPages.COMPANY, base: EPages.COMPANY},
];

export const MenuNavigation = () => {
  const user = useSelector(userSelector)

  return (
    <nav className={styles.menu}>
      {
        navigationItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.base}
            className={({ isActive }) =>
              `${styles.menu__item} ${isActive ? styles.menu__item__active : ""}`
            }
          >
            {item.name}
          </NavLink>
        ))
      }
      {
        !user?.uid &&
          <NavLink
              to={EPages.LOGIN}
              className={({ isActive }) =>
                `${styles.menu__item} ${isActive ? styles.menu__item__active : ""}`
              }
          >
              Login
          </NavLink>
      }
    </nav>
  );
};