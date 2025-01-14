import { User } from "firebase/auth";
import React, {useEffect, useState} from "react";
import {ELocalStorageKeys} from "../@types/ELocalStorageKeys.ts";
import { AuthContext } from "../contexts/AuthContext.tsx";

export const AuthProvider = ({children}: {children: React.ReactElement}) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (user: User) => {
    setUser(user);
    localStorage.setItem(ELocalStorageKeys.USER, JSON.stringify(user));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(ELocalStorageKeys.USER);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem(ELocalStorageKeys.USER);
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{info: user, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};