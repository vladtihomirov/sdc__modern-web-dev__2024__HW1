import styles from './MenuNavigation.module.css';
import {useState} from "react";

type MenuNavigationItem = {
  name: string;
  url: string;
}

export const MenuNavigation = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const menuItems: MenuNavigationItem[] = [
    {name: 'Home', url: '/home'},
    {name: 'Menu', url: '/menu'},
    {name: 'Company', url: '/company'},
    {name: 'Login', url: '/auth/login'},
  ];

  return (
    <nav className={styles.menu}>{
      menuItems.map((item) => (
        <a key={item.name}
           href={item.url}
           onClick={() => setCurrentPath(item.url)}
           className={[styles.menu__item, item.url === currentPath ? styles.menu__item__active : null].join(' ')}>
          {item.name}
        </a>
      ))
    }</nav>
  );
}