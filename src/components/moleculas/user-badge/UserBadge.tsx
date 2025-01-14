import styles from './UserBadge.module.scss';
import logoutIcon from "../../../../public/icons/logout.svg";
import {Button} from "../../atoms/button/Button.tsx";
import {useUser} from "../../../hooks/useUser.ts";
import {useMemo} from "react";

export const UserBadge = () => {
  const user = useUser();
  const handleLogout = () => {
    user.logout();
  }
  
  const userName = useMemo(() => {
    return user.info?.displayName ?? user.info?.email;
  }, [user.info])

  const avatarUrl = useMemo(() => {
    return user.info?.photoURL ?? `https://avatar.iran.liara.run/username?username=${user.info?.displayName?.replace(' ', '+')}`;
  }, [user.info])
  
  return (
    <div className={styles.userBadge}>
      <img src={avatarUrl} alt="User photo" className={styles.userBadge__image}/>
      <div>
        <div className={styles.userBadge__name}>{userName}</div>
        <div className={styles.userBadge__uid}>{user.info?.uid}</div>
      </div>
      <Button appearance={"alt"} size={"small"} className={styles.userBadge__logout} onClick={handleLogout}>
          <img width={16} height={16} src={logoutIcon} alt="Logout"/>
      </Button>
    </div>
  );
};