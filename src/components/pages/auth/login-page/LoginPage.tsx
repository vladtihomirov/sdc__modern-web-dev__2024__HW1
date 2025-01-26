import {signInWithEmailAndPassword, signInWithPopup, User} from "firebase/auth";
import {FormEvent, useState} from "react";
import {auth, githubProvider} from "../../../../../firebase.ts";
import styles from './LoginPage.module.scss';
import {Button} from "../../../atoms/button/Button.tsx";
import {Input} from "../../../atoms/input/Input.tsx";
import {useNavigate} from "react-router-dom";
import {EPages} from "../../../../@types/EPages.ts";
import githubIcon from '../../../../../public/icons/github.svg';
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../../store.ts";
import {saveUser} from "../../../../slices/AuthSlice.ts";

export const LoginPage = () => {
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("test12345");
  const [error, setError] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleAfterLogin = (user: User) => {
    dispatch(saveUser({
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    }));
    navigate(EPages.HOME);
  }

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      handleAfterLogin(user.user);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  const handleGithubLogin = async () => {
    setError("");
    try {
      const user = await signInWithPopup(auth, githubProvider);
      handleAfterLogin(user.user);
    } catch (err) {
      setError((err as Error).message);
    }
  }

  return (
    <div className={styles.loginPage}>
      <h1 className={styles.loginPage__title}>Log in</h1>
      <form onSubmit={handleLogin} className={styles.loginPage__form}>
        <div className={styles.loginPage__form__formField}>
          <label>Email</label>
          <Input
            type="email"
            placeholder="ex. vladtihomirov010203@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.loginPage__form__formField}>
          <label>Password</label>
          <Input
            type="password"
            placeholder="ex. test123"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className={styles.loginPage__form__actions}>
          <Button type="submit">Login</Button>
          <div className={styles.loginPage__form__actions__separator}></div>
          <Button onClick={handleGithubLogin} appearance={'alt'} className={styles.loginPage__form__actions__github}>
            <img width={32} height={32} src={githubIcon} alt="GitHub logo"/>
            Continue with GitHub
          </Button>
        </div>
        {error && <div className={styles.loginPage__form__error}>{error}</div>}
      </form>
    </div>
  );
};