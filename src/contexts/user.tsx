import React, { createContext, useContext, useState } from "react";

type UserProviderProps = {
  children: React.ReactNode;
};

type UserType = {
  name: string;
  email: string;
} | null;

type UserContextType = {
  user: UserType;
  setUser: React.Dispatch<React.SetStateAction<UserType>>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<UserType>(null);

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
