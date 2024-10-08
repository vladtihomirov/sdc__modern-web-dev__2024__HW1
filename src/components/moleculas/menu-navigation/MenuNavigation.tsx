import styles from './MenuNavigation.module.css';

type MenuNavigationItem = {
    name: string;
    url: string;
}

export const MenuNavigation = () => {
    const menuItems: MenuNavigationItem[] = [
        {name: 'Home', url: '#'},
        {name: 'About', url: '#'},
        {name: 'Company', url: '#'},
        {name: 'Login', url: '#'},
    ];

    return (
        <nav className={styles.menu}>{
            menuItems.map((item) => (
                <a key={item.name} href={item.url} className={styles.menu__item}>{item.name}</a>
            ))
        }</nav>
    );
}