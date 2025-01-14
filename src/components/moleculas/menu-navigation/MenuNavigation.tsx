import styles from './MenuNavigation.module.scss';
import {observer} from "mobx-react-lite";
import {useActiveMenuItem} from "../../../hooks/useActiveMenuItem.ts";
import {INavigationItem} from "../../../@types/INavigationItem.ts";
import {EPages} from "../../../@types/EPages.ts";
import {Link} from "react-router-dom";
import classNames from "classnames";

const navigationItems: INavigationItem[] = [
  {name: 'Home', url: EPages.HOME, base: EPages.HOME},
  {name: 'Menu', url: EPages.MENU, base: EPages.MENU},
  {name: 'Company', url: EPages.COMPANY, base: EPages.COMPANY},
  {name: 'Login', url: EPages.LOGIN, base: EPages.LOGIN},
];

export const MenuNavigation = observer(() => {
  const activeMenuItem = useActiveMenuItem(navigationItems);

  return (
    <nav className={styles.menu}>{
      navigationItems.map((item) => (
        <Link key={item.name}
              to={item.base}
              className={classNames(styles.menu__item, item.url === activeMenuItem?.url ? styles.menu__item__active : '')}>
          {item.name}
        </Link>
      ))
    }</nav>
  );
});