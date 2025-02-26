import styles from './CartButton.module.scss';
import {observer} from "mobx-react-lite";
import {cartStore} from "../../../stores/CartStore.ts";
import {EPages} from "../../../@types/EPages.ts";
import cartIcon from '../../../../public/icons/cart.svg';
import {Link, useNavigate} from "react-router-dom";

export const CartButton = observer(() => {
  const navigate = useNavigate();

  return (
    <Link className={styles.cartButton} to={EPages.ORDER} onClick={() => navigate(EPages.ORDER)}>
      <img src={cartIcon} alt={'Cart icon'} height={17} width={25}/>
      <div className={styles.cartButton__badge}>{cartStore.itemCount}</div>
    </Link>
  );
});