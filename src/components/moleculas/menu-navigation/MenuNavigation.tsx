import styles from './MenuNavigation.module.css';
import {observer} from "mobx-react-lite";
import {navigationStore} from "../../../stores/NavigationStore.ts";
import {useUrl} from "crossroad";
import {useEffect} from "react";

export const MenuNavigation = observer(() => {
  const [url] = useUrl();

  useEffect(() => {
    navigationStore.setActiveItem(url.path);
  }, [url]);

  return (
    <nav className={styles.menu}>{
      navigationStore.navigationItems.map((item) => (
        <a key={item.name}
           href={item.url}
           onClick={() => navigationStore.setActiveItem(item.base)}
           className={[styles.menu__item, item.isActive ? styles.menu__item__active : null].join(' ')}>
          {item.name}
        </a>
      ))
    }</nav>
  );
});