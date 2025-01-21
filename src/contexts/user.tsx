import React, { createContext, useContext, useState } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";

type UserProviderProps = {
  children: React.ReactNode;
};

type UserType = {
  name: string;
  email: string;
} | null;

type UserContextType = {
  user: UserType;
  setUser: (userData: UserType) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: UserProviderProps) => {
  const storage = useLocalStorage();

  const [user, setUserState] = useState<UserType | null>(() => {
    return storage.getObject("user") as UserType | null;
  });

  const setUser = (userData: UserType | null) => {
    if (userData?.email) {
      storage.saveObject("user", userData as object);
    } else {
      storage.delete("user");
    }

    setUserState(userData);
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
};
