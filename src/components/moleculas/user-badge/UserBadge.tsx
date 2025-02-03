import styles from './UserBadge.module.scss';
import logoutIcon from "../../../../public/icons/logout.svg";
import {Button} from "../../atoms/button/Button.tsx";
import {useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {removeUser, userSelector} from "../../../slices/AuthSlice.ts";
import {AppDispatch} from "../../../store.ts";

export const UserBadge = () => {
  const user = useSelector(userSelector);
  const dispatch = useDispatch<AppDispatch>();
  const handleLogout = () => {
    dispatch(removeUser());
  }
  
  const userName = useMemo(() => {
    return user?.displayName ?? user?.email;
  }, [user])

  const avatarUrl = useMemo(() => {
    return user?.photoURL ?? `https://avatar.iran.liara.run/username?username=${user?.displayName?.replace(' ', '+')}`;
  }, [user])
  
  return (
    <div className={styles.userBadge}>
      <img src={avatarUrl} alt="User photo" className={styles.userBadge__image}/>
      <div>
        <div className={styles.userBadge__name}>{userName}</div>
        <div className={styles.userBadge__uid}>{user?.uid}</div>
      </div>
      <Button appearance={"alt"} size={"small"} className={styles.userBadge__logout} onClick={handleLogout}>
          <img width={16} height={16} src={logoutIcon} alt="Logout"/>
      </Button>
    </div>
  );
};