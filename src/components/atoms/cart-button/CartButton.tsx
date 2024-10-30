import styles from './CartButton.module.css';
import {observer} from "mobx-react-lite";
import {cartStore} from "../../../stores/CartStore.ts";
import {EPages} from "../../../@types/EPages.ts";
import {navigationStore} from "../../../stores/NavigationStore.ts";

export const CartButton = observer(() => {
    return (
      <a className={styles.cartButton} href={EPages.ORDER} onClick={() => navigationStore.setActiveItem(EPages.ORDER)}>
        <img src={'/icons/cart.svg'} alt={'Cart icon'} height={17} width={25}/>
        <div className={styles.cartButton__badge}>{cartStore.itemCount}</div>
      </a>
    );
});