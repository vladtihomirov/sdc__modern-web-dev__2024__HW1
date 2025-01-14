import {createContext} from "react";
import {User} from "firebase/auth";


export type AuthContextProps = {
  info: User | null,
  login: (user: User) => void,
  logout: () => void
}

export const AuthContext = createContext<AuthContextProps>({
  info: null,
  login: () => {},
  logout: () => {}
});
