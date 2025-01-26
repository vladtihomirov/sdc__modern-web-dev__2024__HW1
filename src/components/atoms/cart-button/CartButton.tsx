import styles from './CartButton.module.scss';
import {EPages} from "../../../@types/EPages.ts";
import cartIcon from '../../../../public/icons/cart.svg';
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {itemCountSelector} from "../../../slices/CartSlice.ts";

export const CartButton = () => {
  const navigate = useNavigate();
  const itemCount = useSelector(itemCountSelector);
  return (
    <Link className={styles.cartButton} to={EPages.ORDER} onClick={() => navigate(EPages.ORDER)}>
      <img src={cartIcon} alt={'Cart icon'} height={17} width={25}/>
      <div className={styles.cartButton__badge}>{itemCount}</div>
    </Link>
  );
};